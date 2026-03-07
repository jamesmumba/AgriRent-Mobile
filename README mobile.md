# 🌾 AgriRent Zambia — Mobile App

> **A cross-platform React Native mobile application for agricultural equipment rental in Zambia.**
> Farmers discover, book, and negotiate rentals for tractors, harvesters, planters, and more — while equipment owners manage listings, respond to proposals, and track payments.

![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-54-000020?logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey)
![Screens](https://img.shields.io/badge/Screens-15-brightgreen)
![Components](https://img.shields.io/badge/Components-34-blue)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Screens](#-screens)
- [Components](#-components)
- [Custom Hooks](#-custom-hooks)
- [Navigation](#-navigation)
- [Theming](#-theming)
- [Multi-Language Support](#-multi-language-support)
- [Backend Integration](#-backend-integration)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)
- [Development Notes](#-development-notes)

---

## 🌍 Overview

AgriRent Zambia connects **farmers** who need agricultural equipment with **equipment owners** who want to rent theirs out. This mobile app is the React Native companion to the AgriRent web application, sharing the same Supabase backend and providing a native mobile experience optimized for Zambian users.

### Key Capabilities

| Capability | Details |
|---|---|
| **Any user can rent** | Browse, book, pay, leave reviews, submit proposals |
| **Any user can list** | Add equipment, respond to bookings & proposals, track payments |
| **Admin** | Full platform management (via web) |

---

## ✨ Features

### 🛒 Marketplace & Discovery
- **Equipment browsing** with category filters, search, and sorting
- **Advanced search filters** — price range, location, category, availability
- **AI-powered recommendations** — personalized suggestions based on user behavior
- **Favorites system** — save and compare equipment across sessions
- **Equipment detail view** — image gallery, specifications, owner info, availability calendar

### 📅 Booking & Payments
- **Date-range booking** with interactive availability calendar
- **Real-time price calculation** based on rental duration
- **Mobile Money payments** (MTN, Airtel, Zamtel integration)
- **Cash on delivery** with dual-party confirmation
- **Payment history** with detailed receipts and status tracking
- **Active booking tracker** with progress timeline

### 💬 Proposals & Negotiation
- **Counter-proposals** — farmers can propose alternative prices
- **Price suggestions** — AI-powered inline pricing guidance
- **Proposal management** — owners can accept, reject, or counter
- **Accepted proposal banners** highlighting negotiated prices

### 💬 Real-Time Messaging
- **1:1 chat** powered by Supabase real-time subscriptions
- **Typing indicators** with animated dots
- **Quick reply chips** for common responses
- **Read receipts** with double-check icons
- **Unread badges** on navigation tabs (real-time updated)

### 👤 User Management
- **Email/password authentication** via Supabase Auth
- **Role selection** (Farmer / Owner) during signup
- **Profile verification** with NRC, address, and selfie upload
- **Verification-gated features** — unverified users cannot book or list
- **Suspension detection** with automatic redirect
- **Avatar upload** via device camera or gallery

### 🔔 Notifications
- **Push notifications** via Expo Notifications
- **In-app notification center** with categorized alerts
- **Mark all as read** functionality
- **Real-time badge counts** on navigation tabs

### 🌐 Internationalization
- **4 languages**: English, Bemba, Nyanja, Tonga
- **Language selector** in profile settings
- **Persisted language preference** across sessions
- **Full translation coverage** — all 11 screens wired with `t.xxx` keys

### 🎨 Theming
- **Light & dark mode** with branded AgriRent colors
- **System theme detection** with manual override
- **Persisted theme preference** via AsyncStorage
- **Consistent design tokens** across all screens

### 🗺 Map & Location
- **Interactive map** powered by `react-native-maps` for equipment discovery
- **GPS coordinates** captured when listing equipment
- **"Near Me" filter** in advanced search for proximity-based results
- **Mini-map** on equipment detail when GPS coordinates are available
- **GPS indicator** on owner listings to alert when location data is missing

### 📡 Offline Support
- **Network status detection** with visual indicator
- **Offline queue** — actions queued and replayed when connectivity returns
- **Offline cache** — React Query + `useOfflineCache` for data persistence
- **Cached data** via React Query with 5-minute stale time

---

## 🛠 Tech Stack

### Core Framework
| Technology | Version | Purpose |
|---|---|---|
| **React Native** | 0.81.5 | Cross-platform mobile framework |
| **Expo** | 54 | Managed workflow, build tooling, native modules |
| **TypeScript** | 5.9 | Type safety and developer experience |
| **React** | 19.1 | UI rendering engine |

### Navigation
| Package | Purpose |
|---|---|
| `@react-navigation/native` | Core navigation |
| `@react-navigation/bottom-tabs` | Tab-based navigation |
| `@react-navigation/stack` | Stack-based screen transitions |

### UI & Design
| Package | Purpose |
|---|---|
| `react-native-paper` | Material Design 3 component library |
| `@expo/vector-icons` | MaterialCommunityIcons, Ionicons |
| `react-native-calendars` | Availability and booking calendars |
| `react-native-gifted-chat` | Chat UI with message bubbles |
| `react-native-image-viewing` | Full-screen image gallery |
| `react-native-reanimated` | Smooth animations |
| `react-native-tab-view` | Swipeable tab layouts |
| `react-native-pager-view` | Page swiping |

### Backend & Data
| Package | Purpose |
|---|---|
| `@supabase/supabase-js` | Database, auth, real-time, storage |
| `@tanstack/react-query` | Server state management, caching |
| `date-fns` | Date formatting and calculation |

### Device & Platform
| Package | Purpose |
|---|---|
| `expo-image-picker` | Camera and gallery access |
| `expo-location` | Geolocation services |
| `expo-notifications` | Push notifications |
| `expo-print` | PDF generation for receipts |
| `expo-sharing` | Native share sheet for PDF receipts |
| `expo-secure-store` | Encrypted credential storage |
| `expo-device` | Device info for push tokens |
| `@react-native-async-storage/async-storage` | Persistent key-value storage |
| `@react-native-community/netinfo` | Network connectivity detection |
| `react-native-maps` | Interactive map for equipment discovery |

---

## 🏗 Architecture

### Provider Hierarchy

```
GestureHandlerRootView
└── SafeAreaProvider
    └── QueryClientProvider (react-query)
        └── ThemeProvider (dark/light mode)
            └── PaperProvider (Material Design 3)
                └── LanguageProvider (i18n)
                    └── NavigationContainer
                        └── AuthNavigator (session gating)
                            ├── AuthScreen (unauthenticated)
                            └── AppTabs (authenticated)
```

### Data Flow

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Screens    │────▶│  Custom Hooks│────▶│  Supabase   │
│ (UI Layer)   │     │  (Logic)     │     │  (Backend)  │
└─────────────┘     └──────────────┘     └─────────────┘
       │                    │                    │
       ▼                    ▼                    ▼
  ThemeContext         React Query          Real-time
  LanguageContext       Caching            Subscriptions
```

### New Architecture

The app runs with React Native's **New Architecture** enabled (`newArchEnabled: true`), leveraging:
- **Fabric** renderer for improved UI performance
- **TurboModules** for optimized native module access
- **Hermes** JavaScript engine for faster startup and lower memory usage

---

## 📁 Project Structure

```
mobile/
├── App.tsx                          # Root component with provider stack
├── index.ts                         # Entry point (registerRootComponent)
├── app.json                         # Expo configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── babel.config.js                  # Babel configuration
├── .env                             # Environment variables
├── assets/                          # App icons, splash screen
│
└── src/
    ├── screens/                     # 15 screen components
    │   ├── SplashScreen.tsx         # Animated launch with random equipment icons
    │   ├── AuthScreen.tsx           # Login / Signup / Forgot Password
    │   ├── DashboardScreen.tsx      # Role-adaptive dashboard with stats
    │   ├── MarketplaceScreen.tsx    # Equipment browsing, search & map view
    │   ├── EquipmentDetailScreen.tsx# Equipment details, booking, negotiate, mini-map
    │   ├── BookingsScreen.tsx       # Booking management (my/received)
    │   ├── MyEquipmentScreen.tsx    # Owner's equipment management with GPS indicator
    │   ├── MessagesScreen.tsx       # Conversation list + AI Chatbot entry
    │   ├── ChatScreen.tsx           # 1:1 chat with gifted-chat
    │   ├── AIChatbotScreen.tsx      # AI assistant (full-screen in Messages tab)
    │   ├── ProfileScreen.tsx        # Profile, settings, verification
    │   ├── NotificationsScreen.tsx  # Notification center with deep-link routing
    │   ├── PaymentHistoryScreen.tsx # Payment records & PDF receipts
    │   ├── FavoritesScreen.tsx      # Saved equipment
    │   └── AIRecommendationsScreen.tsx # AI-powered suggestions
    │
    ├── components/                  # 34 reusable components
    │   ├── ActiveBookingTracker.tsx  # Booking progress timeline
    │   ├── AddEquipmentDialog.tsx    # New equipment listing form
    │   ├── EditEquipmentDialog.tsx   # Edit existing listing
    │   ├── AdvancedSearchFilters.tsx  # Multi-criteria search
    │   ├── AvailabilityCalendar.tsx   # Date range picker
    │   ├── DashboardCalendar.tsx      # Dashboard booking calendar
    │   ├── CounterProposalDialog.tsx   # Submit counter proposal
    │   ├── ProposalResponseDialog.tsx  # Accept/reject proposals
    │   ├── ProposalsList.tsx           # Proposals list with tabs
    │   ├── AcceptedProposalBanner.tsx   # Negotiated price banner
    │   ├── InlinePriceSuggestion.tsx    # AI price guidance
    │   ├── PaymentDialog.tsx            # Payment method selection
    │   ├── MobileMoneyPayment.tsx       # Mobile money flow
    │   ├── CashConfirmation.tsx         # Cash payment confirmation
    │   ├── PaymentReceipt.tsx           # Receipt viewer with PDF export
    │   ├── ReviewDialog.tsx             # Submit review with stars
    │   ├── ReportDialog.tsx             # Report equipment/user
    │   ├── ImageGallery.tsx             # Full-screen image viewer
    │   ├── MultiImageUpload.tsx         # Multi-image upload
    │   ├── SmartRecommendations.tsx     # AI recommendation cards
    │   ├── FavoriteButton.tsx           # Heart toggle button
    │   ├── FavoritesList.tsx            # Favorites grid
    │   ├── AIChatbot.tsx                # AI assistant chat
    │   ├── ContactOwnerButton.tsx       # Start conversation
    │   ├── QuickReplyChips.tsx          # Quick chat responses
    │   ├── ProfileVerificationForm.tsx  # KYC verification
    │   ├── VerificationRequiredDialog.tsx # Verification prompt
    │   ├── VerifiedBadge.tsx            # Verified user badge
    │   ├── SMSPreferences.tsx           # SMS notification prefs
    │   ├── LanguageSelector.tsx         # Language picker dropdown
    │   ├── OfflineIndicator.tsx         # Offline status banner
    │   ├── LocationPicker.tsx           # GPS coordinate picker
    │   ├── MapSearch.tsx                # Interactive map for discovery
    │   ├── StatCard.tsx                 # Dashboard stat card
    │   └── Dropdown.tsx                 # Reusable dropdown picker
    │
    ├── hooks/                       # 11 custom hooks
    │   ├── useFavorites.ts          # Favorites CRUD with Supabase
    │   ├── useNetworkStatus.ts      # Online/offline detection
    │   ├── useNotifications.ts      # Notification fetching & badges
    │   ├── useOfflineCache.ts       # Persistent data caching layer
    │   ├── useOfflineQueue.ts       # Queue actions for retry
    │   ├── usePushNotifications.ts  # Expo push token registration
    │   ├── useSettings.ts           # User preferences persistence
    │   ├── useStartConversation.ts  # Create/find conversations
    │   ├── useSuspensionCheck.ts    # Account suspension detection
    │   ├── useUserRole.ts           # Role & verification status
    │   └── useVerificationCheck.ts  # Verification gate logic
    │
    ├── contexts/                    # 2 React contexts
    │   ├── ThemeContext.tsx          # Dark/light mode provider
    │   └── LanguageContext.tsx       # i18n provider
    │
    ├── navigation/                  # 2 navigators
    │   ├── AuthNavigator.tsx        # Auth/App session gating
    │   └── AppTabs.tsx              # Bottom tab + nested stacks
    │
    ├── services/                    # 2 service modules
    │   ├── supabase.ts              # Supabase client initialization
    │   └── offlineQueue.ts          # Offline action queue manager
    │
    ├── translations/                # 5 translation files
    │   ├── en.ts                    # English (default)
    │   ├── bem.ts                   # Bemba
    │   ├── ny.ts                    # Nyanja (Chichewa)
    │   ├── to.ts                    # Tonga
    │   └── index.ts                 # Translation exports & types
    │
    ├── types/                       # TypeScript type definitions
    │   └── navigation.ts            # Navigation param types
    │
    ├── constants/                   # App constants
    └── utils/                       # Utility functions
```

---

## 📱 Screens

### SplashScreen
Animated launch screen displayed when the app opens. Randomly cycles through agricultural equipment icons (tractor, harvester, planter, etc.) with a smooth fade animation before transitioning to the auth flow or main app.

### AuthScreen
Full authentication flow with login, signup, and password reset. Supports role selection (Farmer/Owner) during registration. Uses Supabase Auth with email/password. Includes form validation, loading states, and error handling.

### DashboardScreen
Role-adaptive dashboard displaying different content for farmers and owners:
- **Farmers**: Active bookings, recent proposals, spending stats, upcoming dates
- **Owners**: Equipment listings, incoming bookings, revenue stats, proposal responses
- StatCards, DashboardCalendar, ActiveBookingTracker, and ProposalsList integration

### MarketplaceScreen
Equipment browsing with tabbed navigation (Browse, Favorites, Compare, AI Picks, Map). Features search bar, category chips, advanced filters, pull-to-refresh, and paginated loading. Equipment cards show images, pricing, location, and availability status. The Map tab shows equipment pinned on an interactive map.

### EquipmentDetailScreen
Comprehensive equipment view with:
- Image gallery with full-screen viewing
- Specification grid (make/model, year, hours, engine power, fuel, condition)
- Owner profile with verification badge
- Availability calendar with date range selection
- Booking form with calculated pricing
- Negotiation option with counter-proposal dialog
- Accepted proposal banner showing negotiated prices
- **Mini-map** (or "Open in Maps" button) when GPS coordinates are available

### BookingsScreen
Dual-view booking management:
- **My Bookings** (farmer): View bookings with status badges, make payments, leave reviews
- **Received Bookings** (owner): Confirm/cancel bookings, view payment status
- Expandable booking cards with detailed info sections
- Status-specific action buttons (Pay, Confirm, Review, Cancel)

### MyEquipmentScreen
Equipment management for owners:
- Equipment list with status indicators (Available/Unavailable)
- Add new equipment with image upload and GPS coordinate capture
- Edit existing listings
- Toggle availability status (verification-gated)
- **GPS warning badge** alerts when a listing is missing coordinates (won't appear on the map)
- View stats per listing

### MessagesScreen
Conversation list with:
- Pinned **AI Chatbot** entry at the top (navigates to `AIChatbotScreen`)
- Search functionality
- Last message preview and timestamp
- Unread message indicators
- Equipment context tags
- Real-time updates via Supabase subscriptions

### ChatScreen
Full-featured 1:1 chat built on react-native-gifted-chat:
- Custom themed message bubbles
- Typing indicator with animated dots
- Read receipts (single/double check)
- Quick reply chips for common responses
- Real-time message delivery via Supabase channels

### AIChatbotScreen
Dedicated full-screen AI assistant accessible from the Messages tab. Provides equipment guidance, rental advice, and platform help. Tab bar is hidden when active.

### ProfileScreen
Comprehensive profile management:
- Avatar upload (camera/gallery)
- Personal info editing (name, phone, location)
- Role and verification status display
- Profile verification form (NRC, address, selfie)
- Settings section (dark mode, language, SMS preferences)
- Account actions (sign out, change password)

### NotificationsScreen
Notification center with:
- Categorized alerts (bookings, payments, proposals, receipts, system)
- Mark all as read
- Relative timestamps
- **Deep-link routing** — tapping navigates directly to the relevant booking, proposal, or receipt

### PaymentHistoryScreen
Payment records with:
- Searchable payment list
- Status badges (pending, completed, failed)
- Detailed view with rental period, method, and amount
- Receipt generation with **PDF download and share** via expo-print & expo-sharing

### FavoritesScreen & AIRecommendationsScreen
Auxiliary screens for saved equipment and AI-powered suggestions with category-based filtering and equipment comparison.

---

## 🧩 Components

The app includes **34 reusable components** organized by feature area:

| Category | Components |
|---|---|
| **Equipment** | `AddEquipmentDialog`, `EditEquipmentDialog`, `ImageGallery`, `MultiImageUpload`, `AvailabilityCalendar` |
| **Booking** | `ActiveBookingTracker`, `DashboardCalendar` |
| **Proposals** | `CounterProposalDialog`, `ProposalResponseDialog`, `ProposalsList`, `AcceptedProposalBanner`, `InlinePriceSuggestion` |
| **Payments** | `PaymentDialog`, `MobileMoneyPayment`, `CashConfirmation`, `PaymentReceipt` |
| **Social** | `ReviewDialog`, `ReportDialog`, `ContactOwnerButton`, `QuickReplyChips`, `AIChatbot` |
| **User** | `ProfileVerificationForm`, `VerificationRequiredDialog`, `VerifiedBadge`, `SMSPreferences` |
| **Discovery** | `SmartRecommendations`, `FavoriteButton`, `FavoritesList`, `AdvancedSearchFilters` |
| **Map & Location** | `MapSearch`, `LocationPicker` |
| **UI Primitives** | `StatCard`, `Dropdown`, `LanguageSelector`, `OfflineIndicator` |

---

## 🪝 Custom Hooks

| Hook | Description |
|---|---|
| `useFavorites` | CRUD operations for favorited equipment with Supabase persistence |
| `useNetworkStatus` | Monitors online/offline state via NetInfo |
| `useNotifications` | Fetches notifications, tracks unread count, marks as read |
| `useOfflineCache` | Caches query data to AsyncStorage for offline access |
| `useOfflineQueue` | Queues failed operations for retry when back online |
| `usePushNotifications` | Registers Expo push token with Supabase |
| `useSettings` | Persists user preferences (theme, language, SMS) to AsyncStorage |
| `useStartConversation` | Creates or finds existing conversations between two users |
| `useSuspensionCheck` | Detects suspended accounts and redirects to auth |
| `useUserRole` | Returns current user's role, verification status, and profile data |
| `useVerificationCheck` | Guards features behind verification (booking, listing, proposals) |

---

## 🧭 Navigation

### Structure

```
AuthNavigator (Stack)
├── AuthScreen              (unauthenticated)
└── AppTabs (authenticated)
    ├── Marketplace Tab
    │   └── MarketplaceStack
    │       ├── MarketplaceList
    │       ├── EquipmentDetail
    │       ├── Favorites
    │       ├── AIRecommendations
    │       └── Notifications
    │
    ├── Dashboard Tab (badge: unread notifications)
    │   └── DashboardStack
    │       ├── DashboardMain
    │       ├── Bookings
    │       ├── MyEquipment
    │       ├── Notifications
    │       ├── PaymentHistory
    │       └── EquipmentDetail
    │
    ├── Messages Tab (badge: unread messages)
    │   └── MessagesStack
    │       ├── MessagesList
    │       ├── Chat (hides tab bar)
    │       └── AIChatbot (hides tab bar)
    │
    └── Profile Tab
        └── ProfileScreen
```

### Tab Bar Features
- **Active color**: `#10b981` (emerald green)
- **Badge counts**: Real-time unread notifications and messages
- **Auto-hide**: Tab bar hidden during active chat and AI chatbot sessions
- **Icons**: MaterialCommunityIcons (tractor, dashboard, message, account)

---

## 🎨 Theming

### Design System

The app uses a branded **Material Design 3** theme with AgriRent's emerald green palette:

| Token | Light | Dark |
|---|---|---|
| **Primary** | `#10b981` | `#34d399` |
| **Secondary** | `#06b6d4` | `#22d3ee` |
| **Background** | `#ffffff` | `#111827` |
| **Surface** | `#ffffff` | `#1f2937` |
| **Text** | `#1f2937` | `#f9fafb` |
| **Text Secondary** | `#6b7280` | `#9ca3af` |
| **Border** | `#e5e7eb` | `#374151` |

### Theme Persistence
- Theme preference stored in `AsyncStorage` under key `agrirent_settings`
- Toggle available in Profile → Settings
- `useTheme()` hook provides `isDark`, `colors`, `paperTheme`, and `navigationTheme`
- Both React Native Paper and React Navigation themes are synchronized

---

## 🌐 Multi-Language Support

### Supported Languages

| Code | Language | File |
|---|---|---|
| `en` | English | `translations/en.ts` |
| `bem` | Bemba | `translations/bem.ts` |
| `ny` | Nyanja (Chichewa) | `translations/ny.ts` |
| `to` | Tonga | `translations/to.ts` |

### Coverage
All **13 user-facing screens** are fully wired with translation keys. Translation sections include:
- `common` — shared labels (loading, error, save, cancel, etc.)
- `auth` — authentication flow strings
- `dashboard` — dashboard stats and actions
- `equipment` — equipment listing and management
- `equipmentDetail` — detail screen labels and alerts
- `marketplace` — browse and filter strings
- `bookings` — booking management
- `messages` — chat and conversation strings
- `notifications` — notification labels
- `profile` — profile and settings
- `paymentHistory` — payment records
- Plus additional sections for navigation, install prompts, and error messages

### Usage
```tsx
const { t, language, setLanguage } = useLanguage();

// Access translations
<Text>{t.dashboard.title}</Text>

// Switch language
setLanguage('bem'); // Switch to Bemba
```

---

## 🔌 Backend Integration

### Supabase Services Used

| Service | Usage |
|---|---|
| **Auth** | Email/password signup, login, session management, password reset |
| **Database** | PostgreSQL with RLS policies for all CRUD operations |
| **Real-time** | Message delivery, typing indicators, notification badges, booking updates |
| **Storage** | Avatar uploads, equipment images, verification documents |

### Key Database Tables

| Table | Purpose |
|---|---|
| `profiles` | User profiles with role, verification status, avatar |
| `equipment` | Equipment listings with specs, pricing, availability |
| `equipment_images` | Multi-image support for listings |
| `bookings` | Booking records with status workflow |
| `payments` | Payment records with mobile money / cash tracking |
| `reviews` | Post-booking reviews with 1-5 star ratings |
| `proposals` | Price negotiation proposals between farmers and owners |
| `conversations` | Chat conversation metadata |
| `messages` | Individual chat messages with read receipts |
| `notifications` | In-app notifications |
| `favorites` | User-bookmarked equipment |

### Row Level Security (RLS)
All tables enforce RLS policies ensuring:
- Users can only view/edit their own data
- Equipment owners can manage their listings
- Both parties in a booking can view booking details
- Reviews require completed booking status
- Verification is enforced at the database level

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn**
- **Expo CLI** (`npx expo`)
- **Expo Go** app on your mobile device (or an emulator)
- **Supabase** project with the schema deployed

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd peza-main/mobile

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your Supabase credentials
```

### Running the App

```bash
# Start with Expo Go (local network)
npx expo start

# Start with tunnel (for remote devices)
npx expo start --tunnel

# Start for specific platform
npx expo start --android
npx expo start --ios
```

### Building for Production

```bash
# Create a development build
npx expo run:android
npx expo run:ios

# Create a production build via EAS
eas build --platform android
eas build --platform ios
```

---

## 🔐 Environment Variables

Create a `.env` file in the `mobile/` directory:

```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

| Variable | Description |
|---|---|
| `EXPO_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public API key |

> **Note**: The `EXPO_PUBLIC_` prefix makes these variables accessible in the Expo runtime via `process.env`.

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm start` | Start Expo development server |
| `npm run android` | Start with Android emulator |
| `npm run ios` | Start with iOS simulator |
| `npm run web` | Start web version |
| `npx tsc --noEmit` | TypeScript type-checking (no output) |

---

## 🧑‍💻 Development Notes

### Performance Optimizations
- **React Query** caching with 5-minute stale time and 2 retries
- **Memoized** render functions in list-heavy screens (Marketplace, Bookings)
- **New Architecture** enabled for Fabric renderer and TurboModules
- **Hermes** engine for faster JS execution

### Design Conventions
- All screens use `useTheme()` for consistent dark/light mode
- All user-visible strings use `useLanguage()` translation keys
- `MaterialCommunityIcons` from `@expo/vector-icons` for all icons
- Layout uses `useSafeAreaInsets()` for edge-to-edge support
- Cards follow `react-native-paper` outlined mode styling

### Key Patterns
- **Verification gating**: Unverified users are blocked from booking, listing, and proposing via `useVerificationCheck` and `useUserRole`
- **Real-time subscriptions**: Chat, notifications, and badge counts use Supabase real-time channels with automatic cleanup on unmount
- **Offline resilience**: Network state detected, queued actions replayed, and visual indicator shown

### Code Quality
- **TypeScript strict mode** — zero compilation errors
- **Consistent component patterns** — functional components with hooks
- **Separation of concerns** — screens handle layout, hooks handle logic, services handle API

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

<p align="center">
  Built with ❤️ for Zambian agriculture
</p>
