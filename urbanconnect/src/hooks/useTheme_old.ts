"use client";

import { useState, useEffect, useCallback } from 'react';

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
  cardOpacity: 30,
  cardBorder: 'white/20',
  cardBlur: 16,
  
  backgroundOpacity: 10,
  backgroundOverlay: 'transparent',
  
  primaryText: '#333333',
  secondaryText: '#999999',
  accentColor: '#4a90e2',
  
  buttonPrimary: '#4a90e2',
  buttonSecondary: '#f3f4f6',
  
  themeName: 'Default',
  isDark: false
};

// Thèmes prédéfinis
const presetThemes: ThemeConfig[] = [
  // 12 Thèmes light mode (60%)
  {
    ...defaultTheme,
    themeName: "Ocean Breeze",
    accentColor: "#2563eb",
    buttonPrimary: "#2563eb",
    buttonSecondary: "#dbeafe",
    backgroundOverlay: `linear-gradient(135deg, rgba(37, 99, 235, 0.15), transparent 70%)`
  },
  {
    ...defaultTheme,
    themeName: 'Forest Green',
    cardBackground: 'green-50',
    cardOpacity: 35,
    cardBorder: 'green-200/30',
    accentColor: '#059669',
    buttonPrimary: '#059669',
    backgroundOverlay: 'linear-gradient(to-br, rgba(16, 185, 129, 0.1), rgba(110, 231, 183, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Sunset Purple',
    cardBackground: 'purple-50',
    cardOpacity: 40,
    cardBorder: 'purple-200/30',
    accentColor: '#7c3aed',
    buttonPrimary: '#7c3aed',
    backgroundOverlay: 'linear-gradient(to-br, rgba(139, 92, 246, 0.1), rgba(196, 181, 253, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Crimson Red',
    cardBackground: 'red-50',
    cardOpacity: 38,
    cardBorder: 'red-200/30',
    cardBlur: 18,
    accentColor: '#dc2626',
    buttonPrimary: '#dc2626',
    buttonSecondary: '#fef2f2',
    backgroundOpacity: 12,
    backgroundOverlay: 'linear-gradient(to-br, rgba(239, 68, 68, 0.12), rgba(254, 202, 202, 0.08))'
  },
  {
    ...defaultTheme,
    themeName: 'Golden Amber',
    cardBackground: 'amber-50',
    cardOpacity: 42,
    cardBorder: 'amber-200/30',
    accentColor: '#f59e0b',
    buttonPrimary: '#f59e0b',
    primaryText: '#451a03',
    secondaryText: '#78716c',
    backgroundOverlay: 'linear-gradient(to-br, rgba(245, 158, 11, 0.1), rgba(254, 243, 199, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Rose Pink',
    cardBackground: 'rose-50',
    cardOpacity: 45,
    cardBorder: 'rose-200/30',
    accentColor: '#e11d48',
    buttonPrimary: '#e11d48',
    primaryText: '#4c1d24',
    secondaryText: '#9f1239',
    backgroundOverlay: 'linear-gradient(to-br, rgba(225, 29, 72, 0.1), rgba(255, 228, 230, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Teal Aqua',
    cardBackground: 'teal-50',
    cardOpacity: 38,
    cardBorder: 'teal-200/30',
    accentColor: '#0d9488',
    buttonPrimary: '#0d9488',
    primaryText: '#134e4a',
    secondaryText: '#0f766e',
    backgroundOverlay: 'linear-gradient(to-br, rgba(13, 148, 136, 0.1), rgba(153, 246, 228, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Indigo Night',
    cardBackground: 'indigo-50',
    cardOpacity: 40,
    cardBorder: 'indigo-200/30',
    accentColor: '#4338ca',
    buttonPrimary: '#4338ca',
    primaryText: '#1e1b4b',
    secondaryText: '#4c1d95',
    backgroundOverlay: 'linear-gradient(to-br, rgba(67, 56, 202, 0.12), rgba(199, 210, 254, 0.08))'
  },
  {
    ...defaultTheme,
    themeName: 'Emerald Fresh',
    cardBackground: 'emerald-50',
    cardOpacity: 36,
    cardBorder: 'emerald-200/30',
    cardBlur: 20,
    accentColor: '#10b981',
    buttonPrimary: '#10b981',
    primaryText: '#064e3b',
    secondaryText: '#065f46',
    backgroundOverlay: 'linear-gradient(to-br, rgba(16, 185, 129, 0.1), rgba(167, 243, 208, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Violet Dream',
    cardBackground: 'violet-50',
    cardOpacity: 42,
    cardBorder: 'violet-200/30',
    accentColor: '#8b5cf6',
    buttonPrimary: '#8b5cf6',
    primaryText: '#2d1b69',
    secondaryText: '#5b21b6',
    backgroundOverlay: 'linear-gradient(to-br, rgba(139, 92, 246, 0.12), rgba(221, 214, 254, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Cyan Electric',
    cardBackground: 'cyan-50',
    cardOpacity: 40,
    cardBorder: 'cyan-200/30',
    accentColor: '#06b6d4',
    buttonPrimary: '#06b6d4',
    primaryText: '#164e63',
    secondaryText: '#0e7490',
    backgroundOverlay: 'linear-gradient(to-br, rgba(6, 182, 212, 0.12), rgba(165, 243, 252, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Orange Sunset',
    cardBackground: 'orange-50',
    cardOpacity: 38,
    cardBorder: 'orange-200/30',
    accentColor: '#ea580c',
    buttonPrimary: '#ea580c',
    primaryText: '#431407',
    secondaryText: '#9a3412',
    backgroundOverlay: 'linear-gradient(to-br, rgba(234, 88, 12, 0.1), rgba(254, 215, 170, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Lime Fresh',
    cardBackground: 'lime-50',
    cardOpacity: 35,
    cardBorder: 'lime-200/30',
    accentColor: '#65a30d',
    buttonPrimary: '#65a30d',
    primaryText: '#1a2e05',
    secondaryText: '#365314',
    backgroundOverlay: 'linear-gradient(to-br, rgba(101, 163, 13, 0.1), rgba(236, 252, 203, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Fuchsia Glow',
    cardBackground: 'fuchsia-50',
    cardOpacity: 45,
    cardBorder: 'fuchsia-200/30',
    cardBlur: 22,
    accentColor: '#c026d3',
    buttonPrimary: '#c026d3',
    primaryText: '#4a044e',
    secondaryText: '#86198f',
    backgroundOverlay: 'linear-gradient(to-br, rgba(192, 38, 211, 0.12), rgba(253, 244, 255, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Sky Blue',
    cardBackground: 'sky-50',
    cardOpacity: 38,
    cardBorder: 'sky-200/30',
    accentColor: '#0ea5e9',
    buttonPrimary: '#0ea5e9',
    primaryText: '#0c4a6e',
    secondaryText: '#0369a1',
    backgroundOverlay: 'linear-gradient(to-br, rgba(14, 165, 233, 0.1), rgba(186, 230, 253, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Slate Steel',
    cardBackground: 'slate-50',
    cardOpacity: 50,
    cardBorder: 'slate-300/40',
    cardBlur: 16,
    accentColor: '#475569',
    buttonPrimary: '#475569',
    buttonSecondary: '#e2e8f0',
    primaryText: '#0f172a',
    secondaryText: '#475569',
    backgroundOverlay: 'linear-gradient(to-br, rgba(71, 85, 105, 0.15), rgba(226, 232, 240, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Pink Blossom',
    cardBackground: 'pink-50',
    cardOpacity: 44,
    cardBorder: 'pink-200/30',
    accentColor: '#ec4899',
    buttonPrimary: '#ec4899',
    primaryText: '#500724',
    secondaryText: '#be185d',
    backgroundOverlay: 'linear-gradient(to-br, rgba(236, 72, 153, 0.12), rgba(252, 231, 243, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Yellow Sunshine',
    cardBackground: 'yellow-50',
    cardOpacity: 40,
    cardBorder: 'yellow-200/30',
    accentColor: '#eab308',
    buttonPrimary: '#eab308',
    primaryText: '#422006',
    secondaryText: '#854d0e',
    backgroundOverlay: 'linear-gradient(to-br, rgba(234, 179, 8, 0.1), rgba(254, 249, 195, 0.1))'
  },
  {
    ...defaultTheme,
    themeName: 'Dark Mode',
    cardBackground: 'gray-900',
    cardOpacity: 80,
    cardBorder: 'gray-700/30',
    cardBlur: 20,
    primaryText: '#f3f4f6',
    secondaryText: '#9ca3af',
    accentColor: '#60a5fa',
    buttonPrimary: '#60a5fa',
    buttonSecondary: '#374151',
    backgroundOpacity: 20,
    backgroundOverlay: 'linear-gradient(to-br, rgba(0, 0, 0, 0.3), rgba(31, 41, 55, 0.2))',
    isDark: true
  },
  {
    ...defaultTheme,
    themeName: 'Midnight Purple',
    cardBackground: 'gray-900',
    cardOpacity: 85,
    cardBorder: 'purple-700/40',
    cardBlur: 24,
    primaryText: '#e9d5ff',
    secondaryText: '#c4b5fd',
    accentColor: '#a855f7',
    buttonPrimary: '#a855f7',
    buttonSecondary: '#4c1d95',
    backgroundOpacity: 15,
    backgroundOverlay: 'linear-gradient(to-br, rgba(139, 92, 246, 0.2), rgba(17, 24, 39, 0.4))',
    isDark: true
  },
  {
    ...defaultTheme,
    themeName: 'Emerald Night',
    cardBackground: 'gray-900',
    cardOpacity: 82,
    cardBorder: 'emerald-700/40',
    cardBlur: 22,
    primaryText: '#d1fae5',
    secondaryText: '#a7f3d0',
    accentColor: '#10b981',
    buttonPrimary: '#10b981',
    buttonSecondary: '#064e3b',
    backgroundOpacity: 18,
    backgroundOverlay: 'linear-gradient(to-br, rgba(16, 185, 129, 0.2), rgba(17, 24, 39, 0.4))',
    isDark: true
  },
  {
    ...defaultTheme,
    themeName: 'Rose Gold Night',
    cardBackground: 'gray-900',
    cardOpacity: 88,
    cardBorder: 'rose-700/40',
    cardBlur: 20,
    primaryText: '#ffe4e6',
    secondaryText: '#fecdd3',
    accentColor: '#f43f5e',
    buttonPrimary: '#f43f5e',
    buttonSecondary: '#4c0519',
    backgroundOpacity: 16,
    backgroundOverlay: 'linear-gradient(to-br, rgba(244, 63, 94, 0.18), rgba(17, 24, 39, 0.4))',
    isDark: true
  }
];

export const useTheme = (profileId?: string) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(defaultTheme);
  const [isLoading, setIsLoading] = useState(true);

  // Charger le thème depuis localStorage
  useEffect(() => {
    const loadTheme = () => {
      try {
        let savedTheme: ThemeConfig | null = null;
        
        if (profileId) {
          // Charger le thème spécifique au profil
          const profileThemeJson = localStorage.getItem(`theme_${profileId}`);
          if (profileThemeJson) {
            savedTheme = JSON.parse(profileThemeJson);
          }
        }
        
        // Fallback vers le thème global
        if (!savedTheme) {
          const globalThemeJson = localStorage.getItem('globalTheme');
          if (globalThemeJson) {
            savedTheme = JSON.parse(globalThemeJson);
          }
        }
        
        if (savedTheme) {
          setCurrentTheme({ ...defaultTheme, ...savedTheme });
        }
      } catch (error) {
        console.error('Error loading theme:', error);
        setCurrentTheme(defaultTheme);
      } finally {
        setIsLoading(false);
      }
    };

    loadTheme();
    
    // Écouter les changements de thème globaux
    const handleThemeChange = (event: CustomEvent) => {
      const { theme, profileId: eventProfileId } = event.detail;
      // Mise à jour seulement si c'est le bon profil ou si c'est global
      if (eventProfileId === profileId || (!profileId && eventProfileId === 'global')) {
        setCurrentTheme({ ...theme });
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('themeChanged', handleThemeChange as EventListener);
      
      return () => {
        window.removeEventListener('themeChanged', handleThemeChange as EventListener);
      };
    }
  }, [profileId]);

  // Sauvegarder le thème
  const saveTheme = (theme: ThemeConfig, isGlobal = false) => {
    try {
      if (isGlobal) {
        localStorage.setItem('globalTheme', JSON.stringify(theme));
      } else if (profileId) {
        localStorage.setItem(`theme_${profileId}`, JSON.stringify(theme));
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
    
    return {
      // Variables CSS personnalisées
      '--card-bg': theme.cardBackground,
      '--card-opacity': `${theme.cardOpacity}%`,
      '--card-border': theme.cardBorder,
      '--card-blur': `${theme.cardBlur}px`,
      '--bg-opacity': `${theme.backgroundOpacity}%`,
      '--primary-text': theme.primaryText,
      '--secondary-text': theme.secondaryText,
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
          // Thèmes clairs - variations drastiques avec brightness élevé
          '#4a90e2': { hue: '210deg', sepia: '0.8', saturate: '2.5', brightness: '1.4', contrast: '1.2' }, // Default blue
          '#2563eb': { hue: '225deg', sepia: '0.9', saturate: '2.8', brightness: '1.3', contrast: '1.3' }, // Ocean blue  
          '#059669': { hue: '140deg', sepia: '1.0', saturate: '3.2', brightness: '1.5', contrast: '1.4' }, // Forest green
          '#7c3aed': { hue: '280deg', sepia: '0.8', saturate: '2.6', brightness: '1.4', contrast: '1.2' }, // Sunset purple
          '#dc2626': { hue: '0deg', sepia: '1.2', saturate: '3.0', brightness: '1.6', contrast: '1.5' },   // Crimson red
          '#f59e0b': { hue: '45deg', sepia: '1.4', saturate: '2.8', brightness: '1.7', contrast: '1.3' },  // Golden amber
          '#e11d48': { hue: '345deg', sepia: '1.0', saturate: '3.0', brightness: '1.5', contrast: '1.4' }, // Rose pink
          '#0d9488': { hue: '175deg', sepia: '0.9', saturate: '2.8', brightness: '1.4', contrast: '1.3' }, // Teal aqua
          '#4338ca': { hue: '235deg', sepia: '0.8', saturate: '2.6', brightness: '1.3', contrast: '1.2' }, // Indigo night
          '#10b981': { hue: '155deg', sepia: '1.1', saturate: '3.0', brightness: '1.6', contrast: '1.4' }, // Emerald fresh
          '#8b5cf6': { hue: '270deg', sepia: '0.9', saturate: '2.8', brightness: '1.4', contrast: '1.3' }, // Violet dream
          '#06b6d4': { hue: '190deg', sepia: '0.8', saturate: '2.8', brightness: '1.4', contrast: '1.3' }, // Cyan electric
          '#ea580c': { hue: '25deg', sepia: '1.5', saturate: '3.2', brightness: '1.8', contrast: '1.5' },  // Orange sunset
          '#65a30d': { hue: '80deg', sepia: '1.2', saturate: '3.0', brightness: '1.6', contrast: '1.4' },  // Lime fresh
          '#c026d3': { hue: '300deg', sepia: '1.0', saturate: '3.0', brightness: '1.5', contrast: '1.4' }, // Fuchsia glow
          '#0ea5e9': { hue: '200deg', sepia: '0.8', saturate: '2.8', brightness: '1.4', contrast: '1.3' }, // Sky blue
          '#475569': { hue: '215deg', sepia: '0.6', saturate: '1.8', brightness: '1.2', contrast: '1.1' }, // Slate steel
          '#ec4899': { hue: '320deg', sepia: '1.0', saturate: '3.0', brightness: '1.5', contrast: '1.4' }, // Pink blossom
          '#eab308': { hue: '50deg', sepia: '1.6', saturate: '3.2', brightness: '1.8', contrast: '1.5' },  // Yellow sunshine
          
          // Thèmes sombres - brightness réduit mais pas noir complet
          '#60a5fa': { hue: '215deg', sepia: '0.7', saturate: '2.2', brightness: '0.9', contrast: '1.3' }, // Dark mode blue
          '#a855f7': { hue: '270deg', sepia: '0.8', saturate: '2.4', brightness: '0.8', contrast: '1.4' }, // Midnight purple
          '#f43f5e': { hue: '345deg', sepia: '0.9', saturate: '2.6', brightness: '0.9', contrast: '1.3' }  // Rose gold night
        };
        
        const colorMap = colorMaps[theme.accentColor] || { hue: '0deg', sepia: '0.6', saturate: '2.0', brightness: '1.2', contrast: '1.2' };
        
        return `brightness(${colorMap.brightness}) contrast(${colorMap.contrast}) hue-rotate(${colorMap.hue}) sepia(${colorMap.sepia}) saturate(${colorMap.saturate})`;
      })(),
      
      // Textes avec couleurs du thème
      textPrimary: `text-[${theme.primaryText}]`,
      textSecondary: `text-[${theme.secondaryText}]`,
      textAccent: `text-[${theme.accentColor}]`,
      
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
        ? `text-[${theme.primaryText}] hover:text-[${theme.accentColor}] hover:bg-gray-700/30`
        : `text-[${theme.primaryText}] hover:text-[${theme.accentColor}] hover:bg-white/30`,
        
      // Classes pour les badges et éléments colorés
      badgeBorder: `border-2 border-[${theme.accentColor}]`,
      inputClass: theme.isDark
        ? `bg-gray-800 border-gray-600 text-[${theme.primaryText}] focus:border-[${theme.accentColor}]`
        : `bg-white border-gray-300 text-[${theme.primaryText}] focus:border-[${theme.accentColor}]`,
      
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