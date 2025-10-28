import { Phone, Clock, Home, MessageSquare, Info, Users, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import kulturaLogo from "@/assets/kultura-servis-logo.png";

export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Top contact bar */}
      <div className="bg-meridian-bg-gray py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              {/* Call center */}
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-meridian-red" />
                <div>
                  <span className="font-semibold">Call-центр</span>
                  <div className="text-xs text-meridian-light-gray">
                    8 (3452) 217–008
                    <br />
                    (пн-пт: с 8.00 до 17.00, сб-вс: выходные)
                  </div>
                </div>
              </div>
              
              {/* Emergency service */}
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-meridian-red" />
                <div>
                  <span className="font-semibold">Аварийно-диспетчерская служба</span>
                  <div className="text-xs text-meridian-light-gray">
                    +7 919 940-4440
                    <br />
                    8 (922) 007–77–88 (Telegram)
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => navigate('/coming-soon')}
              className="bg-meridian-red hover:bg-meridian-red-hover text-white"
            >
              <LogIn className="h-4 w-4 mr-2" />
              ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img 
                src={kulturaLogo} 
                alt="Культура Сервис логотип"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-meridian-gray">Культура Сервис</h1>
              <p className="text-sm text-meridian-light-gray">Управляющая компания</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-meridian-gray hover:text-meridian-red transition-colors">
              Наши дома
            </a>
            <a href="#" className="text-meridian-gray hover:text-meridian-red transition-colors">
              Обращения на подключение дома
            </a>
            <a href="#" className="text-meridian-gray hover:text-meridian-red transition-colors">
              Полезная информация
            </a>
            <a href="#" className="text-meridian-gray hover:text-meridian-red transition-colors">
              Контакты и график работы
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};