'use client';

import dynamic from "next/dynamic";
import { MapPin, Home, Filter, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import 'leaflet/dist/leaflet.css';
import BottomBarMobileUrbanConnect from "../components/BottomBar/MobileUrbanConnect";
import TopBarTranspartUrbanConnect from "../components/Topbar/TranspartUrbanConnect";

const DynamicMap = dynamic(() => import("../components/DynamicMap"), { ssr: false });

function AnimatedBackground() {
  const [particles, setParticles] = useState<{ left: string; top: string; size: string; delay: string; duration: string; }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 6 + 2}px`,
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * 10 + 8}s`,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle bg-white/40 rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function MapPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900 text-black">
      <AnimatedBackground />

      {/* === Carte === */}
      <DynamicMap />

      {/* === Navigation du haut === */}
      <TopBarTranspartUrbanConnect />

      {/* === ✅ Bottom Navigation === */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <BottomBarMobileUrbanConnect />
      </div>
    </div>
  );
}
