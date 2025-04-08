import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  variants?: any;
}

const FeatureCard = ({
  title,
  description,
  image,
  alt,
  variants,
}: FeatureCardProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2.5 text-center max-w-[400px] mx-auto"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
    >
      <Image src={image} alt={alt} width={61} height={61} />
      <h3>{title}</h3>
      <p className="text-paragraph text-lg leading-[25px] tracking-[0.2px]">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
