import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NotificationsProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Notifications: React.FC<NotificationsProps> = ({
  message,
  type,
  isVisible,
  onClose,
  duration = 3000,
}) => {
  // Handle auto-close and click-anywhere-to-close
  useEffect(() => {
    if (!isVisible) return;

    // Set timeout for auto-close
    const timer = setTimeout(() => onClose(), duration);

    // Add click handler for click-anywhere-to-close
    document.addEventListener("click", onClose);

    // Cleanup on unmount or when isVisible changes
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", onClose);
    };
  }, [isVisible, onClose, duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center px-6 py-3 rounded-lg shadow-lg ${
            type === "success" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className="text-xl"
              role="img"
              aria-label={type === "success" ? "Success" : "Error"}
            >
              {type === "success" ? "✅" : "❌"}
            </span>
            <p
              className={`text-sm font-medium ${
                type === "success" ? "text-green-800" : "text-red-800"
              }`}
            >
              {message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notifications;
