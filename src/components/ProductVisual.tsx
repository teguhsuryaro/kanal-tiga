import { useState } from 'react';
import { HeadphonesIcon, RadioIcon } from './Icons';
import { productImages, type ProductImage, type ProductVariant } from '../data/productImages';

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
  if (showGallery) {
    return <ProductVisualGallery variant={variant} />;
  }

  return (
    <div className="product-visual-shell">
      <ProductVisualFrame variant={variant} image={productImages[variant].main} compact={compact} />
    </div>
  );
}

function ProductVisualGallery({ variant }: { variant: ProductVariant }) {
  const imageSet = productImages[variant];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = imageSet.gallery[selectedIndex] ?? imageSet.gallery[0] ?? imageSet.main;

  function handleImageSelect(index: number) {
    setSelectedIndex(index);
  }

  return (
    <div className="product-visual-shell">
      <ProductVisualFrame variant={variant} image={selectedImage} />

      <div className="product-visual-gallery" aria-label="Foto produk Kanal Tiga">
        {imageSet.gallery.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            className={`product-visual-thumb ${selectedIndex === index ? 'is-active' : ''}`}
            onClick={() => handleImageSelect(index)}
            aria-label={`Tampilkan ${image.alt}`}
            aria-pressed={selectedIndex === index}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductVisualFrame({
  variant,
  image,
  compact = false,
}: {
  variant: ProductVariant;
  image: ProductImage;
  compact?: boolean;
}) {
  const withEarphone = variant === 'earphone';

  return (
    <div className={`product-visual ${compact ? 'product-visual--compact' : ''}`}>
      <div className="product-signal product-signal--one" />
      <div className="product-signal product-signal--two" />

      <div className="product-photo-frame">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`product-photo ${withEarphone ? 'product-photo--earphone' : ''}`}
          loading={compact ? 'lazy' : undefined}
          fetchPriority={compact ? 'auto' : 'high'}
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
  );
}
