import Section from "./Section";
import FeatureCard from "./FeatureCard";
import { Features as FeaturesData } from "@/constants";

const Features = () => {
  return (
    <Section className="py-[80px]">
      <div className="flex flex-col gap-[50px] lg:gap-[80px]">
        <header className="text-center">
          <h2>Features</h2>
          <p className="text-xl lg:text-[28px] text-paragraph lg:leading-[40px] p-2.5 tracking-[0.2px]">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
        </header>

        <div className="flex flex-col gap-[50px] lg:gap-[80px] lg:flex-col-reverse">
          <div className="rounded-2xl overflow-hidden shadow-video max-w-[1177px] max-h-[660px] mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/features-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col gap-[53px] lg:flex-row">
            {FeaturesData.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
