import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

interface SocialsProps {
  color?: string;
  className?: string;
  variants?: any;
}

const Socials: React.FC<SocialsProps> = ({
  color = "white",
  className,
  variants,
}) => {
  // Handle color class based on input
  const colorClass = color.startsWith("text-") ? color : `text-${color}`;

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className={`flex items-center gap-11 ${className}`}
    >
      <FontAwesomeIcon
        icon={faTwitter}
        size="2x"
        className={`${colorClass} hover:text-primary hover:cursor-pointer hover:scale-110 transition-all duration-200`}
      />
      <FontAwesomeIcon
        icon={faFacebook}
        size="2x"
        className={`${colorClass} hover:text-primary hover:cursor-pointer hover:scale-110 transition-all duration-200`}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        size="2x"
        className={`${colorClass} hover:text-primary hover:cursor-pointer hover:scale-110 transition-all duration-200`}
      />
    </motion.div>
  );
};

export default Socials;
