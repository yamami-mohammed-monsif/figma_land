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
const Footer = () => {
  return (
    <footer className="bg-title text-white">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[73px] text-center">
          <div>
            <p className="text-xl font-bold p-2.5">Pages</p>
            <ul className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold p-2.5">Eleanor Edwards</p>
            <ul className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>Ted Robertson</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold p-2.5">Eleanor Edwards</p>
            <ul className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>Ted Robertson</Link>
                </li>
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
