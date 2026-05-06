import { Link } from 'react-router-dom';
import {
  BadgePercentIcon,
  CalendarIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  FileTextIcon,
  HeadphonesIcon,
  MapPinIcon,
  MessageCircleIcon,
  RadioIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
} from '../components/Icons';
import ProductVisual from '../components/ProductVisual';

const products = [
  {
    id: 'ht-reguler',
    name: 'HT Reguler',
    generalPrice: '15.000',
    studentPrice: '10.000',
    desc: 'Unit HT siap pakai untuk panitia event, PKKMB, camping, dan koordinasi lapangan.',
    badge: 'Favorit Mahasiswa',
    variant: 'regular' as const,
  },
  {
    id: 'ht-earphone',
    name: 'HT + Earphone',
    generalPrice: '20.000',
    studentPrice: '15.000',
    desc: 'Paket handsfree untuk komunikasi yang lebih rapi, fokus, dan nyaman di area ramai.',
    badge: 'Untuk Panitia Lapangan',
    variant: 'earphone' as const,
  },
];

const benefits = [
  {
    title: 'Dekat FT UNSOED',
    desc: 'Pickup mudah dari area Blater, Kalimanah, dekat Fakultas Teknik UNSOED Purbalingga.',
    icon: MapPinIcon,
  },
  {
    title: 'Booking via WhatsApp',
    desc: 'Pilih paket, isi kebutuhan, lalu kirim pesan otomatis untuk cek ketersediaan unit.',
    icon: MessageCircleIcon,
  },
  {
    title: 'Unit Dicek Rutin',
    desc: 'HT disiapkan dan dicek sebelum digunakan agar koordinasi tim tetap lancar.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Harga Mahasiswa',
    desc: 'Tarif khusus untuk mahasiswa FT UNSOED dengan KTM sesuai ketentuan.',
    icon: TagIcon,
  },
];

const terms = [
  {
    q: 'Minimal sewa 2 hari',
    a: 'Durasi penyewaan dihitung minimal dua hari agar jadwal dan unit bisa disiapkan dengan jelas.',
  },
  {
    q: 'DP minimal 50%',
    a: 'Pembayaran uang muka diperlukan untuk mengamankan jadwal sewa dan jumlah unit.',
  },
  {
    q: 'Jaminan identitas',
    a: 'Mahasiswa mengirim foto KTM dan menunjukkan KTM fisik saat ambil unit. Umum dapat memakai KTP atau SIM.',
  },
  {
    q: 'Tanggung jawab unit',
    a: 'Kerusakan atau kehilangan selama masa sewa menjadi tanggung jawab penyewa.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="kt-container hero-grid">
          <div className="hero-content">
            <div className="section-kicker">
              <RadioIcon />
              Rental HT dekat FT UNSOED Purbalingga
            </div>
            <h1 className="hero-title">
              Komunikasi Lancar, <span>Event Sukses.</span>
            </h1>
            <p className="hero-subtitle">
              Kanal Tiga menyediakan sewa HT yang reliabel untuk event kampus,
              kepanitiaan, PKKMB, camping, dan kebutuhan koordinasi lapangan di
              sekitar Blater, Kalimanah.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">
                <MessageCircleIcon />
                Lihat Paket Sewa
              </a>
              <a href="#terms" className="btn btn-secondary">
                <FileTextIcon />
                Syarat Sewa
              </a>
            </div>
            <div className="hero-stats" aria-label="Ringkasan layanan Kanal Tiga">
              <div className="hero-stat">
                <strong>07.00-22.00</strong>
                <span>Jam operasional</span>
              </div>
              <div className="hero-stat">
                <strong>2 Paket</strong>
                <span>HT reguler dan earphone</span>
              </div>
              <div className="hero-stat">
                <strong>FT UNSOED</strong>
                <span>Area pickup terdekat</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <ProductVisual variant="earphone" />
          </div>
        </div>
      </section>

      <section id="products" className="kt-section kt-section--soft">
        <div className="kt-container">
          <div className="section-kicker">
            <CalendarIcon />
            Paket sewa harian
          </div>
          <h2 className="section-heading">Pilih HT sesuai cara kerja tim Anda.</h2>
          <p className="section-copy">
            Dua pilihan paket sederhana dengan harga transparan untuk mahasiswa
            dan pengguna umum.
          </p>

          <div className="promo-banner">
            <span className="icon-chip">
              <BadgePercentIcon />
            </span>
            <div>
              <h3>Promo Mahasiswa FT UNSOED</h3>
              <p>
                Tunjukkan KTM dan dapatkan harga khusus mulai dari
                Rp10.000/unit/hari.
              </p>
            </div>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="kt-card product-card">
                <ProductVisual variant={product.variant} compact />

                <div>
                  <span className="product-card__badge">
                    {product.variant === 'earphone' ? <HeadphonesIcon /> : <RadioIcon />}
                    {product.badge}
                  </span>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                </div>

                <div className="price-row">
                  <div className="price-box price-box--highlight">
                    <span className="price-label">Mahasiswa</span>
                    <span className="price-value">
                      Rp{product.studentPrice}
                      <small>/hari</small>
                    </span>
                  </div>
                  <div className="price-box">
                    <span className="price-label">Umum</span>
                    <span className="price-value">
                      Rp{product.generalPrice}
                      <small>/hari</small>
                    </span>
                  </div>
                </div>

                <Link to={`/detail/${product.id}`} className="btn btn-secondary">
                  <MessageCircleIcon />
                  Lihat Detail & Sewa
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section">
        <div className="kt-container">
          <div className="section-kicker">
            <ShieldCheckIcon />
            Kenapa Kanal Tiga
          </div>
          <h2 className="section-heading">Dibuat untuk koordinasi lapangan yang rapi.</h2>
          <p className="section-copy">
            Cocok untuk kepanitiaan kampus, event organizer, camping group, dan
            tim kecil yang butuh komunikasi cepat tanpa ribet.
          </p>

          <div className="benefit-grid mt-10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="kt-card benefit-card">
                  <span className="icon-chip">
                    <Icon />
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="terms" className="kt-section kt-section--soft">
        <div className="kt-container">
          <div className="section-kicker">
            <FileTextIcon />
            Syarat & Ketentuan
          </div>
          <h2 className="section-heading">Syarat sewa dibuat jelas sejak awal.</h2>
          <p className="section-copy">
            Ringkas, mudah dipahami, dan membantu kedua pihak menjaga unit tetap
            aman selama masa sewa.
          </p>

          <div className="terms-grid">
            {terms.map((term) => (
              <article key={term.q} className="kt-card term-card">
                <span className="icon-chip">
                  <CheckCircleIcon />
                </span>
                <div>
                  <h3>{term.q}</h3>
                  <p>{term.a}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://docs.google.com/document/d/1QKNRmoZvyIV6OnHzKGdSPtdzPgZkll7VhSPxohq-9tE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLinkIcon />
              Baca Syarat & Ketentuan Lengkap
            </a>
          </div>
        </div>
      </section>

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-card term-card">
            <span className="icon-chip">
              <TruckIcon />
            </span>
            <div>
              <h3>Pickup di Blater atau kirim sesuai jarak</h3>
              <p>
                Ambil unit di sekitar Blater/FT UNSOED tanpa biaya. Pengantaran
                tersedia dengan ongkir menyesuaikan jarak dan lokasi event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
