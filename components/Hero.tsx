import Section from "./Section";
import Button from "./UI/Button";
import { motion } from "framer-motion";
import {
  headingAnimation,
  paragraphAnimation,
  buttonAnimation,
} from "@/constants/animations";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Hero: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const delay = isDesktop ? 1.9 : 0.8;

  return (
    <Section className="text-white text-center px-5 py-8">
      <div className="py-[50px] max-w-[826px] mx-auto">
        <motion.h1
          variants={headingAnimation}
          initial="initial"
          animate="animate"
          custom={delay}
        >
          The best products start with Figma
        </motion.h1>
        <motion.p
          variants={paragraphAnimation}
          initial="initial"
          animate="animate"
          custom={delay + 0.3}
          className="text-[28px] leading-[40px] p-2.5 tracking-[0.2px]"
        >
          Most calendars are designed for teams.{" "}
          <span className="hidden lg:inline">
            Slate is designed for freelancers
          </span>
        </motion.p>
      </div>
      <Button
        variant="primary"
        paddingX="px-16"
        paddingY="py-4"
        fontSize="text-xl"
        aria-label="Start free trial of our product"
        variants={buttonAnimation}
        initial="initial"
        animate="animate"
        custom={delay + 0.6}
      >
        Try For Free
      </Button>
    </Section>
  );
};

export default Hero;
