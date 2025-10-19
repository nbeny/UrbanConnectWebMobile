"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { NextPage } from "next";
import { FaUserFriends, FaComment, FaShare, FaThumbsUp, FaPlus, FaChevronLeft, FaChevronRight, FaSave, FaTimes, FaEye, FaEyeSlash, FaEdit, FaTrash } from "react-icons/fa";
import { Package, Wrench, Calendar, Phone, Mail, MapPin, Star, Users, Clock, Building2, Award, Trophy, Medal, Target, Shield, Zap, Map, Camera, Upload } from "lucide-react";
import urbanBackground from "@/assets/urbanconnectBackground.png";

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
    icon: any;
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("general");
  const [editingField, setEditingField] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

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
    { id: "confidentialite", label: "Confidentialité", icon: Shield }
  ];

  // Find current profile based on slug
  const slug = params?.slug as string;

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

  const updateProfile = (field: string, value: any) => {
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

  return (
    <>
      {/* Injection des styles CSS */}
      <style jsx global>{scrollbarHideStyles}</style>
      
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src={urbanBackground}
            alt="Urban Connect Background"
            fill
            className="object-cover object-center"
          />
        </div>
        
        {/* Content with scroll */}
        <div className="relative z-[1] h-full overflow-y-auto p-4 md:p-6">
          
          {/* Header avec boutons de sauvegarde */}
          <div className="flex justify-between items-center mb-4 bg-white/90 backdrop-blur-lg p-4 rounded-xl border border-white/20">
            <h1 className="text-2xl font-['Manrope:Bold',_sans-serif] text-[#333333]">
              Éditer le profil
            </h1>
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-colors flex items-center gap-2"
              >
                <FaTimes className="w-4 h-4" />
                Annuler
              </button>
              <button
                onClick={handleSave}
                className={`px-4 py-2 rounded-xl transition-colors flex items-center gap-2 ${
                  hasChanges 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!hasChanges}
              >
                <FaSave className="w-4 h-4" />
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
                    className="text-3xl font-['Manrope:Bold',_sans-serif] text-[#333333] bg-white border border-blue-300 rounded px-2 py-1"
                    autoFocus
                  />
                ) : (
                  <h1 
                    className="text-3xl font-['Manrope:Bold',_sans-serif] text-[#333333] cursor-pointer hover:bg-blue-50 px-2 py-1 rounded"
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
                    className="font-['Manrope:Regular',_sans-serif] text-[#999999] bg-white border border-blue-300 rounded px-2 py-1 w-full"
                    autoFocus
                  />
                ) : (
                  <p 
                    className="font-['Manrope:Regular',_sans-serif] text-[#999999] cursor-pointer hover:bg-blue-50 px-2 py-1 rounded"
                    onClick={() => setEditingField('bio')}
                  >
                    {profile.bio} <FaEdit className="inline w-3 h-3 ml-1 opacity-50" />
                  </p>
                )}
              </div>
            </div>

            {/* Menu navigation */}
            <div className="mt-6 backdrop-blur-lg bg-white/30 p-3 md:p-4 rounded-xl border border-white/20">
              <div className="border-b">
                <div className="flex flex-wrap gap-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`px-4 py-2 font-['Manrope:Medium',_sans-serif] text-sm transition-colors text-center rounded-lg flex items-center gap-2 ${
                          activeTab === item.id
                            ? "text-[#4a90e2] bg-white/60 shadow-sm"
                            : "text-[#333333] hover:text-[#4a90e2] hover:bg-white/30"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
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
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333] mb-4">
                      Informations personnelles
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                        <input
                          type="text"
                          value={profile.city}
                          onChange={(e) => updateProfile('city', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
                        <input
                          type="text"
                          value={profile.work}
                          onChange={(e) => updateProfile('work', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Formation</label>
                        <input
                          type="text"
                          value={profile.education}
                          onChange={(e) => updateProfile('education', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Badges avec contrôles de visibilité */}
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333] mb-4">
                      Badges
                    </h2>
                    <div className="space-y-3">
                      {profile.badges.map((badge) => {
                        const Icon = badge.icon;
                        return (
                          <div key={badge.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Icon className={`w-5 h-5 ${badge.color}`} />
                              <div>
                                <h3 className="font-semibold">{badge.name}</h3>
                                <p className="text-sm text-gray-600">{badge.description}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleVisibility('badges', badge.id)}
                              className={`p-2 rounded-lg transition-colors ${
                                badge.visible ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'
                              }`}
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
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333] mb-4">
                      Gérer vos publications
                    </h2>
                    <div className="space-y-3">
                      {profile.posts.map((post) => (
                        <div key={post.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 mb-1">{post.content}</p>
                            <p className="text-sm text-gray-500">{post.date}</p>
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
                      <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333]">
                        Gérer vos produits
                      </h2>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <FaPlus className="w-4 h-4" />
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
                            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
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
                </div>
              )}

              {/* Onglet Services */}
              {activeTab === "services" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333]">
                        Gérer vos services
                      </h2>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                        <FaPlus className="w-4 h-4" />
                        Ajouter un service
                      </button>
                    </div>
                    <div className="space-y-4">
                      {profile.services.map((service) => (
                        <div key={service.id} className="border rounded-lg p-6 bg-white">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                              <p className="text-gray-600 mb-4">{service.description}</p>
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
                </div>
              )}

              {/* Onglet Activités */}
              {activeTab === "activites" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333]">
                        Gérer vos activités
                      </h2>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                        <FaPlus className="w-4 h-4" />
                        Ajouter une activité
                      </button>
                    </div>
                    <div className="space-y-4">
                      {profile.activities.map((activity) => (
                        <div key={activity.id} className="border-l-4 border-purple-600 bg-white rounded-r-lg p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
                              <p className="text-gray-600 mb-3">{activity.description}</p>
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
                </div>
              )}

              {/* Onglet Contacts */}
              {activeTab === "contacts" && (
                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333] mb-4">
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
                    <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333] mb-4">
                      Paramètres de confidentialité
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Visibilité du profil */}
                      <div className="border rounded-lg p-4 bg-white">
                        <h3 className="font-semibold mb-3">Visibilité du profil</h3>
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
                              <span className="font-medium">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Sections visibles */}
                      <div className="border rounded-lg p-4 bg-white">
                        <h3 className="font-semibold mb-3">Sections visibles sur le profil</h3>
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
                              <span>{setting.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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