"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TopBarReturnUrbanConnect from "@/app/components/Topbar/ReturnUrbanConnect";
import urbanBackground from "@/assets/urbanconnectBackground.png";

interface SuccessPageProps {
  /** Le titre principal (ex: "Logged in successfully") */
  title: string;
  /** Le message complémentaire */
  message: string;
  /** Le texte du bouton principal */
  buttonLabel?: string;
  /** Action du bouton (par défaut redirection vers /home) */
  onButtonClick?: () => void;
  /** Si tu veux cacher le bouton retour dans la TopBar */
  hideBackButton?: boolean;
}

export default function SuccessPage({
  title,
  message,
  buttonLabel = "Continue",
  onButtonClick,
  hideBackButton = false,
}: SuccessPageProps) {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen relative w-full overflow-hidden">
      {/* Barre supérieure */}
      <TopBarReturnUrbanConnect
        title="UrbanConnect"
        hideBackButton={hideBackButton}
      />

      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={urbanBackground}
          alt="UrbanConnect background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-[1] flex flex-col items-center justify-center px-6 py-16 min-h-[80vh] text-center space-y-8">
        {/* Animation cercle + check */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center w-24 h-24 bg-[#4a90e2]/10 rounded-full"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4a90e2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <path d="M20 6L9 17l-5-5" />
          </motion.svg>
        </motion.div>

        {/* Texte */}
        <div className="space-y-2">
          <h1 className="font-['Manrope:Bold',_sans-serif] text-3xl text-[#333333] tracking-tight">
            {title}
          </h1>
          <p className="font-['Manrope:Regular',_sans-serif] text-[#666666] text-base max-w-sm mx-auto">
            {message}
          </p>
        </div>

        {/* Bouton */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onButtonClick || (() => router.push("/home"))}
          className="bg-[#4a90e2] mt-4 h-14 px-10 flex items-center justify-center rounded-xl w-full max-w-xs hover:bg-[#3a7bc8] active:bg-[#2a6bb8] transition-colors"
        >
          <span className="font-['Manrope:Bold',_sans-serif] text-lg text-white">
            {buttonLabel}
          </span>
        </motion.button>
      </div>
    </div>
  );
}
