"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { UserRound, Earth, Building2, ChartLine, MessageCircleMore, Settings } from "lucide-react";

export default function BottomBarMobileUrbanConnect() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { icon: MessageCircleMore, label: "Messages", href: "/messages" },
    { icon: Earth, label: "Discover", href: "/map" },
    { icon: Building2, label: "Home", href: "/welcome" },
    { icon: ChartLine, label: "Stats", href: "/stats" },
    { icon: Settings, label: "Settings", href: "/Settings" },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 backdrop-blur-lg bg-white/10 border-t border-white/20">
      <div className="flex justify-around p-2 max-w-4xl mx-auto">
        {tabs.map(({ icon: Icon, label, href }, idx) => {
          const isActive = pathname === href;

          return (
            <button
              key={idx}
              onClick={() => router.push(href)}
              className="flex flex-col items-center justify-center text-sm focus:outline-none transition-all duration-300 hover:scale-105"
            >
              <Icon
                className={`w-6 h-6 transition-colors duration-200 ${
                  isActive ? "text-primary-400" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs mt-1 transition-colors duration-200 ${
                  isActive ? "text-primary-400 font-semibold" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
