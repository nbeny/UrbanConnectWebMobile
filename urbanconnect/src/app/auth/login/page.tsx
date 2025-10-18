"use client";

import { useState } from "react";
import { SiGoogle } from "react-icons/si";
import Image from "next/image";
import urbanBackground from "@/assets/urbanconnectBackground.png";
import TopBarReturnUrbanConnect from "@/app/components/Topbar/ReturnUrbanConnect";

const svgPaths = {
  eyeIcon:
    "M15.9961 12.7361L14.5864 14.1458C14.7322 14.9074 14.5135 15.6204 13.9301 16.2847C13.3468 16.9491 12.5933 17.2083 11.6697 17.0625L10.26 18.4722C10.5355 18.6019 10.815 18.6991 11.0985 18.7639C11.3821 18.8287 11.6859 18.8611 12.01 18.8611C13.2253 18.8611 14.2583 18.4358 15.109 17.5851C15.9597 16.7344 16.385 15.7014 16.385 14.4861C16.385 14.162 16.3526 13.8582 16.2878 13.5747C16.223 13.2911 16.1257 13.0116 15.9961 12.7361ZM19.1072 9.67361L17.6975 11.0347C18.3132 11.5046 18.8601 12.0191 19.3381 12.5781C19.8161 13.1372 20.2253 13.7731 20.5656 14.4861C19.7554 16.1227 18.5928 17.423 17.0777 18.3872C15.5627 19.3513 13.8734 19.8333 12.01 19.8333C11.5401 19.8333 11.0783 19.8009 10.6246 19.7361C10.1709 19.6713 9.72528 19.5741 9.28778 19.4444L7.78083 20.9514C8.44519 21.2269 9.12574 21.4334 9.8225 21.5712C10.5193 21.7089 11.2484 21.7778 12.01 21.7778C14.4568 21.7778 16.6362 21.1013 18.5482 19.7483C20.4602 18.3953 21.8456 16.6412 22.7044 14.4861C22.3318 13.5301 21.8416 12.6429 21.234 11.8247C20.6263 11.0064 19.9174 10.2894 19.1072 9.67361ZM19.5933 3.69444L15.51 7.72917C14.9429 7.55093 14.3717 7.41725 13.7965 7.32812C13.2212 7.239 12.6257 7.19444 12.01 7.19444C9.56324 7.19444 7.38384 7.87095 5.47181 9.22396C3.55977 10.577 2.17435 12.331 1.31556 14.4861C1.65583 15.3449 2.08523 16.1429 2.60375 16.8802C3.12227 17.6175 3.7137 18.2778 4.37806 18.8611L1.70444 21.5833L3.06556 22.9444L20.9544 5.05556L19.5933 3.69444ZM5.73917 17.5C5.26926 17.0787 4.83986 16.6169 4.45097 16.1146C4.06208 15.6123 3.72991 15.0694 3.45444 14.4861C4.26463 12.8495 5.42725 11.5492 6.94229 10.5851C8.45734 9.62095 10.1466 9.13889 12.01 9.13889C12.3341 9.13889 12.65 9.15914 12.9579 9.19965C13.2658 9.24016 13.5818 9.28472 13.9058 9.33333L13.0308 10.2569C12.8526 10.2083 12.6825 10.1719 12.5204 10.1476C12.3584 10.1233 12.1882 10.1111 12.01 10.1111C10.7947 10.1111 9.76174 10.5365 8.91104 11.3872C8.06035 12.2378 7.635 13.2708 7.635 14.4861C7.635 14.6644 7.64715 14.8345 7.67146 14.9965C7.69576 15.1586 7.73222 15.3287 7.78083 15.5069L5.73917 17.5Z",
};

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Login:", formData);
    alert("Logged in successfully!");
  };

  return (
    <div className="bg-white min-h-screen relative w-full overflow-auto">
        <TopBarReturnUrbanConnect title="Login to your account" />
        {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={urbanBackground}
          alt="Urban Connect Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-[1] max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-8">
          {/* Title */}

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-4 w-full">
            <button className="bg-white h-14 relative rounded-xl w-full hover:bg-gray-50 transition-colors">
              <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] inset-0 rounded-xl pointer-events-none"
              />
              <div className="flex items-center justify-center gap-3 h-full px-4">
                <SiGoogle className="w-6 h-6 text-red-500" />
                <span className="font-['Manrope:Medium',_sans-serif] text-[#333333]">
                  Sign in with Google
                </span>
              </div>
            </button>

            <button className="bg-white h-14 relative rounded-xl w-full hover:bg-gray-50 transition-colors">
              <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] inset-0 rounded-xl pointer-events-none"
              />
              <div className="flex items-center justify-center gap-3 h-full px-4">
                <span className="font-['Manrope:Medium',_sans-serif] text-[#333333]">
                  Sign in with Microsoft
                </span>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#e0e0e0]" />
            <span className="text-sm text-[#999999]">OR</span>
            <div className="flex-1 h-px bg-[#e0e0e0]" />
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[#333333] font-['Manrope:Medium',_sans-serif]">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                className="w-full h-14 px-4 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[#333333] font-['Manrope:Medium',_sans-serif]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-14 px-4 pr-12 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 25 28"
                  >
                    <path d={svgPaths.eyeIcon} fill="#999999" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-right">
              <button className="text-sm text-[#4a90e2] font-['Manrope:Medium',_sans-serif] hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#4a90e2] h-14 flex items-center justify-center rounded-xl w-full hover:bg-[#3a7bc8] active:bg-[#2a6bb8] transition-colors"
            >
              <span className="font-['Manrope:Bold',_sans-serif] text-lg text-white">
                Sign In
              </span>
            </button>
          </div>

          {/* Sign up link */}
          <div className="text-center py-6">
            <p className="font-['Manrope:Regular',_sans-serif] text-[#999999]">
              Don’t have an account?{" "}
              <span className="font-['Manrope:Bold',_sans-serif] text-[#333333] hover:text-[#4a90e2] cursor-pointer">
                Create one
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
