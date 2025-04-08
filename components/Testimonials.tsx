import Section from "./Section";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-11">
        <h2>Testimonials</h2>
        <p className="paragraph-large text-center">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/profile-image.webp"
            alt="Testimonial 1"
            width={42}
            height={42}
            className="rounded-full"
          />
          <div className="text-left text-[10px] font-bold text-paragraph">
            <p>Organize across</p>
            <p>UI Designer</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
