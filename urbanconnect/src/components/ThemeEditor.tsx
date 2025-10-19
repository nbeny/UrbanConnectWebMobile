"use client";

import React, { useState } from 'react';
import { useTheme, ThemeConfig, TEXT_COLORS } from '@/hooks/useTheme';
import { Palette, Eye, RefreshCcw, Save, Slider, Monitor, Sun, Moon } from 'lucide-react';

interface ThemeEditorProps {
  profileId?: string;
  onSave?: () => void;
}

const ThemeEditor: React.FC<ThemeEditorProps> = ({ profileId, onSave }) => {
  const { currentTheme, presetThemes, updateTheme, applyPreset, resetTheme, saveTheme, getThemeStyles } = useTheme(profileId);
  const [activeTab, setActiveTab] = useState<'presets' | 'colors' | 'layout'>('presets');
  const [showPreview, setShowPreview] = useState(false);
  const themeStyles = getThemeStyles();

  const handleColorChange = (property: keyof ThemeConfig, value: string | number) => {
    updateTheme({ [property]: value });
  };

  const handlePresetSelect = (presetName: string) => {
    applyPreset(presetName);
  };

  const handleSave = () => {
    saveTheme(currentTheme);
    onSave?.();
  };

  const ColorPicker = ({ 
    label, 
    value, 
    onChange 
  }: { 
    label: string; 
    value: string; 
    onChange: (value: string) => void; 
  }) => (
    <div className="space-y-2">
      <label className={`block text-sm font-medium ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-8 rounded border border-gray-300 cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="#000000"
        />
      </div>
    </div>
  );

  const SliderControl = ({ 
    label, 
    value, 
    min, 
    max, 
    onChange, 
    unit = '' 
  }: { 
    label: string; 
    value: number; 
    min: number; 
    max: number; 
    onChange: (value: number) => void; 
    unit?: string; 
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className={`block text-sm font-medium ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{label}</label>
        <span className={`text-sm ${themeStyles.textSecondary}`} style={themeStyles.textSecondaryStyle}>{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
    </div>
  );

  const tabs = [
    { id: 'presets', label: 'Thèmes prédéfinis', icon: Palette },
    { id: 'colors', label: 'Couleurs', icon: Sun },
    { id: 'layout', label: 'Mise en page', icon: Monitor }
  ];

  return (
    <div className={`p-6 rounded-xl ${themeStyles.cardClass}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: TEXT_COLORS.PRIMARY }}>
          <Palette className="w-5 h-5" style={{ color: currentTheme.accentColor }} />
          Éditeur de Thème
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`px-3 py-1 rounded-lg text-sm flex items-center gap-1 ${themeStyles.buttonSecondary}`}
            style={{ backgroundColor: currentTheme.accentColor + '20', color: currentTheme.accentColor }}
          >
            <Eye className="w-4 h-4" />
            {showPreview ? 'Masquer' : 'Aperçu'}
          </button>
          <button
            onClick={resetTheme}
            className="px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-colors"
            style={{
              backgroundColor: currentTheme.buttonSecondary,
              color: TEXT_COLORS.PRIMARY
            }}
          >
            <RefreshCcw className="w-4 h-4" style={{ color: 'inherit' }} />
            Reset
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-1 rounded-lg text-sm flex items-center gap-1 transition-colors"
            style={{
              backgroundColor: currentTheme.buttonPrimary,
              color: TEXT_COLORS.WHITE
            }}
          >
            <Save className="w-4 h-4" style={{ color: 'inherit' }} />
            Sauvegarder
          </button>
        </div>
      </div>

      {/* Navigation des onglets */}
      <div className="flex mb-6 border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 flex items-center gap-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Contenu des onglets */}
      <div className="space-y-6">
        {/* Onglet Thèmes prédéfinis */}
        {activeTab === 'presets' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {presetThemes.map((preset) => (
              <div
                key={preset.themeName}
                onClick={() => handlePresetSelect(preset.themeName)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  currentTheme.themeName === preset.themeName
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {preset.isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <h3 className={`font-semibold ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>{preset.themeName}</h3>
                </div>
                
                {/* Aperçu des couleurs */}
                <div className="flex gap-2 mb-3">
                  <div 
                    className="w-8 h-6 rounded border flex items-center justify-center text-xs font-bold"
                    style={{ 
                      backgroundColor: preset.isDark ? '#1f2937' : '#ffffff',
                      color: preset.primaryText,
                      opacity: preset.cardOpacity / 100
                    }}
                    title="Background + Texte principal"
                  >
                    Aa
                  </div>
                  <div 
                    className="w-8 h-6 rounded border flex items-center justify-center text-xs"
                    style={{ 
                      backgroundColor: preset.isDark ? '#374151' : '#f9fafb',
                      color: preset.secondaryText 
                    }}
                    title="Texte secondaire"
                  >
                    Aa
                  </div>
                  <div 
                    className="w-8 h-6 rounded border"
                    style={{ backgroundColor: preset.accentColor }}
                    title="Couleur d'accent"
                  />
                </div>
                
                <div className="text-xs text-gray-600 space-y-1">
                  <div>Background: {preset.backgroundOpacity}% • Cards: {preset.cardOpacity}%</div>
                  <div>Mode: {preset.isDark ? 'Sombre' : 'Clair'} • Flou: {preset.cardBlur}px</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Onglet Couleurs */}
        {activeTab === 'colors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className={`font-semibold ${themeStyles.textPrimary} mb-3`} style={themeStyles.textPrimaryStyle}>Couleurs de texte</h3>
              <ColorPicker
                label="Texte principal"
                value={currentTheme.primaryText}
                onChange={(value) => handleColorChange('primaryText', value)}
              />
              <ColorPicker
                label="Texte secondaire"
                value={currentTheme.secondaryText}
                onChange={(value) => handleColorChange('secondaryText', value)}
              />
              <ColorPicker
                label="Couleur d'accent"
                value={currentTheme.accentColor}
                onChange={(value) => handleColorChange('accentColor', value)}
              />
            </div>
            
            <div className="space-y-4">
              <h3 className={`font-semibold ${themeStyles.textPrimary} mb-3`} style={themeStyles.textPrimaryStyle}>Couleurs des boutons</h3>
              <ColorPicker
                label="Bouton principal"
                value={currentTheme.buttonPrimary}
                onChange={(value) => handleColorChange('buttonPrimary', value)}
              />
              <ColorPicker
                label="Bouton secondaire"
                value={currentTheme.buttonSecondary}
                onChange={(value) => handleColorChange('buttonSecondary', value)}
              />
              
              <div className="mt-6">
                <h3 className={`font-semibold ${themeStyles.textPrimary} mb-3`} style={themeStyles.textPrimaryStyle}>Mode sombre</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentTheme.isDark}
                    onChange={(e) => handleColorChange('isDark', e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Activer le mode sombre</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Mise en page */}
        {activeTab === 'layout' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h3 className={`font-semibold ${themeStyles.textPrimary} mb-3`} style={themeStyles.textPrimaryStyle}>Cartes</h3>
              <SliderControl
                label="Opacité des cartes"
                value={currentTheme.cardOpacity}
                min={10}
                max={100}
                onChange={(value) => handleColorChange('cardOpacity', value)}
                unit="%"
              />
              <SliderControl
                label="Flou des cartes"
                value={currentTheme.cardBlur}
                min={0}
                max={32}
                onChange={(value) => handleColorChange('cardBlur', value)}
                unit="px"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className={`font-semibold ${themeStyles.textPrimary} mb-3`} style={themeStyles.textPrimaryStyle}>Arrière-plan</h3>
              <SliderControl
                label="Opacité de l'image de fond"
                value={currentTheme.backgroundOpacity}
                min={5}
                max={100}
                onChange={(value) => handleColorChange('backgroundOpacity', value)}
                unit="%"
              />
              
              <div className="space-y-2">
                <label className={`block text-sm font-medium ${themeStyles.textPrimary}`} style={themeStyles.textPrimaryStyle}>Nom du thème</label>
                <input
                  type="text"
                  value={currentTheme.themeName}
                  onChange={(e) => handleColorChange('themeName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mon thème personnalisé"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Aperçu */}
      {showPreview && (
        <div className="mt-6 p-4 border-t border-gray-200">
          <h3 className={`font-semibold ${themeStyles.textPrimary} mb-3`} style={themeStyles.textPrimaryStyle}>Aperçu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Exemple de carte */}
            <div 
              className="p-4 rounded-xl border"
              style={{
                background: currentTheme.isDark 
                  ? 'rgba(31, 41, 55, 0.8)' 
                  : `rgba(255, 255, 255, ${currentTheme.cardOpacity/100})`,
                backdropFilter: `blur(${currentTheme.cardBlur}px)`,
                borderColor: currentTheme.isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <h4 
                className={`font-semibold mb-2 ${themeStyles.textPrimary}`}
                style={themeStyles.textPrimaryStyle}
              >
                Exemple de carte
              </h4>
              <p 
                className={`text-sm mb-3 ${themeStyles.textSecondary}`}
                style={themeStyles.textSecondaryStyle}
              >
                Ceci est un aperçu de votre thème personnalisé
              </p>
              <button
                className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                style={{ backgroundColor: currentTheme.buttonPrimary }}
              >
                Bouton principal
              </button>
            </div>

            {/* Informations du thème */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Thème:</span>
                <span className="font-medium">{currentTheme.themeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mode:</span>
                <span className="font-medium">{currentTheme.isDark ? 'Sombre' : 'Clair'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Opacité des cartes:</span>
                <span className="font-medium">{currentTheme.cardOpacity}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Flou:</span>
                <span className="font-medium">{currentTheme.cardBlur}px</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4a90e2;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4a90e2;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default ThemeEditor;