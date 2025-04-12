import Section from "./Section";
import Image from "next/image";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-11">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="paragraph-large text-center"
        >
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex items-center gap-2.5"
        >
          <Image
            src="/assets/profile-image.webp"
            alt="Testimonial 1"
            width={42}
            height={42}
            className="rounded-full"
            loading="lazy"
          />
          <div className="text-left text-[10px] font-bold text-paragraph">
            <p>Organize across</p>
            <p>UI Designer</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Testimonials;
