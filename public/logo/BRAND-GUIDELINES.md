# Nisrina Zalfa Qarirah — Brand Identity Guidelines

> Panduan identitas visual resmi dan standar penggunaan logo untuk personal branding **Nisrina Zalfa Qarirah** (Fisika Material · QA, R&D, Lab Testing & Quantitative Analysis).

---

## 1. Konsep & Anatomi Logo

- **Filosofi & Ide Utama:**  
  Logo mengintegrasikan prinsip kristalografi fisika material—kisi kisi heksagonal (*Hexagonal Close-Packed / HCP unit cell*) dengan sudut presisi $120^\circ$ dan $60^\circ$—yang secara kohesif membentuk monogram tiga inisial nama: **N**, **Z**, dan **Q**.
- **Karakter Visual:**  
  *Warm, Calm, Precise, Elegant, Intellectual*. Merepresentasikan ketelitian sains kuantitatif laboratorium tanpa jatuh ke dalam klise umum (tanpa gambar atom melayang atau tabung reaksi kartunal).
- **Varian Format Master:**
  1. **Primary Horizontal Lockup (`source/nisrina-horizontal-*.svg`):** Tata letak standar untuk header website, dokumen resmi, *curriculum vitae*, kop surat, dan presentasi penelitian.
  2. **Stacked / Centered Lockup (`source/nisrina-stacked-*.svg`):** Tata letak vertikal untuk kartu nama fisik, *ID badge*, profil media sosial, dan materi cetak berorientasi vertikal.
  3. **Symbol Only (`source/nisrina-symbol-*.svg`):** Tanda ikonik mandiri untuk avatar, stiker lab, atau aplikasi berskala kecil hingga medium.
  4. **Small-Scale Symbol / Favicon (`source/nisrina-symbol-small.svg`):** Versi kompensasi optik dengan ketebalan garis yang dinaikkan (22px vs 15px) khusus untuk ukuran $16\text{ px} - 32\text{ px}$ agar kisi tetap tajam dan tidak pudar.
  5. **Wordmark Only (`source/nisrina-wordmark-only.svg`):** Tipografi nama dan sub-deskripsi murni dalam format path vektor.

---

## 2. Ruang Aman (Clear Space)

Untuk mempertahankan keterbacaan (*legibility*) dan wibawa visual, logo wajib dikelilingi oleh ruang aman minimum di setiap sisinya.

$$\text{Zona Ruang Aman} \ge 1X$$

- **Nilai $1X$:** Setara dengan tinggi huruf kapital (*Cap-height*) dari nama "Nisrina" pada wordmark (atau sepertiga tinggi total simbol kristal).
- **Aturan:** Tidak boleh ada teks lain, batas tepi dokumen (*margin*), gambar, atau elemen grafis apapun yang memasuki zona $1X$ ini.

---

## 3. Ukuran Minimum Penggunaan (Minimum Size)

| Format Logo | Layar Digital (Screen) | Media Cetak (Print) | Catatan Khusus |
|---|---|---|---|
| **Horizontal Lockup** | Lebar $\ge 110\text{ px}$ | Lebar $\ge 28\text{ mm}$ | Subtitle tetap terbaca jelas |
| **Stacked Lockup** | Tinggi $\ge 72\text{ px}$ | Tinggi $\ge 20\text{ mm}$ | Ideal untuk kartu nama & badge |
| **Symbol (Standard)** | Ukuran $\ge 48\text{ px}$ | Ukuran $\ge 10\text{ mm}$ | Menggunakan file `nisrina-symbol-*.svg` |
| **Symbol (Small / Favicon)** | $16\text{ px} - 32\text{ px}$ | $5\text{ mm} - 9\text{ mm}$ | **Wajib** memakai `nisrina-symbol-small.svg` |

---

## 4. Palet Warna Resmi (Color Palette)

Identitas Nisrina Zalfa Qarirah dibangun di atas palet warna yang tenang, akademis, dan hangat:

| Nama Warna | Peran | HEX | RGB | CMYK | Pantone (Pendekatan) |
|---|---|---|---|---|---|
| **Deep Navy** | Warna Utama / Ink | `#233B5D` | `35, 59, 93` | `62, 37, 0, 64` | Pantone 534 C |
| **Steel Blue** | Sekunder / Subtitle | `#52769B` | `82, 118, 155` | `47, 24, 0, 39` | Pantone 7697 C |
| **Warm Ivory** | Background / Latar Terang | `#F4F2EC` | `244, 242, 236` | `0, 1, 3, 4` | Pantone Warm Gray 1 C |
| **Muted Sand** | Aksen Hangat | `#C49A76` | `196, 154, 118` | `0, 21, 40, 23` | Pantone 7515 C |
| **Pure White** | Reversal / Kontras Gelap | `#FFFFFF` | `255, 255, 255` | `0, 0, 0, 0` | White |
| **Pure Black** | Cetak Monokrom / Fax | `#000000` | `0, 0, 0` | `0, 0, 0, 100` | Process Black C |

### Pasangan Latar Belakang yang Disetujui (Approved Background Pairings)
1. **Color on Warm Ivory / White:** Menggunakan `nisrina-*-color.svg` pada latar belakang Warm Ivory (`#F4F2EC`) atau putih bersih.
2. **Reversed White on Deep Navy:** Menggunakan `nisrina-*-white.svg` pada latar belakang Deep Navy (`#233B5D`) atau latar belakang gelap pekat.
3. **Solid Black on White:** Menggunakan `nisrina-*-black.svg` pada dokumen fotokopi, surat resmi B/W, stempel, atau faktur laboratorium.
4. **Pada Foto Dokumentasi / Lab:** Gunakan versi putih pada area foto yang gelap dan tenang, atau letakkan logo di dalam *container tile* berbentuk kartu Warm Ivory.

---

## 5. Sistem Tipografi (Typography)

Semua file SVG master lockup telah dikonversi menjadi **kurva vektor murni (Bézier paths)**, sehingga logo akan selalu tampil sempurna tanpa bergantung pada instalasi font lokal.

Untuk materi desain eksternal (website, dokumen portofolio, proposal, dan slide presentasi), gunakan pasangan tipografi berikut:
- **Headings / Judul:** *Plus Jakarta Sans*, *Outfit*, atau *Inter* (SemiBold 600 / Bold 700).
- **Body Text / Paragraf:** *Inter*, *Public Sans*, atau *Roboto* (Regular 400 / Medium 500).
- **Web Safe Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

---

## 6. Larangan Penggunaan (Misuse / Don'ts)

Integritas logo harus selalu dijaga:
- ❌ **Jangan mendistorsi rasio:** Dilarang menarik, memipihkan, atau mengubah aspect ratio logo.
- ❌ **Jangan memutar posisi:** Logo harus selalu tegak vertikal pada orientasi unit cell $60^\circ / 120^\circ$.
- ❌ **Jangan menambahkan efek dekoratif:** Hindari penambahan bayangan (*drop shadows*), garis tepi (*strokes/outlines* berlebih), atau gradien warna yang tidak terdaftar.
- ❌ **Jangan mengubah warna secara acak:** Selalu gunakan kode warna yang telah ditetapkan.
- ❌ **Jangan merekonstruksi wordmark:** Jangan mencoba mengetik ulang wordmark dengan sembarang font komputer.
- ❌ **Jangan menempatkan di atas background ramai:** Pastikan tingkat kontras rasio minimal memenuhi standar WCAG AA ($\ge 4.5:1$).

---

## 7. Panduan Struktur Direktori File Kit

Direktori `nisrina-logo-kit/` diorganisir sebagai berikut:

```
nisrina-logo-kit/
├── BRAND-GUIDELINES.md               # Buku panduan lengkap (dokumen ini)
├── source/                           # Master SVG vektor murni (lossless)
│   ├── nisrina-horizontal-color.svg  # Master lockup horizontal (Deep Navy + Steel Blue)
│   ├── nisrina-horizontal-white.svg  # Master horizontal reversed untuk latar gelap
│   ├── nisrina-horizontal-black.svg  # Master horizontal 1-warna hitam
│   ├── nisrina-stacked-color.svg     # Master lockup vertikal / stacked
│   ├── nisrina-stacked-white.svg     # Master stacked reversed
│   ├── nisrina-stacked-black.svg     # Master stacked hitam
│   ├── nisrina-symbol-color.svg      # Simbol mandiri warna
│   ├── nisrina-symbol-white.svg      # Simbol putih (stroke terkompensasi 14px)
│   ├── nisrina-symbol-black.svg      # Simbol hitam
│   ├── nisrina-symbol-small.svg      # Simbol khusus skala kecil (stroke tebal 22px)
│   └── nisrina-wordmark-only.svg     # Wordmark teks murni vektor
├── digital/                          # Raster PNG transparan resolusi tinggi
│   ├── nisrina-horizontal-*-1200.png # PNG horizontal resolusi web & retina
│   ├── nisrina-horizontal-*-2400.png # PNG horizontal resolusi ultra 4K
│   ├── nisrina-stacked-*-840.png     # PNG stacked resolusi tinggi
│   ├── nisrina-symbol-*-1024.png     # PNG simbol 1024x1024px
│   └── nisrina-symbol-*-512.png      # PNG simbol 512x512px
├── web-icons/                        # Paket ikon website lengkap
│   ├── favicon.ico                   # Multi-resolution ICO (16, 32, 48 px)
│   ├── favicon.svg                   # Modern vector favicon
│   ├── favicon-16.png / 32 / 48      # Standard browser tab favicons
│   ├── apple-touch-icon.png          # iOS home screen bookmark (180x180 px)
│   ├── icon-192.png / 512            # PWA Android web app icons
│   ├── site.webmanifest              # Web manifest file siap pakai
│   └── head-snippet.html             # Baris tag HTML siap disalin ke <head> website
└── presentation/                     # Presentasi identitas & mockup industri
    ├── presentation.html             # Presentasi interaktif mandiri (buka di browser)
    ├── spec.json                     # Konfigurasi data presentasi
    └── slides/                       # Slide presentasi format PNG resolusi 1280x720
        ├── slide-01.png              # Cover slide
        ├── slide-02.png              # Brief & Adjectives
        ├── slide-03.png              # Final Identity Showcase & Scales
        ├── slide-04.png              # Real-world Mockups (Web, Favicon, Card, Badge, Social, App)
        └── slide-05.png              # Implementation Notes & Next Steps
```

---
*Dibuat secara presisi untuk Nisrina Zalfa Qarirah oleh Antigravity Design Studio.*
