"use client";

import { NavLinks } from "@/constants";
import NavLink from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import HamburgerButton from "../UI/HamburgerButton";
import Image from "next/image";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="lg:hidden">
      <div className="flex items-center justify-between p-4">
        <Image
          src="/images/logo.svg"
          alt="Company logo"
          width={186}
          height={58}
          priority
        />
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-20"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.ul
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
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
        }}
        className="fixed inset-y-0 right-0 w-[70%] z-30 bg-white p-8"
        aria-label="Mobile navigation menu"
        role="menu"
      >
        {NavLinks.map((item) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: item.id * 0.1 }}
            className="list-none"
          >
            <NavLink
              href={item.href}
              label={item.label}
              role="menuitem"
              setIsOpen={setIsOpen}
            />
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default MobileNav;
