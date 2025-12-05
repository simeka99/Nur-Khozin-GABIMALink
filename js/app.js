const CONFIG = {
    GROQ_API_KEY: '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',
    GROQ_MODEL: "meta-llama/llama-4-scout-17b-16e-instruct",
    GROQ_API_URL: 'https://api.groq.com/openai/v1/chat/completions',

    DEFAULT_INFO_TOKO: {
        nama: "PANDAWA 5758",
        alamat: "Tegalmunding Rt 009/006\n52273",
        telp: "",
        footer: "Simpan resi sebagai bukti\ntransaksi,  Semoga berkah. \n\n - TERIMA KASIH -"


    },
    BANKS: {
        Populer: ["BCA", "Mandiri", "BNI", "BRI", "BSI", "BJB", "Bank DKI", "Bank Jateng"],
        HIMBARA: ["BRI", "BNI", "Mandiri", "BTN"],
        Bank_Digital: ["SeaBank", "Bank Jago", "Jenius BTPN", "Bank Neo Commerce", "Allo Bank", "Blu by BCA", "Superbank", "LINE Bank", "Krom Bank"],
        Bank_Syariah: ["BSI", "Muamalat", "BRI Syariah", "BNI Syariah", "Bank Mega Syariah", "CIMB Niaga Syariah", "BJB Syariah"],
        Swasta_Nasional: ["CIMB Niaga", "Danamon", "Permata Bank", "OCBC NISP", "Panin Bank", "Bank Mega", "Maybank Indonesia", "UOB", "HSBC", "Citibank"],
        Bank_Daerah: ["Bank Jatim", "Bank Sumut", "Bank Nagari", "Bank Aceh Syariah", "Bank NTB Syariah", "Bank BPD Bali", "Bank Papua"],
        Lainnya: [
            "Bank Sinarmas", "Bank Bukopin", "BTPN", "Bank Ina", "Bank MNC", "Bank Victoria",
            "Bank Commonwealth", "Bank Woori Saudara", "Bank Nobu", "BPR KS", "BPR CIJ"
        ]
    },

    EWALLET: {
        Populer: ["DANA", "OVO", "GoPay", "ShopeePay", "LinkAja"],
        PayLater: ["GoPay PayLater", "OVO PayLater", "Shopee PayLater", "SPayLater", "DANA PayLater", "Traveloka PayLater", "Kredivo", "Akulaku"],
        Lainnya: ["AstraPay", "Blu by BCA", "Sakuku", "iSaku", "Jenius Pay", "Jago Pay", "Flip", "KasPro", "MotionPay", "Indodana", "Atome", "Home Credit", "Cicil"]
    },

    VA_PROVIDER: {
        Populer: ["PLN", "BPJS Kesehatan", "TELKOM", "INDIHOME", "PDAM", "PEGADAIAN"],
        Pulsa_PaketData: ["TELKOMSEL", "XL AXIATA", "INDOSAT", "TRI", "SMARTFREN"],
        Multifinance: ["Adira Finance", "BAF", "WOM Finance", "FIF", "MAF", "CSF"],
        E_Commerce: ["TOKOPEDIA", "SHOPEE", "LAZADA", "BUKALAPAK", "BLIBLI"],
        Gateway: ["MIDTRANS", "XENDIT", "DUITKU", "NICEPAY", "TRIPAY", "IPAYMU"],
        Lainnya: ["PGN", "Asuransi Prudential", "RS Siloam", "Universitas Indonesia", "Zakat", "SpeedCash"]
    },

    E_MONEY: {
        Populer: ["Flazz BCA", "e-Money Mandiri", "TapCash BNI", "BRIZZI BRI", "JakCard Bank DKI"],
        Lainnya: ["LinkAja", "Indomaret Card", "GazCard Pertamina", "T-Money Telkomsel", "ShopeePay", "GoPay"]
    },

    CICILAN: {
        Populer: [
            "Kredivo",
            "Akulaku",
            "Shopee PayLater",
            "Home Credit",
            "Kartu Kredit BCA",
            "Kartu Kredit Mandiri",
            "Kartu Kredit BRI",
            "Kartu Kredit BNI",
            "Adira Finance",
            "BAF",
            "FIF"
        ],

        PayLater_Marketplace: [
            "Shopee PayLater",
            "GoPay PayLater",
            "OVO PayLater",
            "Traveloka PayLater",
            "Kredivo",
            "Akulaku"
        ],

        Multifinance: [
            "Adira Finance",
            "BAF",
            "FIF",
            "WOM Finance",
            "Astra Credit Companies",
            "Mandiri Tunas Finance",
            "Toyota Astra Financial",
            "Transpacific Finance",
        ],

        // CUMA 6 KARTU KREDIT YANG PALING SERING DIPAKAI (sisanya jarang banget)
        Kartu_Kredit: [
            "Kartu Kredit BCA",
            "Kartu Kredit Mandiri",
            "Kartu Kredit BRI",
            "Kartu Kredit BNI",
            "Kartu Kredit CIMB Niaga",
            "Kartu Kredit Danamon"
        ]
    },
    OCR_PROMPT: `
        Ambil semua data text dari struk atau gambar yang di kirim harus 100% sesuai aslinya dalam bahasa indonesia, lalu tampilkan dalam json sesuai key atauu objec :
        ini key nya:
        {
            WAJIB PATUHI ATURAN DETEKSI JENIS BERIKUT (URUTAN SANGAT PENTING! Periksa dari atas ke bawah, ambil yang pertama cocok):
            1. Jika ada "DANA" / "OVO" / "GoPay" / "ShopeePay" / "LinkAja" di tujuan/penerima/Nama Pengakuisisi → "Top Up E-Wallet"
            2. Jika ada "e-money" / "Brizzi" / "TapCash" / "Flazz" / "e-Toll" → "Top Up E-Money"
            3. Jika ada minimal 3 dari kata ini: E-SAMSAT, E-SKKP, PKB, SWDKLLJ, No.Polisi, STNK → "E-Samsat"
            4. Jika ada "PLN" + "Token" atau 20 digit angka berurutan → "PLN Prepaid"
            5. Jika ada "PLN" + "Tagihan" / "Periode" / "Stand Meter" → "PLN Postpaid"
            6. Jika ada "Kartu Kredit" / "Credit Card" / "CC"  → "Bayar Cicilan"
            7. Jika ada "ADIRA" / "FIF" / "WOM" / "BAF" / "MCF" / "ACC" / "MAF" / "CSF" / "COLUMBIA" / "Mega Auto" / "Angsuran" / "Cicilan" → "Bayar Cicilan"
            8. Jika ada "PEGADAIAN" / "PDAM" / "TELKOM" / "BPJS" / "Virtual Account" / "Billing" / "BRIVA" di tujuan → "Pembayaran Virtual Account"
            9. Jika TIDAK masuk kategori 1-8 DAN ada bank (BCA, BRI, BNI, MANDIRI, BSI, CIMB, Permata, Danamon, Panin,TMRW Everyday account, dll) sebagai TUJUAN → "Transfer Antar Bank"

            //CONTOH PENTING:
            - Jika tidak ada data keynya lalu deteksi ketegori jenis transaksi, pengirim, penerima, tujuan
            - Transfer ke DANA → "Top Up E-Wallet" (BUKAN Transfer Antar Bank!)
            - Hati Hati Pemilihan Diksi Karena ada kata "Transfer Dana" di struk lain yang bukan E-Wallet, Contohnya TMRW/UOB ada kata "Transfer Dana" di struknya tapi itu bukan E-Wallet tapi Transfer Antar Bank, cari harus fokus cari nama Bank Tujuan nya Contoh BNI BRI MANDIRI dll
            - Khusu di TMRW/UOB "Top Up E-Wallet" -> "nama penerima" -> ambil dari kata "NAMA PELANGGAN" -> contoh : "DNID EXX NURXXXXX"
            - Khsusu di TMRW/UOB jika "nama_pengirim" == "TMRW Everyday Account", maka kosongkan saja -> "nama_pengirim" : " " --> Contoh : "TMRW Everyday Account" -> "nama_pengirim" : " "
            - Transfer ke SeaBank → "Transfer Antar Bank"
            - Struk TMRW/UOB dengan object "pengirim" dan "penerima" → tetap "Transfer Antar Bank"
            - Dan Khsusu di TMRW/UOB jangan baca Teks "Tujuan Transaksi"

            ISI TRANSAKSI WAJIB ADA :
            "jenis_transaksi": "",       // sesuai aturan di atas, contoh: Transfer Antar Bank | Top Up E-Wallet | Top Up E-Money | Pembayaran Virtual Account | Bayar Cicilan | PLN Prepaid | PLN Postpaid | E-Samsat |
            "bank_tujuan": "",           // BRI | BPR CIJ | SeaBank | DANA | OVO | GoPay | ShopeePay | LinkAja | PLN | PEGADAIAN | Telkomsel | XL | Indosat | Tri | Smartfren | e-money | Brizzi | TapCash | Flazz | Indomaret Card | dll
            "no_rekening": "",           // Cari : no. rekening | Kode Bayar | Kode Pembayaran | no. HP | ID pelanggan | nomor VA | No. Kartu | ID pengguna | --> Contoh : 43750100345537 | 15460*******503 | 4376xxxx98624724294 | (contoh kode bayar) -> 3222802511252319 atau "222260000092464" khsusus kode pembayaran VA
            "nama_pengirim": "",         // Cari : Dari atau From | Pengirim | Sumber Dana | Bayar dari | Rekening Sumber | Nama Nasabah |  -> > Y**GA | YOGA NURYANA | Yogi Herdiansyah | Kus...w.n |  YXXGI | DNID TUBx |
            "nama_penerima": "",         // Cari : Ke atau To  (Khusus SeaBank) | Nama | Nama penerima | Nama pelanggan | nama nasabah | nama customer | nama akun | nama tagihan | Nama Customer | Nama Rekening Tujuan | Tujuan (Khusus Dana, GoPay, ShopeePay)| Nama Pemilik | -> Y**GA | YOGA NURYANA | Yogi Herdiansyaj | Kus...w.n |  YXXGI | DNID TUBx  | Nama dari Cicilan dst
            "no_referensi": "",          // Cari : ID Transaksi | no. referensi | no. transaksi | no. billing | kode biller | Nomor Referal | Nomor Invoice |
            "nominal": 0,                // Total | Total Transaksi | Nominal | Jumlah | Jumlah Top Up | Nilai Transaksi | Jumlah Bayar | Nominal Tagihan | (contoh: 437400)
            "tanggal": "",               // 2 digit (contoh: 24)
            "bulan": "",                 // 2 digit (contoh: 11)
            "tahun": "",                 // 4 digit (contoh: 2025)
            "jam": "",                   // 2 digit, format 24 jam (contoh: 14)
            "menit": "",                 // 2 digit (contoh: 35)
            "detik": "",                 // 2 digit (contoh: 08)
            "admin_bank": "",             // biaya admin | biaya layanan (contoh: 2500 | 6500 | 10000)
            "status": "",                // SUKSES | GAGAL (cari kata: Berhasil | Sukses | Success | Gagal | Failed)
            
            // HANYA TAMBAHKAN JIKA ADA:
            "kode_pembayaran": "",      // khusus VA, contoh: 8801234567890123 | 3222802511252319
            "provider_cicilan": "",      // khusus cicilan, contoh: | Kartu Kredit BRI | Kartu Kredit BNI | Kartu Kredit Mandiri | Kartu Kredit BCA | Kartu Kredit | CIMB Niaga | Adira Finance | BAF | WOM Finance | FIF | ACC | MAF | Mega Auto | Columbia | Mandiri Tunas Finance | Toyota Astra Financial | Transpacific Finance |
            "no_kontrak": "",            // khusus cicilan, contoh: 303902731824  
            "tarif_daya": "",            // khusus PLN, contoh: R-1/900 VA | R-1/1300 VA
            "stand_meter": "",           // khusus PLN Postpaid, contoh: 2456 - 2678
            "periode": "",               // khusus PLN, contoh: November 2025
            "token": "",                 // khusus PLN Prepaid, 20 digit
            "kwh": "",                   // khusus PLN Prepaid, contoh: 65.4 kWh
            "id_pengguna": "",           // IDPEL PLN, contoh: 527100123456
            "angsuran_ke": "",           // khusus cicilan cari kata : Pembayaran Ke | Angsuran Ke |, contoh: 18 / 24
            "jatuh_tempo": "",           // khusus cicilan, contoh: 04 November 2025
            "nim": "",                   // khusus pendidikan/universitas
            "kode_jenis_bayar": "",      // khusus universitas, contoh: 001 | 002 | 101
            "nama_tagihan": "",          // nama merchant/tagihan, contoh: TOKOPEDIA | SHOPEE | MIDTRANS-AMARTHA | BPJS KESEHATAN
            "no_billing": "",            // nomor billing | NTB |  contoh: 20251857509843050013
            "minimum_bayar": 0,          // minimal pembayaran, biasanya 10000 atau 0
            "keterangan": ""             // catatan tambahan, contoh: SPP PENDAS | Pembayaran Tiket Pesawat | 
            "no_polisi": "",              // Kembaliin Format nya gini Contoh: Z 5573 SC | Z 1033 SA | Z 66 SH | Z 1 N
            "kode_bayar": "",             // Kode Bayar E-Samsat
            "warna_tnkb": "",             // PUTIH / HITAM / KUNING
            "merk_kendaraan": "",         // HONDA / YAMAHA / TOYOTA dll
            "jenis_kendaraan": "",        // SEPEDA MOTOR / MOBIL PENUMPANG dll
            "tipe_kendaraan": "",         // Contoh: H1B02N41L1 A/T
            "tahun_pembuatan": "",        // 2024 / 2020 dll
            "masa_berlaku_stnk": "",      // 14 Nov 2025 - 14 Nov 2026
            "nama_pemilik": "",          // Nama sesuai STNK
            "alamat_pemilik": "",         // Alamat lengkap pemilik
            "milik_ke": ""                // Milik Ke-1 / Milik Ke-2 dll
        
            //Aturan Khusus : 
            Khusus di E-Samsat jangan ambil data NTB ya yang dari Bank BJB
            Khusus SeaBank Cari Kata nya gini "SeaBank:901503836477" ->  "no_rekening : "901503836477" | "******0995"
            Cari No Qris dari Transfer Antar Perbankan -> BNI | BRI | Mandiri | BCA | BJB | dll , dan dari E-Walet -> DANA, GoPay, ShopeePay | Contoh : "BANK BNI: 9360000915042355717" -> No Qris "9360000915042355717" |  "GoPay: "9360091432741946614" -> No Qris "9360091432741946614" | ***************6614
            Penulisan Kartu Kredit Cukup gini aja ya Berlaku semua misal Kartu Kredit Bank Negara Indonesia --> Kartu Kredit BNI
        }
            `
};


const DINAMIS_CONFIG = {
    "Transfer Antar Bank": {
        tujuan: { label: "Bank Tujuan", placeholder: "Pilih bank tujuan", list: CONFIG.BANKS },
        noAkun: { label: "No. Rekening", placeholder: "Contoh: 1234567890" },
        namaPenerima: { show: true, label: "Nama Penerima", placeholder: "Nama sesuai rekening" },
        noRef: { show: true, placeholder: "Opsional" },
        keterangan: false,
        quickAdmin: [5000, 10000, 15000, 20000],
    },
    "Top Up E-Wallet": {
        tujuan: { label: "Provider", placeholder: "Pilih e-wallet", list: CONFIG.EWALLET },
        noAkun: { label: "No. Akun", placeholder: "Contoh: 081234567890" },
        namaPenerima: { show: true, label: "Nama Akun", placeholder: "Nama pemilik akun" },
        noRef: { show: true, placeholder: "Opsional" },
        keterangan: false,
        quickAdmin: [5000, 10000, 15000, 20000],
    },
    "Top Up E-Money": {
        tujuan: { label: "Provider", placeholder: "Pilih e-money", list: CONFIG.E_MONEY },
        noAkun: { label: "No. Kartu", placeholder: "Contoh: 6014 1234 5678 9012" },
        namaPenerima: { show: false },
        noRef: { show: true },
        keterangan: true,
        quickAdmin: [5000, 10000, 15000, 20000],
    },
    "Pembayaran Virtual Account": {
        tujuan: { label: "Provider", placeholder: "Pilih provider", list: CONFIG.VA_PROVIDER },
        noAkun: { label: "No. Virtual Account", placeholder: "Contoh: 8801234567890123" },
        namaPenerima: { show: true, label: "Nama Pengguna", placeholder: "Nama pelanggan" },
        noRef: { show: true, placeholder: "Opsional" },
        keterangan: true,
        quickAdmin: [5000, 10000, 15000, 20000],
    },
    "PLN Postpaid": {
        tujuan: { placeholder: "PLN Postpaid", disabled: true },
        noAkun: { label: "ID Pelanggan", placeholder: "Contoh: 521234567890" },
        namaPenerima: { show: true, label: "Nama Pengguna", placeholder: "Nama di tagihan" },
        noRef: { show: true },
        keterangan: true,
        quickAdmin: [5000, 10000, 15000, 20000],
        autoAdmin: 6000
    },
    "PLN Prepaid": {
        tujuan: { placeholder: "PLN Token", disabled: true },
        noAkun: { label: "No. Meter", placeholder: "Contoh: 12345678901" },
        namaPenerima: { show: false },
        noRef: { show: true },
        keterangan: false,
        quickAdmin: [5000, 10000, 15000, 20000]
    },
    "Bayar Cicilan": {
        tujuan: { label: "Provider", placeholder: "Pilih finance", list: CONFIG.CICILAN },
        noAkun: { label: "No. Kontrak", placeholder: "Contoh: 303902731824" },
        namaPenerima: { show: true, label: "Nama Nasabah", placeholder: "Nama debitur" },
        noRef: { show: true, placeholder: "Opsional" },
        keterangan: true,
        quickAdmin: [5000, 10000, 15000, 20000]
    },
    "E-Samsat": {
        tujuan: { label: "Wilayah", placeholder: "Jawa Barat", disabled: true },
        noAkun: { label: "No. Polisi", placeholder: "Contoh: Z 1234 ABC" },
        namaPenerima: { show: true, label: "Nama Pemilik", placeholder: "Nama di STNK" },
        noRef: { show: true, placeholder: "No. Rangka / Mesin" },
        keterangan: true,
        quickAdmin: [5000, 10000, 15000, 20000],
        autoAdminBank: () => 10000
    }
};


function updateDetailStruk()
{
    const data = generateStrukData();
    const cfg = DINAMIS_CONFIG[data.jenis] || {};

    // Bersihkan extra fields
    const extraContainer = document.getElementById('extraFieldsContainer');
    extraContainer.innerHTML = '';

    const addField = (label, value, placeholder = "") =>
    {
        if (!value || value === '' || value === '-') return; // JANGAN PAKAI "-" SAMA SEKALI
        const div = document.createElement('div');
        div.className = 'form-group';
        div.innerHTML = `
            <label class="form-label">${label}</label>
            <input type="text" class="form-input" value="${value}" placeholder="${placeholder}" readonly>
        `;
        extraContainer.appendChild(div);
    };

    // === TUJUAN ===
    const groupTujuan = document.getElementById('groupTujuan');
    if (cfg.tujuan && !["PLN Postpaid", "PLN Prepaid", "E-Samsat"].includes(data.jenis))
    {
        groupTujuan.style.display = 'block';
        document.getElementById('labelTujuan').textContent = cfg.tujuan.label || 'Tujuan';
        const input = document.getElementById('tujuanInput');
        input.value = data.tujuan || '';
        input.placeholder = data.tujuan ? '' : (cfg.tujuan.placeholder || 'Pilih tujuan');
    } else
    {
        groupTujuan.style.display = 'none';
    }

    // === NO AKUN UTAMA ===
    const noAkunMain = document.getElementById('groupNoAkunMain');
    const jenisNoDouble = ["Bayar Cicilan", "PLN Prepaid", "PLN Postpaid", "E-Samsat"];
    if (jenisNoDouble.includes(data.jenis))
    {
        noAkunMain.style.display = 'none';
    } else
    {
        noAkunMain.style.display = 'block';
        document.getElementById('labelNoAkun').textContent = cfg.noAkun?.label || 'No. Akun';
        const input = document.getElementById('noAkun');
        input.value = data.noAkun || '';
        input.placeholder = data.noAkun ? '' : (cfg.noAkun?.placeholder || 'Masukkan nomor');
    }

    // === NAMA PENERIMA ===
    const groupNamaPenerima = document.getElementById('groupNamaPenerima');
    if (cfg.namaPenerima?.show !== false)
    {
        groupNamaPenerima.style.display = 'block';
        document.getElementById('labelNamaPenerima').textContent = cfg.namaPenerima?.label || 'Nama Penerima';
        const input = document.getElementById('namaPenerima');
        input.value = data.namaPenerima || '';
        input.placeholder = data.namaPenerima ? '' : (cfg.namaPenerima?.placeholder || 'Masukkan nama');
    } else
    {
        groupNamaPenerima.style.display = 'none';
    }


    // === SUMBER DANA / NAMA PENGIRIM — FINAL & SUPER AMAN ===
    document.getElementById('groupNamaPengirim').style.display = 'block';

    const selPengirim = document.getElementById('namaPengirim');

    // Pastikan semua nama dari daftarPengirim ada di dropdown
    daftarPengirim.forEach(nama =>
    {
        if (!Array.from(selPengirim.options).some(opt => opt.value === nama))
        {
            selPengirim.add(new Option(nama + (nama === defaultPengirim ? ' (default)' : ''), nama));
        }
    });

    // Tentukan nama pengirim yang harus dipilih
    let namaYangDipilih = '';

    // 1. Prioritas utama: yang sudah dipilih user di dropdown (jangan diganti!)
    const currentValue = selPengirim.value?.trim();
    if (currentValue && currentValue !== '' && currentValue !== 'Pilih atau ketik nama')
    {
        namaYangDipilih = currentValue;
    }
    // 2. Kalau belum ada pilihan → pakai dari data struk (bisa dari OCR)
    else if (data.namaPengirim && data.namaPengirim.trim() !== '')
    {
        namaYangDipilih = data.namaPengirim.trim();
    }
    // 3. Kalau masih kosong → pakai default
    else if (defaultPengirim && defaultPengirim.trim() !== '')
    {
        namaYangDipilih = defaultPengirim.trim();
    }
    // 4. Paling akhir → nama toko
    else
    {
        namaYangDipilih = infoToko.nama;
    }

    // Set nilai dropdown ke yang benar
    selPengirim.value = namaYangDipilih;

    // Kalau namaYangDipilih belum ada di dropdown → tambahkan otomatis
    if (namaYangDipilih && !Array.from(selPengirim.options).some(o => o.value === namaYangDipilih))
    {
        selPengirim.add(new Option(namaYangDipilih, namaYangDipilih));
        selPengirim.value = namaYangDipilih;
    }

    // === NO REF ===
    document.getElementById('groupNoRef').style.display = (cfg.noRef?.show !== false) ? 'block' : 'none';
    const noRefInput = document.getElementById('noRef');
    noRefInput.value = data.noRef || '';
    noRefInput.placeholder = data.noRef ? '' : (cfg.noRef?.placeholder || 'Opsional');

    // === KETERANGAN ===
    document.getElementById('groupKeterangan').style.display = cfg.keterangan ? 'block' : 'none';

    // === FIELD EKSTRA (HANYA KALAU ADA VALUE) ===
    if (data.jenis === "Bayar Cicilan")
    {
        const isKredit = (data.tujuan || "").toUpperCase().includes("KREDIT");
        addField(isKredit ? "No. Kartu" : "No. Kontrak", data.noAkun, cfg.noAkun?.placeholder);
        if (data.angsuranKe) addField("Angsuran Ke", data.angsuranKe, "Contoh: 12/24");
        if (data.jatuhTempo) addField("Jatuh Tempo", data.jatuhTempo, "Contoh: 15 Des 2025");
    }
    else if (data.jenis === "PLN Prepaid")
    {
        if (data.token && data.token.length >= 20)
        {
            const formatted = data.token.replace(/\s/g, '').match(/.{4}/g).join(' ');
            addField("Token Listrik", formatted);
        }
        addField("No. Meter", data.noAkun, cfg.noAkun?.placeholder);
        if (data.idPengguna) addField("ID Pengguna", data.idPengguna, "Contoh: 521234567890");
        if (data.namaPenerima) addField("Nama Pengguna", data.namaPenerima, "Nama di meter");
        if (data.kwh) addField("KWH", data.kwh, "Contoh: 65.4 kWh");
        if (data.tarifDaya) addField("Tarif", data.tarifDaya, "Contoh: R-1/900 VA");
    }
    else if (data.jenis === "PLN Postpaid")
    {
        addField("ID Pelanggan", data.noAkun, cfg.noAkun?.placeholder);
        if (data.tarifDaya) addField("Tarif/Daya", data.tarifDaya, "Contoh: R-1/1300 VA");
        if (data.standMeter) addField("Stand Meter", data.standMeter, "Contoh: 1234 - 5678");
        if (data.periode) addField("Periode", data.periode, "Contoh: Desember 2025");
    }
    else if (data.jenis === "E-Samsat")
    {
        if (data.no_polisi) addField("No. Polisi", data.no_polisi.toUpperCase(), "Contoh: Z 1234 ABC");
        if (data.alamat_pemilik) addField("Alamat", data.alamat_pemilik);
        if (data.milik_ke) addField("Milik Ke", data.milik_ke);
        if (data.merk_kendaraan) addField("Merk", data.merk_kendaraan);
        if (data.jenis_kendaraan) addField("Jenis", data.jenis_kendaraan);
        if (data.tipe_kendaraan) addField("Tipe", data.tipe_kendaraan);
        if (data.tahun_pembuatan) addField("Tahun Pembuatan", data.tahun_pembuatan);
        if (data.warna_tnkb) addField("Warna TNKB", data.warna_tnkb);
        if (data.masa_berlaku_stnk) addField("Masa Berlaku STNK", data.masa_berlaku_stnk);
        addField("Kode Bayar", data.noAkun, "Contoh: 123456789012");
        if (data.no_billing) addField("NTB", data.no_billing);
    }

    // Quick Admin Buttons
    const qb = document.getElementById('quickAdminButtons');
    qb.innerHTML = '';
    (cfg.quickAdmin || [5000, 10000, 15000]).forEach(v =>
    {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'btn btn-small btn-outline';
        b.textContent = (v / 1000) + 'K';
        b.onclick = () =>
        {
            document.getElementById('biayaAdmin').value = formatNumber(v);
            calculateTotal();
        };
        qb.appendChild(b);
    });

    if (data.jenis === "PLN Postpaid" && cfg.autoAdmin)
    {
        document.getElementById('biayaAdmin').value = formatNumber(cfg.autoAdmin);
    }

    calculateTotal();
}

// ====================================
// MODAL PILIH TUJUAN — 100% DINAMIS SESUAI JENIS TRANSAKSI
// ====================================
function openTujuanModal()
{
    const jenis = document.getElementById('jenisTransaksi').value;
    const cfg = DINAMIS_CONFIG[jenis];

    if (!cfg || !cfg.tujuan || !cfg.tujuan.list)
    {
        showToast("Tidak ada daftar untuk jenis ini");
        return;
    }

    const title = document.getElementById('modalTujuanTitle');
    const list = document.getElementById('bankList');
    const search = document.getElementById('bankSearch');
    const noResult = document.getElementById('noResult');

    title.textContent = cfg.tujuan.label || "Pilih Tujuan";
    list.innerHTML = '';
    search.value = '';
    noResult.style.display = 'none';

    const data = cfg.tujuan.list;

    for (const [category, items] of Object.entries(data))
    {
        const cat = document.createElement('div');
        cat.className = 'bank-category';
        cat.textContent = category;
        list.appendChild(cat);

        const grid = document.createElement('div');
        grid.className = 'bank-grid';

        const itemArray = Array.isArray(items) ? items : Object.values(items);

        itemArray.forEach(item =>
        {
            const btn = document.createElement('div');
            btn.className = 'bank-btn';
            btn.textContent = item;
            btn.onclick = () =>
            {
                document.getElementById('tujuanInput').value = item;
                closeModal('bankModal');
                // Update label No. Akun sesuai jenis
                updateDetailStruk();
            };
            grid.appendChild(btn);
        });

        list.appendChild(grid);
    }

    // SEARCH
    search.onkeyup = () =>
    {
        const q = search.value.toLowerCase().trim();
        let found = 0;

        document.querySelectorAll('.bank-btn').forEach(btn =>
        {
            if (btn.textContent.toLowerCase().includes(q))
            {
                btn.style.display = '';
                found++;
            } else
            {
                btn.style.display = 'none';
            }
        });

        document.querySelectorAll('.bank-category').forEach(cat =>
        {
            const grid = cat.nextElementSibling;
            const visible = grid.querySelectorAll('.bank-btn[style=""], .bank-btn:not([style])').length;
            cat.style.display = visible > 0 ? '' : 'none';
        });

        noResult.style.display = (found === 0 && q !== '') ? 'block' : 'none';
    };

    openBankModal();
    setTimeout(() => search.focus(), 300);
}

// Pastikan tombol pilih tujuan hanya aktif kalau ada daftar
document.getElementById('btnPilihTujuan').onclick = () =>
{
    const jenis = document.getElementById('jenisTransaksi').value;
    const cfg = DINAMIS_CONFIG[jenis];
    if (cfg?.tujuan?.list)
    {
        openTujuanModal();
    } else
    {
        showToast("Tidak ada daftar untuk jenis ini");
    }
};

// Update saat ganti jenis transaksi
document.getElementById('jenisTransaksi').addEventListener('change', () =>
{
    updateDetailStruk();
    // Reset tujuan kalau jenis berubah
    const cfg = DINAMIS_CONFIG[document.getElementById('jenisTransaksi').value];
    if (cfg?.tujuan?.list)
    {
        document.getElementById('tujuanInput').value = '';
    }
});




// ====================================
// STATE GLOBAL
// ====================================
let device = null;
let characteristic = null;
let savedPrinterId = null;

// NAMA PENGIRIM
let daftarPengirim = JSON.parse(localStorage.getItem('gabimaPengirim')) || [];
let defaultPengirim = localStorage.getItem('gabimaDefaultPengirim') || '';

let infoToko = { ...CONFIG.DEFAULT_INFO_TOKO };
let riwayatStruk = JSON.parse(localStorage.getItem('gabimaRiwayat')) || [];
let ocrWaktu = null;
let ocrStatus = null;

let printSettings = JSON.parse(localStorage.getItem('gabimaPrintSettings')) || {
    previewBeforePrint: true,
    textCase: 'uppercase'   // lowercase | uppercase | capitalize
};


let toastTimeout = null;

// ====================================
// HELPER FUNCTIONS
// ====================================
function formatNumber(input)
{
    const str = String(input || '0').trim();
    const clean = str.replace(/\D/g, '');
    const num = parseInt(clean || '0', 10);
    return isNaN(num) ? '0' : num.toLocaleString('id-ID');
}

// ====================================
// TEXT CASE HELPER
// ====================================
function applyTextCase(text)
{
    if (!text) return '';
    switch (printSettings.textCase)
    {
        case 'lowercase': return text.toLowerCase();
        case 'uppercase': return text.toUpperCase();
        case 'capitalize':
        default: return text.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
    }
}

function titleCase(str)
{
    if (!str) return '';
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function getCurrentWaktu()
{
    const now = new Date();
    return {
        full: `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')} WIB`,
        date: String(now.getDate()).padStart(2, '0'),
        month: String(now.getMonth() + 1).padStart(2, '0'),
        year: now.getFullYear(),
        hour: String(now.getHours()).padStart(2, '0'),
        minute: String(now.getMinutes()).padStart(2, '0'),
        second: String(now.getSeconds()).padStart(2, '0')
    };
}



// ====================================
// NAMA PENGIRIM: CRUD & RENDER
// ====================================
function renderDaftarPengirim()
{
    const container = document.getElementById('daftarPengirim');
    if (!container) return;
    container.innerHTML = '';

    if (daftarPengirim.length === 0)
    {
        container.innerHTML = '<p style="color:var(--gray-600);font-size:0.875rem;text-align:center;margin:1rem 0;">Belum ada nama pengirim.</p>';
        return;
    }

    daftarPengirim.forEach((nama, index) =>
    {
        const isDefault = nama === defaultPengirim;
        const item = document.createElement('div');
        item.className = 'pengirim-item';
        item.innerHTML = `
            <div class="pengirim-nama">
                ${nama}
                ${isDefault ? '<span class="default-badge">default</span>' : ''}
            </div>
            <div class="pengirim-actions">
                ${!isDefault ? `<button onclick="setDefaultPengirim('${nama}')" title="Set Default">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                </button>` : ''}
                <button onclick="editPengirim(${index})" title="Edit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button onclick="hapusPengirim(${index})" title="Hapus">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#dc2626"><path d="M19 7l-.867 12.142A2.175 2.175 0 0116.138 21H7.862a2.175 2.175 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
            </div>
        `;
        container.appendChild(item);
    });
}

function tambahNamaPengirim()
{
    const input = document.getElementById('inputNamaPengirim');
    const nama = input.value.trim();
    if (!nama) return showToast('Masukkan nama pengirim!');
    if (daftarPengirim.includes(nama)) return showToast('Nama sudah ada!');

    daftarPengirim.push(nama);
    if (daftarPengirim.length === 1)
    {
        defaultPengirim = nama;
        localStorage.setItem('gabimaDefaultPengirim', nama);
    }
    simpanPengirim();
    input.value = '';
    renderDaftarPengirim();
    updateNamaPengirimOptions();
}

// EDIT PENGIRIM
function editPengirim(index)
{
    const namaLama = daftarPengirim[index];
    showPrompt("Edit Nama Pengirim", "Masukkan nama baru", namaLama, (namaBaru) =>
    {
        if (!namaBaru) return;
        if (daftarPengirim.includes(namaBaru)) return showToast("Nama sudah ada!");
        daftarPengirim[index] = namaBaru;
        if (defaultPengirim === namaLama)
        {
            defaultPengirim = namaBaru;
            localStorage.setItem('gabimaDefaultPengirim', namaBaru);
        }
        simpanPengirim();
        renderDaftarPengirim();
        updateNamaPengirimOptions();
        showToast("Nama berhasil diubah");
    });
}

// HAPUS PENGIRIM
function hapusPengirim(index)
{
    const nama = daftarPengirim[index];
    showConfirm("Hapus Nama Pengirim?", `"${nama}" akan dihapus dari daftar.`, (ok) =>
    {
        if (ok)
        {
            daftarPengirim.splice(index, 1);
            if (defaultPengirim === nama)
            {
                defaultPengirim = daftarPengirim[0] || '';
                localStorage.setItem('gabimaDefaultPengirim', defaultPengirim);
            }
            simpanPengirim();
            renderDaftarPengirim();
            updateNamaPengirimOptions();
            showToast("Nama pengirim dihapus");
        }
    });
}
function setDefaultPengirim(nama)
{
    defaultPengirim = nama;
    localStorage.setItem('gabimaDefaultPengirim', nama);
    renderDaftarPengirim();
}

function simpanPengirim()
{
    localStorage.setItem('gabimaPengirim', JSON.stringify(daftarPengirim));
}

// ====================================
// SELECT NAMA PENGIRIM: DINAMIS + KETIK MANUAL
// ====================================
function initNamaPengirimSelect()
{
    const input = document.getElementById('namaPengirim');
    if (!input) return;

    const select = document.createElement('select');
    select.id = 'namaPengirim';
    select.className = 'form-input';

    window.updateNamaPengirimOptions = () =>
    {
        const current = select.value;
        select.innerHTML = '<option value="">Pilih atau ketik nama</option>';
        daftarPengirim.forEach(nama =>
        {
            const opt = new Option(nama + (nama === defaultPengirim ? ' (default)' : ''), nama);
            select.add(opt);
        });
        select.value = current || defaultPengirim;
    };

    select.addEventListener('change', () =>
    {
        if (select.value === '')
        {
            const custom = prompt('Masukkan nama pengirim baru:');
            if (custom && !daftarPengirim.includes(custom.trim()))
            {
                daftarPengirim.push(custom.trim());
                if (!defaultPengirim) defaultPengirim = custom.trim();
                simpanPengirim();
                updateNamaPengirimOptions();
                select.value = custom.trim();
            }
        }
    });

    input.replaceWith(select);
    updateNamaPengirimOptions();
}

// ====================================
// OCR: AMBIL DATA + NAMA PENGIRIM DINAMIS
// ====================================

function fixCIJTime(bank, hourStr, minuteStr = '00', secondStr = '00')
{
    if (bank !== 'BPR CIJ') return hourStr;
    if (!hourStr) return hourStr;

    let h = parseInt(hourStr, 10);
    if (isNaN(h)) return hourStr;

    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour < 12 && h >= 1 && h <= 6) return String(h).padStart(2, '0');
    if (currentHour >= 15 && h >= 1 && h <= 11) return String(h + 12).padStart(2, '0');
    if (h === 0 || h === 12) return h === 0 ? '00' : '12';
    if (h >= 1 && h <= 11) return String(h + 12).padStart(2, '0');

    return String(h).padStart(2, '0');
}




// ====================================
// UPLOAD & OCR HANDLER
// ====================================
const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');
const processBtn = document.getElementById('processBtn');

dropArea.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleFileSelect);
['dragenter', 'dragover'].forEach(ev => dropArea.addEventListener(ev, e => { e.preventDefault(); dropArea.classList.add('dragover'); }));
['dragleave', 'drop'].forEach(ev => dropArea.addEventListener(ev, e => { e.preventDefault(); dropArea.classList.remove('dragover'); }));

dropArea.addEventListener('drop', e =>
{
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/'))
    {
        const dt = new DataTransfer();
        dt.items.add(file);
        fileInput.files = dt.files;
        handleFileSelect({ target: { files: [file] } });
    }
});



function handleFileSelect(e)
{
    let file;

    if (e.target && e.target.files)
    {
        file = e.target.files[0];
    }
    else if (e.dataTransfer && e.dataTransfer.files)
    {
        file = e.dataTransfer.files[0];
    }

    if (!file) return;

    fileName.textContent = file.name || "Struk dari WhatsApp";

    // Status langsung loading
    const ocrStatusEl = document.getElementById('ocrStatus');
    // ocrStatusEl.textContent = 'Sedang membaca struk...';
    ocrStatusEl.style.background = '#f59e0b';

    const reader = new FileReader();
    reader.onload = async function (ev)
    {
        await runOCR(ev.target.result);
    };
    reader.readAsDataURL(file);
}



// ====================================
// BENCHMARK OCR + TOAST CANTIK
// ====================================
function showOcrBenchmark(startTime, result, usage = {})
{
    const endTime = performance.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    let message = `OCR Selesai dalam ${duration}s`;

    if (usage.prompt_tokens)
    {
        message += ` • ${usage.prompt_tokens.toLocaleString()} token input`;
    }
    if (usage.completion_tokens)
    {
        message += ` • ${usage.completion_tokens} token output`;
    }
    if (usage.total_tokens)
    {
        message += ` • Total: ${usage.total_tokens.toLocaleString()} token`;
    }

    // Metode Bayar yang terdeteksi
    if (result.jenis_transaksi)
    {
        message += ` • ${result.jenis_transaksi}`;
    }

    showToast(message, 'success');
}


// FUNGSI BARU: BERSIHKAN SEMUA DATA SAAT UPLOAD GAMBAR BARU
function resetFormDanDetailStruk()
{
    // Reset semua input utama
    document.getElementById('jenisTransaksi').value = "Transfer Antar Bank";
    document.getElementById('tujuanInput').value = '';
    document.getElementById('noAkun').value = '';
    document.getElementById('namaPenerima').value = '';
    document.getElementById('namaPengirim').value = '';
    document.getElementById('noRef').value = '';
    document.getElementById('nominal').value = '0';
    document.getElementById('biayaAdmin').value = '0';
    document.getElementById('keterangan').value = '';
    document.getElementById('catatan').value = '';

    // Reset quick admin buttons
    document.getElementById('quickAdminButtons').innerHTML = '';

    // Reset total
    document.getElementById('totalDisplay').textContent = 'Rp 0';

    // Hapus semua field ekstra
    document.getElementById('extraFieldsContainer').innerHTML = '';

    // Reset OCR status
    const ocrStatusEl = document.getElementById('ocrStatus');
    ocrStatusEl.textContent = 'Vision Ready';
    ocrStatusEl.style.background = '#1d4ed8';

    // Reset variabel global
    window.lastOcrResult = {};
    ocrWaktu = null;
    ocrStatus = null;

    // Update tampilan (biar label & placeholder kembali default)
    updateDetailStruk();
    calculateTotal();
}



// ====================================
// OCR — FINAL & BENAR
// ====================================
async function runOCR(imageDataURL)
{
    resetFormDanDetailStruk();
    const ocrStatusEl = document.getElementById('ocrStatus');
    ocrStatusEl.textContent = 'Vision Processing...';
    ocrStatusEl.style.background = '#f59e0b';

    const startTime = performance.now();
    let result = {};

    try
    {
        const prompt = CONFIG.OCR_PROMPT;

        const response = await fetch(CONFIG.GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CONFIG.GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: CONFIG.GROQ_MODEL,
                messages: [{
                    role: "user",
                    content: [
                        { type: "text", text: prompt },
                        { type: "image_url", image_url: { url: imageDataURL } }
                    ]
                }],
                temperature: 0,
                top_p: 0.1,
                max_tokens: 6000
            })
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        const rawText = data.choices?.[0]?.message?.content || '';
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Tidak ada JSON valid dari OCR");

        result = JSON.parse(jsonMatch[0]);
        //console.log("HASIL OCR:", result);

        ocrStatusEl.textContent = 'Vision Selesai';
        ocrStatusEl.style.background = '#10b981';
        window.lastOcrResult = result || {};

        if (result.bank_tujuan === 'BPR CIJ' || result.bank_tujuan?.includes('CIJ'))
        {
            result.jam = fixCIJTime(
                'BPR CIJ',
                result.jam,
                result.menit || '00',
                result.detik || '00'
            );
        }
        if (result.jenis_transaksi && DINAMIS_CONFIG[result.jenis_transaksi])
            document.getElementById('jenisTransaksi').value = result.jenis_transaksi;
        document.getElementById('tujuanInput').value =
            result.provider_cicilan?.trim() ||
            result.tujuan?.trim() ||
            result.bank_tujuan ||
            '';

        let noAkunFinal = '';

        if (document.getElementById('jenisTransaksi').value === 'Bayar Cicilan' || result.provider_cicilan)
            noAkunFinal = result.no_kontrak || result.no_rekening || '';
        else if (result.jenis_transaksi === 'E-Samsat' && result.kode_bayar)
            noAkunFinal = result.kode_bayar;
        else
            noAkunFinal = result.no_rekening || '';

        document.getElementById('noAkun').value = noAkunFinal.trim();
        document.getElementById('namaPenerima').value =
            (result.nama_penerima || result.nama_pemilik || '').trim();
        document.getElementById('noRef').value = result.no_referensi || '';
        document.getElementById('nominal').value = formatNumber(result.nominal || 0);

        const selectPengirim = document.getElementById('namaPengirim');

        if (selectPengirim)
        {
            let namaPengirimFinal = '';
            if (result.nama_pengirim && result.nama_pengirim.trim() !== '')
                namaPengirimFinal = result.nama_pengirim.trim();
            else if (defaultPengirim && defaultPengirim.trim() !== '')
                namaPengirimFinal = defaultPengirim.trim();
            else
                namaPengirimFinal = infoToko.nama;

            const sudahAda = Array.from(selectPengirim.options).some(
                opt => opt.value === namaPengirimFinal
            );

            if (!sudahAda)
            {
                selectPengirim.add(new Option(namaPengirimFinal, namaPengirimFinal));
            }

            selectPengirim.value = namaPengirimFinal;
        }

        // === WAKTU OCR DENGAN FALLBACK KE WAKTU SAAT INI ===
        const currentTime = getCurrentWaktu();

        ocrWaktu = {
            date: (result.tanggal && result.tanggal.trim()) ? result.tanggal.padStart(2, '0') : currentTime.date,
            month: (result.bulan && result.bulan.trim()) ? result.bulan.padStart(2, '0') : currentTime.month,
            year: (result.tahun && result.tahun.trim()) ? result.tahun : currentTime.year,
            hour: (result.jam && result.jam.trim()) ? result.jam.padStart(2, '0') : currentTime.hour,
            minute: (result.menit && result.menit.trim()) ? result.menit.padStart(2, '0') : currentTime.minute,
            second: (result.detik && result.detik.trim()) ? result.detik.padStart(2, '0') : currentTime.second
        };

        ocrStatus = result.status?.toUpperCase() === 'GAGAL' ? 'GAGAL' : 'SUKSES';

        // Update UI
        setTimeout(() =>
        {
            updateDetailStruk();
            calculateTotal();
        }, 100);

    }
    catch (err)
    {
        console.error("OCR Error:", err);
        ocrStatusEl.textContent = 'OCR Gagal';
        ocrStatusEl.style.background = '#dc2626';
        showToast('OCR gagal: ' + err.message);
    }
    finally
    {
        setTimeout(() =>
        {
            ocrStatusEl.textContent = 'Vision Ready';
            ocrStatusEl.style.background = '#1d4ed8';
        }, 3000);
    }
}



function loadSettings()
{
    // TUNGGU DOM SIAP
    if (document.readyState === 'loading')
    {
        document.addEventListener('DOMContentLoaded', loadSettings);
        return;
    }

    // BACA DARI LOCALSTORAGE DULUAN
    const saved = localStorage.getItem('gabimaSettings');
    if (saved)
    {
        try
        {
            const parsed = JSON.parse(saved);
            // PAKAI ASSIGN LANGSUNG KE OBJEK GLOBAL (JANGAN BUAT BARU!)
            Object.assign(infoToko, parsed);
        } catch (e)
        {
            console.error("Gagal parse gabimaSettings:", e);
            // Kalau error, fallback ke default
            Object.assign(infoToko, CONFIG.DEFAULT_INFO_TOKO);
        }
    }
    else
    {
        // Kalau belum ada sama sekali, pakai default
        Object.assign(infoToko, CONFIG.DEFAULT_INFO_TOKO);
    }

    // ISI INPUT FORM
    const setValue = (id, value) =>
    {
        const el = document.getElementById(id);
        if (el) el.value = value || '';
    };

    setValue('namaToko', infoToko.nama);
    setValue('alamatToko', infoToko.alamat);
    setValue('telpToko', infoToko.telp);
    setValue('footerStruk', infoToko.footer);

    // Checkbox logo
    const cbLogo = document.getElementById('tampilkanLogo');
    if (cbLogo) cbLogo.checked = !!infoToko.tampilkanLogo;

    // Preview logo
    if (infoToko.logo && infoToko.tampilkanLogo !== false)
    {
        const preview = document.getElementById('logoPreview');
        const container = document.getElementById('logoPreviewContainer');
        if (preview) preview.src = infoToko.logo;
        if (container) container.style.display = 'block';
    }
    else
    {
        document.getElementById('logoPreviewContainer').style.display = 'none';
    }

    // PRINT SETTINGS (sama seperti sebelumnya)
    const savedPrint = localStorage.getItem('gabimaPrintSettings');
    if (savedPrint)
    {
        try { printSettings = JSON.parse(savedPrint); }
        catch (e) { printSettings = { previewBeforePrint: true, textCase: 'capitalize' }; }
    }

    const cbPreview = document.getElementById('previewBeforePrint');
    if (cbPreview) cbPreview.checked = printSettings.previewBeforePrint !== false;

    const textCaseValue = printSettings.textCase || 'capitalize';
    const radio = document.querySelector(`input[name="textCase"][value="${textCaseValue}"]`);
    if (radio) radio.checked = true;
}


function simpanInfoToko()
{
    infoToko.nama = document.getElementById('namaToko').value.trim();
    infoToko.alamat = document.getElementById('alamatToko').value.trim();
    infoToko.telp = document.getElementById('telpToko').value.trim();
    infoToko.footer = document.getElementById('footerStruk').value.trim();
    infoToko.tampilkanLogo = document.getElementById('tampilkanLogo').checked;

    localStorage.setItem('gabimaSettings', JSON.stringify(infoToko));
    showToast('Info toko berhasil disimpan!');
}

function hapusLogo()
{
    infoToko.logo = null;
    infoToko.tampilkanLogo = false;
    document.getElementById('tampilkanLogo').checked = false;
    localStorage.setItem('gabimaSettings', JSON.stringify(infoToko));
    document.getElementById('logoPreviewContainer').style.display = 'none';
    document.getElementById('logoInput').value = '';
}

document.getElementById('logoInput').addEventListener('change', (e) =>
{
    const file = e.target.files[0];
    if (file)
    {
        const reader = new FileReader();
        reader.onload = (ev) =>
        {
            infoToko.logo = ev.target.result;
            infoToko.tampilkanLogo = true;
            localStorage.setItem('gabimaSettings', JSON.stringify(infoToko));
            document.getElementById('logoPreview').src = infoToko.logo;
            document.getElementById('logoPreviewContainer').style.display = 'block';
            document.getElementById('tampilkanLogo').checked = true;
        };
        reader.readAsDataURL(file);
    }
});

// ====================================
// PRINT SETTINGS (NEW)
// ====================================
function savePrintSettings()
{
    printSettings.previewBeforePrint = document.getElementById('previewBeforePrint').checked;
    const selected = document.querySelector('input[name="textCase"]:checked');
    if (selected) printSettings.textCase = selected.value;
    localStorage.setItem('gabimaPrintSettings', JSON.stringify(printSettings));

    // LANGSUNG UPDATE PREVIEW KALAU SEDANG BUKA
    if (document.getElementById('previewModal').classList.contains('show') && window.currentStruk)
    {
        const div = document.getElementById('strukText');
        const pre = div.querySelector('pre');
        if (pre) pre.textContent = generateStrukText(window.currentStruk, CONFIG.PREVIEW_WIDTH);
    }
}

// ====================================
// FORM & CALCULATION
// ====================================
function formatNominal(input) { input.value = formatNumber(input.value); calculateTotal(); }
function formatAdmin(input) { input.value = formatNumber(input.value); calculateTotal(); }

function calculateTotal()
{
    const nominal = parseInt((document.getElementById('nominal').value || '0').replace(/\./g, '')) || 0;
    const admin = parseInt((document.getElementById('biayaAdmin').value || '0').replace(/\./g, '')) || 0;
    const total = nominal + admin;
    document.getElementById('totalDisplay').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function setBiayaAdmin(value)
{
    document.getElementById('biayaAdmin').value = formatNumber(value);
    calculateTotal();
}


// ====================================
// MODAL CONTROLS
// ====================================
function openBankModal()
{
    closeAllModals();
    document.getElementById('bankModal').classList.add('show');
}
function openHistoryModal() { closeAllModals(); document.getElementById('historyModal').classList.add('show'); renderHistory(); }

function closeModal(id) { document.getElementById(id).classList.remove('show'); }
function closeAllModals()
{
    ['bankModal', 'previewModal', 'settingsModal', 'historyModal'].forEach(id => closeModal(id));
}

document.querySelectorAll('.modal').forEach(modal =>
{
    modal.addEventListener('click', (e) =>
    {
        if (e.target === modal) closeModal(modal.id);
    });
});

function loadHistoryToForm(index)
{
    const item = riwayatStruk[index];

    // 1. Pilih Metode Bayar dulu → penting banget!
    const jenisSelect = document.getElementById('jenisTransaksi');
    if (jenisSelect)
    {
        jenisSelect.value = item.jenis || 'Transfer Antar Bank';
        updateDetailStruk(); // ini yang bikin field-field berubah sesuai jenis
    }

    // 2. Isi semua field yang ADA SEKARANG di form kamu
    const tujuan = document.getElementById('tujuanInput');
    if (tujuan) tujuan.value = item.tujuan || '';

    const noAkun = document.getElementById('noAkun');
    if (noAkun) noAkun.value = item.noAkun || '';

    const namaPenerima = document.getElementById('namaPenerima');
    if (namaPenerima) namaPenerima.value = item.namaPenerima || '';

    const namaPengirim = document.getElementById('namaPengirim');
    if (namaPengirim) namaPengirim.value = item.namaPengirim || '';

    const noRef = document.getElementById('noRef');
    if (noRef) noRef.value = item.noRef || '';

    const nominal = document.getElementById('nominal');
    if (nominal) nominal.value = item.nominal || '0';

    const biayaAdmin = document.getElementById('biayaAdmin');
    if (biayaAdmin) biayaAdmin.value = item.biayaAdmin || '0';

    // 3. Hitung ulang total
    calculateTotal();

    // 4. Tutup modal history
    closeModal('historyModal');

    // 5. Kasih tahu user
    showToast('Struk dimuat. Bisa langsung cetak atau edit lagi.', 'info');

    // 6. Scroll ke atas biar nyaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function renderHistory()
{
    const list = document.getElementById('historyList');
    list.innerHTML = '';

    if (riwayatStruk.length === 0)
    {
        list.innerHTML = '<p style="text-align:center;color:var(--gray-600);padding:3rem 1rem;">Belum ada riwayat struk.</p>';
        return;
    }

    riwayatStruk.slice().reverse().forEach((item, index) =>
    {
        const revIndex = riwayatStruk.length - 1 - index;
        const waktuTampil = item.waktu || '??/??/???? ??:??:?? WIB';

        const barisPengirim = `${item.namaPengirim || 'Anonim'} → ${item.namaPenerima || 'Anonim'}`;
        const barisBank = `${item.tujuan || '???'} (${item.noAkun || '-'})`;

        const div = document.createElement('div');
        div.className = 'history-item';
        div.style.cursor = 'pointer';
        div.onclick = (e) =>
        {
            if (e.target.closest('button')) return;
            loadHistoryToForm(revIndex);
        };

        div.innerHTML = `
            <div class="history-time">${waktuTampil}</div>
            <div class="history-title">${item.jenis} - ${item.total}</div>
            <div class="history-subtitle" style="font-size:0.875rem;color:var(--gray-600);margin-top:0.25rem;line-height:1.4;">
                ${barisPengirim}<br>
                ${barisBank}
            </div>
            <div class="history-actions">

                <!-- VIEW (ikon mata) → buka preview -->
                <button class="btn btn-outline" title="Lihat Struk" onclick="event.stopPropagation(); showHistoryPreview(${revIndex})">
                    <svg class="btn-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>

                <!-- HAPUS -->
                <button class="btn btn-delete" title="Hapus" onclick="event.stopPropagation(); deleteHistory(${revIndex})">
                    <svg class="btn-action-icon" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2.175 2.175 0 0116.138 21H7.862a2.175 2.175 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>

                <!-- CETAK ULANG -->
                <button class="btn btn-primary" title="Cetak" onclick="event.stopPropagation(); printHistory(${revIndex})">
                    <svg class="btn-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9V2h12v7"/>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                        <rect x="6" y="14" width="12" height="8"/>
                    </svg>
                </button>
            </div>
        `;
        list.appendChild(div);
    });
}

function showHistoryPreview(index)
{
    const item = riwayatStruk[index];
    window.currentStruk = item;
    showPreview(); // langsung pakai fungsi preview yang sudah ada
}

// 2. GANTI showHistoryDetail() — SEKARANG LOGO SELALU TAMPIL BAGUS DI HISTORY
function showHistoryDetail(index)
{
    const item = riwayatStruk[index];
    const strukDiv = document.getElementById('strukText');
    strukDiv.innerHTML = '';

    // LOGO — SELALU PAKAI BASE64 YANG DISIMPAN (HASILNYA SAMA PERSIS DENGAN PREVIEW)
    if (item.logo)
    {
        const img = document.createElement('img');
        img.src = item.logo;
        img.style.width = '180px';
        img.style.maxHeight = '100px';
        img.style.objectFit = 'contain';
        img.style.display = 'block';
        img.style.margin = '0 auto 12px auto';
        strukDiv.appendChild(img);
    }

    const pre = document.createElement('pre');
    pre.textContent = item.struk;
    pre.style.margin = '0';
    pre.style.fontSize = '13px';
    pre.style.lineHeight = '1.5';
    strukDiv.appendChild(pre);

    window.currentStruk = item; // penting buat print/download

    closeAllModals();
    document.getElementById('previewModal').classList.add('show');
}

function editHistory(index)
{
    loadHistoryToForm(index); // langsung pakai fungsi yang sudah benar
    // Hapus dari riwayat (biar nanti generate = update)
    riwayatStruk.splice(index, 1);
    simpanRiwayat();
    renderHistory();
}

// HAPUS SATU RIWAYAT
function deleteHistory(index)
{
    showConfirm("Hapus Struk Ini?", "Struk akan dihapus permanen dari riwayat.", (ok) =>
    {
        if (ok)
        {
            riwayatStruk.splice(index, 1);
            simpanRiwayat();
            renderHistory();
            showToast("Struk dihapus");
        }
    });
}

function simpanRiwayat()
{
    // Batasi hanya 10 riwayat terakhir
    if (riwayatStruk.length > 10)
    {
        riwayatStruk = riwayatStruk.slice(-10);
    }
    localStorage.setItem('gabimaRiwayat', JSON.stringify(riwayatStruk));
}

function deleteAllHistory()
{
    showConfirm("Hapus Semua Riwayat?", "Semua struk akan dihapus permanen!", (ok) =>
    {
        if (ok)
        {
            riwayatStruk = [];
            simpanRiwayat();
            renderHistory();
            showToast("Semua riwayat dihapus");
        }
    });
}
function shareHistory(index)
{
    const item = riwayatStruk[index];
    const text = item.struk;  // Atau generate text shareable
    if (navigator.share)
    {
        navigator.share({
            title: 'Struk GABIMA',
            text: text,
        }).catch(err => console.error('Share failed', err));
    } else
    {
        showToast('Fitur share tidak didukung. Copy manual: ' + text);
    }
}


// DETEKSI KALAU ADA GAMBAR YANG DIBAGIKAN KE GABIMA Link
window.addEventListener('load', async () =>
{
    // Cek apakah URL memiliki parameter ?action=process-share (Redirectan dari SW)
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('action') === 'process-share')
    {
        try
        {
            // 1. Buka cache tempat SW menyimpan file
            const cache = await caches.open('share-data');
            const response = await cache.match('shared-image');

            if (response)
            {
                document.getElementById('ocrStatus').textContent = 'Menerima struk dari share...';
                document.getElementById('ocrStatus').style.background = '#f59e0b';

                // 2. Ubah response cache menjadi Blob/File
                const blob = await response.blob();
                const file = new File([blob], "shared-struk.jpg", { type: blob.type });

                // 3. Masukkan ke input file
                const dt = new DataTransfer();
                dt.items.add(file);
                document.getElementById('fileInput').files = dt.files;

                // 4. Jalankan OCR
                handleFileSelect({ target: { files: dt.files } });

                // 5. Bersihkan cache & URL agar tidak diproses ulang saat refresh
                await cache.delete('shared-image');
                history.replaceState({}, '', './');
            }
        } catch (err)
        {
            console.error("Gagal mengambil file share:", err);
        }
    }
});


document.addEventListener('change', e =>
{
    if (e.target.name === 'textCase')
    {
        printSettings.textCase = e.target.value;
        localStorage.setItem('gabimaPrintSettings', JSON.stringify(printSettings));
        if (document.getElementById('previewModal').classList.contains('show') && window.currentStruk)
        {
            showPreview();
        }
    }
});



function generateStrukText(s, width = 32)
{
    const WIDTH = width;
    const cfg = DINAMIS_CONFIG[s.jenis] || {};

    const center = (text) =>
    {
        if (!text) return '';
        text = applyTextCase(text);
        const len = text.length;
        if (len >= WIDTH) return text;
        const pad = WIDTH - len;
        return ' '.repeat(Math.floor(pad / 2)) + text;
    };

    const moneyAlign = (label, value) =>
    {
        label = applyTextCase(label);
        const cleanLabel = String(label).substring(0, 13).padEnd(13, ' ');
        let angka = String(value).replace(/[^0-9]/g, "");
        angka = new Intl.NumberFormat('id-ID').format(Number(angka) || 0);
        const prefix = `${cleanLabel} : Rp `;
        return prefix + angka.padStart(WIDTH - prefix.length, ' ');
    };

    const wrapField = (label, value) =>
    {
        label = applyTextCase(label);
        const cleanLabel = String(label).substring(0, 13).padEnd(14, ' ');
        if (!value || value.trim() === '') value = '-';
        value = applyTextCase(value.trim());
        if (value.length <= WIDTH - 16) return `${cleanLabel}: ${value}\n`;
        let result = `${cleanLabel}: ${value.substring(0, WIDTH - 16)}\n`;
        let sisa = value.substring(WIDTH - 16);
        while (sisa)
        {
            const chunk = sisa.substring(0, WIDTH - 16);
            result += ' '.repeat(16) + chunk + '\n';
            sisa = sisa.substring(WIDTH - 16);
        }
        return result;
    };

    let struk = '';
    let detailLines = '';

    // HEADER
    struk += center(s.toko) + '\n';
    s.alamat.split('\n').forEach(l => { if (l.trim()) struk += center(l.trim()) + '\n'; });
    if (s.telp?.trim()) struk += center(s.telp.trim()) + '\n';
    struk += center(s.waktu) + '\n';
    struk += '-'.repeat(WIDTH) + '\n';
    struk += center("Struk") + '\n';
    struk += center(s.jenis || "Transfer") + '\n';
    struk += '-'.repeat(WIDTH) + '\n';

    // === ISI DETAIL SEMUA JENIS ===
    if (s.jenis === "Bayar Cicilan")
    {
        const ocr = window.lastOcrResult || {};
        const isKredit = (s.provider_cicilan || "").toUpperCase().includes("KREDIT");
        detailLines += wrapField("Provider", s.provider_cicilan);
        detailLines += wrapField(isKredit ? "No. Kartu" : "No. Kontrak", s.noAkun);
        if (s.namaPenerima) detailLines += wrapField(isKredit ? "Nama Pemilik" : "Nama Nasabah", s.namaPenerima);
        if (s.namaPengirim) detailLines += wrapField("Sumber Dana", s.namaPengirim);
        if (s.angsuranKe) detailLines += wrapField("Angsuran Ke", s.angsuranKe);
        if (s.jatuhTempo) detailLines += wrapField("Jatuh Tempo", s.jatuhTempo);
        if (s.noRef) detailLines += wrapField("No. Reff", s.noRef);
        detailLines += wrapField("Status", s.status);
        detailLines += moneyAlign("Nominal", s.nominal) + '\n';
        detailLines += moneyAlign("Admin Bank", s.adminBank || "0") + '\n';
        detailLines += moneyAlign("Biaya Admin", s.biayaAdmin) + '\n';
        detailLines += moneyAlign("Total", s.total) + '\n';
    }
    else if (s.jenis === "Pembayaran Virtual Account")
    {
        const ocr = window.lastOcrResult || {};
        detailLines += wrapField("Provider", s.tujuan);
        detailLines += wrapField("No. VA", s.noAkun);
        if (s.namaPenerima) detailLines += wrapField("Nama Pengguna", s.namaPenerima);
        if (s.namaPengirim) detailLines += wrapField("Sumber Dana", s.namaPengirim);
        if (s.nim) detailLines += wrapField("NIM", s.nim);
        if (s.kode_jenis_bayar) detailLines += wrapField("Kode Bayar", s.kode_jenis_bayar);
        if (s.no_billing) detailLines += wrapField("No. Billing", s.no_billing);
        if (s.noRef) detailLines += wrapField("No. Reff", s.noRef);
        if (s.keterangan) detailLines += wrapField("Keterangan", s.keterangan);
        detailLines += wrapField("Status", s.status);
        detailLines += moneyAlign("Nominal", s.nominal) + '\n';
        detailLines += moneyAlign("Admin Bank", s.adminBank || "0") + '\n';
        detailLines += moneyAlign("Biaya Admin", s.biayaAdmin) + '\n';
        detailLines += moneyAlign("Total", s.total) + '\n';
    }
    else if (s.jenis === "E-Samsat")
    {
        const ocr = window.lastOcrResult || {};
        if (s.no_polisi) detailLines += wrapField("No. Polisi", s.no_polisi.toUpperCase());
        if (s.namaPenerima) detailLines += wrapField("Nama Pemilik", s.namaPenerima);
        if (s.alamat_pemilik) detailLines += wrapField("Alamat", s.alamat_pemilik);
        if (s.milik_ke) detailLines += wrapField("Milik Ke", s.milik_ke);
        if (s.merk_kendaraan) detailLines += wrapField("Merk", s.merk_kendaraan);
        if (s.jenis_kendaraan) detailLines += wrapField("Jenis", s.jenis_kendaraan);
        if (s.tipe_kendaraan) detailLines += wrapField("Tipe", s.tipe_kendaraan);
        if (s.tahun_pembuatan) detailLines += wrapField("Tahun Pembuatan", s.tahun_pembuatan);
        if (s.warna_tnkb) detailLines += wrapField("Warna TNKB", s.warna_tnkb);
        if (s.masa_berlaku_stnk) detailLines += wrapField("Masa Berlaku STNK", s.masa_berlaku_stnk);
        detailLines += '-'.repeat(WIDTH) + '\n';
        detailLines += wrapField("Kode Bayar", ocr.kode_bayar);
        if (s.no_billing) detailLines += wrapField("NTB", s.no_billing);
        if (s.namaPengirim) detailLines += wrapField("Sumber Dana", s.namaPengirim);
        if (s.noRef) detailLines += wrapField("No. Reff", s.noRef);
        detailLines += wrapField("Status", s.status);
        detailLines += '-'.repeat(WIDTH) + '\n';
        detailLines += moneyAlign("Total Pajak", s.nominal) + '\n';
        detailLines += moneyAlign("Admin Bank", s.adminBank || "0") + '\n';
        detailLines += moneyAlign("Biaya Admin", s.biayaAdmin) + '\n';
        detailLines += moneyAlign("Total Bayar", s.total) + '\n';
    }
    else
    {
        // SEMUA JENIS LAIN (Transfer, E-Wallet, E-Money, PLN, dll)
        if (cfg.tujuan && s.tujuan && !["PLN Postpaid", "PLN Prepaid"].includes(s.jenis))
            detailLines += wrapField(cfg.tujuan.label || "Tujuan", s.tujuan);

        if (s.jenis === "Top Up E-Money")
        {
            let jenisKartu = s.tujuan || "e-Money";
            const u = jenisKartu.toUpperCase();
            if (u.includes("MANDIRI") || u.includes("E-MONEY")) jenisKartu = "Mandiri e-Money";
            else if (u.includes("BRIZZI") || u.includes("BRI")) jenisKartu = "BRI Brizzi";
            else if (u.includes("BNI") || u.includes("TAPCASH")) jenisKartu = "BNI TapCash";
            else if (u.includes("BCA") || u.includes("FLAZZ")) jenisKartu = "BCA Flazz";
            else if (u.includes("INDOMARET")) jenisKartu = "Indomaret Card";
            detailLines += wrapField("Jenis Kartu", jenisKartu);
            detailLines += wrapField("No. Kartu", s.noAkun);
        }
        else if (s.jenis === "PLN Prepaid")
        {
            if (s.token && s.token.length >= 20)
            {
                detailLines += center("STROOM/TOKEN") + '\n';
                detailLines += center(s.token.replace(/\s/g, '').match(/.{4}/g).join(' ')) + '\n';
                detailLines += '-'.repeat(WIDTH) + '\n';
            }
            detailLines += wrapField("No. Meter", s.noAkun);
            if (s.idPengguna) detailLines += wrapField("ID Pengguna", s.idPengguna);
            if (s.namaPenerima) detailLines += wrapField("Nama Pengguna", s.namaPenerima);
            if (s.tarifDaya) detailLines += wrapField("Tarif", s.tarifDaya);
            if (s.kwh) detailLines += wrapField("KWH", s.kwh);
        }
        else if (s.jenis === "PLN Postpaid")
        {
            detailLines += wrapField("ID Pelanggan", s.noAkun);
            if (s.namaPenerima) detailLines += wrapField("Nama Pengguna", s.namaPenerima);
            if (s.tarifDaya) detailLines += wrapField("Tarif/Daya", s.tarifDaya);
            if (s.standMeter) detailLines += wrapField("Stand Meter", s.standMeter);
            if (s.periode) detailLines += wrapField("Periode", s.periode);
        }
        else
        {
            detailLines += wrapField(cfg.noAkun?.label || "No. Akun", s.noAkun);
            if (cfg.namaPenerima?.show !== false && s.namaPenerima)
                detailLines += wrapField(cfg.namaPenerima.label || "Nama Penerima", s.namaPenerima);
        }

        if (s.namaPengirim) detailLines += wrapField("Sumber Dana", s.namaPengirim);
        if (cfg.noRef?.show !== false && s.noRef) detailLines += wrapField("No. Reff", s.noRef);
        if (cfg.keterangan && s.keterangan) detailLines += wrapField("Keterangan", s.keterangan);
        detailLines += wrapField("Status", s.status);

        // TOTAL SELALU DI AKHIR
        detailLines += moneyAlign("Nominal", s.nominal) + '\n';
        detailLines += moneyAlign("Biaya Admin", s.biayaAdmin) + '\n';
        detailLines += moneyAlign("Total", s.total) + '\n';
    }

    // TAMBAHKAN SEMUA DETAIL KE STRUK
    struk += detailLines;

    // GARIS PENUTUP UTAMA (SETELAH TOTAL)
    struk += '-'.repeat(WIDTH) + '\n';

    // CATATAN DI BAWAH TOTAL — DENGAN GARIS SENDIRI
    if (s.catatan && s.catatan.trim() !== '')
    {
        struk += wrapField("CATATAN", s.catatan.trim().toUpperCase());
        struk += '-'.repeat(WIDTH) + '\n';
    }

    // SPASI SEBELUM FOOTER
    struk += '\n';

    // FOOTER
    s.footer.split('\n').forEach(line =>
    {
        if (line.trim()) struk += center(line.trim()) + '\n';
    });

    return struk.trimEnd() + '\n\r';
}

function generateStrukData(saveToHistory = false)
{
    let waktuTampil = ocrWaktu?.date
        ? `${ocrWaktu.date}/${ocrWaktu.month}/${ocrWaktu.year} ${ocrWaktu.hour}:${ocrWaktu.minute}:${ocrWaktu.second} WIB`
        : getCurrentWaktu().full;


    const jenis = document.getElementById('jenisTransaksi').value || 'Transfer Antar Bank';
    const ocr = window.lastOcrResult || {};

    const nominalInput = document.getElementById('nominal').value || '0';
    const nominalAngka = parseInt(nominalInput.replace(/\D/g, '')) || 0;
    let biayaAdminKita = parseInt((document.getElementById('biayaAdmin').value || '0').replace(/\D/g, '')) || 0;

    // ADMIN BANK — LOGIKA FINAL & PALING BENAR!
    let adminBank = 0;

    if (jenis === "Pembayaran Virtual Account" || jenis === "E-Samsat")
    {
        // PEMBAYARAN VA → OCR + 2500
        let ocrAdmin = 0;
        if (ocr.admin_bank && !isNaN(ocr.admin_bank))
        {
            ocrAdmin = parseInt(ocr.admin_bank);
        }
        adminBank = ocrAdmin;
        // adminBank = ocrAdmin + 2500;
    }

    else if (jenis === "Bayar Cicilan")
    {
        const provider = (document.getElementById('tujuanInput').value || '').toUpperCase().trim();
        const cicilan10k = ["ADIRA", "FIF", "WOM", "ACC", "OTTO", "MUF", "MANDIRI UTAMA FINANCE", "MTF"];

        if (cicilan10k.some(p => provider.includes(p)))
        {
            adminBank = 10000;
        }
        else
        {
            if (ocr.admin_bank && !isNaN(ocr.admin_bank))
            {
                adminBank = parseInt(ocr.admin_bank);
            }
        }
    }

    window.currentAdminBank = adminBank;

    // TOTAL = Nominal + Admin Bank + Biaya Admin Kita (manual)
    const totalAngka = nominalAngka + adminBank + biayaAdminKita;
    document.getElementById('totalDisplay').textContent = `Rp ${totalAngka.toLocaleString('id-ID')}`;



    // NAMA PENGIRIM — FINAL & BENAR SELAMANYA!
    let namaPengirimFinal = '';

    // 1. Prioritas tertinggi: yang dipilih user di dropdown (YOGI, BAYU, dll)
    const selectedPengirim = document.getElementById('namaPengirim')?.value?.trim();
    if (selectedPengirim && selectedPengirim !== '' && selectedPengirim !== 'Pilih atau ketik nama')
    {
        namaPengirimFinal = selectedPengirim;
    }
    // 2. Kalau user belum pilih apa-apa → coba dari OCR
    else if (ocr.nama_pengirim && ocr.nama_pengirim.trim() !== '' && ocr.nama_pengirim.trim().toLowerCase() !== 'null')
    {
        namaPengirimFinal = ocr.nama_pengirim.trim();
    }
    // 3. Kalau masih kosong → baru pakai default dari localStorage
    else if (defaultPengirim && defaultPengirim.trim() !== '')
    {
        namaPengirimFinal = defaultPengirim.trim();
    }
    // 4. Paling akhir → nama toko
    else
    {
        namaPengirimFinal = infoToko.nama;
    }

    const s = {

        toko: infoToko.nama,
        alamat: infoToko.alamat,  // ← SELALU ALAMAT TOKO! TIDAK PERNAH BERUBAH!
        telp: infoToko.telp,
        waktu: waktuTampil,
        jenis: jenis,
        tujuan: document.getElementById('tujuanInput').value || ocr.bank_tujuan || '',
        noAkun: document.getElementById('noAkun').value || ocr.no_rekening || ocr.no_pinjaman || ocr.kode_pembayaran || '',
        // noQris: document.getElementById('noQris').value || ocr.no_qris | '-',
        namaPenerima: document.getElementById('namaPenerima').value || ocr.nama_penerima || ocr.nama_pemilik || '',
        namaPengirim: namaPengirimFinal || '',
        noRef: document.getElementById('noRef').value || ocr.no_referensi || ocr.id_transaksi || '',
        keterangan: document.getElementById('keterangan')?.value || '',
        nominal: nominalInput,
        biayaAdmin: formatNumber(biayaAdminKita),
        total: `Rp ${totalAngka.toLocaleString('id-ID')}`,
        footer: infoToko.footer,
        status: ocrStatus || 'SUKSES',
        logo: infoToko.tampilkanLogo ? infoToko.logo : null,
        catatan: document.getElementById('catatan')?.value.trim() || '', // TAMBAHKAN


        // KHUSUS E-SAMSAT — PAKAI NAMA BARU: alamatPemilik (TIDAK GANGGU alamat toko!)
        no_polisi: ocr.no_polisi || '',
        kode_bayar: ocr.kode_bayar || '',
        warna_tnkb: ocr.warna_tnkb || '',
        merk_kendaraan: ocr.merk_kendaraan || '',
        jenis_kendaraan: ocr.jenis_kendaraan || '',
        tipe_kendaraan: ocr.tipe_kendaraan || '',
        tahun_pembuatan: ocr.tahun_pembuatan || '',
        masa_berlaku_stnk: ocr.masa_berlaku_stnk || '',
        alamat_pemilik: ocr.alamat_pemilik || '',     // tidak ganggu alamat toko!
        milik_ke: ocr.milik_ke || '',


        // KHUSUS BAYAR CICILAN
        provider_cicilan: document.getElementById('tujuanInput').value || ocr.provider_cicilan || '',
        angsuranKe: ocr.angsuran_ke || '',
        jatuhTempo: ocr.jatuh_tempo || '',
        adminBank: formatNumber(adminBank),

        // KHUSUS PEMBAYARAN VA
        nim: ocr.nim || '',
        kode_jenis_bayar: ocr.kode_jenis_bayar || '',
        no_billing: ocr.no_billing || '',
        nama_tagihan: ocr.nama_tagihan || '',

        // PLN DETAIL
        tarifDaya: ocr.tarif_daya || '',
        standMeter: ocr.stand_meter || '',
        periode: ocr.periode || '',
        token: ocr.token || '',
        kwh: ocr.kwh || '',
        idPengguna: ocr.id_pengguna || ''


    };

    const strukText = generateStrukText(s);
    const strukData = { ...s, struk: strukText, waktuISO: new Date().toISOString() };

    if (saveToHistory)
    {
        riwayatStruk = riwayatStruk.filter(item =>
            !(item.jenis === strukData.jenis &&
                item.noAkun === strukData.noAkun &&
                item.nominal === strukData.nominal)
        );
        riwayatStruk.push(strukData);
        if (riwayatStruk.length > 50) riwayatStruk = riwayatStruk.slice(-50); // batas wajar
        simpanRiwayat();
        renderHistory();
    }

    window.currentStruk = strukData;
    return strukData;
}

function showPreview(mode = 'preview')
{
    const data = window.currentStruk || generateStrukData();
    const div = document.getElementById('strukText');
    div.innerHTML = '';

    if (infoToko.tampilkanLogo && infoToko.logo)
    {
        const img = document.createElement('img');
        img.src = infoToko.logo;
        img.style.width = '200px';
        img.style.display = 'block';
        img.style.margin = '0 auto 10px';
        div.appendChild(img);
    }

    const pre = document.createElement('pre');
    pre.textContent = generateStrukText(data, CONFIG.PREVIEW_WIDTH);
    div.appendChild(pre);

    window.currentStruk = data;
    closeAllModals();
    document.getElementById('previewModal').classList.add('show');
}

// ====================================
// HANDLE PRINT ACTION (NEW: TOGGLE PREVIEW / DIRECT PRINT)
// ====================================
// ====================================
// HANDLE PRINT ACTION — DIPERBAIKI TOTAL (100% JALAN SETELAH OCR!)
async function handlePrintAction()
{
    // SELALU generate data struk dulu (baik dari OCR atau manual)
    const strukData = generateStrukData();  // ini yang penting!
    window.currentStruk = strukData;        // pastikan window.currentStruk terisi

    // Kalau setting preview aktif → tampilkan preview
    if (printSettings.previewBeforePrint)
    {
        showPreview();  // otomatis pakai window.currentStruk
    } else
    {
        // Langsung cetak tanpa preview
        if (!device || !device.gatt.connected)
        {
            const ok = await connectBluetoothPrinter();
            if (!ok) return;
        }
        await printBluetooth();
    }
}
// ====================================
// DOWNLOAD & PRINT
// ====================================
function downloadPNG()
{
    const node = document.querySelector('#strukText');
    html2canvas(node, { scale: 3, useCORS: true, backgroundColor: "#ffffff" }).then(canvas =>
    {
        const link = document.createElement("a");
        link.download = `struk_${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
    generateStrukData(true);
}

async function shareStruk()
{
    // Ambil tombol tanpa merusak ikon SVG
    const shareBtn = document.querySelector('button[onclick="shareStruk()"]');
    const htmlAsli = shareBtn ? shareBtn.innerHTML : null;

    // (Optional) kasih indikator loading tanpa mengubah ikon
    // Bisa tambahkan kecil saja
    // if (shareBtn) shareBtn.classList.add("loading");

    try
    {
        const node = document.getElementById('strukText');

        const canvas = await html2canvas(node, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff"
        });

        canvas.toBlob(async (blob) =>
        {
            const file = new File([blob], `struk-gabima-${Date.now()}.png`, { type: "image/png" });

            const shareData = {
                files: [file],
                title: 'Struk Transaksi',
                text: 'Berikut struk transaksi Anda.'
            };

            if (navigator.canShare && navigator.canShare(shareData))
            {
                try
                {
                    await navigator.share(shareData);
                    console.log('Berhasil dibagikan');
                }
                catch (err)
                {
                    if (err.name !== 'AbortError')
                    {
                        console.error('Share error:', err);
                        showToast('Gagal membagikan. Coba lagi.');
                    }
                }
            }
            else
            {
                showToast('Browser tidak mendukung share gambar. Download PNG lalu kirim manual.');
            }

            // Kembalikan tampilan tombol TANPA merusak ikon
            if (htmlAsli) shareBtn.innerHTML = htmlAsli;
            // if (shareBtn) shareBtn.classList.remove("loading");

        }, 'image/png');

    }
    catch (err)
    {
        console.error("Gagal render gambar:", err);
        showToast("Gagal memproses gambar struk.");

        // Restore tombol
        if (htmlAsli) shareBtn.innerHTML = htmlAsli;
        // if (shareBtn) shareBtn.classList.remove("loading");
    }

    generateStrukData(true);
}


async function connectBluetoothPrinter()
{
    // Kalau sudah ada device dan masih connected → langsung return true
    if (device && device.gatt.connected)
    {
        console.log("Printer sudah terkoneksi");
        return true;
    }

    // Kalau ada saved printer → coba reconnect dulu (silent)
    if (savedPrinterId)
    {
        await loadSavedPrinter();
        if (device && device.gatt.connected) return true;
    }

    // Kalau masih gagal → baru minta pairing manual
    try
    {
        device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['000018f0-0000-1000-8000-00805f9b34fb'] }],
            optionalServices: ['000018f0-0000-1000-8000-00805f9b34fb']
        });

        device.addEventListener('gattserverdisconnected', onDisconnected);

        const server = await device.gatt.connect();
        const service = await server.getPrimaryService('000018f0-0000-1000-8000-00805f9b34fb');
        characteristic = await service.getCharacteristic('00002af1-0000-1000-8000-00805f9b34fb');

        // Simpan printer
        savedPrinterId = device.id;
        localStorage.setItem('gabimaPrinter', JSON.stringify({
            name: device.name,
            id: device.id
        }));

        console.log("Printer baru terkoneksi:", device.name);
        return true;

    } catch (error)
    {
        console.error("Bluetooth error:", error);
        showToast('Gagal konek printer: ' + error.message);
        return false;
    }
}

async function generateEscPosLogo(base64Image)
{
    return new Promise((resolve) =>
    {
        const img = new Image();
        img.onload = function ()
        {
            const WIDTH_PX = 384; // 58mm
            const scale = WIDTH_PX / img.width;

            const canvas = document.createElement("canvas");
            canvas.width = WIDTH_PX;
            canvas.height = img.height * scale;

            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imgData.data;

            const header = [0x1D, 0x76, 0x30, 0x00]; // GS v 0 raster
            const widthL = canvas.width / 8;
            const widthH = 0;
            const heightL = canvas.height & 0xFF;
            const heightH = (canvas.height >> 8) & 0xFF;

            const out = [...header, widthL, widthH, heightL, heightH];

            for (let y = 0; y < canvas.height; y++)
            {
                for (let x = 0; x < canvas.width; x += 8)
                {
                    let byte = 0;
                    for (let bit = 0; bit < 8; bit++)
                    {
                        const idx = ((y * canvas.width) + (x + bit)) * 4;
                        const r = pixels[idx];
                        const g = pixels[idx + 1];
                        const b = pixels[idx + 2];
                        const gray = (r + g + b) / 3;

                        byte <<= 1;
                        if (gray < 128) byte |= 1;
                    }
                    out.push(byte);
                }
            }

            resolve(Uint8Array.from(out));
        };

        img.src = base64Image;
    });
}


// =======================================================
// FUNGSI UTAMA: CETAK STRUK BLUETOOTH (PAKAI '\n')
// =======================================================
async function printBluetooth()
{
    if (!device || !device.gatt.connected)
    {
        const ok = await connectBluetoothPrinter();
        if (!ok) return;
    }

    // === CETAK LOGO ===
    if (infoToko.tampilkanLogo && infoToko.logo)
    {
        // CENTER
        await characteristic.writeValue(Uint8Array.from([0x1B, 0x61, 0x01]));

        let logoBytes = await generateEscPosLogo(infoToko.logo);
        await writeChunks(logoBytes);

        // RESET + LEFT
        await characteristic.writeValue(Uint8Array.from([0x1B, 0x40]));
        await characteristic.writeValue(Uint8Array.from([0x1B, 0x61, 0x00]));

        // ENTER
        //await sendToPrinter(new TextEncoder().encode("\n"));
        // await characteristic.writeValue(Uint8Array.from([0x0A]));
        await sendToPrinter(new TextEncoder().encode("\r\n"));

    }

    // === CETAK ISI STRUK ===
    const lines = window.currentStruk.struk.split("\n");

    if (lines.length > 0)
    {
        // === NAMA TOKO BOLD ===
        await characteristic.writeValue(Uint8Array.from([0x1B, 0x45, 0x01])); // Bold ON
        await printLine(lines[0]);
        await characteristic.writeValue(Uint8Array.from([0x1B, 0x45, 0x00])); // Bold OFF

        // === SISA STRUK ===
        for (let i = 1; i < lines.length; i++)
        {
            await printLine(lines[i]);
        }
    }

    await sendToPrinter(new TextEncoder().encode("\r\n"));
    // await characteristic.writeValue(Uint8Array.from([0x0A])); // 3x ENTER
    // === AKHIR: ENTER 3x + CUT ===
    //await sendToPrinter(new TextEncoder().encode("\n\r"));
    // await characteristic.writeValue(Uint8Array.from([0x1D, 0x56, 0x00])); // Full cut
    generateStrukData(true);
    showToast("Struk berhasil dicetak!", "success");
}

// =======================================================
// FUNGSI CETAK BARIS (PAKAI '\n' SESUAI PERMINTAAN)
// =======================================================
// GANTI FUNGSI printLine() dan printBluetooth() seperti ini:
async function printLine(text)
{
    // Paksa CR + LF (0x0D 0x0A) → ini yang paling patuh di semua printer China
    const encoded = new TextEncoder().encode(text + '\r\n');
    await sendToPrinter(encoded);
}

// SEND CHUNKED DATA KE PRINTER
async function sendToPrinter(bytes)
{
    const chunk = 160;
    for (let i = 0; i < bytes.length; i += chunk)
    {
        await characteristic.writeValue(bytes.slice(i, i + chunk));
        await new Promise(r => setTimeout(r, 20));
    }
}

async function writeChunks(bytes)
{
    const size = 180; // aman untuk printer BLE
    for (let i = 0; i < bytes.length; i += size)
    {
        let chunk = bytes.slice(i, i + size);
        await characteristic.writeValue(chunk);
        await new Promise(r => setTimeout(r, 10));
    }
}

// 4. DOWNLOAD & SHARE DARI HISTORY → 100% SAMA DENGAN PREVIEW STRUK
async function downloadHistoryItem(index)
{
    const item = riwayatStruk[index];
    window.currentStruk = item;               // penting!
    showPreview();                            // buka preview (tapi invisible)

    // Tunggu sampai preview selesai dirender
    await new Promise(r => setTimeout(r, 300));

    const node = document.getElementById('strukText');
    if (!node) return showToast('Gagal render struk');

    html2canvas(node, { scale: 3, useCORS: true, backgroundColor: '#ffffff' }).then(canvas =>
    {
        const a = document.createElement('a');
        a.download = `struk_${Date.now()}.png`;
        a.href = canvas.toDataURL('image/png');
        a.click();
        closeAllModals(); // tutup preview lagi
    }).catch(() =>
    {
        showToast('Gagal download gambar');
        closeAllModals();
    });
}

async function shareHistoryItem(index)
{
    const item = riwayatStruk[index];
    window.currentStruk = item;
    showPreview();

    await new Promise(r => setTimeout(r, 300));

    const node = document.getElementById('strukText');
    if (!node) return showToast('Gagal render struk');

    html2canvas(node, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas =>
    {
        canvas.toBlob(blob =>
        {
            if (!blob) return showToast('Gagal buat gambar');
            const file = new File([blob], "struk.png", { type: "image/png" });
            if (navigator.canShare && navigator.canShare({ files: [file] }))
            {
                navigator.share({ files: [file], title: 'Struk Transaksi', text: 'Struk dari TK BINTANG JAYA' });
            } else
            {
                showToast('Browser tidak dukung share gambar');
            }
            closeAllModals();
        });
    }).catch(() =>
    {
        showToast('Gagal share gambar');
        // closeAllModals();
    });
}

// 4. printHistory() — DIPASTIKAN BISA PRINT ULANG
async function printHistory(index)
{
    if (!device || !device.gatt.connected)
    {
        const ok = await connectBluetoothPrinter();
        if (!ok) return;
    }

    const item = riwayatStruk[index];
    window.currentStruk = item;

    // Cetak logo kalau ada
    if (item.logo)
    {
        let logoBytes = await generateEscPosLogo(item.logo);
        await characteristic.writeValue(Uint8Array.from([0x1B, 0x61, 0x01]));
        await writeChunks(logoBytes);
        await characteristic.writeValue(Uint8Array.from([0x1B, 0x61, 0x00]));
        await characteristic.writeValue(Uint8Array.from([0x1B, 0x40]));
        await characteristic.writeValue(Uint8Array.from([0x0A]));
    }

    await sendToPrinter(new TextEncoder().encode(item.struk));
    await sendToPrinter(Uint8Array.from([0x1D, 0x56, 0x00]));

    showToast("Struk berhasil dicetak ulang!");
}

function setActivePage(page)
{
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const activeItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (activeItem) activeItem.classList.add('active');
    closeAllModals();
}

// ====================================
// LOAD SAVED PRINTER + AUTO RECONNECT (SILENT)
// ====================================
async function loadSavedPrinter()
{
    const saved = localStorage.getItem('gabimaPrinter');
    if (!saved) return;

    const printerInfo = JSON.parse(saved);
    savedPrinterId = printerInfo.id;

    try
    {
        // Coba reconnect tanpa UI (watchAdvertisements biar bisa reconnect saat out of range)
        device = await navigator.bluetooth.requestDevice({
            filters: [{ namePrefix: printerInfo.name?.slice(0, 10) || '' }],
            optionalServices: ['000018f0-0000-1000-8000-00805f9b34fb'],
            acceptAllDevices: false
        });

        // Tambahkan event biar kalau disconnect → otomatis coba reconnect
        device.addEventListener('gattserverdisconnected', onDisconnected);

        const server = await device.gatt.connect();
        const service = await server.getPrimaryService('000018f0-0000-1000-8000-00805f9b34fb');
        characteristic = await service.getCharacteristic('00002af1-0000-1000-8000-00805f9b34fb');

        console.log("Printer otomatis tersambung kembali:", device.name);
    } catch (err)
    {
        console.log("Gagal reconnect otomatis (mungkin printer mati)", err);
        // Jangan hapus savedPrinterId, biar tetap nyoba lagi nanti
    }
}

function onDisconnected()
{
    console.log("Printer terputus, mencoba reconnect...");
    // Delay sedikit biar tidak spam
    setTimeout(loadSavedPrinter, 3000);
}

// RESET PRINTER
function resetPrinter()
{
    showConfirm("Lupakan Printer Bluetooth?", "Printer yang tersimpan akan direset.", (ok) =>
    {
        if (ok)
        {
            if (device && device.gatt.connected) device.gatt.disconnect();
            device = null; characteristic = null; savedPrinterId = null;
            localStorage.removeItem('gabimaPrinter');
            showToast("Printer berhasil dilupakan");
        }
    });
}

// === TAMPILKAN VERSI DI PENGATURAN ===
function updateVersionDisplay()
{
    const el = document.getElementById('appVersion');
    if (el)
    {
        el.textContent = VERSION;
    }
}

// Panggil setiap kali buka settings
function openSettingsModal()
{
    closeAllModals();
    document.getElementById('settingsModal').classList.add('show');
    loadSettings();
    document.getElementById('inputNamaPengirim').value = '';
    updateVersionDisplay();  // Tambah baris ini
}


// ========= FUNGSI POPUP CANTIK =========
function showConfirm(title, message, callback)
{
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    document.getElementById('customConfirm').classList.add('show');

    const ok = document.getElementById('confirmOk');
    const cancel = document.getElementById('confirmCancel');

    const cleanup = () =>
    {
        ok.onclick = null; cancel.onclick = null;
        document.getElementById('customConfirm').classList.remove('show');
    };

    ok.onclick = () => { cleanup(); callback(true); };
    cancel.onclick = () => { cleanup(); callback(false); };
}

function showPrompt(title, placeholder, value = '', callback)
{
    document.querySelector('#customPrompt .modal-header').textContent = title;
    const input = document.getElementById('promptInput');
    input.placeholder = placeholder;
    input.value = value;
    document.getElementById('customPrompt').classList.add('show');
    setTimeout(() => input.focus(), 100);

    const ok = document.getElementById('promptOk');
    const cancel = document.getElementById('promptCancel');

    const cleanup = () =>
    {
        ok.onclick = null; cancel.onclick = null;
        document.getElementById('customPrompt').classList.remove('show');
    };

    ok.onclick = () =>
    {
        const val = input.value.trim();
        if (val === '')
        {
            input.style.borderColor = '#ef4444';
            setTimeout(() => input.style.borderColor = '', 1500);
            return;
        }
        cleanup();
        callback(val);
    };
    cancel.onclick = () => { cleanup(); callback(null); };
}




function showToast(msg, type = 'info')
{
    const el = document.getElementById("toastNotify");

    // KALAU ELEMENT BELUM ADA → CUKUP LOG, TIDAK ERROR!
    if (!el)
    {
        console.warn("Toast element tidak ditemukan! Pesan:", msg);
        return;
    }

    // Reset dulu
    el.className = 'toast-base';
    el.textContent = msg || '';

    // Tambah tipe (success | warning | error | info)
    if (type && ['success', 'warning', 'error', 'info'].includes(type))
    {
        el.classList.add(type);
    }

    // Munculkan
    el.classList.add('show');

    // Hapus otomatis setelah 3.2 detik
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() =>
    {
        if (el) el.classList.remove('show');
    }, 3200);
}


// ====================================
// INIT
// ====================================
document.addEventListener('DOMContentLoaded', () =>
{
    updateDetailStruk()
    updateVersionDisplay();
    loadSettings();

    calculateTotal();
    renderHistory();
    initNamaPengirimSelect(); // ← PASTIKAN DIPANGGIL
    renderDaftarPengirim();
});