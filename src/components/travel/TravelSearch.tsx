import React, { useState } from 'react';
import { Plane, Hotel, Car, Search, Calendar, Users, MapPin, ArrowRightLeft, ArrowRight as ArrowRightIcon, Check } from 'lucide-react';
import { TravelService, SearchParams } from '../../types/travel';
import { format } from 'date-fns';

interface TravelSearchProps {
  onSearch: (service: TravelService, params: SearchParams) => void;
  activeService: TravelService;
  onServiceChange: (service: TravelService) => void;
}

export const TravelSearch: React.FC<TravelSearchProps> = ({ onSearch, activeService, onServiceChange }) => {
  const [params, setParams] = useState<SearchParams>({
    origin: '',
    destination: '',
    departureDate: format(new Date(), 'yyyy-MM-dd'),
    returnDate: format(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
    adults: 1,
    children: 0,
    infants: 0,
    cabinClass: 'economy',
    tripType: 'round-trip',
    directFlights: false
  });

  const [suggestions, setSuggestions] = useState<{ origin: any[], destination: any[] }>({ origin: [], destination: [] });

  const fetchSuggestions = async (term: string, field: 'origin' | 'destination') => {
    if (term.length < 2) {
      setSuggestions(prev => ({ ...prev, [field]: [] }));
      return;
    }
    try {
      const response = await fetch(`https://autocomplete.travelpayouts.com/places2?term=${term}&locale=fr&types[]=city`);
      const data = await response.json();
      setSuggestions(prev => ({ ...prev, [field]: data }));
    } catch (error) {
      console.error('Autocomplete error:', error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(activeService, params);
  };

  const services = [
    { id: 'flights' as TravelService, icon: Plane, label: 'Vols' },
    { id: 'hotels' as TravelService, icon: Hotel, label: 'Hôtels' },
    { id: 'cars' as TravelService, icon: Car, label: 'Voitures' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto -mt-8 md:-mt-16 relative z-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-4 md:p-6 border border-zinc-100">
        {/* Service Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8 border-b border-zinc-100 pb-4">
          <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onServiceChange(service.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  activeService === service.id 
                    ? 'bg-black text-white shadow-lg' 
                    : 'text-zinc-500 hover:bg-zinc-50'
                }`}
              >
                <service.icon className="w-4 h-4" />
                {service.label}
              </button>
            ))}
          </div>

          {activeService === 'flights' && (
            <div className="flex items-center gap-2 p-1 bg-zinc-50 rounded-xl self-start md:self-auto">
              <button
                type="button"
                onClick={() => setParams({ ...params, tripType: 'round-trip' })}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tight transition-all ${
                  params.tripType === 'round-trip' ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-600'
                }`}
              >
                <ArrowRightLeft className="w-3 h-3" />
                Aller-Retour
              </button>
              <button
                type="button"
                onClick={() => setParams({ ...params, tripType: 'one-way' })}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tight transition-all ${
                  params.tripType === 'one-way' ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-600'
                }`}
              >
                <ArrowRightIcon className="w-3 h-3" />
                Aller Simple
              </button>
            </div>
          )}
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3 space-y-1 relative">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 ml-1">Départ</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Ville de départ"
                value={params.origin}
                onChange={(e) => {
                  const val = e.target.value;
                  setParams({ ...params, origin: val });
                  fetchSuggestions(val, 'origin');
                }}
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-black rounded-xl text-sm transition-all outline-none"
              />
            </div>
            {suggestions.origin.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl mt-1 border border-zinc-100 z-50 overflow-hidden">
                {suggestions.origin.map((city) => (
                  <button
                    key={city.code}
                    type="button"
                    onClick={() => {
                      setParams({ ...params, origin: city.code });
                      setSuggestions(prev => ({ ...prev, origin: [] }));
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-50 text-sm flex justify-between items-center"
                  >
                    <span>{city.name}</span>
                    <span className="text-[10px] font-bold text-zinc-400">{city.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-3 space-y-1 relative">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 ml-1">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Où allez-vous ?"
                value={params.destination}
                onChange={(e) => {
                  const val = e.target.value;
                  setParams({ ...params, destination: val });
                  fetchSuggestions(val, 'destination');
                }}
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-black rounded-xl text-sm transition-all outline-none"
              />
            </div>
            {suggestions.destination.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl mt-1 border border-zinc-100 z-50 overflow-hidden">
                {suggestions.destination.map((city) => (
                  <button
                    key={city.code}
                    type="button"
                    onClick={() => {
                      setParams({ ...params, destination: city.code });
                      setSuggestions(prev => ({ ...prev, destination: [] }));
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-50 text-sm flex justify-between items-center"
                  >
                    <span>{city.name}</span>
                    <span className="text-[10px] font-bold text-zinc-400">{city.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={`${params.tripType === 'round-trip' && activeService === 'flights' ? 'md:col-span-2' : 'md:col-span-4'} space-y-1`}>
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 ml-1">Départ</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="date"
                value={params.departureDate}
                onChange={(e) => setParams({ ...params, departureDate: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-black rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          {params.tripType === 'round-trip' && activeService === 'flights' && (
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 ml-1">Retour</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="date"
                  value={params.returnDate}
                  onChange={(e) => setParams({ ...params, returnDate: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-zinc-50 border-2 border-transparent focus:border-black rounded-xl text-sm transition-all outline-none"
                />
              </div>
            </div>
          )}

          <div className="md:col-span-2 flex items-end">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <Search className="w-4 h-4" />
              Rechercher
            </button>
          </div>
        </form>

        {/* Additional Options */}
        <div className="mt-6 flex flex-wrap gap-6 items-center text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{params.adults} Adulte(s)</span>
          </div>
          {activeService === 'flights' && (
            <>
              <select 
                value={params.cabinClass}
                onChange={(e) => setParams({...params, cabinClass: e.target.value as any})}
                className="bg-transparent border-none outline-none font-medium text-black cursor-pointer"
              >
                <option value="economy">Économie</option>
                <option value="premium">Premium</option>
                <option value="business">Affaires</option>
                <option value="first">Première</option>
              </select>

              <button
                type="button"
                onClick={() => setParams({ ...params, directFlights: !params.directFlights })}
                className="flex items-center gap-2 group"
              >
                <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                  params.directFlights ? 'bg-black border-black' : 'border-zinc-300 group-hover:border-zinc-400'
                }`}>
                  {params.directFlights && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={params.directFlights ? 'text-black font-medium' : ''}>Vols directs uniquement</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
