// Version minimale pour tester
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  link: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Test Produit",
    description: "Ceci est un test",
    price: "10€",
    image: "https://via.placeholder.com/150",
    link: "https://amazon.fr",
    category: "Test"
  }
];
