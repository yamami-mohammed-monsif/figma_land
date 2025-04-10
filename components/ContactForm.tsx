import React from "react";
import Button from "./UI/Button";
import { motion } from "motion/react";
import { contactFormAnimation } from "@/constants/animations";

const ContactForm = () => {
  return (
    <motion.div
      variants={contactFormAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className="p-[50px] shadow-contact-form rounded-[20px]"
    >
      <form action="" className="flex flex-col gap-11">
        <p className="font-bold text-xl leading-[28px] text-center">
          Contact Us
        </p>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-5 border border-input-border rounded-full bg-input-bg placeholder:text-placeholder placeholder:text-sm"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-5 border border-input-border rounded-full bg-input-bg placeholder:text-placeholder placeholder:text-sm"
          />
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-md p-5 resize-none border border-input-border bg-input-bg placeholder:text-placeholder placeholder:text-sm"
          ></textarea>
        </div>
        <Button
          paddingY="py-[18px]"
          paddingX="px-[38px]"
          fontSize="text-xl"
          className="w-1/2"
        >
          Send
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
