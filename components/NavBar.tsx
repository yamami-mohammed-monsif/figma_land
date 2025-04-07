"use client";

import React from "react";
import MobileNav from "./navigation/MobileNav";
import DesktopNav from "./navigation/DesktopNav";
import { useMobileMenu } from "@/hooks/useMobileMenu";

const NavBar: React.FC = () => {
  const { isOpen, setIsOpen } = useMobileMenu();

  return (
    <header className="w-full">
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default NavBar;
