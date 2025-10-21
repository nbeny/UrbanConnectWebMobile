"use client";

import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, MapPin, Truck, Euro, Filter, RotateCcw, Search as SearchIcon } from 'lucide-react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  onFilterChange: (filters: any) => void;
  onClearFilters: () => void;
  totalResults: number;
}

// Import de la structure depuis InventoryListing
const allovoisinStructure = {
  'Service': [
    'Bricolage - Travaux',
    'Jardinage - Piscine',
    'Déménagement - Manutention',
    'Dépannage - Réparation de matériel',
    'Entretien - Réparation véhicules',
    'Services à la personne',
    'Enfants',
    'Animaux',
    'Informatique et web',
    'Photographie - Vidéo',
    'Animation - Evénements',
    'Cours - Formations',
    'Administratif - Bureautique',
    'Mode - Santé - Bien être',
    'Sport - Partenaires',
    'Restauration - Réception'
  ],
  'Objet': [
    'Outillage & Travaux',
    'Matériel de Jardin',
    'Maison & Confort',
    'Evénement, Réception & Fête',
    'High Tech & Fournitures de bureau',
    'Matériel de Sport',
    'Loisirs',
    'Mode & Accessoires Adulte, Bien-être & Bagagerie',
    'Mode Enfant, Bébé & Puériculture',
    'Transport & Accessoires Auto, Moto & Bateau',
    'Immobilier'
  ]
};

// Génération de toutes les catégories pour les filtres
const getAllSubcategories = () => {
  const subcategories = ['Toutes catégories'];
  Object.keys(allovoisinStructure).forEach(type => {
    subcategories.push(...allovoisinStructure[type]);
  });
  return subcategories;
};

const categories = getAllSubcategories();

const sortOptions = [
  { value: 'relevance', label: 'Pertinence' },
  { value: 'newest', label: 'Plus récentes' },
  { value: 'oldest', label: 'Plus anciennes' },
  { value: 'price_asc', label: 'Prix croissants' },
  { value: 'price_desc', label: 'Prix décroissants' }
];

export default function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearFilters,
  totalResults
}: FilterDrawerProps) {
  const [expandedSections, setExpandedSections] = useState({
    types: true,
    categories: true,
    subcategories: false,
    delivery: false,
    price: true,
    status: true,
    sorting: true,
    adType: true,
    sellerType: true,
    urgent: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const updateFilter = (key: string, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: string, value: string) => {
    const currentArray = filters[key] || [];
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item: string) => item !== value)
      : [...currentArray, value];
    updateFilter(key, newArray);
  };

  const FilterSection = ({ title, isExpanded, onToggle, children }: any) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-gray-50"
      >
        <span className="font-medium text-gray-900">{title}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 pb-4">
          {children}
        </div>
      )}
    </div>
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-10 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Tous les filtres</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">

          {/* Types */}
          <FilterSection
            title="Types (##)"
            isExpanded={expandedSections.types}
            onToggle={() => toggleSection('types')}
          >
            <div className="space-y-2">
              {['Service', 'Objet'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.type || []).includes(type)}
                    onChange={() => toggleArrayFilter('type', type)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Categories */}
          <FilterSection
            title="Catégories (###)"
            isExpanded={expandedSections.categories}
            onToggle={() => toggleSection('categories')}
          >
            <div className="space-y-2 max-h-48 overflow-y-auto">
              <label className="flex items-center font-medium">
                <input
                  type="checkbox"
                  checked={(filters.category || []).length === 0}
                  onChange={() => updateFilter('category', [])}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Toutes catégories</span>
              </label>
              {Object.keys(allovoisinStructure).map(mainType => (
                Object.keys(allovoisinStructure[mainType] || {}).length > 0 ? 
                  allovoisinStructure[mainType].map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={(filters.category || []).includes(category)}
                        onChange={() => toggleArrayFilter('category', category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  )) : null
              ))}
            </div>
          </FilterSection>

          {/* Subcategories */}
          <FilterSection
            title="Sous-catégories (####)"
            isExpanded={expandedSections.subcategories}
            onToggle={() => toggleSection('subcategories')}
          >
            <div className="space-y-1 max-h-48 overflow-y-auto">
              <label className="flex items-center font-medium">
                <input
                  type="checkbox"
                  checked={(filters.subcategory || []).length === 0}
                  onChange={() => updateFilter('subcategory', [])}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Toutes sous-catégories</span>
              </label>
              {categories.slice(1).map((subcategory) => (
                <label key={subcategory} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.subcategory || []).includes(subcategory)}
                    onChange={() => toggleArrayFilter('subcategory', subcategory)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-xs text-gray-600">{subcategory}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Delivery */}
          <FilterSection
            title="Étendre à la livraison"
            isExpanded={expandedSections.delivery}
            onToggle={() => toggleSection('delivery')}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">En livraison dans toute la France</span>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.nationwide_delivery || false}
                  onChange={(e) => updateFilter('nationwide_delivery', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Garder la localisation actuelle</span>
              </label>
            </div>
          </FilterSection>

          {/* Price Range */}
          <FilterSection
            title="Prix"
            isExpanded={expandedSections.price}
            onToggle={() => toggleSection('price')}
          >
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Minimum</label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="0"
                      value={filters.price_min || ''}
                      onChange={(e) => updateFilter('price_min', e.target.value)}
                      className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Euro className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-500 mb-1">Maximum</label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="∞"
                      value={filters.price_max || ''}
                      onChange={(e) => updateFilter('price_max', e.target.value)}
                      className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Euro className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.donations_only || false}
                  onChange={(e) => updateFilter('donations_only', e.target.checked)}
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-700">Dons uniquement</span>
              </label>
            </div>
          </FilterSection>

          {/* Ad Status */}
          <FilterSection
            title="Statut de l'annonce"
            isExpanded={expandedSections.status}
            onToggle={() => toggleSection('status')}
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.available_only || false}
                onChange={(e) => updateFilter('available_only', e.target.checked)}
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-700">Annonces disponibles uniquement</span>
            </label>
          </FilterSection>

          {/* Sorting */}
          <FilterSection
            title="Tri"
            isExpanded={expandedSections.sorting}
            onToggle={() => toggleSection('sorting')}
          >
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={filters.sort === option.value}
                    onChange={(e) => updateFilter('sort', e.target.value)}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Ad Type */}
          <FilterSection
            title="Type d'annonces"
            isExpanded={expandedSections.adType}
            onToggle={() => toggleSection('adType')}
          >
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={(filters.ad_type || []).includes('offer')}
                  onChange={() => toggleArrayFilter('ad_type', 'offer')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Offres</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={(filters.ad_type || []).includes('request')}
                  onChange={() => toggleArrayFilter('ad_type', 'request')}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Demandes</span>
              </label>
            </div>
          </FilterSection>

          {/* Seller Type */}
          <FilterSection
            title="Type de vendeurs"
            isExpanded={expandedSections.sellerType}
            onToggle={() => toggleSection('sellerType')}
          >
            <div className="space-y-2">
              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.seller_type || []).includes('individual')}
                    onChange={() => toggleArrayFilter('seller_type', 'individual')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Particuliers</span>
                </div>
                <span className="text-xs text-gray-500">82 827 176</span>
              </label>
              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.seller_type || []).includes('professional')}
                    onChange={() => toggleArrayFilter('seller_type', 'professional')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Professionnels</span>
                </div>
                <span className="text-xs text-gray-500">4 520 719</span>
              </label>
            </div>
          </FilterSection>

          {/* Urgent Ads */}
          <FilterSection
            title="Annonces urgentes"
            isExpanded={expandedSections.urgent}
            onToggle={() => toggleSection('urgent')}
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.urgent_only || false}
                onChange={(e) => updateFilter('urgent_only', e.target.checked)}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">Annonces urgentes uniquement</span>
            </label>
          </FilterSection>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex gap-3">
            <button
              onClick={onClearFilters}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Tout Effacer
            </button>
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <SearchIcon className="w-4 h-4" />
              Rechercher ({totalResults.toLocaleString()})
            </button>
          </div>
        </div>
      </div>
    </>
  );
}