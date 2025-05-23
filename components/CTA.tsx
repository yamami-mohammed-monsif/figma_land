import Button from "./UI/Button";
import Section from "./Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInFromLeft, fadeInFromRight } from "../constants/animations";

const CTA = () => {
  return (
    <Section>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-14">
        <motion.div
          className="text-center lg:text-left"
          variants={fadeInFromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2>Fastest way to organize</h2>
          <p className="paragraph-large">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
          <Button
            variant="primary"
            paddingX="px-[60px]"
            paddingY="py-4"
            fontSize="text-xl"
            fontWeight="font-bold"
            aria-label="Try for free"
            className="inline-block mt-[60px]"
          >
            Try for free
          </Button>
        </motion.div>
        <motion.div
          className="p-2"
          variants={fadeInFromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/assets/cta-image.webp"
            alt="CTA"
            width={646}
            height={370}
            loading="lazy"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default CTA;
