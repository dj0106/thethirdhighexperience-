/**
 * Design System Constants
 * Centralized design tokens for The Third High Experience
 */

// Color Palette
export const colors = {
  // Primary Colors
  primary: {
    background: 'rgba(16, 33, 43, 1)', // Main background
    blue: 'rgba(0, 103, 163, 1)', // Footer background
    yellow: {
      400: '#FFDC41',
      500: '#FFD700',
    },
  },
  
  // Text Colors
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.8)',
    muted: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.6)',
  },
  
  // UI Colors
  ui: {
    border: 'rgba(255, 255, 255, 0.1)',
    borderHover: 'rgba(255, 220, 65, 0.3)',
    overlay: 'rgba(16, 33, 43, 0.9)',
    glass: 'rgba(148, 163, 184, 0.5)', // slate-800/50
  },
  
  // Meditation Colors
  meditation: {
    circle1: 'rgba(255, 220, 65, 0.15)',
    circle2: 'rgba(255, 220, 65, 0.25)',
    circle3: 'rgba(255, 220, 65, 0.4)',
    circle4: 'rgba(255, 220, 65, 0.6)',
    circle5: 'rgba(255, 220, 65, 0.8)',
  },
  
  // Countdown Colors
  countdown: {
    ellipse1: { background: '#FFDC41', opacity: 0.3 },
    ellipse2: { background: '#FFDC41', opacity: 0.5 },
    ellipse3: { background: '#FFDC41', opacity: 0.7 },
  },
} as const;

// Typography
export const typography = {
  fonts: {
    primary: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
    serif: 'Bodoni Moda, serif',
    fallback: 'Arial, Helvetica, sans-serif',
  },
  
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;

// Spacing System
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

// Layout Constants
export const layout = {
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    content: '1060px', // Custom content width used in components
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  zIndex: {
    background: -1,
    default: 0,
    content: 10,
    navigation: 50,
    modal: 100,
  },
} as const;

// Animation & Transitions
export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
  easing: {
    default: 'ease',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
  },
  
  keyframes: {
    twinkle: {
      '0%': { opacity: 0.3 },
      '100%': { opacity: 0.6 },
    },
    spinSlow: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  },
} as const;

// Component Variants
export const components = {
  button: {
    sizes: {
      sm: {
        padding: '0.5rem 1rem',
        fontSize: typography.sizes.sm,
        height: '2rem',
      },
      md: {
        padding: '0.75rem 1.5rem',
        fontSize: typography.sizes.base,
        height: '2.5rem',
      },
      lg: {
        padding: '1rem 2rem',
        fontSize: typography.sizes.lg,
        height: '3rem',
      },
    },
    
    variants: {
      primary: {
        background: colors.primary.yellow[400],
        color: '#000000',
        hover: {
          background: colors.primary.yellow[500],
        },
      },
      secondary: {
        background: 'transparent',
        color: colors.text.primary,
        border: `1px solid ${colors.ui.border}`,
        hover: {
          borderColor: colors.ui.borderHover,
        },
      },
    },
  },
  
  card: {
    base: {
      background: colors.ui.glass,
      backdropFilter: 'blur(4px)',
      border: `1px solid ${colors.ui.border}`,
      borderRadius: '0.5rem',
      padding: spacing[6],
    },
    
    hover: {
      borderColor: colors.ui.borderHover,
    },
  },
  
  navigation: {
    height: '4rem',
    padding: spacing[6],
    background: {
      transparent: 'transparent',
      scrolled: 'rgba(15, 23, 42, 0.9)', // slate-900/90
    },
    backdropFilter: 'blur(12px)',
  },
} as const;

// Specific Component Dimensions (from existing code)
export const dimensions = {
  countdown: {
    container: { width: '1060px', height: '492px' },
    ellipse: { width: '340px', height: '340px' },
    title: { width: '584px', height: '92px' },
    number: { width: '106px', height: '92px' },
  },
  
  meditation: {
    container: { width: '400px', height: '400px' },
    circles: {
      outer: { width: '400px', height: '400px' },
      second: { width: '320px', height: '320px' },
      third: { width: '240px', height: '240px' },
      fourth: { width: '180px', height: '180px' },
      inner: { width: '120px', height: '120px' },
    },
  },
  
  navigation: {
    logo: { width: '2.5rem', height: '2.5rem' },
    button: { width: '160px', height: '48px', borderRadius: '24px' },
    links: {
      home: { width: '60px', height: '24px' },
      blogs: { width: '58px', height: '24px' },
      store: { width: '55px', height: '24px' },
      community: { width: '100px', height: '24px' },
      practices: { width: '140px', height: '24px' },
      book: { width: '72px', height: '24px' },
    },
  },
} as const;

// Utility Functions
export const utils = {
  // Create responsive styles
  responsive: (mobile: string, desktop?: string) => ({
    base: mobile,
    md: desktop || mobile,
  }),
  
  // Create hover states
  hover: (styles: Record<string, string>) => ({
    '&:hover': styles,
  }),
  
  // Create focus states
  focus: (styles: Record<string, string>) => ({
    '&:focus': styles,
  }),
} as const;

export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Layout = typeof layout;
export type Animations = typeof animations;
export type Components = typeof components;
export type Dimensions = typeof dimensions;
