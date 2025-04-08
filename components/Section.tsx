import React from "react";

type sectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section: React.FC<sectionProps> = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={`${className} w-full relative px-5 py-[80px] sm:px-14 md:px-19 lg:px-28 xl:px-37`}
    >
      {children}
    </section>
  );
};

export default Section;
