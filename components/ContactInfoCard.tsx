import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "motion/react";

interface ContactInfoCardProps {
  icon: IconProp;
  iconColor: string;
  text: string;
  index: number;
  className?: string;
  variants?: any;
}

const ContactInfoCard = ({
  icon,
  text,
  index,
  iconColor,
  className,
  variants,
}: ContactInfoCardProps) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15, // stagger effect
      }}
      className={`flex items-center gap-2.5 p-2.5 ${className}`}
    >
      <FontAwesomeIcon icon={icon} size="2x" className={`${iconColor}`} />
      <span className="text-sm">{text}</span>
    </motion.div>
  );
};

export default ContactInfoCard;
