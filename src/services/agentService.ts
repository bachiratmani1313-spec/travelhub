import { GoogleGenAI, Type } from "@google/genai";

export interface AIDeal {
  id: string;
  origin: string;
  destination: string;
  price: string;
  discount: string;
  image: string;
  iata: string;
  type: 'flight' | 'hotel';
  tripType?: 'Aller Simple' | 'Aller-Retour';
  description: string;
}

class AgentService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    if (process.env.GEMINI_API_KEY) {
      this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
  }

  async scoutDeals(): Promise<AIDeal[]> {
    // If no API key, return high-quality mock deals
    if (!this.ai) {
      return this.getMockDeals();
    }

    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Tu es l'Agent Scout de TravelHub, un expert en recherche de bons plans voyage. Ta mission est de générer 4 suggestions de voyage inspirantes basées sur des tendances réelles et actuelles. \n\nIMPORTANT : \n1. Ces offres doivent être réservables via nos partenaires affiliés (Aviasales, Jetradar, Hotellook). \n2. Pour chaque suggestion, fournis : origine, destination, code IATA de la destination, prix estimé en Euros, pourcentage de réduction, une description captivante, et le type (flight ou hotel).\n3. Ne mentionne jamais de sites concurrents. \n4. Précise 'Aller Simple' ou 'Aller-Retour' pour les vols.\n5. Réponds exclusivement en JSON.",
        config: {
          responseMimeType: "application/json",
          tools: [{ googleSearch: {} }],
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                origin: { type: Type.STRING },
                destination: { type: Type.STRING },
                iata: { type: Type.STRING },
                price: { type: Type.STRING },
                discount: { type: Type.STRING },
                description: { type: Type.STRING },
                type: { type: Type.STRING, enum: ['flight', 'hotel'] },
                tripType: { type: Type.STRING, enum: ['Aller Simple', 'Aller-Retour'] }
              },
              required: ['origin', 'destination', 'iata', 'price', 'discount', 'description', 'type']
            }
          }
        }
      });

      const deals = JSON.parse(response.text);
      return deals.map((deal: any, index: number) => ({
        ...deal,
        id: `ai-deal-${index}`,
        image: this.getRandomTravelImage(deal.destination)
      }));
    } catch (error) {
      console.error("Agent failed to scout deals:", error);
      return this.getMockDeals();
    }
  }

  private getRandomTravelImage(destination: string): string {
    const seeds = ['tropical', 'city', 'mountain', 'beach', 'architecture', 'sunset'];
    const seed = seeds[Math.floor(Math.random() * seeds.length)];
    return `https://picsum.photos/seed/${destination.replace(/\s/g, '') || seed}/800/600`;
  }

  private getMockDeals(): AIDeal[] {
    return [
      {
        id: 'ai-1',
        origin: 'Paris',
        destination: 'Bali',
        iata: 'DPS',
        price: '540€',
        discount: '-15%',
        type: 'flight',
        tripType: 'Aller-Retour',
        description: 'Vols aller-retour vers Denpasar. Explorez les rizières et les plages paradisiaques de Bali.',
        image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400'
      },
      {
        id: 'ai-2',
        origin: 'Lyon',
        destination: 'Marrakech',
        iata: 'RAK',
        price: '85€',
        discount: '-25%',
        type: 'flight',
        tripType: 'Aller-Retour',
        description: 'Vols directs pour Marrakech. Découvrez le charme de la Médina et ses palais somptueux.',
        image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400'
      },
      {
        id: 'ai-3',
        origin: 'Bordeaux',
        destination: 'Lisbonne',
        iata: 'LIS',
        price: '42€',
        discount: '-30%',
        type: 'flight',
        tripType: 'Aller Simple',
        description: 'Vol aller simple pour Lisbonne. Profitez du soleil portugais et des célèbres pastéis de nata.',
        image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400'
      },
      {
        id: 'ai-4',
        origin: 'Marseille',
        destination: 'Rome',
        iata: 'FCO',
        price: '38€',
        discount: '-20%',
        type: 'flight',
        tripType: 'Aller Simple',
        description: 'Vol aller simple pour Rome. La Ville Éternelle vous attend pour une escapade culturelle unique.',
        image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400'
      }
    ];
  }
}

export const agentService = new AgentService();
