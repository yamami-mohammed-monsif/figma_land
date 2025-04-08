import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const FeatureCard = ({ title, description, image, alt }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 text-center max-w-[400px] mx-auto">
      <Image src={image} alt={alt} width={61} height={61} />
      <h3>{title}</h3>
      <p className="text-paragraph text-lg leading-[25px] tracking-[0.2px]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
