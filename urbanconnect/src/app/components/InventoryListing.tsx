"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { Search, Filter, MapPin, Star, Eye, Heart, Calendar, Package, Wrench, User, Briefcase, AlertTriangle } from 'lucide-react';
import FilterDrawer from './FilterDrawer';

// Mock data simulée avec les nouvelles catégories urbanConnect
const mockInventoryData = [
  {
    id: 1,
    type: 'Objet',
    title: 'MacBook Pro 16"',
    category: 'Micro & Multimédia',
    subcategory: 'High Tech & Fournitures de bureau',
    price: 2499,
    location: 'Paris',
    user: { name: 'Jean Dupont', avatar: 'https://i.pravatar.cc/150?img=1', rating: 4.8, type: 'individual' },
    views: 1250,
    likes: 89,
    status: 'active',
    featured: true,
    createdAt: '2024-01-15',
    description: 'MacBook Pro en excellent état',
    images: ['https://picsum.photos/200/200?random=1'],
    deliveryAvailable: true,
    urgent: false,
    adType: 'offer',
    donation: false,
    priority: 'high'
  },
  {
    id: 2,
    type: 'Service',
    title: 'Cours de guitare',
    category: 'Cours de guitare',
    subcategory: 'Cours - Formations',
    price: 35,
    location: 'Lyon',
    user: { name: 'Marie Martin', avatar: 'https://i.pravatar.cc/150?img=2', rating: 4.9, type: 'individual' },
    views: 856,
    likes: 45,
    status: 'active',
    featured: false,
    createdAt: '2024-02-20',
    description: 'Cours particuliers de guitare',
    images: ['https://picsum.photos/200/200?random=2'],
    deliveryAvailable: false,
    urgent: true,
    adType: 'offer',
    donation: false,
    priority: 'critical'
  },
  {
    id: 3,
    type: 'Service',
    title: 'Développement site web',
    category: 'Création site internet',
    subcategory: 'Informatique et web',
    price: 2500,
    location: 'Marseille',
    user: { name: 'Tech Corp', avatar: 'https://i.pravatar.cc/150?img=3', rating: 4.7, type: 'professional' },
    views: 2340,
    likes: 156,
    status: 'active',
    featured: true,
    createdAt: '2024-03-10',
    description: 'Développement de site web professionnel',
    images: [],
    deliveryAvailable: false,
    urgent: false,
    adType: 'offer',
    donation: false,
    priority: 'medium'
  },
  {
    id: 4,
    type: 'Objet',
    title: 'Vélo électrique',
    category: 'Vélo & Accessoires',
    subcategory: 'Loisirs',
    price: 1200,
    location: 'Toulouse',
    user: { name: 'Pierre Leroy', avatar: 'https://i.pravatar.cc/150?img=4', rating: 4.5, type: 'individual' },
    views: 678,
    likes: 32,
    status: 'inactive',
    featured: false,
    createdAt: '2024-01-25',
    description: 'Vélo électrique récent',
    images: ['https://picsum.photos/200/200?random=3'],
    deliveryAvailable: true,
    urgent: false,
    adType: 'offer',
    donation: false,
    priority: 'low'
  },
  {
    id: 5,
    type: 'Service',
    title: 'Service de plomberie',
    category: 'Plomberie - Installation sanitaire',
    subcategory: 'Bricolage - Travaux',
    price: 45,
    location: 'Nice',
    user: { name: 'Artisan Pro', avatar: 'https://i.pravatar.cc/150?img=5', rating: 4.9, type: 'professional' },
    views: 1423,
    likes: 78,
    status: 'active',
    featured: true,
    createdAt: '2024-02-05',
    description: 'Services de plomberie professionnels',
    images: ['https://picsum.photos/200/200?random=4'],
    deliveryAvailable: false,
    urgent: false,
    adType: 'offer',
    donation: false,
    priority: 'high'
  },
  {
    id: 6,
    type: 'Objet',
    title: 'Don de livres',
    category: 'Livres',
    subcategory: 'Loisirs',
    price: 0,
    location: 'Bordeaux',
    user: { name: 'Sophie Bernard', avatar: 'https://i.pravatar.cc/150?img=6', rating: 4.6, type: 'individual' },
    views: 234,
    likes: 12,
    status: 'active',
    featured: false,
    createdAt: '2024-03-01',
    description: 'Don de livres de science-fiction',
    images: ['https://picsum.photos/200/200?random=5'],
    deliveryAvailable: true,
    urgent: false,
    adType: 'offer',
    donation: true,
    priority: 'medium'
  },
  {
    id: 7,
    type: 'Service',
    title: 'Jardinier paysagiste',
    category: 'Paysagiste - Aménagement du jardin',
    subcategory: 'Jardinage - Piscine',
    price: 30,
    location: 'Nantes',
    user: { name: 'Vert Jardin', avatar: 'https://i.pravatar.cc/150?img=7', rating: 4.8, type: 'professional' },
    views: 890,
    likes: 67,
    status: 'active',
    featured: true,
    createdAt: '2024-02-15',
    description: 'Aménagement et entretien de jardins',
    images: ['https://picsum.photos/200/200?random=6'],
    deliveryAvailable: false,
    urgent: false,
    adType: 'offer',
    donation: false,
    priority: 'medium'
  },
  {
    id: 8,
    type: 'Service',
    title: 'Baby sitting',
    category: 'Baby sitting',
    subcategory: 'Enfants',
    price: 12,
    location: 'Lille',
    user: { name: 'Emma Durand', avatar: 'https://i.pravatar.cc/150?img=8', rating: 4.9, type: 'individual' },
    views: 456,
    likes: 34,
    status: 'active',
    featured: false,
    createdAt: '2024-03-05',
    description: 'Garde d\'enfants fiable et expérimentée',
    images: ['https://picsum.photos/200/200?random=7'],
    deliveryAvailable: false,
    urgent: true,
    adType: 'offer',
    donation: false,
    priority: 'high'
  }
];

// Mock data pour les posts
const mockPostsData = [
  {
    id: 1,
    type: 'Poste',
    title: 'Développeur React Senior',
    category: 'Informatique et web',
    subcategory: 'Création site internet',
    salary: 55000,
    location: 'Paris',
    company: { name: 'Tech Corp', avatar: 'https://i.pravatar.cc/150?img=10', rating: 4.7 },
    views: 2340,
    applications: 23,
    status: 'active',
    featured: true,
    createdAt: '2024-03-10',
    description: 'Recherche développeur React expérimenté',
    contract: 'CDI',
    experience: '5+ ans',
    priority: 'high'
  },
  {
    id: 2,
    type: 'Poste',
    title: 'Designer UI/UX',
    category: 'Informatique et web',
    subcategory: 'Graphisme - Création flyer - plaquette',
    salary: 42000,
    location: 'Lyon',
    company: { name: 'Creative Studio', avatar: 'https://i.pravatar.cc/150?img=11', rating: 4.5 },
    views: 1850,
    applications: 31,
    status: 'active',
    featured: false,
    createdAt: '2024-03-08',
    description: 'Designer UI/UX pour applications mobiles',
    contract: 'CDI',
    experience: '3+ ans',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'Poste',
    title: 'Chef de projet digital',
    category: 'Informatique et web',
    subcategory: 'Webmarketing',
    salary: 48000,
    location: 'Marseille',
    company: { name: 'Digital Agency', avatar: 'https://i.pravatar.cc/150?img=12', rating: 4.8 },
    views: 1230,
    applications: 18,
    status: 'active',
    featured: true,
    createdAt: '2024-03-05',
    description: 'Management d\'équipes digitales',
    contract: 'CDI',
    experience: '4+ ans',
    priority: 'critical'
  },
  {
    id: 4,
    type: 'Poste',
    title: 'Développeur Full Stack',
    category: 'Informatique et web',
    subcategory: 'Création application mobile',
    salary: 52000,
    location: 'Toulouse',
    company: { name: 'StartupTech', avatar: 'https://i.pravatar.cc/150?img=13', rating: 4.6 },
    views: 1980,
    applications: 28,
    status: 'active',
    featured: false,
    createdAt: '2024-03-12',
    description: 'Développement applications web et mobile',
    contract: 'CDI',
    experience: '4+ ans',
    priority: 'high'
  },
  {
    id: 5,
    type: 'Poste',
    title: 'Community Manager',
    category: 'Informatique et web',
    subcategory: 'Webmarketing',
    salary: 32000,
    location: 'Nice',
    company: { name: 'Social Media Pro', avatar: 'https://i.pravatar.cc/150?img=14', rating: 4.4 },
    views: 890,
    applications: 15,
    status: 'active',
    featured: false,
    createdAt: '2024-03-15',
    description: 'Gestion des réseaux sociaux',
    contract: 'CDD',
    experience: '2+ ans',
    priority: 'low'
  },
  {
    id: 1,
    type: 'Poste',
    title: 'Développeur React Senior',
    category: 'Informatique et web',
    subcategory: 'Création site internet',
    salary: 55000,
    location: 'Paris',
    company: { name: 'Tech Corp', avatar: 'https://i.pravatar.cc/150?img=10', rating: 4.7 },
    views: 2340,
    applications: 23,
    status: 'active',
    featured: true,
    createdAt: '2024-03-10',
    description: 'Recherche développeur React expérimenté',
    contract: 'CDI',
    experience: '5+ ans',
    priority: 'high'
  },
  {
    id: 2,
    type: 'Poste',
    title: 'Designer UI/UX',
    category: 'Informatique et web',
    subcategory: 'Graphisme - Création flyer - plaquette',
    salary: 42000,
    location: 'Lyon',
    company: { name: 'Creative Studio', avatar: 'https://i.pravatar.cc/150?img=11', rating: 4.5 },
    views: 1850,
    applications: 31,
    status: 'active',
    featured: false,
    createdAt: '2024-03-08',
    description: 'Designer UI/UX pour applications mobiles',
    contract: 'CDI',
    experience: '3+ ans',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'Poste',
    title: 'Chef de projet digital',
    category: 'Informatique et web',
    subcategory: 'Webmarketing',
    salary: 48000,
    location: 'Marseille',
    company: { name: 'Digital Agency', avatar: 'https://i.pravatar.cc/150?img=12', rating: 4.8 },
    views: 1230,
    applications: 18,
    status: 'active',
    featured: true,
    createdAt: '2024-03-05',
    description: 'Management d\'équipes digitales',
    contract: 'CDI',
    experience: '4+ ans',
    priority: 'critical'
  },
  {
    id: 4,
    type: 'Poste',
    title: 'Développeur Full Stack',
    category: 'Informatique et web',
    subcategory: 'Création application mobile',
    salary: 52000,
    location: 'Toulouse',
    company: { name: 'StartupTech', avatar: 'https://i.pravatar.cc/150?img=13', rating: 4.6 },
    views: 1980,
    applications: 28,
    status: 'active',
    featured: false,
    createdAt: '2024-03-12',
    description: 'Développement applications web et mobile',
    contract: 'CDI',
    experience: '4+ ans',
    priority: 'high'
  },
  {
    id: 5,
    type: 'Poste',
    title: 'Community Manager',
    category: 'Informatique et web',
    subcategory: 'Webmarketing',
    salary: 32000,
    location: 'Nice',
    company: { name: 'Social Media Pro', avatar: 'https://i.pravatar.cc/150?img=14', rating: 4.4 },
    views: 890,
    applications: 15,
    status: 'active',
    featured: false,
    createdAt: '2024-03-15',
    description: 'Gestion des réseaux sociaux',
    contract: 'CDD',
    experience: '2+ ans',
    priority: 'low'
  },
    {
    id: 1,
    type: 'Poste',
    title: 'Développeur React Senior',
    category: 'Informatique et web',
    subcategory: 'Création site internet',
    salary: 55000,
    location: 'Paris',
    company: { name: 'Tech Corp', avatar: 'https://i.pravatar.cc/150?img=10', rating: 4.7 },
    views: 2340,
    applications: 23,
    status: 'active',
    featured: true,
    createdAt: '2024-03-10',
    description: 'Recherche développeur React expérimenté',
    contract: 'CDI',
    experience: '5+ ans',
    priority: 'high'
  },
  {
    id: 2,
    type: 'Poste',
    title: 'Designer UI/UX',
    category: 'Informatique et web',
    subcategory: 'Graphisme - Création flyer - plaquette',
    salary: 42000,
    location: 'Lyon',
    company: { name: 'Creative Studio', avatar: 'https://i.pravatar.cc/150?img=11', rating: 4.5 },
    views: 1850,
    applications: 31,
    status: 'active',
    featured: false,
    createdAt: '2024-03-08',
    description: 'Designer UI/UX pour applications mobiles',
    contract: 'CDI',
    experience: '3+ ans',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'Poste',
    title: 'Chef de projet digital',
    category: 'Informatique et web',
    subcategory: 'Webmarketing',
    salary: 48000,
    location: 'Marseille',
    company: { name: 'Digital Agency', avatar: 'https://i.pravatar.cc/150?img=12', rating: 4.8 },
    views: 1230,
    applications: 18,
    status: 'active',
    featured: true,
    createdAt: '2024-03-05',
    description: 'Management d\'équipes digitales',
    contract: 'CDI',
    experience: '4+ ans',
    priority: 'critical'
  },
  {
    id: 4,
    type: 'Poste',
    title: 'Développeur Full Stack',
    category: 'Informatique et web',
    subcategory: 'Création application mobile',
    salary: 52000,
    location: 'Toulouse',
    company: { name: 'StartupTech', avatar: 'https://i.pravatar.cc/150?img=13', rating: 4.6 },
    views: 1980,
    applications: 28,
    status: 'active',
    featured: false,
    createdAt: '2024-03-12',
    description: 'Développement applications web et mobile',
    contract: 'CDI',
    experience: '4+ ans',
    priority: 'high'
  },
  {
    id: 5,
    type: 'Poste',
    title: 'Community Manager',
    category: 'Informatique et web',
    subcategory: 'Webmarketing',
    salary: 32000,
    location: 'Nice',
    company: { name: 'Social Media Pro', avatar: 'https://i.pravatar.cc/150?img=14', rating: 4.4 },
    views: 890,
    applications: 15,
    status: 'active',
    featured: false,
    createdAt: '2024-03-15',
    description: 'Gestion des réseaux sociaux',
    contract: 'CDD',
    experience: '2+ ans',
    priority: 'low'
  }
];

// Structure hiérarchique AlloVoisin
const urbanConnectCategories = {
  'Services': {
    'Bricolage - Travaux': [
      'Bricolage et multi services',
      'Montage meubles en kit',
      'Pose de parquet - Revêtement de sol',
      'Carrelage',
      'Chaudronnerie - Soudure',
      'Charpente',
      'Chauffage - Climatisation',
      'Couverture - Toiture',
      'Installation électrique',
      'Maçonnerie',
      'Menuiserie - Huisserie - Agencement',
      'Peinture - Tapisserie',
      'Plâtrerie - Murs - Plafonds',
      'Plomberie - Installation sanitaire',
      'Ramonage - Fumiste',
      'Serrurerie',
      'Taille de pierre - Marbrerie',
      'Artisan d\'art',
      'Architecte - Maître d\'oeuvre',
      'Artisan tout corps d\'\u00e9tat - Rénovation',
      'Architecte d\'intérieur - Décorateur d\'intérieur',
      'Terrassement - Assainissement'
    ],
    'Jardinage - Piscine': [
      'Jardinier',
      'Paysagiste - Aménagement du jardin',
      'Tonte de pelouse - Débroussaillage',
      'Elagage et coupe d\'arbres',
      'Clôture Grillage',
      'Entretien piscine',
      'Taille de haies et d\'arbustes'
    ],
    'Déménagement - Manutention': [
      'Déménageurs et aide au déménagement',
      'Manutention'
    ],
    'Dépannage - Réparation de matériel': [
      'Dépannage électroménager',
      'Dépannage smartphone - hifi - video - photo',
      'Réparation outillage',
      'Dépannage informatique',
      'Réparation objets'
    ],
    'Entretien - Réparation véhicules': [
      'Covoiturage (partage de frais)',
      'Livraison - Transport de colis',
      'Transport de véhicules - Remorquage',
      'Promenades et sorties véhiculées',
      'Évacuation déchets - Gravats'
    ],
    'Services à la personne': [
      'Ménage',
      'Lingerie - Repassage',
      'Couturière',
      'Aide soignante',
      'Aide à domicile',
      'Livraison de courses',
      'Home sitting - Accueil - Gardiennage'
    ],
    'Enfants': [
      'Baby sitting',
      'Nounou',
      'Fille au pair',
      'Garde périscolaire',
      'Aide aux devoirs'
    ],
    'Animaux': [
      'Pet sitting',
      'Promenade d\'animaux',
      'Garde d\'animaux',
      'Dressage',
      'Toilettage'
    ],
    'Informatique et web': [
      'Assistance informatique',
      'Création site internet',
      'Création application mobile',
      'Référencement naturel',
      'Webmarketing',
      'Graphisme - Création flyer - plaquette',
      'Webmaster'
    ],
    'Photographie - Vidéo': [
      'Photographe',
      'Modèle photo',
      'Retouche photo',
      'Vidéaste',
      'Montage photo video'
    ],
    'Animation - Evénements': [
      'DJ - Disc Jockey',
      'Père Noël',
      'Clown',
      'Magicien - Prestidigitateur',
      'Animateur',
      'Chanteur - chanteuse',
      'Musicien - Groupe de musique',
      'Comédien',
      'Danseur',
      'Humoriste',
      'Imitateur',
      'Jongleur',
      'Hôte - Hôtesse',
      'Vendeur - Commercial'
    ],
    'Cours - Formations': [
      'Cours de maths',
      'Cours de physique',
      'Cours d\'anglais',
      'Cours de français',
      'Cours d\'espagnol',
      'Cours d\'allemand',
      'Cours d\'arabe',
      'Cours de mandarin - chinois',
      'Autres cours de langue',
      'Cours d\'informatique',
      'Soutien scolaire',
      'Cours de guitare',
      'Cours de piano',
      'Autres Cours de musique',
      'Cours de cuisine',
      'Cours de couture',
      'Cours de dessin',
      'Autres cours loisirs',
      'Cours de danse'
    ]
  },
  'Objet': {
    'Outillage & Travaux': [
      'Outillage & Entretien',
      'BTP & Chantier',
      'Elévation & Echafaudage',
      'Chauffage & Climatisation',
      'Mesure & Détection',
      'Manutention',
      'Equipement de protection de la personne'
    ],
    'Matériel de Jardin': [
      'Outillage',
      'Equipement & Piscine',
      'Barbecue & Cuisine d\'extérieur',
      'Décoration d\'extérieur',
      'Eco-pâturage'
    ],
    'Maison & Confort': [
      'Electroménager',
      'Vaisselle, Ustensiles de cuisine & Entretien de la maison',
      'Ameublement, Accessoires & Décoration',
      'Linge de maison',
      'Matériel médical'
    ],
    'Evénement, Réception & Fête': [
      'Salles & Lieux de réception',
      'Equipement',
      'Son & Eclairage',
      'Jeux & Matériel d\'animation',
      'Déguisement'
    ],
    'High Tech & Fournitures de bureau': [
      'Consoles de Jeux & Jeux vidéo',
      'Photo, Vidéo, Image & Son',
      'Micro & Multimédia',
      'GPS & Téléphonie',
      'Fournitures de bureau'
    ],
    'Matériel de Sport': [
      'Sports collectifs',
      'Running, Trail & Athlétisme',
      'Randonnée, Marche & Escalade',
      'Sports de raquette',
      'Sports de combats, Musculation, Fitness & Danse',
      'Golf',
      'Equitation',
      'Ski, snowboard & Nordique',
      'Natation, Plongée & Sports d\'eau'
    ],
    'Loisirs': [
      'Chasse et Pêche',
      'Jeux de boules, Arc & Fléchettes',
      'Vélo & Accessoires',
      'Roller, Skate et trottinette',
      'Matériel de camping et de plage',
      'Jeux & Jouets',
      'Livres',
      'DVD',
      'Musique, Concerts & Spectacles',
      'Instruments de musique & Accessoires'
    ]
  }
};

// Fonction pour extraire toutes les catégories de niveau 2 et 3
const getAllCategories = () => {
  const categories = [];
  Object.keys(urbanConnectCategories).forEach(mainType => {
    Object.keys(urbanConnectCategories[mainType]).forEach(subCategory => {
      categories.push({ id: categories.length + 1, name: subCategory, type: mainType });
      urbanConnectCategories[mainType][subCategory].forEach(item => {
        categories.push({ id: categories.length + 1, name: item, type: mainType, parent: subCategory });
      });
    });
  });
  return categories;
};

const categories = getAllCategories();

// Custom cell renderers
const ImageCellRenderer = (params) => {
  const imageUrl = params.value && params.value.length > 0 ? params.value[0] : null;

  if (!imageUrl) {
    return (
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
        <Package className="w-6 h-6 text-gray-400" />
      </div>
    );
  }

  return (
    <div className="flex items-center h-full">
      <img
        src={imageUrl}
        alt="Product"
        className="w-12 h-12 object-cover rounded-lg border border-gray-200"
      />
    </div>
  );
};

const TypeCellRenderer = (params) => {
  const type = params.value;
  const icons = {
    'Produit': <Package className="w-4 h-4" />,
    'Service': <Wrench className="w-4 h-4" />,
    'User': <User className="w-4 h-4" />,
    'Poste': <Briefcase className="w-4 h-4" />
  };

  const colors = {
    'Produit': 'bg-blue-100 text-blue-700',
    'Service': 'bg-green-100 text-green-700',
    'User': 'bg-purple-100 text-purple-700',
    'Poste': 'bg-orange-100 text-orange-700'
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${colors[type]}`}>
      {icons[type]}
      {type}
    </span>
  );
};

const UserCellRenderer = (params) => {
  const user = params.value;
  return (
    <div className="flex items-center gap-2">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <div className="font-medium text-sm">{user.name}</div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          {user.rating}
        </div>
      </div>
    </div>
  );
};

const PriceCellRenderer = (params) => {
  const price = params.value;
  const type = params.data.type;

  if (price === null) {
    return <span className="text-gray-400">-</span>;
  }

  if (type === 'Poste') {
    return <span className="font-semibold text-green-600">{price.toLocaleString()}€/an</span>;
  } else if (type === 'Service') {
    return <span className="font-semibold text-blue-600">{price}€/h</span>;
  } else {
    return <span className="font-semibold text-indigo-600">{price.toLocaleString()}€</span>;
  }
};

const StatsCellRenderer = (params) => {
  const { views, likes } = params.data;
  return (
    <div className="flex items-center gap-3 text-xs text-gray-500">
      <div className="flex items-center gap-1">
        <Eye className="w-3 h-3" />
        {views}
      </div>
      <div className="flex items-center gap-1">
        <Heart className="w-3 h-3" />
        {likes}
      </div>
    </div>
  );
};

const StatusCellRenderer = (params) => {
  const status = params.value;
  const featured = params.data.featured;

  const statusColors = {
    'active': 'bg-green-100 text-green-700',
    'inactive': 'bg-red-100 text-red-700',
    'pending': 'bg-yellow-100 text-yellow-700'
  };

  return (
    <div className="flex flex-col gap-1">
      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
        {status}
      </span>
      {featured && (
        <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
          Mis en avant
        </span>
      )}
    </div>
  );
};

const PriorityCellRenderer = (params) => {
  const priority = params.value;
  
  const priorityConfig = {
    'critical': {
      color: 'bg-red-100 text-red-700',
      icon: <AlertTriangle className="w-3 h-3" />,
      label: '####',
      text: 'Critique'
    },
    'high': {
      color: 'bg-orange-100 text-orange-700',
      icon: <AlertTriangle className="w-3 h-3" />,
      label: '###',
      text: 'Élevée'
    },
    'medium': {
      color: 'bg-yellow-100 text-yellow-700',
      icon: <AlertTriangle className="w-3 h-3" />,
      label: '##',
      text: 'Moyenne'
    },
    'low': {
      color: 'bg-green-100 text-green-700',
      icon: <AlertTriangle className="w-3 h-3" />,
      label: '#',
      text: 'Faible'
    }
  };

  const config = priorityConfig[priority] || priorityConfig['low'];

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
      {config.icon}
      {config.label}
    </span>
  );
};

// Composants pour les posts
const CompanyCellRenderer = (params) => {
  const company = params.value;
  return (
    <div className="flex items-center gap-2">
      <img
        src={company.avatar}
        alt={company.name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <div className="font-medium text-sm">{company.name}</div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          {company.rating}
        </div>
      </div>
    </div>
  );
};

const SalaryCellRenderer = (params) => {
  const salary = params.value;
  return <span className="font-semibold text-green-600">{salary?.toLocaleString()}€/an</span>;
};

const ApplicationsCellRenderer = (params) => {
  const { views, applications } = params.data;
  return (
    <div className="flex items-center gap-3 text-xs text-gray-500">
      <div className="flex items-center gap-1">
        <Eye className="w-3 h-3" />
        {views}
      </div>
      <div className="flex items-center gap-1">
        <User className="w-3 h-3" />
        {applications}
      </div>
    </div>
  );
};

// Composant PostsPanel
const PostsPanel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  const totalPages = Math.ceil(mockPostsData.length / itemsPerPage);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return mockPostsData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-900">Offres d'emploi</h2>
        <p className="text-sm text-gray-600">{mockPostsData.length} postes disponibles</p>
      </div>

      {/* Posts Table */}
      <div className="overflow-hidden">
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type (##)
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie (###)
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sous-catégorie (####)
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salaire
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entreprise
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stats
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 whitespace-nowrap">
                    <TypeCellRenderer value={post.type} />
                  </td>
                  <td className="px-3 py-2">
                    <div className="font-semibold text-sm text-gray-900">{post.title}</div>
                    <div className="text-xs text-gray-500">{post.contract} - {post.experience}</div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">
                    {post.category}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                    {post.subcategory}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <SalaryCellRenderer value={post.salary} />
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <CompanyCellRenderer value={post.company} />
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <ApplicationsCellRenderer data={post} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Simple Pagination */}
        {totalPages > 1 && (
          <div className="bg-white px-4 py-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              >
                Précédent
              </button>
              <span className="text-sm text-gray-700">
                Page {currentPage} sur {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              >
                Suivant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function InventoryListing() {
  const [searchText, setSearchText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  
  const [filters, setFilters] = useState({
    type: [],
    category: [],
    subcategory: [],
    price_min: '',
    price_max: '',
    location: '',
    featured: undefined,
    nationwide_delivery: false,
    donations_only: false,
    available_only: false,
    sort: 'relevance',
    ad_type: [],
    seller_type: [],
    urgent_only: false
  });

  // Filtrage des données
  const filteredData = useMemo(() => {
    let data = [...mockInventoryData];

    // Filtre par texte de recherche
    if (searchText) {
      data = data.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase()) ||
        item.user.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filtre par type
    if (filters.type.length > 0) {
      data = data.filter(item => filters.type.includes(item.type));
    }

    // Filtre par catégorie
    if (filters.category.length > 0) {
      data = data.filter(item => filters.category.includes(item.category));
    }

    // Filtre par sous-catégorie
    if (filters.subcategory.length > 0) {
      data = data.filter(item => filters.subcategory.includes(item.subcategory));
    }

    // Filtre par localisation
    if (filters.location) {
      data = data.filter(item =>
        item.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filtre par prix minimum
    if (filters.price_min) {
      const minPrice = parseFloat(filters.price_min);
      data = data.filter(item => item.price >= minPrice);
    }

    // Filtre par prix maximum
    if (filters.price_max) {
      const maxPrice = parseFloat(filters.price_max);
      data = data.filter(item => item.price <= maxPrice);
    }

    // Filtre featured
    if (filters.featured === true) {
      data = data.filter(item => item.featured);
    }

    // Filtre livraison nationale
    if (filters.nationwide_delivery) {
      data = data.filter(item => item.deliveryAvailable);
    }

    // Filtre dons uniquement
    if (filters.donations_only) {
      data = data.filter(item => item.donation);
    }

    // Filtre annonces disponibles uniquement
    if (filters.available_only) {
      data = data.filter(item => item.status === 'active');
    }

    // Filtre type d'annonce
    if (filters.ad_type.length > 0) {
      data = data.filter(item => filters.ad_type.includes(item.adType));
    }

    // Filtre type de vendeur
    if (filters.seller_type.length > 0) {
      data = data.filter(item => filters.seller_type.includes(item.user.type));
    }

    // Filtre annonces urgentes
    if (filters.urgent_only) {
      data = data.filter(item => item.urgent);
    }

    // Tri des données
    switch (filters.sort) {
      case 'newest':
        data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'price_asc':
        data.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        data.sort((a, b) => b.price - a.price);
        break;
      case 'relevance':
      default:
        // Tri par pertinence (featured first, then by views)
        data.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.views - a.views;
        });
        break;
    }

    return data;
  }, [searchText, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      category: [],
      subcategory: [],
      price_min: '',
      price_max: '',
      location: '',
      featured: undefined,
      nationwide_delivery: false,
      donations_only: false,
      available_only: false,
      sort: 'relevance',
      ad_type: [],
      seller_type: [],
      urgent_only: false
    });
    setSearchText('');
    setCurrentPage(1);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.type.length > 0) count++;
    if (filters.category.length > 0) count++;
    if (filters.subcategory.length > 0) count++;
    if (filters.location) count++;
    if (filters.price_min) count++;
    if (filters.price_max) count++;
    if (filters.featured !== undefined) count++;
    if (filters.nationwide_delivery) count++;
    if (filters.donations_only) count++;
    if (filters.available_only) count++;
    if (filters.ad_type.length > 0) count++;
    if (filters.seller_type.length > 0) count++;
    if (filters.urgent_only) count++;
    if (searchText) count++;
    return count;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventaire UrbanConnect</h1>
          <p className="text-gray-600">Gérez vos produits, services, utilisateurs et offres d'emploi</p>
        </div>

        {/* Main Layout: Posts (1/3) + Inventory (2/3) */}
        <div className="flex gap-6">
          {/* Left Panel - Posts (1/3 de l'ecran) */}
          <div className="w-1/3">
            <PostsPanel />
          </div>

          {/* Right Panel - Inventory (2/3 de l'ecran) */}
          <div className="w-2/3">
            <div className="space-y-6">

        {/* Search and Filters Bar */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par titre, description ou utilisateur..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border font-medium transition-colors ${
                showFilters
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filtres rapides
              {getActiveFiltersCount() > 0 && (
                <span className={`${showFilters ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'} rounded-full px-2 py-1 text-xs font-bold`}>
                  {getActiveFiltersCount()}
                </span>
              )}
            </button>
            <button
              onClick={() => setShowFilterDrawer(true)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              <Filter className="w-4 h-4" />
              Tous les filtres
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <div className="space-y-2">
                    {['Locations', 'Ventes', 'Services', 'Demandes'].map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.type.includes(type)}
                          onChange={(e) => {
                            const newTypes = e.target.checked
                              ? [...filters.type, type]
                              : filters.type.filter(t => t !== type);
                            handleFilterChange('type', newTypes);
                          }}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>


                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie (###)</label>
                  <div className="max-h-32 overflow-y-auto space-y-2">
                    {Object.keys(urbanConnectCategories).map(mainType => (
                      Object.keys(urbanConnectCategories[mainType]).map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.category.includes(category)}
                            onChange={(e) => {
                              const newCategories = e.target.checked
                                ? [...filters.category, category]
                                : filters.category.filter(c => c !== category);
                              handleFilterChange('category', newCategories);
                            }}
                            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-sm text-gray-600">{category}</span>
                        </label>
                      ))
                    ))}
                  </div>
                </div>

                {/* Subcategory Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sous-catégorie (####)</label>
                  <div className="max-h-32 overflow-y-auto space-y-2">
                    {Object.keys(urbanConnectCategories).map(mainType => (
                      Object.keys(urbanConnectCategories[mainType]).map(category => (
                        urbanConnectCategories[mainType][category].map(subcategory => (
                          <label key={subcategory} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={filters.subcategory.includes(subcategory)}
                              onChange={(e) => {
                                const newSubcategories = e.target.checked
                                  ? [...filters.subcategory, subcategory]
                                  : filters.subcategory.filter(c => c !== subcategory);
                                handleFilterChange('subcategory', newSubcategories);
                              }}
                              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-xs text-gray-500">{subcategory}</span>
                          </label>
                        ))
                      ))
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                  <input
                    type="text"
                    placeholder="Paris, Lyon..."
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                {/* Featured Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.featured === true}
                      onChange={(e) => handleFilterChange('featured', e.target.checked ? true : undefined)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Mis en avant uniquement</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Effacer tous les filtres
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {filteredData.length.toLocaleString()} résultat{filteredData.length > 1 ? 's' : ''} trouvé{filteredData.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Custom Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type (##)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Titre
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie (###)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sous-catégorie (####)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priorité
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prix
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Localisation
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Utilisateur
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stats
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Créé le
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <ImageCellRenderer value={item.images} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <TypeCellRenderer value={item.type} />
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                      {item.category}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.subcategory}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <PriorityCellRenderer value={item.priority} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <PriceCellRenderer value={item.price} data={item} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        {item.location}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <UserCellRenderer value={item.user} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <StatsCellRenderer data={item} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <StatusCellRenderer value={item.status} data={item} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        {new Date(item.createdAt).toLocaleDateString('fr-FR')}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Précédent
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Suivant
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Affichage de <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> à{' '}
                    <span className="font-medium">
                      {Math.min(currentPage * itemsPerPage, filteredData.length)}
                    </span>{' '}
                    sur <span className="font-medium">{filteredData.length}</span> résultats
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Précédent
                    </button>
                    {[...Array(totalPages)].map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === idx + 1
                            ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Suivant
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>

              {/* Filter Drawer */}
              <FilterDrawer
                isOpen={showFilterDrawer}
                onClose={() => setShowFilterDrawer(false)}
                filters={filters}
                onFilterChange={setFilters}
                onClearFilters={clearFilters}
                totalResults={filteredData.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
