import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const productData: Record<string, any> = {
  'ht-reguler': {
    name: 'HT Reguler',
    student: '10.000',
    general: '15.000',
    image: 'https://placehold.co/600x600/ea580c/white?text=HT+Reguler'
  },
  'ht-earphone': {
    name: 'HT + Earphone',
    student: '15.000',
    general: '20.000',
    image: 'https://placehold.co/600x600/9a3412/white?text=HT+Handsfree'
  }
};

export default function Detail() {
  const { id } = useParams();
  const product = productData[id || 'ht-reguler'];

  if (!product) return <div className="p-20 text-center">Produk tidak ditemukan.</div>;

  const [customerType, setCustomerType] = useState<'mahasiswa' | 'umum'>('mahasiswa');
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'del_1_3' | 'del_3_10' | 'del_10_plus'>('pickup');

  const deliveryLabels: Record<string, string> = {
    'pickup': 'Ambil Sendiri (Gratis)',
    'del_1_3': 'Diantar 1-3 km (+Rp5.000)',
    'del_3_10': 'Diantar 3-10 km (+Rp10.000)',
    'del_10_plus': 'Diantar >10 km (Nego Ongkir)'
  };

  const waMessage = `Halo Kanal Tiga, saya ingin booking sewa ${product.name} untuk tanggal...\n\nKategori: ${customerType === 'mahasiswa' ? 'Mahasiswa' : 'Umum'}\nPengiriman: ${deliveryLabels[deliveryOption]}\n\nMohon info ketersediaan unitnya.`;
  const waLink = `https://wa.me/6283150964050?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 md:py-16">
      <Link to="/" className="inline-flex items-center text-orange-600 dark:text-orange-400 mb-4 md:mb-8 hover:underline italic text-xs md:text-base">
        &larr; Kembali ke katalog
      </Link>
      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="rounded-xl md:rounded-3xl overflow-hidden shadow-md md:shadow-2xl bg-slate-200 dark:bg-slate-800">
          <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
        </div>
        
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-black mb-3 md:mb-4">{product.name}</h1>
          
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">1. Pilih Kategori Penyewa</h3>
          <div className="grid grid-cols-2 gap-2 md:gap-4 mb-2">
            <button 
              onClick={() => setCustomerType('mahasiswa')}
              className={`px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border-2 text-left transition-all active:scale-95 ${customerType === 'mahasiswa' ? 'border-orange-600 bg-orange-50 dark:bg-orange-900/30' : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'}`}
            >
              <p className={`text-[10px] md:text-xs uppercase font-semibold mb-0.5 md:mb-1 ${customerType === 'mahasiswa' ? 'text-orange-600 dark:text-orange-400' : 'text-slate-500'}`}>Mahasiswa</p>
              <p className={`text-base md:text-xl font-bold leading-tight ${customerType === 'mahasiswa' ? 'text-orange-700 dark:text-orange-300' : 'text-slate-700 dark:text-slate-300'}`}>Rp{product.student}</p>
            </button>
            <button 
              onClick={() => setCustomerType('umum')}
              className={`px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border-2 text-left transition-all active:scale-95 ${customerType === 'umum' ? 'border-orange-600 bg-orange-50 dark:bg-orange-900/30' : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'}`}
            >
              <p className={`text-[10px] md:text-xs uppercase font-semibold mb-0.5 md:mb-1 ${customerType === 'umum' ? 'text-orange-600 dark:text-orange-400' : 'text-slate-500'}`}>Umum</p>
              <p className={`text-base md:text-xl font-bold leading-tight ${customerType === 'umum' ? 'text-orange-700 dark:text-orange-300' : 'text-slate-700 dark:text-slate-300'}`}>Rp{product.general}</p>
            </button>
          </div>
          {customerType === 'mahasiswa' && (
            <p className="text-[11px] md:text-xs text-amber-600 dark:text-amber-400 font-medium italic mb-4 md:mb-6">
              * Wajib menyertakan bukti foto KTM di WhatsApp & tunjukkan fisik saat ambil unit.
            </p>
          )}
          {customerType === 'umum' && (
            <div className="mb-4 md:mb-6"></div>
          )}

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">2. Opsi Pengiriman</h3>
          <div className="space-y-2 mb-6 md:mb-8">
            {[
              { id: 'pickup', label: 'Ambil Sendiri', price: 'Gratis' },
              { id: 'del_1_3', label: 'Diantar 1-3 km', price: '+Rp5.000' },
              { id: 'del_3_10', label: 'Diantar 3-10 km', price: '+Rp10.000' },
              { id: 'del_10_plus', label: 'Diantar >10 km', price: 'Nego' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setDeliveryOption(opt.id as any)}
                className={`w-full flex justify-between items-center px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border-2 transition-all active:scale-95 ${deliveryOption === opt.id ? 'border-orange-600 bg-orange-50 dark:bg-orange-900/30' : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'}`}
              >
                <span className={`text-xs md:text-base font-semibold ${deliveryOption === opt.id ? 'text-orange-700 dark:text-orange-300' : 'text-slate-700 dark:text-slate-300'}`}>{opt.label}</span>
                <span className={`text-xs md:text-sm font-bold ${deliveryOption === opt.id ? 'text-orange-600 dark:text-orange-400' : 'text-slate-500'}`}>{opt.price}</span>
              </button>
            ))}
          </div>

          <div className="mb-4 md:mb-10">
            <div>
              <h4 className="font-bold text-sm md:text-base border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">Spesifikasi Unit</h4>
              <ul className="grid grid-cols-2 gap-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-mono">
                <li>📡 Frekuensi: UHF/VHF</li>
                <li>🔋 Baterai: 2800mAh</li>
                <li>📏 Jangkauan: 1-5 KM</li>
                <li>🔊 Audio: Crystal Clear</li>
              </ul>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 w-full p-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 z-40 md:relative md:bg-transparent md:border-none md:p-0 md:backdrop-blur-none">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 md:py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-center rounded-lg md:rounded-2xl font-black text-sm md:text-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 md:space-x-3 active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.13.57-.074 1.758-.717 2.009-1.412.25-.694.25-1.289.175-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Booking via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}