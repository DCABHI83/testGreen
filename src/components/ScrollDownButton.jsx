import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // or any icon you prefer

const ScrollDownButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button only on homepage (when path = "/")
    if (window.location.pathname === "/") {
      setShowButton(true);
    }
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <motion.button
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={scrollToNext}
    >
      <ChevronDown size={24} />
    </motion.button>
  );
};

export default ScrollDownButton;
