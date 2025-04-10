"use client";

import { motion } from "motion/react";

interface buttonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  paddingX?: string;
  paddingY?: string;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
  "aria-label"?: string;
  variants?: any;
  initial?: string;
  animate?: string;
  custom?: number;
  disabled?: boolean;
}

const Button: React.FC<buttonProps> = ({
  children,
  variant = "primary",
  paddingX = "px-8",
  paddingY = "py-4",
  fontSize = "text-base",
  fontWeight = "font-normal",
  className,
  "aria-label": ariaLabel,
  variants,
  initial,
  animate,
  custom,
  disabled,
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
      className={`rounded-full cursor-pointer font-inter ${
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-white text-primary border border-primary"
      } ${paddingX} ${paddingY} ${fontSize} ${fontWeight} ${className}`}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
