import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Phone',
      content: '+31 627437876',
      link: 'tel:+31627437876'
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Email',
      content: 'roadrunnermechanics@outlook.com',
      link: 'mailto:roadrunnermechanics@outlook.com'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Service Area',
      content: 'Netherlands-wide mobile service',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: 'Hours',
      content: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('contact_us')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('contact_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            style={{ overflowWrap: "break-word", wordBreak: "break-all" }}
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="mt-8 bg-gradient-primary shadow-glow">
              <CardHeader>
                <CardTitle className="text-primary-foreground flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>24/7 Emergency Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 mb-4">
                  Need urgent repairs? We're here to help around the clock.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.open('tel:+31627437876', '_self')}
                  className="w-full"
                >
                  Call Now: +31 627437876
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <Card className="bg-gradient-card border-border/50 p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-4">Ready to Get Started?</CardTitle>
                <p className="text-muted-foreground">
                  Experience the difference with Roadrunner Mechanics. 
                  Professional, reliable, and customer-focused service.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('tel:+31627437876', '_self')}
                >
                  Schedule Service Call
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('mailto:roadrunnermechanics@outlook.com', '_blank')}
                >
                  Send Email Inquiry
                </Button>

                <div className="pt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Free consultations available • Licensed & Insured
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;