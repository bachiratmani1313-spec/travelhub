import { FlightResult, HotelResult, CarResult, SearchParams } from '../types/travel';

const getMarker = () => {
  const baseMarker = 
    import.meta.env.VITE_TRAVELPAYOUTS_MARKER || 
    import.meta.env.VID_TRAVEL_PLAYOUT_MARKER || 
    '376378';
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  // If the user provides specific markers later, we can use them here.
  // For now, we use the provided one.
  return baseMarker;
};

const MARKER = getMarker();
const TRS = import.meta.env.VITE_TRAVELPAYOUTS_TRS || '499802';

// Helper to build TravelPayouts / Aviasales search URL
const buildFlightSearchUrl = (params: SearchParams) => {
  const { origin, destination, departureDate, returnDate, adults, children, infants, cabinClass, tripType, directFlights } = params;
  const depDate = departureDate.replace(/-/g, '').substring(4, 8) + departureDate.substring(2, 4); // DDMMYY format often used or just MMDD
  // Actually, Aviasales often uses /search/ORIGINDDMMDESTDDMMADULTS
  
  const dDate = departureDate.split('-').reverse().join('').substring(0, 4); // DDMM
  const rDate = returnDate ? returnDate.split('-').reverse().join('').substring(0, 4) : '';
  
  const cabin = cabinClass === 'economy' ? 'Y' : 'C';
  const direct = directFlights ? '&direct=1' : '';
  
  // Format: /search/PAR1506NYC22061
  const searchPath = `${origin}${dDate}${destination}${rDate}${adults}${children}${infants}${cabin}`;
  
  return `https://www.jetradar.com/search/${searchPath}?marker=${MARKER}&trs=${TRS}${direct}`;
};

// Helper for Hotellook (Hotels)
const buildHotelSearchUrl = (params: SearchParams) => {
  const { destination } = params;
  return `https://search.hotellook.com/?location=${destination}&marker=${MARKER}&language=fr`;
};

// Helper for RentalCars (via TravelPayouts usually uses specific deep links)
const buildCarSearchUrl = (params: SearchParams) => {
  const { destination } = params;
  return `https://www.rentalcars.com/?affiliateCode=travelpayouts&preflang=fr&adcamp=${MARKER}&locationName=${destination}`;
};

// Mock data for demonstration with dynamic deep links
const getMockFlights = (params: SearchParams): FlightResult[] => {
  const flights = [
    {
      id: '1',
      airline: 'Air France',
      airlineLogo: 'https://picsum.photos/seed/af/40/40',
      originCity: params.originName || params.origin || 'Paris',
      originCode: params.origin || 'PAR',
      destinationCity: params.destinationName || params.destination || 'Londres',
      destinationCode: params.destination || 'LON',
      departureTime: `${params.departureDate}T10:00:00Z`,
      arrivalTime: `${params.departureDate}T12:30:00Z`,
      duration: '2h 30m',
      price: 125,
      currency: 'EUR',
      stops: 0,
      deepLink: buildFlightSearchUrl(params)
    },
    {
      id: '2',
      airline: 'Lufthansa',
      airlineLogo: 'https://picsum.photos/seed/lh/40/40',
      originCity: params.originName || params.origin || 'Paris',
      originCode: params.origin || 'PAR',
      destinationCity: params.destinationName || params.destination || 'Berlin',
      destinationCode: params.destination || 'BER',
      departureTime: `${params.departureDate}T14:15:00Z`,
      arrivalTime: `${params.departureDate}T17:45:00Z`,
      duration: '3h 30m',
      price: 189,
      currency: 'EUR',
      stops: 1,
      deepLink: buildFlightSearchUrl(params)
    }
  ];

  if (params.directFlights) {
    return flights.filter(f => f.stops === 0);
  }
  return flights;
};

const getMockHotels = (params: SearchParams): HotelResult[] => [
  {
    id: 'h1',
    name: 'Grand Palace Hotel & Spa',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400',
    rating: 4.8,
    pricePerNight: 185,
    currency: 'EUR',
    location: params.destination || 'Paris, France',
    deepLink: buildHotelSearchUrl(params)
  },
  {
    id: 'h2',
    name: 'Boutique Art Hotel',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400',
    rating: 4.5,
    pricePerNight: 120,
    currency: 'EUR',
    location: params.destination || 'Lyon, France',
    deepLink: buildHotelSearchUrl(params)
  },
  {
    id: 'h3',
    name: 'Riverside Resort',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400',
    rating: 4.2,
    pricePerNight: 95,
    currency: 'EUR',
    location: params.destination || 'Bordeaux, France',
    deepLink: buildHotelSearchUrl(params)
  }
];

const getMockCars = (params: SearchParams): CarResult[] => [
  {
    id: 'c1',
    model: 'Volkswagen Golf',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400',
    company: 'Sixt',
    pricePerDay: 45,
    currency: 'EUR',
    type: 'Compact',
    deepLink: buildCarSearchUrl(params)
  },
  {
    id: 'c2',
    model: 'BMW 3 Series',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400',
    company: 'Hertz',
    pricePerDay: 85,
    currency: 'EUR',
    type: 'Luxury',
    deepLink: buildCarSearchUrl(params)
  },
  {
    id: 'c3',
    model: 'Renault Clio',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400',
    company: 'Europcar',
    pricePerDay: 35,
    currency: 'EUR',
    type: 'Economy',
    deepLink: buildCarSearchUrl(params)
  }
];

export const travelService = {
  async getInitialResults() {
    const defaultParams: SearchParams = {
      origin: 'PAR',
      destination: 'NYC',
      departureDate: new Date().toISOString().split('T')[0],
      adults: 1,
      children: 0,
      infants: 0,
      cabinClass: 'economy',
      tripType: 'one-way',
      directFlights: false
    };
    
    return {
      flights: getMockFlights(defaultParams),
      hotels: getMockHotels(defaultParams),
      cars: getMockCars(defaultParams)
    };
  },

  async searchFlights(params: SearchParams): Promise<FlightResult[]> {
    try {
      const { origin, destination, departureDate, returnDate, tripType, directFlights } = params;
      const isRoundTrip = tripType === 'round-trip';
      
      let url = `/api/travel/flights?origin=${origin}&destination=${destination}&departureDate=${departureDate}&direct=${directFlights}`;
      if (isRoundTrip && returnDate) {
        url += `&returnDate=${returnDate}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch flights');
      
      const data = await response.json();
      
      // Transform TravelPayouts v3 data to our FlightResult format
      if (data.success && data.data && data.data.length > 0) {
        return data.data.map((item: any, index: number) => ({
          id: `tp-${index}`,
          airline: item.airline,
          airlineLogo: `https://picsum.photos/seed/${item.airline}/40/40`,
          originCity: params.originName || item.origin,
          originCode: item.origin,
          destinationCity: params.destinationName || item.destination,
          destinationCode: item.destination,
          departureTime: item.departure_at,
          arrivalTime: '', // API v3 doesn't provide arrival time directly in this endpoint
          duration: `${Math.floor(item.duration / 60)}h ${item.duration % 60}m`,
          price: item.price,
          currency: 'EUR',
          stops: item.transfers,
          deepLink: `https://www.jetradar.com${item.link}&marker=${MARKER}&trs=${TRS}`
        }));
      } else if (!data.success) {
        console.error('TravelPayouts API returned success: false', data.error || data.message);
      }
      
      // If API returns no results or fails, return mock data as fallback
      return getMockFlights(params);
    } catch (error) {
      console.error('Error searching flights:', error);
      return getMockFlights(params);
    }
  },

  async searchHotels(params: SearchParams): Promise<HotelResult[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getMockHotels(params);
  },

  async searchCars(params: SearchParams): Promise<CarResult[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getMockCars(params);
  }
};
