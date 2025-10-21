"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { Search, Filter, MapPin, Star, Eye, Heart, Calendar, Package, Wrench, User, Briefcase } from 'lucide-react';
import FilterDrawer from './FilterDrawer';

// Mock data simulée pour l'exemple
const mockInventoryData = [
  {
    id: 1,
    type: 'Produit',
    title: 'MacBook Pro 16"',
    category: 'Électronique',
    price: 2499,
    location: 'Paris',
    user: { name: 'Jean Dupont', avatar: 'https://i.pravatar.cc/150?img=1', rating: 4.8, type: 'individual' },
    views: 1250,
    likes: 89,
    status: 'active',
    featured: true,
    createdAt: '2024-01-15',
    description: 'MacBook Pro en excellent état',
    images: ['https://picsum.photos/200/200?random=1'],
    deliveryAvailable: true,
    urgent: false,
    adType: 'offer',
    donation: false
  },
  {
    id: 2,
    type: 'Service',
    title: 'Cours de guitare',
    category: 'Musique',
    price: 35,
    location: 'Lyon',
    user: { name: 'Marie Martin', avatar: 'https://i.pravatar.cc/150?img=2', rating: 4.9, type: 'individual' },
    views: 856,
    likes: 45,
    status: 'active',
    featured: false,
    createdAt: '2024-02-20',
    description: 'Cours particuliers de guitare',
    images: ['https://picsum.photos/200/200?random=2'],
    deliveryAvailable: false,
    urgent: true,
    adType: 'offer',
    donation: false
  },
  {
    id: 3,
    type: 'Poste',
    title: 'Développeur React Senior',
    category: 'Informatique',
    price: 55000,
    location: 'Marseille',
    user: { name: 'Tech Corp', avatar: 'https://i.pravatar.cc/150?img=3', rating: 4.7, type: 'professional' },
    views: 2340,
    likes: 156,
    status: 'active',
    featured: true,
    createdAt: '2024-03-10',
    description: 'Poste de développeur React',
    images: [],
    deliveryAvailable: false,
    urgent: false,
    adType: 'offer',
    donation: false
  },
  {
    id: 4,
    type: 'Produit',
    title: 'Vélo électrique',
    category: 'Sport',
    price: 1200,
    location: 'Toulouse',
    user: { name: 'Pierre Leroy', avatar: 'https://i.pravatar.cc/150?img=4', rating: 4.5, type: 'individual' },
    views: 678,
    likes: 32,
    status: 'inactive',
    featured: false,
    createdAt: '2024-01-25',
    description: 'Vélo électrique récent',
    images: ['https://picsum.photos/200/200?random=3'],
    deliveryAvailable: true,
    urgent: false,
    adType: 'offer',
    donation: false
  },
  {
    id: 5,
    type: 'Service',
    title: 'Plomberie',
    category: 'Travaux',
    price: 45,
    location: 'Nice',
    user: { name: 'Artisan Pro', avatar: 'https://i.pravatar.cc/150?img=5', rating: 4.9, type: 'professional' },
    views: 1423,
    likes: 78,
    status: 'active',
    featured: true,
    createdAt: '2024-02-05',
    description: 'Services de plomberie',
    images: ['https://picsum.photos/200/200?random=4'],
    deliveryAvailable: false,
    urgent: false,
    adType: 'offer',
    donation: false
  },
  {
    id: 6,
    type: 'Produit',
    title: 'Don de livre',
    category: 'Loisirs',
    price: 0,
    location: 'Bordeaux',
    user: { name: 'Sophie Bernard', avatar: 'https://i.pravatar.cc/150?img=6', rating: 4.6, type: 'individual' },
    views: 234,
    likes: 12,
    status: 'active',
    featured: false,
    createdAt: '2024-03-01',
    description: 'Don de livres de science-fiction',
    images: ['https://picsum.photos/200/200?random=5'],
    deliveryAvailable: true,
    urgent: false,
    adType: 'offer',
    donation: true
  }
];

const categories = [
  { id: 1, name: 'Électronique' },
  { id: 2, name: 'Musique' },
  { id: 3, name: 'Informatique' },
  { id: 4, name: 'Sport' },
  { id: 5, name: 'Travaux' }
];

// Custom cell renderers
const ImageCellRenderer = (params) => {
  const imageUrl = params.value && params.value.length > 0 ? params.value[0] : null;

  if (!imageUrl) {
    return (
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
        <Package className="w-6 h-6 text-gray-400" />
      </div>
    );
  }

  return (
    <div className="flex items-center h-full">
      <img
        src={imageUrl}
        alt="Product"
        className="w-12 h-12 object-cover rounded-lg border border-gray-200"
      />
    </div>
  );
};

const TypeCellRenderer = (params) => {
  const type = params.value;
  const icons = {
    'Produit': <Package className="w-4 h-4" />,
    'Service': <Wrench className="w-4 h-4" />,
    'User': <User className="w-4 h-4" />,
    'Poste': <Briefcase className="w-4 h-4" />
  };

  const colors = {
    'Produit': 'bg-blue-100 text-blue-700',
    'Service': 'bg-green-100 text-green-700',
    'User': 'bg-purple-100 text-purple-700',
    'Poste': 'bg-orange-100 text-orange-700'
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${colors[type]}`}>
      {icons[type]}
      {type}
    </span>
  );
};

const UserCellRenderer = (params) => {
  const user = params.value;
  return (
    <div className="flex items-center gap-2">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <div className="font-medium text-sm">{user.name}</div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          {user.rating}
        </div>
      </div>
    </div>
  );
};

const PriceCellRenderer = (params) => {
  const price = params.value;
  const type = params.data.type;

  if (price === null) {
    return <span className="text-gray-400">-</span>;
  }

  if (type === 'Poste') {
    return <span className="font-semibold text-green-600">{price.toLocaleString()}€/an</span>;
  } else if (type === 'Service') {
    return <span className="font-semibold text-blue-600">{price}€/h</span>;
  } else {
    return <span className="font-semibold text-indigo-600">{price.toLocaleString()}€</span>;
  }
};

const StatsCellRenderer = (params) => {
  const { views, likes } = params.data;
  return (
    <div className="flex items-center gap-3 text-xs text-gray-500">
      <div className="flex items-center gap-1">
        <Eye className="w-3 h-3" />
        {views}
      </div>
      <div className="flex items-center gap-1">
        <Heart className="w-3 h-3" />
        {likes}
      </div>
    </div>
  );
};

const StatusCellRenderer = (params) => {
  const status = params.value;
  const featured = params.data.featured;

  const statusColors = {
    'active': 'bg-green-100 text-green-700',
    'inactive': 'bg-red-100 text-red-700',
    'pending': 'bg-yellow-100 text-yellow-700'
  };

  return (
    <div className="flex flex-col gap-1">
      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
        {status}
      </span>
      {featured && (
        <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
          Mis en avant
        </span>
      )}
    </div>
  );
};

export default function InventoryListing() {
  const [searchText, setSearchText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const [filters, setFilters] = useState({
    type: [],
    category: [],
    price_min: '',
    price_max: '',
    location: '',
    featured: undefined,
    nationwide_delivery: false,
    donations_only: false,
    available_only: false,
    sort: 'relevance',
    ad_type: [],
    seller_type: [],
    urgent_only: false
  });

  // Filtrage des données
  const filteredData = useMemo(() => {
    let data = [...mockInventoryData];

    // Filtre par texte de recherche
    if (searchText) {
      data = data.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase()) ||
        item.user.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filtre par type
    if (filters.type.length > 0) {
      data = data.filter(item => filters.type.includes(item.type));
    }

    // Filtre par catégorie
    if (filters.category.length > 0) {
      data = data.filter(item => filters.category.includes(item.category));
    }

    // Filtre par localisation
    if (filters.location) {
      data = data.filter(item =>
        item.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filtre par prix minimum
    if (filters.price_min) {
      const minPrice = parseFloat(filters.price_min);
      data = data.filter(item => item.price >= minPrice);
    }

    // Filtre par prix maximum
    if (filters.price_max) {
      const maxPrice = parseFloat(filters.price_max);
      data = data.filter(item => item.price <= maxPrice);
    }

    // Filtre featured
    if (filters.featured === true) {
      data = data.filter(item => item.featured);
    }

    // Filtre livraison nationale
    if (filters.nationwide_delivery) {
      data = data.filter(item => item.deliveryAvailable);
    }

    // Filtre dons uniquement
    if (filters.donations_only) {
      data = data.filter(item => item.donation);
    }

    // Filtre annonces disponibles uniquement
    if (filters.available_only) {
      data = data.filter(item => item.status === 'active');
    }

    // Filtre type d'annonce
    if (filters.ad_type.length > 0) {
      data = data.filter(item => filters.ad_type.includes(item.adType));
    }

    // Filtre type de vendeur
    if (filters.seller_type.length > 0) {
      data = data.filter(item => filters.seller_type.includes(item.user.type));
    }

    // Filtre annonces urgentes
    if (filters.urgent_only) {
      data = data.filter(item => item.urgent);
    }

    // Tri des données
    switch (filters.sort) {
      case 'newest':
        data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'price_asc':
        data.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        data.sort((a, b) => b.price - a.price);
        break;
      case 'relevance':
      default:
        // Tri par pertinence (featured first, then by views)
        data.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.views - a.views;
        });
        break;
    }

    return data;
  }, [searchText, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      category: [],
      price_min: '',
      price_max: '',
      location: '',
      featured: undefined,
      nationwide_delivery: false,
      donations_only: false,
      available_only: false,
      sort: 'relevance',
      ad_type: [],
      seller_type: [],
      urgent_only: false
    });
    setSearchText('');
    setCurrentPage(1);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.type.length > 0) count++;
    if (filters.category.length > 0) count++;
    if (filters.location) count++;
    if (filters.price_min) count++;
    if (filters.price_max) count++;
    if (filters.featured !== undefined) count++;
    if (filters.nationwide_delivery) count++;
    if (filters.donations_only) count++;
    if (filters.available_only) count++;
    if (filters.ad_type.length > 0) count++;
    if (filters.seller_type.length > 0) count++;
    if (filters.urgent_only) count++;
    if (searchText) count++;
    return count;
  };

  return (
    <div className="min-h-screen p-6 mt-22">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventaire UrbanConnect</h1>
          <p className="text-gray-600">Gérez vos produits, services, utilisateurs et offres d'emploi</p>
        </div>

        {/* Search and Filters Bar */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par titre, description ou utilisateur..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border font-medium transition-colors ${
                showFilters
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filtres rapides
              {getActiveFiltersCount() > 0 && (
                <span className={`${showFilters ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'} rounded-full px-2 py-1 text-xs font-bold`}>
                  {getActiveFiltersCount()}
                </span>
              )}
            </button>
            <button
              onClick={() => setShowFilterDrawer(true)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              <Filter className="w-4 h-4" />
              Tous les filtres
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <div className="space-y-2">
                    {['Produit', 'Service', 'User', 'Poste'].map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.type.includes(type)}
                          onChange={(e) => {
                            const newTypes = e.target.checked
                              ? [...filters.type, type]
                              : filters.type.filter(t => t !== type);
                            handleFilterChange('type', newTypes);
                          }}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                  <div className="max-h-32 overflow-y-auto space-y-2">
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(category.name)}
                          onChange={(e) => {
                            const newCategories = e.target.checked
                              ? [...filters.category, category.name]
                              : filters.category.filter(c => c !== category.name);
                            handleFilterChange('category', newCategories);
                          }}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                  <input
                    type="text"
                    placeholder="Paris, Lyon..."
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                {/* Featured Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.featured === true}
                      onChange={(e) => handleFilterChange('featured', e.target.checked ? true : undefined)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Mis en avant uniquement</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Effacer tous les filtres
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {filteredData.length.toLocaleString()} résultat{filteredData.length > 1 ? 's' : ''} trouvé{filteredData.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Custom Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Titre
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prix
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Localisation
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Utilisateur
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stats
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Créé le
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <ImageCellRenderer value={item.images} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <TypeCellRenderer value={item.type} />
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                      {item.category}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <PriceCellRenderer value={item.price} data={item} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        {item.location}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <UserCellRenderer value={item.user} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <StatsCellRenderer data={item} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <StatusCellRenderer value={item.status} data={item} />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        {new Date(item.createdAt).toLocaleDateString('fr-FR')}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Précédent
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Suivant
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Affichage de <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> à{' '}
                    <span className="font-medium">
                      {Math.min(currentPage * itemsPerPage, filteredData.length)}
                    </span>{' '}
                    sur <span className="font-medium">{filteredData.length}</span> résultats
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Précédent
                    </button>
                    {[...Array(totalPages)].map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === idx + 1
                            ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Suivant
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Drawer */}
        <FilterDrawer
          isOpen={showFilterDrawer}
          onClose={() => setShowFilterDrawer(false)}
          filters={filters}
          onFilterChange={setFilters}
          onClearFilters={clearFilters}
          totalResults={filteredData.length}
        />
      </div>
    </div>
  );
}
