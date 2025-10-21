# UrbanConnect Web & Mobile

A Next.js-based urban connectivity platform built with TypeScript, Tailwind CSS, and modern React features. UrbanConnect enables local community interaction, service marketplace, and urban lifestyle management.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                   # Next.js App Router
│   ├── components/        # Shared components
│   │   └── DynamicMap.tsx # Interactive map with user pins
│   ├── map/              # Map page
│   │   └── page.tsx      # Interactive map view
│   ├── profile/          # User profiles
│   │   └── page.tsx      # Profile management
│   ├── welcome/          # Welcome/onboarding
│   │   └── page.tsx      # Welcome flow
│   ├── layout.tsx        # Root layout with Geist font
│   ├── page.tsx          # Feature-rich homepage
│   ├── globals.css       # Global styles
│   └── favicon.ico       # App icon
├── data/                 # Data structures
│   └── categories.ts     # Service/product categories
├── hooks/                # Custom React hooks
│   └── useFilters.ts     # Filter management
└── assets/               # Static assets
    └── urbanconnectBackground.png
```

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.6 with App Router & Turbopack
- **Language**: TypeScript 5+ with strict mode
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: Lucide React, React Icons
- **Animations**: Framer Motion 12.23.24
- **Maps**: Leaflet with custom user pins
- **Carousels**: Embla Carousel, React Slick, Keen Slider
- **Fonts**: Geist font family
- **Runtime**: React 19.1.0

## 🌟 Key Features

### 🏠 Homepage Experience
- **Hero Section**: Urban connectivity branding with background imagery
- **Service Showcase**: Products (vélos, kits jardinage, sacs éco) with ratings
- **Service Categories**: Réparation, livraison, consultation, solutions entreprise
- **Local Activities**: Events, workshops, community activities with participant counts
- **Contact Integration**: Multi-channel contact form and information
- **Social Authentication**: Google, Apple, Facebook login options

### 🗺️ Interactive Mapping
- **User Location Pins**: Custom avatar markers on map
- **User Profiles**: Photo carousels, stats, messaging integration
- **Real-time Interaction**: Like and message functionality
- **Geographic Context**: Paris-centered with OpenStreetMap tiles

### 📈 Data Architecture
- **Category System**: 10+ main categories with 40+ subcategories
- **Filter Management**: Multi-select category and type filtering
- **Product/Service Split**: Distinct handling of products vs services
- **Comprehensive Taxonomy**: From home/garden to professional services

## 🔧 Development Commands

```bash
# Development with Turbopack (faster builds)
npm run dev

# Production build with Turbopack
npm run build

# Production server
npm start

# Linting with ESLint v9
npm run lint

# Type checking (strict mode)
npx tsc --noEmit

# Check dependencies
npm audit
```

## 📱 Pages Overview

- `/` - Feature-rich homepage with products, services, activities, and contact
- `/map` - Interactive Leaflet map with user pins and profile popups  
- `/profile` - User profile management
- `/welcome` - Onboarding and welcome experience

## 📊 Data Categories

The platform supports a comprehensive category system:

1. **Maison & Jardin** 🏡 - Bricolage, rénovation, jardinage, ameublement
2. **Véhicules & Mobilité** 🚗 - Auto/moto, transport, déménagement
3. **Électroménager & Multimédia** 📱 - Gros/petit électroménager, informatique
4. **Services à la personne** 👥 - Aide domicile, cours, beauté, garde animaux
5. **Événementiel & Loisirs** 🎉 - Matériel fête, sport, organisation
6. **Mode & Accessoires** 👗 - Vêtements, chaussures, bijoux, retouche
7. **Enfants & Puériculture** 🧸 - Jouets, matériel bébé, garde
8. **Animaux** 🐕 - Accessoires, nourriture, garde/promenade
9. **Immobilier & Hébergement** 🏠 - Location courte durée, partage d'espace
10. **Artisanat & Services pro** 🎨 - Création, réparation, services techniques

## 🎨 Component Architecture

### Core Components
- `DynamicMap.tsx` - Interactive Leaflet map with user avatars and photo carousels
- `ImageCarousel` - Framer Motion-powered image slideshow
- Custom Leaflet markers with user avatars and glassmorphism popups

### Data Management
- `categories.ts` - Comprehensive service/product taxonomy
- `useFilters.ts` - Multi-select filter state management
- Type-safe interfaces for categories, subcategories, and filters

### Layout & Styling
- Geist font integration via `next/font/google`
- Glassmorphism design with backdrop filters
- Tailwind CSS v4 with custom primary color theming
- Mobile-first responsive grid layouts

## 🗺 Map Integration Details

### Interactive Features
- **Custom User Pins**: Avatar-based markers with glassmorphism styling
- **Rich Popups**: User profiles with photo carousels, stats, and actions
- **Animation**: Framer Motion transitions for image carousels
- **Interaction**: Like and messaging functionality
- **Geographic Context**: Paris-centered (48.8566, 2.3522) with 14x zoom

### Technical Implementation
- Leaflet icon fix for Next.js SSR compatibility
- Custom `divIcon` with HTML avatar rendering
- Popup management with close button functionality
- User data structure with photos, stats, and metadata

## 📦 Key Dependencies

### Core Framework
- **React 19.1.0** - Latest React with concurrent features
- **Next.js 15.5.6** - App Router + Turbopack
- **TypeScript 5+** - Strict mode enabled

### Styling & UI
- **Tailwind CSS 4** - Latest utility-first framework
- **Lucide React 0.546.0** - Modern icon library
- **React Icons 5.5.0** - Additional icon sets
- **Framer Motion 12.23.24** - Advanced animations

### Specialized Libraries
- **Leaflet 1.9.4** - Interactive maps
- **Embla Carousel 8.6.0** - Touch-friendly carousels
- **React Slick 0.31.0** - Additional carousel options
- **Keen Slider 6.8.6** - Lightweight slider

## 🚀 Deployment

```bash
# Build with Turbopack optimization
npm run build

# Deploy to Vercel (recommended)
vercel deploy --prod

# Or deploy to other platforms
npm start  # Serves production build
```

## 📝 Technical Notes

### Architecture Decisions
- **App Router**: Next.js 13+ file-based routing
- **Turbopack**: Enabled for 10x faster builds
- **Strict TypeScript**: Enhanced type safety
- **PostCSS**: Tailwind CSS v4 integration
- **ES2017 Target**: Modern JavaScript support

### Performance Optimizations
- Next.js Image optimization for hero backgrounds
- Turbopack for development and production builds
- React 19 concurrent features
- Lazy loading for map components
- Optimized bundle splitting
