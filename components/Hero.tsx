import Section from "./Section";
import Button from "./UI/Button";

const Hero: React.FC = () => {
  return (
    <Section className="text-white text-center px-5 py-8">
      <div className="py-[50px] max-w-[826px] mx-auto">
        <h1>The best products start with Figma</h1>
        <p className="text-2xl lg:text-[28px] p-2.5">
          Most calendars are designed for teams.{" "}
          <span className="hidden lg:inline">
            Slate is designed for freelancers
          </span>
        </p>
      </div>
      <Button
        paddingX="px-16"
        paddingY="py-4"
        fontSize="text-xl"
        aria-label="Start free trial of our product"
      >
        Try For Free
      </Button>
    </Section>
  );
};

export default Hero;
