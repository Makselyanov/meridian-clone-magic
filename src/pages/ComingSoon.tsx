import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Database, FileText, CreditCard, Gauge, TrendingUp, BarChart3 } from "lucide-react";
import heroBg from "@/assets/hero-buildings.jpg";

const ComingSoon = () => {
  const residentFeatures = [
    "Полная информация по лицевым счетам и удобным входом по номеру телефона и проверочному коду",
    "Начисления с детализацией расчетов",
    "Квитанции за всю историю работы",
    "Платежи",
    "Оплата банковской картой с прямым зачислением на расчетный счет управляющей организации",
    "Просмотр и подача показаний счетчиков",
    "Просмотр истории поданных показаний",
    "Просмотр срока действия счетчика и даты истечения поверки счетчиков"
  ];

  const managementFeatures = [
    {
      icon: <CreditCard className="h-8 w-8 text-meridian-red" />,
      title: "Начисление платежей и перерасчет",
      description: "Расчет и перерасчет платежей за коммунальные услуги, а также оформление квитанций для оплаты. Удобная работа с онлайн-кассой, лицевыми счетами. Автоматическая рассылка счетов по электронной почте."
    },
    {
      icon: <Database className="h-8 w-8 text-meridian-red" />,
      title: "Выгрузка в ГИС ЖКХ",
      description: "Прямая выгрузка данных в государственную информационную систему ЖКХ (ГИС ЖКХ) для соблюдения требований законодательства и упрощения взаимодействия с государственными органами."
    },
    {
      icon: <FileText className="h-8 w-8 text-meridian-red" />,
      title: "Единая база данных",
      description: "Единая база данных для бухгалтерии, юридической службы и отдела, занимающегося управлением жилищным фондом. Это обеспечивает эффективное взаимодействие между отделами и упрощает процесс управления."
    },
    {
      icon: <Gauge className="h-8 w-8 text-meridian-red" />,
      title: "Удобство для жильцов",
      description: "Наличие личного кабинета и мобильного приложения для жильцов, позволяет получать актуальную информацию о состоянии счетов, оплачивать услуги онлайн и обращаться за поддержкой в службу поддержки."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-meridian-red" />,
      title: "Все виды отчетности",
      description: "Формирование всех необходимых видов отчетности. Программа учитывает все поступления денежных средств на счета, что обеспечивает прозрачность финансовых операций."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(216, 86, 80, 0.2) 0%, rgba(255, 255, 255, 0.8) 100%), url(${heroBg})`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="bg-meridian-red/90 text-white p-8 rounded-lg shadow-xl backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Мы скоро запустим личный кабинет жильцов
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-meridian-gray">
            Функционал для жильцов
          </h2>
          <p className="text-center text-meridian-light-gray mb-12 max-w-3xl mx-auto">
            Полная информация по лицевым счетам с удобным входом по номеру телефона и проверочному коду
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {residentFeatures.map((feature, index) => (
              <Card key={index} className="border-meridian-red/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-meridian-red flex-shrink-0 mt-1" />
                  <p className="text-meridian-gray">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management System Section */}
      <section className="py-16 bg-meridian-bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-meridian-gray">
              Управляйте недвижимостью эффективно
            </h2>
            <p className="text-xl text-meridian-light-gray mb-2">Вся информация в 1 окне</p>
            <p className="text-meridian-light-gray max-w-3xl mx-auto">
              Цель системы - автоматизация ключевых бизнес-процессов жилищно-коммунальных хозяйств: 
              расчет квартплаты и коммунальных счетов, паспортный и подомовой учет расходов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {managementFeatures.map((feature, index) => (
              <Card key={index} className="border-meridian-red/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-meridian-gray">
                    {feature.title}
                  </h3>
                  <p className="text-meridian-light-gray">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoon;
