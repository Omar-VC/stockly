export default function DashboardHome() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-stockly-light to-white 
                    lg:items-start lg:justify-start lg:pl-24 lg:pt-16 lg:text-left">
        <img
          src="/stockly-logo-stok.png"
          alt="Stockly"
          className="max-h-[200px] w-auto mb-2 drop-shadow-lg lg:max-h-[220px]  xl:max-h-[270px] lg:-mb-8 lg:-ml-12 lg:-mt-12 -mt-16 md:-mt-32 xl:ml-8 xl:-mt-12 2xl:max-h-[700px] 2xl:ml-96"
        />
        <h2 className="text-s font-bold text-stockly-dark mb-2 lg:text-left lg:-ml-24 lg:text-2xl -mt-4 md:text-xl xl:text-3xl xl:-ml-12 2xl:text-6xl 2xl:-mt-16 2xl:ml-80">
          Tu stock, siempre organizado
        </h2>
        <p className="text-sm text-gray-600 italic lg:text-left lg:-ml-[110px] md:text-lg lg:text-xl xl:-ml-14 xl:text-2xl 2xl:text-5xl 2xl:ml-[310px] 2xl:mt-6">
          La herramienta premium para tu negocio
        </p>
    </div>
  );
}
