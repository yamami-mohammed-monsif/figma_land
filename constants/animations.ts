/**
 * Animation variants for Framer Motion
 * These animations are used throughout the application to create consistent motion effects
 */

// Mobile menu animations
export const slideAnimation = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Basic fade animations
export const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Staggered item animations for lists
export const staggerItemAnimation = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

// Hero section animations
export const heroBackgroundAnimation = {
  initial: {
    opacity: 0,
    scale: 1.2,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

// Navigation animations
export const logoAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.8, // Start after background animation
      ease: "easeOut",
    },
  },
};

export const navLinksAnimation = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1.4, // Start after logo animation
      ease: "easeOut",
    },
  },
};

export const socialIconsAnimation = {
  initial: {
    opacity: 0,
    x: -70,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1.4, // Start after logo animation
      ease: "easeOut",
    },
  },
};

// Hero content animations
export const headingAnimation = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 1.9, // Start after nav and social animations
      ease: "easeOut",
    },
  },
};

export const paragraphAnimation = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 2.3, // Start after heading animation
      ease: "easeOut",
    },
  },
};

export const buttonAnimation = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 2.7, // Start after paragraph animation
      ease: "easeOut",
    },
  },
};
