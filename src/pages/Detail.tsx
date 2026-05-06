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

const baseQuickSpecs = [
  { label: 'Frekuensi', value: 'UHF', icon: RadioIcon },
  { label: 'Channel', value: '16 channel', icon: UsersIcon },
  { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
  { label: 'Jangkauan', value: 'Hingga 10 km area terbuka', icon: SignalIcon },
];

const baseHighlights = [
  { label: 'Frekuensi', value: 'UHF', icon: RadioIcon },
  { label: 'Kapasitas', value: '16 channel', icon: UsersIcon },
  { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
  { label: 'Daya Output', value: '±5W', icon: ZapIcon },
  { label: 'Jangkauan', value: 'Hingga 10 km area terbuka', icon: SignalIcon },
];

const baseTechnicalSpecs = [
  { label: 'Jenis Perangkat', value: 'Handy Talkie / Walkie Talkie' },
  { label: 'Frekuensi', value: 'UHF' },
  { label: 'Kapasitas Channel', value: '16 channel' },
  { label: 'Channel Spacing', value: '25 KHz' },
  { label: 'Tegangan Operasional', value: '3.7V' },
  { label: 'Kapasitas Baterai', value: '2800 mAh' },
  { label: 'Jenis Baterai', value: 'Lithium-ion' },
  { label: 'Daya Tahan Baterai', value: 'Menyesuaikan durasi dan intensitas penggunaan' },
  { label: 'Stabilitas Frekuensi', value: '2.5 ppm' },
  { label: 'Suhu Operasional', value: '-30°C sampai +60°C' },
  { label: 'Impedansi Antena', value: '50Ω' },
  { label: 'Dimensi Unit', value: '± 60 × 33 × 115 mm tanpa antena' },
  { label: 'Berat Unit', value: '± 198 gram dengan baterai dan antena' },
  { label: 'Daya Output', value: '±5W' },
  { label: 'Jangkauan Komunikasi', value: 'Hingga 10 km pada area terbuka tanpa hambatan' },
  { label: 'Audio', value: 'Suara jernih untuk komunikasi lapangan' },
  { label: 'Fitur Tambahan', value: 'Senter LED darurat' },
];

const baseRangeNote = {
  title: 'Catatan Jangkauan',
  summary:
    'Jangkauan HT sangat dipengaruhi oleh kondisi medan dan hambatan di sekitar lokasi penggunaan.',
  details: [
    'Pada area terbuka tanpa hambatan, perangkat diklaim mampu menjangkau hingga 10 km.',
    'Berdasarkan uji coba internal Kanal Tiga, komunikasi masih terdengar jelas pada jarak sekitar 2,5 km di area dengan banyak hambatan seperti bangunan, pohon, kendaraan, dan kondisi lingkungan sekitar.',
    'Pada jarak di atas 3 km, suara mulai muncul noise, tetapi masih dapat terdengar tergantung kondisi lokasi.',
  ],
};

const baseFeatures = [
  'Komunikasi cepat tanpa pulsa dan internet.',
  'Menggunakan frekuensi UHF dengan 16 channel.',
  'Baterai 2800 mAh untuk kebutuhan penggunaan lapangan.',
  'Ukuran ringkas dan mudah dibawa.',
  'Audio cukup jernih untuk koordinasi acara.',
  'Dilengkapi senter LED untuk kondisi darurat.',
  'Cocok digunakan di area kampus, event, outdoor, dan kegiatan lapangan.',
  'Aksesori seperti charger, antena, baterai, dan headset mudah digunakan.',
];

const productData: Record<string, Product> = {
  'ht-reguler': {
    name: 'HT Reguler',
    student: '10.000',
    general: '15.000',
    variant: 'regular',
    desc: 'HT Reguler adalah handy talkie praktis untuk kebutuhan komunikasi event, kampus, camping, dan koordinasi lapangan. Menggunakan frekuensi UHF dengan 16 channel, baterai 2800 mAh, audio jernih, serta jangkauan hingga 10 km pada area terbuka tanpa hambatan.',
    quickSpecs: baseQuickSpecs,
    specContent: {
      title: 'Spesifikasi HT Reguler',
      intro:
        'HT Reguler adalah handy talkie praktis untuk komunikasi jarak dekat hingga menengah. Unit ini cocok digunakan untuk event kampus, kegiatan organisasi, camping, keamanan acara, kepanitiaan lapangan, dan kebutuhan koordinasi tim tanpa bergantung pada pulsa atau internet.',
      summaryLabel: 'Ringkasan spesifikasi HT Reguler',
      highlights: baseHighlights,
      technicalSpecs: baseTechnicalSpecs,
      rangeNote: baseRangeNote,
      features: baseFeatures,
      suitableFor: [
        'PKKMB atau ospek kampus.',
        'Event mahasiswa dan kepanitiaan besar.',
        'Camping, hiking, dan kegiatan outdoor.',
        'Keamanan acara.',
        'Koordinasi lapangan.',
        'Organisasi mahasiswa dan komunitas.',
        'Event organizer kecil.',
        'Kegiatan logistik dan operasional.',
      ],
      cta: {
        title: 'Butuh HT Reguler untuk koordinasi acara?',
        body: 'Kirim detail kebutuhan Anda lewat WhatsApp agar Kanal Tiga bisa bantu cek ketersediaan unit dan opsi pengambilan.',
        button: 'Booking HT Reguler',
      },
    },
  },
  'ht-earphone': {
    name: 'HT + Earphone',
    student: '15.000',
    general: '20.000',
    variant: 'earphone',
    desc: 'HT + Earphone menggunakan unit HT dengan spesifikasi yang sama seperti HT Reguler, namun dilengkapi earphone khusus agar suara lebih jelas dan lebih mudah terdengar saat digunakan di area ramai atau kondisi event yang bising.',
    quickSpecs: [
      { label: 'Frekuensi', value: 'UHF', icon: RadioIcon },
      { label: 'Channel', value: '16 channel', icon: UsersIcon },
      { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
      { label: 'Aksesori', value: 'Earphone khusus', icon: HeadphonesIcon },
    ],
    specContent: {
      title: 'Spesifikasi HT + Earphone',
      intro:
        'HT + Earphone menggunakan unit HT dengan spesifikasi yang sama seperti HT Reguler, namun dilengkapi earphone khusus agar suara lebih jelas dan lebih mudah terdengar saat digunakan di area ramai atau kondisi event yang bising.',
      summaryLabel: 'Ringkasan spesifikasi HT + Earphone',
      highlights: [
        { label: 'Frekuensi', value: 'UHF', icon: RadioIcon },
        { label: 'Kapasitas', value: '16 channel', icon: UsersIcon },
        { label: 'Baterai', value: '2800 mAh', icon: BatteryIcon },
        { label: 'Daya Output', value: '±5W', icon: ZapIcon },
        { label: 'Aksesori', value: 'Earphone khusus', icon: HeadphonesIcon },
      ],
      packageDifference: {
        title: 'Perbedaan Paket',
        badge: 'Spesifikasi HT sama, tambahan earphone khusus.',
        content:
          'Paket HT + Earphone menggunakan unit HT yang sama dengan HT Reguler. Perbedaannya ada pada tambahan earphone khusus yang membantu suara lebih jelas, lebih fokus, dan lebih nyaman digunakan saat koordinasi di area ramai.',
        highlights: [
          { label: 'Spesifikasi HT sama seperti HT Reguler.', icon: RadioIcon },
          { label: 'Dilengkapi earphone khusus.', icon: HeadphonesIcon },
          { label: 'Suara lebih jelas di area ramai.', icon: Volume2Icon },
          { label: 'Lebih nyaman untuk panitia lapangan.', icon: UsersIcon },
          { label: 'Cocok untuk keamanan, LO, koordinator divisi, dan stage crew.', icon: ShieldCheckIcon },
        ],
      },
      technicalSpecs: baseTechnicalSpecs,
      rangeNote: baseRangeNote,
      features: [
        ...baseFeatures,
        'Tambahan earphone membantu komunikasi lebih fokus di area ramai.',
        'Lebih nyaman untuk role panitia yang perlu mendengar instruksi cepat.',
      ],
      suitableFor: [
        'Panitia lapangan.',
        'Keamanan acara.',
        'LO / liaison officer.',
        'Koordinator divisi.',
        'Stage crew.',
        'Event dengan area ramai.',
        'Kegiatan yang membutuhkan komunikasi lebih jelas.',
      ],
      cta: {
        title: 'Butuh HT + Earphone untuk area event yang ramai?',
        body: 'Kirim detail kebutuhan Anda lewat WhatsApp agar Kanal Tiga bisa bantu cek ketersediaan paket HT dengan earphone khusus.',
        button: 'Booking HT + Earphone',
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
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                <MessageCircleIcon />
                Booking via WhatsApp
              </a>
            </div>
          </section>
        </div>

        {product.specContent && (
          <ProductSpecification content={product.specContent} waLink={waLink} />
        )}
      </div>
    </main>
  );
}

function ProductSpecification({
  content,
  waLink,
}: {
  content: ProductSpecContent;
  waLink: string;
}) {
  return (
    <section className="product-spec-section" aria-labelledby="product-spec-title">
      <div className="kt-card spec-intro-card">
        <div>
          <div className="section-kicker">
            <FileTextIcon />
            Spesifikasi produk
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
            <h3>Detail Teknis</h3>
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
            <h3>Fitur Utama</h3>
          </div>
          <FeatureList items={content.features} />
        </section>

        <section className="kt-card spec-detail-card">
          <div className="spec-section-heading">
            <MapPinIcon />
            <h3>Cocok Digunakan Untuk</h3>
          </div>
          <FeatureList items={content.suitableFor} />
        </section>
      </div>

      <div className="spec-cta-card kt-card">
        <div>
          <h3>{content.cta.title}</h3>
          <p>{content.cta.body}</p>
        </div>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-green">
          <MessageCircleIcon />
          {content.cta.button}
        </a>
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
