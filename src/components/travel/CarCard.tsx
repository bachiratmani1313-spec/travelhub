import React from 'react';
import { Car, ExternalLink, ShieldCheck } from 'lucide-react';
import { CarResult } from '../../types/travel';

interface CarCardProps {
  car: CarResult;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col md:flex-row h-full md:h-48">
      <div className="w-full md:w-64 h-48 md:h-full relative overflow-hidden bg-zinc-50 p-4 flex items-center justify-center">
        <img 
          src={car.image} 
          alt={car.model} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Assurance incluse</span>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{car.company}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-200" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{car.type}</span>
          </div>
          <h3 className="text-lg font-bold text-zinc-900">{car.model}</h3>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <div className="text-2xl font-bold text-black">
              {car.pricePerDay} {car.currency}
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Par jour</div>
          </div>

          <a
            href={car.deepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all"
          >
            Louer
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
