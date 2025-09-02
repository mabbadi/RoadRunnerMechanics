import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const aboutItems = [
    {
      title: t('our_story'),
      description: t('story_text'),
      icon: <BookOpen className="w-8 h-8 text-primary" />,
    },
    {
      title: t('our_mission'),
      description: t('mission_text'),
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: t('our_vision'),
      description: t('vision_text'),
      icon: <Eye className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about_us')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutItems.map((item, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;