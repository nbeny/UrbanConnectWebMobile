"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaUserFriends, FaComment, FaShare, FaThumbsUp } from "react-icons/fa";
import { Package, Wrench, Calendar, Phone, Mail, MapPin, Star, Users, Clock, Building2, Award, Trophy, Medal, Target, Shield, Zap, Map } from "lucide-react";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("journal");

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
  };

  const menuItems = [
    { id: "journal", label: "Journal" },
    { id: "produits", label: "Produits" },
    { id: "services", label: "Services" },
    { id: "activites", label: "Activités" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl w-screen h-screen overflow-y-auto p-4 md:p-6">
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
            <h1 className="text-3xl font-bold text-black">{user.name}</h1>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>

        {/* Stories */}
        <div className="mt-6 bg-white p-4 rounded shadow overflow-x-auto flex space-x-4">
          {user.stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
                <Image src={story.avatar} alt={story.name} width={80} height={80} />
              </div>
              <p className="text-sm mt-1">{story.name}</p>
            </div>
          ))}
        </div>

        {/* Menu navigation */}
        <div className="mt-6 bg-white p-4 rounded shadow overflow-x-auto">
          <div className="flex space-x-2 border-b">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-3 font-semibold whitespace-nowrap ${
                  activeTab === item.id
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            {/* About Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-xl mb-4 flex items-center text-gray-800">
                <Users className="mr-3 text-blue-600" /> À propos de moi
              </h2>
              
              {/* Bio/Description */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  Développeur web passionné avec plus de 5 ans d'expérience dans la création d'applications modernes. 
                  Spécialisé en React, Node.js et technologies cloud. J'accompagne les entreprises et particuliers 
                  dans leur transformation digitale avec des solutions sur-mesure et innovantes.
                </p>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="font-semibold text-gray-700">Localisation</div>
                    <div className="text-gray-600">{user.city}, France</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-gray-700">Profession</div>
                    <div className="text-gray-600">{user.work}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Award className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-700">Formation</div>
                    <div className="text-gray-600">{user.education}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="font-semibold text-gray-700">Membre depuis</div>
                    <div className="text-gray-600">Janvier 2024</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-gray-700">Spécialités</div>
                    <div className="text-gray-600">React, Node.js, TypeScript</div>
                  </div>
                </div>
              </div>

              {/* Skills/Technologies */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
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
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
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
                  <span className="font-semibold text-green-700">Disponible pour nouveaux projets</span>
                </div>
                <p className="text-sm text-green-600">
                  Répond généralement en moins de 24h • Taux de réponse: 100%
                </p>
              </div>
            </div>
            {/* Badges Section */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-4 flex items-center">
                <Trophy className="mr-2 text-yellow-600" /> Badges Gagnés
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {user.badges.slice(0, 4).map((badge) => {
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
                      <p className="text-xs text-gray-500 mt-1">
                        Gagné le {new Date(badge.earned).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  );
                })}
              </div>
              <button className="w-full mt-3 py-2 text-sm text-gray-600 hover:text-blue-600 border rounded hover:border-blue-600 transition-colors">
                Voir tous les badges ({user.badges.length})
              </button>
            </div>

            {/* Travel Zones */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-4 flex items-center">
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
                      
                      {/* Transport Modes */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {zone.transportModes.map((transport, index) => (
                          <span key={index} className="text-xs bg-white text-gray-600 px-2 py-0.5 rounded-full border">
                            {transport}
                          </span>
                        ))}
                      </div>
                      
                      {/* Services */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {zone.services.map((service, index) => (
                          <span key={index} className={`text-xs ${colors.text} bg-white px-2 py-0.5 rounded-full border`}>
                            {service}
                          </span>
                        ))}
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
          </div>

          {/* Center column */}
          <div className="md:col-span-1 space-y-4">
            {/* Journal Tab */}
            {activeTab === "journal" && user.posts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={user.profilePhoto} alt={user.name} width={40} height={40} />
                  </div>
                  <div>
                    <p className="font-bold">{user.name}</p>
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
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
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
                          <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
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
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
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
                          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                            Contacter
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Activités Tab */}
            {activeTab === "activites" && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
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
            )}

            {/* Contacts Tab */}
            {activeTab === "contacts" && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Phone className="mr-2 text-indigo-600" /> Informations de Contact
                  </h3>
                  
                  {/* Professional Contacts */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3 text-indigo-600">Contact Professionnel</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Mail className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-gray-600">{user.contacts.professional.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Phone className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="font-medium">Téléphone</div>
                          <div className="text-gray-600">{user.contacts.professional.phone}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Building2 className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="font-medium">LinkedIn</div>
                          <div className="text-gray-600">{user.contacts.professional.linkedin}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Package className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="font-medium">GitHub</div>
                          <div className="text-gray-600">{user.contacts.professional.github}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="font-medium">Site Web</div>
                          <div className="text-gray-600">{user.contacts.professional.website}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3 text-green-600">Disponibilité</h4>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-green-700">{user.contacts.availability.status}</span>
                      </div>
                      <div className="text-sm text-green-600 space-y-1">
                        <div>Contact préféré: {user.contacts.availability.preferredContact}</div>
                        <div>Temps de réponse: {user.contacts.availability.responseTime}</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-purple-600">Réseaux Sociaux</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium">Twitter</div>
                          <div className="text-gray-600">{user.contacts.social.twitter}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium">Instagram</div>
                          <div className="text-gray-600">{user.contacts.social.instagram}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium">Facebook</div>
                          <div className="text-gray-600">{user.contacts.social.facebook}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Geolocation Card */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-4 flex items-center">
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

              {/* Quick Actions */}
              <div className="mt-4 space-y-2">
                <button className="w-full py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Partager ma position
                </button>
                <button className="w-full py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <Map className="w-4 h-4" />
                  Voir sur la carte
                </button>
              </div>
            </div>

            {/* Activity Summary */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-4 flex items-center">
                <Target className="mr-2 text-green-600" /> Activité Récente
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">En ligne maintenant</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-600">{user.activities.length} événements à venir</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Package className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-600">{user.products.length} produits actifs</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Wrench className="w-4 h-4 text-orange-600" />
                  <span className="text-gray-600">{user.services.length} services disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
