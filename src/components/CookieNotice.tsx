import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-meridian-gray text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          Для функционирования сайта мы собираем cookie, данные об IP-адресе и местоположении пользователей.
        </p>
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsVisible(false)}
            className="border-white text-white hover:bg-white hover:text-meridian-gray"
          >
            Я СОГЛАСЕН
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};