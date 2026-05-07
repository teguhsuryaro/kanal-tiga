# Kanal Tiga

**Rental Handy Talkie (HT) di Purbalingga dan sekitarnya.**

Website katalog dan booking sewa HT untuk event, camping, kepanitiaan, komunitas, keamanan, dan koordinasi lapangan. Booking dilakukan melalui integrasi WhatsApp otomatis.

## Fitur

- **Katalog Produk** — Dua paket sewa: HT Reguler dan HT + Earphone
- **Halaman Detail** — Spesifikasi lengkap, galeri foto, dan perbandingan paket
- **Form Booking** — Isi data kebutuhan sewa, lalu kirim pesan otomatis via WhatsApp
- **Harga Mahasiswa** — Diskon khusus dengan KTM aktif
- **Opsi Pengiriman** — Pickup gratis di Blater atau pengantaran sesuai jarak
- **Dark / Light Mode** — Toggle tema dengan penyimpanan preferensi di localStorage
- **Responsive** — Optimal di desktop, tablet, dan mobile

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: CSS Variables + Tailwind CSS 3
- **Routing**: React Router DOM 7
- **Deployment**: Vercel

## Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server
npm run dev

# 3. Buka di browser
# http://localhost:5173
```

## Script Tersedia

| Command | Fungsi |
|---|---|
| `npm run dev` | Jalankan dev server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build |
| `npm run lint` | Cek linting (ESLint) |

## Struktur Projek

```
src/
├── assets/          # Gambar dan asset statis
│   └── images/      # Foto produk HT
├── components/      # Komponen reusable
│   ├── Footer.tsx
│   ├── Icons.tsx     # Semua icon SVG custom
│   ├── Navbar.tsx
│   ├── ProductVisual.tsx
│   └── ScrollToTop.tsx
├── data/            # Data terpusat
│   ├── products.ts  # Data produk (single source of truth)
│   └── productImages.ts
├── pages/           # Halaman utama
│   ├── Home.tsx
│   ├── Detail.tsx
│   └── NotFound.tsx
├── App.tsx           # Router dan layout
├── main.tsx          # Entry point
└── index.css         # Semua styling
```

## Tim

Projek bisnis tim yang beranggotakan 3 orang.

## Deployment

Projek sudah dikonfigurasi untuk deploy ke Vercel. Push ke branch utama akan otomatis deploy.

```bash
# Build production
npm run build
```

## Lisensi

© 2026 Kanal Tiga. All rights reserved.
