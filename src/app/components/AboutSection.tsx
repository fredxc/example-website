import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    'Mais de 5 anos na Europa',
    'Certificação profissional',
    'Fluente em português, inglês e holandês',
    'Experiência com clientes brasileiros',
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwY2xpZW50JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MzQwMjQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About professional"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>

            {/* Decorative floating element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 shadow-xl text-white"
            >
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm opacity-90">Anos de experiência</div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t('about.title')}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Profissional brasileiro(a) comprometido(a) com você
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.text')}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Clientes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">24h</div>
                <div className="text-sm text-gray-600">Resposta</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
