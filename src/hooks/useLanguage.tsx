import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'nl';

interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    services: "Services",
    about: "About",
    testimonials: "Testimonials",
    contact: "Contact",
    home: "Home",
    language: "Language",
    english: "English",
    dutch: "Dutch",

    // Hero
    welcome_title: "Welcome to Roadrunner Mechanics",
    welcome_subtitle: "Your trusted partner for all your car care needs. We offer a wide range of services, from basic maintenance to specialized repairs and detailing.",
    learn_more: "Learn More",

    // Services
    our_services: "Our Services",
    services_description: "We pride ourselves on offering a comprehensive range of car services to meet all your automotive needs. From routine maintenance to complex repairs, our team is here to ensure your vehicle is running smoothly.",
    basic_services: "Basic Services",
    special_services: "Special Services",
    brand_focus: "Brand Focus",
    maintenance_service: "Maintenance (Electric, Diesel, Gasoline)",
    repairs_service: "Repairs",
    home_service: "At Home Service",
    detailing_collaboration: "Collaboration with top-notch car detailing",
    car_consultation: "Car consultation",
    modding: "Modding",

    // About
    about_us: "About Us",
    our_story: "Our Story",
    our_mission: "Our Mission", 
    our_vision: "Our Vision",
    story_text: "Roadrunner Mechanics is dedicated to providing exceptional car care services. Our team of experienced technicians is committed to customer satisfaction and using the latest techniques and technologies.",
    mission_text: "To deliver top-notch automotive services with a commitment to quality, transparency, and customer satisfaction. We aim to build lasting relationships with our customers based on trust and excellence.",
    vision_text: "To be the leading car service provider in the industry, renowned for our expertise, reliability, and customer-centric approach.",

    // Testimonials
    testimonials_title: "Testimonials",
    testimonial_1: "Excellent service and friendly staff. My car has never run better!",
    testimonial_2: "Highly recommend Roadrunner Mechanics. They go above and beyond.",
    testimonial_3: "Professional, reliable, and affordable. A great experience every time.",
    customer_1: "John Doe",
    customer_2: "Jane Smith",
    customer_3: "Bob Johnson",

    // Contact
    contact_us: "Contact Us",
    contact_description: "We'd love to hear from you! Whether you have questions about our services or need to schedule an appointment, our team is here to help.",
    phone: "Phone: +31 627437876",
    email: "Email: roadrunnermechanics(at)outlook(dot)com",

    // Footer
    copyright: "© 2023 Roadrunner Mechanics. All rights reserved.",
    follow_us: "Follow us on:",
  },
  nl: {
    // Navigation
    services: "Diensten",
    about: "Over",
    testimonials: "Getuigenissen",
    contact: "Contact",
    home: "Home",
    language: "Taal",
    english: "Engels",
    dutch: "Nederlands",

    // Hero
    welcome_title: "Welkom bij Roadrunner Mechanics",
    welcome_subtitle: "Uw vertrouwde partner voor al uw autoverzorging. We bieden een breed scala aan diensten, van basisonderhoud tot gespecialiseerde reparaties en detaillering.",
    learn_more: "Meer informatie",

    // Services
    our_services: "Onze diensten",
    services_description: "We zijn er trots op een uitgebreid scala aan autoservices aan te bieden om aan al uw autobehoeften te voldoen. Van routinematig onderhoud tot complexe reparaties, ons team staat klaar om ervoor te zorgen dat uw voertuig soepel blijft rijden.",
    basic_services: "Basisdiensten",
    special_services: "Speciale diensten",
    brand_focus: "Merken Focus",
    maintenance_service: "Onderhoud (Elektrisch, Diesel, Benzine)",
    repairs_service: "Reparaties",
    home_service: "Thuisservice",
    detailing_collaboration: "Samenwerking met eersteklas autoverzorging",
    car_consultation: "Auto consultatie",
    modding: "Modding",

    // About
    about_us: "Over ons",
    our_story: "Ons Verhaal",
    our_mission: "Onze Missie",
    our_vision: "Onze Visie",
    story_text: "Roadrunner Mechanics is toegewijd aan het leveren van uitzonderlijke autoverzorgingsdiensten. Ons team van ervaren technici streeft naar klanttevredenheid en maakt gebruik van de nieuwste technieken en technologieën.",
    mission_text: "Het leveren van eersteklas autoservices met een toewijding aan kwaliteit, transparantie en klanttevredenheid. We streven ernaar om blijvende relaties op te bouwen met onze klanten op basis van vertrouwen en uitmuntendheid.",
    vision_text: "De toonaangevende autoverzorgingsdienstverlener in de industrie zijn, bekend om onze expertise, betrouwbaarheid en klantgerichte aanpak.",

    // Testimonials
    testimonials_title: "Getuigenissen",
    testimonial_1: "Uitstekende service en vriendelijk personeel. Mijn auto rijdt beter dan ooit!",
    testimonial_2: "Roadrunner Mechanics is zeer aan te bevelen. Ze doen echt alles voor je.",
    testimonial_3: "Professioneel, betrouwbaar en betaalbaar. Elke keer een geweldige ervaring.",
    customer_1: "Jan Jansen",
    customer_2: "Marie de Vries",
    customer_3: "Kees van Dijk",

    // Contact
    contact_us: "Neem contact met ons op",
    contact_description: "We horen graag van u! Of u nu vragen heeft over onze diensten of een afspraak wilt maken, ons team staat voor u klaar.",
    phone: "Telefoon: +31 627437876",
    email: "E-mail: roadrunnermechanics(at)outlook(dot)com",

    // Footer
    copyright: "© 2023 Roadrunner Mechanics. Alle rechten voorbehouden.",
    follow_us: "Volg ons op:",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}