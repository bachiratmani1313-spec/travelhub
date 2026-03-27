import React from 'react';
import { Plane, ExternalLink } from 'lucide-react';
import { FlightResult } from '../../types/travel';
import { format } from 'date-fns';

interface FlightCardProps {
  flight: FlightResult;
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-6 hover:shadow-xl transition-all group">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4 w-full md:w-48">
          <img
            src={flight.airlineLogo}
            alt={flight.airline}
            className="w-10 h-10 rounded-full object-cover border border-zinc-100"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-sm text-zinc-900">{flight.airline}</span>
        </div>

        <div className="flex flex-1 items-center justify-center gap-8 w-full">
          <div className="text-center">
            <div className="text-xl font-bold text-zinc-900">
              {format(new Date(flight.departureTime), 'HH:mm')}
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
              Départ
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 flex-1 max-w-[120px]">
            <div className="text-[10px] font-bold text-zinc-400">{flight.duration}</div>
            <div className="w-full h-[2px] bg-zinc-100 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-200" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-200" />
              <Plane className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-zinc-300" />
            </div>
            <div className="text-[10px] font-bold text-zinc-400">
              {flight.stops === 0 ? 'Direct' : `${flight.stops} escale(s)`}
            </div>
          </div>

          <div className="text-center">
            <div className="text-xl font-bold text-zinc-900">
              {flight.arrivalTime ? format(new Date(flight.arrivalTime), 'HH:mm') : '--:--'}
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
              Arrivée
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-48">
          <div className="text-2xl font-bold text-black">
            {flight.price} {flight.currency}
          </div>
          <a
            href={flight.deepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-black text-white px-6 py-2 rounded-full text-xs font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
          >
            Voir l'offre
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
