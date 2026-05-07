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
import { products } from '../data/products';

const benefits = [
  {
    title: 'Pickup mudah',
    desc: 'Pickup tersedia di sekitar Blater, Kalimanah, dekat FT UNSOED Purbalingga.',
    icon: MapPinIcon,
  },
  {
    title: 'Booking via WhatsApp',
    desc: 'Pilih paket, isi kebutuhan, lalu kirim pesan otomatis untuk cek ketersediaan unit.',
    icon: MessageCircleIcon,
  },
  {
    title: 'Unit dicek sebelum digunakan',
    desc: 'Setiap unit disiapkan dan dicek agar siap dipakai saat acara berlangsung.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Harga khusus mahasiswa',
    desc: 'Promo tersedia untuk mahasiswa dengan menunjukkan KTM sesuai ketentuan.',
    icon: TagIcon,
  },
];

const terms = [
  {
    q: 'Minimal sewa 2 hari',
    a: 'Durasi penyewaan dihitung minimal dua hari agar jadwal dan unit dapat disiapkan dengan baik.',
  },
  {
    q: 'DP minimal 50%',
    a: 'Uang muka diperlukan untuk mengamankan jadwal sewa dan jumlah unit.',
  },
  {
    q: 'Jaminan identitas',
    a: 'Mahasiswa menggunakan KTM. Penyewa umum dapat menggunakan KTP atau SIM sesuai ketentuan.',
  },
  {
    q: 'Tanggung jawab unit',
    a: 'Kerusakan atau kehilangan selama masa sewa menjadi tanggung jawab penyewa.',
  },
];

export default function Home() {
  return (
    <main id="home">
      <section className="hero-section">
        <div className="kt-container hero-grid">
          <div className="hero-content">
            <div className="section-kicker">
              <RadioIcon />
              Rental HT di Purbalingga
            </div>
            <h1 className="hero-title">
              Komunikasi tim lebih rapi, <span>acara lebih terkendali.</span>
            </h1>
            <p className="hero-subtitle">
              Kanal Tiga menyediakan sewa HT untuk event, camping,
              kepanitiaan, komunitas, keamanan, dan kebutuhan koordinasi
              lapangan. Pickup tersedia di sekitar Blater, Kalimanah, dekat FT
              UNSOED Purbalingga.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">
                <RadioIcon />
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
                <span>Reguler dan earphone</span>
              </div>
              <div className="hero-stat">
                <strong>Blater</strong>
                <span>Area pickup utama</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="kt-section kt-section--soft">
        <div className="kt-container">
          <div className="section-kicker">
            <CalendarIcon />
            Paket sewa HT
          </div>
          <h2 className="section-heading">Pilih paket sesuai kebutuhan komunikasi tim.</h2>
          <p className="section-copy">
            Pilih paket sesuai kebutuhan komunikasi tim, mulai dari penggunaan
            umum sampai area event yang lebih ramai.
          </p>

          <div className="promo-banner">
            <span className="icon-chip">
              <BadgePercentIcon />
            </span>
            <div>
              <h3>Promo Mahasiswa</h3>
              <p>
                Tunjukkan KTM dan dapatkan harga khusus mulai dari
                <strong> Rp10.000/unit/hari</strong>.
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
                  <FileTextIcon />
                  Lihat Detail & Sewa
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="kt-section">
        <div className="kt-container">
          <div className="section-kicker">
            <ShieldCheckIcon />
            Kenapa memilih Kanal Tiga?
          </div>
          <h2 className="section-heading">Koordinasi lebih cepat tanpa bergantung pada internet.</h2>
          <p className="section-copy">
            Kami membantu tim berkomunikasi lebih cepat dan rapi tanpa
            bergantung pada pulsa, internet, atau koordinasi manual yang mudah
            terlewat.
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
            Syarat sewa
          </div>
          <h2 className="section-heading">Syarat sewa jelas sejak awal.</h2>
          <p className="section-copy">
            Ketentuan dibuat sederhana agar proses sewa lebih aman, transparan,
            dan mudah dipahami oleh penyewa.
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
              Baca Syarat Sewa Lengkap
            </a>
          </div>
        </div>
      </section>

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-card delivery-note-card">
            <span className="icon-chip">
              <TruckIcon />
            </span>
            <div>
              <h3>Pickup di Blater atau pengantaran sesuai jarak</h3>
              <p>
                Ambil unit di sekitar Blater tanpa biaya. Pengantaran tersedia
                dengan biaya menyesuaikan jarak dan lokasi acara.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
