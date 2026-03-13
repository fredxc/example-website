import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Atendimento profissional para brasileiros na Europa',
    'hero.subtitle': 'Informação clara, contato fácil e atendimento personalizado no idioma que você confia.',
    'hero.cta': 'Falar no WhatsApp',
    
    // Services
    'services.title': 'Como posso ajudar você',
    'services.subtitle': 'Atendimento pensado para facilitar a sua vida',
    'services.1.title': 'Atendimento Personalizado',
    'services.1.desc': 'Cada cliente recebe atenção individual e um plano adequado às suas necessidades',
    'services.2.title': 'Online e Presencial',
    'services.2.desc': 'Flexibilidade para atender você da forma que preferir',
    'services.3.title': 'Agendamento Flexível',
    'services.3.desc': 'Horários que se adaptam à sua rotina',
    'services.4.title': 'Comunicação Clara',
    'services.4.desc': 'Tudo explicado em português, sem dúvidas ou confusões',
    
    // Why Choose
    'why.title': 'Por que escolher este atendimento',
    'why.1.title': 'Atendimento em Português',
    'why.1.desc': 'Fale e entenda tudo no seu idioma',
    'why.2.title': 'Agendamento Fácil',
    'why.2.desc': 'Marque pelo WhatsApp de forma rápida',
    'why.3.title': 'Confiança de Brasileiros',
    'why.3.desc': 'Recomendado por brasileiros na Europa',
    'why.4.title': 'Atenção Individual',
    'why.4.desc': 'Cada cliente é único e recebe cuidado especial',
    
    // Testimonials
    'testimonials.title': 'O que dizem os clientes',
    'testimonials.subtitle': 'Brasileiros na Europa que já foram atendidos',
    'testimonials.1.text': 'Adorei poder falar em português e ser entendida. O atendimento foi excelente e me senti acolhida.',
    'testimonials.1.name': 'Ana Paula',
    'testimonials.1.location': 'Amsterdã, Holanda',
    'testimonials.2.text': 'Muito profissional e atencioso. Facilitou muito ter alguém que entende a nossa cultura.',
    'testimonials.2.name': 'Ricardo Santos',
    'testimonials.2.location': 'Berlim, Alemanha',
    'testimonials.3.text': 'Recomendo! Atendimento rápido, claro e sempre disponível para tirar dúvidas.',
    'testimonials.3.name': 'Juliana Costa',
    'testimonials.3.location': 'Lisboa, Portugal',
    
    // How It Works
    'how.title': 'Como funciona',
    'how.subtitle': 'Processo simples em 3 passos',
    'how.step1.title': 'Envie uma mensagem',
    'how.step1.desc': 'Entre em contato pelo WhatsApp ou formulário',
    'how.step2.title': 'Agende seu horário',
    'how.step2.desc': 'Escolha o melhor dia e hora para você',
    'how.step3.title': 'Receba o atendimento',
    'how.step3.desc': 'Online ou presencial, da forma que preferir',
    
    // About
    'about.title': 'Sobre mim',
    'about.text': 'Sou profissional brasileiro(a) vivendo na Europa há mais de 5 anos. Entendo os desafios de morar fora do Brasil e ofereço atendimento diferenciado para brasileiros que buscam confiança, clareza e comunicação no nosso idioma. Meu objetivo é facilitar sua vida e oferecer um serviço de qualidade com o cuidado que você merece.',
    
    // CTA Section
    'cta.title': 'Tem dúvidas? Entre em contato',
    'cta.subtitle': 'Estou aqui para responder suas perguntas e ajudar você',
    'cta.whatsapp': 'Chamar no WhatsApp',
    'cta.form': 'Preencher formulário',
    
    // Contact
    'contact.title': 'Envie sua mensagem',
    'contact.name': 'Seu nome',
    'contact.message': 'Sua mensagem',
    'contact.whatsapp': 'Seu WhatsApp (opcional)',
    'contact.submit': 'Enviar mensagem',
    'contact.or': 'ou fale direto comigo',
    
    // Footer
    'footer.contact': 'Contato',
    'footer.location': 'Europa',
    'footer.rights': 'Todos os direitos reservados',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Professional services for Brazilians in Europe',
    'hero.subtitle': 'Clear information, easy contact, and personalized service in the language you trust.',
    'hero.cta': 'Chat on WhatsApp',
    
    // Services
    'services.title': 'How I can help you',
    'services.subtitle': 'Service designed to make your life easier',
    'services.1.title': 'Personalized Service',
    'services.1.desc': 'Each client receives individual attention and a plan tailored to their needs',
    'services.2.title': 'Online & In-Person',
    'services.2.desc': 'Flexibility to serve you the way you prefer',
    'services.3.title': 'Flexible Scheduling',
    'services.3.desc': 'Times that adapt to your routine',
    'services.4.title': 'Clear Communication',
    'services.4.desc': 'Everything explained clearly, no doubts or confusion',
    
    // Why Choose
    'why.title': 'Why choose this service',
    'why.1.title': 'Service in Portuguese',
    'why.1.desc': 'Speak and understand everything in your language',
    'why.2.title': 'Easy Scheduling',
    'why.2.desc': 'Book via WhatsApp quickly',
    'why.3.title': 'Trusted by Brazilians',
    'why.3.desc': 'Recommended by Brazilians in Europe',
    'why.4.title': 'Individual Attention',
    'why.4.desc': 'Each client is unique and receives special care',
    
    // Testimonials
    'testimonials.title': 'What clients say',
    'testimonials.subtitle': 'Brazilians in Europe who have been served',
    'testimonials.1.text': 'I loved being able to speak in Portuguese and be understood. The service was excellent and I felt welcomed.',
    'testimonials.1.name': 'Ana Paula',
    'testimonials.1.location': 'Amsterdam, Netherlands',
    'testimonials.2.text': 'Very professional and attentive. It made things so much easier to have someone who understands our culture.',
    'testimonials.2.name': 'Ricardo Santos',
    'testimonials.2.location': 'Berlin, Germany',
    'testimonials.3.text': 'Highly recommend! Fast, clear service and always available to answer questions.',
    'testimonials.3.name': 'Juliana Costa',
    'testimonials.3.location': 'Lisbon, Portugal',
    
    // How It Works
    'how.title': 'How it works',
    'how.subtitle': 'Simple process in 3 steps',
    'how.step1.title': 'Send a message',
    'how.step1.desc': 'Contact via WhatsApp or form',
    'how.step2.title': 'Schedule your time',
    'how.step2.desc': 'Choose the best day and time for you',
    'how.step3.title': 'Receive the service',
    'how.step3.desc': 'Online or in-person, whichever you prefer',
    
    // About
    'about.title': 'About me',
    'about.text': 'I am a Brazilian professional living in Europe for over 5 years. I understand the challenges of living abroad and offer differentiated service for Brazilians seeking trust, clarity, and communication in our language. My goal is to make your life easier and offer quality service with the care you deserve.',
    
    // CTA Section
    'cta.title': 'Have questions? Get in touch',
    'cta.subtitle': "I'm here to answer your questions and help you",
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.form': 'Fill out form',
    
    // Contact
    'contact.title': 'Send your message',
    'contact.name': 'Your name',
    'contact.message': 'Your message',
    'contact.whatsapp': 'Your WhatsApp (optional)',
    'contact.submit': 'Send message',
    'contact.or': 'or contact me directly',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.location': 'Europe',
    'footer.rights': 'All rights reserved',
  },
  nl: {
    // Header
    'nav.services': 'Diensten',
    'nav.about': 'Over',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Professionele diensten voor Brazilianen in Europa',
    'hero.subtitle': 'Duidelijke informatie, gemakkelijk contact en persoonlijke service in de taal die u vertrouwt.',
    'hero.cta': 'Chat op WhatsApp',
    
    // Services
    'services.title': 'Hoe ik u kan helpen',
    'services.subtitle': 'Service ontworpen om uw leven gemakkelijker te maken',
    'services.1.title': 'Persoonlijke Service',
    'services.1.desc': 'Elke klant krijgt individuele aandacht en een plan op maat',
    'services.2.title': 'Online & Persoonlijk',
    'services.2.desc': 'Flexibiliteit om u te bedienen zoals u wilt',
    'services.3.title': 'Flexibele Planning',
    'services.3.desc': 'Tijden die zich aanpassen aan uw routine',
    'services.4.title': 'Duidelijke Communicatie',
    'services.4.desc': 'Alles duidelijk uitgelegd, geen twijfels of verwarring',
    
    // Why Choose
    'why.title': 'Waarom deze service kiezen',
    'why.1.title': 'Service in het Portugees',
    'why.1.desc': 'Spreek en begrijp alles in uw taal',
    'why.2.title': 'Gemakkelijk Plannen',
    'why.2.desc': 'Snel boeken via WhatsApp',
    'why.3.title': 'Vertrouwd door Brazilianen',
    'why.3.desc': 'Aanbevolen door Brazilianen in Europa',
    'why.4.title': 'Individuele Aandacht',
    'why.4.desc': 'Elke klant is uniek en krijgt speciale zorg',
    
    // Testimonials
    'testimonials.title': 'Wat klanten zeggen',
    'testimonials.subtitle': 'Brazilianen in Europa die bediend zijn',
    'testimonials.1.text': 'Ik vond het geweldig om Portugees te kunnen spreken en begrepen te worden. De service was uitstekend en ik voelde me welkom.',
    'testimonials.1.name': 'Ana Paula',
    'testimonials.1.location': 'Amsterdam, Nederland',
    'testimonials.2.text': 'Zeer professioneel en attent. Het maakte het veel gemakkelijker om iemand te hebben die onze cultuur begrijpt.',
    'testimonials.2.name': 'Ricardo Santos',
    'testimonials.2.location': 'Berlijn, Duitsland',
    'testimonials.3.text': 'Zeer aan te bevelen! Snelle, duidelijke service en altijd beschikbaar om vragen te beantwoorden.',
    'testimonials.3.name': 'Juliana Costa',
    'testimonials.3.location': 'Lissabon, Portugal',
    
    // How It Works
    'how.title': 'Hoe het werkt',
    'how.subtitle': 'Eenvoudig proces in 3 stappen',
    'how.step1.title': 'Stuur een bericht',
    'how.step1.desc': 'Contact via WhatsApp of formulier',
    'how.step2.title': 'Plan uw tijd',
    'how.step2.desc': 'Kies de beste dag en tijd voor u',
    'how.step3.title': 'Ontvang de service',
    'how.step3.desc': 'Online of persoonlijk, wat u ook prefereert',
    
    // About
    'about.title': 'Over mij',
    'about.text': 'Ik ben een Braziliaanse professional die al meer dan 5 jaar in Europa woont. Ik begrijp de uitdagingen van het leven in het buitenland en bied gedifferentieerde service voor Brazilianen die vertrouwen, duidelijkheid en communicatie in onze taal zoeken. Mijn doel is om uw leven gemakkelijker te maken en kwalitatieve service te bieden met de zorg die u verdient.',
    
    // CTA Section
    'cta.title': 'Vragen? Neem contact op',
    'cta.subtitle': 'Ik ben er om uw vragen te beantwoorden en u te helpen',
    'cta.whatsapp': 'Chat op WhatsApp',
    'cta.form': 'Formulier invullen',
    
    // Contact
    'contact.title': 'Stuur uw bericht',
    'contact.name': 'Uw naam',
    'contact.message': 'Uw bericht',
    'contact.whatsapp': 'Uw WhatsApp (optioneel)',
    'contact.submit': 'Bericht verzenden',
    'contact.or': 'of neem direct contact met mij op',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.location': 'Europa',
    'footer.rights': 'Alle rechten voorbehouden',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
