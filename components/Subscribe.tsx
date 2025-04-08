import Section from "./Section";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Button from "./UI/Button";

const Subscribe = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Section>
      <div className="grid grid-cols-1 gap-[50px] lg:gap-x-[80px] lg:gap-y-0 lg:grid-cols-2">
        <div className="text-center lg:text-left lg:order-2 flex flex-col justify-end">
          <p className="text-xl leading-[28px] font-bold">At your fingertips</p>
          <h2 className="lg:px-0">
            {isDesktop ? "Lightning fast prototyping" : "Newsletter"}
          </h2>
          <p className="paragraph-large lg:hidden">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
        </div>
        <div className="lg:row-span-2 lg:order-1">
          <Image
            src="/assets/newsletter-image.webp"
            alt="Subscribe"
            width={677}
            height={514}
          />
        </div>
        <div className="text-center lg:text-left lg:order-2">
          <p className="text-xl leading-[28px] font-bold">
            Subscribe to our Newsletter
          </p>
          <p className="text-lg leading-[25px] mt-2.5">
            Available exclusivery on Figmaland
          </p>
          <form
            action=""
            className="flex flex-col lg:flex-row gap-[12px] py-6 max-w-[500px] mx-auto lg:mx-0"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="py-[19px] px-[35px] border border-input-border rounded-full bg-input-bg placeholder:text-placeholder placeholder:text-sm"
            />
            <Button fontSize="text-xl" paddingY="py-4" paddingX="px-9">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Subscribe;
