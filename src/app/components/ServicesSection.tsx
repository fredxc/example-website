import React from 'react';
import { UserCheck, MonitorSmartphone, Calendar, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const serviceIcons = [UserCheck, MonitorSmartphone, Calendar, MessageSquare];

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: serviceIcons[0],
      title: t('services.1.title'),
      description: t('services.1.desc'),
    },
    {
      icon: serviceIcons[1],
      title: t('services.2.title'),
      description: t('services.2.desc'),
    },
    {
      icon: serviceIcons[2],
      title: t('services.3.title'),
      description: t('services.3.desc'),
    },
    {
      icon: serviceIcons[3],
      title: t('services.4.title'),
      description: t('services.4.desc'),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-8 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
