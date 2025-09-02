import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonial_1'),
      author: t('customer_1'),
      rating: 5,
    },
    {
      text: t('testimonial_2'),
      author: t('customer_2'),
      rating: 5,
    },
    {
      text: t('testimonial_3'),
      author: t('customer_3'),
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} className="w-4 h-4 fill-primary text-primary" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('testimonials_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/60 mb-4" />
                  <p className="text-foreground leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Verified Customer
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;