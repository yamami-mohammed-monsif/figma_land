import Button from "./UI/Button";
import Section from "./Section";
import Image from "next/image";

const CTA = () => {
  return (
    <Section className="py-[80px]">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-14">
        <div className="text-center lg:text-left">
          <h2>Fastest way to organize</h2>
          <p className="text-xl lg:text-[28px] text-paragraph lg:leading-[40px] p-2.5 tracking-[0.2px] max-w-[600px]">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
          <Button
            paddingX="px-[60px]"
            paddingY="py-4"
            fontSize="text-xl"
            fontWeight="font-bold"
            aria-label="Try for free"
            className="inline-block mt-[60px]"
          >
            Try for free
          </Button>
        </div>
        <div className="p-2">
          <Image
            src="/assets/cta-image.webp"
            alt="CTA"
            width={646}
            height={370}
          />
        </div>
      </div>
    </Section>
  );
};

export default CTA;
