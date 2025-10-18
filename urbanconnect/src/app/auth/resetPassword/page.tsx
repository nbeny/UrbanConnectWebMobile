"use client";
import React, { useState } from "react";
import Image from "next/image";
import urbanBackground from "@/assets/urbanconnectBackground.png";
import { Building2 } from "lucide-react";
import TopBarReturnUrbanConnect from "@/app/components/Topbar/ReturnUrbanConnect";

export default function ResetPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Reset link sent to:", email);
        // 👉 Ici tu appelleras ton endpoint (Cognito, NestJS, etc.)
    };

    return (
        <div className="bg-white min-h-screen relative w-full overflow-auto" data-name="Frame">
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
                <TopBarReturnUrbanConnect title="Create Your Account" />
                <div
                    className="bg-white min-h-screen relative w-full overflow-auto text-[#000000]"
                    data-name="Frame"
                >
                    {/* Background */}
                    <div className="absolute inset-0 opacity-10">
                        <Image
                            src={urbanBackground}
                            alt="Urban Connect Background"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Container */}
                    <div className="relative isolate flex min-h-screen flex-col items-center justify-center px-6">
                        {/* Logo */}
                        <div className="flex flex-col items-center mb-8">
                            <Building2 className="size-12" color="#333" />
                            <h1 className="text-3xl font-bold mt-2 text-primary">UrbanConnect</h1>
                        </div>

                        {/* Card */}
                        <div className="w-full max-w-sm rounded-xl border border-[#cfdfe7] bg-white p-6 shadow-md">
                            <h2 className="text-xl font-bold text-center mb-2 text-[#000000]">
                                Reset your password
                            </h2>
                            <p className="text-sm text-gray-500 text-center mb-6">
                                Enter your email address and we’ll send you a link to reset it.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-12 px-4 rounded-lg border border-[#cfdfe7] bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                                <button
                                    type="submit"
                                    className="h-12 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition"
                                >
                                    Send Reset Link
                                </button>
                            </form>

                            <div className="text-center mt-6 text-sm text-gray-600">
                                <a href="/login" className="text-primary font-semibold underline">
                                    Back to Log In
                                </a>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-xs text-gray-500 text-center mt-8">
                            © {new Date().getFullYear()} UrbanConnect. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
