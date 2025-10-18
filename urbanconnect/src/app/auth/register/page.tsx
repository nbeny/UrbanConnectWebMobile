"use client";

import { useState } from "react";
import { SiGoogle } from 'react-icons/si';
import Image from "next/image";
import urbanBackground from "@/assets/urbanconnectBackground.png";
import TopBarReturnUrbanConnect from "@/app/components/Topbar/ReturnUrbanConnect";

const svgPaths = {
  p1f568bf0: "M5.20444 4.27778C4.66972 4.27778 4.21197 4.46817 3.83118 4.84896C3.45039 5.22975 3.26 5.6875 3.26 6.22222V19.8333C3.26 20.3681 3.45039 20.8258 3.83118 21.2066C4.21197 21.5874 4.66972 21.7778 5.20444 21.7778H6.17667V23.7222H8.12111V21.7778H15.8989V23.7222H17.8433V21.7778H18.8156C19.3503 21.7778 19.808 21.5874 20.1888 21.2066C20.5696 20.8258 20.76 20.3681 20.76 19.8333V6.22222C20.76 5.6875 20.5696 5.22975 20.1888 4.84896C19.808 4.46817 19.3503 4.27778 18.8156 4.27778H5.20444ZM5.20444 6.22222H18.8156V15.9444H5.20444V6.22222ZM5.20444 17.8889H18.8156V19.8333H5.20444V17.8889Z",
  p3449c830: "M7.95097 13.0278L13.3954 7.58333L12.01 6.22222L4.23222 14L12.01 21.7778L13.3954 20.4167L7.95097 14.9722H19.7878V13.0278H7.95097Z",
  p3b6f6d00: "M15.9961 12.7361L14.5864 14.1458C14.7322 14.9074 14.5135 15.6204 13.9301 16.2847C13.3468 16.9491 12.5933 17.2083 11.6697 17.0625L10.26 18.4722C10.5355 18.6019 10.815 18.6991 11.0985 18.7639C11.3821 18.8287 11.6859 18.8611 12.01 18.8611C13.2253 18.8611 14.2583 18.4358 15.109 17.5851C15.9597 16.7344 16.385 15.7014 16.385 14.4861C16.385 14.162 16.3526 13.8582 16.2878 13.5747C16.223 13.2911 16.1257 13.0116 15.9961 12.7361ZM19.1072 9.67361L17.6975 11.0347C18.3132 11.5046 18.8601 12.0191 19.3381 12.5781C19.8161 13.1372 20.2253 13.7731 20.5656 14.4861C19.7554 16.1227 18.5928 17.423 17.0777 18.3872C15.5627 19.3513 13.8734 19.8333 12.01 19.8333C11.5401 19.8333 11.0783 19.8009 10.6246 19.7361C10.1709 19.6713 9.72528 19.5741 9.28778 19.4444L7.78083 20.9514C8.44519 21.2269 9.12574 21.4334 9.8225 21.5712C10.5193 21.7089 11.2484 21.7778 12.01 21.7778C14.4568 21.7778 16.6362 21.1013 18.5482 19.7483C20.4602 18.3953 21.8456 16.6412 22.7044 14.4861C22.3318 13.5301 21.8416 12.6429 21.234 11.8247C20.6263 11.0064 19.9174 10.2894 19.1072 9.67361ZM19.5933 3.69444L15.51 7.72917C14.9429 7.55093 14.3717 7.41725 13.7965 7.32812C13.2212 7.239 12.6257 7.19444 12.01 7.19444C9.56324 7.19444 7.38384 7.87095 5.47181 9.22396C3.55977 10.577 2.17435 12.331 1.31556 14.4861C1.65583 15.3449 2.08523 16.1429 2.60375 16.8802C3.12227 17.6175 3.7137 18.2778 4.37806 18.8611L1.70444 21.5833L3.06556 22.9444L20.9544 5.05556L19.5933 3.69444ZM5.73917 17.5C5.26926 17.0787 4.83986 16.6169 4.45097 16.1146C4.06208 15.6123 3.72991 15.0694 3.45444 14.4861C4.26463 12.8495 5.42725 11.5492 6.94229 10.5851C8.45734 9.62095 10.1466 9.13889 12.01 9.13889C12.3341 9.13889 12.65 9.15914 12.9579 9.19965C13.2658 9.24016 13.5818 9.28472 13.9058 9.33333L13.0308 10.2569C12.8526 10.2083 12.6825 10.1719 12.5204 10.1476C12.3584 10.1233 12.1882 10.1111 12.01 10.1111C10.7947 10.1111 9.76174 10.5365 8.91104 11.3872C8.06035 12.2378 7.635 13.2708 7.635 14.4861C7.635 14.6644 7.64715 14.8345 7.67146 14.9965C7.69576 15.1586 7.73222 15.3287 7.78083 15.5069L5.73917 17.5Z",
}


export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthday: "",
    referralCode: "",
  });

  const [preferences, setPreferences] = useState({
    newsletter: true,
    emailUpdates: false,
    smsNotifications: false,
    pushNotifications: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  const handleSubmit = () => {
    if (!agreedToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    console.log("Form submitted:", { formData, preferences });
    alert("Account created successfully!");
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
        <TopBarReturnUrbanConnect title="Create your account" />
        <div className="relative w-full z-[1]" data-name="Container">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="space-y-8">
              {/* Boutons OAuth */}
              <div className="flex flex-col gap-4 w-full" data-name="Container">
                <button className="bg-white h-14 relative rounded-xl w-full hover:bg-gray-50 transition-colors" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-xl" />
                  <div className="flex items-center justify-center gap-3 h-full px-4">
                    <SiGoogle className="w-6 h-6 text-red-500" />
                    <span className="font-['Manrope:Medium',_sans-serif] text-[#333333]">Sign up with Google</span>
                  </div>
                </button>
                <button className="bg-white h-14 relative rounded-xl w-full hover:bg-gray-50 transition-colors" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-xl" />
                  <div className="flex items-center justify-center gap-3 h-full px-4">
                    {/* <SiMicrosoft className="w-6 h-6 text-blue-500" /> */}
                    <span className="font-['Manrope:Medium',_sans-serif] text-[#333333]">Sign up with Microsoft</span>
                  </div>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 w-full" data-name="Container">
                <div className="flex-1 h-px bg-[#e0e0e0]" />
                <span className="font-['Manrope:Regular',_sans-serif] text-[#999999] text-sm">OR</span>
                <div className="flex-1 h-px bg-[#e0e0e0]" />
              </div>

              {/* Account Details Section */}
              <div className="space-y-6">
                <h2 className="font-['Manrope:Bold',_sans-serif] text-[#333333] text-lg tracking-tight text-center sm:text-left">
                  Account Details
                </h2>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full h-14 px-4 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Username */}
                  <div className="space-y-2">
                    <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                      Username
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleInputChange("username", e.target.value)}
                        placeholder="Your public display name"
                        className="w-full h-14 px-4 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        placeholder="Create a password"
                        className="w-full h-14 px-4 pr-12 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <div className="flex-none scale-y-[-100%]">
                          <div className="h-7 w-6">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
                              <path d={svgPaths.p3b6f6d00} fill="var(--fill-0, #999999)" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full h-14 px-4 pr-12 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <div className="flex-none scale-y-[-100%]">
                          <div className="h-7 w-6">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
                              <path d={svgPaths.p3b6f6d00} fill="var(--fill-0, #999999)" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="space-y-6">
                <h2 className="font-['Manrope:Bold',_sans-serif] text-[#333333] text-lg tracking-tight text-center sm:text-left">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Your first name"
                      className="w-full h-14 px-4 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Your last name"
                      className="w-full h-14 px-4 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-14 px-4 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                    />
                  </div>

                  {/* Birthday */}
                  <div className="space-y-2">
                    <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                      Birthday
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.birthday}
                        onChange={(e) => handleInputChange("birthday", e.target.value)}
                        placeholder="MM/DD/YYYY"
                        className="w-full h-14 px-4 pr-12 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="flex-none scale-y-[-100%]">
                          <div className="h-7 w-6">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 28">
                              <path d={svgPaths.p1f568bf0} fill="var(--fill-0, #999999)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div className="space-y-6">
                <h2 className="font-['Manrope:Bold',_sans-serif] text-[#333333] text-lg tracking-tight text-center sm:text-left">
                  Preferences
                </h2>

                <div className="space-y-4">
                  {[
                    { key: "newsletter", label: "Newsletter", value: preferences.newsletter },
                    { key: "emailUpdates", label: "Email Updates", value: preferences.emailUpdates },
                    { key: "smsNotifications", label: "SMS Notifications", value: preferences.smsNotifications },
                    { key: "pushNotifications", label: "Push Notifications", value: preferences.pushNotifications },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between py-2">
                      <span className="font-['Manrope:Regular',_sans-serif] text-[#333333]">{item.label}</span>
                      <button
                        onClick={() => togglePreference(item.key as keyof typeof preferences)}
                        className="relative inline-flex"
                      >
                        <div
                          className={`h-6 rounded-full w-11 transition-colors ${item.value ? "bg-[#4a90e2]" : "bg-gray-200"
                            }`}
                        />
                        <div
                          className={`absolute bg-white rounded-full size-5 top-0.5 transition-all shadow-sm ${item.value ? "left-[22px]" : "left-0.5"
                            }`}
                        >
                          <div
                            aria-hidden="true"
                            className={`absolute border border-solid inset-0 pointer-events-none rounded-full ${item.value ? "border-white" : "border-gray-300"
                              }`}
                          />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referral Code */}
              <div className="space-y-2">
                <label className="block font-['Manrope:Medium',_sans-serif] text-[#333333]">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  value={formData.referralCode}
                  onChange={(e) => handleInputChange("referralCode", e.target.value)}
                  placeholder="Enter code if you have one"
                  className="w-full h-14 px-4 bg-white border border-[#e0e0e0] rounded-xl font-['Manrope:Regular',_sans-serif] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 py-4">
                <button
                  onClick={() => setAgreedToTerms(!agreedToTerms)}
                  className={`relative rounded-lg shrink-0 size-5 flex items-center justify-center border transition-colors ${agreedToTerms ? "bg-[#4a90e2] border-[#4a90e2]" : "bg-gray-100 border-[#e0e0e0]"
                    }`}
                >
                  {agreedToTerms && (
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
                <p className="font-['Manrope:Regular',_sans-serif] text-[#333333] text-sm flex-1">
                  I confirm I am 18 years or older and agree to the{" "}
                  <button className="font-['Manrope:Medium',_sans-serif] text-[#4a90e2] hover:underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="font-['Manrope:Medium',_sans-serif] text-[#4a90e2] hover:underline">
                    Privacy Policy
                  </button>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-[#4a90e2] h-14 flex items-center justify-center rounded-xl w-full hover:bg-[#3a7bc8] active:bg-[#2a6bb8] transition-colors"
              >
                <span className="font-['Manrope:Bold',_sans-serif] text-lg text-white">
                  Create Account
                </span>
              </button>

              {/* Sign In Link */}
              <div className="text-center py-6">
                <button className="font-['Manrope:Regular',_sans-serif] text-[#999999]">
                  Already have an account?{" "}
                  <span className="font-['Manrope:Bold',_sans-serif] text-[#333333] hover:text-[#4a90e2]">
                    Sign In
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
