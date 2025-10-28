import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Laptop } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PersonalAccount = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-meridian-bg-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-meridian-gray mb-6">
              Удобный личный кабинет
            </h2>
            <p className="text-meridian-light-gray text-lg mb-8">
              Отслеживайте начисления по вашей квартире в любое время из любой точки мира, 
              где есть выход в Интернет. Личный кабинет на сайте УК или в мобильном приложении.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/coming-soon')}
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Smartphone className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Скачать в</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
              
              <button 
                onClick={() => navigate('/coming-soon')}
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Laptop className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Скачать в</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
          
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-meridian-red to-meridian-orange p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Личный кабинет</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Баланс лицевого счета:</span>
                    <span className="font-bold">-2,450 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>К доплате:</span>
                    <span className="font-bold">2,450 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Последний платеж:</span>
                    <span className="font-bold">15.03.2024</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
