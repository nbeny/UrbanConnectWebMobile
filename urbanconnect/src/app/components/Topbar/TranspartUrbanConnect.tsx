'use client';

import { Bell, CircleUser, Building2, Filter, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TopBarTranspartUrbanConnect() {
    const [showFilters, setShowFilters] = useState(false);

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
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:scale-105 transition-all duration-300 ${
                                showFilters ? "bg-white/30 text-black" : "text-black hover:text-primary-400"
                            }`}
                        >
                            <Filter className="h-4 w-4 mr-2" />
                            <span>Filters</span>
                        </button>

                        <Link
                            href="/"
                            className="p-3 rounded-full border border-white/20 hover:text-primary-400 transition-all"
                        >
                            <Bell className="h-5 w-5" />
                        </Link>
                        <Link
                            href="/"
                            className="p-3 rounded-full border border-white/20 hover:text-primary-400 transition-all"
                        >
                            <CircleUser className="h-5 w-5" />
                        </Link>
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

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 hover:scale-105 transition-all duration-300 ${
                                    showFilters ? "bg-white/30 text-black" : "text-black hover:text-primary-400"
                                }`}
                            >
                                <Filter className="h-3.5 w-3.5 mr-1" />
                                <span>Filters</span>
                            </button>

                            <Link href="/" className="p-2 rounded-full border border-white/20 hover:text-primary-400 transition-all">
                                <Bell className="h-4 w-4" />
                            </Link>
                            <Link href="/" className="p-2 rounded-full border border-white/20 hover:text-primary-400 transition-all">
                                <CircleUser className="h-4 w-4" />
                            </Link>
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
