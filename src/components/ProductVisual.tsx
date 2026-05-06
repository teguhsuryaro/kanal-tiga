import { HeadphonesIcon, RadioIcon, SignalIcon } from './Icons';

type ProductVisualProps = {
  variant?: 'regular' | 'earphone';
  compact?: boolean;
};

export default function ProductVisual({ variant = 'regular', compact = false }: ProductVisualProps) {
  const withEarphone = variant === 'earphone';

  return (
    <div className={`product-visual ${compact ? 'product-visual--compact' : ''}`}>
      <div className="product-signal product-signal--one" />
      <div className="product-signal product-signal--two" />
      <div className="radio-unit" aria-hidden="true">
        <span className="radio-antenna" />
        <span className="radio-speaker">
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="radio-screen">
          <SignalIcon className="radio-screen-icon" />
        </span>
        <span className="radio-control radio-control--left" />
        <span className="radio-control radio-control--right" />
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
