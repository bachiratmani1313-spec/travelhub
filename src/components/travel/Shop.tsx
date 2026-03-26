import React, { useState } from 'react';
import { ShoppingBag, ExternalLink, Sun, Luggage, Zap, Dumbbell, Shield, Package, HeartPulse, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../../data/products';

interface ShopProps {
  onBack: () => void;
}

export const Shop: React.FC<ShopProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesFilter = filter === 'all' || product.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'Tout', icon: ShoppingBag },
    { id: 'bagages', label: 'Bagages', icon: Luggage },
    { id: 'tech', label: 'Tech', icon: Zap },
    { id: 'organisation', label: 'Organisation', icon: Package },
    { id: 'sécurité', label: 'Sécurité', icon: Shield },
    { id: 'santé', label: 'Santé', icon: HeartPulse },
    { id: 'plage', label: 'Soleil', icon: Sun },
    { id: 'sport', label: 'Sport', icon: Dumbbell }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="flex-grow">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-4">
            Travel<span className="text-amber-400">Shop</span>
          </h1>
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">La sélection VRAX-21 pour vos aventures</p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-96 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-amber-400 transition-colors" />
          <input 
            type="text"
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-sm text-white focus:border-amber-400 outline-none transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-zinc-800 rounded-full transition-colors"
            >
              <X className="w-3 h-3 text-zinc-500" />
            </button>
          )}
        </div>
      </div>
      
      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
              filter === cat.id 
              ? 'bg-amber-400 text-black border-amber-400 shadow-lg shadow-amber-400/20' 
              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600'
            }`}
          >
            <cat.icon className="w-3.5 h-3.5" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-400/50 transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-zinc-800 border-2 border-zinc-700">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="block w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                  {product.price}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  {product.category === 'Bagages' && <Luggage className="w-3 h-3 text-amber-400" />}
                  {product.category === 'Tech' && <Zap className="w-3 h-3 text-amber-400" />}
                  {product.category === 'Plage' && <Sun className="w-3 h-3 text-amber-400" />}
                  {product.category === 'Sport' && <Dumbbell className="w-3 h-3 text-amber-400" />}
                  {product.category === 'Sécurité' && <Shield className="w-3 h-3 text-amber-400" />}
                  {product.category === 'Organisation' && <Package className="w-3 h-3 text-amber-400" />}
                  {product.category === 'Santé' && <HeartPulse className="w-3 h-3 text-amber-400" />}
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 hover:bg-amber-400 text-white hover:text-black rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all group/btn"
                  >
                    Vérifier sur Amazon
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <div className="bg-zinc-900 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-zinc-800">
            <Search className="w-6 h-6 text-zinc-600" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Aucun article trouvé</h3>
          <p className="text-zinc-500 text-sm">Essayez de modifier vos filtres ou votre recherche.</p>
          <button 
            onClick={() => { setFilter('all'); setSearchQuery(''); }}
            className="mt-6 text-amber-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Réinitialiser tout
          </button>
        </div>
      )}

      {/* Footer CTA */}
      <div className="mt-16 p-8 bg-zinc-900/30 border border-dashed border-zinc-800 rounded-3xl text-center">
        <h4 className="text-white font-bold mb-2">Vous ne trouvez pas ce que vous cherchez ?</h4>
        <p className="text-zinc-400 text-sm mb-6">Explorez des milliers d'autres articles de voyage directement sur Amazon avec notre lien partenaire.</p>
        <a 
          href="https://www.amazon.fr/s?k=accessoires+voyage"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors"
        >
          Voir tout le catalogue voyage <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
