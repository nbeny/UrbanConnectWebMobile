"use client";

import React from 'react';
import { ArrowLeft, ChevronRight, User, Bell, MapPin, Link, Ban, CreditCard, Award, Gift, UserX, Scale } from 'lucide-react';
import { useState } from 'react';
import TopBarMobileUrbanConnect from '@/app/components/Topbar/MobileUrbanConnect';
import TopBarReturnUrbanConnect from '@/app/components/Topbar/ReturnUrbanConnect';

interface SettingItem {
    icon: React.ReactNode;
    label: string;
    href: string;
}

interface SettingSection {
    title: string;
    items: SettingItem[];
}

const SettingsProfile: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const sections: SettingSection[] = [
        {
            title: 'Account',
            items: [
                { icon: <User className="w-5 h-5" />, label: 'Profile Page', href: '/profile/page/default' },
                { icon: <Bell className="w-5 h-5" />, label: 'Notification Settings', href: '/profile/notifications' },
                { icon: <MapPin className="w-5 h-5" />, label: 'Geolocation Preferences', href: '/profile/location' },
            ],
        },
        {
            title: 'Management',
            items: [
                { icon: <Link className="w-5 h-5" />, label: 'User Social Links', href: '/profile/social' },
                { icon: <Ban className="w-5 h-5" />, label: 'User Blocking', href: '/profile/blocking' },
                { icon: <CreditCard className="w-5 h-5" />, label: 'Payment Methods', href: '/profile/payment' },
            ],
        },
        {
            title: 'Premium & Rewards',
            items: [
                { icon: <Award className="w-5 h-5" />, label: 'Premium Plan', href: '/profile/premium' },
                { icon: <Gift className="w-5 h-5" />, label: 'Referral Rewards', href: '/profile/referrals' },
            ],
        },
        {
            title: 'Security & Legal',
            items: [
                { icon: <UserX className="w-5 h-5" />, label: 'Account Status & Deactivation', href: '/profile/account-status' },
                { icon: <Scale className="w-5 h-5" />, label: 'Legal & Privacy', href: '/profile/legal' },
            ],
        },
    ];

    return (
        <div className="min-h-screen relative w-full overflow-auto bg-gradient-to-b from-blue-50 to-gray-100">
            {/* Background urbain visible */}
            <div 
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            <div className="relative isolate w-full" data-name="Container">
                {/* Top Bar */}
                <TopBarReturnUrbanConnect title="Settings" />

                {/* Content */}
                <div className="px-4 py-6 space-y-6">
                    {sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <p className="text-sm font-semibold mb-3 px-4 text-gray-900">
                                {section.title}
                            </p>
                            <div className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden shadow-sm border border-white/20">
                                {section.items.map((item, itemIndex) => (
                                    <button
                                        key={itemIndex}
                                        className={`w-full flex items-center justify-between px-4 py-4 hover:bg-white/20 transition-colors ${
                                            itemIndex !== section.items.length - 1
                                                ? 'border-b border-white/20'
                                                : ''
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                                                {item.icon}
                                            </div>
                                            <p className="text-base font-medium text-gray-900 text-left">
                                                {item.label}
                                            </p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom spacing */}
                <div className="h-8"></div>
            </div>
        </div>
    );
};

export default SettingsProfile;