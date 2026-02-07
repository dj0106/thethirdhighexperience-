/**
 * Application Constants
 * Centralized constants for The Third High Experience
 */

declare const process: { env: { NODE_ENV?: string; NEXT_PUBLIC_BASE_PATH?: string } };

import { NavigationItem } from '@/types';

// Application Information
export const APP_CONFIG = {
  name: 'The Third High Experience',
  description: 'Explore Shiva Consciousness through Shoonyata Meditation and AUM Chanting in The Third High Experience.',
  version: '1.0.0',
  author: 'The Third High Experience Team',
  url: 'https://www.thethirdhighexperience.com',
  email: 'contact@thethirdhighexperience.com',
} as const;

// SEO Defaults
export const SEO_DEFAULTS = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  keywords: [
    'meditation',
    'shiva consciousness',
    'shoonyata meditation',
    'aum chanting',
    'spiritual awakening',
    'mindfulness',
    'yoga',
    'mandukya upanishad',
    'inner transformation',
    'consciousness',
  ],
  image: '/images/og-image.jpg',
  type: 'website' as const,
} as const;

// Navigation Configuration
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Blogs',
    href: '/blogs',
  },
  {
    label: 'Store',
    href: 'https://razorpay.com/?utm_source=google&utm_medium=cpc&utm_campaign=RPSME-RPPerf-GSearchBrand-Prospect-Dweb-Core&utm_adgroup=brandsearch_core_exact&utm_content=RPSME-Brand-010223&utm_term=razorpay&utm_gclid=Cj0KCQjwrJTGBhCbARIsANFBfgtRCS_WETcjkLEkn59pRsAr7hlpF3fpKWXwyYJ0oSLOqNXov-LPl-IaAhtfEALw_wcB&utm_campaignID=400139470&utm_adgroupID=27293859910&utm_adID=689518700854&utm_network=g&utm_device=c&utm_matchtype=e&utm_devicemodel=&utm_adposition=&utm_location=9198210&gad_source=1&gad_campaignid=400139470&gbraid=0AAAAADdXWPoIl83ir5mz4lp7Pa52XzT4F&gclid=Cj0KCQjwrJTGBhCbARIsANFBfgtRCS_WETcjkLEkn59pRsAr7hlpF3fpKWXwyYJ0oSLOqNXov-LPl-IaAhtfEALw_wcB',
    external: true,
    target: '_blank',
  },
  {
    label: 'Community',
    href: '/#community',
  },
  {
    label: 'Guided Practices',
    href: '/guided-practices',
  },
  {
    label: 'Book',
    href: '/book',
  },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: '#',
  instagram: '#',
  youtube: '#',
  twitter: '#',
  facebook: '#',
  google: '#',
} as const;

// Important Dates
export const DATES = {
  mahashivratri2026: '2026-02-17T00:00:00',
  launchDate: '2025-01-01T00:00:00',
} as const;

// Image Paths
export const IMAGES = {
  logos: {
    meditation: '/images/logos/meditation.jpeg',
    shiva: '/images/logos/Shiva.png',
  },
  backgrounds: {
    bookDesign: '/images/backgrounds/BookDesign2.png',
    bookCover: '/images/backgrounds/image.png',
  },
  icons: {
    // Add icon paths as needed
  },
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  meditation: '/api/meditation',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  meditationPreferences: 'meditation_preferences',
  userSettings: 'user_settings',
  visitCount: 'visit_count',
} as const;

// Meditation Configuration
export const MEDITATION_CONFIG = {
  defaultDuration: 10, // minutes
  durations: [5, 10, 15, 20, 30, 45, 60], // available durations in minutes
  sounds: {
    aum: '/sounds/aum-chanting.mp3',
    bells: '/sounds/meditation-bells.mp3',
    silence: null,
  },
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  twinkle: 4000,
  spinSlow: 8000,
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Z-Index Scale
export const Z_INDEX = {
  background: -1,
  default: 0,
  content: 10,
  header: 50,
  modal: 100,
  tooltip: 200,
} as const;

// Form Validation
export const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  minPasswordLength: 8,
  maxMessageLength: 1000,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Please enter a valid phone number',
  passwordTooShort: `Password must be at least ${VALIDATION.minPasswordLength} characters`,
  messageTooLong: `Message must be less than ${VALIDATION.maxMessageLength} characters`,
  networkError: 'Network error. Please try again.',
  serverError: 'Server error. Please try again later.',
  notFound: 'The requested resource was not found.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  contactSubmitted: 'Thank you for your message. We will get back to you soon.',
  newsletterSubscribed: 'Successfully subscribed to our newsletter.',
  meditationCompleted: 'Meditation session completed successfully.',
} as const;

// Page Titles
export const PAGE_TITLES = {
  home: 'Home',
  blogs: 'The Third Scroll',
  blog: (title: string) => title,
  book: 'The Third High: Experience Shiva Within',
  guidedPractices: 'Guided Practices',
  contact: 'Contact Us',
  about: 'About',
  notFound: 'Page Not Found',
} as const;

// Page Descriptions
export const PAGE_DESCRIPTIONS = {
  home: 'Explore Shiva Consciousness through Shoonyata Meditation and AUM Chanting in The Third High Experience.',
  blogs: 'Guided reflections, timeless wisdom, and living practices to help seekers walk deeper into the path of awakening.',
  book: 'Within these pages lies a path of awakening — a synthesis of yogic wisdom and living experience.',
  guidedPractices: 'Immerse yourself in guided meditation practices and spiritual exercises.',
  contact: 'Get in touch with us for questions, guidance, or to join our community.',
  about: 'Learn about The Third High Experience and our mission to share ancient wisdom.',
} as const;

// Content Sections
export const CONTENT_SECTIONS = {
  hero: {
    title: 'MahaShivratri 2026',
    subtitle: 'Initiation into Awareness',
  },
  awakening: {
    title: 'Discover the Path to Inner Transformation',
    description: 'Embark on a profound journey into Shiva Consciousness with The Third High Experience - Level 1. This comprehensive guide invites you to explore the ancient practices of Shoonyata Meditation (the art of becoming nothing) and AUM Chanting (the cosmic vibration), blending timeless wisdom from the Mandukya Upanishad and yogic traditions to awaken your true self.',
  },
  meditation: {
    title: 'Meditation Space',
    subtitle: 'Enter the silence. Feel the sound.',
    description: 'Close your eyes, breathe deeply, and let this sound guide you inward. This is not just listening — it\'s arriving in the present moment.',
  },
  footer: {
    title: 'Connect with Us',
    copyright: '© 2026 MahaShivratri Experience. All rights reserved.',
  },
} as const;

// Feature Flags
export const FEATURES = {
  enableAnalytics: true,
  enableNewsletter: true,
  enableContactForm: true,
  enableMeditationTimer: true,
  enableSoundEffects: true,
  enableAnimations: true,
} as const;

// Performance Configuration
export const PERFORMANCE = {
  imageOptimization: true,
  lazyLoading: true,
  prefetchLinks: true,
  cacheTimeout: 3600000, // 1 hour in milliseconds
} as const;

// Development Configuration
export const DEV_CONFIG = {
  enableDebugMode: process.env.NODE_ENV === 'development',
  enableConsoleLogging: process.env.NODE_ENV === 'development',
  enablePerformanceMonitoring: true,
} as const;
