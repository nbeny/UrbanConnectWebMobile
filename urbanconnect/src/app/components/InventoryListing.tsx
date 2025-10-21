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

// Générer plus de données mock d'inventaire pour tester la pagination
for (let i = 9; i <= 120; i++) {
  const types = ['Objet', 'Service'];
  const categories = {
    'Objet': [
      { cat: 'Outillage & Travaux', sub: 'Outillage & Entretien' },
      { cat: 'Matériel de Jardin', sub: 'Outillage' },
      { cat: 'High Tech & Fournitures de bureau', sub: 'Micro & Multimédia' },
      { cat: 'Loisirs', sub: 'Vélo & Accessoires' },
      { cat: 'Loisirs', sub: 'Livres' }
    ],
    'Service': [
      { cat: 'Cours de guitare', sub: 'Cours - Formations' },
      { cat: 'Création site internet', sub: 'Informatique et web' },
      { cat: 'Plomberie - Installation sanitaire', sub: 'Bricolage - Travaux' },
      { cat: 'Paysagiste - Aménagement du jardin', sub: 'Jardinage - Piscine' },
      { cat: 'Baby sitting', sub: 'Enfants' }
    ]
  };
  const locations = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Bordeaux', 'Lille', 'Strasbourg', 'Rennes'];
  const names = ['Jean', 'Marie', 'Pierre', 'Sophie', 'Thomas', 'Emma', 'Lucas', 'Julie', 'Nicolas', 'Camille'];
  const surnames = ['Dupont', 'Martin', 'Bernard', 'Dubois', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Michel', 'Garcia'];
  
  const typeIndex = (i - 1) % types.length;
  const type = types[typeIndex];
  const catArray = categories[type];
  const catIndex = (i - 1) % catArray.length;
  const locIndex = (i - 1) % locations.length;
  const nameIndex = (i - 1) % names.length;
  const surnameIndex = (i - 1) % surnames.length;
  
  const imageCount = Math.floor(Math.random() * 4) + 1; // 1 à 4 images
  const images = Array.from({ length: imageCount }, (_, idx) => `https://picsum.photos/200/200?random=${i * 10 + idx}`);
  
  mockInventoryData.push({
    id: i,
    type: type,
    title: type === 'Objet' ? `${catArray[catIndex].cat} #${i}` : `Service ${catArray[catIndex].cat} #${i}`,
    category: catArray[catIndex].cat,
    subcategory: catArray[catIndex].sub,
    price: type === 'Objet' ? Math.floor(Math.random() * 2000) + 50 : Math.floor(Math.random() * 80) + 15,
    location: locations[locIndex],
    user: { 
      name: `${names[nameIndex]} ${surnames[surnameIndex]}`, 
      avatar: `https://i.pravatar.cc/150?img=${i % 70}`, 
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), 
      type: i % 3 === 0 ? 'professional' : 'individual' 
    },
    views: Math.floor(Math.random() * 2000) + 100,
    likes: Math.floor(Math.random() * 150) + 5,
    status: i % 10 === 0 ? 'inactive' : 'active',
    featured: i % 7 === 0,
    createdAt: `2024-0${Math.floor(Math.random() * 3) + 1}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    description: `${type} ${i} - Description détaillée`,
    images: images,
    deliveryAvailable: i % 3 === 0,
    urgent: i % 8 === 0,
    adType: 'offer',
    donation: i % 15 === 0,
    priority: i % 4 === 0 ? 'high' : i % 7 === 0 ? 'critical' : i % 10 === 0 ? 'low' : 'medium'
  });
}

// Mock data pour les demandes de services
const mockRequestsData = [
  {
    id: 1,
    type: 'Demande',
    title: 'Recherche serrurier',
    category: 'Bricolage - Travaux',
    subcategory: 'Serrurerie',
    budget: 150,
    location: 'Paris',
    user: { name: 'Marc Durand', avatar: 'https://i.pravatar.cc/150?img=20', rating: 4.2 },
    views: 45,
    responses: 8,
    status: 'active',
    featured: false,
    createdAt: '2024-03-18',
    description: 'Urgence - Serrure bloquée',
    urgency: 'urgent',
    priority: 'critical'
  },
  {
    id: 2,
    type: 'Demande',
    title: 'Recherche plombier',
    category: 'Bricolage - Travaux',
    subcategory: 'Plomberie - Installation sanitaire',
    budget: 200,
    location: 'Lyon',
    user: { name: 'Claire Martin', avatar: 'https://i.pravatar.cc/150?img=21', rating: 4.6 },
    views: 67,
    responses: 12,
    status: 'active',
    featured: true,
    createdAt: '2024-03-17',
    description: 'Fuite d\'eau à réparer rapidement',
    urgency: 'urgent',
    priority: 'high'
  }
];

// Générer plus de données mock pour les demandes
for (let i = 3; i <= 120; i++) {
  const categories = [
    { cat: 'Bricolage - Travaux', sub: ['Serrurerie', 'Plomberie - Installation sanitaire', 'Installation électrique', 'Maçonnerie', 'Peinture - Tapisserie'] },
    { cat: 'Jardinage - Piscine', sub: ['Jardinier', 'Paysagiste - Aménagement du jardin', 'Tonte de pelouse - Débroussaillage'] },
    { cat: 'Services à la personne', sub: ['Ménage', 'Lingerie - Repassage', 'Aide à domicile'] },
    { cat: 'Enfants', sub: ['Baby sitting', 'Nounou', 'Aide aux devoirs'] },
    { cat: 'Cours - Formations', sub: ['Cours de guitare', 'Cours de piano', 'Cours de maths', 'Cours d\'anglais'] }
  ];
  const locations = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Bordeaux', 'Lille', 'Strasbourg', 'Rennes'];
  const names = ['Marc', 'Sophie', 'Pierre', 'Julie', 'Thomas', 'Marie', 'Lucas', 'Emma', 'Nicolas', 'Camille'];
  const urgencies = ['urgent', 'urgent', 'normal', 'normal', 'normal'];
  
  const catIndex = (i - 1) % categories.length;
  const subIndex = (i - 1) % categories[catIndex].sub.length;
  const locIndex = (i - 1) % locations.length;
  const nameIndex = (i - 1) % names.length;
  
  mockRequestsData.push({
    id: i,
    type: 'Demande',
    title: `Recherche ${categories[catIndex].sub[subIndex].toLowerCase()}`,
    category: categories[catIndex].cat,
    subcategory: categories[catIndex].sub[subIndex],
    budget: Math.floor(Math.random() * 400) + 50,
    location: locations[locIndex],
    user: { name: `${names[nameIndex]} ${i}`, avatar: `https://i.pravatar.cc/150?img=${20 + (i % 50)}`, rating: parseFloat((Math.random() * 2 + 3).toFixed(1)) },
    views: Math.floor(Math.random() * 300) + 20,
    responses: Math.floor(Math.random() * 30) + 1,
    status: 'active',
    featured: i % 5 === 0,
    createdAt: `2024-03-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    description: `Demande de service ${i}`,
    urgency: urgencies[(i - 1) % urgencies.length],
    priority: i % 3 === 0 ? 'high' : i % 5 === 0 ? 'critical' : 'medium'
  });
}

// Mock data pour les postes (offres d'emploi)
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
  const images = params.value || [];

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-lg">
        <Package className="w-8 h-8 text-gray-400" />
      </div>
    );
  }

  // Afficher jusqu'à 4 images en grille 2x2
  const displayImages = images.slice(0, 4);
  
  if (displayImages.length === 1) {
    return (
      <div className="flex items-center h-full">
        <img
          src={displayImages[0]}
          alt="Product"
          className="w-24 h-24 object-cover rounded-lg border border-gray-200"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1 w-24 h-24">
      {displayImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Product ${idx + 1}`}
          className="w-full h-full object-cover rounded border border-gray-200"
        />
      ))}
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

// Composant RequestsPanel
const RequestsPanel = ({ itemsPerPage, currentPage, setCurrentPage, totalPages, totalItems }) => {
  const paginatedRequests = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return mockRequestsData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 bg-gray-50">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Demandes de services</h2>
        <p className="text-xs sm:text-sm text-gray-600">{totalItems} demandes disponibles</p>
      </div>

      {/* Requests Table */}
      <div className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Localisation
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Utilisateur
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Réponses
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priorité
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                      <Wrench className="w-3 h-3" />
                      Demande
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <div className="font-semibold text-sm text-gray-900">{request.title}</div>
                    <div className="text-xs text-gray-500">{request.description}</div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">
                    {request.category}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span className="font-semibold text-green-600">{request.budget}€</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      {request.location}
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <UserCellRenderer value={request.user} />
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      {request.responses}
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <PriorityCellRenderer value={request.priority} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination pour les demandes */}
        {totalPages > 1 && (
          <div className="bg-white px-2 sm:px-4 py-2 sm:py-3 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors"
              >
                Précédent
              </button>
              <span className="text-xs sm:text-sm text-gray-700">
                Page <span className="font-semibold">{currentPage}</span> / <span className="font-semibold">{totalPages}</span>
                <span className="mx-1 sm:mx-2 text-gray-400 hidden sm:inline">•</span>
                <span className="font-medium hidden sm:inline">{totalItems}</span>
                <span className="hidden sm:inline"> résultats</span>
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors"
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
  const [currentPageInventory, setCurrentPageInventory] = useState(1);
  const [currentPageRequests, setCurrentPageRequests] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  
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

  // Pagination pour l'inventaire
  const totalPagesInventory = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPageInventory - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPageInventory, itemsPerPage]);

  // Synchronisation des pages
  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPageInventory(1);
    setCurrentPageRequests(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPageInventory(1);
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
    setCurrentPageInventory(1);
    setCurrentPageRequests(1);
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
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 mt-20 mb-24">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Inventaire UrbanConnect</h1>
          <p className="text-sm sm:text-base text-gray-600">Gérez vos produits, services, utilisateurs et offres d'emploi</p>
        </div>

        {/* Main Layout: Responsive - Mobile/Tablet: stack vertical (inventory first), Desktop: side by side */}
        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 pr-2">
          {/* Inventory Panel - First on mobile/tablet, right on desktop (2/3) */}
          <div className="w-full xl:w-2/3 order-1 xl:order-2 pr-2">
            <div className="space-y-6">

        {/* Search and Filters Bar */}
        <div className="mb-4 sm:mb-6 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPageInventory(1);
                }}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border font-medium transition-colors text-sm sm:text-base ${
                  showFilters
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filtres rapides</span>
                <span className="sm:hidden">Filtres</span>
                {getActiveFiltersCount() > 0 && (
                  <span className={`${showFilters ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'} rounded-full px-2 py-1 text-xs font-bold`}>
                    {getActiveFiltersCount()}
                  </span>
                )}
              </button>
              <button
                onClick={() => setShowFilterDrawer(true)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium transition-colors text-sm sm:text-base"
              >
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Tous les filtres</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">

                {/* Type Filter */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Type</label>
                  <div className="space-y-1 sm:space-y-2">
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
                        <span className="ml-2 text-xs sm:text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>


                {/* Category Filter */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                  <div className="max-h-40 sm:max-h-56 overflow-y-auto space-y-1 sm:space-y-2">
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
                          <span className="ml-2 text-xs sm:text-sm text-gray-600">{category}</span>
                        </label>
                      ))
                    ))}
                  </div>
                </div>

                {/* Subcategory Filter */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Sous-catégorie</label>
                  <div className="max-h-40 sm:max-h-56 overflow-y-auto space-y-1 sm:space-y-2">
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
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Localisation</label>
                  <input
                    type="text"
                    placeholder="Paris, Lyon..."
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                {/* Featured Filter */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Options</label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.featured === true}
                      onChange={(e) => handleFilterChange('featured', e.target.checked ? true : undefined)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">Mis en avant uniquement</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end mt-3 sm:mt-4">
                <button
                  onClick={clearFilters}
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Effacer tous les filtres
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary & Items Per Page - Appliqué aux 2 tableaux */}
        <div className="mb-3 sm:mb-4 bg-indigo-50 border border-indigo-200 rounded-lg p-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="text-xs sm:text-sm text-gray-700">
              <div className="font-semibold text-indigo-700 mb-1">Configuration de pagination globale</div>
              <div className="flex gap-4">
                <span><span className="font-medium">Inventaire:</span> {filteredData.length.toLocaleString()} résultat{filteredData.length > 1 ? 's' : ''}</span>
                <span><span className="font-medium">Demandes:</span> {mockRequestsData.length} résultat{mockRequestsData.length > 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-indigo-300">
              <label className="text-xs sm:text-sm text-gray-700 font-medium">Éléments par page (2 tableaux):</label>
              <select
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                className="px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-xs sm:text-sm font-semibold bg-white"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
        </div>

        {/* Custom Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="min-w-[1200px] sm:min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider w-20 sm:w-32">
                    Images
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Titre
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Catégorie
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Sous-catégorie
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">
                    Priorité
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prix
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Localisation
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Utilisateur
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">
                    Stats
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Statut
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Créé le
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 h-20 sm:h-28">
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap align-top">
                      <div className="scale-75 sm:scale-100 origin-left">
                        <ImageCellRenderer value={item.images} />
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap">
                      <div className="scale-75 sm:scale-100 origin-left">
                        <TypeCellRenderer value={item.type} />
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4">
                      <div className="font-semibold text-xs sm:text-sm text-gray-900 line-clamp-2">{item.title}</div>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden md:table-cell">
                      {item.category}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden lg:table-cell">
                      {item.subcategory}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap hidden xl:table-cell">
                      <PriorityCellRenderer value={item.priority} />
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap">
                      <div className="text-xs sm:text-sm">
                        <PriceCellRenderer value={item.price} data={item} />
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="hidden md:inline">{item.location}</span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap hidden lg:table-cell">
                      <UserCellRenderer value={item.user} />
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap hidden xl:table-cell">
                      <StatsCellRenderer data={item} />
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap hidden md:table-cell">
                      <StatusCellRenderer value={item.status} data={item} />
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 whitespace-nowrap hidden lg:table-cell">
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
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
          {totalPagesInventory > 1 && (
            <div className="bg-white px-2 sm:px-4 py-2 sm:py-3 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 sm:gap-4">
                <button
                  onClick={() => setCurrentPageInventory(prev => Math.max(prev - 1, 1))}
                  disabled={currentPageInventory === 1}
                  className="px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors"
                >
                  Précédent
                </button>
                <span className="text-xs sm:text-sm text-gray-700">
                  Page <span className="font-semibold">{currentPageInventory}</span> / <span className="font-semibold">{totalPagesInventory}</span>
                  <span className="mx-1 sm:mx-2 text-gray-400 hidden sm:inline">•</span>
                  <span className="font-medium hidden sm:inline">{filteredData.length}</span>
                  <span className="hidden sm:inline"> résultats</span>
                </span>
                <button
                  onClick={() => setCurrentPageInventory(prev => Math.min(prev + 1, totalPagesInventory))}
                  disabled={currentPageInventory === totalPagesInventory}
                  className="px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors"
                >
                  Suivant
                </button>
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

          {/* Requests Panel - Second on mobile/tablet, left on desktop (1/3) */}
          <div className="w-full xl:w-1/3 order-2 xl:order-1">
            <RequestsPanel 
              itemsPerPage={itemsPerPage} 
              currentPage={currentPageRequests} 
              setCurrentPage={setCurrentPageRequests}
              totalPages={Math.ceil(mockRequestsData.length / itemsPerPage)}
              totalItems={mockRequestsData.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
