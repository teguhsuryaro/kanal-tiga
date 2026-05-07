import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CloseIcon,
  MenuIcon,
  MoonIcon,
  RadioIcon,
  SunIcon,
} from './Icons';

type Theme = 'dark' | 'light';

const navItems = [
  { href: '/#home', label: 'Beranda' },
  { href: '/#products', label: 'Paket Sewa' },
  { href: '/#benefits', label: 'Keunggulan' },
  { href: '/#terms', label: 'Syarat Sewa' },
  { href: '/#contact', label: 'Kontak' },
];

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') {
    return 'dark';
  }

  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Keep the visual theme even if storage is unavailable.
    }
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="kt-container navbar__inner">
        <Link to="/" className="brand" aria-label="Kanal Tiga beranda">
          <span className="brand-mark">
            <RadioIcon />
          </span>
          <span>Kanal Tiga</span>
        </Link>

        <div className="nav-links" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-tools">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'}
            aria-pressed={!isDark}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link to="/#products" className="btn btn-primary navbar-cta">
            <RadioIcon />
            <span>Sewa Sekarang</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="kt-container">
          <div className="mobile-menu-panel">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#products"
              className="btn btn-primary mobile-menu-cta"
              onClick={() => setMenuOpen(false)}
            >
              <RadioIcon />
              <span>Sewa Sekarang</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
