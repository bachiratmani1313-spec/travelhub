// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  link: string;
  category: 'Bagages' | 'Tech' | 'Plage' | 'Sport' | 'Sécurité' | 'Organisation' | 'Santé';
}

// Fonction helper pour générer l'URL de l'image Amazon automatiquement
const getAmazonImage = (asin: string) => 
  `https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=${asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL250`;

// Fonction helper pour générer le lien produit propre automatiquement
const getAmazonLink = (asin: string) => 
  `https://www.amazon.fr/dp/${asin}`;

export const PRODUCTS: Product[] = [
  // --- BAGAGES (Exemples corrigés avec vraies photos pour les premiers) ---
  { id: 'b1', name: "Samsonite S'Cure Cabine", description: "Valise rigide ultra-résistante, fermeture 3 points.", price: "159.00€", image: getAmazonImage('B00LEAM4K4'), link: getAmazonLink('B00LEAM4K4'), category: 'Bagages' },
  { id: 'b2', name: "Osprey Farpoint 40L", description: "Le sac à dos cabine ultime pour les backpackers.", price: "125.00€", image: getAmazonImage('B00OXYSME6'), link: getAmazonLink('B00OXYSME6'), category: 'Bagages' },
  { id: 'b3', name: "Pèse-Bagage Digital", description: "Évitez les frais d'excédent de bagages.", price: "12.99€", image: "https://images.unsplash.com/photo-1565026073747-483e93db4450?w=400", link: "https://www.amazon.fr/s?k=pese+bagage+digital", category: 'Bagages' },
  { id: 'b4', name: "Housse Valise Spandex", description: "Protège des rayures et facilite l'identification.", price: "18.50€", image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=400", link: "https://www.amazon.fr/s?k=housse+valise", category: 'Bagages' },
  { id: 'b5', name: "Sac Antivol CitySafe", description: "Fermetures cachées et matériau anti-coupure.", price: "49.00€", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400", link: "https://www.amazon.fr/s?k=sac+antivol", category: 'Bagages' },
  { id: 'b6', name: "Étiquettes Bagages Cuir", description: "Lot de 2 étiquettes élégantes et robustes.", price: "12.99€", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", link: "https://www.amazon.fr/s?k=etiquettes+bagages", category: 'Bagages' },
  { id: 'b7', name: "Sac à Chaussures Voyage", description: "Séparez vos chaussures de vos vêtements.", price: "14.99€", image: "https://images.unsplash.com/photo-1565026073747-483e93db4450?w=400", link: "https://www.amazon.fr/s?k=sac+chaussures+voyage", category: 'Bagages' },
  { id: 'b8', name: "Sac Banane RFID", description: "Discret et sécurisé pour vos documents.", price: "15.99€", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400", link: "https://www.amazon.fr/s?k=sac+banane+voyage", category: 'Bagages' },
  { id: 'b9', name: "Sac à Dos Pliable 20L", description: "Se replie dans sa poche, idéal pour les excursions.", price: "19.99€", image: "https://images.unsplash.com/photo-1553062407-98eeb94c6a62?w=400", link: "https://www.amazon.fr/s?k=sac+pliable+voyage", category: 'Bagages' },
  { id: 'b10', name: "Sangles Valise TSA", description: "Renforce la sécurité de votre bagage.", price: "13.99€", image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=400", link: "https://www.amazon.fr/s?k=sangle+valise+tsa", category: 'Bagages' },
  { id: 'b11', name: "Eastpak Tranverz M", description: "Valise souple à deux étages, très pratique.", price: "95.00€", image: "https://images.unsplash.com/photo-1565026073747-483e93db4450?w=400", link: "https://www.amazon.fr/s?k=eastpak+tranverz", category: 'Bagages' },
  { id: 'b12', name: "Sac de Voyage Cuir", description: "Look vintage pour vos week-ends.", price: "79.00€", image: "https://images.unsplash.com/photo-1553062407-98eeb94c6a62?w=400", link: "https://www.amazon.fr/s?k=sac+voyage+cuir", category: 'Bagages' },
  { id: 'b13', name: "Sac de Sport Imperméable", description: "Idéal pour les activités nautiques.", price: "29.99€", image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=400", link: "https://www.amazon.fr/s?k=sac+sport+impermeable", category: 'Bagages' },
  { id: 'b14', name: "Valise Enfant Trunki", description: "La valise sur laquelle les enfants peuvent s'asseoir.", price: "49.99€", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", link: "https://www.amazon.fr/s?k=trunki", category: 'Bagages' },
  { id: 'b15', name: "Sac à Dos Photo", description: "Protection maximale pour votre matériel.", price: "65.00€", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400", link: "https://www.amazon.fr/s?k=sac+photo+voyage", category: 'Bagages' },
  { id: 'b16', name: "Porte-Habit Voyage", description: "Transportez vos costumes sans plis.", price: "35.00€", image: "https://images.unsplash.com/photo-1565026073747-483e93db4450?w=400", link: "https://www.amazon.fr/s?k=porte+habit+voyage", category: 'Bagages' },
  { id: 'b17', name: "Sac à Dos Ordinateur", description: "Compartiment rembourré et port USB.", price: "45.00€", image: "https://images.unsplash.com/photo-1553062407-98eeb94c6a62?w=400", link: "https://www.amazon.fr/s?k=sac+ordinateur+voyage", category: 'Bagages' },
  { id: 'b18', name: "Sac de Compression", description: "Gagnez de la place sans aspirateur.", price: "15.99€", image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=400", link: "https://www.amazon.fr/s?k=sac+compression+voyage", category: 'Bagages' },
  { id: 'b19', name: "Valise American Tourister", description: "Légère, colorée et robuste.", price: "89.00€", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", link: "https://www.amazon.fr/s?k=american+tourister", category: 'Bagages' },
  { id: 'b20', name: "Sac à Dos Randonnée 60L", description: "Pour vos treks de plusieurs jours.", price: "110.00€", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400", link: "https://www.amazon.fr/s?k=sac+randonnee+60l", category: 'Bagages' },
  { id: 'b21', name: "Samsonite S'Cure Armoire", description: "Set de 3 valises rigides.", price: "199.99€", image: getAmazonImage('B00LEAM4K4'), link: getAmazonLink('B00LEAM4K4'), category: 'Bagages' },
  { id: 'b22', name: "Sac à dos COR Surf 40L", description: "Sac à dos étanche avec compartiment ordi.", price: "99.99€", image: getAmazonImage('B0B361HYGF'), link: getAmazonLink('B0B361HYGF'), category: 'Bagages' },

  // --- TECH (Produits très populaires - Images corrigées) ---
  { id: 't1', name: "Sony WH-1000XM5", description: "Réduction de bruit leader du marché.", price: "329.00€", image: getAmazonImage('B09XS7JWHH'), link: getAmazonLink('B09XS7JWHH'), category: 'Tech' },
  { id: 't2', name: "Batterie Anker 20000mAh", description: "Chargez votre téléphone 5 fois.", price: "45.99€", image: getAmazonImage('B08XR5H8K9'), link: getAmazonLink('B08XR5H8K9'), category: 'Tech' },
  { id: 't3', name: "Adaptateur Monde 4 USB", description: "Compatible dans plus de 150 pays.", price: "24.50€", image: getAmazonImage('B07Y58R5FQ'), link: getAmazonLink('B07Y58R5FQ'), category: 'Tech' },
  { id: 't4', name: "Kindle Paperwhite", description: "Lisez partout, même sous l'eau.", price: "169.99€", image: getAmazonImage('B09SW258DS'), link: getAmazonLink('B09SW258DS'), category: 'Tech' },
  { id: 't5', name: "Apple AirTag (Lot de 4)", description: "Suivez vos bagages en temps réel.", price: "99.00€", image: getAmazonImage('B09V3MK6MH'), link: getAmazonLink('B09V3MK6MH'), category: 'Tech' },
  { id: 't6', name: "Organisateur de Câbles", description: "Fini les fils emmêlés dans le sac.", price: "16.99€", image: "https://images.unsplash.com/photo-1585332922689-69214e8803f8?w=400", link: "https://www.amazon.fr/s?k=organisateur+cables+voyage", category: 'Tech' },
  { id: 't7', name: "JBL GO 3 Étanche", description: "Petite enceinte, gros son pour la plage.", price: "34.99€", image: getAmazonImage('B08TJPV3RV'), link: getAmazonLink('B08TJPV3RV'), category: 'Tech' },
  { id: 't8', name: "Chargeur Solaire Portable", description: "Énergie gratuite pour vos randos.", price: "39.99€", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400", link: "https://www.amazon.fr/s?k=chargeur+solaire+portable", category: 'Tech' },
  { id: 't9', name: "Stabilisateur Smartphone", description: "Vidéos fluides comme au cinéma.", price: "99.00€", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", link: "https://www.amazon.fr/s?k=stabilisateur+smartphone", category: 'Tech' },
  { id: 't10', name: "GoPro HERO12 Black", description: "La caméra d'action par excellence.", price: "399.00€", image: getAmazonImage('B0CDDTV1N2'), link: getAmazonLink('B0CDDTV1N2'), category: 'Tech' },
  { id: 't11', name: "Hub USB-C Voyage", description: "Connectez tout sur votre laptop.", price: "29.99€", image: "https://images.unsplash.com/photo-1585332922689-69214e8803f8?w=400", link: "https://www.amazon.fr/s?k=hub+usb-c+voyage", category: 'Tech' },
  { id: 't12', name: "Trépied Flexible", description: "S'accroche partout pour vos photos.", price: "19.99€", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", link: "https://www.amazon.fr/s?k=trepied+flexible", category: 'Tech' },
  { id: 't13', name: "Carte SD 128GB", description: "Stockage haute vitesse pour vos vidéos.", price: "22.00€", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", link: "https://www.amazon.fr/s?k=carte+sd+128gb", category: 'Tech' },
  { id: 't14', name: "Routeur Wi-Fi Voyage", description: "Créez votre propre réseau sécurisé.", price: "45.00€", image: "https://images.unsplash.com/photo-1585332922689-69214e8803f8?w=400", link: "https://www.amazon.fr/s?k=routeur+wifi+voyage", category: 'Tech' },
  { id: 't15', name: "Écouteurs Sport", description: "Résistants à la sueur et stables.", price: "59.00€", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", link: "https://www.amazon.fr/s?k=ecouteurs+sport", category: 'Tech' },

  // --- ORGANISATION (Générique pour l'instant) ---
  { id: 'o1', name: "Set Packing Cubes", description: "Organisation parfaite de la valise.", price: "22.99€", image: "https://images.unsplash.com/photo-1520206159162-9f9302fd4986?w=400", link: "https://www.amazon.fr/s?k=packing+cubes", category: 'Organisation' },
  { id: 'o2', name: "Oreiller Mémoire Forme", description: "Confort cervical en avion.", price: "29.99€", image: "https://images.unsplash.com/photo-1520206159162-9f9302fd4986?w=400", link: "https://www.amazon.fr/s?k=oreiller+voyage", category: 'Organisation' },
  { id: 'o3', name: "Trousse Toilette Suspendue", description: "Accès facile à vos produits.", price: "19.99€", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400", link: "https://www.amazon.fr/s?k=trousse+toilette+suspendue", category: 'Organisation' },
  { id: 'o4', name: "Flacons Silicone 100ml", description: "Respectent les normes aériennes.", price: "13.50€", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400", link: "https://www.amazon.fr/s?k=flacons+silicone+voyage", category: 'Organisation' },
  { id: 'o5', name: "Porte-Passeport RFID", description: "Protégez vos données et documents.", price: "12.99€", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", link: "https://www.amazon.fr/s?k=porte+passeport+rfid", category: 'Organisation' },
  { id: 'o6', name: "Masque de Nuit Soie", description: "Occultation totale pour dormir.", price: "14.50€", image: "https://images.unsplash.com/photo-1520206159162-9f9302fd4986?w=400", link: "https://www.amazon.fr/s?k=masque+nuit+soie", category: 'Organisation' },
  { id: 'o7', name: "Bouchons d'Oreilles", description: "Réutilisables et confortables.", price: "12.99€", image: "https://images.unsplash.com/photo-1520206159162-9f9302fd4986?w=400", link: "https://www.amazon.fr/s?k=bouchons+oreilles+voyage", category: 'Organisation' },
  { id: 'o8', name: "Carnet de Voyage", description: "Notez vos souvenirs et aventures.", price: "15.00€", image: "https://images.unsplash.com/photo-1520206159162-9f9302fd4986?w=400", link: "https://www.amazon.fr/s?k=carnet+voyage", category: 'Organisation' },
  { id: 'o9', name: "Repose-Pieds Avion", description: "Soulage les jambes en vol long-courrier.", price: "18.00€", image: "https://images.unsplash.com/photo-1520206159162-9f9302fd4986?w=400", link: "https://www.amazon.fr/s?k=repose+pieds+avion", category: 'Organisation' },
  { id: 'o10', name: "Couverture de Voyage", description: "Compacte et douce pour l'avion.", price: "24.99€", image: "https://images.unsplash.com/photo-1520206159162-9f9302fd4986?w=400", link: "https://www.amazon.fr/s?k=couverture+voyage", category: 'Organisation' },
  { id: 'o11', name: "Miroir de Poche LED", description: "Maquillage parfait en déplacement.", price: "12.99€", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400", link: "https://www.amazon.fr/s?k=miroir+poche+led", category: 'Organisation' },
  { id: 'o12', name: "Porte-Bijoux Voyage", description: "Ne mêlez plus vos colliers.", price: "16.99€", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400", link: "https://www.amazon.fr/s?k=porte+bijoux+voyage", category: 'Organisation' },
  { id: 'o13', name: "Savon en Feuilles", description: "Hygiène mains sans liquide.", price: "8.50€", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=400", link: "https://www.amazon.fr/s?k=savon+en+feuilles+voyage", category: 'Organisation' },
  { id: 'o14', name: "Cintre Pliable Voyage", description: "Lot de 5 cintres compacts.", price: "11.99€", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400", link: "https://www.amazon.fr/s?k=cintre+pliable+voyage", category: 'Organisation' },
  { id: 'o15', name: "Sac à Linge Sale", description: "Séparez le propre du sale.", price: "9.99€", image: "https://images.unsplash.com/photo-1520206159162-9f9302fd4986?w=400", link: "https://www.amazon.fr/s?k=sac+linge+sale+voyage", category: 'Organisation' },

  // --- SÉCURITÉ ---
  { id: 's1', name: "Cadenas TSA à Code", description: "Indispensable pour les USA.", price: "14.99€", image: "https://images.unsplash.com/photo-1510816159960-63f860df8596?w=400", link: "https://www.amazon.fr/s?k=cadenas+tsa", category: 'Sécurité' },
  { id: 's2', name: "Portefeuille RFID", description: "Sécurisez vos cartes bancaires.", price: "19.99€", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", link: "https://www.amazon.fr/s?k=portefeuille+rfid", category: 'Sécurité' },
  { id: 's3', name: "Alarme de Porte", description: "Sécurité supplémentaire à l'hôtel.", price: "14.99€", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400", link: "https://www.amazon.fr/s?k=alarme+porte+voyage", category: 'Sécurité' },
  { id: 's4', name: "Ceinture Cache-Billets", description: "Gardez votre argent caché.", price: "15.99€", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400", link: "https://www.amazon.fr/s?k=ceinture+cache+billets", category: 'Sécurité' },
  { id: 's5', name: "Câble Antivol Bagage", description: "Attachez votre sac au train.", price: "12.50€", image: "https://images.unsplash.com/photo-1510816159960-63f860df8596?w=400", link: "https://www.amazon.fr/s?k=cable+antivol+voyage", category: 'Sécurité' },
  { id: 's6', name: "Détecteur Caméra Espion", description: "Vérifiez votre Airbnb.", price: "35.00€", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400", link: "https://www.amazon.fr/s?k=detecteur+camera+espion", category: 'Sécurité' },
  { id: 's7', name: "Sifflet de Survie", description: "Puissant pour les urgences.", price: "7.99€", image: "https://images.unsplash.com/photo-1510816159960-63f860df8596?w=400", link: "https://www.amazon.fr/s?k=sifflet+survie", category: 'Sécurité' },
  { id: 's8', name: "Pochette de Cou RFID", description: "Documents sous le t-shirt.", price: "16.99€", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400", link: "https://www.amazon.fr/s?k=pochette+cou+rfid", category: 'Sécurité' },
  { id: 's9', name: "Verrou de Porte Portable", description: "Bloque la porte de l'intérieur.", price: "13.99€", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400", link: "https://www.amazon.fr/s?k=verrou+porte+portable", category: 'Sécurité' },
  { id: 's10', name: "Traceur GPS Bagage", description: "Localisez votre sac partout.", price: "49.00€", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", link: "https://www.amazon.fr/s?k=traceur+gps+bagage", category: 'Sécurité' },

  // --- SANTÉ ---
  { id: 'h1', name: "Trousse Secours Voyage", description: "L'essentiel pour les bobos.", price: "15.50€", image: "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?w=400", link: "https://www.amazon.fr/s?k=trousse+secours+voyage", category: 'Santé' },
  { id: 'h2', name: "Gourde LifeStraw", description: "Filtre 99.9% des bactéries.", price: "44.90€", image: "https://images.unsplash.com/photo-1602143399827-7218ca0599bb?w=400", link: "https://www.amazon.fr/s?k=lifestraw", category: 'Santé' },
  { id: 'h3', name: "Bracelet Anti-Nausée", description: "Contre le mal des transports.", price: "11.99€", image: "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?w=400", link: "https://www.amazon.fr/s?k=bracelet+anti+nausee", category: 'Santé' },
  { id: 'h4', name: "Gel Hydroalcoolique 100ml", description: "Hygiène mains en voyage.", price: "3.50€", image: "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?w=400", link: "https://www.amazon.fr/s?k=gel+hydroalcoolique", category: 'Santé' },
  { id: 'h5', name: "Bas de Contention Avion", description: "Évite les jambes lourdes.", price: "19.99€", image: "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?w=400", link: "https://www.amazon.fr/s?k=bas+contention+voyage", category: 'Santé' },
  { id: 'h6', name: "Spray Anti-Moustiques", description: "Protection zones tropicales.", price: "12.50€", image: "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?w=400", link: "https://www.amazon.fr/s?k=spray+anti+moustiques", category: 'Santé' },
  { id: 'h7', name: "Pastilles Purification Eau", description: "Désinfecte l'eau douteuse.", price: "14.00€", image: "https://images.unsplash.com/photo-1602143399827-7218ca0599bb?w=400", link: "https://www.amazon.fr/s?k=pastilles+purification+eau", category: 'Santé' },
  { id: 'h8', name: "Lingettes Désinfectantes", description: "Nettoyez votre tablette d'avion.", price: "6.99€", image: "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?w=400", link: "https://www.amazon.fr/s?k=lingettes+desinfectantes", category: 'Santé' },
  { id: 'h9', name: "Thermomètre Sans Contact", description: "Vérifiez votre température.", price: "22.00€", image: "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?w=400", link: "https://www.amazon.fr/s?k=thermometre+sans+contact", category: 'Santé' },
  { id: 'h10', name: "Pillulier Semainier", description: "Organisez vos médicaments.", price: "9.99€", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400", link: "https://www.amazon.fr/s?k=pillulier+semainier+voyage", category: 'Santé' },

  // --- PLAGE ---
  { id: 'p1', name: "Serviette Microfibre XL", description: "Sèche vite, prend peu de place.", price: "15.99€", image: "https://images.unsplash.com/photo-1526170315873-3a92b4880d01?w=400", link: "https://www.amazon.fr/s?k=serviette+microfibre", category: 'Plage' },
  { id: 'p2', name: "Pochette Étanche Phone", description: "Photos sous l'eau garanties.", price: "12.99€", image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=400", link: "https://www.amazon.fr/s?k=poche+etanche+telephone", category: 'Plage' },
  { id: 'p3', name: "Masque Snorkeling Intégral", description: "Vue 180° et respiration facile.", price: "29.99€", image: "https://images.unsplash.com/photo-1511499767390-903390e6fbc4?w=400", link: "https://www.amazon.fr/s?k=masque+snorkeling", category: 'Plage' },
  { id: 'p4', name: "Sac Étanche Dry Bag 20L", description: "Gardez vos affaires au sec.", price: "17.99€", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400", link: "https://www.amazon.fr/s?k=dry+bag", category: 'Plage' },
  { id: 'p5', name: "Crème Solaire Bio", description: "Respecte les coraux et la peau.", price: "18.50€", image: "https://images.unsplash.com/photo-1526170315873-3a92b4880d01?w=400", link: "https://www.amazon.fr/s?k=creme+solaire+bio", category: 'Plage' },
  { id: 'p6', name: "Chaussures Aquatiques", description: "Protégez vos pieds des rochers.", price: "19.99€", image: "https://images.unsplash.com/photo-1511499767390-903390e6fbc4?w=400", link: "https://www.amazon.fr/s?k=chaussures+aquatiques", category: 'Plage' },
  { id: 'p7', name: "Parasol de Plage Léger", description: "Protection UV portable.", price: "35.00€", image: "https://images.unsplash.com/photo-1526170315873-3a92b4880d01?w=400", link: "https://www.amazon.fr/s?k=parasol+plage+leger", category: 'Plage' },
  { id: 'p8', name: "Sac de Plage XL", description: "Tout ranger pour la famille.", price: "22.99€", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400", link: "https://www.amazon.fr/s?k=sac+plage+xl", category: 'Plage' },
  { id: 'p9', name: "Tente de Plage Pop-up", description: "Ombre instantanée pour bébé.", price: "39.00€", image: "https://images.unsplash.com/photo-1526170315873-3a92b4880d01?w=400", link: "https://www.amazon.fr/s?k=tente+plage+popup", category: 'Plage' },
  { id: 'p10', name: "Palmes de Voyage", description: "Courtes et faciles à ranger.", price: "25.00€", image: "https://images.unsplash.com/photo-1511499767390-903390e6fbc4?w=400", link: "https://www.amazon.fr/s?k=palmes+voyage", category: 'Plage' },
  { id: 'p11', name: "Coussin de Plage Gonflable", description: "Confort pour lire sur le sable.", price: "12.99€", image: "https://images.unsplash.com/photo-1526170315873-3a92b4880d01?w=400", link: "https://www.amazon.fr/s?k=coussin+plage", category: 'Plage' },
  { id: 'p12', name: "Porte-Boisson Flottant", description: "Gardez votre verre au frais.", price: "9.99€", image: "https://images.unsplash.com/photo-1526170315873-3a92b4880d01?w=400", link: "https://www.amazon.fr/s?k=porte+boisson+flottant", category: 'Plage' },
  { id: 'p13', name: "Raquettes de Plage", description: "Le classique indémodable.", price: "15.00€", image: "https://images.unsplash.com/photo-1526170315873-3a92b4880d01?w=400", link: "https://www.amazon.fr/s?k=raquettes+plage", category: 'Plage' },
  { id: 'p14', name: "Glacière Souple", description: "Gardez vos boissons au frais.", price: "24.99€", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400", link: "https://www.amazon.fr/s?k=glaciere+souple", category: 'Plage' },
  { id: 'p15', name: "Peigne à Sable", description: "Nettoyez votre zone de repos.", price: "7.50€", image: "https://images.unsplash.com/photo-1526170315873-3a92b4880d01?w=400", link: "https://www.amazon.fr/s?k=peigne+sable", category: 'Plage' },

  // --- SPORT & AVENTURE ---
  { id: 'a1', name: "Lampe Frontale Rechargeable", description: "Indispensable pour le bivouac.", price: "25.00€", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400", link: "https://www.amazon.fr/s?k=lampe+frontale", category: 'Sport' },
  { id: 'a2', name: "Bâtons de Marche Pliables", description: "Soulagez vos genoux en rando.", price: "39.00€", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400", link: "https://www.amazon.fr/s?k=batons+marche+pliables", category: 'Sport' },
  { id: 'a3', name: "Hamac Ultra-Léger", description: "Dormez à la belle étoile.", price: "29.99€", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400", link: "https://www.amazon.fr/s?k=hamac+voyage", category: 'Sport' },
  { id: 'a4', name: "Couteau Suisse Victorinox", description: "L'outil multifonction par excellence.", price: "35.00€", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400", link: "https://www.amazon.fr/s?k=couteau+suisse", category: 'Sport' },
  { id: 'a5', name: "Boussole de Précision", description: "Ne perdez jamais le nord.", price: "12.99€", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400", link: "https://www.amazon.fr/s?k=boussole+voyage", category: 'Sport' },
  { id: 'a6', name: "Jumelles Compactes", description: "Observez la faune sauvage.", price: "45.00€", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400", link: "https://www.amazon.fr/s?k=jumelles+compactes", category: 'Sport' },
  { id: 'a7', name: "Réchaud de Camping Gaz", description: "Cuisinez partout en liberté.", price: "24.99€", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400", link: "https://www.amazon.fr/s?k=rechaud+camping", category: 'Sport' },
  { id: 'a8', name: "Popote Aluminium", description: "Set de cuisine ultra-léger.", price: "22.00€", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400", link: "https://www.amazon.fr/s?k=popote+camping", category: 'Sport' },
  { id: 'a9', name: "Sac de Couchage 0°C", description: "Nuits au chaud en montagne.", price: "65.00€", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400", link: "https://www.amazon.fr/s?k=sac+couchage+0", category: 'Sport' },
  { id: 'a10', name: "Matelas Autogonflant", description: "Confort pour vos nuits sous tente.", price: "49.00€", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400", link: "https://www.amazon.fr/s?k=matelas+autogonflant", category: 'Sport' },
  { id: 'a11', name: "Filtre à Eau Portable", description: "Purifiez l'eau des rivières.", price: "29.99€", image: "https://images.unsplash.com/photo-1602143399827-7218ca0599bb?w=400", link: "https://www.amazon.fr/s?k=filtre+eau+portable", category: 'Sport' },
  { id: 'a12', name: "Tente 2 Personnes Légère", description: "Poids plume pour le portage.", price: "120.00€", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400", link: "https://www.amazon.fr/s?k=tente+2+personnes+legere", category: 'Sport' },
  { id: 'a13', name: "Poncho Imperméable", description: "Restez au sec sous l'orage.", price: "15.99€", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400", link: "https://www.amazon.fr/s?k=poncho+pluie+voyage", category: 'Sport' },
  { id: 'a14', name: "Allume-Feu Magnésium", description: "Démarrez un feu par tous temps.", price: "9.99€", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", link: "https://www.amazon.fr/s?k=allume+feu+magnesium", category: 'Sport' },
  { id: 'a15', name: "Sac à Dos Hydratation", description: "Boire sans s'arrêter de marcher.", price: "35.00€", image: "https://images.unsplash.com/photo-1533674689012-13538c1a499f?w=400", link: "https://www.amazon.fr/s?k=sac+a+dos+hydratation", category: 'Sport' }
];
