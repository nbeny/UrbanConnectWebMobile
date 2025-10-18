'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Heart } from "lucide-react";
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
    photos: [
      "https://images.unsplash.com/photo-1508051123996-69f8caf4891e?q=80&w=600",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600",
    ],
  },
];

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3">
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

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/40 text-black backdrop-blur-sm px-2 py-1 rounded-full text-xs"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/40 text-black backdrop-blur-sm px-2 py-1 rounded-full text-xs"
          >
            ›
          </button>
        </>
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
<Popup className="p-0 m-0 custom-popup">
  <div className="relative w-64 p-4 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg text-black transition-all duration-300">
    
    {/* Bouton de fermeture */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        const popup = (e.currentTarget.closest('.leaflet-popup') as any)?._leaflet_id;
        const map = (window as any).leafletMapInstance;
        if (map && popup) {
          const layer = Object.values(map._layers).find((l: any) => l._popup?._leaflet_id === popup);
          if (layer && layer.closePopup) layer.closePopup();
        }
      }}
      className="absolute top-2 right-2 bg-white/40 hover:bg-white/60 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-sm backdrop-blur-sm transition-all duration-200"
    >
      ✕
    </button>

    {/* En-tête : avatar + nom */}
    <div className="flex items-center mb-3 mt-2">
      <img
        src={
          user.avatar ||
          `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`
        }
        className="w-12 h-12 rounded-2xl mr-3 object-cover border border-white/20"
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div>
        <h4 className="font-semibold text-black">
          {user.firstName} {user.lastName}
        </h4>
        <p className="text-sm text-black/60">@{user.username}</p>
      </div>
    </div>

    {/* Carrousel */}
    {user.photos && user.photos.length > 0 && (
      <ImageCarousel images={user.photos} />
    )}

    {/* Statistiques */}
    <p className="text-xs text-black/70 mb-3">
      📍 {user.locationCount} lieux • 💬 {user.messageCount} messages
    </p>

    {/* Boutons d’action */}
    <div className="flex space-x-2">
      <button className="flex-1 bg-white/20 hover:bg-white/30 text-black py-2 rounded-2xl text-sm font-medium transition duration-300 flex items-center justify-center border border-white/20">
        <Heart className="w-4 h-4 mr-2" /> Liker
      </button>
      <button
        onClick={() => window.open(`/messages?user=${user.id}`, "_blank")}
        className="flex-1 bg-white/20 hover:bg-white/30 text-black py-2 rounded-2xl text-sm font-medium transition duration-300 flex items-center justify-center border border-white/20"
      >
        💬 Message
      </button>
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
