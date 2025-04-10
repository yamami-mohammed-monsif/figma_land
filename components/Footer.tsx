import Link from "next/link";
import Section from "./Section";
import { NavLinks } from "@/constants";
import ContactInfoCard from "./ContactInfoCard";
import {
  faLocationDot,
  faMobileScreen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Socials from "./UI/Socials";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-title text-white">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[73px] text-center">
          <div>
            <p className="text-xl font-bold p-2.5">Pages</p>
            <ul className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href={link.href}>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold p-2.5">Eleanor Edwards</p>
            <ul className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href={link.href}>Ted Robertson</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold p-2.5">Eleanor Edwards</p>
            <ul className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href={link.href}>Ted Robertson</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <ContactInfoCard
              icon={faLocationDot}
              iconColor="text-white"
              text="6386 Spring St undefined Anchorage, Georgia 12473 United States"
              index={0}
            />
            <ContactInfoCard
              icon={faMobileScreen}
              iconColor="text-white"
              text="(843) 555-0130"
              index={1}
            />
            <ContactInfoCard
              icon={faEnvelope}
              iconColor="text-white"
              text="willie.jennings@example.com"
              index={2}
            />
            <Socials
              color="white"
              className="justify-center md:justify-start"
            />
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
