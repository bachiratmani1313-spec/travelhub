import React from 'react';
import { ArrowLeft, Calendar, User, Tag, Share2, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
  date: string;
  category: string;
  author: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '10-astuces-2026',
    title: "10 Astuces pour voyager moins cher en 2026",
    excerpt: "Découvrez comment notre IA déniche les perles rares et comment vous pouvez en profiter pour vos prochaines vacances.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
    date: "20 Mars 2026",
    category: "Économies",
    author: "L'Équipe TravelHub",
    content: (
      <div className="space-y-6">
        <p>Voyager en 2026 ne doit pas forcément coûter une fortune. Grâce aux nouvelles technologies et à une planification intelligente, il est possible de découvrir le monde avec un budget maîtrisé.</p>
        
        <h3 className="text-xl font-bold text-white">1. Utilisez notre Agent IA Scout</h3>
        <p>Notre algorithme scanne en permanence des milliers de sources pour trouver des erreurs de prix et des offres de dernière minute que les moteurs de recherche classiques ignorent.</p>
        
        <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 my-8">
          <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Recommandation Produit
          </h4>
          <p className="text-sm mb-4">Pour vos longs trajets, nous vous recommandons ce casque à réduction de bruit ultra-performant.</p>
          <a 
            href="https://www.amazon.fr/s?k=casque+reduction+bruit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-300 transition-colors"
          >
            Voir l'offre (-15% avec code VRAX21)
          </a>
        </div>

        <h3 className="text-xl font-bold text-white">2. Soyez flexible sur vos dates</h3>
        <p>Utilisez notre widget de calendrier pour visualiser les jours les moins chers. Parfois, décaler son départ de 24h peut faire économiser jusqu'à 40% sur le billet d'avion.</p>
        
        <h3 className="text-xl font-bold text-white">3. Le mode Nomad</h3>
        <p>Si vous travaillez à distance, privilégiez les séjours de longue durée. De nombreux hébergements offrent des réductions significatives pour les réservations de plus de 28 jours.</p>
      </div>
    )
  },
  {
    id: 'preparer-sac-tour-du-monde',
    title: "Comment préparer son sac pour un tour du monde",
    excerpt: "L'art de voyager léger sans rien oublier d'essentiel. Nos experts vous conseillent sur l'équipement indispensable.",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1200",
    date: "15 Mars 2026",
    category: "Préparation",
    author: "Marc, Expert Voyage",
    content: (
      <div className="space-y-6">
        <p>Partir pour un tour du monde est l'aventure d'une vie. Mais la question du sac à dos est souvent la plus stressante. Voici comment optimiser votre paquetage.</p>
        
        <h3 className="text-xl font-bold text-white">La règle d'or : Moins c'est mieux</h3>
        <p>Vous porterez votre sac tous les jours. Chaque gramme compte. Si vous hésitez sur un vêtement, ne le prenez pas. Vous pourrez toujours acheter ce qu'il vous manque sur place.</p>
        
        <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 my-8">
          <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Équipement Indispensable
          </h4>
          <p className="text-sm mb-4">Un bon sac à dos est votre meilleur allié. Nous recommandons ce modèle ergonomique et résistant.</p>
          <a 
            href="https://www.amazon.fr/s?k=sac+a+dos+voyage+ergonomique" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-300 transition-colors"
          >
            Acheter ce sac (Lien Affilié)
          </a>
        </div>

        <h3 className="text-xl font-bold text-white">Les indispensables technologiques</h3>
        <p>Une batterie externe haute capacité, un adaptateur universel et une liseuse pour économiser du poids sur les livres papier.</p>
      </div>
    )
  },
  {
    id: 'guide-bagages-2026',
    title: "Le guide des bagages 2026 : Valises et sacs",
    excerpt: "Trouvez la valise parfaite pour vos déplacements, de la cabine ultra-légère au bagage soute intelligent.",
    image: "https://images.unsplash.com/photo-1565026073747-483e93db4450?auto=format&fit=crop&q=80&w=1200",
    date: "12 Mars 2026",
    category: "Équipement",
    author: "Sophie, Globe-trotteuse",
    content: (
      <div className="space-y-6">
        <p>Le choix du bagage peut faire ou défaire un voyage. En 2026, la légèreté et la durabilité sont les maîtres mots.</p>
        
        <h3 className="text-xl font-bold text-white">Valises cabine : Gagnez du temps</h3>
        <p>Évitez l'attente au tapis roulant avec une valise cabine optimisée pour les dimensions des compagnies low-cost.</p>
        
        <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 my-8">
          <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Sélection Bagagerie
          </h4>
          <p className="text-sm mb-4">Cette valise rigide ultra-légère est notre coup de cœur pour les week-ends prolongés.</p>
          <a 
            href="https://www.amazon.fr/s?k=valise+rigide+ultra+legere" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-300 transition-colors"
          >
            Voir les modèles (Lien Affilié)
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'tech-voyage-indispensable',
    title: "Tech & Voyage : Les gadgets indispensables",
    excerpt: "Chargeurs rapides, batteries externes et adaptateurs : ne tombez jamais en panne de batterie à l'autre bout du monde.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1200",
    date: "10 Mars 2026",
    category: "Technologie",
    author: "L'Équipe TravelHub",
    content: (
      <div className="space-y-6">
        <p>La technologie nous facilite la vie en voyage, à condition d'avoir l'énergie nécessaire.</p>
        
        <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 my-8">
          <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Pack Énergie
          </h4>
          <p className="text-sm mb-4">Une batterie externe capable de charger votre téléphone 4 fois. Indispensable pour les longues journées d'exploration.</p>
          <a 
            href="https://www.amazon.fr/s?k=batterie+externe+voyage" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-300 transition-colors"
          >
            Vérifier le prix (Lien Affilié)
          </a>
        </div>
      </div>
    )
  }
];

interface BlogProps {
  onBack: () => void;
}

export const Blog: React.FC<BlogProps> = ({ onBack }) => {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <button 
          onClick={() => setSelectedPost(null)}
          className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-xs font-bold uppercase tracking-widest">Retour au blog</span>
        </button>

        <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-2xl">
          <img 
            src={selectedPost.image} 
            alt={selectedPost.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6 bg-amber-400 text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {selectedPost.category}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" /> {selectedPost.date}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-3 h-3" /> {selectedPost.author}
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-8 leading-none">
          {selectedPost.title}
        </h1>

        <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed">
          {selectedPost.content}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors">
              <Share2 className="w-4 h-4 text-white" />
            </button>
          </div>
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-xs font-bold uppercase tracking-widest text-amber-400 hover:underline"
          >
            Lire d'autres articles
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-4">
            Blog & <span className="text-zinc-500">Conseils</span>
          </h1>
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">L'expertise TravelHub pour vos aventures</p>
        </div>
        <button 
          onClick={onBack}
          className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-xs font-bold uppercase tracking-widest">Retour à l'accueil</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <motion.div 
            key={post.id}
            whileHover={{ y: -8 }}
            className="group cursor-pointer bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-amber-400/30 transition-all"
            onClick={() => setSelectedPost(post)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">{post.date}</p>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-amber-400 group-hover:translate-x-2 transition-transform">
                Lire la suite <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-xs font-bold uppercase tracking-widest">Retour à l'accueil</span>
        </button>
      </div>
    </div>
  );
};
