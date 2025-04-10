import Section from "./Section";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { motion } from "motion/react";
import {
  subscribeImageAnimation,
  subscribeFormAnimation,
} from "@/constants/animations";
import NewsletterForm from "./NewsletterForm";

const Subscribe = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Section>
      <div className="grid grid-cols-1 gap-[50px] lg:gap-x-[80px] lg:gap-y-0 lg:grid-cols-2">
        <motion.div
          variants={subscribeFormAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center lg:text-left lg:order-2 lg:flex lg:flex-col lg:justify-end"
        >
          <p className="text-xl leading-[28px] font-bold">At your fingertips</p>
          <h2 className="lg:px-0">
            {isDesktop ? "Lightning fast prototyping" : "Newsletter"}
          </h2>
          <p className="paragraph-large lg:hidden">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
        </motion.div>
        <motion.div
          variants={subscribeImageAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="lg:row-span-2 lg:order-1"
        >
          <Image
            src="/assets/newsletter-image.webp"
            alt="Subscribe"
            width={677}
            height={514}
          />
        </motion.div>
        <motion.div
          variants={subscribeFormAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center lg:text-left lg:order-2"
        >
          <p className="text-xl leading-[28px] font-bold">
            Subscribe to our Newsletter
          </p>
          <p className="text-lg leading-[25px] mt-2.5">
            Available exclusively on Figmaland
          </p>

          <NewsletterForm />
        </motion.div>
      </div>
    </Section>
  );
};

export default Subscribe;
