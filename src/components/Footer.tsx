export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-lg md:text-xl font-bold text-orange-600 dark:text-orange-400 mb-2 md:mb-4">Kanal Tiga</h3>
        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm max-w-md mx-auto mb-4 md:mb-6 italic">
          "Solusi komunikasi andalan untuk kelancaran setiap event Anda di sekitar Teknik UNSOED."
        </p>
        <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-slate-500 dark:text-slate-500">
          <p>📍 Jl. Mayjen Sungkono, Blater, Purbalingga (Dekat FT UNSOED)</p>
          <p>⏰ Operasional: Setiap Hari (07.00 - 22.00 WIB)</p>
        </div>
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-200 dark:border-slate-800 text-[10px] md:text-xs">
          &copy; {new Date().getFullYear()} Kanal Tiga HT Rental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}