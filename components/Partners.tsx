import Section from "./Section";
import PartnerCard from "./PartnerCard";
import { Partners as PartnersList } from "@/constants";
import { motion } from "motion/react";

const Partners = () => {
  return (
    <Section>
      <header className="text-center mb-[80px]">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="paragraph-large"
        >
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </motion.p>
      </header>
      <div className="flex flex-col gap-7 md:flex-row md:gap-0 max-w-[700px] mx-auto">
        {PartnersList.map((partner, index) => {
          return (
            <PartnerCard
              key={partner.id}
              name={partner.name}
              image={partner.image}
              alt={partner.alt}
              index={index}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Partners;
