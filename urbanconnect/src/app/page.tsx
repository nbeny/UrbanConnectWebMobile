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
              { icon: "group", title: "Connect with Locals" },
              { icon: "calendar_today", title: "Discover Events" },
              { icon: "work", title: "Grow Your Business" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-1 flex-col items-center text-center gap-3 rounded-lg border border-[#cfdfe7] dark:border-slate-700 bg-background-light dark:bg-background-dark p-4"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <h2 className="text-base font-bold leading-tight">{item.title}</h2>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center">
            <div className="flex flex-1 max-w-[480px] flex-col items-stretch gap-3 px-4 py-3">
              <button className="h-12 rounded-lg bg-primary font-bold">Sign Up</button>
              <button className="h-12 rounded-lg bg-primary/20 dark:bg-primary/30 font-bold">
                Log In
              </button>
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