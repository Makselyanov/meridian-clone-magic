import { Home } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-meridian-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-meridian-red rounded-lg flex items-center justify-center">
                <Home className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg">Меридиан-Сервис</span>
            </div>
            <p className="text-gray-400">
              Современный подход к управлению многоквартирными домами
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Управление домом</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Техническое обслуживание</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Аварийные вызовы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Личный кабинет</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Наши дома</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p>Call-центр: 8(3452)580-064</p>
              <p>Аварийная служба: 8(3452)202-434</p>
              <p>Email: info@meridian-service72.ru</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Меридиан-Сервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};