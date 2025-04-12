"use client";
import dynamic from "next/dynamic";
import Button from "./UI/Button";
const MotionDiv = dynamic(
  () => import("motion/react").then((mod) => mod.motion.div),
  {
    ssr: false,
  }
);

interface PricingCardsProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
  variants?: any;
}

const PricingCards = ({
  title,
  description,
  price,
  features,
  isHighlighted = false,
  variants,
}: PricingCardsProps) => {
  return (
    <MotionDiv
      className={`max-w-[335px] mx-auto p-10 mt-[80px] rounded-[10px] text-center flex flex-col gap-[30px] ${
        isHighlighted
          ? "bg-primary text-white border border-primary lg:scale-110"
          : "bg-white text-paragraph"
      }`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
    >
      <div>
        <h4 className={`${isHighlighted ? "text-white" : "text-title"} mb-2.5`}>
          {title}
        </h4>
        <p className="text-base leading-[23px]">{description}</p>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span
          className={`${
            isHighlighted ? "text-white" : "text-title"
          } text-[74px] leading-[84px] font-bold`}
        >
          {price}
        </span>
        <div className="flex flex-col items-start justify-between">
          <span
            className={`${
              isHighlighted ? "text-white" : "text-title"
            } text-xl font-bold leading-[28px] block`}
          >
            $
          </span>
          <span>Per Month</span>
        </div>
      </div>
      <ul>
        {features.map((feature) => (
          <li key={feature} className="p-2.5">
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={isHighlighted ? "secondary" : "primary"}
        paddingY="py-4"
        paddingX="px-9"
        fontSize="text-xl"
      >
        Order Now
      </Button>
    </MotionDiv>
  );
};

export default PricingCards;
