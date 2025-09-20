import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wrench, Star } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <CreditCard className="h-8 w-8 text-meridian-red" />,
      title: "Оплата счетов",
      subtitle: "за квартиру",
      description: "Быстрая и удобная оплата коммунальных услуг онлайн"
    },
    {
      icon: <Wrench className="h-8 w-8 text-meridian-red" />,
      title: "Вызов мастера",
      subtitle: "на дом",
      description: "Профессиональный ремонт и обслуживание у вас дома"
    },
    {
      icon: <Star className="h-8 w-8 text-meridian-red" />,
      title: "Оценка работы",
      subtitle: "УК",
      description: "Оцените качество предоставляемых услуг"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-meridian-gray mb-4">Наши сервисы</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-gray-100">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-meridian-gray mb-2">
                  {service.title}
                  <br />
                  <span className="text-meridian-red">{service.subtitle}</span>
                </h3>
                <p className="text-meridian-light-gray mb-6">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="border-meridian-red text-meridian-red hover:bg-meridian-red hover:text-white"
                >
                  Перейти
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};