# UrbanConnect Web & Mobile

A Next.js-based urban connectivity platform built with TypeScript, Tailwind CSS, and modern React features.

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
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication flows
│   │   ├── login/         # Login page
│   │   ├── register/      # Registration with success page
│   │   ├── resetPassword/ # Password reset flow
│   │   └── verificationEmail/ # Email verification
│   ├── components/        # Shared components
│   │   ├── BottomBar/     # Navigation bar
│   │   ├── Topbar/        # Header components
│   │   ├── pages/         # Page-specific components
│   │   └── DynamicMap.tsx # Interactive map component
│   ├── map/              # Map page
│   ├── profile/          # User profiles
│   │   ├── settings/     # Profile settings
│   │   └── page/[slug]/  # Dynamic profile pages
│   ├── welcome/          # Welcome/onboarding
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
└── assets/               # Static assets
    ├── svg/              # SVG icons
    └── urbanconnectBackground.png
```

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Lucide React, React Icons
- **Animations**: Framer Motion
- **Maps**: Leaflet
- **Carousels**: Embla Carousel, React Slick, Keen Slider
- **Build Tool**: Turbopack (Next.js built-in)

## 🌟 Key Features

- **Authentication System**: Complete auth flow with login, registration, password reset, and email verification
- **Interactive Maps**: Leaflet-powered mapping functionality
- **Profile Management**: User profiles with settings and dynamic content
- **Mobile-First Design**: Responsive design with bottom navigation
- **Modern UI**: Tailwind CSS v4 with component-based architecture

## 🔧 Development Commands

```bash
# Development with Turbopack (faster builds)
npm run dev

# Production build with Turbopack
npm run build

# Type checking
npx tsc --noEmit

# Format code
npx prettier --write .

# Lint and fix
npm run lint --fix
```

## 📱 Pages Overview

- `/` - Home page
- `/auth/login` - User login
- `/auth/register` - User registration
- `/auth/resetPassword` - Password reset
- `/auth/verificationEmail` - Email verification
- `/map` - Interactive map view
- `/profile` - User profile
- `/profile/settings` - Profile settings
- `/profile/page/[slug]` - Dynamic profile content
- `/welcome` - Onboarding/welcome flow

## 🎨 Component Architecture

### Topbar Components
- `MobileUrbanConnect.tsx` - Mobile header
- `ReturnUrbanConnect.tsx` - Return navigation
- `TransparentUrbanConnect.tsx` - Transparent header variant

### Profile Page Components
- `Activity.tsx` - User activity feed
- `Entreprise.tsx` - Business information
- `Produits.tsx` - Product showcase
- `Services.tsx` - Service listings
- `UserInfo.tsx` - User information display

## 🗺 Map Integration

The app includes interactive mapping functionality using Leaflet. The `DynamicMap.tsx` component provides:
- Interactive map interface
- Location-based features
- Urban connectivity visualization

## 📦 Key Dependencies

- **React 19.1.0** - Latest React with concurrent features
- **Next.js 15.5.6** - Full-stack React framework
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Leaflet** - Interactive maps
- **Lucide React** - Icon library

## 🚀 Deployment

The app is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
npm run build
vercel deploy
```

## 📝 Notes

- Uses Next.js App Router for file-based routing
- Turbopack enabled for faster development builds
- TypeScript strict mode enabled
- Tailwind CSS v4 with PostCSS integration
- Mobile-first responsive design approach