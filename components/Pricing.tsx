import Section from "./Section";
import PricingCard from "./PricingCard";
import { PlanFeatures } from "@/constants";

const Pricing = () => {
  return (
    <Section className="bg-title text-white">
      <div>
        <header className="text-center">
          <h2 className="text-white">Pricing</h2>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
        </header>
        <div className="flex flex-col gap-[50px] lg:flex-row lg:items-center">
          {PlanFeatures.map((feature) => {
            return (
              <PricingCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                price={feature.price}
                features={feature.features}
                isHighlighted={feature.isHighlighted}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
