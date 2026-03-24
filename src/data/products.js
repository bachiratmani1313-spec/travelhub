// src/data/products.js

// Votre identifiant partenaire Amazon
export const AFFILIATE_TAG = "vrax-21";

// Liste des produits
export const products = [
  
  // ---------------------------------------------------------
  // PRODUIT 1 : SAC À DOS ÉTANCHE (Prêt à l'emploi)
  // ---------------------------------------------------------
  {
    id: 1,
    title: "COR Surf Sac à dos étanche",
    category: "Bagages",
    description: "Sac étanche avec housse rembourrée pour ordinateur, idéal pour le bateau, la randonnée et le kayak.",
    asin: "B0B361HYGF", 
  },

  // ---------------------------------------------------------
  // PRODUIT 2 : Ajoutez le prochain ici demain...
  // ---------------------------------------------------------
  
];

// Fonctions automatiques pour générer les liens (Ne pas toucher)
export const getProductLink = (asin) => {
  return `https://www.amazon.fr/dp/${asin}?tag=${AFFILIATE_TAG}`;
};

export const getProductImage = (asin) => {
  return `https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=${asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL250`;
};
