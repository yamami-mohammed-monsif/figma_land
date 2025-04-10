import Section from "./Section";
import Socials from "./UI/Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faMobileScreen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <Section>
      <div>
        <div className="text-center mb-[50px]">
          <h2>Contact Us</h2>
          <p className="paragraph-large">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
          <div className="grid gap-[50px] lg:order-2">
            <Socials
              color="primary"
              className="justify-center lg:justify-start lg:order-3"
            />

            <div className="lg:w-atuo 2xl:w-[516px] h-[323px] hidden lg:block lg:mx-auto lg:order-2">
              <Image
                src="/assets/contact-map.webp"
                alt="Location"
                className="w-full h-full object-cover"
                width={516}
                height={323}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[50px] lg:order-1">
              <div className="flex items-center gap-2.5 p-2.5 lg:flex-col lg:justify-start lg:flex-1 text-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="2x"
                  className="text-primary"
                />
                <span className="text-sm">
                  6386 Spring St undefined Anchorage, Georgia 12473 United
                  States
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 lg:flex-col lg:justify-start lg:flex-1 text-center">
                <FontAwesomeIcon
                  icon={faMobileScreen}
                  size="2x"
                  className="text-primary"
                />
                <span className="text-sm">(843) 555-0130</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 lg:flex-col lg:justify-start lg:flex-1 text-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-primary"
                />
                <span className="text-sm">willie.jennings@example.com</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
