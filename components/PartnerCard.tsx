import Image from "next/image";
import { motion } from "framer-motion";

interface PartnerCardProps {
  name: string;
  image: string;
  alt: string;
  index: number;
}

const PartnerCard = ({ name, image, alt, index }: PartnerCardProps) => {
  return (
    <motion.div
      className="border border-pattern-border py-6 px-10 mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15, // stagger effect
      }}
    >
      <p className="text-base text-paragraph leading-[22px] mb-4">{name}</p>
      <Image src={image} alt={alt} width={100} height={100} loading="lazy" />
    </motion.div>
  );
};

export default PartnerCard;
