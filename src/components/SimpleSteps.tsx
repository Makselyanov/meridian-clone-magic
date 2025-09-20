import { Card, CardContent } from "@/components/ui/card";
import { Phone, CreditCard, FileText } from "lucide-react";

export const SimpleSteps = () => {
  const steps = [
    {
      number: "1",
      icon: <Phone className="h-12 w-12 text-meridian-red" />,
      title: "Вызвать мастера УК теперь не сложнее, чем заказать пиццу",
      description: "Просто позвоните в офис или напишите на сайте. Вам остается просто дождаться звонка от мастера, который согласует с вами удобное время выполнения заявки"
    },
    {
      number: "2", 
      icon: <CreditCard className="h-12 w-12 text-meridian-red" />,
      title: "Оплатить жилищные услуги за минуту",
      description: "Теперь, чтобы оплатить квитанцию не обязательно даже выходить из дома! На сайте можно быстро, удобно и безопасно оплатить услуги с помощью банковских карт"
    },
    {
      number: "3",
      icon: <FileText className="h-12 w-12 text-meridian-red" />,
      title: "Передать показания, не отвлекаясь от повседневных занятий",
      description: "Передать показания можно, не отвлекаясь от повседневных занятий. Занесите показания счетчиков в передачи показаний. Остались вопросы? Позвоните или напишите нам"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-meridian-gray mb-4">
            Все просто. Как 1, 2, 3
          </h2>
          <p className="text-xl text-meridian-light-gray">
            Мы придумали, как упростить процесс общения с управляющей компанией
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow relative border-gray-100">
              <CardContent className="p-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-meridian-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="mt-8 mb-6 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-meridian-gray mb-4">
                  {step.title}
                </h3>
                <p className="text-meridian-light-gray leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};