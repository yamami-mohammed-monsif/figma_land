"use client";

import { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full">
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <DesktopNav />
    </header>
  );
};

export default NavBar;
