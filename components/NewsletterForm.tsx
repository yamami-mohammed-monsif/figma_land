"use client";

import { useState } from "react";
import Button from "./UI/Button";
import LoadingSpinner from "./UI/LoadingSpinner";
import Notifications from "./UI/Notifications";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success"
  );

  // Display a notification with the given message and type
  const showMessage = (msg: string, type: "success" | "error") => {
    setMessage(msg);
    setNotificationType(type);
    setShowNotification(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes("@")) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    setLoading(true);
    setShowNotification(false);

    try {
      // Send subscription request to API
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        showMessage(
          data.message || "Successfully subscribed to the newsletter!",
          "success"
        );
        setEmail(""); // Clear email input on success
      } else {
        // Handle the new error format (success: false, message: "error message")
        showMessage(
          data.message || data.error || "An error occurred. Please try again.",
          "error"
        );
      }
    } catch (error) {
      showMessage("An unexpected error occurred. Please try again.", "error");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Notifications
        message={message}
        type={notificationType}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        duration={3000}
      />

      <form
        className="flex flex-col lg:flex-row gap-[12px] py-6 max-w-[500px] mx-auto lg:mx-0"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className="py-[19px] px-[35px] border border-input-border rounded-full bg-input-bg placeholder:text-placeholder placeholder:text-sm"
        />

        <Button
          variant="primary"
          fontSize="text-xl"
          paddingY="py-4"
          paddingX="px-9"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <LoadingSpinner size="md" /> Subscribing...
            </span>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
