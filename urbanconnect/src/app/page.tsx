import React from "react";
import Image from "next/image";
import urbanBackground from "@/assets/urbanconnectBackground.png";
import { Building2, Package, Wrench, Calendar, Phone, Mail, MapPin, Star, Users, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white min-h-screen relative w-full overflow-auto text-[#000000]" data-name="Frame">
      <div className="absolute inset-0 opacity-10" data-name="Abstract city skyline">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src={urbanBackground}
            alt="Urban Connect Background"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="relative isolate w-full" data-name="Container">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-primary">
              <div className="flex items-center justify-center">
              <Building2 className="size-12" size={24} color="#333333"/>
              </div>
              <h1 className="text-2xl font-bold text-4xl">UrbanConnect</h1>
            </div>
          </div>

          {/* Image */}
          <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-3">
              <div
                className="w-full min-h-80 bg-cover bg-center bg-no-repeat flex flex-col justify-end overflow-hidden bg-slate-50 @[480px]:rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmAxbisllm8wn-BSVx4uo-fjSDh0sVQ9eam8EW-X74PBtiED_ou63P3lho9bANqP2cYnneBUcP7_P7dLbvjkruIpXOkxezZ0zFM_JBFKcB1IJ3PbzLcD2JssaCJH474pOuW-Eb5iYoecXe0k1-tgS27Za_7mdpghLcdeljp4ncbcRhfJHBGFzDTR2960ZfIPZMI469FwInt5hOrWZn8mw3hBPbqKSuDx79fFysGSrlS1_us1ahGRK6hkB_lUDFFc4XG7ONIgnAs3c")',
                }}
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
            Your City, Connected.
          </h1>

          {/* Features */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {[
              { icon: Users, title: "Connect with Locals" },
              { icon: Calendar, title: "Discover Events" },
              { icon: Building2, title: "Grow Your Business" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-1 flex-col items-center text-center gap-3 rounded-lg border border-[#cfdfe7] dark:border-slate-700 bg-background-light dark:bg-background-dark p-4"
                >
                  <Icon size={24} className="text-primary" />
                  <h2 className="text-base font-bold leading-tight">{item.title}</h2>
                </div>
              );
            })}
          </div>

          {/* Produits Section */}
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Produits Populaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: 1,
                  name: "Vélo Électrique Urbain",
                  price: "1,299€",
                  rating: 4.8,
                  image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop",
                  seller: "UrbanBike Store",
                  description: "Parfait pour les trajets urbains quotidiens"
                },
                {
                  id: 2,
                  name: "Kit de Jardinage Bio",
                  price: "45€",
                  rating: 4.6,
                  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
                  seller: "Green Urban",
                  description: "Tout pour cultiver en ville"
                },
                {
                  id: 3,
                  name: "Sac Éco-responsable",
                  price: "25€",
                  rating: 4.9,
                  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
                  seller: "EcoBag Co",
                  description: "Fabriqué à partir de matériaux recyclés"
                },
              ].map((product) => (
                <div key={product.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{product.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-gray-500">{product.seller}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="px-4 py-6 bg-gray-50 dark:bg-slate-900">
            <h2 className="text-2xl font-bold mb-4 text-center">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Wrench,
                  title: "Réparation Express",
                  description: "Services de réparation à domicile pour tous vos appareils urbains",
                  price: "À partir de 30€",
                  duration: "1-2h"
                },
                {
                  icon: Package,
                  title: "Livraison Écologique",
                  description: "Livraison rapide et écologique dans toute la ville",
                  price: "À partir de 5€",
                  duration: "30min-2h"
                },
                {
                  icon: Users,
                  title: "Consultation Urbaine",
                  description: "Conseils personnalisés pour optimiser votre vie urbaine",
                  price: "50€/séance",
                  duration: "1h"
                },
                {
                  icon: Building2,
                  title: "Solutions Entreprise",
                  description: "Services dédiés aux entreprises et commerces locaux",
                  price: "Sur devis",
                  duration: "Variable"
                },
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">{service.description}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-primary">{service.price}</span>
                          <span className="flex items-center gap-1 text-gray-500">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activités Section */}
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Activités du Quartier</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Marché Bio du Samedi",
                  date: "Chaque samedi",
                  time: "8h00 - 14h00",
                  location: "Place de la République",
                  participants: 120,
                  category: "Alimentation"
                },
                {
                  title: "Atelier de Réparation Collaborative",
                  date: "Mardi 23 Oct",
                  time: "18h00 - 21h00",
                  location: "Centre Communautaire",
                  participants: 25,
                  category: "DIY"
                },
                {
                  title: "Course à Pied Urbaine",
                  date: "Dimanche 27 Oct",
                  time: "9h00 - 11h00",
                  location: "Parc Central",
                  participants: 85,
                  category: "Sport"
                },
                {
                  title: "Conférence Smart City",
                  date: "Jeudi 31 Oct",
                  time: "19h00 - 21h00",
                  location: "Médiathèque",
                  participants: 60,
                  category: "Tech"
                },
              ].map((activity, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{activity.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {activity.category}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {activity.date}
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

          {/* Contacts Section */}
          <div className="px-4 py-6 bg-gray-50 dark:bg-slate-900">
            <h2 className="text-2xl font-bold mb-6 text-center">Nous Contacter</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">contact@urbanconnect.fr</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p className="text-gray-600 dark:text-gray-400">123 Rue de la Tech<br />75001 Paris, France</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">Envoyez-nous un message</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Votre email"
                        className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Votre message"
                        className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center">
            <div className="flex flex-1 max-w-[480px] flex-col items-stretch gap-3 px-4 py-3">
              <button className="h-12 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors">
                Rejoignez UrbanConnect
              </button>
              <button className="h-12 rounded-lg bg-primary/20 dark:bg-primary/30 font-bold hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                Se Connecter
              </button>
              <a href="/inventory" className="h-12 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors flex items-center justify-center">
                📋 Voir l'Inventaire
              </a>
            </div>
          </div>

          {/* Social login */}
          <div className="flex flex-col items-center gap-4 px-4 py-3">
            <div className="text-sm text-gray-500 dark:text-gray-400">or continue with</div>
            <div className="flex gap-4">
              {[
                { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMmGWpN85C__jEpQI3ZQ_8SPygQzR7Y2rga7U13XDffPNBtkAvpqJFBW74Ahcdh4h-uD3oV1_UvWXKLe_d7vaxqyrh-mcsyAXQ3vrlTZgVbXYY21woneUNEDJksBghmwpz9nCJHYtDxntgFHB8OHUBdEx2R0RzM5a3HFOTdl7EEq837gFaoF28HvpsDi0WDdB1dzFZsgzBJJC0PyI_q4AqGB5iFFbovu3gOPteNFSw8U2Zpyjx6t9WfObEsj6nWJMTUklAxxXSdfo", alt: "Google" },
                { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi5bUasxO82ZAaM2QJAtHkeWDU8XAUVAMjjBQ1pnZV8s6qokJhZuvq4sIHQBkdc0ME7HIeeRrnNQLF7K9uWAyR9kMbgcvww4dubowhjKtGPY1cUJ2HPAAfRzi0s4xIBnZPCqbvCtEWTP9srz9r95-67C1bRPTRP7NDWy2GgMGhvJUzroOnW8vTRjsvFmBIoAs-4RNgtf6uO2fhs80EQS-SfXdwsjuBblKPuxk__BK1OqNYNXslfzh_uiPpYZRjyVUxukM6QWC6ZAo", alt: "Apple" },
                { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKSF1_EjWwVHTRvDqAZ7qbM9MSpBr28A2VNithgi-Tp1iBWJsrh6pjSHkEo1AGb932_IN7p1qGZBvk16P7Gsq0S-kwsVAdUDtb82Ikb0hdWImrN1urjAFLVWOd2-Z20iP7pwAZrmHwHrKyggbfiePeel9YikiLdaTeNoxQfO3fIO8HWiJliFl0xdOz6EUpffaZykMQAm5qTXRpJisJevPGe6WyRMYlnap732Y4R_gbYr421X2FocqqGMblIAT2K3tGb-oVG9xb_K0", alt: "Facebook" },
              ].map((item) => (
                <button
                  key={item.alt}
                  className="flex items-center justify-center w-12 h-12 border rounded-full border-[#cfdfe7] dark:border-slate-700"
                >
                  <img src={item.src} alt={`${item.alt} logo`} className="h-6 w-6 dark:invert" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By continuing, you agree to our{" "}
              <a href="#" className="text-primary underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}