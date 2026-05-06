import backImage from '../assets/images/back.jpg';
import batteryImage from '../assets/images/baterai.jpg';
import frontImage from '../assets/images/front.jpeg';
import fullsetImage from '../assets/images/fullset.webp';
import regularAngleImage from '../assets/images/kanaltiga (1).jpeg';

export type ProductVariant = 'regular' | 'earphone';

export type ProductImage = {
  src: string;
  alt: string;
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
    },
    gallery: [
      {
        src: frontImage,
        alt: 'HT Reguler Kanal Tiga tampak depan',
      },
      {
        src: backImage,
        alt: 'Tampak belakang HT Kanal Tiga',
      },
      {
        src: batteryImage,
        alt: 'Baterai HT Kanal Tiga',
      },
      {
        src: regularAngleImage,
        alt: 'HT Reguler Kanal Tiga tampak samping dan depan',
      },
    ],
  },
  earphone: {
    main: {
      src: fullsetImage,
      alt: 'Paket HT dengan earphone Kanal Tiga',
    },
    gallery: [
      {
        src: fullsetImage,
        alt: 'HT Reguler Kanal Tiga fullset',
      },
      {
        src: frontImage,
        alt: 'HT Reguler Kanal Tiga tampak depan',
      },
      {
        src: backImage,
        alt: 'Tampak belakang HT Kanal Tiga',
      },
      {
        src: batteryImage,
        alt: 'Baterai HT Kanal Tiga',
      },
    ],
  },
};
