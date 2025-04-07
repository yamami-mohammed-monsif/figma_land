import Section from "./Section";
import Button from "./UI/Button";
import { motion } from "framer-motion";
import {
  headingAnimation,
  paragraphAnimation,
  buttonAnimation,
} from "@/constants/animations";

const Hero: React.FC = () => {
  return (
    <Section className="text-white text-center px-5 py-8">
      <div className="py-[50px] max-w-[826px] mx-auto">
        <motion.h1
          variants={headingAnimation}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-6xl font-bold"
        >
          The best products start with Figma
        </motion.h1>
        <motion.p
          variants={paragraphAnimation}
          initial="initial"
          animate="animate"
          className="text-[28px] leading-[40px] p-2.5 tracking-[0.2px]"
        >
          Most calendars are designed for teams.{" "}
          <span className="hidden lg:inline">
            Slate is designed for freelancers
          </span>
        </motion.p>
      </div>
      <Button
        paddingX="px-16"
        paddingY="py-4"
        fontSize="text-xl"
        aria-label="Start free trial of our product"
        variants={buttonAnimation}
        initial="initial"
        animate="animate"
      >
        Try For Free
      </Button>
    </Section>
  );
};

export default Hero;
