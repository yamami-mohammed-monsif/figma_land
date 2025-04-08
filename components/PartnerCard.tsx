import Image from "next/image";

interface PartnerCardProps {
  name: string;
  image: string;
  alt: string;
}

const PartnerCard = ({ name, image, alt }: PartnerCardProps) => {
  return (
    <div className="border border-pattern-border py-6 px-10 mx-auto text-center">
      <p className=" text-base text-paragraph leading-[22px] mb-4">{name}</p>
      <Image src={image} alt={alt} width={100} height={100} />
    </div>
  );
};

export default PartnerCard;
