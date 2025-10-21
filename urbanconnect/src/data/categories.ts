// Structure de catégories pour UrbanConnect

export interface Category {
  id: string;
  name: string;
  type?: 'Produits' | 'Services';
  subcategories?: Subcategory[];
  icon?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  elements: string[];
}

export const categories: Category[] = [
  {
    id: 'maison-jardin',
    name: 'Maison & Jardin',
    icon: '🏡',
    subcategories: [
      {
        id: 'bricolage-produits',
        name: 'Bricolage (Produits)',
        elements: [
          'Perceuse', 'visseuse', 'marteau', 'tournevis', 'scie', 'escabeau', 
          'coffret à outils', 'perceuse à percussion', 'scie sauteuse', 
          'tournevis électrique', 'visserie', 'ponceuse', 'clé à molette', 
          'perceuse sans fil'
        ]
      },
      {
        id: 'bricolage-services',
        name: 'Bricolage (Services)',
        elements: [
          'Montage de meubles', 'réparation', 'pose d\'étagère', 'petit bricolage', 
          'perceuse à percussion', 'scie sauteuse', 'tournevis électrique', 
          'visserie', 'ponceuse', 'clé à molette', 'perceuse sans fil'
        ]
      },
      {
        id: 'travaux-renovation',
        name: 'Travaux & rénovation',
        elements: [
          'Peinture', 'rouleau', 'pinceau', 'escabeau', 'carrelage', 
          'outillage électrique', 'matériel de carrelage', 'bétonnière', 
          'pince coupante', 'rouleau à peindre', 'perceuse murale', 'niveau laser'
        ]
      },
      {
        id: 'jardinage-motoculture',
        name: 'Jardinage & motoculture',
        elements: [
          'Tondeuse', 'taille-haie', 'tronçonneuse', 'débroussailleuse', 
          'souffleur', 'broyeur', 'taille-bordures', 'coupe-bordures', 
          'scarificateur', 'pulvérisateur', 'tuyau d\'arrosage', 'arrosoir', 'semoir'
        ]
      },
      {
        id: 'entretien',
        name: 'Entretien',
        elements: [
          'Aspirateur', 'nettoyeur vapeur', 'nettoyeur haute pression', 
          'serpillère', 'balai', 'produits d\'entretien', 'balai vapeur', 
          'chiffon microfibre', 'aspirateur sans sac', 'produit désinfectant', 
          'détartrant', 'nettoyant vitres'
        ]
      },
      {
        id: 'ameublement',
        name: 'Ameublement',
        elements: [
          'Table', 'chaise', 'étagère', 'luminaire', 'canapé', 'déco', 'cadre', 
          'buffet', 'commode', 'table basse', 'tapis', 'rideaux', 'miroir mural', 
          'suspension', 'table d\'appoint'
        ]
      }
    ]
  },
  {
    id: 'vehicules-mobilite',
    name: 'Véhicules & Mobilité',
    icon: '🚗',
    subcategories: [
      {
        id: 'auto-moto-produits',
        name: 'Auto & moto (Produits)',
        elements: [
          'Voiture', 'moto', 'scooter', 'accessoires auto', 'GPS', 'pneus', 
          'outils d\'entretien', 'casque', 'chargeur de batterie', 'cric', 
          'coffret à douilles', 'polisseuse', 'huile moteur', 'kit de nettoyage auto'
        ]
      },
      {
        id: 'auto-moto-services',
        name: 'Auto & moto (Services)',
        elements: [
          'Lavage auto', 'entretien', 'réparation', 'covoiturage', 
          'transport de marchandises', 'casque', 'chargeur de batterie', 'cric', 
          'coffret à douilles', 'polisseuse', 'huile moteur', 'kit de nettoyage auto'
        ]
      },
      {
        id: 'transport-demenagement-produits',
        name: 'Transport & déménagement (Produits)',
        elements: [
          'Camion', 'remorque', 'diable', 'sangles', 'couvertures de déménagement', 
          'chariot', 'sangles d\'arrimage', 'cartons', 'diable pliant', 
          'couverture de protection', 'valise rigide'
        ]
      },
      {
        id: 'transport-demenagement-services',
        name: 'Transport & déménagement (Services)',
        elements: [
          'Aide au déménagement', 'location utilitaire', 'transport d\'objets', 
          'chariot', 'sangles d\'arrimage', 'cartons', 'diable pliant', 
          'couverture de protection', 'valise rigide'
        ]
      }
    ]
  },
  {
    id: 'electromenager-multimedia',
    name: 'Électroménager & Multimédia',
    icon: '📱',
    subcategories: [
      {
        id: 'gros-electromenager',
        name: 'Gros électroménager',
        elements: [
          'Lave-linge', 'frigo', 'four', 'congélateur', 'sèche-linge', 
          'hotte aspirante', 'plaque de cuisson', 'cave à vin', 'lave-vaisselle', 
          'congélateur coffre'
        ]
      },
      {
        id: 'petit-electromenager',
        name: 'Petit électroménager',
        elements: [
          'Aspirateur', 'robot de cuisine', 'micro-ondes', 'bouilloire', 
          'cafetière', 'grille-pain', 'friteuse', 'robot pâtissier', 
          'presse-agrumes', 'plancha électrique', 'mixeur plongeant'
        ]
      },
      {
        id: 'informatique-telephonie',
        name: 'Informatique & téléphonie',
        elements: [
          'PC', 'tablette', 'imprimante', 'smartphone', 'accessoires', 
          'écran PC', 'souris', 'clavier', 'disque dur externe', 'casque audio', 
          'webcam', 'chargeur universel'
        ]
      },
      {
        id: 'reparation-maintenance',
        name: 'Réparation & maintenance',
        elements: [
          'Dépannage informatique', 'réparation smartphone', 'installation TV', 
          'dépannage TV', 'entretien électroménager', 'réparation vélo', 
          'ajustement couture', 'maintenance PC', 'soudure'
        ]
      }
    ]
  },
  {
    id: 'services-personne',
    name: 'Services à la personne',
    icon: '👥',
    subcategories: [
      {
        id: 'aide-domicile',
        name: 'Aide à domicile',
        elements: [
          'Ménage', 'repassage', 'garde d\'enfants', 'jardinage', 'petits travaux', 
          'aide aux personnes âgées', 'nettoyage vitres', 'entretien du linge', 
          'cuisine à domicile', 'désencombrement'
        ]
      },
      {
        id: 'cours-formation',
        name: 'Cours & formation',
        elements: [
          'Soutien scolaire', 'cours de musique', 'sport', 'langues', 
          'formation pro', 'cours de guitare', 'coaching sportif', 
          'soutien en mathématiques', 'apprentissage de langues', 'préparation examens'
        ]
      },
      {
        id: 'beaute-bien-etre',
        name: 'Beauté & bien-être',
        elements: [
          'Coiffure', 'maquillage', 'massage', 'soins esthétiques', 'manucure', 
          'pédicure', 'soins visage', 'relooking', 'coloration', 'massage relaxant', 
          'maquillage événementiel'
        ]
      },
      {
        id: 'garde-animaux',
        name: 'Garde d\'animaux',
        elements: [
          'Promenade', 'pension', 'soins', 'garde à domicile'
        ]
      }
    ]
  },
  {
    id: 'evenementiel-loisirs',
    name: 'Événementiel & Loisirs',
    icon: '🎉',
    subcategories: [
      {
        id: 'materiel-fete',
        name: 'Matériel de fête',
        elements: [
          'Barnum', 'sono', 'vaisselle', 'décoration', 'tables pliantes', 
          'projecteur lumineux', 'guirlandes', 'machine à bulles', 
          'machine à pop-corn', 'estrade', 'nappes'
        ]
      },
      {
        id: 'sport-plein-air',
        name: 'Sport & plein air',
        elements: [
          'Raquettes', 'kayak', 'paddle', 'camping', 'drone', 'tente', 
          'tente de randonnée', 'équipement de plongée', 'VTT', 'planche de surf', 
          'ballon de football', 'sac de couchage'
        ]
      },
      {
        id: 'organisation',
        name: 'Organisation',
        elements: [
          'Traiteur', 'DJ', 'photographe', 'animation d\'événements'
        ]
      },
      {
        id: 'location-materiel',
        name: 'Location matériel',
        elements: [
          'Location de sono', 'barnum', 'vaisselle', 'mobilier d\'événement'
        ]
      }
    ]
  },
  {
    id: 'mode-accessoires',
    name: 'Mode & Accessoires',
    icon: '👗',
    subcategories: [
      {
        id: 'vetements',
        name: 'Vêtements',
        elements: [
          'Vêtements homme', 'femme', 'enfant', 'manteaux', 'jeans', 't-shirts', 
          'chemise', 'robe', 'costume', 'pulls', 'vêtements de sport', 'doudoune', 
          'casquette', 'bonnet'
        ]
      },
      {
        id: 'chaussures-sacs',
        name: 'Chaussures & sacs',
        elements: [
          'Chaussures', 'sacs à main', 'sac à dos', 'ceintures', 'bottes', 
          'baskets', 'sandales', 'escarpins', 'mocassins', 'tongs', 
          'chaussures de sécurité'
        ]
      },
      {
        id: 'bijoux-montres',
        name: 'Bijoux & montres',
        elements: [
          'Montres', 'colliers', 'bracelets', 'bagues'
        ]
      },
      {
        id: 'retouche-couture',
        name: 'Retouche & couture',
        elements: [
          'Réparation vêtements', 'création sur mesure', 'broderie'
        ]
      }
    ]
  },
  {
    id: 'enfants-puericulture',
    name: 'Enfants & Puériculture',
    icon: '🧸',
    subcategories: [
      {
        id: 'jouets-jeux',
        name: 'Jouets & jeux',
        elements: [
          'Jeux de société', 'jouets éducatifs', 'puzzles', 'peluches', 
          'jeux électroniques', 'cubes d\'éveil', 'poupées', 'circuits de voiture', 
          'jeux de construction', 'puzzles 3D'
        ]
      },
      {
        id: 'materiel-puericulture',
        name: 'Matériel de puériculture',
        elements: [
          'Poussette', 'lit bébé', 'siège auto', 'table à langer', 'chauffe-biberon', 
          'transat', 'parc bébé', 'babyphone', 'chaise haute', 'barrière de sécurité'
        ]
      },
      {
        id: 'garde-aide-familiale',
        name: 'Garde & aide familiale',
        elements: [
          'Baby-sitting', 'aide aux devoirs', 'animation enfantine'
        ]
      }
    ]
  },
  {
    id: 'animaux',
    name: 'Animaux',
    icon: '🐕',
    subcategories: [
      {
        id: 'accessoires-animaux',
        name: 'Accessoires',
        elements: [
          'Laisse', 'cage', 'panier', 'niche', 'brosse', 'gamelle', 'collier', 
          'harnais', 'griffoir', 'bac à litière', 'tapis rafraîchissant', 
          'distributeur automatique de croquettes'
        ]
      },
      {
        id: 'nourriture-animaux',
        name: 'Nourriture',
        elements: [
          'Croquettes', 'pâtée', 'friandises', 'compléments'
        ]
      },
      {
        id: 'garde-promenade-animaux',
        name: 'Garde & promenade',
        elements: [
          'Promenade', 'pension', 'toilettage', 'garde à domicile'
        ]
      }
    ]
  },
  {
    id: 'immobilier-hebergement',
    name: 'Immobilier & Hébergement',
    icon: '🏠',
    subcategories: [
      {
        id: 'location-courte-duree',
        name: 'Location courte durée',
        elements: [
          'Appartement', 'maison', 'chambre', 'gîte', 'maison de campagne', 
          'studio meublé', 'tiny house', 'cabane', 'logement insolite', 
          'résidence secondaire'
        ]
      },
      {
        id: 'partage-espace',
        name: 'Partage d\'espace',
        elements: [
          'Garage', 'parking', 'bureau', 'atelier'
        ]
      },
      {
        id: 'hebergement-services',
        name: 'Hébergement',
        elements: [
          'Location saisonnière', 'accueil voyageurs', 'entretien logement'
        ]
      }
    ]
  },
  {
    id: 'artisanat-services-pro',
    name: 'Artisanat & Services professionnels',
    icon: '🎨',
    subcategories: [
      {
        id: 'creation-artisanale',
        name: 'Création artisanale',
        elements: [
          'Bijoux faits main', 'céramique', 'bois', 'couture', 'poterie', 
          'sculpture bois', 'peinture artisanale', 'couture main', 
          'accessoires déco', 'bougies naturelles'
        ]
      },
      {
        id: 'reparation-pro',
        name: 'Réparation',
        elements: [
          'Réparation vélo', 'électroménager', 'informatique', 'dépannage TV', 
          'entretien électroménager', 'ajustement couture', 'maintenance PC', 'soudure'
        ]
      },
      {
        id: 'services-techniques',
        name: 'Services techniques',
        elements: [
          'Photographe', 'graphiste', 'développeur', 'rédacteur'
        ]
      }
    ]
  }
];

// Types pour les filtres
export type FilterType = 'Tous' | 'Produits' | 'Services';

// Interface pour les filtres avec sélection multiple
export interface FilterState {
  type: FilterType;
  categories: string[];
}

// Fonction utilitaire pour obtenir toutes les catégories principales
export const getMainCategories = (): string[] => {
  return categories.map(cat => cat.name);
};

// Fonction utilitaire pour obtenir les sous-catégories d'une catégorie
export const getSubcategories = (categoryId: string): Subcategory[] => {
  const category = categories.find(cat => cat.id === categoryId);
  return category?.subcategories || [];
};

// Fonction utilitaire pour filtrer par type (Produits/Services)
export const getCategoriesByType = (type: FilterType): Category[] => {
  if (type === 'Tous') return categories;
  
  return categories.map(category => ({
    ...category,
    subcategories: category.subcategories?.filter(sub => 
      type === 'Produits' 
        ? !sub.name.includes('Services') && !sub.name.includes('Aide') && !sub.name.includes('Cours') && !sub.name.includes('Garde') && !sub.name.includes('Organisation') && !sub.name.includes('Location') && !sub.name.includes('Retouche') && !sub.name.includes('Hébergement') && !sub.name.includes('Réparation') && !sub.name.includes('Services')
        : sub.name.includes('Services') || sub.name.includes('Aide') || sub.name.includes('Cours') || sub.name.includes('Garde') || sub.name.includes('Organisation') || sub.name.includes('Location') || sub.name.includes('Retouche') || sub.name.includes('Hébergement') || sub.name.includes('Réparation') || sub.name.includes('maintenance')
    )
  })).filter(category => category.subcategories && category.subcategories.length > 0);
};