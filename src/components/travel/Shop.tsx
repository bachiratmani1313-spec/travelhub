import ProductCard from './ProductCard';

export default function Shop() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="text-center pt-12 pb-4 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
          TRAVELHUB BOUTIQUE
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Sélection VRAX-21 pour vos aventures.
        </p>
      </div>
      <ProductCard />
      <div className="text-center py-8 text-neutral-600 text-xs px-4">
        <p>TravelHub est participant au Programme Partenaires d’Amazon.</p>
      </div>
    </div>
  );
}
