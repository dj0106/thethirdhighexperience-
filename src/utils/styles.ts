/**
 * Style Utilities
 * Helper functions for consistent styling across components
 */

import { colors, typography, spacing, layout, animations, components } from '@/styles/design-system';

// CSS-in-JS style helpers
export const styleUtils = {
  // Create consistent background styles
  background: {
    primary: () => ({ background: colors.primary.background }),
    blue: () => ({ background: colors.primary.blue }),
    glass: () => ({
      background: colors.ui.glass,
      backdropFilter: 'blur(4px)',
    }),
  },

  // Text styling utilities
  text: {
    primary: () => ({ color: colors.text.primary }),
    secondary: () => ({ color: colors.text.secondary }),
    muted: () => ({ color: colors.text.muted }),
    heading: (size: keyof typeof typography.sizes = '4xl') => ({
      fontSize: typography.sizes[size],
      fontWeight: typography.weights.light,
      color: colors.text.primary,
      lineHeight: typography.lineHeights.tight,
    }),
    body: (size: keyof typeof typography.sizes = 'base') => ({
      fontSize: typography.sizes[size],
      color: colors.text.secondary,
      lineHeight: typography.lineHeights.normal,
    }),
  },

  // Layout utilities
  layout: {
    container: (maxWidth: keyof typeof layout.maxWidth = 'xl') => ({
      maxWidth: layout.maxWidth[maxWidth],
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: spacing[6],
      paddingRight: spacing[6],
    }),
    section: () => ({
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${spacing[20]} ${spacing[6]}`,
      position: 'relative' as const,
    }),
    card: () => ({
      ...components.card.base,
      transition: `border-color ${animations.duration.normal}`,
      '&:hover': {
        borderColor: colors.ui.borderHover,
      },
    }),
  },

  // Position utilities
  position: {
    absolute: (top?: string, left?: string, right?: string, bottom?: string) => ({
      position: 'absolute' as const,
      ...(top && { top }),
      ...(left && { left }),
      ...(right && { right }),
      ...(bottom && { bottom }),
    }),
    fixed: () => ({
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: layout.zIndex.navigation,
    }),
    center: () => ({
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }),
  },

  // Animation utilities
  animation: {
    transition: (property = 'all', duration = animations.duration.normal) => ({
      transition: `${property} ${duration} ${animations.easing.default}`,
    }),
    hover: (styles: Record<string, any>) => ({
      transition: `all ${animations.duration.normal}`,
      '&:hover': styles,
    }),
    spinSlow: () => ({
      animation: 'spin-slow 8s linear infinite',
    }),
  },

  // Responsive utilities
  responsive: {
    hide: (breakpoint: keyof typeof layout.breakpoints) => ({
      [`@media (max-width: ${layout.breakpoints[breakpoint]})`]: {
        display: 'none',
      },
    }),
    show: (breakpoint: keyof typeof layout.breakpoints) => ({
      display: 'none',
      [`@media (min-width: ${layout.breakpoints[breakpoint]})`]: {
        display: 'block',
      },
    }),
  },
};

// CSS class name utilities
export const classUtils = {
  // Combine class names conditionally
  cn: (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(' ');
  },

  // Create responsive classes
  responsive: (base: string, md?: string, lg?: string) => {
    return classUtils.cn(
      base,
      md && `md:${md}`,
      lg && `lg:${lg}`
    );
  },

  // Create state-based classes
  state: (base: string, hover?: string, focus?: string, active?: string) => {
    return classUtils.cn(
      base,
      hover && `hover:${hover}`,
      focus && `focus:${focus}`,
      active && `active:${active}`
    );
  },
};

// Component style generators
export const componentStyles = {
  // Button styles
  button: (
    variant: keyof typeof components.button.variants = 'primary',
    size: keyof typeof components.button.sizes = 'md'
  ) => {
    const variantStyles = components.button.variants[variant];
    const sizeStyles = components.button.sizes[size];
    
    return {
      ...sizeStyles,
      ...variantStyles,
      border: 'none',
      borderRadius: '1.5rem',
      cursor: 'pointer',
      fontWeight: typography.weights.medium,
      transition: `all ${animations.duration.normal}`,
      '&:hover': variantStyles.hover,
    };
  },

  // Navigation styles
  navigation: (isScrolled: boolean) => ({
    ...styleUtils.position.fixed(),
    padding: `${spacing[4]} ${spacing[6]}`,
    background: isScrolled 
      ? components.navigation.background.scrolled 
      : components.navigation.background.transparent,
    backdropFilter: isScrolled ? components.navigation.backdropFilter : 'none',
    transition: `all ${animations.duration.normal}`,
  }),

  // Card styles
  card: () => ({
    ...components.card.base,
    ...styleUtils.animation.hover({
      borderColor: colors.ui.borderHover,
    }),
  }),
};

// Meditation circle styles generator
export const meditationCircles = {
  create: (index: number, total: number = 5) => {
    const baseSize = 400;
    const sizeDecrement = 80;
    const size = baseSize - (index * sizeDecrement);
    const opacity = 0.15 + (index * 0.125); // Increasing opacity for inner circles
    
    return {
      position: 'absolute' as const,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: `rgba(255, 220, 65, ${opacity})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
};

// Countdown ellipse styles generator
export const countdownEllipses = {
  create: (position: 'left' | 'center' | 'right', opacity: number) => {
    const positions = {
      left: 'calc(50% - 170px - 360px)',
      center: 'calc(50% - 170px)',
      right: 'calc(50% - 170px + 360px)',
    };

    return {
      position: 'absolute' as const,
      width: '340px',
      height: '340px',
      left: positions[position],
      top: '152px',
      background: colors.primary.yellow[400],
      opacity,
      borderRadius: '50%',
    };
  },
};

// Export commonly used style combinations
export const commonStyles = {
  pageContainer: {
    ...styleUtils.background.primary(),
    minHeight: '100vh',
    position: 'relative' as const,
  },
  
  sectionTitle: {
    ...styleUtils.text.heading('5xl'),
    textAlign: 'center' as const,
    marginBottom: spacing[4],
  },
  
  sectionSubtitle: {
    ...styleUtils.text.body('xl'),
    textAlign: 'center' as const,
    marginBottom: spacing[6],
  },
  
  contentContainer: {
    ...styleUtils.layout.container(),
    paddingTop: spacing[32],
    paddingBottom: spacing[20],
  },
};
