import React from 'react';
import { Star, MapPin, ExternalLink } from 'lucide-react';
import { HotelResult } from '../../types/travel';

interface HotelCardProps {
  hotel: HotelResult;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col md:flex-row h-full md:h-48">
      <div className="w-full md:w-64 h-48 md:h-full relative overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold">{hotel.rating}</span>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 mb-1">{hotel.name}</h3>
          <div className="flex items-center gap-1 text-zinc-500 text-xs">
            <MapPin className="w-3 h-3" />
            <span>{hotel.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <div className="text-2xl font-bold text-black">
              {hotel.pricePerNight} {hotel.currency}
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Par nuit</div>
          </div>

          <a
            href={hotel.deepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all"
          >
            Réserver
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
