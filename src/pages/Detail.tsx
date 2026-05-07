import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  CalendarIcon,
  CheckCircleIcon,
  FileTextIcon,
  HeadphonesIcon,
  MapPinIcon,
  MessageCircleIcon,
  RadioIcon,
  SignalIcon,
  TruckIcon,
  UsersIcon,
  ZapIcon,
} from '../components/Icons';
import ProductVisual from '../components/ProductVisual';
import { productData, type ProductSpecContent } from '../data/products';

type CustomerType = 'mahasiswa' | 'umum';
type DeliveryOption = 'pickup' | 'del_1_3' | 'del_3_10' | 'del_10_plus';
type BookingField = 'unitCount' | 'useDate' | 'duration' | 'eventName' | 'eventLocation';
type BookingFormValues = Record<BookingField, string> & {
  notes: string;
};
type BookingErrors = Partial<Record<BookingField, string>>;

const deliveryOptions: Array<{
  id: DeliveryOption;
  label: string;
  detail: string;
  price: string;
  message: string;
}> = [
  {
    id: 'pickup',
    label: 'Ambil sendiri',
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

function validateBookingForm(values: BookingFormValues) {
  const errors: BookingErrors = {};

  if (!values.unitCount.trim() || Number(values.unitCount) < 1) {
    errors.unitCount = 'Masukkan jumlah unit minimal 1.';
  }

  if (!values.useDate.trim()) {
    errors.useDate = 'Pilih tanggal pemakaian.';
  }

  if (!values.duration.trim()) {
    errors.duration = 'Masukkan durasi sewa.';
  }

  if (!values.eventName.trim()) {
    errors.eventName = 'Masukkan nama acara atau kebutuhan utama.';
  }

  if (!values.eventLocation.trim()) {
    errors.eventLocation = 'Masukkan lokasi acara atau catatan lokasi.';
  }

  return errors;
}

function buildWhatsAppMessage({
  productName,
  customerType,
  price,
  deliveryMessage,
  bookingValues,
}: {
  productName: string;
  customerType: CustomerType;
  price: string;
  deliveryMessage: string;
  bookingValues: BookingFormValues;
}) {
  const lines = [
    'Halo Kanal Tiga, saya ingin booking sewa HT.',
    '',
    `Produk: ${productName}`,
    `Kategori penyewa: ${customerType === 'mahasiswa' ? 'Mahasiswa' : 'Umum'}`,
    `Harga: Rp${price}/unit/hari`,
    `Jumlah unit: ${bookingValues.unitCount}`,
    `Tanggal pemakaian: ${bookingValues.useDate}`,
    `Durasi sewa: ${bookingValues.duration}`,
    `Opsi pengambilan/pengiriman: ${deliveryMessage}`,
    `Nama acara/kebutuhan: ${bookingValues.eventName}`,
    `Lokasi/catatan: ${bookingValues.eventLocation}`,
  ];

  if (bookingValues.notes.trim()) {
    lines.push(`Catatan tambahan: ${bookingValues.notes}`);
  }

  lines.push('', 'Mohon cek ketersediaan unitnya. Terima kasih.');

  return lines.join('\n');
}

function openWhatsApp(message: string) {
  const url = `https://wa.me/6283150964050?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Detail() {
  const { id } = useParams();
  const product = productData[id || ''];
  const [customerType, setCustomerType] = useState<CustomerType>('mahasiswa');
  const [deliveryOption, setDeliveryOption] = useState<DeliveryOption>('pickup');
  const [bookingValues, setBookingValues] = useState<BookingFormValues>({
    unitCount: '1',
    useDate: '',
    duration: '2 hari',
    eventName: '',
    eventLocation: '',
    notes: '',
  });
  const [bookingErrors, setBookingErrors] = useState<BookingErrors>({});
  const [bookingNotice, setBookingNotice] = useState('');

  // Dynamic page title for SEO
  useEffect(() => {
    const title = product
      ? `${product.name} | Kanal Tiga`
      : 'Produk Tidak Ditemukan | Kanal Tiga';
    document.title = title;
    return () => {
      document.title = 'Kanal Tiga | Rental HT di Purbalingga';
    };
  }, [product]);

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
  const bookingMessage = buildWhatsAppMessage({
    productName: product.name,
    customerType,
    price: selectedPrice,
    deliveryMessage: selectedDelivery?.message || '-',
    bookingValues,
  });

  function handleBookingValueChange(field: keyof BookingFormValues, value: string) {
    setBookingValues((current) => ({
      ...current,
      [field]: value,
    }));

    if (field !== 'notes') {
      setBookingErrors((current) => {
        if (!current[field]) {
          return current;
        }

        const next = { ...current };
        delete next[field];
        return next;
      });
    }

    if (bookingNotice) {
      setBookingNotice('');
    }
  }

  function scrollToBookingForm() {
    const target = document.getElementById('booking-form');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleBookingSubmit() {
    const nextErrors = validateBookingForm(bookingValues);
    setBookingErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setBookingNotice('Lengkapi data booking terlebih dahulu sebelum membuka WhatsApp.');

      const firstInvalidField = Object.keys(nextErrors)[0] as BookingField | undefined;
      if (firstInvalidField) {
        const fieldElement = document.getElementById(firstInvalidField);
        fieldElement?.focus();
      }

      return;
    }

    setBookingNotice('');
    openWhatsApp(bookingMessage);
  }

  return (
    <main className="detail-shell">
      <div className="kt-container">
        <Link to="/" className="back-link">
          <ArrowLeftIcon />
          Kembali ke katalog
        </Link>

        <div className="product-detail">
          <div className="product-media">
            <ProductVisual key={product.variant} variant={product.variant} showGallery />
          </div>

          <section className="product-info kt-card detail-panel">
            <div className="section-kicker">
              {product.variant === 'earphone' ? <HeadphonesIcon /> : <RadioIcon />}
              Detail paket
            </div>
            <h1 className="detail-title">{product.name}</h1>

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
                  Harga mahasiswa berlaku dengan KTM aktif dan ditunjukkan saat pengambilan unit.
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

            <div className="form-section" id="booking-form">
              <h2 className="form-section__title">
                <CalendarIcon />
                3. Lengkapi kebutuhan sewa
              </h2>
              <p className="form-section__copy">
                Isi data berikut agar pesan WhatsApp terkirim dengan detail yang jelas.
              </p>
              <div className="booking-grid">
                <div className="field">
                  <label htmlFor="unitCount">Jumlah unit</label>
                  <input
                    id="unitCount"
                    type="number"
                    min="1"
                    value={bookingValues.unitCount}
                    onChange={(event) => handleBookingValueChange('unitCount', event.target.value)}
                    className={bookingErrors.unitCount ? 'is-error' : ''}
                    aria-invalid={Boolean(bookingErrors.unitCount)}
                    aria-describedby={bookingErrors.unitCount ? 'unitCount-error' : undefined}
                  />
                  {bookingErrors.unitCount && (
                    <span id="unitCount-error" className="field-error">
                      {bookingErrors.unitCount}
                    </span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="useDate">Tanggal pemakaian</label>
                  <input
                    id="useDate"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={bookingValues.useDate}
                    onChange={(event) => handleBookingValueChange('useDate', event.target.value)}
                    className={bookingErrors.useDate ? 'is-error' : ''}
                    aria-invalid={Boolean(bookingErrors.useDate)}
                    aria-describedby={bookingErrors.useDate ? 'useDate-error' : undefined}
                  />
                  {bookingErrors.useDate && (
                    <span id="useDate-error" className="field-error">
                      {bookingErrors.useDate}
                    </span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="duration">Durasi sewa</label>
                  <input
                    id="duration"
                    type="text"
                    value={bookingValues.duration}
                    onChange={(event) => handleBookingValueChange('duration', event.target.value)}
                    placeholder="Contoh: 2 hari"
                    className={bookingErrors.duration ? 'is-error' : ''}
                    aria-invalid={Boolean(bookingErrors.duration)}
                    aria-describedby={bookingErrors.duration ? 'duration-error' : undefined}
                  />
                  {bookingErrors.duration && (
                    <span id="duration-error" className="field-error">
                      {bookingErrors.duration}
                    </span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="eventName">Nama acara / kebutuhan</label>
                  <input
                    id="eventName"
                    type="text"
                    value={bookingValues.eventName}
                    onChange={(event) => handleBookingValueChange('eventName', event.target.value)}
                    placeholder="Contoh: briefing panitia acara kampus"
                    className={bookingErrors.eventName ? 'is-error' : ''}
                    aria-invalid={Boolean(bookingErrors.eventName)}
                    aria-describedby={bookingErrors.eventName ? 'eventName-error' : undefined}
                  />
                  {bookingErrors.eventName && (
                    <span id="eventName-error" className="field-error">
                      {bookingErrors.eventName}
                    </span>
                  )}
                </div>
                <div className="field field--wide">
                  <label htmlFor="eventLocation">Lokasi acara / catatan lokasi</label>
                  <input
                    id="eventLocation"
                    type="text"
                    value={bookingValues.eventLocation}
                    onChange={(event) =>
                      handleBookingValueChange('eventLocation', event.target.value)
                    }
                    placeholder="Contoh: FT UNSOED, Kalimanah"
                    className={bookingErrors.eventLocation ? 'is-error' : ''}
                    aria-invalid={Boolean(bookingErrors.eventLocation)}
                    aria-describedby={
                      bookingErrors.eventLocation ? 'eventLocation-error' : undefined
                    }
                  />
                  {bookingErrors.eventLocation && (
                    <span id="eventLocation-error" className="field-error">
                      {bookingErrors.eventLocation}
                    </span>
                  )}
                </div>
                <div className="field field--wide">
                  <label htmlFor="notes">Catatan tambahan</label>
                  <textarea
                    id="notes"
                    value={bookingValues.notes}
                    onChange={(event) => handleBookingValueChange('notes', event.target.value)}
                    placeholder="Opsional, misalnya kebutuhan koordinasi khusus atau catatan tambahan"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2 className="form-section__title">
                <RadioIcon />
                4. Ringkasan spesifikasi
              </h2>
              <div className="spec-grid">
                {product.quickSpecs.map((spec) => {
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
              <p className="booking-cta-note">WhatsApp akan terbuka setelah data wajib terisi.</p>
              {bookingNotice && <p className="form-error-summary">{bookingNotice}</p>}
              <button type="button" onClick={handleBookingSubmit} className="btn btn-green">
                <MessageCircleIcon />
                Booking via WhatsApp
              </button>
            </div>
          </section>
        </div>

        {product.specContent && (
          <ProductSpecification
            content={product.specContent}
            onReturnToBooking={scrollToBookingForm}
          />
        )}
      </div>
    </main>
  );
}

function ProductSpecification({
  content,
  onReturnToBooking,
}: {
  content: ProductSpecContent;
  onReturnToBooking: () => void;
}) {
  return (
    <section className="product-spec-section" aria-labelledby="product-spec-title">
      <div className="kt-card spec-intro-card">
        <div>
          <div className="section-kicker">
            <FileTextIcon />
            Spesifikasi
          </div>
          <h2 id="product-spec-title">{content.title}</h2>
          <p>{content.intro}</p>
        </div>
      </div>

      <div className="spec-highlight-grid" aria-label={content.summaryLabel}>
        {content.highlights.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.label} className="kt-card spec-highlight-card">
              <span className="icon-chip">
                <Icon />
              </span>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          );
        })}
      </div>

      {content.packageDifference && (
        <section className="kt-card package-difference-card">
          <div className="package-difference-copy">
            <div className="spec-section-heading">
              <HeadphonesIcon />
              <h3>{content.packageDifference.title}</h3>
            </div>
            <span className="package-badge">{content.packageDifference.badge}</span>
            <p>{content.packageDifference.content}</p>
          </div>
          <div className="package-difference-list">
            {content.packageDifference.highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="package-difference-item">
                  <Icon />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <div className="spec-content-grid">
        <section className="kt-card spec-detail-card">
          <div className="spec-section-heading">
            <RadioIcon />
            <h3>Detail spesifikasi</h3>
          </div>
          <dl className="technical-spec-grid">
            {content.technicalSpecs.map((spec) => (
              <div key={spec.label} className="technical-spec-row">
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <aside className="kt-card range-note-card">
          <div className="spec-section-heading">
            <SignalIcon />
            <h3>{content.rangeNote.title}</h3>
          </div>
          <p>{content.rangeNote.summary}</p>
          <div className="range-note-list">
            {content.rangeNote.details.map((detail) => (
              <div key={detail} className="range-note-item">
                <CheckCircleIcon />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="spec-content-grid spec-content-grid--balanced">
        <section className="kt-card spec-detail-card">
          <div className="spec-section-heading">
            <ZapIcon />
            <h3>Fitur utama</h3>
          </div>
          <FeatureList items={content.features} />
        </section>

        <section className="kt-card spec-detail-card">
          <div className="spec-section-heading">
            <MapPinIcon />
            <h3>Cocok untuk</h3>
          </div>
          <FeatureList items={content.suitableFor} />
        </section>
      </div>

      <div className="spec-cta-card kt-card">
        <div>
          <h3>{content.cta.title}</h3>
          <p>{content.cta.body}</p>
        </div>
        <button type="button" onClick={onReturnToBooking} className="btn btn-secondary">
          <ArrowLeftIcon />
          {content.cta.button}
        </button>
      </div>
    </section>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="feature-list-grid">
      {items.map((item) => (
        <div key={item} className="feature-list-item">
          <CheckCircleIcon />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
