# Nisrina Zalfa Qarirah — Brand & Logo Guidelines (Potential Flux)

> **Identity System:** Personal Brand & Research Identity for Nisrina Zalfa Qarirah  
> **Domain:** Materials Physics (Fisika Material)  
> **Design Strategy:** Bold, Progresif, Dinamis, Presisi Ilmiah  

---

## 1. The Logo & Visual Concept

* **Core Mark:** **Potential Flux** (Monogram Letterform **N**)
* **Conceptual Rationale:** Dua tiang luar huruf N melengkung simetris ke luar `( \ )`, terinspirasi dari kurva sumur potensial energi (*potential well*) dan batas medan gaya stabil dalam fisika zat mampat (*condensed matter physics*). Diagonal tebal berkecepatan tinggi menjembatani kedua lengkungan, menghasilkan siluet yang kokoh, berwibawa, dan sarat muatan energi kinetik.
* **Production Craft:** Dibangun dengan kurva bezier geometris murni (*single continuous carved silhouette*, 11 anchor points, lulus audit produksi 100/100). Bebas dari artefak sambungan tumpang tindih (*zero overlapping seams*) dan tanpa tag live text.
* **Master Configurations:**
  1. **Primary Horizontal Lockup:** Simbol + Wordmark "NISRINA ZALFA QARIRAH" + Deskriptor "MATERIALS PHYSICS" (Rasio 2.58:1)
  2. **Stacked Lockup:** Simbol di atas, nama lengkap dan deskriptor terpusat di bawah (Rasio 1:1)
  3. **Symbol Only:** Monogram N mandiri (Rasio 1:1, dioptimalkan untuk avatar profil, app icon, dan favicon)
  4. **Wordmark Only:** Tipografi murni bergaris presisi

---

## 2. Directory Structure & File Map

Semua aset master dan varian tersimpan rapi pada direktori `nisrina-v2-logo-kit/`:

```
nisrina-v2-logo-kit/
├── master/
│   ├── symbol.svg                     # Master vektor simbol hitam (100/100 audit)
│   ├── symbol-color.svg               # Master simbol Cobalt Flux (#0A47B8)
│   ├── lockup-horizontal.svg          # Master horizontal lockup hitam
│   ├── lockup-horizontal-color.svg    # Master horizontal Cobalt + Slate
│   ├── lockup-stacked.svg             # Master stacked lockup hitam
│   ├── lockup-stacked-color.svg       # Master stacked Cobalt + Slate
│   └── wordmark.svg                   # Master wordmark vektor
├── variants/
│   ├── symbol/                        # Varian black, white, mono, square, app-icon + PNG (32px s.d. 1024px)
│   ├── horizontal/                    # Varian black, white, mono + PNG (600px s.d. 2400px)
│   └── stacked/                       # Varian black, white, mono + PNG (480px s.d. 1920px)
├── web-icons/                         # Paket favicon.ico, favicon.svg, apple-touch-icon, webmanifest
├── presentation/
│   ├── presentation.html              # Interactive client presentation board
│   ├── spec.json                      # Presentation specification data
│   └── slides/                        # Slide 01 - 05 PNG render (1920x1080)
└── BRAND-GUIDELINES.md                # Dokumen panduan ini
```

---

## 3. Clear Space (Ruang Bebas)

Pertahankan zona bebas hambatan di sekeliling logo sebesar **1 × X**, di mana **X** adalah ketebalan batang tiang lengkung luar simbol N (~34 px pada kanvas simbol 256 px).

* Jangan menempatkan elemen grafis lain, garis tepi, atau teks sekunder di dalam zona **1 × X**.
* Zona bebas ini berskala proporsional secara otomatis di segala ukuran media.

```
         +---------------------------------------+
         |               [ 1X ]                  |
         |        +---------------------+        |
  [ 1X ] | [ 1X ] |   POTENTIAL FLUX    | [ 1X ] | [ 1X ]
         |        +---------------------+        |
         |               [ 1X ]                  |
         +---------------------------------------+
```

---

## 4. Minimum Size & Favicon Specifications

| Versi Logo | Penggunaan Digital / Layar | Penggunaan Cetak / Fisik |
|---|---|---|
| **Horizontal Lockup** | Min. 120 px lebar | Min. 30 mm lebar |
| **Stacked Lockup** | Min. 90 px tinggi | Min. 22 mm tinggi |
| **Symbol Only (Standalone)** | Min. 24 px tinggi | Min. 6 mm tinggi |
| **Favicon & Web App Tile** | 16 px, 32 px, 48 px (file `favicon.ico` & `favicon.svg`) | — |

### Standar Favicon & Icon Web (Tiled Container):
Khusus untuk **Favicon browser tab, Apple Touch Icon, dan Web App Icons**:
* **Latar Belakang (Container):** Tile Cobalt Flux `#0A47B8` dengan sudut lengkung halus (*squircle* `rx="48"`).
* **Simbol N:** Putih bersih `#FFFFFF` (Potential Flux N) diskalakan sebesar 82% terpusat di dalam tile.
* **Keunggulan:** Kontras tinggi dan keterbacaan instan di atas mode terang (*light mode*) maupun mode gelap (*dark mode*) browser tab, bookmark bar, dan mobile home screen.
* **Paket File Siap Pakai:** Tersedia di folder `nisrina-v2-logo-kit/web-icons/` (termasuk `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, dan `site.webmanifest`).


---

## 5. Colour Palette (Palet Warna)

Palet warna dikembangkan untuk memproyeksikan kecerdasan sains tingkat tinggi, presisi material maju, dan otoritas riset.

| Nama Warna | Kode HEX | Nilai RGB | Nilai CMYK | Kode Pantone (Aproksimasi) | Fungsi / Peran |
|---|---|---|---|---|---|
| **Cobalt Flux** | `#0A47B8` | `10, 71, 184` | `95, 75, 0, 0` | Pantone 286 C | Warna Identitas Utama / Simbol |
| **Matter Obsidian** | `#0F172A` | `15, 23, 42` | `85, 70, 50, 65`| Pantone 433 C | Teks Utama / Dark Background |
| **Quantum Slate** | `#64748B` | `100, 116, 139`| `55, 40, 30, 10`| Pantone 7544 C | Deskriptor / Subtitle Teknis |
| **Pure Titanium** | `#FFFFFF` | `255, 255, 255`| `0, 0, 0, 0` | White | Latar Belakang / Reversed Art |

### Pasangan Latar Belakang yang Disetujui:
1. **Full Colour pada Putih (`#FFFFFF`):** Simbol Cobalt Flux `#0A47B8` dengan teks Matter Obsidian `#0F172A`.
2. **Reversed pada Matter Obsidian (`#0F172A` / `#000000`):** Simbol dan teks serba putih (`symbol-white.svg` / `lockup-horizontal-white.svg`).
3. **Monochrome Cobalt pada Putih:** Seluruh elemen dalam `#0A47B8` (`lockup-horizontal-mono-0a47b8.svg`).
4. **Pure Black pada Putih:** Khusus dokumen administratif, fotokopi, atau publikasi monokrom (`lockup-horizontal-black.svg`).

---

## 6. Typography System (Sistem Tipografi)

* **Primary Heading / Display:** Modern Geometric Grotesque (Segoe UI Semibold / Inter Bold / Neue Haas Grotesk). Huruf kapital dengan spasi renggang (*letter-spacing* +1.8) memancarkan ketegasan dan keanggunan akademis.
* **Technical Descriptor:** Clean Monospace / Sans (Segoe UI Regular / Inter Medium). Huruf kapital dengan spasi renggang (*letter-spacing* +4.5) untuk memberi hierarki ilmiah.
* **Catatan Produksi:** Semua file logo master telah dikonversi menjadi kurva vektor tertutup. Jangan mengetik ulang teks menggunakan font acak saat menggunakan logo.

---

## 7. Brand Misuse (Hal yang Dilarang)

Untuk menjaga konsistensi dan integritas identitas:
* ❌ **JANGAN** menarik atau memipihkan rasio logo (*do not stretch, squash, or distort proportions*).
* ❌ **JANGAN** memutar atau memiringkan simbol di luar sudut 0° tegak.
* ❌ **JANGAN** menambahkan efek bayangan (*drop shadows*), gradasi warna, efek glow, atau outline luar.
* ❌ **JANGAN** mengubah komposisi atau jarak relatif antara simbol N dan teks pada lockup master.
* ❌ **JANGAN** menempatkan logo di atas latar belakang foto yang ramai tanpa pelat kontras / container.
* ❌ **JANGAN** menggunakan warna di luar palet resmi yang telah ditetapkan.

---

## 8. Kontak & Pengelolaan Identitas

* **Pemilik Merek:** Nisrina Zalfa Qarirah
* **Fokus Riset:** Materials Physics / Fisika Material
* **Master Repository:** `nisrina-v2-logo-kit/`
