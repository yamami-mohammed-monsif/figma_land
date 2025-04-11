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

export const navSocialsAnimation = {
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
  animate: (customDelay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: customDelay,
      ease: "easeOut",
    },
  }),
};

export const paragraphAnimation = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: (customDelay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: customDelay,
      ease: "easeOut",
    },
  }),
};

export const buttonAnimation = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: (customDelay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: customDelay,
      ease: "easeOut",
    },
  }),
};

// Feature cards animations
export const featureCardVariants = {
  left: {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
  middle: {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  right: {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
};

// CTA section animations
export const ctaTextAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const ctaImageAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Subscribe section animations
export const subscribeImageAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const subscribeFormAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Pricing section animations
export const PricingCardsVariants = {
  left: {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  },
  middle: {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  right: {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  },
};

// Contact section animations
export const contactFormAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const contactSocialsAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Contact info card animation
export const contactInfoCardAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.5,
  },
  transition: (index: number) => ({
    duration: 0.5,
    delay: index * 0.15, // stagger effect
  }),
};
