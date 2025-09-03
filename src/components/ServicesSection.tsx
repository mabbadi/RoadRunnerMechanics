import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Zap, Star, Car } from 'lucide-react';
import basicServicesImage from '@/assets/basic-services.jpg';
import specialServicesImage from '@/assets/special-services.png';
import brandFocusImage from '@/assets/brand-focus.jpg';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('basic_services'),
      image: basicServicesImage,
      icon: <Wrench className="w-8 h-8 text-primary" />,
      items: [
        t('maintenance_service'),
        t('repairs_service'),
        t('home_service'),
      ]
    },
    {
      title: t('special_services'),
      image: specialServicesImage,
      icon: <Star className="w-8 h-8 text-primary" />,
      items: [
        t('detailing_collaboration'),
        t('car_consultation'),
        t('modding'),
      ]
    },
    {
      title: t('brand_focus'),
      image: brandFocusImage,
      icon: <Car className="w-8 h-8 text-primary" />,
      items: [
        'Tesla',
        'Toyota', 
        'Ford',
        'Volkswagen',
        'BMW',
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('our_services')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start space-x-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Electric Vehicle Focus Banner */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center shadow-glow">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-primary-foreground mr-3" />
            <h3 className="text-2xl font-bold text-primary-foreground">
              Electric Vehicle Specialists
            </h3>
          </div>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Leading the charge in electric vehicle maintenance and repair. 
            From Tesla to traditional EVs, we're equipped with the latest technology and expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;