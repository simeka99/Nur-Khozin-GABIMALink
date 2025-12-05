//const VERSION = "4.0.8";   // UBAH DI SINI AJA SETIAP UPDATE
const VERSION = "1.1.1";


// Register Service Worker
if ('serviceWorker' in navigator)
{
    navigator.serviceWorker.register(`/sw.js?v=${VERSION}`, { scope: '/' })
        .then(reg =>
        {
            const send = w => w?.postMessage({ type: 'SET_VERSION', version: VERSION });
            send(reg.active); send(reg.installing);
            reg.addEventListener('updatefound', () =>
            {
                const nw = reg.installing;
                if (nw) nw.addEventListener('statechange', () =>
                {
                    if (nw.state === 'activated') send(nw);
                });
            });
        });
}

// TAMPILKAN VERSI
document.addEventListener('DOMContentLoaded', () =>
{
    const el = document.getElementById('appVersion');
    if (el) el.textContent = VERSION;
});

// =============================================================================
//              ANDROID + iOS (2025) 
// =============================================================================
window.addEventListener('load', async () =>
{
    const urlParams = new URLSearchParams(location.search);

    // CASE 1: Android klasik (dari SW redirect ?action=process-share atau ?shared=1)
    if (urlParams.get('action') === 'process-share' || urlParams.get('shared') === '1')
    {
        history.replaceState({}, '', './');
        await processFromCache();
        return;
    }

    // CASE 2: iOS 17.4+ & Android modern → pakai launchQueue (PALING AKURAT)
    if ('launchQueue' in window)
    {
        launchQueue.setConsumer(async (launchParams) =>
        {
            if (!launchParams.files?.length) return;
            const fileHandle = launchParams.files[0];
            const file = await fileHandle.getFile();
            if (file.type.startsWith('image/'))
            {
                await triggerFileInput(file);
            }
        });
        return; // jangan lanjut ke cache kalau sudah pakai launchQueue
    }

    // CASE 3: Fallback — cek cache (untuk kasus lama)
    await processFromCache();
});

// FUNGSI UTAMA: MASUKKAN FILE KE #fileInput & JALANKAN OCR (SESUAI app.js KAMU)
async function triggerFileInput(file)
{
    document.getElementById('ocrStatus').textContent = 'Menerima struk dari share...';
    document.getElementById('ocrStatus').style.background = '#f59e0b';

    const dt = new DataTransfer();
    dt.items.add(file);
    document.getElementById('fileInput').files = dt.files;

    // Jalankan fungsi OCR kamu
    handleFileSelect({ target: { files: dt.files } });

    // Bersihkan URL kalau ada parameter
    if (location.search) history.replaceState({}, '', './');
}

async function processFromCache()
{
    try
    {
        const cache = await caches.open('share-data');
        const response = await cache.match('shared-image');
        if (!response) return;

        document.getElementById('ocrStatus').textContent = 'Menerima struk dari share...';
        document.getElementById('ocrStatus').style.background = '#f59e0b';

        const blob = await response.blob();
        const file = new File([blob], "shared-struk.jpg", { type: blob.type || 'image/jpeg' });

        await triggerFileInput(file);
        await cache.delete('shared-image');
    } catch (err)
    {
        console.error("Gagal baca cache share:", err);
    }
}

// Install banner & iOS guide (tetap jalan)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e =>
{
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBanner')?.style.setProperty('display', 'flex');
});
document.getElementById('installBtn')?.addEventListener('click', async () =>
{
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') document.getElementById('installBanner').style.display = 'none';
    deferredPrompt = null;
});
document.getElementById('closeInstall')?.addEventListener('click', () =>
{
    document.getElementById('installBanner').style.display = 'none';
});
if (/iPhone|iPad|iPod/.test(navigator.platform) && !navigator.standalone)
{
    setTimeout(() => document.getElementById('iosInstallGuide')?.style.setProperty('display', 'flex'), 4000);
}