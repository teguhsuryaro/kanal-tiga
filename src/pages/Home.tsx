import { Link } from 'react-router-dom';

const products = [
  {
    id: 'ht-reguler',
    name: 'HT Reguler',
    generalPrice: '15.000',
    studentPrice: '10.000',
    desc: 'Andalan komunikasi lapangan yang kokoh dan jernih.',
    image: 'https://placehold.co/400x400/ea580c/white?text=HT+Reguler'
  },
  {
    id: 'ht-earphone',
    name: 'HT + Earphone',
    generalPrice: '20.000',
    studentPrice: '15.000',
    desc: 'Komunikasi lebih privasi dan profesional dengan handsfree.',
    image: 'https://placehold.co/400x400/9a3412/white?text=HT+Handsfree'
  }
];

const faqs = [
  { q: "Berapa lama minimal penyewaan?", a: "Penyewaan alat minimal dilakukan untuk jangka waktu 2 hari." },
  { q: "Apa saja syarat jaminannya?", a: "Wajib meninggalkan KTM fisik bagi mahasiswa, atau KTP/SIM asli bagi kategori umum." },
  { q: "Bagaimana sistem pembayarannya?", a: "Wajib melakukan DP (Down Payment) minimal 50% untuk mengamankan jadwal sewa." },
  { q: "Bagaimana jika alat rusak atau hilang?", a: "Penyewa wajib bertanggung jawab penuh dan mengganti alat sesuai dengan harga unit baru." }
];

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter mb-3 md:mb-6">
            Komunikasi Lancar,<br /> <span className="text-orange-600 dark:text-orange-400">Event Sukses.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10">
            Penyediaan sewa HT terpercaya tepat di jantung area Fakultas Teknik UNSOED Purbalingga. Harga hemat, kualitas prima.
          </p>
          <a href="#products" className="btn-primary text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3">Lihat Katalog Produk</a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-20 bg-slate-100/50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="section-title">Pilihan Paket Sewa</h2>
            <p className="text-slate-500 text-sm md:text-base">Pilih unit yang sesuai dengan kebutuhan koordinasi tim Anda.</p>
          </div>
          <div className="mb-8 md:mb-12 bg-orange-50 dark:bg-orange-900/30 border-2 border-orange-200 dark:border-orange-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-sm">
            <p className="text-xs md:text-base text-orange-800 dark:text-orange-200 font-medium leading-relaxed">
              🎓 <strong className="font-black text-orange-600 dark:text-orange-400">Promo Spesial Mahasiswa!</strong> Dapatkan potongan harga diskon sebesar <strong className="font-black">Rp5.000 per unit HT</strong> untuk Anda yang berstatus mahasiswa.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="card group">
                <img src={product.image} alt={product.name} className="w-full aspect-[4/3] md:aspect-video object-cover rounded-lg md:rounded-xl mb-3 md:mb-6 group-hover:scale-105 transition-transform" />
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{product.name}</h3>
                <p className="text-slate-500 text-xs md:text-sm mb-3 md:mb-4">{product.desc}</p>
                <div className="flex justify-between items-end mb-4 md:mb-6">
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Mahasiswa</p>
                    <p className="text-base md:text-xl font-bold text-orange-600 dark:text-orange-400">Rp{product.studentPrice}<span className="text-[10px] md:text-sm font-normal">/hari</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider">Umum</p>
                    <p className="text-sm md:text-lg font-semibold">Rp{product.generalPrice}</p>
                  </div>
                </div>
                <Link to={`/detail/${product.id}`} className="block text-center py-1.5 md:py-3 text-xs md:text-base border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition-all active:scale-95">
                  Detail Spesifikasi
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="card text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 font-bold text-lg md:text-xl">01</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Syarat Praktis</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">Proses administrasi cepat hanya dengan jaminan identitas fisik.</p>
            </div>
            <div className="card text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 font-bold text-lg md:text-xl">02</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Unit Terawat</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">Semua unit HT kami melalui pengecekan rutin untuk performa maksimal.</p>
            </div>
            <div className="card text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 font-bold text-lg md:text-xl">03</div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Harga Mahasiswa</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">Tarif sewa bersahabat khusus untuk kantong pejuang kampus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Terms Section */}
      <section className="py-12 md:py-20 bg-slate-100/50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">Syarat & Ketentuan</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card h-full">
                <h4 className="font-bold text-sm md:text-base text-orange-600 dark:text-orange-400 mb-1 font-mono">Q: {faq.q}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">A: {faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10 text-center">
            <a 
              href="https://docs.google.com/document/d/1QKNRmoZvyIV6OnHzKGdSPtdzPgZkll7VhSPxohq-9tE/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 text-xs md:text-base border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 font-bold rounded-lg md:rounded-xl hover:bg-orange-600 hover:text-white transition-all active:scale-95 shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Baca Syarat & Ketentuan Lengkap
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}