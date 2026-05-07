import backImage from '../assets/images/back.jpg';
import batteryImage from '../assets/images/baterai.jpg';
import frontImage from '../assets/images/front.jpeg';
import fullsetImage from '../assets/images/fullset.webp';
import regularAngleImage from '../assets/images/kanaltiga-1.jpeg';

export type ProductVariant = 'regular' | 'earphone';

export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductImageSet = {
  main: ProductImage;
  gallery: ProductImage[];
};

export const productImages: Record<ProductVariant, ProductImageSet> = {
  regular: {
    main: {
      src: frontImage,
      alt: 'HT Reguler Kanal Tiga tampak depan',
      width: 700,
      height: 700,
    },
    gallery: [
      {
        src: frontImage,
        alt: 'HT Reguler Kanal Tiga tampak depan',
        width: 700,
        height: 700,
      },
      {
        src: backImage,
        alt: 'Tampak belakang HT Kanal Tiga',
        width: 800,
        height: 800,
      },
      {
        src: batteryImage,
        alt: 'Baterai HT Kanal Tiga',
        width: 800,
        height: 800,
      },
      {
        src: regularAngleImage,
        alt: 'HT Reguler Kanal Tiga tampak samping dan depan',
        width: 500,
        height: 500,
      },
    ],
  },
  earphone: {
    main: {
      src: fullsetImage,
      alt: 'Paket HT dengan earphone Kanal Tiga',
      width: 800,
      height: 800,
    },
    gallery: [
      {
        src: fullsetImage,
        alt: 'HT Reguler Kanal Tiga fullset',
        width: 800,
        height: 800,
      },
      {
        src: frontImage,
        alt: 'HT Reguler Kanal Tiga tampak depan',
        width: 700,
        height: 700,
      },
      {
        src: backImage,
        alt: 'Tampak belakang HT Kanal Tiga',
        width: 800,
        height: 800,
      },
      {
        src: batteryImage,
        alt: 'Baterai HT Kanal Tiga',
        width: 800,
        height: 800,
      },
    ],
  },
};
