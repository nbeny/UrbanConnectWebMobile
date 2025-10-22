'use client';

import { Bell, CircleUser, Building2, Search, LogOut, User, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TopBarTranspartSearchUrbanConnect() {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    
    const userMenuRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);

    // Ferme les menus si clic à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setShowUserMenu(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
                setShowNotifications(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const notifications = [
        { id: 1, text: "Nouvel article publié sur Urban Connect" },
        { id: 2, text: "Votre post a reçu 5 likes" },
        { id: 3, text: "Une entreprise a répondu à votre message" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --------- Version Desktop --------- */}
                <div className="hidden md:flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Building2 className="h-8 w-8 text-primary-400" />
                        <span className="text-2xl font-bold font-futura">Urban Connect</span>
                    </div>

                    {/* Barre de recherche */}
                    <div className="flex-1 max-w-2xl mx-6">
                        <div className="flex items-center border rounded-full px-5 py-3 shadow-sm bg-white">
                            <Search className="h-5 w-5 mr-2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles, posts, businesses..."
                                className="flex-1 outline-none text-sm md:text-base"
                            />
                        </div>
                    </div>

                    {/* Boutons */}
                    <div className="flex items-center space-x-3 relative">
                        {/* Notifications */}
                        <div className="relative" ref={notificationsRef}>
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="p-3 rounded-full border border-white/20 hover:text-primary-400 transition-all"
                            >
                                <Bell className="h-5 w-5" />
                            </button>
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg py-2 z-50">
                                    <div className="flex justify-between items-center px-4 py-2 border-b">
                                        <span className="font-semibold">Notifications</span>
                                        <button onClick={() => setShowNotifications(false)}>
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="max-h-60 overflow-y-auto">
                                        {notifications.map((notif) => (
                                            <div key={notif.id} className="px-4 py-2 text-sm hover:bg-gray-100 transition cursor-pointer">
                                                {notif.text}
                                            </div>
                                        ))}
                                        {notifications.length === 0 && (
                                            <div className="px-4 py-2 text-sm text-gray-500">Aucune notification</div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Menu User */}
                        <div className="relative" ref={userMenuRef}>
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="p-3 rounded-full border border-white/20 hover:text-primary-400 transition-all"
                            >
                                <CircleUser className="h-5 w-5" />
                            </button>

                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
                                    <Link
                                        href="/profile"
                                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition"
                                        onClick={() => setShowUserMenu(false)}
                                    >
                                        <User className="h-4 w-4 mr-2" />
                                        Profile
                                    </Link>
                                    <button
                                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition"
                                        onClick={() => {
                                            setShowUserMenu(false);
                                            console.log("Logout clicked");
                                        }}
                                    >
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* --------- Version Mobile --------- */}
                <div className="flex flex-col md:hidden space-y-3 py-3">
                    {/* Ligne du haut : logo + boutons */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <Building2 className="h-7 w-7 text-primary-400" />
                            <span className="text-lg font-bold font-futura">Urban Connect</span>
                        </div>

                        <div className="flex items-center space-x-2 relative">
                            {/* Notifications Mobile */}
                            <div className="relative" ref={notificationsRef}>
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className="p-2 rounded-full border border-white/20 hover:text-primary-400 transition-all"
                                >
                                    <Bell className="h-4 w-4" />
                                </button>
                                {showNotifications && (
                                    <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg py-2 z-50">
                                        <div className="flex justify-between items-center px-4 py-2 border-b">
                                            <span className="font-semibold">Notifications</span>
                                            <button onClick={() => setShowNotifications(false)}>
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <div className="max-h-60 overflow-y-auto">
                                            {notifications.map((notif) => (
                                                <div key={notif.id} className="px-4 py-2 text-sm hover:bg-gray-100 transition cursor-pointer">
                                                    {notif.text}
                                                </div>
                                            ))}
                                            {notifications.length === 0 && (
                                                <div className="px-4 py-2 text-sm text-gray-500">Aucune notification</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Menu User Mobile */}
                            <div className="relative" ref={userMenuRef}>
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="p-2 rounded-full border border-white/20 hover:text-primary-400 transition-all"
                                >
                                    <CircleUser className="h-4 w-4" />
                                </button>

                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg py-2 z-50">
                                        <Link
                                            href="/profile"
                                            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            <User className="h-4 w-4 mr-2" />
                                            Profile
                                        </Link>
                                        <button
                                            className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition"
                                            onClick={() => {
                                                setShowUserMenu(false);
                                                console.log("Logout clicked");
                                            }}
                                        >
                                            <LogOut className="h-4 w-4 mr-2" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Ligne du bas : barre de recherche */}
                    <div className="w-full">
                        <div className="flex items-center border rounded-full px-4 py-2 shadow-sm bg-white">
                            <Search className="h-4 w-4 mr-2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-1 outline-none text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
    );
}
