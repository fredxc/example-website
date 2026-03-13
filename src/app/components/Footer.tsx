import React from "react";
import { MessageCircle, Instagram, MapPin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">Professional</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.services")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/31612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>+31 6 1234 5678</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@professional.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@professional.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{t("footer.location")}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.social")}</h3>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500 flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-green-400 hover:to-emerald-500 flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Professional. {t("footer.rights")}.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                {t("footer.privacy")}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                {t("footer.terms")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
