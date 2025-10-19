"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaUserFriends, FaComment, FaShare, FaThumbsUp } from "react-icons/fa";
import { Package, Wrench, Calendar, Phone, Mail, MapPin, Star, Users, Clock, Building2, Award, Trophy, Medal, Target, Shield, Zap, Map } from "lucide-react";
import urbanBackground from "@/assets/urbanconnectBackground.png";
import { useTheme, TEXT_COLORS } from '@/hooks/useTheme';

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

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("journal");
  const [activeContactMenu, setActiveContactMenu] = React.useState("contacts");
  
  // Utiliser le thème global (pas de profileId spécifique pour cette page)
  const { currentTheme, getThemeStyles } = useTheme();
  const themeStyles = getThemeStyles();

  const user = {
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
        level: "Gold"
      },
      {
        id: 2,
        name: "Expert Tech",
        description: "Services tech très bien notés",
        icon: Zap,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        earned: "2025-08-20",
        level: "Platinum"
      },
      {
        id: 3,
        name: "Mentor Communautaire",
        description: "A aidé plus de 100 utilisateurs",
        icon: Users,
        color: "text-green-600",
        bgColor: "bg-green-100",
        earned: "2025-07-10",
        level: "Gold"
      },
      {
        id: 4,
        name: "Organisateur d'Événements",
        description: "A organisé 10+ événements",
        icon: Calendar,
        color: "text-purple-600",
        bgColor: "bg-purple-100",
        earned: "2025-06-05",
        level: "Silver"
      },
      {
        id: 5,
        name: "Top Contributeur",
        description: "Dans le top 5% des contributeurs",
        icon: Trophy,
        color: "text-orange-600",
        bgColor: "bg-orange-100",
        earned: "2025-10-01",
        level: "Diamond"
      },
      {
        id: 6,
        name: "Écologique",
        description: "Promeut les solutions durables",
        icon: Award,
        color: "text-green-700",
        bgColor: "bg-green-50",
        earned: "2025-05-20",
        level: "Gold"
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
        description: "Zone de prédilection pour tous types de services"
      },
      {
        id: 2,
        zone: "Paris Rive Gauche (5ème-7ème)",
        type: "Zone régulière",
        distance: "3-8 km",
        travelTime: "20-40 min",
        transportModes: ["Métro", "Bus", "Vélo"],
        services: ["Développement", "Design", "Consultation"],
        availability: "Lun-Ven",
        surcharge: "Gratuit",
        description: "Disponible pour projets professionnels en semaine"
      },
      {
        id: 3,
        zone: "La Défense & Ouest parisien",
        type: "Zone entreprise",
        distance: "15-25 km",
        travelTime: "30-60 min",
        transportModes: ["RER", "Voiture"],
        services: ["Consultation", "Formation", "Audit"],
        availability: "Sur RDV",
        surcharge: "+15€",
        description: "Spécialisé dans les missions en entreprise"
      },
      {
        id: 4,
        zone: "Petite Couronne (92, 93, 94)",
        type: "Zone étendue",
        distance: "10-20 km",
        travelTime: "40-80 min",
        transportModes: ["Métro", "RER", "Bus"],
        services: ["Formation", "Dépannage", "Installation"],
        availability: "Mar-Sam",
        surcharge: "+10€",
        description: "Interventions techniques et formations à domicile"
      },
      {
        id: 5,
        zone: "Grande Couronne (78, 91, 95)",
        type: "Zone sur demande",
        distance: "25-50 km",
        travelTime: "60-120 min",
        transportModes: ["Voiture", "Train"],
        services: ["Projets longue durée", "Formation groupe"],
        availability: "Sur devis",
        surcharge: "+30€ + frais",
        description: "Uniquement pour projets importants ou formations groupe"
      }
    ],
    currentLocation: {
      latitude: 48.8566,
      longitude: 2.3522,
      address: "Paris 15ème, France",
      precision: "Quartier",
      lastUpdated: "2025-10-18T20:22:00Z"
    },
    stories: [
      { id: 1, name: "Alice", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
      { id: 2, name: "Bob", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
      { id: 3, name: "Charlie", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
    ],
    posts: [
      { id: 1, content: "Hello world!", date: "18 Oct 2025", image: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg", likes: 12, comments: 4, shares: 2 },
      { id: 2, content: "Learning Next.js and Tailwind.", date: "17 Oct 2025", likes: 8, comments: 2, shares: 1 },
      { id: 3, content: "Check out this view!", date: "16 Oct 2025", image: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg", likes: 20, comments: 5, shares: 3 },
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
        location: "Paris 15ème"
      },
      {
        id: 2,
        name: "iPhone 15 Pro",
        price: "1,199€",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
        description: "Smartphone dernière génération avec appareil photo professionnel",
        category: "Mobile",
        condition: "Excellent état",
        location: "Paris 15ème"
      },
      {
        id: 3,
        name: "Vélo Électrique Urbain",
        price: "899€",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop",
        description: "Parfait pour les trajets quotidiens en ville",
        category: "Transport",
        condition: "Très bon état",
        location: "Paris 15ème"
      },
      {
        id: 4,
        name: "Appareil Photo Canon EOS",
        price: "650€",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop",
        description: "Idéal pour la photographie amateur et semi-pro",
        category: "Photo",
        condition: "Bon état",
        location: "Paris 15ème"
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
        completedProjects: 25
      },
      {
        id: 2,
        title: "Design UI/UX",
        description: "Conception d'interfaces utilisateur modernes et responsive",
        price: "45€/h",
        duration: "Projet: 1-4 semaines",
        category: "Design",
        rating: 4.8,
        completedProjects: 18
      },
      {
        id: 3,
        title: "Consultation Tech",
        description: "Conseils techniques et audit de projets digitaux",
        price: "80€/h",
        duration: "Séance: 1-3h",
        category: "Consulting",
        rating: 5.0,
        completedProjects: 12
      },
      {
        id: 4,
        title: "Formation Développement",
        description: "Cours particuliers ou en groupe sur les technologies web",
        price: "40€/h",
        duration: "Cours: 1-2h",
        category: "Formation",
        rating: 4.9,
        completedProjects: 30
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
        description: "Présentation des nouvelles features de React 19"
      },
      {
        id: 2,
        title: "Hackathon UrbanTech",
        type: "Compétition",
        date: "2025-10-30",
        time: "9h00 - 21h00",
        location: "Halle Freyssinet, Paris",
        participants: 120,
        status: "Participant",
        description: "48h pour créer une solution tech urbaine innovante"
      },
      {
        id: 3,
        title: "Workshop Design System",
        type: "Formation",
        date: "2025-11-05",
        time: "14h00 - 18h00",
        location: "Le Wagon, Paris",
        participants: 25,
        status: "Formateur",
        description: "Création et maintenance de design systems"
      },
      {
        id: 4,
        title: "Conférence Web Summit",
        type: "Conférence",
        date: "2025-11-12",
        time: "9h00 - 17h00",
        location: "Palais des Congrès, Paris",
        participants: 500,
        status: "Speaker",
        description: "Talk sur l'avenir du développement web"
      }
    ],
    contacts: {
      professional: {
        email: "john.doe.pro@email.com",
        phone: "+33 6 12 34 56 78",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe",
        website: "johndoe-dev.fr"
      },
      personal: {
        email: "john.doe@email.com",
        phone: "+33 6 12 34 56 79"
      },
      social: {
        twitter: "@johndoe_dev",
        instagram: "@johncode",
        facebook: "John Doe"
      },
      availability: {
        status: "Disponible pour nouveaux projets",
        preferredContact: "Email professionnel",
        responseTime: "24h en moyenne"
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
        type: "professional"
      },
      {
        id: 2,
        name: "Pierre Martin",
        status: "Hors ligne",
        avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        lastMessage: "À bientôt pour la réunion",
        timestamp: "Il y a 2h",
        type: "professional"
      },
      {
        id: 3,
        name: "Sophie Laurent",
        status: "En ligne",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        lastMessage: "Super présentation aujourd'hui",
        timestamp: "Il y a 1h",
        type: "client"
      },
      {
        id: 4,
        name: "Jean Dupont",
        status: "Absent",
        avatar: "https://images.pexels.com/photos/1108094/pexels-photo-1108094.jpeg",
        lastMessage: "Je regarde le devis et je reviens vers toi",
        timestamp: "Hier",
        type: "client"
      }
    ],
    blockedContacts: [
      {
        id: 1,
        name: "Utilisateur Indésirable",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        reason: "Spam répétitif",
        blockedDate: "2025-10-15"
      },
      {
        id: 2,
        name: "Compte Suspect",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        reason: "Comportement inapproprié",
        blockedDate: "2025-10-10"
      }
    ]
  };

  const menuItems = [
    { id: "journal", label: "Journal" },
    { id: "produits", label: "Produits" },
    { id: "services", label: "Services" },
    { id: "activites", label: "Activités" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <>
      {/* Injection des styles CSS */}
      <style jsx global>{scrollbarHideStyles}</style>
      
      <div className="relative w-screen h-screen overflow-hidden" style={themeStyles}>
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
      {/* Cover photo */}
      <div className="relative h-64 bg-gray-300 rounded-xl overflow-hidden">
        <Image src={user.coverPhoto} alt="Cover" fill className="object-cover" />
      </div>

      {/* Profile header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative -mt-20 flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-40 h-40 border-4 border-white rounded-full overflow-hidden shadow">
            <Image
              src={user.profilePhoto}
              alt="Avatar"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className={`text-3xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{user.name}</h1>
            <p className={`font-['Manrope:Regular',_sans-serif] ${themeStyles.textSecondary}`} style={themeStyles.textSecondaryStyle}>{user.bio}</p>
          </div>
        </div>

        {/* Stories and Recent Activities Layout */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          {/* Stories */}
          <div className={`flex-1 p-4 rounded-xl ${themeStyles.cardClass}`}>
            <div className="overflow-x-auto flex space-x-4">
              {user.stories.map((story) => (
                <div key={story.id} className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 md:w-20 h-16 md:h-20 rounded-full overflow-hidden border-2" style={{ borderColor: currentTheme.accentColor }}>
                    <Image src={story.avatar} alt={story.name} width={80} height={80} className="object-cover" />
                  </div>
                  <p className={`text-xs md:text-sm mt-1 text-center ${themeStyles.textSecondary}`}>{story.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activities */}
          <div className={`md:w-80 p-4 rounded-xl ${themeStyles.cardClass}`}>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-3 flex items-center text-purple-700">
                <Target className="w-4 h-4 mr-2" />
                Activités Récentes
              </h3>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-gray-600">En ligne maintenant</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Calendar className="w-3 h-3 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">{user.activities.length} événements à venir</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Package className="w-3 h-3 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-600">{user.products.length} produits actifs</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Wrench className="w-3 h-3 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-600">{user.services.length} services disponibles</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Trophy className="w-3 h-3 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-600">{user.badges.length} badges gagnés</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu navigation */}
        <div className={`mt-6 p-3 md:p-4 rounded-xl ${themeStyles.cardClass}`}>
          <div className="border-b border-opacity-20" style={{ borderColor: currentTheme.primaryText }}>
            <div className="grid grid-cols-5 gap-1 md:flex md:space-x-2 md:gap-0">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-2 md:px-6 py-2 md:py-3 font-['Manrope:Medium',_sans-serif] text-xs md:text-base transition-colors text-center ${
                    activeTab === item.id ? 'shadow-sm' : 'hover:bg-gray-100/20'
                  }`}
                  style={{
                    color: activeTab === item.id 
                      ? currentTheme.accentColor 
                      : TEXT_COLORS.PRIMARY,
                    backgroundColor: activeTab === item.id 
                      ? (currentTheme.isDark ? 'rgba(75, 85, 99, 0.4)' : 'rgba(255, 255, 255, 0.6)')
                      : 'transparent',
                    borderBottomColor: activeTab === item.id ? currentTheme.accentColor : 'transparent',
                    borderBottomWidth: activeTab === item.id ? '2px' : '0px'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-6">
          {activeTab === "activites" ? (
            // Layout spécial pour Activités (2 colonnes)
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Projets réalisés à gauche */}
              <div className="space-y-4">
                <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                    <h3 className={`text-xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary} mb-4 flex items-center`} style={themeStyles.textPrimaryStyle}>
                    <Building2 className="mr-2 text-green-600" /> Projets Réalisés
                  </h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-2">Plateforme E-commerce React</h4>
                      <p className="text-gray-600 text-sm mb-3">Application complète avec paiement en ligne et gestion des stocks</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-600 font-medium">React, Node.js, MongoDB</span>
                        <span className="text-green-600">Terminé</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-2">App Mobile de Livraison</h4>
                      <p className="text-gray-600 text-sm mb-3">Application iOS/Android avec géolocalisation temps réel</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-600 font-medium">React Native, Firebase</span>
                        <span className="text-green-600">Terminé</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-2">Dashboard Analytics</h4>
                      <p className="text-gray-600 text-sm mb-3">Interface de visualisation de données pour startup</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-600 font-medium">Vue.js, Python, PostgreSQL</span>
                        <span className="text-orange-600">En cours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Activités à droite */}
              <div className="space-y-4">
                <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                  <h3 className={`text-xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary} mb-4 flex items-center`} style={themeStyles.textPrimaryStyle}>
                    <Calendar className="mr-2 text-purple-600" /> Mes Activités
                  </h3>
                  <div className="space-y-4">
                    {user.activities.map((activity) => (
                      <div key={activity.id} className="border-l-4 border-purple-600 bg-gray-50 rounded-r-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg">{activity.title}</h4>
                          <div className="flex gap-2">
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                              {activity.type}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              activity.status === 'Organisateur' ? 'bg-blue-100 text-blue-700' :
                              activity.status === 'Speaker' ? 'bg-green-100 text-green-700' :
                              activity.status === 'Formateur' ? 'bg-orange-100 text-orange-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {activity.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{activity.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(activity.date).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {activity.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {activity.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {activity.participants} participants
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === "contacts" ? (
            // Layout spécial pour Contacts (2 colonnes)
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Menu contact à gauche */}
              <div className="space-y-4">
                <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                  <h3 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333] mb-4 flex items-center">
                    <Phone className="mr-2 text-indigo-600" /> Menu Contact
                  </h3>
                  <div className="space-y-2">
                    <button 
                      onClick={() => setActiveContactMenu("contacts")}
                      className={`w-full p-3 text-left rounded-lg transition-colors ${
                        activeContactMenu === "contacts" 
                          ? "bg-blue-50 border border-blue-200 hover:bg-blue-100" 
                          : "bg-gray-50 border rounded-lg hover:bg-gray-100"
                      }`}
                    >
                      <div className={`font-semibold ${
                        activeContactMenu === "contacts" ? "text-blue-700" : "text-gray-700"
                      }`}>Contacts</div>
                      <div className={`text-sm ${
                        activeContactMenu === "contacts" ? "text-blue-600" : "text-gray-600"
                      }`}>Liste de contacts ({user.contactsList.length})</div>
                    </button>
                    <button 
                      onClick={() => setActiveContactMenu("blocked")}
                      className={`w-full p-3 text-left rounded-lg transition-colors ${
                        activeContactMenu === "blocked" 
                          ? "bg-red-50 border border-red-200 hover:bg-red-100" 
                          : "bg-gray-50 border rounded-lg hover:bg-gray-100"
                      }`}
                    >
                      <div className={`font-semibold ${
                        activeContactMenu === "blocked" ? "text-red-700" : "text-gray-700"
                      }`}>Contacts Bloqués</div>
                      <div className={`text-sm ${
                        activeContactMenu === "blocked" ? "text-red-600" : "text-gray-600"
                      }`}>Gestion des utilisateurs bloqués ({user.blockedContacts.length})</div>
                    </button>
                  </div>
                </div>
                
                {/* Informations de Contact - en dessous du menu */}
                <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                  <h3 className={`text-xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary} mb-4 flex items-center`} style={themeStyles.textPrimaryStyle}>
                    <Mail className="mr-2 text-indigo-600" /> Informations de Contact
                  </h3>
                  
                  {/* Professional Contacts */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-md mb-2 text-indigo-600">Contact Professionnel</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-600">{user.contacts.professional.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-600">{user.contacts.professional.phone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h4 className="font-semibold text-md mb-2 text-green-600">Disponibilité</h4>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-green-700 text-sm">{user.contacts.availability.status}</span>
                      </div>
                      <div className="text-xs text-green-600">
                        <div>Temps de réponse: {user.contacts.availability.responseTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenu variable selon le menu sélectionné */}
              <div className="space-y-4">
                {activeContactMenu === "contacts" && (
                  <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                    <h3 className={`text-xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary} mb-4 flex items-center`} style={themeStyles.textPrimaryStyle}>
                      <Users className="mr-2 text-blue-600" /> Mes Contacts
                    </h3>
                    
                    {/* Liste des contacts */}
                    <div className="space-y-3">
                      {user.contactsList.map((contact) => (
                        <div key={contact.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <Image src={contact.avatar} alt={contact.name} width={48} height={48} className="object-cover" />
                            </div>
                            {/* Status indicator */}
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                              contact.status === 'En ligne' ? 'bg-green-500' :
                              contact.status === 'Absent' ? 'bg-yellow-500' :
                              'bg-gray-400'
                            }`}></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-gray-900 truncate">{contact.name}</h4>
                              <span className="text-xs text-gray-500">{contact.timestamp}</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                contact.type === 'professional' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                              }`}>
                                {contact.type === 'professional' ? 'Professionnel' : 'Client'}
                              </span>
                              <span className={`text-xs ${
                                contact.status === 'En ligne' ? 'text-green-600' :
                                contact.status === 'Absent' ? 'text-yellow-600' :
                                'text-gray-500'
                              }`}>
                                {contact.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                              <Mail className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                              <Phone className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Actions */}
                    <div className="mt-4 flex gap-2">
                      <button 
                        className="flex-1 py-2 rounded-xl transition-colors text-sm font-['Manrope:Medium',_sans-serif]"
                        style={{
                          backgroundColor: currentTheme.buttonPrimary,
                          color: '#ffffff'
                        }}
                      >
                        Ajouter un contact
                      </button>
                      <button 
                        className="flex-1 py-2 rounded-xl transition-colors text-sm font-['Manrope:Medium',_sans-serif]"
                        style={{
                          backgroundColor: currentTheme.buttonSecondary,
                          color: '#1f2937' // Toujours noir
                        }}
                      >
                        Rechercher
                      </button>
                    </div>
                  </div>
                )}
                
                {activeContactMenu === "blocked" && (
                  <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                    <h3 className={`text-xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary} mb-4 flex items-center`} style={themeStyles.textPrimaryStyle}>
                      <Shield className="mr-2 text-red-600" /> Contacts Bloqués
                    </h3>
                    
                    {user.blockedContacts.length > 0 ? (
                      <div className="space-y-3">
                        {user.blockedContacts.map((contact) => (
                          <div key={contact.id} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <Image src={contact.avatar} alt={contact.name} width={48} height={48} className="object-cover grayscale" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 truncate">{contact.name}</h4>
                              <p className="text-sm text-red-600">Raison: {contact.reason}</p>
                              <p className="text-xs text-gray-500">Bloqué le {new Date(contact.blockedDate).toLocaleDateString('fr-FR')}</p>
                            </div>
                            <div className="flex gap-2">
                              <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                                Débloquer
                              </button>
                              <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">
                                Supprimer
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Aucun contact bloqué</p>
                        <p className="text-sm text-gray-400 mt-1">Les utilisateurs que vous bloquez apparaîtront ici</p>
                      </div>
                    )}
                    
                    {user.blockedContacts.length > 0 && (
                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-center gap-2 text-yellow-800">
                          <Target className="w-4 h-4" />
                          <span className="text-sm font-medium">Information</span>
                        </div>
                        <p className="text-xs text-yellow-700 mt-1">
                          Débloquer un contact lui permettra de vous contacter à nouveau.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Layout standard pour Journal, Produits et Services (3 colonnes)
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column */}
              <div className="space-y-4">
                {/* About Section - Contenu variable selon l'onglet */}
                <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl border border-white/20">
                  {/* Titre et contenu dynamique selon l'onglet actif */}
                  {activeTab === "journal" && (
                    <>
                      <h2 className={`font-['Manrope:Bold',_sans-serif] text-xl ${themeStyles.textPrimary} mb-4 flex items-center`} style={themeStyles.textPrimaryStyle}>
                        <Users className="mr-3 text-blue-600" /> À propos de moi
                      </h2>
                      {/* Bio/Description */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
                        <p className={`${themeStyles.textPrimary} leading-relaxed font-['Manrope:Regular',_sans-serif]`} style={themeStyles.textPrimaryStyle}>
                          Développeur web passionné avec plus de 5 ans d'expérience dans la création d'applications modernes. 
                          Spécialisé en React, Node.js et technologies cloud. J'accompagne les entreprises et particuliers 
                          dans leur transformation digitale avec des solutions sur-mesure et innovantes.
                        </p>
                      </div>
                    </>
                  )}
                  
                  {activeTab === "produits" && (
                    <>
                      <h2 className="font-['Manrope:Bold',_sans-serif] text-xl text-[#333333] mb-4 flex items-center">
                        <Package className="mr-3 text-blue-600" /> Informations de Vente
                      </h2>
                      {/* Informations sur les envois et ventes */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-4 border-green-500">
                        <h3 className="font-semibold text-green-700 mb-3">🚚 Modalités d'Envoi</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• <strong>Expédition:</strong> Sous 24h après confirmation du paiement</li>
                          <li>• <strong>Transporteurs:</strong> Colissimo, Chronopost, Mondial Relay</li>
                          <li>• <strong>Suivi:</strong> Numéro de suivi fourni automatiquement</li>
                          <li>• <strong>Emballage:</strong> Protection optimale garantie</li>
                        </ul>
                      </div>
                      
                      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                        <h3 className="font-semibold text-purple-700 mb-3">💬 Négociation & Prix</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• <strong>Prix:</strong> Négociable pour achats multiples</li>
                          <li>• <strong>Paiement:</strong> CB, PayPal, Virement, Espèces (remise en main propre)</li>
                          <li>• <strong>Garantie:</strong> Satisfait ou remboursé 14 jours</li>
                          <li>• <strong>SAV:</strong> Support technique inclus pour produits tech</li>
                        </ul>
                      </div>
                    </>
                  )}
                  
                  {activeTab === "services" && (
                    <>
                      <h2 className="font-['Manrope:Bold',_sans-serif] text-xl text-[#333333] mb-4 flex items-center">
                        <Wrench className="mr-3 text-green-600" /> À propos des Services
                      </h2>
                      {/* Informations sur les services */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border-l-4 border-green-500">
                        <h3 className="font-semibold text-green-700 mb-3">🎯 Modalités de Service</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• <strong>Présentiel:</strong> Interventions directes chez le client</li>
                          <li>• <strong>Visioconférence:</strong> Sessions à distance via Zoom/Teams</li>
                          <li>• <strong>Support hybrid:</strong> Combinaison présentiel + distanciel</li>
                          <li>• <strong>Urgences:</strong> Interventions sous 2h (supplément applicable)</li>
                        </ul>
                      </div>
                      
                      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                        <h3 className="font-semibold text-blue-700 mb-3">⭐ Expertise & Qualité</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• <strong>Certification:</strong> Expert agréé en développement web</li>
                          <li>• <strong>Expérience:</strong> 5+ années dans le domaine</li>
                          <li>• <strong>Satisfaction:</strong> 98% de clients satisfaits</li>
                          <li>• <strong>Suivi:</strong> Accompagnement post-projet inclus</li>
                        </ul>
                      </div>
                    </>
                  )}

                  {/* Personal Info Grid - affiché pour tous les onglets */}
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <div>
                        <div className="font-['Manrope:Medium',_sans-serif] text-[#333333]">Localisation</div>
                        <div className="font-['Manrope:Regular',_sans-serif] text-[#999999]">{user.city}, France</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Building2 className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-['Manrope:Medium',_sans-serif] text-[#333333]">Profession</div>
                        <div className="font-['Manrope:Regular',_sans-serif] text-[#999999]">{user.work}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Award className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-['Manrope:Medium',_sans-serif] text-[#333333]">Formation</div>
                        <div className="font-['Manrope:Regular',_sans-serif] text-[#999999]">{user.education}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-500" />
                      <div>
                        <div className="font-['Manrope:Medium',_sans-serif] text-[#333333]">Membre depuis</div>
                        <div className="font-['Manrope:Regular',_sans-serif] text-[#999999]">Janvier 2024</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <div>
                        <div className="font-['Manrope:Medium',_sans-serif] text-[#333333]">Spécialités</div>
                        <div className="font-['Manrope:Regular',_sans-serif] text-[#999999]">React, Node.js, TypeScript</div>
                      </div>
                    </div>
                  </div>

                  {/* Skills/Technologies */}
                  <div className="mb-6">
                    <h3 className="font-['Manrope:Medium',_sans-serif] text-[#333333] mb-3 flex items-center">
                      <Wrench className="w-4 h-4 mr-2 text-orange-500" />
                      Technologies maîtrisées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'React', level: 'Expert', color: 'bg-blue-100 text-blue-700' },
                        { name: 'Node.js', level: 'Expert', color: 'bg-green-100 text-green-700' },
                        { name: 'TypeScript', level: 'Avancé', color: 'bg-indigo-100 text-indigo-700' },
                        { name: 'Next.js', level: 'Expert', color: 'bg-gray-100 text-gray-700' },
                        { name: 'MongoDB', level: 'Avancé', color: 'bg-emerald-100 text-emerald-700' },
                        { name: 'AWS', level: 'Intermédiaire', color: 'bg-orange-100 text-orange-700' }
                      ].map((tech, index) => (
                        <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color} border`}>
                          {tech.name}
                          <span className="ml-1 text-xs opacity-75">({tech.level})</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 bg-blue-50 rounded-lg border">
                      <div className="text-2xl font-bold text-blue-600">4.9</div>
                      <div className="text-xs text-blue-500">Note moyenne</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg border">
                      <div className="text-2xl font-bold text-green-600">85</div>
                      <div className="text-xs text-green-500">Projets réalisés</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg border">
                      <div className="text-2xl font-bold text-purple-600">98%</div>
                      <div className="text-xs text-purple-500">Clients satisfaits</div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <h3 className="font-['Manrope:Medium',_sans-serif] text-[#333333] mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-pink-500" />
                      Langues parlées
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Français</span>
                        <span className="text-sm text-green-600 font-medium">Natif</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Anglais</span>
                        <span className="text-sm text-blue-600 font-medium">Courant</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Espagnol</span>
                        <span className="text-sm text-orange-600 font-medium">Intermédiaire</span>
                      </div>
                    </div>
                  </div>

                  {/* Availability Status */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-['Manrope:Medium',_sans-serif] text-green-700">Disponible pour nouveaux projets</span>
                    </div>
                    <p className="text-sm text-green-600">
                      Répond généralement en moins de 24h • Taux de réponse: 100%
                    </p>
                  </div>
                </div>
                
                {/* Badges Section */}
                <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                  <h2 className="font-['Manrope:Bold',_sans-serif] text-lg text-[#333333] mb-4 flex items-center">
                    <Trophy className="mr-2 text-yellow-600" />
                    {activeTab === "produits" ? "Badges de Vente" : "Badges Gagnés"}
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {(activeTab === "produits" ? [
                      {
                        id: 1,
                        name: "Vendeur de Confiance",
                        description: "Plus de 50 ventes réussies",
                        icon: Shield,
                        color: "text-blue-600",
                        bgColor: "bg-blue-100",
                        level: "Gold"
                      },
                      {
                        id: 2,
                        name: "Livraison Express",
                        description: "Toujours livré en temps record",
                        icon: Zap,
                        color: "text-yellow-600",
                        bgColor: "bg-yellow-100",
                        level: "Platinum"
                      },
                      {
                        id: 3,
                        name: "Prix Juste",
                        description: "Tarifs équitables et transparents",
                        icon: Award,
                        color: "text-green-600",
                        bgColor: "bg-green-100",
                        level: "Gold"
                      },
                      {
                        id: 4,
                        name: "Emballage Parfait",
                        description: "Produits toujours bien protégés",
                        icon: Package,
                        color: "text-purple-600",
                        bgColor: "bg-purple-100",
                        level: "Silver"
                      }
                    ] : user.badges.slice(0, 4)).map((badge) => {
                      const Icon = badge.icon;
                      return (
                        <div key={badge.id} className={`${badge.bgColor} p-3 rounded-lg border-l-4 border-current ${badge.color}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className={`w-4 h-4 ${badge.color}`} />
                            <span className={`text-xs font-semibold px-1 py-0.5 rounded ${badge.color} bg-white/70`}>
                              {badge.level}
                            </span>
                          </div>
                          <h3 className={`font-semibold text-sm ${badge.color} mb-1`}>{badge.name}</h3>
                          <p className="text-xs text-gray-600">{badge.description}</p>
                          {badge.earned && (
                            <p className="text-xs text-gray-500 mt-1">
                              Gagné le {new Date(badge.earned).toLocaleDateString('fr-FR')}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                      <button className="w-full mt-3 py-2 text-sm font-['Manrope:Medium',_sans-serif] text-[#333333] hover:text-[#4a90e2] border border-white/20 rounded-xl hover:border-[#4a90e2] bg-white/20 hover:bg-white/30 transition-all">
                        Voir tous les badges ({user.badges.length})
                      </button>
                </div>

                {/* Travel Zones - Seulement pour Services */}
                {activeTab === "services" && (
                  <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                    <h2 className="font-['Manrope:Bold',_sans-serif] text-lg text-[#333333] mb-4 flex items-center">
                      <MapPin className="mr-2 text-blue-600" /> Zones de Déplacement
                    </h2>
                    <div className="space-y-3">
                      {user.travelZones.map((zone) => {
                        const getPriorityColor = (type) => {
                          switch(type) {
                            case 'Zone prioritaire': return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', dot: 'bg-green-500' };
                            case 'Zone régulière': return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' };
                            case 'Zone entreprise': return { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500' };
                            case 'Zone étendue': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500' };
                            case 'Zone sur demande': return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', dot: 'bg-gray-500' };
                            default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', dot: 'bg-gray-500' };
                          }
                        };
                        const colors = getPriorityColor(zone.type);
                        
                        return (
                          <div key={zone.id} className={`${colors.bg} ${colors.border} border rounded-lg p-3 hover:shadow-md transition-shadow`}>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-sm">{zone.zone}</h3>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 ${colors.dot} rounded-full`}></div>
                                <span className={`text-xs font-medium ${colors.text}`}>{zone.type}</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{zone.description}</p>
                            
                            {/* Distance and Time */}
                            <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{zone.distance}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{zone.travelTime}</span>
                              </div>
                            </div>
                            
                            {/* Availability and Pricing */}
                            <div className="flex justify-between items-center text-xs pt-2 border-t border-white">
                              <div>
                                <span className="text-gray-500">Disponible: </span>
                                <span className="font-medium">{zone.availability}</span>
                              </div>
                              <div className={`font-semibold ${zone.surcharge === 'Gratuit' ? 'text-green-600' : 'text-orange-600'}`}>
                                {zone.surcharge}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-3 text-xs text-gray-500 text-center">
                      Les tarifs de déplacement sont ajoutés au prix du service
                    </div>
                  </div>
                )}
              </div>

              {/* Center column */}
              <div className="md:col-span-1 space-y-4">
                {/* Journal Tab */}
                {activeTab === "journal" && user.posts.map((post) => (
                  <div key={post.id} className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image src={user.profilePhoto} alt={user.name} width={40} height={40} />
                      </div>
                      <div>
                        <p className={`font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{user.name}</p>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                      </div>
                    </div>
                    <p>{post.content}</p>
                    {post.image && (
                      <div className="mt-2">
                        <Image src={post.image} alt="Post image" width={600} height={400} className="rounded object-cover" />
                      </div>
                    )}
                    <div className="flex justify-between text-gray-600 mt-2 border-t pt-2">
                      <button className="flex items-center space-x-1 hover:text-blue-600"><FaThumbsUp /> <span>{post.likes}</span></button>
                      <button className="flex items-center space-x-1 hover:text-green-600"><FaComment /> <span>{post.comments}</span></button>
                      <button className="flex items-center space-x-1 hover:text-purple-600"><FaShare /> <span>{post.shares}</span></button>
                    </div>
                  </div>
                ))}

                {/* Produits Tab */}
                {activeTab === "produits" && (
                  <div className="space-y-4">
                    <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                      <h3 className={`text-xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary} mb-4 flex items-center`} style={themeStyles.textPrimaryStyle}>
                        <Package className="mr-2 text-blue-600" /> Mes Produits
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {user.products.map((product) => (
                          <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-48">
                              <Image src={product.image} alt={product.name} fill className="object-cover" />
                              <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                                {product.category}
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                              <div className="flex items-center gap-2 mb-2">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm">{product.rating}</span>
                                <span className="text-xs text-gray-500">• {product.condition}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-blue-600">{product.price}</span>
                                <span className="text-sm text-gray-500 flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {product.location}
                                </span>
                              </div>
                              <button 
                                className="w-full mt-3 py-2 rounded-xl transition-colors font-['Manrope:Medium',_sans-serif]"
                                style={{
                                  backgroundColor: currentTheme.buttonPrimary,
                                  color: '#ffffff'
                                }}
                              >
                                Voir les détails
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Services Tab */}
                {activeTab === "services" && (
                  <div className="space-y-4">
                    <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                      <h3 className={`text-xl font-['Manrope:Bold',_sans-serif] ${themeStyles.textPrimary} mb-4 flex items-center`} style={themeStyles.textPrimaryStyle}>
                        <Wrench className="mr-2 text-green-600" /> Mes Services
                      </h3>
                      <div className="space-y-4">
                        {user.services.map((service) => (
                          <div key={service.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold text-lg">{service.title}</h4>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                  {service.category}
                                </span>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-green-600">{service.price}</div>
                                <div className="text-sm text-gray-500">{service.duration}</div>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span>{service.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Building2 className="w-4 h-4" />
                                  <span>{service.completedProjects} projets</span>
                                </div>
                              </div>
                              <button 
                                className="px-4 py-2 rounded-xl transition-colors font-['Manrope:Medium',_sans-serif]"
                                style={{
                                  backgroundColor: currentTheme.buttonPrimary,
                                  color: '#ffffff'
                                }}
                              >
                                Contacter
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right column - Contenu variable selon l'onglet */}
              <div className="space-y-4">
                {/* Journal: Géolocalisation */}
                {activeTab === "journal" && (
                  <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                    <h2 className="font-['Manrope:Bold',_sans-serif] text-lg text-[#333333] mb-4 flex items-center">
                      <Map className="mr-2 text-blue-600" /> Géolocalisation
                    </h2>
                    
                    {/* Current Location */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-blue-700">Position Actuelle</span>
                      </div>
                      <p className="text-sm text-blue-600 mb-2">{user.currentLocation.address}</p>
                      <div className="text-xs text-blue-500 space-y-1">
                        <div>Précision: {user.currentLocation.precision}</div>
                        <div>Mise à jour: {new Date(user.currentLocation.lastUpdated).toLocaleString('fr-FR')}</div>
                        <div className="font-mono bg-blue-100 p-1 rounded text-blue-800">
                          {user.currentLocation.latitude.toFixed(4)}, {user.currentLocation.longitude.toFixed(4)}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Map Placeholder */}
                    <div className="bg-gray-100 border rounded-lg h-48 flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
                      <div className="relative z-10 text-center">
                        <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Carte Interactive</p>
                        <p className="text-xs text-gray-500">Paris 15ème</p>
                      </div>
                      {/* Simulated map pins */}
                      <div className="absolute top-6 left-8 w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="absolute bottom-12 right-10 w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="absolute bottom-8 left-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>

                    {/* Location Stats */}
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-gray-700">{user.travelZones.length}</div>
                        <div className="text-xs text-gray-500">Zones couvertes</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-gray-700">50km</div>
                        <div className="text-xs text-gray-500">Rayon max</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Produits: Présentation du vendeur */}
                {activeTab === "produits" && (
                  <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                    <h2 className="font-['Manrope:Bold',_sans-serif] text-lg text-[#333333] mb-4 flex items-center">
                      <Users className="mr-2 text-green-600" /> Présentation du Vendeur
                    </h2>
                    
                    {/* Vendeur Profile */}
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3">
                        <Image src={user.profilePhoto} alt={user.name} width={96} height={96} className="object-cover" />
                      </div>
                      <h3 className="font-semibold text-lg">{user.name}</h3>
                      <p className="text-gray-600 text-sm">{user.work}</p>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">4.9</span>
                        <span className="text-xs text-gray-500">(127 avis)</span>
                      </div>
                    </div>

                    {/* Seller Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-600">156</div>
                        <div className="text-xs text-green-500">Ventes réalisées</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-600">99%</div>
                        <div className="text-xs text-blue-500">Satisfaction</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-purple-600">24h</div>
                        <div className="text-xs text-purple-500">Temps d'expédition</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-orange-600">3ans</div>
                        <div className="text-xs text-orange-500">Sur UrbanConnect</div>
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Vendeur vérifié</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-600">Paiement sécurisé</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Package className="w-4 h-4 text-purple-600" />
                        <span className="text-gray-600">Envoi rapide garanti</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">Service après-vente</span>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <button 
                      className="w-full mt-4 py-3 rounded-xl transition-colors font-['Manrope:Medium',_sans-serif]"
                      style={{
                        backgroundColor: currentTheme.buttonPrimary,
                        color: '#ffffff'
                      }}
                    >
                      Contacter le vendeur
                    </button>
                  </div>
                )}

                {/* Services: Zones de Déplacement */}
                {activeTab === "services" && (
                  <div className="backdrop-blur-lg bg-white/30 p-4 rounded-xl border border-white/20">
                    <h2 className="font-['Manrope:Bold',_sans-serif] text-lg text-[#333333] mb-4 flex items-center">
                      <MapPin className="mr-2 text-blue-600" /> Zones de Déplacement
                    </h2>
                    <div className="space-y-3">
                      {user.travelZones.map((zone) => {
                        const getPriorityColor = (type) => {
                          switch(type) {
                            case 'Zone prioritaire': return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', dot: 'bg-green-500' };
                            case 'Zone régulière': return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' };
                            case 'Zone entreprise': return { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500' };
                            case 'Zone étendue': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', dot: 'bg-orange-500' };
                            case 'Zone sur demande': return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', dot: 'bg-gray-500' };
                            default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', dot: 'bg-gray-500' };
                          }
                        };
                        const colors = getPriorityColor(zone.type);
                        
                        return (
                          <div key={zone.id} className={`${colors.bg} ${colors.border} border rounded-lg p-3 hover:shadow-md transition-shadow`}>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-sm">{zone.zone}</h3>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 ${colors.dot} rounded-full`}></div>
                                <span className={`text-xs font-medium ${colors.text}`}>{zone.type}</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{zone.description}</p>
                            
                            {/* Distance and Time */}
                            <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{zone.distance}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{zone.travelTime}</span>
                              </div>
                            </div>
                            
                            {/* Availability and Pricing */}
                            <div className="flex justify-between items-center text-xs pt-2 border-t border-white">
                              <div>
                                <span className="text-gray-500">Disponible: </span>
                                <span className="font-medium">{zone.availability}</span>
                              </div>
                              <div className={`font-semibold ${zone.surcharge === 'Gratuit' ? 'text-green-600' : 'text-orange-600'}`}>
                                {zone.surcharge}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-3 text-xs text-gray-500 text-center">
                      Les tarifs de déplacement sont ajoutés au prix du service
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

// === Carousel ===
const ProfileCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="overflow-hidden w-screen h-screen bg-gray-100">
      <div ref={emblaRef} className="h-full">
        <div className="flex">
          <div className="flex-[0_0_100%]">
            <Profile />
          </div>
          <div className="flex-[0_0_100%]">
            <Profile />
          </div>
          <div className="flex-[0_0_100%]">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCarousel;