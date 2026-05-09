import { Link } from 'react-router-dom';
import { ArrowLeftIcon, RadioIcon } from '../components/Icons';

export default function NotFound() {
  return (
    <main className="detail-shell">
      <div className="kt-container">
        <div className="kt-card detail-panel" style={{ textAlign: 'center', paddingBlock: '64px' }}>
          <span className="icon-chip" style={{ margin: '0 auto 24px' }}>
            <RadioIcon />
          </span>
          <h1 className="detail-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Halaman tidak ditemukan
          </h1>
          <p className="detail-subtitle" style={{ maxWidth: '480px', margin: '16px auto 0' }}>
            Halaman yang kamu cari tidak tersedia. Silakan kembali ke beranda untuk melihat
            paket sewa HT yang tersedia.
          </p>
          <div style={{ marginTop: '32px' }}>
            <Link to="/" className="btn btn-primary">
              <ArrowLeftIcon />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
