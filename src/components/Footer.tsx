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
              <span className="font-bold text-lg">Культура Сервис</span>
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
            <div className="space-y-1 text-gray-400 text-sm">
              <p>Офис: 8 (3452) 217–008</p>
              <p>Моб: +7 919 940-4440</p>
              <p>Telegram: 8 (922) 007–77–88</p>
              <p>Сайт: szcult.ru</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center text-gray-400 mb-4">
            <p>&copy; 2024 ООО УК "КУЛЬТУРА СЕРВИС". Все права защищены.</p>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>ООО "УПРАВЛЯЮЩАЯ КОМПАНИЯ КУЛЬТУРА СЕРВИС"</strong></p>
            <p>ИНН 7203596511, КПП 720301001, ОГРН 1257200012585</p>
            <p>Р/с: 40702 810 6 6777 0001738, БИК: 047102651</p>
            <p>Банк: ЗАПАДНО-СИБИРСКОЕ ОТДЕЛЕНИЕ №8647 ПАО СБЕРБАНК</p>
            <p>К/с: 30101 810 8 0000 0000651</p>
            <p>Юр. адрес: 625027, Тюменская обл., г. Тюмень, ул. Киевская, д. 74А, офис 1</p>
          </div>
        </div>
      </div>
    </footer>
  );
};