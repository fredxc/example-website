import React from 'react';
import { Globe, Clock, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const benefitIcons = [Globe, Clock, Heart, Star];

export const WhyChooseSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: benefitIcons[0],
      title: t('why.1.title'),
      description: t('why.1.desc'),
    },
    {
      icon: benefitIcons[1],
      title: t('why.2.title'),
      description: t('why.2.desc'),
    },
    {
      icon: benefitIcons[2],
      title: t('why.3.title'),
      description: t('why.3.desc'),
    },
    {
      icon: benefitIcons[3],
      title: t('why.4.title'),
      description: t('why.4.desc'),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-amber-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            {t('why.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
