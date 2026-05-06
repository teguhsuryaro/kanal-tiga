import { ClockIcon, MapPinIcon, MessageCircleIcon, RadioIcon, UsersIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="kt-container">
        <div className="footer-grid">
          <div>
            <h3>Kanal Tiga</h3>
            <p>
              Rental HT dekat FT UNSOED Purbalingga untuk event kampus, PKKMB,
              camping, dan koordinasi lapangan.
            </p>
          </div>

          <div>
            <h4>Area Layanan</h4>
            <div className="footer-list">
              <div className="footer-item">
                <MapPinIcon />
                <p>Blater, Kalimanah, sekitar FT UNSOED Purbalingga.</p>
              </div>
            </div>
          </div>

          <div>
            <h4>Operasional</h4>
            <div className="footer-list">
              <div className="footer-item">
                <ClockIcon />
                <p>Setiap hari, 07.00-22.00 WIB.</p>
              </div>
              <div className="footer-item">
                <RadioIcon />
                <p>Unit dicek sebelum digunakan.</p>
              </div>
            </div>
          </div>

          <div>
            <h4>Kontak</h4>
            <div className="footer-list">
              <div className="footer-item">
                <MessageCircleIcon />
                <a href="https://wa.me/6283150964050" target="_blank" rel="noopener noreferrer">
                  WhatsApp Kanal Tiga
                </a>
              </div>
              <div className="footer-item">
                <UsersIcon />
                <p>@kanaltiga.ht</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Kanal Tiga HT Rental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
