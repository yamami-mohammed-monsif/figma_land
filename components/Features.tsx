import Section from "./Section";
import FeatureCard from "./FeatureCard";
import { Features as FeaturesData } from "@/constants";
import { motion } from "motion/react";
import { featureCardVariants } from "@/constants/animations";

const Features = () => {
  const { left, middle, right } = featureCardVariants;

  return (
    <Section>
      <div className="flex flex-col gap-[50px] lg:gap-[80px]">
        <header className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Features
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
        </header>

        <div className="flex flex-col gap-[50px] lg:gap-[80px] lg:flex-col-reverse">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-video max-w-[1177px] max-h-[660px] mx-auto"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/features-video.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <div className="flex flex-col gap-[53px] lg:flex-row">
            {FeaturesData.map((feature, index) => {
              const variant = index === 0 ? left : index === 1 ? middle : right;
              return (
                <FeatureCard key={feature.id} {...feature} variants={variant} />
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
