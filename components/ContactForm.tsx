"use client";

import { useState } from "react";
import Button from "./UI/Button";
import { motion } from "motion/react";
import { contactFormAnimation } from "@/constants/animations";
import Notifications from "./UI/Notifications";
import LoadingSpinner from "./UI/LoadingSpinner";

// Define the form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success"
  );

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Show notification helper function
  const showMessage = (message: string, type: "success" | "error") => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowNotification(false);

    try {
      // Basic validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        showMessage("Please fill in all fields", "error");
        setLoading(false);
        return;
      }

      // Email validation
      if (!formData.email.includes("@")) {
        showMessage("Please enter a valid email address", "error");
        setLoading(false);
        return;
      }

      // Create FormData object
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("message", formData.message);
      formDataToSubmit.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
      );

      // Send form data to web3forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        showMessage(
          "Message sent successfully! We'll get back to you soon.",
          "success"
        );
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        showMessage(
          data.message || "Failed to send message. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showMessage("An unexpected error occurred. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={contactFormAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className="p-[50px] shadow-contact-form rounded-[20px]"
    >
      {/* Notification Component */}
      <Notifications
        message={notificationMessage}
        type={notificationType}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        duration={5000}
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-11">
        <p className="font-bold text-xl leading-[28px] text-center">
          Contact Us
        </p>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-5 border border-input-border rounded-full bg-input-bg placeholder:text-placeholder placeholder:text-sm"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-5 border border-input-border rounded-full bg-input-bg placeholder:text-placeholder placeholder:text-sm"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-md p-5 resize-none border border-input-border bg-input-bg placeholder:text-placeholder placeholder:text-sm"
            required
          ></textarea>
        </div>
        <Button
          paddingY="py-[18px]"
          paddingX="px-[38px]"
          fontSize="text-xl"
          className="w-1/2"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <LoadingSpinner size="md" /> Sending...
            </span>
          ) : (
            "Send"
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
