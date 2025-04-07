import { NavLinks } from "@/constants";
import NavLink from "./NavLink";
import Image from "next/image";
import Socials from "./Socials";

const DesktopNav: React.FC = () => {
  return (
    <nav
      className="hidden lg:flex items-center justify-between py-[53px] px-10 max-w-[1210px] mx-auto"
      aria-label="Desktop navigation"
    >
      <ul className="flex items-center gap-5 text-white" role="menubar">
        {NavLinks.map((item) => (
          <NavLink
            key={item.id}
            href={item.href}
            label={item.label}
            role="menuitem"
          />
        ))}
      </ul>

      <div className="flex items-center gap-9">
        <Image
          src="/images/logo.svg"
          alt="Company logo"
          width={186}
          height={58}
          priority
        />
        <Socials />
      </div>
    </nav>
  );
};

export default DesktopNav;
