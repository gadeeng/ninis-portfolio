# Portfolio Website — Spesifikasi Build

Dokumen ini adalah spesifikasi lengkap untuk membangun website portofolio **Nisrina Zalfa Qarirah**. Ikuti urutan dan aturan di bawah. Jika ada konflik antara dokumen ini dan file yang sudah ada di repo (`Dock.tsx`, `usageDock.tsx`, `BG.tsx`, `usageBG.tsx`, `Parallax.md`), **file yang sudah ada adalah sumber kebenaran untuk API-nya**, dokumen ini sumber kebenaran untuk perilaku dan struktur.

---

## 1. Tech Stack

| Kebutuhan | Pilihan |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS + CSS dari komponen React Bits |
| Animasi | `motion` (dependency FlipCard, dipakai juga untuk dock & parallax) |
| Komponen UI | React Bits via shadcn registry |
| Font | `next/font/google`: **Uncial Antiqua**, **Montserrat** |

### Instalasi

```bash
# Komponen React Bits
npx shadcn@latest add @react-bits/TextType-TS-CSS
npx shadcn@latest add @react-bits/GradientText-TS-CSS
npx shadcn@latest add @react-bits/FlipCard-TS-CSS

# Dependency FlipCard
npm install motion
```

> Setelah instalasi, **baca file hasil generate** (props, tipe, import CSS) sebelum memakainya. Jangan menebak nama props.

---

## 2. Struktur Folder

```
src/
├── app/
│   ├── layout.tsx            # font, metadata, global provider
│   ├── page.tsx              # merakit semua section
│   └── globals.css
├── components/
│   ├── Dock.tsx              # SUDAH ADA — jangan diubah API-nya
│   ├── usageDock.tsx         # SUDAH ADA — referensi cara pakai Dock
│   ├── BG.tsx                # SUDAH ADA — background Home
│   ├── usageBG.tsx           # SUDAH ADA — referensi cara pakai BG
│   ├── PortfolioDock.tsx     # wrapper: isi item dock + logika posisi bawah/atas
│   ├── ParallaxSection.tsx   # wrapper transisi antar-section (ikuti Parallax.md)
│   ├── sections/
│   │   ├── Home.tsx
│   │   ├── AboutMe.tsx
│   │   ├── WorkExperience.tsx
│   │   ├── OrganizationalExperience.tsx
│   │   └── Footer.tsx
│   └── ui/                   # hasil generate shadcn / React Bits
│       ├── TextType/
│       ├── GradientText/
│       └── FlipCard/
├── lib/
│   └── sections.ts           # daftar id section (single source of truth)
└── public/
    └── profile.jpg           # foto profil (placeholder dulu)
```

### `lib/sections.ts`

```ts
export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "work", label: "Work Experience" },
  { id: "organization", label: "Organizational Experience" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
```

Id ini dipakai bersama oleh Dock, observer scroll, dan anchor section. Jangan hardcode ulang di tempat lain.

---

## 3. Font

Di `app/layout.tsx`:

```tsx
import { Montserrat, Uncial_Antiqua } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400", // Uncial Antiqua hanya punya satu weight
  variable: "--font-uncial",
  display: "swap",
});

// <html className={`${montserrat.variable} ${uncial.variable}`}>
```

Aturan pemakaian:

- **Uncial Antiqua** → hanya kata "Nisrina" di Home.
- **Montserrat** → baris 1 & 2 di Home, dan default body font.

---

## 4. Section

Semua section dibungkus `ParallaxSection` (lihat §6) dan punya `id` dari `SECTIONS`. Komponen yang memakai hooks/animasi wajib `"use client"`.

### 4.1 Home (`id="home"`)

Background: pasang `BG` dari `BG.tsx` mengikuti contoh di `usageBG.tsx`. Background berada di belakang konten (`absolute inset-0 -z-10`), konten di tengah layar.

Urutan konten dari atas ke bawah:

1. **Welcome text** — komponen `TextType` dari React Bits.
   - Teks yang diketik berganti-ganti: `["Welcome", "Selamat Datang"]`
   - Loop aktif, cursor tampil.
   - Cek props aktual di file hasil generate (umumnya: `text`, `typingSpeed`, `pauseDuration`, `showCursor`, `cursorCharacter`, `loop`).
2. **Baris 1:** `Hi, I'm <Nisrina>.`
   - Kata **Nisrina** memakai komponen `GradientText` + font Uncial Antiqua (`var(--font-uncial)`).
   - Sisa kalimat memakai Montserrat.
3. **Baris 2:** `I'm a Materials Physics graduate focused on experimental research.` — Montserrat.
4. **Subteks (dummy):** `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.` — ukuran lebih kecil, warna lebih redup dari baris 1–2. Akan diganti nanti, jadikan konstanta di atas file agar mudah diedit.

Contoh kerangka:

```tsx
"use client";

import TextType from "@/components/ui/TextType/TextType";
import GradientText from "@/components/ui/GradientText/GradientText";
import BG from "@/components/BG";

const SUBTEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; // TODO: ganti

export default function Home() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6">
      {/* Pasang BG sesuai usageBG.tsx */}
      <div className="absolute inset-0 -z-10"><BG /></div>

      <div className="flex max-w-3xl flex-col items-center gap-4 text-center font-[family-name:var(--font-montserrat)]">
        <TextType text={["Welcome", "Selamat Datang"]} loop showCursor />

        <h1 className="text-4xl font-semibold md:text-6xl">
          Hi, I&apos;m{" "}
          <GradientText className="font-[family-name:var(--font-uncial)]">
            Nisrina
          </GradientText>
          .
        </h1>

        <p className="text-lg md:text-2xl">
          I&apos;m a Materials Physics graduate focused on experimental research.
        </p>

        <p className="text-sm opacity-70 md:text-base">{SUBTEXT}</p>
      </div>
    </section>
  );
}
```

> Penyesuaian props `TextType` / `GradientText` mengikuti file hasil generate. Pastikan font Uncial benar-benar terpakai di dalam `GradientText` (komponen ini kadang membungkus teks dengan `span` yang mewarisi font; kalau tidak, set `fontFamily` lewat `style` atau CSS-nya).

### 4.2 About Me (`id="about"`)

Tiga elemen: **deskripsi pengenalan diri**, **skill**, **profile picture**.

- Layout desktop: dua kolom (teks kiri, foto kanan). Mobile: foto di atas, teks di bawah.
- **Profile picture** memakai `FlipCard` (React Bits).
  - Front: foto profil (`next/image`, `public/profile.jpg`, rasio konsisten, `object-cover`).
  - Back (prop `back`), tiga baris teks, rata tengah:
    ```
    Nisrina Zalfa Qarirah
    UNAIR
    Material Physics
    ```
  - Cek prop aktual FlipCard di file generate (front/back, flip trigger, ukuran).
  - Pastikan bisa di-flip di mobile (tap), bukan hanya hover.
- **Deskripsi:** 2–3 paragraf dummy, simpan sebagai konstanta.
- **Skill:** array konstanta `SKILLS: string[]` (dummy dulu), ditampilkan sebagai chip/badge. Kelompokkan nanti kalau perlu (mis. Lab / Analysis / Software).

### 4.3 Work Experience (`id="work"`)

Hanya kerangka. Isi nanti oleh pemilik.

```tsx
export default function WorkExperience() {
  return (
    <section id="work" className="min-h-screen px-6 py-24">
      <h2 className="text-3xl font-semibold">Work Experience</h2>
      {/* TODO: isi oleh pemilik. Siapkan list item: role, institusi, periode, deskripsi */}
    </section>
  );
}
```

### 4.4 Organizational Experience (`id="organization"`)

Sama seperti Work Experience: judul + placeholder `TODO`. Struktur dan styling dibuat identik agar konsisten saat diisi.

### 4.5 Footer

Referensi: bagian bawah https://elenagonci.com/. Ambil **struktur**-nya, bukan konten atau aset visualnya.

Struktur footer referensi, dari atas ke bawah:

1. Monogram besar (satu huruf)
2. Nama + titik: `Elena Gonci.`
3. Tagline satu baris
4. Baris ikon sosial (LinkedIn, X, Gmail, dll.)
5. Baris link teks dengan panah: `Email→`, `LinkedIn→`, `X→`, `CV→`
6. `© 2026`

Versi untuk portofolio ini:

1. Monogram **N** (besar, bisa pakai Uncial Antiqua)
2. `Nisrina Zalfa Qarirah.`
3. Tagline dummy (satu baris)
4. Baris ikon sosial: `lucide-react` atau SVG inline. Link sebagai placeholder `#` + `TODO`.
5. Baris link teks dengan panah `→`: Email, LinkedIn, CV. Link `target="_blank" rel="noopener noreferrer"`.
6. `© {new Date().getFullYear()}`

Aturan: simpel, tanpa animasi berat, kontras teks cukup di atas background. Jangan menyalin badge penghargaan, lagu, atau widget lain dari situs referensi.

---

## 5. Dock

Komponen `Dock` ada di `Dock.tsx`, cara pakainya di `usageDock.tsx`. **Baca kedua file itu dulu**, lalu buat wrapper `PortfolioDock.tsx` yang menyuplai item dan mengatur posisi. Jangan mengubah isi `Dock.tsx` kecuali benar-benar perlu.

### 5.1 Item dock

Empat item sesuai `SECTIONS`: Home, About Me, Work Experience, Organizational Experience. Tiap item: ikon + label, klik → scroll halus ke section (`scrollIntoView({ behavior: "smooth" })`). Item aktif ditandai sesuai section yang sedang terlihat.

### 5.2 Perilaku posisi

| Kondisi | Posisi dock |
|---|---|
| Berada di Home | **Bawah** layar (`fixed bottom-6`, center horizontal) |
| Sudah scroll ke section selanjutnya | **Atas** layar (`fixed top-6`, center horizontal) |

Implementasi:

- Dock selalu `position: fixed`, `left-1/2 -translate-x-1/2`, `z-50`.
- State `placement: "bottom" | "top"` ditentukan oleh section aktif: `home` → `bottom`, selain itu → `top`.
- Deteksi section aktif dengan `IntersectionObserver` (threshold sekitar 0.5) di atas elemen `#home`, `#about`, `#work`, `#organization`. Hindari listener `scroll` mentah.
- Perpindahan posisi dianimasikan dengan `motion` (animasikan `top`/`bottom` atau gunakan `layout`/`y` agar tidak patah), durasi ±0.4–0.6s, easing halus. Hormati `prefers-reduced-motion`.
- Saat dock di atas, pastikan tidak menutupi judul section (beri `padding-top` pada section).
- Mobile: dock tidak boleh meluber horizontal. Kalau 4 item tidak muat, tampilkan ikon saja, label muncul sebagai tooltip.

Kerangka:

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Dock from "@/components/Dock";
import { SECTIONS, type SectionId } from "@/lib/sections";

export default function PortfolioDock() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { threshold: 0.5 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const atBottom = active === "home";

  const goTo = (id: SectionId) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div
      className="fixed left-1/2 z-50 -translate-x-1/2"
      animate={atBottom ? { bottom: 24, top: "auto" } : { top: 24, bottom: "auto" }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
    >
      {/* Props Dock mengikuti usageDock.tsx. Items: SECTIONS → { label, icon, onClick: () => goTo(id) } */}
      <Dock /* items={...} activeId={active} */ />
    </motion.div>
  );
}
```

> Catatan teknis: menganimasikan `top`/`bottom` bergantian bisa melompat karena salah satunya `auto`. Jika terlihat patah, ganti dengan satu posisi tetap (`top: 0`) dan animasikan `y` dengan nilai dihitung dari tinggi viewport, atau pakai `layout` dari `motion`.

---

## 6. Section Transition (Parallax)

Gunakan **`Parallax.md`** sebagai sumber utama untuk efek transisi antar-section. Langkah:

1. Baca `Parallax.md` sepenuhnya sebelum menulis kode transisi.
2. Bungkus tiap section dalam `ParallaxSection.tsx` yang menerapkan efek dari `Parallax.md`.
3. Terapkan ke seluruh transisi: Home → About → Work → Organization → Footer.
4. Efek tidak boleh mengganggu `IntersectionObserver` Dock. Pastikan `id` section tetap berada di elemen yang benar-benar terlihat, bukan elemen yang di-transform keluar layar.
5. Fallback `prefers-reduced-motion`: matikan parallax, section tampil biasa.

Jika `Parallax.md` tidak ada atau tidak lengkap, **berhenti dan minta file-nya**. Jangan mengarang efek sendiri.

---

## 7. Aturan Umum

- TypeScript strict, tanpa `any`.
- `"use client"` hanya di komponen yang butuh state/animasi. `layout.tsx` dan `page.tsx` tetap server component bila memungkinkan.
- Semua teks dummy/TODO dikumpulkan sebagai konstanta di bagian atas file masing-masing.
- Responsif: mobile (≥360px), tablet, desktop. Tidak ada scroll horizontal.
- Aksesibilitas: `alt` pada gambar, label pada ikon-only button, fokus keyboard terlihat, kontras teks memadai di atas `BG`.
- Gambar lewat `next/image`.
- Tidak ada dependency baru di luar yang disebutkan tanpa alasan jelas.

---

## 8. Checklist Penerimaan

- [ ] `npm run dev` jalan tanpa error TypeScript/ESLint.
- [ ] Home: `TextType` mengetik "Welcome" ↔ "Selamat Datang".
- [ ] "Nisrina" memakai Uncial Antiqua + gradient; baris 1 & 2 memakai Montserrat.
- [ ] `BG` tampil di belakang Home.
- [ ] About Me: FlipCard flip ke sisi belakang berisi *Nisrina Zalfa Qarirah / UNAIR / Material Physics*; bisa di-flip di mobile.
- [ ] Work & Organizational Experience tersedia sebagai section kosong dengan judul.
- [ ] Footer sederhana sesuai struktur §4.5.
- [ ] Dock di bawah saat Home; pindah ke atas dengan animasi halus saat scroll ke section lain; kembali ke bawah saat kembali ke Home.
- [ ] Klik item dock → scroll halus ke section yang benar; item aktif tersorot.
- [ ] Transisi antar-section mengikuti `Parallax.md`.
- [ ] `prefers-reduced-motion` dihormati.
- [ ] Tampilan benar di mobile.

---

## 9. Keputusan Terbuka (konfirmasi sebelum build)

1. **Footer di dock atau tidak.** Default dokumen ini: dock berisi 4 item, footer hanya muncul di akhir halaman.
2. **"Materials Physics" vs "Material Physics".** Di Home tertulis *Materials Physics*, di sisi belakang FlipCard tertulis *Material Physics*. Satu istilah harus dipilih dan dipakai konsisten.
3. **Nama program studi/gelar resmi** untuk teks FlipCard, kalau ingin mengikuti nama resmi UNAIR.