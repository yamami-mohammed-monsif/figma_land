import Section from "./Section";
import PricingCard from "./PricingCard";
import { PlanFeatures } from "@/constants";
import { motion } from "motion/react";
import { PricingCardsVariants } from "@/constants/animations";

const Pricing = () => {
  const { left, middle, right } = PricingCardsVariants;
  return (
    <Section className="bg-title text-white">
      <div>
        <header className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white"
          >
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-xl lg:text-[28px] text-white lg:leading-[40px] p-2.5 tracking-[0.2px] max-w-[600px] mx-auto"
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </motion.p>
        </header>
        <div className="flex flex-col gap-[50px] lg:flex-row lg:items-center">
          {PlanFeatures.map((feature, index) => {
            const variant = index === 0 ? left : index === 1 ? middle : right;
            return (
              <PricingCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                price={feature.price}
                features={feature.features}
                isHighlighted={feature.isHighlighted}
                variants={variant}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
