'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Fix missing marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const users = [
  {
    id: 1,
    username: "alice",
    firstName: "Alice",
    lastName: "Dupont",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    position: [48.8566, 2.3522],
    locationCount: 3,
    messageCount: 12,
    bio: "Passionnée d'art urbain et de photographie 📸 Toujours à la recherche de nouveaux spots à Paris",
    tags: ["Photographie", "Art", "Voyages", "Architecture"],
    location: "Châtelet, Paris 1er",
    distance: "250m",
    lastSeen: "Il y a 5 min",
    service: "Photographie Professionnelle",
    photos: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=600",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=600",
    ],
  },
  {
    id: 2,
    username: "bob",
    firstName: "Bob",
    lastName: "Martin",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    position: [48.8572, 2.35],
    locationCount: 5,
    messageCount: 8,
    bio: "Entrepreneur tech 💼 Co-fondateur @StartupParis | Fan de sports urbains et de musique électro 🎧",
    tags: ["Tech", "Startup", "Sports", "Musique"],
    location: "Le Marais, Paris 3e",
    distance: "180m",
    lastSeen: "Il y a 12 min",
    service: "Développement Web & Mobile",
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600",
    ],
  },
  {
    id: 3,
    username: "charlie",
    firstName: "Charlie",
    lastName: "Durand",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    position: [48.855, 2.354],
    locationCount: 2,
    messageCount: 4,
    bio: "Designer graphique freelance 🎨 Amoureux des cafés parisiens et des balades en vélo 🚴",
    tags: ["Design", "Freelance", "Café", "Vélo"],
    location: "Saint-Germain, Paris 6e",
    distance: "420m",
    lastSeen: "Il y a 1h",
    service: "Design Graphique & Branding",
    photos: [
      "https://images.unsplash.com/photo-1508051123996-69f8caf4891e?q=80&w=600",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600",
    ],
  },
];

function ImageCarousel({ images, serviceName, user, onClose }: { images: string[]; serviceName: string; user: any; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((index + 1) % images.length);
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden mb-1 md:mb-3">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`photo-${index}`}
        />
      </AnimatePresence>

      {/* Overlay du haut avec avatar, nom et bouton fermeture */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent p-3 md:p-4">
        <div className="flex items-center justify-between">
          {/* Avatar + Nom */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white/50 shadow-lg"
                alt={`${user.firstName} ${user.lastName}`}
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base leading-tight drop-shadow-lg">
                {user.firstName} {user.lastName}
              </h4>
              <p className="text-xs md:text-sm text-white/90 leading-tight drop-shadow-md">@{user.username}</p>
            </div>
          </div>
          
          {/* Bouton de fermeture à droite */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="bg-white/30 hover:bg-white/50 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center backdrop-blur-sm transition-all duration-200 shadow-lg"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* Overlay du bas avec nom du service */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-3">
        <p className="text-white text-xs md:text-sm font-semibold text-center drop-shadow-lg">{serviceName}</p>
      </div>

      {/* Boutons de navigation du carrousel */}
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-3 pointer-events-none z-20">
          <button
            onClick={prev}
            className="pointer-events-auto bg-white/40 hover:bg-white/60 text-black backdrop-blur-sm w-8 h-8 md:w-10 md:h-10 rounded-full text-lg md:text-xl font-bold transition-all duration-200 shadow-lg flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="pointer-events-auto bg-white/40 hover:bg-white/60 text-black backdrop-blur-sm w-8 h-8 md:w-10 md:h-10 rounded-full text-lg md:text-xl font-bold transition-all duration-200 shadow-lg flex items-center justify-center"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default function DynamicMap() {
  return (
    <div className="absolute inset-0 z-10">
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
        closePopupOnClick={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {users.map((user) => {
          // Crée une icône personnalisée avec l’avatar du user
          const userIcon = L.divIcon({
            html: `
      <div style="
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid rgba(255,255,255,0.8);
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        backdrop-filter: blur(4px);
      ">
        <img
          src="${user.avatar}"
          alt="${user.username}"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
          "
        />
      </div>
    `,
            className: "", // pour ne pas appliquer les styles par défaut de Leaflet
            iconSize: [48, 48],
            iconAnchor: [24, 48],
            popupAnchor: [0, -48],
          });

          return (
            <Marker key={user.id} position={user.position as any} icon={userIcon}>
              <Popup className="p-0 m-0 custom-popup" closeButton={false} autoClose={false} closeOnClick={false} maxWidth={320}>
                <div className="relative w-72 md:w-80 p-2 md:p-3 rounded-xl md:rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg text-black transition-all duration-300">

                  {/* Carrousel avec overlay (avatar, nom et fermeture en haut) */}
                  {user.photos && user.photos.length > 0 && (
                    <ImageCarousel 
                      images={user.photos} 
                      serviceName={user.service} 
                      user={user}
                      onClose={() => {
                        const popup = document.querySelector('.leaflet-popup-close-button') as HTMLElement;
                        popup?.click();
                      }}
                    />
                  )}

                  {/* Stats + Boutons sur la même ligne */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Stats à gauche */}
                    <div className="flex gap-2 md:gap-3">
                      <div className="text-center">
                        <div className="text-[11px] md:text-base font-bold text-black leading-none">{user.photos?.length || 0}</div>
                        <div className="text-[6px] md:text-xs text-black/70 leading-none">Photos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[11px] md:text-base font-bold text-black leading-none">{user.locationCount}</div>
                        <div className="text-[6px] md:text-xs text-black/70 leading-none">Lieux</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[11px] md:text-base font-bold text-black leading-none">{user.messageCount}</div>
                        <div className="text-[6px] md:text-xs text-black/70 leading-none">Messages</div>
                      </div>
                    </div>

                    {/* Boutons à droite */}
                    <div className="flex space-x-1">
                      <button className="bg-white/25 hover:bg-white/35 text-black p-1 md:p-2 rounded-md md:rounded-xl text-[8px] md:text-sm font-semibold transition duration-300 flex items-center justify-center border border-white/30 shadow-sm">
                        <Heart className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      <button
                        onClick={() => window.open(`/messages?user=${user.id}`, "_blank")}
                        className="bg-white/25 hover:bg-white/35 text-black p-1 md:p-2 rounded-md md:rounded-xl text-[8px] md:text-sm font-semibold transition duration-300 flex items-center justify-center border border-white/30 shadow-sm"
                      >
                        💬
                      </button>
                    </div>
                  </div>
                </div>
              </Popup>

            </Marker>
          );
        })}

      </MapContainer>
    </div>
  );
}
