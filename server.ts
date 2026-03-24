import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fetch from 'node-fetch';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // TravelPayouts API Proxy
  app.get('/api/travel/flights', async (req, res) => {
    const { origin, destination, departureDate, returnDate, direct } = req.query;
    
    // Use the token from environment variable or fallback for demo
    const token = 
      process.env.TRAVELPAYOUTS_TOKEN || 
      process.env.TRAVEL_PLAYOUT_TOKEN || 
      'a112e05a72f05ca47a72b82056fcbfc4';
    
    if (!token) {
      return res.status(500).json({ error: 'TRAVELPAYOUTS_TOKEN not configured' });
    }

    try {
      console.log(`Fetching flights from ${origin} to ${destination} on ${departureDate} (Return: ${returnDate}, Direct: ${direct})`);
      // Using TravelPayouts Prices for Dates API (v3)
      // Documentation: https://support.travelpayouts.com/hc/en-us/articles/203956163-Travel-Data-API
      let url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${departureDate}&unique=false&sorting=price&direct=${direct === 'true'}&currency=eur&limit=10&token=${token}`;
      
      if (returnDate && returnDate !== 'undefined') {
        url += `&return_at=${returnDate}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      console.log('TravelPayouts API response:', JSON.stringify(data).substring(0, 200));
      res.json(data);
    } catch (error) {
      console.error('TravelPayouts API error:', error);
      res.status(500).json({ error: 'Failed to fetch flights' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
