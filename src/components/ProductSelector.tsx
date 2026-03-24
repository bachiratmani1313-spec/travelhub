import React from 'react';
import { ProductType } from '../services/mockupService';
import { Shirt, Coffee, GraduationCap, ShoppingBag, Smartphone, User } from 'lucide-react';

interface ProductSelectorProps {
  selected: ProductType;
  onSelect: (type: ProductType) => void;
}

const products: { type: ProductType; label: string; icon: React.ReactNode }[] = [
  { type: 't-shirt', label: 'T-Shirt', icon: <Shirt className="w-6 h-6" /> },
  { type: 'hoodie', label: 'Hoodie', icon: <User className="w-6 h-6" /> },
  { type: 'mug', label: 'Mug', icon: <Coffee className="w-6 h-6" /> },
  { type: 'cap', label: 'Cap', icon: <GraduationCap className="w-6 h-6" /> },
  { type: 'tote-bag', label: 'Tote Bag', icon: <ShoppingBag className="w-6 h-6" /> },
  { type: 'phone-case', label: 'Phone Case', icon: <Smartphone className="w-6 h-6" /> },
];

export const ProductSelector: React.FC<ProductSelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="brutalist-card">
      <h3 className="font-display text-xl font-bold mb-4 uppercase">2. Select Product</h3>
      <div className="grid grid-cols-2 gap-3">
        {products.map((p) => (
          <button
            key={p.type}
            onClick={() => onSelect(p.type)}
            className={`flex items-center gap-3 p-3 border-2 transition-all ${
              selected === p.type 
                ? 'border-black bg-black text-white' 
                : 'border-zinc-200 hover:border-black bg-white'
            }`}
          >
            {p.icon}
            <span className="font-bold text-sm uppercase tracking-tight">{p.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
