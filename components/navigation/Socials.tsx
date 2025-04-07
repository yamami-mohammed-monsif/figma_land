import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
import { socialIconsAnimation } from "@/constants/animations";

const Socials: React.FC = () => {
  return (
    <motion.div
      variants={socialIconsAnimation}
      initial="initial"
      animate="animate"
      className="flex items-center gap-11 ml-[100px] xl:ml-[270px]"
    >
      <FontAwesomeIcon
        icon={faTwitter}
        size="2x"
        className="text-white hover:text-primary hover:cursor-pointer hover:scale-110 transition-all duration-200"
      />
      <FontAwesomeIcon
        icon={faFacebook}
        size="2x"
        className="text-white hover:text-primary hover:cursor-pointer hover:scale-110 transition-all duration-200"
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        size="2x"
        className="text-white hover:text-primary hover:cursor-pointer hover:scale-110 transition-all duration-200"
      />
    </motion.div>
  );
};

export default Socials;
