import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  BatteryIcon,
  CalendarIcon,
  CheckCircleIcon,
  HeadphonesIcon,
  MessageCircleIcon,
  RadioIcon,
  SignalIcon,
  TruckIcon,
  UsersIcon,
  Volume2Icon,
} from '../components/Icons';
import ProductVisual from '../components/ProductVisual';

type Product = {
  name: string;
  student: string;
  general: string;
  variant: 'regular' | 'earphone';
  desc: string;
};

type CustomerType = 'mahasiswa' | 'umum';
type DeliveryOption = 'pickup' | 'del_1_3' | 'del_3_10' | 'del_10_plus';

const productData: Record<string, Product> = {
  'ht-reguler': {
    name: 'HT Reguler',
    student: '10.000',
    general: '15.000',
    variant: 'regular',
    desc: 'HT siap pakai untuk koordinasi event, camping, PKKMB, dan kepanitiaan lapangan.',
  },
  'ht-earphone': {
    name: 'HT + Earphone',
    student: '15.000',
    general: '20.000',
    variant: 'earphone',
    desc: 'Paket HT dengan earphone untuk komunikasi yang lebih rapi di area ramai.',
  },
};

const deliveryOptions: Array<{
  id: DeliveryOption;
  label: string;
  detail: string;
  price: string;
  message: string;
}> = [
  {
    id: 'pickup',
    label: 'Ambil Sendiri',
    detail: 'Pickup area Blater / FT UNSOED',
    price: 'Gratis',
    message: 'Ambil sendiri (Gratis)',
  },
  {
    id: 'del_1_3',
    label: 'Diantar 1-3 km',
    detail: 'Untuk lokasi event dekat titik pickup',
    price: '+Rp5.000',
    message: 'Diantar 1-3 km (+Rp5.000)',
  },
  {
    id: 'del_3_10',
    label: 'Diantar 3-10 km',
    detail: 'Untuk area Purbalingga sekitar kampus',
    price: '+Rp10.000',
    message: 'Diantar 3-10 km (+Rp10.000)',
  },
  {
    id: 'del_10_plus',
    label: 'Diantar >10 km',
    detail: 'Ongkir dikonfirmasi melalui WhatsApp',
    price: 'Nego',
    message: 'Diantar >10 km (Nego ongkir)',
  },
];

const specs = [
  { label: 'Frekuensi', value: 'UHF / VHF', icon: RadioIcon },
  { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
  { label: 'Jangkauan', value: '1-5 km area terbuka', icon: SignalIcon },
  { label: 'Audio', value: 'Jernih untuk koordinasi', icon: Volume2Icon },
];

export default function Detail() {
  const { id } = useParams();
  const product = productData[id || ''];
  const [customerType, setCustomerType] = useState<CustomerType>('mahasiswa');
  const [deliveryOption, setDeliveryOption] = useState<DeliveryOption>('pickup');
  const [unitCount, setUnitCount] = useState('1');
  const [useDate, setUseDate] = useState('');
  const [duration, setDuration] = useState('2 hari');
  const [eventLocation, setEventLocation] = useState('');
  const [notes, setNotes] = useState('');

  if (!product) {
    return (
      <main className="detail-shell">
        <div className="kt-container">
          <Link to="/" className="back-link">
            <ArrowLeftIcon />
            Kembali ke katalog
          </Link>
          <div className="kt-card detail-panel">
            <h1 className="detail-title">Produk tidak ditemukan.</h1>
            <p className="detail-subtitle">
              Silakan kembali ke katalog untuk memilih paket HT yang tersedia.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const selectedPrice = customerType === 'mahasiswa' ? product.student : product.general;
  const selectedDelivery = deliveryOptions.find((option) => option.id === deliveryOption);
  const waMessage = [
    'Halo Kanal Tiga, saya mau sewa HT.',
    `Produk: ${product.name}`,
    `Kategori: ${customerType === 'mahasiswa' ? 'Mahasiswa' : 'Umum'}`,
    `Harga sewa: Rp${selectedPrice}/hari`,
    `Jumlah unit: ${unitCount || '-'}`,
    `Tanggal pakai: ${useDate || '-'}`,
    `Durasi: ${duration || '-'}`,
    `Opsi ambil/kirim: ${selectedDelivery?.message || '-'}`,
    `Lokasi event: ${eventLocation || '-'}`,
    `Catatan: ${notes || '-'}`,
  ].join('\n');
  const waLink = `https://wa.me/6283150964050?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="detail-shell">
      <div className="kt-container">
        <Link to="/" className="back-link">
          <ArrowLeftIcon />
          Kembali ke katalog
        </Link>

        <div className="product-detail">
          <div className="product-media">
            <ProductVisual variant={product.variant} />
          </div>

          <section className="product-info kt-card detail-panel">
            <div className="section-kicker">
              {product.variant === 'earphone' ? <HeadphonesIcon /> : <RadioIcon />}
              Detail paket sewa
            </div>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-subtitle">{product.desc}</p>

            <div className="form-section">
              <h2 className="form-section__title">
                <UsersIcon />
                1. Pilih kategori penyewa
              </h2>
              <div className="option-grid">
                <button
                  type="button"
                  onClick={() => setCustomerType('mahasiswa')}
                  className={`option-card ${customerType === 'mahasiswa' ? 'is-active' : ''}`}
                >
                  <strong>Mahasiswa</strong>
                  <span>Rp{product.student}/hari dengan KTM</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCustomerType('umum')}
                  className={`option-card ${customerType === 'umum' ? 'is-active' : ''}`}
                >
                  <strong>Umum</strong>
                  <span>Rp{product.general}/hari untuk non-mahasiswa</span>
                </button>
              </div>
              {customerType === 'mahasiswa' && (
                <p className="helper-note">
                  <CheckCircleIcon />
                  Kirim foto KTM melalui WhatsApp dan tunjukkan KTM fisik saat
                  mengambil unit.
                </p>
              )}
            </div>

            <div className="form-section">
              <h2 className="form-section__title">
                <TruckIcon />
                2. Pilih opsi ambil atau kirim
              </h2>
              <div className="delivery-list">
                {deliveryOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setDeliveryOption(option.id)}
                    className={`delivery-option ${deliveryOption === option.id ? 'is-active' : ''}`}
                  >
                    <span>
                      <strong>{option.label}</strong>
                      <small>{option.detail}</small>
                    </span>
                    <span className="delivery-price">{option.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h2 className="form-section__title">
                <CalendarIcon />
                3. Lengkapi kebutuhan sewa
              </h2>
              <div className="booking-grid">
                <div className="field">
                  <label htmlFor="unitCount">Jumlah unit</label>
                  <input
                    id="unitCount"
                    type="number"
                    min="1"
                    value={unitCount}
                    onChange={(event) => setUnitCount(event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="useDate">Tanggal pemakaian</label>
                  <input
                    id="useDate"
                    type="date"
                    value={useDate}
                    onChange={(event) => setUseDate(event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="duration">Durasi sewa</label>
                  <input
                    id="duration"
                    type="text"
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                    placeholder="Contoh: 2 hari"
                  />
                </div>
                <div className="field">
                  <label htmlFor="eventLocation">Lokasi event</label>
                  <input
                    id="eventLocation"
                    type="text"
                    value={eventLocation}
                    onChange={(event) => setEventLocation(event.target.value)}
                    placeholder="Contoh: FT UNSOED"
                  />
                </div>
                <div className="field field--wide">
                  <label htmlFor="notes">Catatan kebutuhan / nama event</label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Contoh: untuk PKKMB, butuh koordinasi panitia lapangan"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2 className="form-section__title">
                <RadioIcon />
                4. Spesifikasi unit
              </h2>
              <div className="spec-grid">
                {specs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div key={spec.label} className="spec-item">
                      <Icon />
                      <span>
                        <strong>{spec.label}</strong>
                        <span>{spec.value}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="cta-dock">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                <MessageCircleIcon />
                Booking via WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
