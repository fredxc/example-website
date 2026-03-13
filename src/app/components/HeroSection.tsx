import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-amber-50 via-orange-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200 to-amber-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200 mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-700">
                {t("hero.available")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() =>
                  window.open("https://wa.me/31612345678", "_blank")
                }
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                onClick={() => {
                  const element = document.getElementById("services");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="border-2 border-gray-300 hover:border-amber-500 hover:bg-amber-50 text-gray-900 rounded-full px-8 py-6 text-lg transition-all"
              >
                {t("hero.learnMore")}
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-2xl font-semibold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">{t("hero.stat1")}</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-2xl font-semibold text-gray-900">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600">{t("hero.stat2")}</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-2xl font-semibold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">{t("hero.stat3")}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1543684211-d2cd4b85b65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBicmF6aWxpYW4lMjB3b21hbiUyMHdvcmtpbmclMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzczNDAyNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">
                      {t("hero.responseLabel")}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {t("hero.responseTime")}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-orange-400 to-amber-400 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
