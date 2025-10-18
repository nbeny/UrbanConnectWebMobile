import React from "react";
import { Globe, Bell, CircleUser } from "lucide-react";

export default function TopBarMobileUrbanConnect() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <Globe />
            <h1 className="font-bold text-lg">UrbanConnect</h1>
        </div>
        <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
                <CircleUser />
            </button>
        </div>
    </header>
  );
}