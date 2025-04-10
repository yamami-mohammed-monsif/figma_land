import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "motion/react";

interface ContactInfoCardProps {
  icon: IconProp;
  text: string;
  index: number;
}

const ContactInfoCard = ({ icon, text, index }: ContactInfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15, // stagger effect
      }}
      className="flex items-center gap-2.5 p-2.5 lg:flex-col lg:justify-start lg:flex-1 text-center"
    >
      <FontAwesomeIcon icon={icon} size="2x" className="text-primary" />
      <span className="text-sm">{text}</span>
    </motion.div>
  );
};

export default ContactInfoCard;
