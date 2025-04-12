"use client";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  {
    ssr: false,
  }
);

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
    <MotionDiv
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
    </MotionDiv>
  );
};

export default ContactInfoCard;
