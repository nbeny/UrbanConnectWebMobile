import React from "react";

const svgPaths = {
  backIcon:
    "M17.4694 3.70636L7.86261 13.3131C7.72086 13.4549 7.65002 13.6428 7.65002 13.8687C7.65002 14.0946 7.72086 14.2825 7.86261 14.4243L17.4694 24.031C17.7838 24.3455 18.2294 24.3455 18.5439 24.031C18.8583 23.7166 18.8583 23.271 18.5439 22.9565L9.35692 13.8687L18.5439 4.78089C18.8583 4.46648 18.8583 4.02087 18.5439 3.70646C18.2294 3.39205 17.7838 3.39205 17.4694 3.70636Z",
};

interface TopBarProps {
  title: string;
  onBack?: () => void;
  hideBackButton?: boolean;
}

export default function TopBarReturnUrbanConnect({ title, onBack, hideBackButton }: TopBarProps) {
  return (
    <div
      className="backdrop-blur-lg bg-white/10 sticky top-0 w-full z-[50]"
      data-name="Overlay+HorizontalBorder+OverlayBlur"
    >
      {/* Bordure horizontale subtile */}
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />

      {/* Contenu centré */}
      <div className="flex flex-row items-center w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 w-full">
          {/* Bouton retour */}
          <button
            onClick={onBack}
            className={`flex items-center justify-center shrink-0 w-10 h-10 ${
              hideBackButton ? "invisible" : ""
            }`}
          >
            <div className="flex-none scale-y-[-100%]">
              <div className="h-7 w-6">
                <svg
                  className="block w-full h-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 25 28"
                >
                  <path d={svgPaths.backIcon} fill="#333333" />
                </svg>
              </div>
            </div>
          </button>

          {/* Titre */}
          <div className="flex-1 text-center">
            <p className="font-['Manrope:Bold',_sans-serif] text-[#333333] text-lg tracking-tight">
              {title}
            </p>
          </div>

          {/* Espace symétrique droite */}
          <div className="shrink-0 w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
