// src/data/products.js

const AFFILIATE_TAG = "vrax-21";

// Données brutes des produits
const items = [
  {
    id: 1,
    title: "COR Surf Sac à dos étanche",
    category: "Bagages",
    description: "Sac étanche avec housse rembourrée pour ordinateur, idéal pour le bateau, la randonnée et le kayak.",
    asin: "B0B361HYGF",
    price: "64,99 €" // Prix indicatif
  },
  // Nous ajouterons les autres produits ici plus tard
];

// On transforme la liste pour qu'elle soit prête à l'emploi (avec liens et images)
export const PRODUCTS = items.map(item => ({
  ...item,
  link: `https://www.amazon.fr/dp/${item.asin}?tag=${AFFILIATE_TAG}`,
  image: `https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=${item.asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL250`
}));
