import React from "react";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";

export const CTASection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90">
                {t("cta.available")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              {t("cta.title")}
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() =>
                  window.open("https://wa.me/31612345678", "_blank")
                }
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("cta.whatsapp")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg transition-all w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t("cta.form")}
              </Button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {t("cta.badge1.title")}
                </div>
                <div className="text-sm text-white/60">
                  {t("cta.badge1.desc")}
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {t("cta.badge2.title")}
                </div>
                <div className="text-sm text-white/60">
                  {t("cta.badge2.desc")}
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {t("cta.badge3.title")}
                </div>
                <div className="text-sm text-white/60">
                  {t("cta.badge3.desc")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
