let APP_VERSION = '1.0.0';
const getCacheName = () => `gabima-${APP_VERSION}`;

const ASSETS = [
    '/', '/index.html', '/manifest.json', '/css/style.css', '/js/app.js',
    '/assets/logo-192.png', '/assets/logo-512.png',
    'https://html2canvas.hertzen.com/dist/html2canvas.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

self.addEventListener('install', e => e.waitUntil(
    caches.open(getCacheName()).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
));

self.addEventListener('activate', e => e.waitUntil(
    caches.keys().then(keys => Promise.all(
        keys.map(k => k.startsWith('gabima-') && k !== getCacheName() && caches.delete(k))
    )).then(() => self.clients.claim())
));

self.addEventListener('message', e =>
{
    if (e.data?.type === 'SET_VERSION') APP_VERSION = e.data.version;
    if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

// === SHARE TARGET: ANDROID (POST) + iOS (GET + File Handling API) ===
self.addEventListener('fetch', e =>
{
    const url = new URL(e.request.url);

    // 1. ANDROID: Share via POST ke /share-target
    if (e.request.method === 'POST' && url.pathname === '/share-target')
    {
        e.respondWith(handleAndroidShare(e.request));
        return;
    }

    // 2. iOS & Android Fallback: Buka halaman utama + ada file dibawa
    if (e.request.mode === 'navigate')
    {
        e.respondWith((async () =>
        {
            // Selalu serve index.html
            const response = await caches.match('/index.html') || await fetch('/index.html');
            return response;
        })());
        return;
    }

    // 3. API Groq bypass
    if (url.href.includes('api.groq.com'))
    {
        e.respondWith(fetch(e.request));
        return;
    }

    // 4. Cache first untuk aset biasa
    e.respondWith(
        caches.match(e.request).then(r =>
            r || fetch(e.request).then(resp =>
            {
                if (resp.ok) caches.open(getCacheName()).then(c => c.put(e.request, resp.clone()));
                return resp;
            }).catch(() => caches.match('/index.html'))
        )
    );
});

async function handleAndroidShare(req)
{
    try
    {
        const form = await req.formData();
        const file = form.get('file') || form.get('files');
        if (file && file.type.startsWith('image/'))
        {
            const cache = await caches.open('share-data');
            await cache.put('shared-image', new Response(file, {
                headers: { 'Content-Type': file.type || 'image/jpeg' }
            }));
        }
        return Response.redirect('/index.html?shared=1', 303);
    } catch (err)
    {
        return Response.redirect('/index.html', 303);
    }
}