import type { SVGProps } from 'react';
import type React from 'react';
import {
  BatteryIcon,
  HeadphonesIcon,
  RadioIcon,
  ShieldCheckIcon,
  SignalIcon,
  UsersIcon,
  Volume2Icon,
  ZapIcon,
} from '../components/Icons';

type IconProps = SVGProps<SVGSVGElement>;
export type IconComponent = (props: IconProps) => React.JSX.Element;

export type ProductSummary = {
  id: string;
  name: string;
  generalPrice: string;
  studentPrice: string;
  desc: string;
  badge: string;
  variant: 'regular' | 'earphone';
};

export type ProductSpecContent = {
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

export type ProductDetail = {
  name: string;
  student: string;
  general: string;
  variant: 'regular' | 'earphone';
  quickSpecs: Array<{
    label: string;
    value: string;
    icon: IconComponent;
  }>;
  specContent?: ProductSpecContent;
};

/**
 * Daftar ringkasan produk — digunakan di Home page.
 */
export const products: ProductSummary[] = [
  {
    id: 'ht-reguler',
    name: 'HT Reguler',
    generalPrice: '15.000',
    studentPrice: '10.000',
    desc: 'Unit HT siap pakai untuk komunikasi event, camping, kepanitiaan, dan koordinasi lapangan.',
    badge: 'Paket Dasar',
    variant: 'regular',
  },
  {
    id: 'ht-earphone',
    name: 'HT + Earphone',
    generalPrice: '20.000',
    studentPrice: '15.000',
    desc: 'Paket HT dengan tambahan earphone khusus agar suara lebih jelas dan nyaman digunakan di area ramai.',
    badge: 'Dengan Earphone',
    variant: 'earphone',
  },
];

// --- Shared spec data ---

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

/**
 * Data detail produk — digunakan di Detail page.
 * Harga dan nama produk tetap konsisten dengan `products` array.
 */
export const productData: Record<string, ProductDetail> = {
  'ht-reguler': {
    name: 'HT Reguler',
    student: '10.000',
    general: '15.000',
    variant: 'regular',
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
