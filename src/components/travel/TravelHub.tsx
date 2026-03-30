import React, { useState, useEffect } from 'react';
import { TravelSearch } from './TravelSearch';
import { FlightCard } from './FlightCard';
import { HotelCard } from './HotelCard';
import { CarCard } from './CarCard';
import { travelService } from '../../services/travelService';
import { TravelService as TravelServiceType, SearchParams, FlightResult, HotelResult, CarResult } from '../../types/travel';
import { agentService, AIDeal } from '../../services/agentService';
import { Blog } from './Blog';
import { Shop } from './Shop';
import { Loader2, Plane, Hotel, Car, ArrowRight, ArrowLeft, Search, Sparkles, Map as MapIcon, Zap, Heart, TrendingDown, Users, Globe, ShieldCheck, Award, Bell, Compass, Shuffle, Share2, Facebook, Twitter, Instagram, Calendar, Ticket, Menu, X, ShoppingBag } from 'lucide-react';

const getMarker = () => 
  import.meta.env.VITE_TRAVELPAYOUTS_MARKER || 
  import.meta.env.VID_TRAVEL_PLAYOUT_MARKER || 
  '704469';

const TravelMapWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Utilisation du marker dynamique
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Paramètres fournis par l'utilisateur pour l'affichage optimal des prix
    // Adapté pour le mobile avec une largeur dynamique
    const isMobile = window.innerWidth < 768;
    const width = isMobile ? '100%' : '1500';
    const height = isMobile ? '400' : '500';
    
    script.src = `https://tpemd.com/content?currency=eur&trs=499802&shmarker=704469.704469&lat=&lng=&powered_by=true&search_host=www.aviasales.com%2Fsearch&locale=en&origin=LON&value_min=0&value_max=1000000&round_trip=true&only_direct=false&radius=1&draggable=true&disable_zoom=false&show_logo=false&scrollwheel=false&primary=%233FABDB&secondary=%233FABDB&light=%23ffffff&width=${width}&height=${height}&zoom=2&promo_id=4054&campaign_id=100`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  const handleAffiliateRedirect = (destIata: string = '') => {
    const marker = getMarker();
    const baseUrl = 'https://www.aviasales.com/search/';
    const url = destIata ? `${baseUrl}${destIata}?marker=${marker}` : `https://www.aviasales.com/?marker=${marker}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 overflow-hidden relative group min-h-[400px] md:min-h-[600px]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#3FABDB] p-2 rounded-lg shadow-lg">
              <MapIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Explorez la Carte</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Trouvez les meilleures destinations par prix</p>
            </div>
          </div>
          <button 
            onClick={() => handleAffiliateRedirect()}
            className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#3FABDB] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
          >
            Ouvrir la carte complète
          </button>
        </div>
        <div ref={containerRef} className="min-h-[250px] md:min-h-[400px] w-full rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center bg-black/20">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#3FABDB]" />
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Chargement de la carte...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TravelPayoutsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour les routes populaires
    script.src = `https://tpemd.com/content?currency=eur&trs=${trs}&shmarker=${marker}&target_host=www.aviasales.com%2Fsearch&locale=fr&limit=6&powered_by=true&primary=%233FABDB&promo_id=4044&campaign_id=100`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#3FABDB] p-2 rounded-lg shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Routes Populaires</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Offres en temps réel</p>
            </div>
          </div>
          <button 
            onClick={() => window.open(`https://www.aviasales.com/?marker=${getMarker()}`, '_blank')}
            className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#3FABDB] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
          >
            Voir sur Aviasales
          </button>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#3FABDB]" />
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Chargement des routes...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TravelCalendarWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour le calendrier des prix
    script.src = `https://tpemd.com/content?currency=eur&trs=${trs}&shmarker=${marker}&searchUrl=www.aviasales.fr%2Fsearch&locale=fr&powered_by=true&one_way=false&only_direct=false&period=year&range=7%2C14&primary=%233FABDB&color_background=%2309090b&dark=%23ffffff&light=%2309090b&achieve=%2345AD35&promo_id=4041&campaign_id=100`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#3FABDB] p-2 rounded-lg shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Calendrier des Prix</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Trouvez le meilleur moment pour partir</p>
            </div>
          </div>
          <button 
            onClick={() => window.open(`https://www.aviasales.fr/?marker=${getMarker()}`, '_blank')}
            className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#3FABDB] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
          >
            Voir les dates
          </button>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#3FABDB]" />
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Chargement du calendrier...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TravelSearchWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = `https://tpemd.com/content?currency=usd&trs=${trs}&shmarker=${marker}&show_hotels=true&powered_by=true&locale=fr&searchUrl=www.aviasales.com%2Fsearch&primary_override=%23fbbf24&color_button=%23fbbf24&color_icons=%23ffffff&dark=%23ffffff&light=%2309090b&secondary=%23fbbf24&special=%23fbbf24&color_focused=%23fbbf24&border_radius=12&plain=false&promo_id=7879&campaign_id=100`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="hidden md:block w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden min-h-[300px] group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          alt="Travel Planning" 
          className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Search className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white">Recherche Avancée</h3>
              <p className="text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Vols et Hôtels au meilleur prix</p>
            </div>
          </div>
          <button 
            onClick={() => window.open(`https://www.aviasales.com/?marker=${getMarker()}`, '_blank')}
            className="text-[10px] font-bold uppercase tracking-widest bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-full transition-all shadow-lg"
          >
            Lancer la recherche
          </button>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement du moteur...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BaliVillasWidget: React.FC = () => {
  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-6 md:p-8 border border-zinc-800 shadow-2xl mt-4 md:mt-6 relative overflow-hidden group min-h-[350px] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          alt="Bali Luxury Villa" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">Séjours d'Exception</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
          Évasion de Luxe <br />
          <span className="text-amber-400 italic">à Bali</span>
        </h3>

        <p className="text-base md:text-lg text-zinc-300 mb-8 leading-relaxed font-light">
          Réservez votre <span className="text-white font-medium">villa de prestige en location</span> pour un séjour inoubliable. 
          Profitez de <span className="text-white font-medium">piscines privées à débordement</span> nichées au cœur de paysages tropicaux.
        </p>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => window.open('https://balismartinvestment.com/listings', '_blank')}
            className="group flex items-center gap-3 bg-amber-400 text-black px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl"
          >
            Découvrir les locations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Disponibilités Temps Réel</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="flex flex-col items-end">
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-2">Partenaire Officiel</p>
          <p className="text-xs font-display font-bold text-white tracking-widest opacity-50">BALI SMART INVESTMENT</p>
        </div>
      </div>
    </div>
  );
};

const WayAwayWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = `https://tpemd.com/content?currency=usd&trs=${trs}&shmarker=${marker}&locale=en&powered_by=true&campaign_id=158&promo_id=5055&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Plane className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Vols WayAway</h3>
              <p className="text-[10px] md:text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Meilleurs tarifs & Cashback</p>
            </div>
          </div>
          <button 
            onClick={() => window.open(`https://wayaway.io/?marker=${getMarker()}`, '_blank')}
            className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-white hover:text-black text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
          >
            Découvrir WayAway
          </button>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des vols...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartnerHotelsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = `https://tpemd.com/content?currency=usd&trs=${trs}&shmarker=${marker}&type=hotels&locale=en&powered_by=true&campaign_id=101&promo_id=4041&color_button=%23fbbf24&border_radius=12`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Hotel className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Hôtels Partenaires</h3>
              <p className="text-[10px] md:text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Tarifs exclusifs négociés</p>
            </div>
          </div>
          <button 
            onClick={() => window.open(`https://search.hotellook.com/?marker=${getMarker()}`, '_blank')}
            className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-white hover:text-black text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
          >
            Réserver un hôtel
          </button>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des hôtels...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RentalCarsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour la location de voitures
    script.src = `https://tpemd.com/content?trs=${trs}&shmarker=${marker}&locale=en&powered_by=true&campaign_id=172&promo_id=4850&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#FF4D4D] p-2 rounded-lg shadow-lg">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Location de Voitures & Vélos</h3>
              <p className="text-[10px] md:text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Explorez en toute liberté</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-500/20">5–10% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.aviasales.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#FF4D4D] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Réserver
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement du moteur de recherche...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeGoTripWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour WeGoTrip (Tours & Activities)
    script.src = `https://tpemd.com/content?trs=${trs}&shmarker=${marker}&locale=en&tours=3&powered_by=true&campaign_id=150&promo_id=4489&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#8B5CF6] p-2 rounded-lg shadow-lg">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Tours & Activités</h3>
              <p className="text-[10px] md:text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Expériences inoubliables avec WeGoTrip</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-purple-500/20 text-purple-400 text-[10px] font-bold px-2 py-1 rounded-full border border-purple-500/20">6.6% – 41.5% REWARD</span>
            <button 
              onClick={() => window.open(`https://wegotrip.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#8B5CF6] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Découvrir
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des activités...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryToursWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour les tours par catégorie
    script.src = `https://tpemd.com/content?currency=EUR&trs=${trs}&shmarker=${marker}&locale=fr&category=1&amount=3&powered_by=true&campaign_id=137&promo_id=4497&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#F59E0B] p-2 rounded-lg shadow-lg">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Tours & Activités Locales</h3>
              <p className="text-[10px] md:text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Découvrez le meilleur de chaque ville</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-1 rounded-full border border-amber-500/20">2–5% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.aviasales.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#F59E0B] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Explorer
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des activités...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperiencesWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour les expériences (catégorie 3)
    script.src = `https://tpemd.com/content?currency=EUR&trs=${trs}&shmarker=${marker}&locale=fr&category=3&amount=3&powered_by=true&campaign_id=137&promo_id=4497&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#6366F1] p-2 rounded-lg shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Activités & Expériences</h3>
              <p className="text-[10px] md:text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Vivez des moments inoubliables</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-indigo-500/20 text-indigo-400 text-[10px] font-bold px-2 py-1 rounded-full border border-indigo-500/20">2–5% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.aviasales.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#6366F1] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Découvrir
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des expériences...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WelcomePickupsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour Welcome Pickups (Transfers)
    script.src = `https://tpemd.com/content?trs=${trs}&shmarker=${marker}&locale=fr&show_header=true&powered_by=true&campaign_id=627&promo_id=8951&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#0770e3] p-2 rounded-lg shadow-lg">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Transferts & Navettes</h3>
              <p className="text-[10px] md:text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Arrivez à destination en toute sérénité</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-1 rounded-full border border-blue-500/20">8-9% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.welcomepickups.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#0770e3] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Réserver
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des transferts...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const KiwiWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour Kiwi.com (Popular Destinations)
    script.src = `https://tpemd.com/content?currency=eur&trs=${trs}&shmarker=${marker}&locale=fr&powered_by=true&limit=4&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b&promo_id=4563&campaign_id=111`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#00AE98] p-2 rounded-lg shadow-lg">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Destinations Populaires (Kiwi)</h3>
              <p className="text-[10px] md:text-xs text-zinc-300 font-mono font-bold uppercase tracking-widest">Vols, trains & bus avec Kiwi.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#00AE98]/20 text-[#00AE98] text-[10px] font-bold px-2 py-1 rounded-full border border-[#00AE98]/20">3% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.kiwi.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#00AE98] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Réserver
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des offres Kiwi...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const KiwiSearchResultsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour Kiwi.com (Search Results)
    script.src = `https://tpemd.com/content?currency=eur&trs=${trs}&shmarker=${marker}&powered_by=true&locale=fr&show_header=true&limit=4&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b&campaign_id=111&promo_id=4478`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#00AE98] p-2 rounded-lg shadow-lg">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Recherche de Vols (Kiwi)</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Trouvez les meilleurs tarifs avec Kiwi.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#00AE98]/20 text-[#00AE98] text-[10px] font-bold px-2 py-1 rounded-full border border-[#00AE98]/20">3% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.kiwi.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#00AE98] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Chercher
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#00AE98]" />
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Chargement du moteur...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const KiwiPopularRoutesWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour Kiwi.com (Popular Routes)
    script.src = `https://tpemd.com/content?currency=eur&trs=${trs}&shmarker=${marker}&locale=fr&powered_by=true&limit=4&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b&campaign_id=111&promo_id=3411`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#00AE98] p-2 rounded-lg shadow-lg">
              <Shuffle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Itinéraires Populaires (Kiwi)</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Les trajets les plus demandés sur Kiwi.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#00AE98]/20 text-[#00AE98] text-[10px] font-bold px-2 py-1 rounded-full border border-[#00AE98]/20">3% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.kiwi.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#00AE98] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Voir Plus
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#00AE98]" />
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Chargement des itinéraires...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TiqetsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour Tiqets
    script.src = `https://tpemd.com/content?currency=EUR&trs=${trs}&shmarker=${marker}&language=fr&locale=260932&layout=horizontal&cards=4&powered_by=true&campaign_id=89&promo_id=3947&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#00C4CC] p-2 rounded-lg shadow-lg">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Activités & Musées (Tiqets)</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Billets coupe-file pour les meilleures attractions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#00C4CC]/20 text-[#00C4CC] text-[10px] font-bold px-2 py-1 rounded-full border border-[#00C4CC]/20">3.5 - 8% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.tiqets.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#00C4CC] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Réserver
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#00C4CC]" />
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Chargement des activités...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TiqetsSpecificTourWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour Tiqets (Specific Tour)
    script.src = `https://tpemd.com/content?currency=EUR&trs=${trs}&shmarker=${marker}&product=&language=fr&layout=horizontal&powered_by=true&campaign_id=89&promo_id=3948&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#00C4CC] p-2 rounded-lg shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Tours Spécifiques (Tiqets)</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Découvrez des expériences uniques</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#00C4CC]/20 text-[#00C4CC] text-[10px] font-bold px-2 py-1 rounded-full border border-[#00C4CC]/20">3.5 - 8% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.tiqets.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#00C4CC] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Découvrir
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#00C4CC]" />
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Chargement des tours...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TiqetsAvailabilityCalendarWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour Tiqets (Availability Calendar)
    script.src = `https://tpemd.com/content?currency=EUR&trs=${trs}&shmarker=${marker}&product%5B0%5D%5Bkey%5D=&product%5B0%5D%5Bvalue%5D=&language=fr&layout=horizontal&orientation=vertical&powered_by=true&campaign_id=89&promo_id=3984&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#00C4CC] p-2 rounded-lg shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Disponibilités (Tiqets)</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Vérifiez les dates disponibles en temps réel</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#00C4CC]/20 text-[#00C4CC] text-[10px] font-bold px-2 py-1 rounded-full border border-[#00C4CC]/20">3.5 - 8% REWARD</span>
            <button 
              onClick={() => window.open(`https://www.tiqets.com/?marker=${getMarker()}`, '_blank')}
              className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#00C4CC] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
            >
              Calendrier
            </button>
          </div>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#00C4CC]" />
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Chargement du calendrier...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const KiwiPopularDestinationsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    // Utilisation du code exact fourni par l'utilisateur pour Kiwi.com (Popular Destinations)
    script.src = `https://tpemd.com/content?currency=eur&trs=${trs}&shmarker=${marker}&locale=fr&powered_by=true&limit=4&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b&promo_id=4563&campaign_id=111`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-[#00AE98] p-2 rounded-lg shadow-lg">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Destinations Populaires (Kiwi)</h3>
            <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Les destinations les plus en vogue sur Kiwi.com</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#00AE98]/20 text-[#00AE98] text-[10px] font-bold px-2 py-1 rounded-full border border-[#00AE98]/20">3% REWARD</span>
          <button 
            onClick={() => window.open(`https://www.kiwi.com/?marker=${getMarker()}`, '_blank')}
            className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-[#00AE98] text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
          >
            Explorer
          </button>
        </div>
      </div>
      <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl overflow-hidden relative z-10">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-[#00AE98]" />
          <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Chargement des destinations...</span>
        </div>
      </div>
    </div>
  );
};

const PopularDestinationsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    // Clear previous content
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = `https://tpemd.com/content?trs=${trs}&shmarker=${marker}&locale=en&country=153&city=68511&powered_by=true&campaign_id=87&promo_id=2466&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Globe className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Destinations populaires</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Les lieux les plus prisés en ce moment</p>
            </div>
          </div>
          <button 
            onClick={() => window.open(`https://www.aviasales.com/?marker=${getMarker()}`, '_blank')}
            className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-white hover:text-black text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
          >
            Explorer plus
          </button>
        </div>
        <div ref={containerRef} className="min-h-[150px] w-full flex items-center justify-center bg-black/20 rounded-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des destinations...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecialOffersWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = `https://tpemd.com/content?currency=usd&trs=${trs}&shmarker=${marker}&locale=fr&powered_by=true&limit=4&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b&campaign_id=111&promo_id=3411`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <TrendingDown className="w-5 h-5 text-black" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Offres spéciales</h3>
            <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Les tarifs les plus bas du moment</p>
          </div>
        </div>
        <button 
          onClick={() => window.open(`https://www.aviasales.com/?marker=${getMarker()}`, '_blank')}
          className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-white hover:text-black text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
        >
          Voir les promos
        </button>
      </div>
      <div ref={containerRef} className="min-h-[150px] w-full flex items-center justify-center bg-black/20 rounded-xl relative overflow-hidden z-10">
        <div className="relative z-10 flex flex-col items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-white/30" />
          <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des offres...</span>
        </div>
      </div>
    </div>
  );
};

const EuroDealsWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = `https://tpemd.com/content?currency=eur&trs=${trs}&shmarker=${marker}&locale=fr&powered_by=true&limit=4&primary_color=FFFFFF&results_background_color=18181b&form_background_color=18181b&promo_id=4563&campaign_id=111`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Meilleures offres (EUR)</h3>
            <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Sélection exclusive en Euros</p>
          </div>
        </div>
        <button 
          onClick={() => window.open(`https://www.aviasales.com/?marker=${getMarker()}`, '_blank')}
          className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-white hover:text-black text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
        >
          Offres en Euros
        </button>
      </div>
      <div ref={containerRef} className="min-h-[150px] w-full flex items-center justify-center bg-black/20 rounded-xl relative overflow-hidden z-10">
        <div className="relative z-10 flex flex-col items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-white/30" />
          <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement des offres EUR...</span>
        </div>
      </div>
    </div>
  );
};

const HotelsSelectionWidget: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const marker = getMarker();
    const trs = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';
    
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = `https://tpemd.com/content?currency=usd&trs=${trs}&shmarker=${marker}&locale=en&powered_by=true&type=hotels&limit=3&campaign_id=101&promo_id=4041&primary_color=fbbf24&results_background_color=09090b&form_background_color=18181b`;
    script.async = true;
    script.charset = "utf-8";
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-3xl p-4 md:p-6 border border-zinc-800 shadow-xl mt-4 md:mt-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <Hotel className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">Hôtels Recommandés</h3>
              <p className="text-[10px] md:text-xs text-zinc-400 font-mono font-bold uppercase tracking-widest">Sélectionnés pour leur rapport qualité/prix</p>
            </div>
          </div>
          <button 
            onClick={() => window.open(`https://search.hotellook.com/?marker=${getMarker()}`, '_blank')}
            className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-white hover:text-black text-white px-4 py-2 rounded-full transition-all backdrop-blur-md border border-white/10"
          >
            Voir tous les hôtels
          </button>
        </div>
        <div ref={containerRef} className="min-h-[150px] flex items-center justify-center bg-black/20 rounded-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-white/30" />
            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Chargement de la sélection...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TravelHub: React.FC = () => {
  const [activeService, setActiveService] = useState<TravelServiceType>('flights');
  const [showBlog, setShowBlog] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{
    flights: FlightResult[];
    hotels: HotelResult[];
    cars: CarResult[];
  }>({
    flights: [],
    hotels: [],
    cars: []
  });

  const [activities, setActivities] = useState([
    "Agent Scout a trouvé un vol Paris → Lisbonne à 19€",
    "Nouvelle offre hôtel à Bali : -40% de réduction",
    "Mise à jour des tarifs pour New York (JFK)",
    "3 utilisateurs viennent de réserver via le Mode Nomad"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = `Agent Scout a analysé ${Math.floor(Math.random() * 1000)} tarifs en temps réel...`;
      setActivities(prev => [newActivity, ...prev.slice(0, 3)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [isScouting, setIsScouting] = useState(false);
  const [aiDeals, setAiDeals] = useState<AIDeal[]>([]);

  useEffect(() => {
    const scout = async () => {
      setIsScouting(true);
      try {
        const deals = await agentService.scoutDeals();
        setAiDeals(deals);
      } catch (error) {
        console.error('Agent scouting failed:', error);
      } finally {
        setIsScouting(false);
      }
    };
    scout();
  }, []);

  const handleShare = (deal: any) => {
    if (navigator.share) {
      navigator.share({
        title: `Offre exceptionnelle: ${deal.origin} → ${deal.destination}`,
        text: `Regardez ce bon plan trouvé par l'Agent IA de TravelHub: ${deal.price} !`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert(`Lien copié ! Partagez cette offre: ${deal.origin} vers ${deal.destination} pour ${deal.price}`);
    }
  };

  useEffect(() => {
    const loadInitial = async () => {
      try {
        const initial = await travelService.getInitialResults();
        setResults(initial);
      } catch (error) {
        console.error('Failed to load initial results:', error);
      }
    };
    loadInitial();
  }, []);

  const handleSearch = async (service: TravelServiceType, params: SearchParams) => {
    console.log('TravelHub handleSearch called with:', { service, params });
    setIsLoading(true);
    try {
      if (service === 'flights') {
        const flights = await travelService.searchFlights(params);
        setResults(prev => ({ ...prev, flights }));
      } else if (service === 'hotels') {
        const hotels = await travelService.searchHotels(params);
        setResults(prev => ({ ...prev, hotels }));
      } else if (service === 'cars') {
        const cars = await travelService.searchCars(params);
        setResults(prev => ({ ...prev, cars }));
      }
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [priceAlertActive, setPriceAlertActive] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const handlePriceAlert = () => {
    setPriceAlertActive(true);
    setTimeout(() => setPriceAlertActive(false), 3000);
  };

  const handleNomadRedirect = () => {
    window.open(`https://www.kiwi.com/en/nomad?help=${getMarker()}`, '_blank');
  };

  const handleAnywhereRedirect = () => {
    window.open(`https://www.aviasales.com/search?anywhere=1&marker=${getMarker()}`, '_blank');
  };

  if (showBlog) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black">
        <Blog onBack={() => setShowBlog(false)} />
        
        {/* Footer - Reuse the footer from below or make it a component */}
        <footer className="bg-zinc-950 border-t border-zinc-800 py-12 mt-16">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-tight text-white">TravelHub</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Votre compagnon de voyage intelligent. Nous comparons des milliers d'offres pour vous garantir le meilleur prix.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">Navigation</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><button onClick={() => { setShowBlog(false); setShowShop(false); }} className="hover:text-white transition-colors">Accueil</button></li>
                <li><button onClick={() => { setShowBlog(true); setShowShop(false); }} className="hover:text-white transition-colors">Blog</button></li>
                <li><button onClick={() => { setShowShop(true); setShowBlog(false); }} className="hover:text-white transition-colors text-amber-400">Boutique</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">Suivez-nous</h4>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">
              © 2026 TravelHub.com - Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  if (showShop) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button onClick={() => setShowShop(false)} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase font-mono text-[10px] font-bold tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Retour
            </button>
            <div className="text-xl font-display font-bold uppercase tracking-tighter">TravelHub</div>
            <div className="w-20"></div>
          </div>
        </nav>
        <div className="pt-20">
          <Shop onBack={() => setShowShop(false)} />
        </div>
        <footer className="bg-zinc-950 border-t border-zinc-800 py-12 mt-16">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-tight text-white">TravelHub</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Votre compagnon de voyage intelligent. Nous comparons des milliers d'offres pour vous garantir le meilleur prix.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">Navigation</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><button onClick={() => { setShowBlog(false); setShowShop(false); }} className="hover:text-white transition-colors">Accueil</button></li>
                <li><button onClick={() => { setShowBlog(true); setShowShop(false); }} className="hover:text-white transition-colors">Blog</button></li>
                <li><button onClick={() => { setShowShop(true); setShowBlog(false); }} className="hover:text-white transition-colors text-amber-400">Boutique</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">Suivez-nous</h4>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">
              © 2026 TravelHub.com - Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black">
      {/* Price Alert Notification */}
      {priceAlertActive && (
        <div className="fixed top-20 right-4 z-[100] bg-white text-black px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-right-4">
          <Bell className="w-5 h-5 text-emerald-600 animate-bounce" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest">Alerte activée !</p>
            <p className="text-[10px] text-zinc-500 font-mono">Vous recevrez les meilleures offres par email.</p>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <header className="relative h-[50vh] md:h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
            alt="Athens background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl pb-24 md:pb-48">
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter uppercase">
            Où voulez-vous <span className="text-zinc-500">aller ?</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowShop(true)}
              className="group flex items-center gap-3 bg-amber-400 text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl relative z-30"
            >
              <ShoppingBag className="w-4 h-4" />
              Boutique Voyage
            </button>
            <button 
              onClick={() => setShowBlog(true)}
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all relative z-30"
            >
              <Compass className="w-4 h-4" />
              Blog & Conseils
            </button>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <TravelSearch 
        activeService={activeService} 
        onServiceChange={setActiveService} 
        onSearch={handleSearch} 
      />

      {/* Map Section - Moved Higher as requested */}
      <section className="max-w-5xl mx-auto px-4">
        <TravelMapWidget />
        <BaliVillasWidget />
      </section>

      {/* Results Section */}
      <main className="max-w-5xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight flex items-center gap-3 text-white">
            {activeService === 'flights' && <Plane className="w-6 h-6 text-zinc-400" />}
            {activeService === 'hotels' && <Hotel className="w-6 h-6 text-zinc-400" />}
            {activeService === 'cars' && <Car className="w-6 h-6 text-zinc-400" />}
            {activeService === 'flights' ? 'Vols disponibles' : activeService === 'hotels' ? 'Hôtels trouvés' : 'Locations de voitures'}
          </h2>
          {results[activeService].length > 0 && !isLoading && (
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
              {results[activeService].length} résultats trouvés
            </span>
          )}
        </div>

        <div>
          {isLoading ? (
            <div 
              className="flex flex-col items-center justify-center py-12 gap-4"
            >
              <Loader2 className="w-12 h-12 animate-spin text-white" />
              <p className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500">Recherche en cours...</p>
            </div>
          ) : results[activeService].length > 0 ? (
            <div 
              className="grid grid-cols-1 gap-6"
            >
              {activeService === 'flights' && results.flights.map(flight => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
              {activeService === 'hotels' && results.hotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
              {activeService === 'cars' && results.cars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
          /* Spotlight Section: Athens (Skyscanner Style) */
          <div className="space-y-16">
            <section className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-zinc-400 font-mono font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Pleins feux sur : Athènes</span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-none uppercase tracking-tighter text-white">
                    Berceau de la <span className="text-zinc-500">démocratie</span>
                  </h2>
                  <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                    Athènes est la plus ancienne capitale d'Europe et la première ville couronnée Capitale européenne de la culture. La ville propose actuellement de quoi plaire à tous : histoire fascinante, aventures en plein air, gastronomie, musique en live et vie nocturne animée.
                  </p>
                  <button 
                    onClick={() => window.open(`https://www.aviasales.com/search/ATH?marker=${getMarker()}`, '_blank')}
                    className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all self-start uppercase text-xs tracking-widest shadow-lg"
                  >
                    Trouver des vols
                  </button>
                </div>
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
                    alt="Athens Acropolis" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent hidden md:block" />
                </div>
              </div>
            </section>

            {/* Plan your ideal trip section */}
            <section>
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2 uppercase tracking-tight text-white">Planifiez votre voyage idéal</h3>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Découvrez les derniers prix pour les vols à destination de Athènes</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                  onClick={() => window.open(`https://www.aviasales.com/search/PAR1504ATH21041?marker=${getMarker()}`, '_blank')}
                  className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-xl hover:border-zinc-700 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                        <Plane className="w-5 h-5 text-zinc-400" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Athènes</p>
                        <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Grèce</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-1">15 avr. - 21 avr.</p>
                  <div className="flex items-end justify-between">
                    <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Vols à partir de</p>
                    <p className="text-xl font-display font-bold text-white">175 €</p>
                  </div>
                </div>
                {/* More flight offers placeholder */}
                <div className="md:col-span-2 flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-3xl p-6 hover:border-zinc-700 transition-colors cursor-pointer group">
                  <button 
                    onClick={() => window.open(`https://www.aviasales.com/search/ATH?marker=${getMarker()}`, '_blank')}
                    className="text-zinc-400 font-mono font-bold text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors"
                  >
                    Plus d'offres de vols
                  </button>
                </div>
              </div>
            </section>

            {/* Popular Getaways: Athens */}
            <section>
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2 uppercase tracking-tight text-white">Escapades populaires : Athènes</h3>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Réveillez-vous dans un nouvel endroit au prix le plus bas.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Athens One Smart Hotel', price: '75 €', rating: '4.1', reviews: '273', image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400' },
                  { name: 'Skylark, Aluma Hotels & Resorts', price: '133 €', rating: '4.2', reviews: '690', image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400' }
                ].map((hotel, i) => (
                  <div key={i} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl hover:border-zinc-700 transition-all cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2 line-clamp-1 text-white">{hotel.name}</h4>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {hotel.rating}
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">{hotel.reviews} commentaires</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">{hotel.price} par nuit</p>
                        <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-3xl p-6 hover:border-zinc-700 transition-colors cursor-pointer group">
                  <button className="text-zinc-400 font-mono font-bold text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    Plus d'hôtels (Athènes)
                  </button>
                </div>
              </div>
            </section>
          </div>
          )}
        </div>
      </main>

      {/* AI Scout Agent Section (Rebranded as Travel Ideas) */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">Plus d’idées voyage</h2>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Parcourez les suggestions de notre agent intelligent basées sur les tendances actuelles.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-zinc-400" />
            Agent Scout Actif
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isScouting ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-zinc-900 rounded-3xl p-4 border border-zinc-800 animate-pulse">
                <div className="aspect-square bg-zinc-800 rounded-2xl mb-4" />
                <div className="h-4 bg-zinc-800 rounded w-2/3 mb-2" />
                <div className="h-3 bg-zinc-800 rounded w-1/2" />
              </div>
            ))
          ) : (
            aiDeals.map((deal) => (
              <div key={deal.id} className="group bg-zinc-900 rounded-3xl p-4 border border-zinc-800 hover:border-zinc-700 transition-all shadow-xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={deal.image} 
                    alt={deal.destination} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-lg font-bold text-[10px] uppercase tracking-widest">
                    {deal.discount}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-wider">{deal.origin} → {deal.destination}</p>
                    <span className="text-[10px] text-zinc-400 font-mono font-bold uppercase tracking-widest">{deal.type}</span>
                  </div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-zinc-300 transition-colors">{deal.destination}</h3>
                  <p className="text-[10px] text-zinc-500 leading-relaxed mb-4 line-clamp-2 font-mono uppercase tracking-widest">{deal.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-display font-bold text-white">{deal.price}</p>
                    <button 
                      onClick={() => window.open(`https://www.aviasales.com/search/${deal.iata}?marker=${getMarker()}`, '_blank')}
                      className="text-[10px] font-mono font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      Voir l'offre
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      {/* Destinations Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">Destinations en vogue</h2>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Inspirations pour votre prochain voyage</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
            Tout voir <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Paris', country: 'France', iata: 'PAR', image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400', price: '45€' },
            { name: 'New York', country: 'USA', iata: 'NYC', image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400', price: '320€' },
            { name: 'Tokyo', country: 'Japon', iata: 'TYO', image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400', price: '550€' }
          ].map((dest, i) => (
            <div 
              key={i} 
              onClick={() => window.open(`https://www.aviasales.com/search/${dest.iata}?marker=${getMarker()}`, '_blank')}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 border border-zinc-800 hover:border-zinc-700"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-display font-bold mb-1 uppercase tracking-tight">{dest.name}</h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">{dest.country}</p>
                <p className="text-sm font-display font-bold">Dès {dest.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Deals Section (Screenshots Style) */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <TrendingDown className="w-6 h-6 text-black" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white">Destinations <span className="text-zinc-500">en Promotion</span></h2>
            <p className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-[0.3em]">Tarifs estimés à partir de</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Deal 1 */}
           <div 
             onClick={() => window.open(`https://amzn.to/4lPkFW2`, '_blank')}
             className="group relative aspect-video rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl border border-zinc-800 hover:border-zinc-700 transition-all"
           >
             <img 
               src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=1000" 
               alt="Osprey Deal" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
             <div className="absolute top-6 right-6 bg-amber-400 text-black px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg">
               BEST-SELLER
             </div>
             <div className="absolute bottom-8 left-8">
               <p className="text-white/60 text-[10px] font-mono font-bold uppercase tracking-widest mb-2">Sac à Dos Cabine</p>
               <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Osprey Fairview 40</h3>
                <p className="text-4xl font-display font-bold text-white mt-2"><span className="text-sm font-sans font-normal text-white/40 mr-1 italic">Dès</span> 125€</p>
             </div>
           </div>
           
            {/* Deal 2 */}
            <div 
              onClick={() => window.open(`https://amzn.to/47my9Tf`, '_blank')}
              className="group relative aspect-video rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <img 
                src="https://m.media-amazon.com/images/I/81yz7s-jj9L._AC_SL1500_.jpg" 
                alt="Samsonite Deal" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
              <div className="absolute top-6 right-6 bg-amber-400 text-black px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg">
                OFFRE EXCLUSIVE
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white/60 text-[10px] font-mono font-bold uppercase tracking-widest mb-2">Set de 3 Valises</p>
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Samsonite Omni 2</h3>
                 <p className="text-4xl font-display font-bold text-white mt-2"><span className="text-sm font-sans font-normal text-white/40 mr-1 italic">Dès</span> 199€</p>
              </div>
            </div>

            {/* Deal 3 */}
            <div 
              onClick={() => window.open(`https://amzn.to/4lYlpsa`, '_blank')}
              className="group relative aspect-video rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <img 
                src="https://m.media-amazon.com/images/I/615tM7hVoNL._AC_SX522_.jpg" 
                alt="Backpack Deal" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
              <div className="absolute top-6 right-6 bg-amber-400 text-black px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg">
                TOP PRIX
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white/60 text-[10px] font-mono font-bold uppercase tracking-widest mb-2">Sac à Dos Voyage</p>
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Sac 40 L</h3>
                 <p className="text-4xl font-display font-bold text-white mt-2"><span className="text-sm font-sans font-normal text-white/40 mr-1 italic">Dès</span> 49€</p>
              </div>
            </div>
         </div>
       </section>

      {/* Main Widgets Grid - Compact */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <TravelSearchWidget />
          <TravelCalendarWidget />
        </div>
        <PopularDestinationsWidget />
        <SpecialOffersWidget />
        <EuroDealsWidget />
        <WayAwayWidget />
        <HotelsSelectionWidget />
        <PartnerHotelsWidget />
        <RentalCarsWidget />
        <WeGoTripWidget />
        <CategoryToursWidget />
        <ExperiencesWidget />
        <WelcomePickupsWidget />
        <KiwiWidget />
        <KiwiSearchResultsWidget />
        <KiwiPopularRoutesWidget />
        <KiwiPopularDestinationsWidget />
        <TiqetsWidget />
        <TiqetsSpecificTourWidget />
        <TiqetsAvailabilityCalendarWidget />
        <TravelPayoutsWidget />
      </div>

      {/* Blog & Travel Tips Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Blog & Conseils Voyage</h2>
            <p className="text-sm text-zinc-500 font-mono font-bold uppercase tracking-widest">Améliorez votre expérience de voyage</p>
          </div>
      <button 
        onClick={() => setShowBlog(true)}
        className="flex items-center gap-2 text-xs font-bold text-[#0770e3] hover:underline uppercase tracking-widest"
      >
        Lire tout le blog <ArrowRight className="w-4 h-4" />
      </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "10 Astuces pour voyager moins cher en 2026",
              excerpt: "Découvrez comment notre IA déniche les perles rares et comment vous pouvez en profiter.",
              image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400",
              date: "20 Mars 2026",
              category: "Économies",
              iata: "PAR"
            },
            {
              title: "Les destinations les plus sûres cette année",
              excerpt: "La sécurité est primordiale. Voici notre sélection basée sur les données récentes.",
              image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400",
              date: "18 Mars 2026",
              category: "Sécurité",
              iata: "NYC"
            },
            {
              title: "Comment préparer son sac pour un tour du monde",
              excerpt: "L'art de voyager léger sans rien oublier d'essentiel. Nos experts vous conseillent.",
              image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400",
              date: "15 Mars 2026",
              category: "Préparation",
              iata: "TYO"
            },
            {
              title: "Top 5 des applications indispensables en voyage",
              excerpt: "Gérez vos réservations, traduisez en temps réel et ne vous perdez plus jamais.",
              image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400",
              date: "12 Mars 2026",
              category: "Technologie",
              iata: "LON"
            },
            {
              title: "Voyager en solo : Guide de survie et de plaisir",
              excerpt: "Tout ce qu'il faut savoir pour sa première aventure en solitaire en toute confiance.",
              image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400",
              date: "10 Mars 2026",
              category: "Solo",
              iata: "DXB"
            },
            {
              title: "Le guide ultime du nomadisme digital",
              excerpt: "Travailler d'où vous voulez : les meilleures villes pour les nomades en 2026.",
              image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400",
              date: "08 Mars 2026",
              category: "Nomade",
              iata: "ATH"
            }
          ].map((post, i) => (
            <div 
              key={i} 
              className="group cursor-pointer"
              onClick={() => setShowBlog(true)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
                  {post.category}
                </div>
              </div>
              <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">{post.date}</p>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[#0770e3] transition-colors">{post.title}</h3>
              <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section - Compact */}
      <section className="max-w-5xl mx-auto py-8 px-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ne manquez aucune offre
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-sm md:text-base">
              Inscrivez-vous à notre newsletter pour recevoir les meilleurs bons plans voyage directement dans votre boîte mail.
            </p>
            
            {isSubscribed ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white max-w-md mx-auto">
                <Bell className="w-8 h-8 mx-auto mb-4 text-fbbf24" />
                <p className="text-xl font-bold mb-2">Inscription réussie !</p>
                <p className="text-xs opacity-80">Vous recevrez bientôt nos meilleures offres.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="votre@email.com" 
                  required
                  className="flex-1 bg-zinc-800 rounded-xl px-6 py-4 text-white placeholder:text-zinc-500 border border-zinc-700 focus:outline-none focus:border-fbbf24 transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-white hover:bg-zinc-200 text-black font-bold px-8 py-4 rounded-xl transition-all"
                >
                  S'abonner
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Authority Stats Section - Compact */}
      <section className="max-w-5xl mx-auto py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">50K+</div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Voyageurs Heureux</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">120+</div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Destinations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">24/7</div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Support Client</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">100%</div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Sécurisé</p>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="max-w-5xl mx-auto py-8 px-4 border-y border-zinc-800 my-8">
        <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500 text-center mb-6">Nos Partenaires Hôteliers de Confiance</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white">HILTON</span>
          <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white">MARRIOTT</span>
          <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white">ACCOR</span>
          <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white">HYATT</span>
          <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white">RADISSON</span>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="max-w-5xl mx-auto py-8 px-4 flex justify-center">
        <div className="inline-flex items-center gap-6 px-8 py-4 bg-zinc-900 rounded-2xl border border-zinc-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-fbbf24" />
            <span className="text-xs font-bold uppercase tracking-tight text-white">Partenaire Certifié Travelpayouts</span>
          </div>
          <div className="w-px h-4 bg-zinc-800" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-tight text-white">Protection Voyageur Garantie</span>
          </div>
        </div>
      </section>

      {/* AI Innovation Section - Compact */}
      <section className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-12 bg-zinc-900 text-white rounded-[2rem] md:rounded-[3rem] my-6 md:my-8 overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              Innovation Technologique
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-none">
              L'IA au service <br/> de votre <span className="text-zinc-500">voyage</span>
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              Le Machine Learning transforme radicalement l'industrie du voyage. Chez TravelHub, nous utilisons ces technologies pour anticiper les tendances et vous offrir des opportunités d'innovation uniques.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                <span className="text-xs md:text-sm text-zinc-300">Analyse prédictive des tarifs en temps réel</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                <span className="text-xs md:text-sm text-zinc-300">Optimisation intelligente des itinéraires complexes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                <span className="text-xs md:text-sm text-zinc-300">Personnalisation avancée selon vos préférences</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400" 
              alt="AI Technology" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </section>

      {/* Why Choose Us Section - Compact */}
      <section className="max-w-5xl mx-auto py-12 px-4 border-t border-zinc-800">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4 text-white">Pourquoi TravelHub ?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Notre nouveau système est conçu pour transformer votre manière de voyager.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 duration-300">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-white">Efficacité accrue</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Recherchez et réservez en quelques secondes grâce à notre moteur ultra-rapide et optimisé.
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 duration-300">
              <Heart className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-white">Satisfaction client</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Votre bonheur est notre priorité. Une interface intuitive conçue pour un voyage sans stress.
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 duration-300">
              <TrendingDown className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-white">Coûts réduits</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Nous optimisons nos processus opérationnels pour vous offrir les tarifs les plus bas du marché.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 mt-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-tight text-white">TravelHub</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Votre compagnon de voyage intelligent. Nous comparons des milliers d'offres pour vous garantir le meilleur prix, en partenariat avec Kiwi.com et les plus grandes compagnies.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium text-zinc-400">
              <li onClick={() => { setShowBlog(false); setShowShop(false); window.scrollTo(0,0); }} className="hover:text-white transition-colors cursor-pointer">Accueil</li>
              <li onClick={() => { setShowBlog(true); setShowShop(false); window.scrollTo(0,0); }} className="hover:text-white transition-colors cursor-pointer">Blog & Conseils</li>
              <li onClick={() => { setShowShop(true); setShowBlog(false); window.scrollTo(0,0); }} className="hover:text-white transition-colors cursor-pointer text-amber-400">Boutique Voyage</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-6">Partenaires</h4>
            <ul className="space-y-3 text-sm font-medium text-zinc-400">
              <li className="hover:text-white transition-colors cursor-pointer">Kiwi.com (Tequila)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Booking.com</li>
              <li className="hover:text-white transition-colors cursor-pointer">RentalCars</li>
              <li className="hover:text-white transition-colors cursor-pointer">Skyscanner</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-6">Support</h4>
            <ul className="space-y-3 text-sm font-medium text-zinc-400">
              <li className="hover:text-white transition-colors cursor-pointer">Aide & FAQ</li>
              <li className="hover:text-white transition-colors cursor-pointer">Conditions d'utilisation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Confidentialité</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">
            © 2026 TravelHub.com - Tous droits réservés.
          </p>
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-2 md:mt-0">
            The information given is for general guidance only.
          </p>
          <div className="flex gap-6 items-center">
             <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Affiliate ID: {getMarker()}</span>
             <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">FR</span>
             <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">EUR</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
