import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after user scrolls down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        // Show tooltip once when button appears
        if (!showTooltip) {
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 5000);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showTooltip]);

  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os serviços.",
    );
    window.open(`https://wa.me/31612345678?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-xl px-4 py-3 whitespace-nowrap border border-gray-100"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-900">
                    {t("whatsapp.tooltip")}
                  </span>
                </div>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 flex items-center justify-center transition-all group relative"
          >
            <MessageCircle className="w-8 h-8 text-white" />

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
