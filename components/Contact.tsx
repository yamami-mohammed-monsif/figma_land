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
import { motion } from "motion/react";
import ContactInfoCard from "./ContactInfoCard";
import { contactInfoCardAnimation } from "@/constants/animations";

const Contact = () => {
  return (
    <Section>
      <div>
        <div className="text-center mb-[50px]">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="paragraph-large"
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
          <div className="grid gap-[50px] lg:order-2">
            <Socials
              color="primary"
              className="justify-center lg:justify-start lg:order-3"
            />

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="lg:w-atuo 2xl:w-[516px] h-[323px] hidden lg:block lg:mx-auto lg:order-2"
            >
              <Image
                src="/assets/contact-map.webp"
                alt="Location"
                className="w-full h-full object-cover"
                width={516}
                height={323}
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[50px] lg:order-1">
              <ContactInfoCard
                icon={faLocationDot}
                iconColor="text-primary"
                text="6386 Spring St undefined Anchorage, Georgia 12473 United States"
                index={0}
                className="lg:flex-col lg:justify-start lg:flex-1 text-center"
                variants={{
                  initial: contactInfoCardAnimation.initial,
                  whileInView: contactInfoCardAnimation.whileInView,
                }}
              />
              <ContactInfoCard
                icon={faMobileScreen}
                iconColor="text-primary"
                text="(843) 555-0130"
                index={1}
                className="lg:flex-col lg:justify-start lg:flex-1 text-center"
                variants={{
                  initial: contactInfoCardAnimation.initial,
                  whileInView: contactInfoCardAnimation.whileInView,
                }}
              />
              <ContactInfoCard
                icon={faEnvelope}
                iconColor="text-primary"
                text="willie.jennings@example.com"
                index={2}
                className="lg:flex-col lg:justify-start lg:flex-1 text-center"
                variants={{
                  initial: contactInfoCardAnimation.initial,
                  whileInView: contactInfoCardAnimation.whileInView,
                }}
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
