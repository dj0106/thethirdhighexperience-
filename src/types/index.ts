/**
 * Type Definitions
 * Centralized type definitions for The Third High Experience
 */

import { ReactNode } from 'react';

// Blog Post Types
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  coverImage?: string;
  author?: string;
  tags?: string[];
  readTime?: number;
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  target?: '_blank' | '_self';
}

export interface NavigationProps {
  items?: NavigationItem[];
  className?: string;
}

// Meditation Context Types
export interface MeditationContextType {
  isMeditating: boolean;
  startMeditation: () => void;
  stopMeditation: () => void;
  meditationDuration?: number;
  setMeditationDuration?: (duration: number) => void;
}

// Countdown Types
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds?: number;
}

export interface CountdownProps {
  targetDate: string;
  onComplete?: () => void;
  showSeconds?: boolean;
  className?: string;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  background?: 'primary' | 'blue' | 'transparent';
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  external?: boolean;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  hover?: boolean;
}

// Layout Types
export interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export interface PageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
}

// Meditation Component Types
export interface MeditationViewProps {
  size?: 'sm' | 'md' | 'lg';
  showControls?: boolean;
  className?: string;
}

export interface MeditationCircleProps {
  size: number;
  opacity: number;
  className?: string;
}

// Stars Background Types
export interface StarPosition {
  left: string;
  top: string;
  size: number;
}

export interface StarsBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  animated?: boolean;
  className?: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  submitLabel?: string;
  className?: string;
}

// API Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

// SEO Types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'book';
  publishedTime?: string;
  modifiedTime?: string;
}

// Theme Types
export interface ThemeConfig {
  colors: Record<string, string>;
  fonts: Record<string, string>;
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

export interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  duration?: number;
  delay?: number;
  threshold?: number;
}

// Error Types
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

// Utility Types
export type Variant<T extends Record<string, any>> = keyof T;
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Color = 'primary' | 'secondary' | 'accent' | 'neutral';
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;

// Event Types
export interface CustomEvent<T = any> {
  type: string;
  data: T;
  timestamp: number;
}

// State Management Types
export interface AppState {
  meditation: {
    isActive: boolean;
    duration: number;
    startTime?: number;
  };
  navigation: {
    isOpen: boolean;
    currentPath: string;
  };
  ui: {
    isLoading: boolean;
    theme: 'light' | 'dark';
  };
}

export type AppAction = 
  | { type: 'START_MEDITATION'; payload: { duration: number } }
  | { type: 'STOP_MEDITATION' }
  | { type: 'TOGGLE_NAVIGATION' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' };

// Component Ref Types
export interface ComponentRef {
  focus: () => void;
  blur: () => void;
  scrollIntoView: () => void;
}

// Media Types
export interface MediaQuery {
  matches: boolean;
  media: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

// Performance Types
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

// Accessibility Types
export interface A11yProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  role?: string;
  tabIndex?: number;
}

// Generic utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Export commonly used type combinations
export type ComponentWithChildren<T = {}> = T & { children: ReactNode };
export type ComponentWithClassName<T = {}> = T & { className?: string };
export type InteractiveComponent<T = {}> = T & {
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
};
