export type TravelService = 'flights' | 'hotels' | 'cars';

export interface SearchParams {
  origin?: string;
  destination?: string;
  departureDate: string;
  returnDate?: string;
  adults: number;
  children: number;
  infants: number;
  cabinClass?: 'economy' | 'premium' | 'business' | 'first';
  tripType?: 'one-way' | 'round-trip';
  directFlights?: boolean;
}

export interface FlightResult {
  id: string;
  airline: string;
  airlineLogo: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  currency: string;
  stops: number;
  deepLink: string;
}

export interface HotelResult {
  id: string;
  name: string;
  image: string;
  rating: number;
  pricePerNight: number;
  currency: string;
  location: string;
  deepLink: string;
}

export interface CarResult {
  id: string;
  model: string;
  image: string;
  company: string;
  pricePerDay: number;
  currency: string;
  type: string;
  deepLink: string;
}
