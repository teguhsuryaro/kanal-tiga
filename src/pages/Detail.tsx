import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  BatteryIcon,
  CalendarIcon,
  CheckCircleIcon,
  FileTextIcon,
  HeadphonesIcon,
  MapPinIcon,
  MessageCircleIcon,
  RadioIcon,
  ShieldCheckIcon,
  SignalIcon,
  TruckIcon,
  UsersIcon,
  Volume2Icon,
  ZapIcon,
} from '../components/Icons';
import ProductVisual from '../components/ProductVisual';

type IconComponent = typeof RadioIcon;

type ProductSpecContent = {
  title: string;
  intro: string;
  summaryLabel: string;
  highlights: Array<{
    label: string;
    value: string;
    icon: IconComponent;
  }>;
  packageDifference?: {
    title: string;
    badge: string;
    content: string;
    highlights: Array<{
      label: string;
      icon: IconComponent;
    }>;
  };
  technicalSpecs: Array<{
    label: string;
    value: string;
  }>;
  rangeNote: {
    title: string;
    summary: string;
    details: string[];
  };
  features: string[];
  suitableFor: string[];
  cta: {
    title: string;
    body: string;
    button: string;
  };
};

type Product = {
  name: string;
  student: string;
  general: string;
  variant: 'regular' | 'earphone';
  desc: string;
  quickSpecs: Array<{
    label: string;
    value: string;
    icon: IconComponent;
  }>;
  specContent?: ProductSpecContent;
};

type CustomerType = 'mahasiswa' | 'umum';
type DeliveryOption = 'pickup' | 'del_1_3' | 'del_3_10' | 'del_10_plus';
type BookingField = 'unitCount' | 'useDate' | 'duration' | 'eventName' | 'eventLocation';
type BookingFormValues = Record<BookingField, string> & {
  notes: string;
};
type BookingErrors = Partial<Record<BookingField, string>>;

const baseTechnicalSpecs = [
  { label: 'Jenis perangkat', value: 'Handy Talkie / Walkie Talkie' },
  { label: 'Frekuensi', value: 'UHF' },
  { label: 'Kapasitas channel', value: '16 channel' },
  { label: 'Channel spacing', value: '25 KHz' },
  { label: 'Tegangan operasional', value: '3.7V' },
  { label: 'Kapasitas baterai', value: '2800 mAh' },
  { label: 'Jenis baterai', value: 'Lithium-ion' },
  { label: 'Daya tahan baterai', value: 'Menyesuaikan durasi dan intensitas penggunaan' },
  { label: 'Stabilitas frekuensi', value: '2.5 ppm' },
  { label: 'Suhu operasional', value: '-30°C sampai +60°C' },
  { label: 'Impedansi antena', value: '50Ω' },
  { label: 'Dimensi unit', value: '±60 × 33 × 115 mm tanpa antena' },
  { label: 'Berat unit', value: '±198 gram dengan baterai dan antena' },
  { label: 'Daya output', value: '±5W' },
  { label: 'Audio', value: 'Jernih untuk komunikasi lapangan' },
  { label: 'Fitur tambahan', value: 'Senter LED darurat' },
];

const sharedRangeNote = {
  title: 'Catatan jangkauan',
  summary:
    'Jangkauan HT dipengaruhi oleh kondisi medan, bangunan, pohon, kendaraan, dan hambatan lain di sekitar lokasi.',
  details: [
    'Pada area terbuka tanpa hambatan, perangkat diklaim dapat menjangkau hingga 10 km.',
    'Berdasarkan uji internal Kanal Tiga, komunikasi masih jelas di sekitar 2,5 km pada area dengan banyak hambatan.',
    'Di atas 3 km, suara mulai muncul noise, tetapi masih dapat terdengar tergantung kondisi lokasi.',
  ],
};

const productData: Record<string, Product> = {
  'ht-reguler': {
    name: 'HT Reguler',
    student: '10.000',
    general: '15.000',
    variant: 'regular',
    desc: 'HT Reguler adalah unit handy talkie standar untuk kebutuhan komunikasi tim saat acara, kegiatan lapangan, atau aktivitas outdoor. Cocok digunakan ketika tim membutuhkan komunikasi cepat tanpa bergantung pada jaringan internet.',
    quickSpecs: [
      { label: 'Frekuensi', value: 'UHF', icon: RadioIcon },
      { label: 'Channel', value: '16 channel', icon: UsersIcon },
      { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
      { label: 'Daya output', value: '±5W', icon: ZapIcon },
      { label: 'Jangkauan', value: 'hingga 10 km di area terbuka tanpa hambatan', icon: SignalIcon },
    ],
    specContent: {
      title: 'HT Reguler',
      intro: 'Ringkasan spesifikasi utama unit HT yang digunakan Kanal Tiga.',
      summaryLabel: 'Ringkasan spesifikasi HT Reguler',
      highlights: [
        { label: 'Frekuensi', value: 'UHF', icon: RadioIcon },
        { label: 'Channel', value: '16 channel', icon: UsersIcon },
        { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
        { label: 'Daya output', value: '±5W', icon: ZapIcon },
        { label: 'Jangkauan', value: 'hingga 10 km di area terbuka tanpa hambatan', icon: SignalIcon },
      ],
      technicalSpecs: baseTechnicalSpecs,
      rangeNote: sharedRangeNote,
      features: [
        'Komunikasi cepat tanpa internet.',
        'Ringkas dan mudah dibawa.',
        'Cocok untuk koordinasi banyak titik.',
        'Dilengkapi baterai 2800 mAh.',
        'Memiliki senter LED darurat.',
        'Aksesori seperti charger, antena, baterai, dan headset mudah digunakan.',
      ],
      suitableFor: [
        'Kepanitiaan acara',
        'Camping dan kegiatan outdoor',
        'Keamanan acara',
        'Koordinasi lapangan',
        'Organisasi dan komunitas',
        'Kegiatan logistik atau operasional',
      ],
      cta: {
        title: 'Butuh HT Reguler untuk acara Anda?',
        body: 'Isi data booking di bagian atas agar Kanal Tiga dapat membantu cek ketersediaan unit dan opsi pengambilan yang sesuai.',
        button: 'Lengkapi Form Booking',
      },
    },
  },
  'ht-earphone': {
    name: 'HT + Earphone',
    student: '15.000',
    general: '20.000',
    variant: 'earphone',
    desc: 'HT + Earphone menggunakan unit HT yang sama seperti HT Reguler, dengan tambahan earphone khusus agar komunikasi lebih jelas dan nyaman di area ramai.',
    quickSpecs: [
      { label: 'Frekuensi', value: 'UHF', icon: RadioIcon },
      { label: 'Channel', value: '16 channel', icon: UsersIcon },
      { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
      { label: 'Aksesori', value: 'Earphone khusus', icon: HeadphonesIcon },
      { label: 'Jangkauan', value: 'hingga 10 km di area terbuka tanpa hambatan', icon: SignalIcon },
    ],
    specContent: {
      title: 'HT + Earphone',
      intro: 'Ringkasan spesifikasi unit HT dan aksesori tambahan earphone.',
      summaryLabel: 'Ringkasan spesifikasi HT + Earphone',
      highlights: [
        { label: 'Frekuensi', value: 'UHF', icon: RadioIcon },
        { label: 'Channel', value: '16 channel', icon: UsersIcon },
        { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
        { label: 'Aksesori', value: 'Earphone khusus', icon: HeadphonesIcon },
        { label: 'Jangkauan', value: 'hingga 10 km di area terbuka tanpa hambatan', icon: SignalIcon },
      ],
      packageDifference: {
        title: 'Perbedaan paket',
        badge: 'Spesifikasi HT sama, tambahan earphone khusus.',
        content:
          'Paket ini memakai spesifikasi HT yang sama dengan HT Reguler. Perbedaannya ada pada tambahan earphone khusus yang membantu suara lebih fokus, mudah terdengar, dan lebih nyaman digunakan saat acara berlangsung di area ramai.',
        highlights: [
          { label: 'Spesifikasi HT sama seperti HT Reguler.', icon: RadioIcon },
          { label: 'Termasuk tambahan earphone khusus.', icon: HeadphonesIcon },
          { label: 'Lebih nyaman untuk area ramai.', icon: Volume2Icon },
          { label: 'Membantu komunikasi lebih fokus.', icon: UsersIcon },
          { label: 'Cocok untuk panitia lapangan dan koordinator tim.', icon: ShieldCheckIcon },
        ],
      },
      technicalSpecs: [
        ...baseTechnicalSpecs,
        { label: 'Aksesori tambahan', value: 'Earphone khusus' },
      ],
      rangeNote: sharedRangeNote,
      features: [
        'Spesifikasi HT sama seperti HT Reguler.',
        'Earphone membantu suara lebih jelas di area ramai.',
        'Lebih nyaman untuk komunikasi panitia lapangan.',
        'Mengurangi kebutuhan mendekatkan HT ke telinga.',
        'Cocok untuk koordinasi saat acara padat atau bising.',
      ],
      suitableFor: [
        'Panitia lapangan',
        'Keamanan acara',
        'LO atau liaison officer',
        'Koordinator divisi',
        'Stage crew',
        'Event dengan area ramai',
        'Tim yang membutuhkan komunikasi lebih fokus',
      ],
      cta: {
        title: 'Butuh HT + Earphone untuk acara Anda?',
        body: 'Isi data booking di bagian atas agar Kanal Tiga dapat membantu cek ketersediaan unit dan opsi pengambilan yang sesuai.',
        button: 'Lengkapi Form Booking',
      },
    },
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
