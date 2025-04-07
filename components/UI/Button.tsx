"use client";

import { motion } from "motion/react";

interface buttonProps {
  children: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  fontSize?: string;
  className?: string;
  "aria-label"?: string;
  variants?: any;
  initial?: string;
  animate?: string;
  custom?: number;
}

const Button: React.FC<buttonProps> = ({
  children,
  paddingX = "px-8",
  paddingY = "py-4",
  fontSize = "text-base",
  className,
  "aria-label": ariaLabel,
  variants,
  initial,
  animate,
  custom,
}) => {
  return (
    <motion.button
      variants={variants}
      initial={initial}
      animate={animate}
      custom={custom}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 10px 15px rgba(255, 255, 255, 0.3)",
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-full cursor-pointer font-inter bg-primary ${paddingX} ${paddingY} ${fontSize} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
};

export default Button;
