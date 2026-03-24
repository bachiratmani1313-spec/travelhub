import { PRODUCTS } from '../data/products';

const AFFILIATE_TAG = "vrax-21";

export default function ProductCard() {
  const getLink = (url: string) => {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tag=${AFFILIATE_TAG}`;
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group relative bg-black border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 flex flex-col">
            <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 bg-yellow-400 text-black text-[10px] font-bold px-2.5 py-1 rounded shadow-lg uppercase">
                {product.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-neutral-900/50 to-black">
              <h3 className="text-lg font-bold text-white mb-2 truncate group-hover:text-yellow-400 transition-colors">{product.name}</h3>
              <p className="text-neutral-400 text-sm mb-6 flex-grow line-clamp-2">{product.description}</p>
              <a href={getLink(product.link)} target="_blank" rel="noopener noreferrer sponsored" className="w-full mt-auto flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-4 rounded-lg transition-all duration-200">
                <span>Voir sur Amazon</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
