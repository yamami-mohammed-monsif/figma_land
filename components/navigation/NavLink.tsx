import { motion } from "motion/react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  role?: string;
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  role,
  className,
  setIsOpen,
}) => {
  return (
    <motion.div
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 20 },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`text-[15px] p-2.5 font-inter hover:font-medium ${
        className || ""
      }`}
      role={role}
    >
      <Link
        href={href}
        onClick={() => setIsOpen?.(false)}
        className="block w-full"
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default NavLink;
