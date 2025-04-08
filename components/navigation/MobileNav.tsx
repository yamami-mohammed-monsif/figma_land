"use client";

import { NavLinks } from "@/constants";
import {
  slideAnimation,
  fadeAnimation,
  staggerItemAnimation,
} from "@/constants/animations";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import NavLink from "./NavLink";
import { motion, AnimatePresence } from "motion/react";
import HamburgerButton from "../UI/HamburgerButton";
import Image from "next/image";

const MobileNav: React.FC = () => {
  const { isOpen, setIsOpen, closeMenu } = useMobileMenu();

  return (
    <nav className="lg:hidden">
      <div className="flex items-center justify-between p-4">
        <Image
          src="/assets/logo.svg"
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
            {...fadeAnimation}
            className="fixed inset-0 bg-black/50 z-20"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <motion.ul
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={slideAnimation}
        className="fixed inset-y-0 right-0 w-[70%] z-30 bg-white p-8"
        aria-label="Mobile navigation menu"
        role="menu"
      >
        {NavLinks.map((item) => (
          <motion.li
            key={item.id}
            {...staggerItemAnimation}
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
