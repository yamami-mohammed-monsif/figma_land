import Section from "./Section";
import PartnerCard from "./PartnerCard";
import { Partners as PartnersList } from "@/constants";

const Partners = () => {
  return (
    <Section>
      <header className="text-center mb-[80px]">
        <h2>Partners</h2>
        <p className="paragraph-large">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </header>
      <div className="flex flex-col gap-7 md:flex-row md:gap-0 max-w-[700px] mx-auto">
        {PartnersList.map((partner) => {
          return (
            <PartnerCard
              key={partner.id}
              name={partner.name}
              image={partner.image}
              alt={partner.alt}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Partners;
