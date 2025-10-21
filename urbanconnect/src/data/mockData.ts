// Données de test pour le tableau AG-Grid
export interface InventoryItem {
  id: string;
  type: 'Produit' | 'Service' | 'User' | 'Poste';
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number | null;
  location: string;
  user: {
    name: string;
    avatar: string;
    rating: number;
  };
  images: string[];
  createdAt: Date;
  status: 'active' | 'inactive' | 'pending';
  featured: boolean;
  views: number;
  likes: number;
}

export const mockInventoryData: InventoryItem[] = [
  // Produits
  {
    id: '1',
    type: 'Produit',
    title: 'Vélo Électrique Urbain Premium',
    description: 'Vélo électrique parfait pour les trajets urbains, autonomie 50km, excellent état',
    category: 'Véhicules & Mobilité',
    subcategory: 'Auto & moto (Produits)',
    price: 1299,
    location: 'Paris 11ème',
    user: {
      name: 'Marie Dubois',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-15'),
    status: 'active',
    featured: true,
    views: 245,
    likes: 12
  },
  {
    id: '2',
    type: 'Produit',
    title: 'Kit Jardinage Bio Complet',
    description: 'Kit complet pour démarrer un potager urbain bio avec graines et outils',
    category: 'Maison & Jardin',
    subcategory: 'Jardinage & motoculture',
    price: 45,
    location: 'Paris 18ème',
    user: {
      name: 'Pierre Martin',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      rating: 4.6
    },
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-12'),
    status: 'active',
    featured: false,
    views: 89,
    likes: 5
  },
  {
    id: '3',
    type: 'Produit',
    title: 'MacBook Pro 16" M2',
    description: 'MacBook Pro 16 pouces avec puce M2, 16Go RAM, 512Go SSD, état impeccable',
    category: 'Électroménager & Multimédia',
    subcategory: 'Informatique & téléphonie',
    price: 2100,
    location: 'Paris 7ème',
    user: {
      name: 'Alex Chen',
      avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
      rating: 4.9
    },
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-18'),
    status: 'active',
    featured: true,
    views: 156,
    likes: 8
  },

  // Services
  {
    id: '4',
    type: 'Service',
    title: 'Réparation Express Électroménager',
    description: 'Service de réparation rapide à domicile pour tous vos appareils électroménagers',
    category: 'Électroménager & Multimédia',
    subcategory: 'Réparation & maintenance',
    price: 30,
    location: 'Paris et banlieue',
    user: {
      name: 'Technicien Pro',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      rating: 4.7
    },
    images: [
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-10'),
    status: 'active',
    featured: false,
    views: 178,
    likes: 15
  },
  {
    id: '5',
    type: 'Service',
    title: 'Cours de Guitare à Domicile',
    description: 'Professeur expérimenté donne cours de guitare tous niveaux, méthode personnalisée',
    category: 'Services à la personne',
    subcategory: 'Cours & formation',
    price: 35,
    location: 'Paris 14ème',
    user: {
      name: 'Julie Musique',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 4.9
    },
    images: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-16'),
    status: 'active',
    featured: true,
    views: 92,
    likes: 7
  },

  // Users
  {
    id: '6',
    type: 'User',
    title: 'Sophie Artisan - Créatrice Bijoux',
    description: 'Artisan créatrice spécialisée dans les bijoux faits main et la maroquinerie',
    category: 'Artisanat & Services professionnels',
    subcategory: 'Création artisanale',
    price: null,
    location: 'Paris 3ème',
    user: {
      name: 'Sophie Artisan',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-08'),
    status: 'active',
    featured: true,
    views: 234,
    likes: 18
  },

  // Postes
  {
    id: '7',
    type: 'Poste',
    title: 'Recherche Développeur Frontend React/Next.js',
    description: 'Startup tech recherche développeur frontend expérimenté pour projet innovant',
    category: 'Artisanat & Services professionnels',
    subcategory: 'Services techniques',
    price: 55000,
    location: 'Paris 9ème',
    user: {
      name: 'TechStart SAS',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      rating: 4.5
    },
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-19'),
    status: 'active',
    featured: false,
    views: 67,
    likes: 3
  },
  {
    id: '8',
    type: 'Poste',
    title: 'Chef de Cuisine - Restaurant Bio',
    description: 'Restaurant bio recherche chef de cuisine passionné par la cuisine durable',
    category: 'Services à la personne',
    subcategory: 'Aide à domicile',
    price: 2800,
    location: 'Paris 12ème',
    user: {
      name: 'Bio Resto',
      avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
      rating: 4.3
    },
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-17'),
    status: 'active',
    featured: false,
    views: 123,
    likes: 9
  },

  // Plus de produits
  {
    id: '9',
    type: 'Produit',
    title: 'Canapé 3 Places Scandinave',
    description: 'Canapé 3 places style scandinave, tissu gris chiné, très confortable',
    category: 'Maison & Jardin',
    subcategory: 'Ameublement',
    price: 450,
    location: 'Paris 15ème',
    user: {
      name: 'Emma Design',
      avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
      rating: 4.7
    },
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-14'),
    status: 'active',
    featured: false,
    views: 201,
    likes: 11
  },
  {
    id: '10',
    type: 'Service',
    title: 'Ménage et Repassage à Domicile',
    description: 'Service professionnel de ménage et repassage, équipe expérimentée et matériel fourni',
    category: 'Services à la personne',
    subcategory: 'Aide à domicile',
    price: 25,
    location: 'Région Parisienne',
    user: {
      name: 'Clean Service',
      avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
      rating: 4.6
    },
    images: [
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=200&fit=crop'
    ],
    createdAt: new Date('2024-10-11'),
    status: 'active',
    featured: true,
    views: 145,
    likes: 6
  }
];

// Fonction utilitaire pour filtrer les données
export const filterInventoryData = (
  data: InventoryItem[],
  filters: {
    type?: string[];
    category?: string[];
    priceRange?: [number, number];
    location?: string;
    featured?: boolean;
  }
) => {
  return data.filter(item => {
    // Filtre par type
    if (filters.type && filters.type.length > 0 && !filters.type.includes(item.type)) {
      return false;
    }

    // Filtre par catégorie
    if (filters.category && filters.category.length > 0 && !filters.category.includes(item.category)) {
      return false;
    }

    // Filtre par prix
    if (filters.priceRange && item.price !== null) {
      const [min, max] = filters.priceRange;
      if (item.price < min || item.price > max) {
        return false;
      }
    }

    // Filtre par localisation
    if (filters.location && !item.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Filtre featured
    if (filters.featured !== undefined && item.featured !== filters.featured) {
      return false;
    }

    return true;
  });
};