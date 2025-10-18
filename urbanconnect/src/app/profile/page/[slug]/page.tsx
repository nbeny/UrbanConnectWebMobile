"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Plus, User, Briefcase, ShoppingCart, Zap, Activity } from "lucide-react";
import { profilesData, Profile } from "@/app/profile/page/data";
import UserInfo from "./page/UserInfo";
import EntrepriseInfo from "./page/Entreprise";
import ProductsList from "./page/Produits";
import ServicesList from "./page/Services";
import ActivityList from "./page/Activity";

// ======== Menu ========
const menuItems = [
  { key: "user", label: "Info Perso", icon: <User className="w-5 h-5" /> },
  { key: "entreprise", label: "Entreprise", icon: <Briefcase className="w-5 h-5" /> },
  { key: "products", label: "Produits", icon: <ShoppingCart className="w-5 h-5" /> },
  { key: "services", label: "Services", icon: <Zap className="w-5 h-5" /> },
  { key: "activity", label: "Activité", icon: <Activity className="w-5 h-5" /> },
];


// ======== ProfileCard ========
const ProfileCard = ({
  profile,
  dragOffset,
  handleDragStart,
  handleDragMove,
  handleDragEnd,
  activeTab,
  setActiveTab
}: { profile?: Profile, dragOffset: number, handleDragStart: (x:number)=>void, handleDragMove:(x:number)=>void, handleDragEnd:()=>void, activeTab:string, setActiveTab:(tab:string)=>void }) => {
  if (!profile) return null;

  if (profile.isNew) {
    return (
      <div
        className="bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center h-[60vh] border-2 border-dashed border-purple-300 hover:border-purple-500 cursor-pointer select-none"
        onClick={()=>alert("Créer un nouveau profil")}
      >
        <Plus className="w-20 h-20 text-purple-400"/>
        <p className="mt-4 text-lg font-medium text-black">Ajouter un nouveau profil</p>
      </div>
    );
  }

  return (
    <div
      className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 transition-transform duration-300 cursor-grab active:cursor-grabbing min-h-[60vh] max-w-3xl mx-auto"
      style={{ transform: `translateX(${dragOffset}px)` }}
      onMouseDown={e=>handleDragStart(e.clientX)}
      onMouseMove={e=>handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={e=>handleDragStart(e.touches[0].clientX)}
      onTouchMove={e=>handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {profile.user?.avatar}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black">{profile.user?.fullName}</h2>
          <p className="text-gray-700 text-sm">{profile.user?.location}</p>
        </div>
      </div>

      {/* Menu */}
      <div className="flex gap-4 border-b border-gray-300 mb-4">
        {menuItems.map(item=>(
          <button key={item.key} onClick={()=>setActiveTab(item.key)}
            className={`flex items-center gap-1 pb-2 px-2 font-medium transition-colors ${activeTab===item.key?"border-b-2 border-purple-600 text-black":"text-gray-500 hover:text-black"}`}>
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      {/* Contenu */}
      <div className="flex-1 overflow-y-auto">
        {activeTab==="user" && profile.user && <UserInfo user={profile.user} />}
        {activeTab==="entreprise" && profile.entreprise && <EntrepriseInfo entreprise={profile.entreprise} />}
        {activeTab==="products" && profile.products && <ProductsList products={profile.products} />}
        {activeTab==="services" && profile.services && <ServicesList services={profile.services} />}
        {activeTab==="activity" && profile.activity && <ActivityList activity={profile.activity} />}
      </div>
    </div>
  );
}

// ======== Page principale ========
export default function ProfileGlobalPage() {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("user");
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const profiles = profilesData;
  const current = profiles[index];

  const handleDragStart = (x:number)=>{ setIsDragging(true); setDragStart(x); }
  const handleDragMove = (x:number)=>{ if(!isDragging) return; setDragOffset(x-dragStart); }
  const handleDragEnd = ()=>{ setIsDragging(false); if(dragOffset>100 && index>0) setIndex(index-1); else if(dragOffset<-100 && index<profiles.length-1) setIndex(index+1); setDragOffset(0); }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center py-10 px-4">
      <div className="relative w-full max-w-4xl">
        <button onClick={()=>index>0 && setIndex(index-1)} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md z-10"><ArrowLeft className="w-6 h-6 text-black"/></button>
        <button onClick={()=>index<profiles.length-1 && setIndex(index+1)} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md z-10"><ArrowRight className="w-6 h-6 text-black"/></button>

        <ProfileCard
          profile={current}
          dragOffset={dragOffset}
          handleDragStart={handleDragStart}
          handleDragMove={handleDragMove}
          handleDragEnd={handleDragEnd}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="mt-4 text-black">{index+1} / {profiles.length}</div>
    </div>
  )
}
