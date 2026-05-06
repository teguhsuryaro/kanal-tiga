import { Link } from 'react-router-dom';
import { MessageCircleIcon, RadioIcon } from './Icons';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="kt-container navbar__inner">
        <Link to="/" className="brand" aria-label="Kanal Tiga beranda">
          <span className="brand-mark">
            <RadioIcon />
          </span>
          <span>KANAL TIGA</span>
        </Link>

        <div className="nav-actions">
          <Link to="/" className="nav-link">
            Beranda
          </Link>
          <a href="/#products" className="btn btn-primary">
            <MessageCircleIcon />
            <span>Sewa Sekarang</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
