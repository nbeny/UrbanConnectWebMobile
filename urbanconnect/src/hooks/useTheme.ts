"use client";

import { useState, useEffect, useCallback } from 'react';

// Couleurs centralisées pour tous les textes
export const TEXT_COLORS = {
  PRIMARY: '#1f2937',    // Noir principal pour tous les textes
  SECONDARY: '#6b7280',  // Gris pour textes secondaires
  WHITE: '#ffffff',      // Blanc pour boutons primaires
} as const;

export interface ThemeConfig {
  // Couleurs des cartes
  cardBackground: string;
  cardOpacity: number;
  cardBorder: string;
  cardBlur: number;
  
  // Couleur du background et de l'image
  backgroundOpacity: number;
  backgroundOverlay: string;
  
  // Couleurs des textes
  primaryText: string;
  secondaryText: string;
  accentColor: string;
  
  // Couleurs des boutons
  buttonPrimary: string;
  buttonSecondary: string;
  
  // Thème général
  themeName: string;
  isDark: boolean;
}

const defaultTheme: ThemeConfig = {
  cardBackground: 'white',
  cardOpacity: 25,
  cardBorder: 'white/30',
  cardBlur: 18,
  
  backgroundOpacity: 85, // Très light pour un look épuré
  backgroundOverlay: 'linear-gradient(135deg, rgba(212, 165, 165, 0.08), rgba(250, 248, 246, 0.05) 60%, transparent 90%)',
  
  primaryText: '#1f2937', // Gris foncé pour la lisibilité
  secondaryText: '#6b7280', // Gris moyen pour le texte secondaire
  accentColor: '#d4a5a5', // Rose poudré doux
  
  buttonPrimary: '#d4a5a5',
  buttonSecondary: '#faf8f6', // Beige très clair
  
  themeName: 'Blanc Rose Douceur',
  isDark: false
};

// Thèmes prédéfinis - 13 light mode (61%) et 8 dark mode (39%)
const presetThemes: ThemeConfig[] = [
  // Thème par défaut en premier
  defaultTheme,
  
  // 12 Thèmes light mode (60%) - Blanc/Beige/Rose très clairs en priorité
  {
    ...defaultTheme,
    themeName: "Poudre de Rose",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#e8b4b8",
    buttonPrimary: "#e8b4b8",
    buttonSecondary: "#fdf2f2",
    backgroundOpacity: 88, // Ultra light
    backgroundOverlay: "linear-gradient(135deg, rgba(232, 180, 184, 0.06), rgba(232, 180, 184, 0.04) 60%, transparent 95%)"
  },
  {
    ...defaultTheme,
    themeName: "Crème Vanille",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#d4b896",
    buttonPrimary: "#d4b896",
    buttonSecondary: "#faf7f0",
    backgroundOpacity: 90, // Ultra light
    backgroundOverlay: "linear-gradient(135deg, rgba(212, 184, 150, 0.05), rgba(212, 184, 150, 0.03) 50%, transparent 96%)"
  },
  {
    ...defaultTheme,
    themeName: "Blanc Rosé",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#f0c2c7",
    buttonPrimary: "#f0c2c7",
    buttonSecondary: "#fefcfc",
    backgroundOpacity: 92, // Ultra light
    backgroundOverlay: "linear-gradient(135deg, rgba(240, 194, 199, 0.05), rgba(240, 194, 199, 0.03) 40%, transparent 97%)"
  },
  {
    ...defaultTheme,
    themeName: "Beige Poudrée",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#c9a96e",
    buttonPrimary: "#c9a96e",
    buttonSecondary: "#f8f5f0",
    backgroundOpacity: 87, // Très light
    backgroundOverlay: "linear-gradient(135deg, rgba(201, 169, 110, 0.06), rgba(201, 169, 110, 0.04) 55%, transparent 94%)"
  },
  {
    ...defaultTheme,
    themeName: "Golden Hour",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#f59e0b",
    buttonPrimary: "#f59e0b",
    buttonSecondary: "#fef3c7",
    backgroundOpacity: 80, // Ultra light
    backgroundOverlay: "linear-gradient(135deg, rgba(245, 158, 11, 0.18), transparent 64%)"
  },
  {
    ...defaultTheme,
    themeName: "Teal Wave",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#14b8a6",
    buttonPrimary: "#14b8a6",
    buttonSecondary: "#ccfbf1",
    backgroundOpacity: 68, // Light
    backgroundOverlay: "linear-gradient(135deg, rgba(20, 184, 166, 0.16), transparent 67%)"
  },
  {
    ...defaultTheme,
    themeName: "Rose Bloom",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#ec4899",
    buttonPrimary: "#ec4899",
    buttonSecondary: "#fce7f3",
    backgroundOpacity: 62, // Light
    backgroundOverlay: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), transparent 69%)"
  },
  {
    ...defaultTheme,
    themeName: "Indigo Mist",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#6366f1",
    buttonPrimary: "#6366f1",
    buttonSecondary: "#e0e7ff",
    backgroundOpacity: 72, // Très light
    backgroundOverlay: "linear-gradient(135deg, rgba(99, 102, 241, 0.14), transparent 71%)"
  },
  {
    ...defaultTheme,
    themeName: "Lime Zest",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#84cc16",
    buttonPrimary: "#84cc16",
    buttonSecondary: "#ecfccb",
    backgroundOpacity: 78, // Ultra light
    backgroundOverlay: "linear-gradient(135deg, rgba(132, 204, 22, 0.17), transparent 66%)"
  },
  {
    ...defaultTheme,
    themeName: "Cyan Splash",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#06b6d4",
    buttonPrimary: "#06b6d4",
    buttonSecondary: "#cffafe",
    backgroundOpacity: 74, // Très light
    backgroundOverlay: "linear-gradient(135deg, rgba(6, 182, 212, 0.16), transparent 68%)"
  },
  {
    ...defaultTheme,
    themeName: "Peach Glow",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#fb7185",
    buttonPrimary: "#fb7185",
    buttonSecondary: "#fce7f3",
    backgroundOpacity: 58, // Light
    backgroundOverlay: "linear-gradient(135deg, rgba(251, 113, 133, 0.15), transparent 70%)"
  },
  {
    ...defaultTheme,
    themeName: "Sage Whisper",
    primaryText: "#1f2937",
    secondaryText: "#6b7280",
    accentColor: "#059669",
    buttonPrimary: "#059669",
    buttonSecondary: "#d1fae5",
    backgroundOpacity: 71, // Très light
    backgroundOverlay: "linear-gradient(135deg, rgba(5, 150, 105, 0.18), transparent 63%)"
  },
  
  // 8 Thèmes dark mode (40%)
  {
    ...defaultTheme,
    isDark: true,
    themeName: "Midnight Ocean",
    accentColor: "#60a5fa",
    primaryText: "#e2e8f0",
    secondaryText: "#94a3b8",
    cardBackground: "#1e293b",
    cardOpacity: 85,
    cardBlur: 12,
    buttonPrimary: "#60a5fa",
    buttonSecondary: "#334155",
    backgroundOverlay: "linear-gradient(135deg, rgba(96, 165, 250, 0.12), transparent 75%)"
  },
  {
    ...defaultTheme,
    isDark: true,
    themeName: "Deep Purple",
    accentColor: "#a855f7",
    primaryText: "#e5e7eb",
    secondaryText: "#9ca3af",
    cardBackground: "#1f2937",
    cardOpacity: 88,
    cardBlur: 14,
    buttonPrimary: "#a855f7",
    buttonSecondary: "#374151",
    backgroundOverlay: "linear-gradient(135deg, rgba(168, 85, 247, 0.14), transparent 72%)"
  },
  {
    ...defaultTheme,
    isDark: true,
    themeName: "Ember Night",
    accentColor: "#f87171",
    primaryText: "#fed7d7",
    secondaryText: "#fca5a5",
    cardBackground: "#1c1917",
    cardOpacity: 90,
    cardBlur: 16,
    buttonPrimary: "#f87171",
    buttonSecondary: "#44403c",
    backgroundOverlay: "linear-gradient(135deg, rgba(248, 113, 113, 0.13), transparent 73%)"
  },
  {
    ...defaultTheme,
    isDark: true,
    themeName: "Forest Shadow",
    accentColor: "#34d399",
    primaryText: "#d1fae5",
    secondaryText: "#a7f3d0",
    cardBackground: "#0f1f13",
    cardOpacity: 87,
    cardBlur: 13,
    buttonPrimary: "#34d399",
    buttonSecondary: "#1a3b1f",
    backgroundOverlay: "linear-gradient(135deg, rgba(52, 211, 153, 0.12), transparent 74%)"
  },
  {
    ...defaultTheme,
    isDark: true,
    themeName: "Golden Dusk",
    accentColor: "#fbbf24",
    primaryText: "#fef3c7",
    secondaryText: "#fde68a",
    cardBackground: "#1f1611",
    cardOpacity: 89,
    cardBlur: 15,
    buttonPrimary: "#fbbf24",
    buttonSecondary: "#451a03",
    backgroundOverlay: "linear-gradient(135deg, rgba(251, 191, 36, 0.13), transparent 73%)"
  },
  {
    ...defaultTheme,
    isDark: true,
    themeName: "Cyan Storm",
    accentColor: "#22d3ee",
    primaryText: "#cffafe",
    secondaryText: "#a5f3fc",
    cardBackground: "#0c1821",
    cardOpacity: 86,
    cardBlur: 12,
    buttonPrimary: "#22d3ee",
    buttonSecondary: "#155e75",
    backgroundOverlay: "linear-gradient(135deg, rgba(34, 211, 238, 0.12), transparent 75%)"
  },
  {
    ...defaultTheme,
    isDark: true,
    themeName: "Magenta Moon",
    accentColor: "#e879f9",
    primaryText: "#fae8ff",
    secondaryText: "#f3e8ff",
    cardBackground: "#1a1225",
    cardOpacity: 88,
    cardBlur: 14,
    buttonPrimary: "#e879f9",
    buttonSecondary: "#4c1d95",
    backgroundOverlay: "linear-gradient(135deg, rgba(232, 121, 249, 0.14), transparent 72%)"
  },
  {
    ...defaultTheme,
    isDark: true,
    themeName: "Steel Twilight",
    accentColor: "#64748b",
    primaryText: "#f1f5f9",
    secondaryText: "#cbd5e1",
    cardBackground: "#0f172a",
    cardOpacity: 84,
    cardBlur: 11,
    buttonPrimary: "#64748b",
    buttonSecondary: "#1e293b",
    backgroundOverlay: "linear-gradient(135deg, rgba(100, 116, 139, 0.11), transparent 76%)"
  }
];

export const useTheme = (profileId?: string) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(defaultTheme);
  const [isLoading, setIsLoading] = useState(true);

  // Charger le thème depuis localStorage au montage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedTheme = profileId 
        ? localStorage.getItem(`theme_${profileId}`)
        : localStorage.getItem('theme_global');
      
      if (savedTheme) {
        const theme = JSON.parse(savedTheme);
        setCurrentTheme(theme);
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    } finally {
      setIsLoading(false);
    }
  }, [profileId]);

  // Écouter les événements de changement de thème
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleThemeChange = (event: CustomEvent) => {
      const { theme, profileId: eventProfileId } = event.detail;
      
      // Ne mettre à jour que si c'est pour le bon profile ou un changement global
      if (!profileId && !eventProfileId || profileId === eventProfileId) {
        setCurrentTheme({ ...theme }); // Force re-render avec un nouvel objet
      }
    };

    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, [profileId]);

  // Sauvegarder le thème
  const saveTheme = (theme: ThemeConfig) => {
    try {
      if (typeof window !== 'undefined') {
        const key = profileId ? `theme_${profileId}` : 'theme_global';
        localStorage.setItem(key, JSON.stringify(theme));
      }
      setCurrentTheme({ ...theme }); // Force re-render avec un nouvel objet
      
      // Émettre un événement personnalisé pour notifier les autres composants
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('themeChanged', { 
          detail: { theme, profileId: profileId || 'global' } 
        }));
      }
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  // Mettre à jour une propriété spécifique du thème
  const updateTheme = (updates: Partial<ThemeConfig>) => {
    const newTheme = { ...currentTheme, ...updates };
    setCurrentTheme(newTheme);
    
    // Auto-save si on a un profileId
    if (profileId) {
      saveTheme(newTheme);
    } else {
      // Si pas de profileId, on met quand même à jour l'état local
      setCurrentTheme({ ...newTheme }); // Force re-render
    }
  };

  // Appliquer un thème prédéfini
  const applyPreset = (presetName: string) => {
    const preset = presetThemes.find(theme => theme.themeName === presetName);
    if (preset) {
      saveTheme(preset);
    }
  };

  // Réinitialiser au thème par défaut
  const resetTheme = () => {
    saveTheme(defaultTheme);
    if (profileId) {
      localStorage.removeItem(`theme_${profileId}`);
    }
  };

  // Générer les styles CSS pour le thème actuel
  const getThemeStyles = useCallback(() => {
    const theme = currentTheme;
    
    // Tous les textes en noir pour tous les thèmes
    const getAdjustedTextColor = () => {
      return {
        primary: TEXT_COLORS.PRIMARY,   // Noir pour tous les thèmes
        secondary: TEXT_COLORS.SECONDARY // Gris pour tous les thèmes
      };
    };
    
    const adjustedTextColors = getAdjustedTextColor();
    
    return {
      // Variables CSS personnalisées
      '--card-bg': theme.cardBackground,
      '--card-opacity': `${theme.cardOpacity}%`,
      '--card-border': theme.cardBorder,
      '--card-blur': `${theme.cardBlur}px`,
      '--bg-opacity': `${theme.backgroundOpacity}%`,
      '--primary-text': adjustedTextColors.primary,
      '--secondary-text': adjustedTextColors.secondary,
      '--accent-color': theme.accentColor,
      '--btn-primary': theme.buttonPrimary,
      '--btn-secondary': theme.buttonSecondary,
      
      // Classes complètes pour tous les éléments
      cardClass: theme.isDark 
        ? `backdrop-blur-[${theme.cardBlur}px] bg-gray-900/${theme.cardOpacity} border border-gray-700/30 rounded-xl`
        : `backdrop-blur-[${theme.cardBlur}px] bg-white/${theme.cardOpacity} border border-white/20 rounded-xl`,
        
      backgroundOverlay: theme.backgroundOverlay,
      backgroundFilter: (() => {
        const colorMaps = {
          // Nouveau thème par défaut - blanc/beige/rose très clair (tons neutres et doux)
          '#d4a5a5': { hue: '0deg', sepia: '0.1', saturate: '0.9', brightness: '1.8', contrast: '1.0' }, // Blanc Rose Douceur
          
          // Nouveaux thèmes blanc/beige/rose - tons neutres harmonieux
          '#e8b4b8': { hue: '0deg', sepia: '0.08', saturate: '0.85', brightness: '1.85', contrast: '1.0' }, // Poudre de Rose
          '#d4b896': { hue: '0deg', sepia: '0.12', saturate: '0.9', brightness: '1.75', contrast: '1.0' }, // Crème Vanille
          '#f0c2c7': { hue: '0deg', sepia: '0.06', saturate: '0.8', brightness: '1.9', contrast: '1.0' }, // Blanc Rosé
          '#c9a96e': { hue: '0deg', sepia: '0.15', saturate: '0.95', brightness: '1.7', contrast: '1.0' }, // Beige Poudrée
          
          // Ancien thème par défaut (gardé pour compatibilité)
          '#4a90e2': { hue: '210deg', sepia: '0.1', saturate: '1.2', brightness: '1.4', contrast: '1.05' }, // Default Profile
          
          // Thèmes clairs - TRÈS LIGHT avec couleurs visibles mais lumineuses
          '#2563eb': { hue: '225deg', sepia: '0.2', saturate: '1.4', brightness: '1.6', contrast: '1.1' }, // Ocean Breeze  
          '#10b981': { hue: '155deg', sepia: '0.15', saturate: '1.3', brightness: '1.7', contrast: '1.05' }, // Emerald Garden
          '#7c3aed': { hue: '280deg', sepia: '0.2', saturate: '1.4', brightness: '1.6', contrast: '1.1' }, // Violet Sky
          '#f97316': { hue: '25deg', sepia: '0.25', saturate: '1.5', brightness: '1.8', contrast: '1.05' }, // Coral Sunset
          '#f59e0b': { hue: '45deg', sepia: '0.3', saturate: '1.4', brightness: '1.8', contrast: '1.05' }, // Golden Hour
          '#14b8a6': { hue: '175deg', sepia: '0.15', saturate: '1.3', brightness: '1.7', contrast: '1.05' }, // Teal Wave
          '#ec4899': { hue: '320deg', sepia: '0.2', saturate: '1.4', brightness: '1.6', contrast: '1.1' }, // Rose Bloom
          '#6366f1': { hue: '235deg', sepia: '0.2', saturate: '1.4', brightness: '1.6', contrast: '1.1' }, // Indigo Mist
          '#84cc16': { hue: '80deg', sepia: '0.25', saturate: '1.4', brightness: '1.7', contrast: '1.05' }, // Lime Zest
          '#06b6d4': { hue: '190deg', sepia: '0.15', saturate: '1.3', brightness: '1.7', contrast: '1.05' }, // Cyan Splash
          '#fb7185': { hue: '345deg', sepia: '0.2', saturate: '1.4', brightness: '1.6', contrast: '1.1' }, // Peach Glow
          '#059669': { hue: '140deg', sepia: '0.15', saturate: '1.3', brightness: '1.7', contrast: '1.05' }, // Sage Whisper
          
          // Thèmes sombres - brightness réduit mais pas noir complet
          '#60a5fa': { hue: '215deg', sepia: '0.7', saturate: '2.2', brightness: '0.9', contrast: '1.3' }, // Midnight Ocean
          '#a855f7': { hue: '270deg', sepia: '0.8', saturate: '2.4', brightness: '0.8', contrast: '1.4' }, // Deep Purple
          '#f87171': { hue: '345deg', sepia: '0.9', saturate: '2.6', brightness: '0.9', contrast: '1.3' }, // Ember Night
          '#34d399': { hue: '155deg', sepia: '0.8', saturate: '2.4', brightness: '0.9', contrast: '1.3' }, // Forest Shadow
          '#fbbf24': { hue: '50deg', sepia: '1.0', saturate: '2.6', brightness: '0.9', contrast: '1.4' }, // Golden Dusk
          '#22d3ee': { hue: '190deg', sepia: '0.7', saturate: '2.2', brightness: '0.8', contrast: '1.3' }, // Cyan Storm
          '#e879f9': { hue: '300deg', sepia: '0.8', saturate: '2.4', brightness: '0.8', contrast: '1.4' }, // Magenta Moon
          '#64748b': { hue: '215deg', sepia: '0.4', saturate: '1.6', brightness: '0.7', contrast: '1.2' }, // Steel Twilight
        };
        
        const colorMap = colorMaps[theme.accentColor] || { hue: '0deg', sepia: '0.6', saturate: '2.0', brightness: '1.2', contrast: '1.2' };
        
        return `brightness(${colorMap.brightness}) contrast(${colorMap.contrast}) hue-rotate(${colorMap.hue}) sepia(${colorMap.sepia}) saturate(${colorMap.saturate})`;
      })(),
      
      // Textes avec couleurs ajustées du thème
      textPrimary: `text-[${adjustedTextColors.primary}]`,
      textSecondary: `text-[${adjustedTextColors.secondary}]`,
      textAccent: `text-[${theme.accentColor}]`,
      
      // Styles inline pour garantir les bonnes couleurs
      textPrimaryStyle: { color: adjustedTextColors.primary },
      textSecondaryStyle: { color: adjustedTextColors.secondary },
      textAccentStyle: { color: theme.accentColor },
      
      // Boutons avec couleurs du thème
      buttonPrimary: `bg-[${theme.buttonPrimary}] hover:bg-[${theme.buttonPrimary}]/80 text-white transition-colors`,
      buttonSecondary: `bg-[${theme.buttonSecondary}] hover:bg-[${theme.buttonSecondary}]/80 transition-colors`,
      
      // Nouvelles classes pour éléments spécifiques
      headerClass: theme.isDark 
        ? `backdrop-blur-[${theme.cardBlur}px] bg-gray-900/${theme.cardOpacity} border border-gray-700/30`
        : `backdrop-blur-[${theme.cardBlur}px] bg-white/${theme.cardOpacity} border border-white/20`,
      
      menuItemActive: theme.isDark
        ? `text-[${theme.accentColor}] bg-gray-700/${theme.cardOpacity * 0.6}`
        : `text-[${theme.accentColor}] bg-white/${theme.cardOpacity * 0.6}`,
      
      menuItemInactive: theme.isDark
        ? `text-[${adjustedTextColors.primary}] hover:text-[${theme.accentColor}] hover:bg-gray-700/30`
        : `text-[${adjustedTextColors.primary}] hover:text-[${theme.accentColor}] hover:bg-white/30`,
        
      // Classes pour les badges et éléments colorés
      badgeBorder: `border-2 border-[${theme.accentColor}]`,
      inputClass: theme.isDark
        ? `bg-gray-800 border-gray-600 focus:border-[${theme.accentColor}]`
        : `bg-white border-gray-300 focus:border-[${theme.accentColor}]`,
      
      // Style inline pour les inputs avec couleur de texte forcée
      inputStyle: {
        color: TEXT_COLORS.PRIMARY, // Toujours noir pour la lisibilité
        backgroundColor: theme.isDark ? '#374151' : '#ffffff',
        borderColor: theme.isDark ? '#6b7280' : '#d1d5db'
      },
      
      // Styles pour les gradients et overlays renforcés
      gradientOverlay: theme.isDark
        ? `linear-gradient(135deg, ${theme.accentColor}40, ${theme.accentColor}15 30%, transparent 70%)`
        : `linear-gradient(135deg, ${theme.accentColor}25, ${theme.accentColor}10 40%, transparent 80%)`,
        
      // Overlay de couleur forte pour l'image de fond
      backgroundColorOverlay: (() => {
        const overlayColor = theme.accentColor;
        const opacity = theme.isDark ? '0.25' : '0.15';
        return `linear-gradient(45deg, ${overlayColor}${Math.round(parseFloat(opacity) * 255).toString(16).padStart(2, '0')}, transparent 60%)`;
      })()
    };
  }, [currentTheme]);

  return {
    currentTheme,
    presetThemes,
    isLoading,
    saveTheme,
    updateTheme,
    applyPreset,
    resetTheme,
    getThemeStyles
  };
};