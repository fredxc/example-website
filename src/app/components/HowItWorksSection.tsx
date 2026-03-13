import React from 'react';
import { Send, CalendarCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const stepIcons = [Send, CalendarCheck, Sparkles];

export const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: stepIcons[0],
      title: t('how.step1.title'),
      description: t('how.step1.desc'),
    },
    {
      icon: stepIcons[1],
      title: t('how.step2.title'),
      description: t('how.step2.desc'),
    },
    {
      icon: stepIcons[2],
      title: t('how.step3.title'),
      description: t('how.step3.desc'),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            {t('how.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t('how.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines - Desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 z-0" style={{ top: '4rem' }} />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
                    {/* Step number */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Step number badge */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>

                    <h3 className="text-xl text-center mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
