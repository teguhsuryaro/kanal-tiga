import { Component, type ReactNode } from 'react';
import { RadioIcon } from './Icons';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="detail-shell">
          <div className="kt-container">
            <div className="kt-card detail-panel" style={{ textAlign: 'center', paddingBlock: '64px' }}>
              <span className="icon-chip" style={{ margin: '0 auto 24px', color: 'var(--kt-orange-600)', background: 'var(--kt-orange-100)' }}>
                <RadioIcon />
              </span>
              <h1 className="detail-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                Terjadi Kesalahan
              </h1>
              <p className="detail-subtitle" style={{ maxWidth: '480px', margin: '16px auto 0' }}>
                Maaf, aplikasi mengalami masalah secara tidak terduga. Silakan muat ulang halaman.
              </p>
              <div style={{ marginTop: '32px' }}>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="btn btn-primary"
                >
                  Muat Ulang Halaman
                </button>
              </div>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
