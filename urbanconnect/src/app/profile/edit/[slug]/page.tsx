"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { NextPage } from "next";
import { FaComment, FaPlus, FaSave, FaTimes, FaEye, FaEyeSlash, FaEdit, FaTrash } from "react-icons/fa";
import { Package, Wrench, Calendar, Phone, Users, Shield, Zap, Camera, Palette } from "lucide-react";
import urbanBackground from "@/assets/urbanconnectBackground.png";
import { useTheme, TEXT_COLORS } from "@/hooks/useTheme";
import ThemeEditor from "@/components/ThemeEditor";

// Styles pour masquer la scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

// Types
interface User {
  id: string;
  name: string;
  bio: string;
  coverPhoto: string;
  profilePhoto: string;
  city: string;
  work: string;
  education: string;
  badges: {
    id: number;
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
    earned: string;
    level: string;
    visible: boolean;
  }[];
  travelZones: {
    id: number;
    zone: string;
    type: string;
    distance: string;
    travelTime: string;
    transportModes: string[];
    services: string[];
    availability: string;
    surcharge: string;
    description: string;
    visible: boolean;
  }[];
  currentLocation: {
    latitude: number;
    longitude: number;
    address: string;
    precision: string;
    lastUpdated: string;
    visible: boolean;
  };
  stories: { id: number; name: string; avatar: string; visible: boolean }[];
  posts: {
    id: number;
    content: string;
    date: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    visible: boolean;
  }[];
  products: {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    description: string;
    category: string;
    condition: string;
    location: string;
    visible: boolean;
  }[];
  services: {
    id: number;
    title: string;
    description: string;
    price: string;
    duration: string;
    category: string;
    rating: number;
    completedProjects: number;
    visible: boolean;
  }[];
  activities: {
    id: number;
    title: string;
    type: string;
    date: string;
    time: string;
    location: string;
    participants: number;
    status: string;
    description: string;
    visible: boolean;
  }[];
  contacts: {
    professional: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
      website: string;
      visible: boolean;
    };
    personal: {
      email: string;
      phone: string;
      visible: boolean;
    };
    social: {
      twitter: string;
      instagram: string;
      facebook: string;
      visible: boolean;
    };
    availability: {
      status: string;
      preferredContact: string;
      responseTime: string;
      visible: boolean;
    };
  };
  contactsList: {
    id: number;
    name: string;
    status: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    type: string;
    visible: boolean;
  }[];
  blockedContacts: {
    id: number;
    name: string;
    avatar: string;
    reason: string;
    blockedDate: string;
  }[];
  profileSettings: {
    showBadges: boolean;
    showLocation: boolean;
    showContacts: boolean;
    showProducts: boolean;
    showServices: boolean;
    showActivities: boolean;
    showPosts: boolean;
    profileVisibility: 'public' | 'friends' | 'private';
  };
}

const ProfileEdit: NextPage = () => {
  const params = useParams();
  const router = useRouter();
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("general");
  const [editingField, setEditingField] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  
  // Find current profile based on slug
  const slug = params?.slug as string;
  const { currentTheme, getThemeStyles } = useTheme(slug);
  const themeStyles = getThemeStyles();

  // Sample profile data with visibility controls
  const [profile, setProfile] = useState<User>({
    id: "john-doe",
    name: "John Doe",
    bio: "Loving life and coding!",
    coverPhoto: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg",
    profilePhoto: "https://images.pexels.com/photos/1108094/pexels-photo-1108094.jpeg",
    city: "Paris",
    work: "Software Engineer",
    education: "Université de Paris",
    badges: [
      {
        id: 1,
        name: "Vendeur de Confiance",
        description: "Plus de 50 ventes réussies",
        icon: Shield,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        earned: "2025-09-15",
        level: "Gold",
        visible: true
      },
      {
        id: 2,
        name: "Expert Tech",
        description: "Services tech très bien notés",
        icon: Zap,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        earned: "2025-08-20",
        level: "Platinum",
        visible: true
      }
    ],
    travelZones: [
      {
        id: 1,
        zone: "Paris Centre (1er-4ème)",
        type: "Zone prioritaire",
        distance: "0-5 km",
        travelTime: "15-30 min",
        transportModes: ["Métro", "Vélo", "À pied"],
        services: ["Développement", "Consultation", "Formation"],
        availability: "7j/7",
        surcharge: "Gratuit",
        description: "Zone de prédilection pour tous types de services",
        visible: true
      }
    ],
    currentLocation: {
      latitude: 48.8566,
      longitude: 2.3522,
      address: "Paris 15ème, France",
      precision: "Quartier",
      lastUpdated: "2025-10-18T20:22:00Z",
      visible: true
    },
    stories: [
      { id: 1, name: "Alice", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg", visible: true },
      { id: 2, name: "Bob", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg", visible: true }
    ],
    posts: [
      { id: 1, content: "Hello world!", date: "18 Oct 2025", image: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg", likes: 12, comments: 4, shares: 2, visible: true },
      { id: 2, content: "Learning Next.js and Tailwind.", date: "17 Oct 2025", likes: 8, comments: 2, shares: 1, visible: false },
      { id: 3, content: "Check out this view!", date: "16 Oct 2025", image: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg", likes: 20, comments: 5, shares: 3, visible: true }
    ],
    products: [
      {
        id: 1,
        name: "MacBook Pro M3",
        price: "2,299€",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop",
        description: "Ordinateur portable professionnel haute performance",
        category: "Informatique",
        condition: "Neuf",
        location: "Paris 15ème",
        visible: true
      }
    ],
    services: [
      {
        id: 1,
        title: "Développement Web Full-Stack",
        description: "Création d'applications web modernes avec React, Node.js, et bases de données",
        price: "65€/h",
        duration: "Projet: 2-8 semaines",
        category: "Développement",
        rating: 4.9,
        completedProjects: 25,
        visible: true
      }
    ],
    activities: [
      {
        id: 1,
        title: "Meetup Développeurs React Paris",
        type: "Événement",
        date: "2025-10-25",
        time: "19h00 - 22h00",
        location: "Station F, Paris",
        participants: 45,
        status: "Organisateur",
        description: "Présentation des nouvelles features de React 19",
        visible: true
      }
    ],
    contacts: {
      professional: {
        email: "john.doe.pro@email.com",
        phone: "+33 6 12 34 56 78",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe",
        website: "johndoe-dev.fr",
        visible: true
      },
      personal: {
        email: "john.doe@email.com",
        phone: "+33 6 12 34 56 79",
        visible: false
      },
      social: {
        twitter: "@johndoe_dev",
        instagram: "@johncode",
        facebook: "John Doe",
        visible: true
      },
      availability: {
        status: "Disponible pour nouveaux projets",
        preferredContact: "Email professionnel",
        responseTime: "24h en moyenne",
        visible: true
      }
    },
    contactsList: [
      {
        id: 1,
        name: "Marie Dubois",
        status: "En ligne",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        lastMessage: "Merci pour ton aide sur le projet !",
        timestamp: "Il y a 5 min",
        type: "professional",
        visible: true
      }
    ],
    blockedContacts: [],
    profileSettings: {
      showBadges: true,
      showLocation: true,
      showContacts: true,
      showProducts: true,
      showServices: true,
      showActivities: true,
      showPosts: true,
      profileVisibility: 'public'
    }
  });

  const menuItems = [
    { id: "general", label: "Général", icon: Users },
    { id: "posts", label: "Publications", icon: FaComment },
    { id: "produits", label: "Produits", icon: Package },
    { id: "services", label: "Services", icon: Wrench },
    { id: "activites", label: "Activités", icon: Calendar },
    { id: "contacts", label: "Contacts", icon: Phone },
    { id: "confidentialite", label: "Confidentialité", icon: Shield },
    { id: "theme", label: "Thème", icon: Palette }
  ];

  const handleSave = () => {
    // Ici on sauvegarderait les données
    console.log("Saving profile:", profile);
    setHasChanges(false);
    // Redirect to profile view
    router.push(`/profile/page/${slug}`);
  };

  const handleCancel = () => {
    if (hasChanges) {
      if (confirm("Voulez-vous vraiment annuler vos modifications ?")) {
        router.push(`/profile/page/${slug}`);
      }
    } else {
      router.push(`/profile/page/${slug}`);
    }
  };

  const updateProfile = (field: string, value: string | boolean | number) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
    setHasChanges(true);
  };

  const toggleVisibility = (section: string, itemId?: number) => {
    setProfile(prev => {
      const newProfile = { ...prev };
      
      if (section === 'posts' && itemId !== undefined) {
        newProfile.posts = newProfile.posts.map(post => 
          post.id === itemId ? { ...post, visible: !post.visible } : post
        );
      } else if (section === 'products' && itemId !== undefined) {
        newProfile.products = newProfile.products.map(product => 
          product.id === itemId ? { ...product, visible: !product.visible } : product
        );
      } else if (section === 'services' && itemId !== undefined) {
        newProfile.services = newProfile.services.map(service => 
          service.id === itemId ? { ...service, visible: !service.visible } : service
        );
      } else if (section === 'activities' && itemId !== undefined) {
        newProfile.activities = newProfile.activities.map(activity => 
          activity.id === itemId ? { ...activity, visible: !activity.visible } : activity
        );
      } else if (section === 'badges' && itemId !== undefined) {
        newProfile.badges = newProfile.badges.map(badge => 
          badge.id === itemId ? { ...badge, visible: !badge.visible } : badge
        );
      }
      
      return newProfile;
    });
    setHasChanges(true);
  };

  const handleImageUpload = (type: 'cover' | 'profile') => {
    // Simulation d'upload d'image
    console.log(`Uploading ${type} image`);
    setHasChanges(true);
  };

  // Fonction pour ajouter la classe force-black-text aux classes existantes
  // const addForceBlackText = (existingClasses: string) => {
  //   return `${existingClasses} force-black-text`.trim();
  // };
  
  // Style commun pour tous les inputs avec couleur forcée
  const commonInputStyle = {
    color: TEXT_COLORS.PRIMARY,
    fontSize: 'inherit'
  };
  
  const commonTextareaStyle = {
    color: TEXT_COLORS.PRIMARY,
    fontSize: 'inherit',
    resize: 'vertical' as const
  };
  
  const commonSelectStyle = {
    color: TEXT_COLORS.PRIMARY,
    fontSize: 'inherit'
  };

  return (
    <>
      {/* Injection des styles CSS */}
      <style jsx global>{`
        ${scrollbarHideStyles}
        
        /* Force les inputs à avoir une couleur de texte lisible avec spécificité maximale */
        div input, div textarea, div select {
          color: ${TEXT_COLORS.PRIMARY} !important;
        }
        
        div input::placeholder, div textarea::placeholder {
          color: ${TEXT_COLORS.SECONDARY} !important;
        }
        
        /* Classe spécifique pour forcer la couleur noire avec spécificité renforcée */
        div .force-black-text {
          color: ${TEXT_COLORS.PRIMARY} !important;
        }
        
        div .force-black-text::placeholder {
          color: ${TEXT_COLORS.SECONDARY} !important;
        }
        
        /* Spécificité encore plus élevée pour surcharger tous les autres styles */
        .relative input[type="text"],
        .relative input[type="email"], 
        .relative input[type="tel"],
        .relative input[type="url"],
        .relative input[type="number"],
        .relative input[type="date"],
        .relative textarea,
        .relative select {
          color: ${TEXT_COLORS.PRIMARY} !important;
        }
      `}</style>
      
      <div 
        className="relative w-screen h-screen overflow-hidden" 
        style={{
          '--card-bg': currentTheme.cardBackground,
          '--card-opacity': `${currentTheme.cardOpacity}%`,
          '--card-border': currentTheme.cardBorder,
          '--card-blur': `${currentTheme.cardBlur}px`,
          '--bg-opacity': `${currentTheme.backgroundOpacity}%`,
          '--primary-text': TEXT_COLORS.PRIMARY,
          '--secondary-text': TEXT_COLORS.SECONDARY,
          '--accent-color': currentTheme.accentColor,
          '--btn-primary': currentTheme.buttonPrimary,
          '--btn-secondary': currentTheme.buttonSecondary
        } as React.CSSProperties}
      >
        {/* Background */}
        <div className="absolute inset-0" style={{ opacity: currentTheme.backgroundOpacity / 100 }}>
          <Image
            src={urbanBackground}
            alt="Urban Connect Background"
            fill
            className="object-cover object-center"
            style={{ filter: themeStyles.backgroundFilter }}
          />
        </div>
        {/* Background overlay principal */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: currentTheme.backgroundOverlay !== 'transparent' 
              ? currentTheme.backgroundOverlay 
              : themeStyles.gradientOverlay
          }}
        />
        
        {/* Overlay coloré renforcé pour l'image */}
        <div 
          className="absolute inset-0 mix-blend-overlay" 
          style={{ 
            background: themeStyles.backgroundColorOverlay
          }}
        />
        
        {/* Content with scroll */}
        <div className="relative z-[1] h-full overflow-y-auto p-4 md:p-6">
          
          {/* Header avec boutons de sauvegarde */}
          <div className={`flex justify-between items-center mb-4 p-4 rounded-xl ${themeStyles.headerClass}`}>
            <h1 className={`text-2xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>
              Éditer le profil
            </h1>
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 ${themeStyles.buttonSecondary} ${themeStyles.textPrimary}`}
                style={themeStyles.textPrimaryStyle}
              >
                <FaTimes className="w-4 h-4" />
                Annuler
              </button>
              <button
                onClick={handleSave}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-colors ${
                  hasChanges 
                    ? ''
                    : 'opacity-50 cursor-not-allowed'
                }`}
                style={{
                  backgroundColor: hasChanges ? currentTheme.buttonPrimary : currentTheme.buttonSecondary,
                  color: hasChanges ? TEXT_COLORS.WHITE : TEXT_COLORS.PRIMARY
                }}
                disabled={!hasChanges}
              >
                <FaSave className="w-4 h-4" style={{ color: 'inherit' }} />
                Sauvegarder
              </button>
            </div>
          </div>

          {/* Cover photo with edit */}
          <div className="relative h-64 bg-gray-300 rounded-xl overflow-hidden group">
            <Image src={profile.coverPhoto} alt="Cover" fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <button 
                onClick={() => handleImageUpload('cover')}
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                Changer la couverture
              </button>
            </div>
          </div>

          {/* Profile header with edit */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative -mt-20 flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-40 h-40 border-4 border-white rounded-full overflow-hidden shadow group relative">
                <Image
                  src={profile.profilePhoto}
                  alt="Avatar"
                  width={160}
                  height={160}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => handleImageUpload('profile')}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-gray-800 px-2 py-1 rounded text-xs flex items-center gap-1"
                  >
                    <Camera className="w-3 h-3" />
                    Changer
                  </button>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-2">
                {/* Nom éditable */}
                {editingField === 'name' ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => updateProfile('name', e.target.value)}
                      onBlur={() => setEditingField(null)}
                      onKeyPress={(e) => e.key === 'Enter' && setEditingField(null)}
                      className="text-3xl font-['Manrope:Bold',_sans-serif] bg-white border border-blue-300 rounded px-2 py-1"
                      style={{ ...themeStyles.textPrimaryStyle, color: TEXT_COLORS.PRIMARY }}
                      autoFocus
                    />
                ) : (
                  <h1 
                    className="text-3xl font-['Manrope:Bold',_sans-serif] cursor-pointer hover:bg-blue-50 px-2 py-1 rounded"
                    style={themeStyles.textPrimaryStyle}
                    onClick={() => setEditingField('name')}
                  >
                    {profile.name} <FaEdit className="inline w-4 h-4 ml-2 opacity-50" />
                  </h1>
                )}
                
                {/* Bio éditable */}
                {editingField === 'bio' ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) => updateProfile('bio', e.target.value)}
                    onBlur={() => setEditingField(null)}
                    className="font-['Manrope:Regular',_sans-serif] bg-white border border-blue-300 rounded px-2 py-1 w-full"
                    style={{ ...themeStyles.textSecondaryStyle, color: TEXT_COLORS.PRIMARY }}
                    autoFocus
                  />
                ) : (
                  <p 
                    className="font-['Manrope:Regular',_sans-serif] cursor-pointer hover:bg-blue-50 px-2 py-1 rounded"
                    style={themeStyles.textSecondaryStyle}
                    onClick={() => setEditingField('bio')}
                  >
                    {profile.bio} <FaEdit className="inline w-3 h-3 ml-1 opacity-50" />
                  </p>
                )}
              </div>
            </div>

            {/* Menu navigation */}
            <div className={`mt-6 p-3 md:p-4 rounded-xl ${themeStyles.cardClass}`}>
              <div className="border-b">
                <div className="flex flex-wrap gap-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`px-4 py-2 font-['Manrope:Medium',_sans-serif] text-sm transition-colors text-center rounded-lg flex items-center gap-2 ${
                          activeTab === item.id ? 'shadow-sm' : 'hover:bg-gray-100/20'
                        }`}
                        style={{
                          color: activeTab === item.id 
                            ? currentTheme.accentColor 
                            : TEXT_COLORS.PRIMARY,
                          backgroundColor: activeTab === item.id 
                            ? (currentTheme.isDark ? 'rgba(75, 85, 99, 0.4)' : 'rgba(255, 255, 255, 0.6)')
                            : 'transparent'
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: 'inherit' }} />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main editing content */}
            <div className="mt-6">
              {/* Onglet Général */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass}`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={themeStyles.textPrimaryStyle}>
                      Informations personnelles
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" style={themeStyles.textPrimaryStyle}>Ville</label>
                          <input
                            type="text"
                            value={profile.city}
                            onChange={(e) => updateProfile('city', e.target.value)}
                            className={`w-full px-3 py-2 rounded-lg focus:ring-2 force-black-text ${themeStyles.inputClass}`}
                            style={commonInputStyle}
                          />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" style={themeStyles.textPrimaryStyle}>Profession</label>
                          <input
                            type="text"
                            value={profile.work}
                            onChange={(e) => updateProfile('work', e.target.value)}
                            className={`w-full px-3 py-2 rounded-lg focus:ring-2 force-black-text ${themeStyles.inputClass}`}
                            style={commonInputStyle}
                          />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1" style={themeStyles.textPrimaryStyle}>Formation</label>
                          <input
                            type="text"
                            value={profile.education}
                            onChange={(e) => updateProfile('education', e.target.value)}
                            className={`w-full px-3 py-2 rounded-lg focus:ring-2 force-black-text ${themeStyles.inputClass}`}
                            style={commonInputStyle}
                          />
                      </div>
                    </div>
                  </div>

                  {/* Badges avec contrôles de visibilité */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass}`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={themeStyles.textPrimaryStyle}>
                      Badges
                    </h2>
                    <div className="space-y-3">
                      {profile.badges.map((badge) => {
                        const Icon = badge.icon;
                        return (
                          <div key={badge.id} className={`flex items-center justify-between p-3 rounded-lg`} style={{ backgroundColor: currentTheme.isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(249, 250, 251, 0.8)' }}>
                            <div className="flex items-center gap-3">
                              <Icon className={`w-5 h-5 ${badge.color}`} />
                              <div>
                                <h3 className="font-semibold" style={themeStyles.textPrimaryStyle}>{badge.name}</h3>
                                <p className="text-sm" style={themeStyles.textSecondaryStyle}>{badge.description}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleVisibility('badges', badge.id)}
                              className="p-2 rounded-lg transition-colors"
                              style={{
                                color: badge.visible ? currentTheme.accentColor : currentTheme.secondaryText,
                                backgroundColor: 'transparent'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = currentTheme.isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(249, 250, 251, 0.5)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              {badge.visible ? <FaEye /> : <FaEyeSlash />}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet Publications */}
              {activeTab === "posts" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={themeStyles.textPrimaryStyle}>
                      Gérer vos publications
                    </h2>
                    <div className="space-y-3">
                      {profile.posts.map((post) => (
                        <div key={post.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <p className={`font-medium mb-1 ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{post.content}</p>
                            <p className={`text-sm ${themeStyles.textSecondary}`} style={themeStyles.textSecondaryStyle}>{post.date}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <span>{post.likes} likes</span>
                              <span>{post.comments} commentaires</span>
                              <span>{post.shares} partages</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <button
                              onClick={() => toggleVisibility('posts', post.id)}
                              className={`p-2 rounded-lg transition-colors ${
                                post.visible ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'
                              }`}
                              title={post.visible ? "Masquer de votre profil" : "Afficher sur votre profil"}
                            >
                              {post.visible ? <FaEye /> : <FaEyeSlash />}
                            </button>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <FaEdit />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet Produits */}
              {activeTab === "produits" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-['Manrope:Bold',_sans-serif]" style={themeStyles.textPrimaryStyle}>
                        Gérer vos produits
                      </h2>
                      <button 
                        className="px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        style={{
                          backgroundColor: currentTheme.buttonPrimary,
                          color: TEXT_COLORS.WHITE
                        }}
                      >
                        <FaPlus className="w-4 h-4" style={{ color: 'inherit' }} />
                        Ajouter un produit
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profile.products.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden bg-white">
                          <div className="relative h-48">
                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                            <div className="absolute top-2 right-2 flex gap-2">
                              <button
                                onClick={() => toggleVisibility('products', product.id)}
                                className={`p-2 rounded-lg transition-colors backdrop-blur-lg ${
                                  product.visible ? 'text-green-600 bg-white/90' : 'text-gray-400 bg-white/90'
                                }`}
                              >
                                {product.visible ? <FaEye /> : <FaEyeSlash />}
                              </button>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className={`font-semibold text-lg mb-2 ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{product.name}</h3>
                            <p className={`text-sm mb-3 ${themeStyles.textSecondary}`} style={themeStyles.textSecondaryStyle}>{product.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-xl font-bold text-blue-600">{product.price}</span>
                              <div className="flex gap-2">
                                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                  <FaEdit />
                                </button>
                                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Section Informations de Vente */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass} mt-4`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={{ color: TEXT_COLORS.PRIMARY }}>
                      📦 Informations de Vente
                    </h2>
                    
                    <div className="space-y-4">
                      {/* Modalités d'Envoi */}
                      <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-500">
                        <h3 className="font-semibold text-green-700 mb-3">🚚 Modalités d&apos;Envoi</h3>
                        <div className="space-y-2">
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Délai d&apos;expédition</label>
                            <input
                              type="text"
                              defaultValue="Sous 24h après confirmation du paiement"
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Transporteurs</label>
                            <input
                              type="text"
                              defaultValue="Colissimo, Chronopost, Mondial Relay"
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Négociation & Prix */}
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                        <h3 className="font-semibold text-purple-700 mb-3">💬 Négociation & Prix</h3>
                        <div className="space-y-2">
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Conditions de paiement</label>
                            <input
                              type="text"
                              defaultValue="CB, PayPal, Virement, Espèces (remise en main propre)"
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Garantie</label>
                            <input
                              type="text"
                              defaultValue="Satisfait ou remboursé 14 jours"
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Section Présentation du Vendeur */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass} mt-4`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={{ color: TEXT_COLORS.PRIMARY }}>
                      👤 Présentation du Vendeur
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Ventes réalisées</label>
                          <input
                            type="number"
                            defaultValue="156"
                            className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                            style={commonInputStyle}
                            onChange={() => setHasChanges(true)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Temps d&apos;expédition moyen</label>
                          <input
                            type="text"
                            defaultValue="24h"
                            className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                            style={commonInputStyle}
                            onChange={() => setHasChanges(true)}
                          />
                        </div>
                      </div>
                      
                      {/* Badges de Vente */}
                      <div>
                        <h3 className="font-semibold mb-3" style={{ color: TEXT_COLORS.PRIMARY }}>🏆 Badges de Vente</h3>
                        <div className="space-y-2">
                          {[
                            { id: 'verified', label: 'Vendeur vérifié', checked: true },
                            { id: 'secure', label: 'Paiement sécurisé', checked: true },
                            { id: 'fast', label: 'Envoi rapide garanti', checked: true },
                            { id: 'support', label: 'Service après-vente', checked: false }
                          ].map((badge) => (
                            <label key={badge.id} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                              <input
                                type="checkbox"
                                defaultChecked={badge.checked}
                                onChange={() => setHasChanges(true)}
                                className="w-4 h-4 text-blue-600 rounded"
                              />
                              <span style={{ color: TEXT_COLORS.PRIMARY }}>{badge.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet Services */}
              {activeTab === "services" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-['Manrope:Bold',_sans-serif]" style={themeStyles.textPrimaryStyle}>
                        Gérer vos services
                      </h2>
                      <button 
                        className="px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        style={{
                          backgroundColor: currentTheme.buttonPrimary,
                          color: TEXT_COLORS.WHITE
                        }}
                      >
                        <FaPlus className="w-4 h-4" style={{ color: 'inherit' }} />
                        Ajouter un service
                      </button>
                    </div>
                    <div className="space-y-4">
                      {profile.services.map((service) => (
                        <div key={service.id} className="border rounded-lg p-6 bg-white">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className={`font-semibold text-lg mb-2 ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{service.title}</h3>
                              <p className={`mb-4 ${themeStyles.textSecondary}`} style={themeStyles.textSecondaryStyle}>{service.description}</p>
                              <div className="flex items-center gap-4 text-sm">
                                <span className="text-2xl font-bold text-green-600">{service.price}</span>
                                <span className="text-gray-500">{service.duration}</span>
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                  {service.category}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <button
                                onClick={() => toggleVisibility('services', service.id)}
                                className={`p-2 rounded-lg transition-colors ${
                                  service.visible ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'
                                }`}
                              >
                                {service.visible ? <FaEye /> : <FaEyeSlash />}
                              </button>
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                <FaEdit />
                              </button>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Section À propos des Services */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass} mt-4`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={{ color: TEXT_COLORS.PRIMARY }}>
                      🔧 À propos des Services
                    </h2>
                    
                    <div className="space-y-4">
                      {/* Modalités de Service */}
                      <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border-l-4 border-green-500">
                        <h3 className="font-semibold text-green-700 mb-3">🎯 Modalités de Service</h3>
                        <div className="space-y-2">
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Types d&apos;intervention</label>
                            <textarea
                              defaultValue="Présentiel: Interventions directes chez le client\nVisioconférence: Sessions à distance via Zoom/Teams\nSupport hybrid: Combinaison présentiel + distanciel"
                              rows={3}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonTextareaStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Expertise & Qualité */}
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                        <h3 className="font-semibold text-blue-700 mb-3">⭐ Expertise & Qualité</h3>
                        <div className="space-y-2">
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Certification</label>
                            <input
                              type="text"
                              defaultValue="Expert agréé en développement web"
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Années d&apos;expérience</label>
                            <input
                              type="number"
                              defaultValue="5"
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Section Badges Gagnés */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass} mt-4`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={{ color: TEXT_COLORS.PRIMARY }}>
                      🏅 Badges Gagnés
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profile.badges.map((badge) => {
                        const Icon = badge.icon;
                        return (
                          <div key={badge.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <Icon className={`w-5 h-5 ${badge.color}`} />
                                <div>
                                  <h3 className="font-semibold" style={{ color: TEXT_COLORS.PRIMARY }}>{badge.name}</h3>
                                  <p className="text-sm" style={{ color: TEXT_COLORS.SECONDARY }}>{badge.description}</p>
                                </div>
                              </div>
                              <button
                                onClick={() => toggleVisibility('badges', badge.id)}
                                className="p-2 rounded-lg transition-colors"
                                style={{
                                  color: badge.visible ? currentTheme.accentColor : TEXT_COLORS.SECONDARY,
                                  backgroundColor: 'transparent'
                                }}
                              >
                                {badge.visible ? <FaEye /> : <FaEyeSlash />}
                              </button>
                            </div>
                            <div className="text-xs" style={{ color: TEXT_COLORS.SECONDARY }}>
                              Gagné le {new Date(badge.earned).toLocaleDateString('fr-FR')} - Niveau {badge.level}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Section Zones de Déplacement */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass} mt-4`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={{ color: TEXT_COLORS.PRIMARY }}>
                      📍 Zones de Déplacement
                    </h2>
                    
                    <div className="space-y-3">
                      {profile.travelZones.map((zone) => (
                        <div key={zone.id} className="p-4 border rounded-lg">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Zone</label>
                              <input
                                type="text"
                                defaultValue={zone.zone}
                                className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                style={commonInputStyle}
                                onChange={() => setHasChanges(true)}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Type</label>
                              <select
                                defaultValue={zone.type}
                                className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                style={commonSelectStyle}
                                onChange={() => setHasChanges(true)}
                              >
                                <option value="Zone prioritaire">Zone prioritaire</option>
                                <option value="Zone régulière">Zone régulière</option>
                                <option value="Zone entreprise">Zone entreprise</option>
                                <option value="Zone étendue">Zone étendue</option>
                                <option value="Zone sur demande">Zone sur demande</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Distance</label>
                              <input
                                type="text"
                                defaultValue={zone.distance}
                                className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                style={commonInputStyle}
                                onChange={() => setHasChanges(true)}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Surcharge</label>
                              <input
                                type="text"
                                defaultValue={zone.surcharge}
                                className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                style={commonInputStyle}
                                onChange={() => setHasChanges(true)}
                              />
                            </div>
                          </div>
                          <div className="mt-3">
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Description</label>
                            <textarea
                              defaultValue={zone.description}
                              rows={2}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonTextareaStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <label className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                defaultChecked={zone.visible}
                                onChange={() => setHasChanges(true)}
                                className="w-4 h-4 text-blue-600 rounded"
                              />
                              <span style={{ color: TEXT_COLORS.PRIMARY }}>Zone visible sur le profil</span>
                            </label>
                            <button 
                              className="text-red-600 hover:bg-red-50 p-2 rounded"
                              onClick={() => setHasChanges(true)}
                            >
                              <FaTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                      
                      <button 
                        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                        style={{ color: TEXT_COLORS.SECONDARY }}
                        onClick={() => setHasChanges(true)}
                      >
                        <FaPlus className="w-4 h-4" />
                        Ajouter une zone de déplacement
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet Activités */}
              {activeTab === "activites" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-['Manrope:Bold',_sans-serif]" style={themeStyles.textPrimaryStyle}>
                        Gérer vos activités
                      </h2>
                      <button 
                        className="px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        style={{
                          backgroundColor: currentTheme.buttonPrimary,
                          color: TEXT_COLORS.WHITE
                        }}
                      >
                        <FaPlus className="w-4 h-4" style={{ color: 'inherit' }} />
                        Ajouter une activité
                      </button>
                    </div>
                    <div className="space-y-4">
                      {profile.activities.map((activity) => (
                        <div key={activity.id} className="border-l-4 border-purple-600 bg-white rounded-r-lg p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className={`font-semibold text-lg mb-2 ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{activity.title}</h3>
                              <p className={`mb-3 ${themeStyles.textSecondary}`} style={themeStyles.textSecondaryStyle}>{activity.description}</p>
                              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                <div>📅 {new Date(activity.date).toLocaleDateString('fr-FR')}</div>
                                <div>⏰ {activity.time}</div>
                                <div>📍 {activity.location}</div>
                                <div>👥 {activity.participants} participants</div>
                              </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <button
                                onClick={() => toggleVisibility('activities', activity.id)}
                                className={`p-2 rounded-lg transition-colors ${
                                  activity.visible ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'
                                }`}
                              >
                                {activity.visible ? <FaEye /> : <FaEyeSlash />}
                              </button>
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                <FaEdit />
                              </button>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Section Projets Réalisés */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass} mt-4`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={{ color: TEXT_COLORS.PRIMARY }}>
                      🏢 Projets Réalisés
                    </h2>
                    
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          title: "Plateforme E-commerce React",
                          description: "Application complète avec paiement en ligne et gestion des stocks",
                          technologies: "React, Node.js, MongoDB",
                          status: "Terminé"
                        },
                        {
                          id: 2,
                          title: "App Mobile de Livraison",
                          description: "Application iOS/Android avec géolocalisation temps réel",
                          technologies: "React Native, Firebase",
                          status: "Terminé"
                        }
                      ].map((project) => (
                        <div key={project.id} className="p-4 border rounded-lg">
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Titre du projet</label>
                              <input
                                type="text"
                                defaultValue={project.title}
                                className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                style={commonInputStyle}
                                onChange={() => setHasChanges(true)}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Description</label>
                              <textarea
                                defaultValue={project.description}
                                rows={2}
                                className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                style={commonTextareaStyle}
                                onChange={() => setHasChanges(true)}
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Technologies utilisées</label>
                                <input
                                  type="text"
                                  defaultValue={project.technologies}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonInputStyle}
                                  onChange={() => setHasChanges(true)}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Statut</label>
                                <select
                                  defaultValue={project.status}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonSelectStyle}
                                  onChange={() => setHasChanges(true)}
                                >
                                  <option value="Terminé">Terminé</option>
                                  <option value="En cours">En cours</option>
                                  <option value="En pause">En pause</option>
                                  <option value="Annulé">Annulé</option>
                                </select>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <button 
                                className="text-red-600 hover:bg-red-50 p-2 rounded flex items-center gap-1"
                                onClick={() => setHasChanges(true)}
                              >
                                <FaTrash className="w-4 h-4" />
                                Supprimer
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <button 
                        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                        style={{ color: TEXT_COLORS.SECONDARY }}
                        onClick={() => setHasChanges(true)}
                      >
                        <FaPlus className="w-4 h-4" />
                        Ajouter un projet
                      </button>
                    </div>
                  </div>
                  
                  {/* Section Mes Activités */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass} mt-4`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={{ color: TEXT_COLORS.PRIMARY }}>
                      📅 Mes Activités
                    </h2>
                    
                    <div className="space-y-4">
                      {profile.activities.map((activity) => (
                        <div key={activity.id} className="p-4 border rounded-lg">
                          <div className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Titre de l&apos;activité</label>
                                <input
                                  type="text"
                                  defaultValue={activity.title}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonInputStyle}
                                  onChange={() => setHasChanges(true)}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Type</label>
                                <select
                                  defaultValue={activity.type}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonSelectStyle}
                                  onChange={() => setHasChanges(true)}
                                >
                                  <option value="Événement">Événement</option>
                                  <option value="Formation">Formation</option>
                                  <option value="Conférence">Conférence</option>
                                  <option value="Workshop">Workshop</option>
                                  <option value="Meetup">Meetup</option>
                                </select>
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Description</label>
                              <textarea
                                defaultValue={activity.description}
                                rows={2}
                                className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                style={commonTextareaStyle}
                                onChange={() => setHasChanges(true)}
                              />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Date</label>
                                <input
                                  type="date"
                                  defaultValue={activity.date}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonInputStyle}
                                  onChange={() => setHasChanges(true)}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Heure</label>
                                <input
                                  type="text"
                                  defaultValue={activity.time}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonInputStyle}
                                  onChange={() => setHasChanges(true)}
                                  placeholder="19h00 - 22h00"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Lieu</label>
                                <input
                                  type="text"
                                  defaultValue={activity.location}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonInputStyle}
                                  onChange={() => setHasChanges(true)}
                                />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Nombre de participants</label>
                                <input
                                  type="number"
                                  defaultValue={activity.participants}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonInputStyle}
                                  onChange={() => setHasChanges(true)}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Statut</label>
                                <select
                                  defaultValue={activity.status}
                                  className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                                  style={commonSelectStyle}
                                  onChange={() => setHasChanges(true)}
                                >
                                  <option value="Organisateur">Organisateur</option>
                                  <option value="Speaker">Speaker</option>
                                  <option value="Formateur">Formateur</option>
                                  <option value="Participant">Participant</option>
                                </select>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <label className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  defaultChecked={activity.visible}
                                  onChange={() => setHasChanges(true)}
                                  className="w-4 h-4 text-blue-600 rounded"
                                />
                                <span style={{ color: TEXT_COLORS.PRIMARY }}>Activité visible sur le profil</span>
                              </label>
                              <button 
                                className="text-red-600 hover:bg-red-50 p-2 rounded flex items-center gap-1"
                                onClick={() => setHasChanges(true)}
                              >
                                <FaTrash className="w-4 h-4" />
                                Supprimer
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <button 
                        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                        style={{ color: TEXT_COLORS.SECONDARY }}
                        onClick={() => setHasChanges(true)}
                      >
                        <FaPlus className="w-4 h-4" />
                        Ajouter une activité
                      </button>
                    </div>
                  </div>
                  
                  {/* Section Visibilité des Contacts */}
                  <div className={`p-6 rounded-xl ${themeStyles.cardClass} mt-4`}>
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={{ color: TEXT_COLORS.PRIMARY }}>
                      📱 Visibilité des Contacts
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Contact Professionnel */}
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-indigo-700">Contact Professionnel</h3>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              defaultChecked={profile.contacts.professional.visible}
                              onChange={() => {
                                setProfile(prev => ({
                                  ...prev,
                                  contacts: {
                                    ...prev.contacts,
                                    professional: {
                                      ...prev.contacts.professional,
                                      visible: !prev.contacts.professional.visible
                                    }
                                  }
                                }));
                                setHasChanges(true);
                              }}
                              className="w-4 h-4 text-blue-600 rounded"
                            />
                            <span className="text-sm" style={{ color: TEXT_COLORS.PRIMARY }}>Visible sur le profil</span>
                          </label>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Email professionnel</label>
                            <input
                              type="email"
                              defaultValue={profile.contacts.professional.email}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Téléphone professionnel</label>
                            <input
                              type="tel"
                              defaultValue={profile.contacts.professional.phone}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>LinkedIn</label>
                            <input
                              type="url"
                              defaultValue={profile.contacts.professional.linkedin}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Site web</label>
                            <input
                              type="url"
                              defaultValue={profile.contacts.professional.website}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Contact Personnel */}
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-green-700">Contact Personnel</h3>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              defaultChecked={profile.contacts.personal.visible}
                              onChange={() => {
                                setProfile(prev => ({
                                  ...prev,
                                  contacts: {
                                    ...prev.contacts,
                                    personal: {
                                      ...prev.contacts.personal,
                                      visible: !prev.contacts.personal.visible
                                    }
                                  }
                                }));
                                setHasChanges(true);
                              }}
                              className="w-4 h-4 text-green-600 rounded"
                            />
                            <span className="text-sm" style={{ color: TEXT_COLORS.PRIMARY }}>Visible sur le profil</span>
                          </label>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Email personnel</label>
                            <input
                              type="email"
                              defaultValue={profile.contacts.personal.email}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Téléphone personnel</label>
                            <input
                              type="tel"
                              defaultValue={profile.contacts.personal.phone}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Réseaux Sociaux */}
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-purple-700">Réseaux Sociaux</h3>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              defaultChecked={profile.contacts.social.visible}
                              onChange={() => {
                                setProfile(prev => ({
                                  ...prev,
                                  contacts: {
                                    ...prev.contacts,
                                    social: {
                                      ...prev.contacts.social,
                                      visible: !prev.contacts.social.visible
                                    }
                                  }
                                }));
                                setHasChanges(true);
                              }}
                              className="w-4 h-4 text-purple-600 rounded"
                            />
                            <span className="text-sm" style={{ color: TEXT_COLORS.PRIMARY }}>Visible sur le profil</span>
                          </label>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Twitter</label>
                            <input
                              type="text"
                              defaultValue={profile.contacts.social.twitter}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                              placeholder="@username"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Instagram</label>
                            <input
                              type="text"
                              defaultValue={profile.contacts.social.instagram}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                              placeholder="@username"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Facebook</label>
                            <input
                              type="text"
                              defaultValue={profile.contacts.social.facebook}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Disponibilité */}
                      <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-yellow-700">Disponibilité</h3>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              defaultChecked={profile.contacts.availability.visible}
                              onChange={() => {
                                setProfile(prev => ({
                                  ...prev,
                                  contacts: {
                                    ...prev.contacts,
                                    availability: {
                                      ...prev.contacts.availability,
                                      visible: !prev.contacts.availability.visible
                                    }
                                  }
                                }));
                                setHasChanges(true);
                              }}
                              className="w-4 h-4 text-yellow-600 rounded"
                            />
                            <span className="text-sm" style={{ color: TEXT_COLORS.PRIMARY }}>Visible sur le profil</span>
                          </label>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Statut de disponibilité</label>
                            <input
                              type="text"
                              defaultValue={profile.contacts.availability.status}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                              placeholder="Disponible pour nouveaux projets"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1" style={{ color: TEXT_COLORS.PRIMARY }}>Temps de réponse moyen</label>
                            <input
                              type="text"
                              defaultValue={profile.contacts.availability.responseTime}
                              className={`w-full px-3 py-2 rounded-lg focus:ring-2 ${themeStyles.inputClass}`}
                              style={commonInputStyle}
                              onChange={() => setHasChanges(true)}
                              placeholder="24h en moyenne"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet Contacts */}
              {activeTab === "contacts" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={themeStyles.textPrimaryStyle}>
                      Informations de contact
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Contact Professionnel */}
                      <div className="border rounded-lg p-4 bg-white">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-indigo-600">Contact Professionnel</h3>
                          <button
                            onClick={() => {
                              setProfile(prev => ({
                                ...prev,
                                contacts: {
                                  ...prev.contacts,
                                  professional: {
                                    ...prev.contacts.professional,
                                    visible: !prev.contacts.professional.visible
                                  }
                                }
                              }));
                              setHasChanges(true);
                            }}
                            className={`p-2 rounded-lg transition-colors ${
                              profile.contacts.professional.visible ? 'text-green-600' : 'text-gray-400'
                            }`}
                          >
                            {profile.contacts.professional.visible ? <FaEye /> : <FaEyeSlash />}
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                              type="email"
                              value={profile.contacts.professional.email}
                              onChange={(e) => setProfile(prev => ({
                                ...prev,
                                contacts: {
                                  ...prev.contacts,
                                  professional: {
                                    ...prev.contacts.professional,
                                    email: e.target.value
                                  }
                                }
                              }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              style={commonInputStyle}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                            <input
                              type="tel"
                              value={profile.contacts.professional.phone}
                              onChange={(e) => setProfile(prev => ({
                                ...prev,
                                contacts: {
                                  ...prev.contacts,
                                  professional: {
                                    ...prev.contacts.professional,
                                    phone: e.target.value
                                  }
                                }
                              }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              style={commonInputStyle}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                            <input
                              type="url"
                              value={profile.contacts.professional.linkedin}
                              onChange={(e) => setProfile(prev => ({
                                ...prev,
                                contacts: {
                                  ...prev.contacts,
                                  professional: {
                                    ...prev.contacts.professional,
                                    linkedin: e.target.value
                                  }
                                }
                              }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              style={commonInputStyle}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Site Web</label>
                            <input
                              type="url"
                              value={profile.contacts.professional.website}
                              onChange={(e) => setProfile(prev => ({
                                ...prev,
                                contacts: {
                                  ...prev.contacts,
                                  professional: {
                                    ...prev.contacts.professional,
                                    website: e.target.value
                                  }
                                }
                              }))}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              style={commonInputStyle}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet Confidentialité */}
              {activeTab === "confidentialite" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] mb-4" style={themeStyles.textPrimaryStyle}>
                      Paramètres de confidentialité
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Visibilité du profil */}
                      <div className="border rounded-lg p-4 bg-white">
                        <h3 className={`font-semibold mb-3 ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>Visibilité du profil</h3>
                        <div className="space-y-2">
                          {[
                            { value: 'public', label: 'Public - Visible par tous' },
                            { value: 'friends', label: 'Amis uniquement' },
                            { value: 'private', label: 'Privé - Uniquement moi' }
                          ].map((option) => (
                            <label key={option.value} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                              <input
                                type="radio"
                                name="profileVisibility"
                                value={option.value}
                                checked={profile.profileSettings.profileVisibility === option.value}
                                onChange={(e) => {
                                  setProfile(prev => ({
                                    ...prev,
                                    profileSettings: {
                                      ...prev.profileSettings,
                                      profileVisibility: e.target.value as 'public' | 'friends' | 'private'
                                    }
                                  }));
                                  setHasChanges(true);
                                }}
                                className="w-4 h-4 text-blue-600"
                              />
                              <span className={`font-medium ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Sections visibles */}
                      <div className="border rounded-lg p-4 bg-white">
                        <h3 className={`font-semibold mb-3 ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>Sections visibles sur le profil</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { key: 'showBadges', label: 'Badges' },
                            { key: 'showLocation', label: 'Localisation' },
                            { key: 'showContacts', label: 'Informations de contact' },
                            { key: 'showProducts', label: 'Produits' },
                            { key: 'showServices', label: 'Services' },
                            { key: 'showActivities', label: 'Activités' },
                            { key: 'showPosts', label: 'Publications' }
                          ].map((setting) => (
                            <label key={setting.key} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                              <input
                                type="checkbox"
                                checked={profile.profileSettings[setting.key as keyof typeof profile.profileSettings] as boolean}
                                onChange={(e) => {
                                  setProfile(prev => ({
                                    ...prev,
                                    profileSettings: {
                                      ...prev.profileSettings,
                                      [setting.key]: e.target.checked
                                    }
                                  }));
                                  setHasChanges(true);
                                }}
                                className="w-4 h-4 text-blue-600 rounded"
                              />
                              <span className={`${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{setting.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet Thème */}
              {activeTab === "theme" && (
                <div className="space-y-4">
                  <ThemeEditor profileId={slug} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Fixed save notification */}
        {hasChanges && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            <div className="flex items-center gap-2">
              <span>Modifications non sauvegardées</span>
              <button
                onClick={handleSave}
                className="bg-white text-orange-500 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileEdit;