import { Link } from 'react-router-dom';
import {
  ClockIcon,
  HeadphonesIcon,
  MapPinIcon,
  MessageCircleIcon,
  RadioIcon,
  TruckIcon,
} from './Icons';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="kt-container">
        <div className="footer-grid">
          <div className="footer-column footer-column--brand">
            <h3>Kanal Tiga</h3>
            <p>
              Rental HT untuk event, camping, kegiatan komunitas, dan kebutuhan
              koordinasi lapangan di Purbalingga dan sekitarnya.
            </p>
          </div>

          <div className="footer-column">
            <h4>Layanan</h4>
            <div className="footer-link-list">
              <Link to="/detail/ht-reguler" className="footer-link-item">
                <RadioIcon />
                <span>Sewa HT Reguler</span>
              </Link>
              <Link to="/detail/ht-earphone" className="footer-link-item">
                <HeadphonesIcon />
                <span>Sewa HT + Earphone</span>
              </Link>
              <a
                href="https://wa.me/6283150964050"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                <MessageCircleIcon />
                <span>Booking via WhatsApp</span>
              </a>
              <div className="footer-link-item">
                <TruckIcon />
                <span>Pickup atau pengantaran sesuai lokasi</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4>Area Layanan</h4>
            <div className="footer-link-list">
              <div className="footer-link-item">
                <MapPinIcon />
                <span>Blater</span>
              </div>
              <div className="footer-link-item">
                <MapPinIcon />
                <span>Kalimanah</span>
              </div>
              <div className="footer-link-item">
                <MapPinIcon />
                <span>FT UNSOED Purbalingga</span>
              </div>
              <div className="footer-link-item">
                <MapPinIcon />
                <span>Purbalingga dan sekitarnya</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4>Kontak</h4>
            <div className="footer-link-list">
              <a
                href="https://wa.me/6283150964050"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-item"
              >
                <MessageCircleIcon />
                <span>WhatsApp Kanal Tiga</span>
              </a>
              <div className="footer-link-item">
                <a
                  href="https://www.instagram.com/kanaltiga.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item"
                >
                  <RadioIcon />
                  <span>@kanaltiga.id</span>
                </a>
              </div>
              <div className="footer-link-item">
                <ClockIcon />
                <span>Setiap hari, 07.00-22.00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">&copy; 2026 Kanal Tiga. All rights reserved.</div>
      </div>
    </footer>
  );
}
