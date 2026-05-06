import { useState } from 'react';
import { HeadphonesIcon, RadioIcon } from './Icons';
import { productImages, type ProductVariant } from '../data/productImages';

type ProductVisualProps = {
  variant?: ProductVariant;
  compact?: boolean;
  showGallery?: boolean;
};

export default function ProductVisual({
  variant = 'regular',
  compact = false,
  showGallery = false,
}: ProductVisualProps) {
  const withEarphone = variant === 'earphone';
  const imageSet = productImages[variant];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const galleryImages = showGallery ? imageSet.gallery : [imageSet.main];
  const selectedImage = galleryImages[selectedIndex] ?? galleryImages[0] ?? imageSet.main;

  return (
    <div className="product-visual-shell">
      <div className={`product-visual ${compact ? 'product-visual--compact' : ''}`}>
        <div className="product-signal product-signal--one" />
        <div className="product-signal product-signal--two" />

        <div className="product-photo-frame">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className={`product-photo ${withEarphone ? 'product-photo--earphone' : ''}`}
            loading={compact ? 'lazy' : undefined}
            decoding="async"
          />
        </div>

        {withEarphone ? (
          <div className="earphone-unit" aria-hidden="true">
            <HeadphonesIcon className="earphone-icon" />
            <span className="earphone-wire" />
          </div>
        ) : (
          <div className="radio-badge" aria-hidden="true">
            <RadioIcon className="radio-badge-icon" />
          </div>
        )}
      </div>

      {showGallery && (
        <div className="product-visual-gallery" aria-label="Foto produk Kanal Tiga">
          {galleryImages.map((image, index) => (
            <button
              key={image.alt}
              type="button"
              className={`product-visual-thumb ${selectedIndex === index ? 'is-active' : ''}`}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Tampilkan ${image.alt}`}
              aria-pressed={selectedIndex === index}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
