import React, { useState } from 'react';
import { MessageCircle, Send, User, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    whatsapp: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send to a backend
    // For now, we'll show a success message and clear the form
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.', {
      duration: 4000,
    });
    
    setFormData({ name: '', message: '', whatsapp: '' });
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os serviços.`
    );
    window.open(`https://wa.me/31612345678?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.name')}
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12 py-6 rounded-xl border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                </div>

                {/* WhatsApp Input */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.whatsapp')}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="pl-12 py-6 rounded-xl border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="+31 6 1234 5678"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.message')}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="pl-12 pt-4 pb-4 rounded-xl border-gray-200 focus:border-amber-500 focus:ring-amber-500 min-h-[150px] resize-none"
                      placeholder="Como posso ajudar você?"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl py-6 text-lg shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('contact.submit')}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* WhatsApp Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-2xl text-center mb-4 text-gray-900">
                {t('contact.or')}
              </h3>

              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                Prefere falar direto? Me chame no WhatsApp e responderei rapidamente. Estou disponível para ajudar você!
              </p>

              <Button
                onClick={handleWhatsAppDirect}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl py-6 text-lg shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Abrir WhatsApp
              </Button>

              {/* Contact info */}
              <div className="mt-8 pt-8 border-t border-green-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">WhatsApp</div>
                      <div className="font-semibold">+31 6 1234 5678</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <Send className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-semibold">contato@professional.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Resposta rápida garantida</div>
                <div className="text-xs text-gray-600">Geralmente respondemos em menos de 1 hora</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
