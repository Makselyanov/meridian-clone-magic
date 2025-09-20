import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 bg-meridian-bg-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-meridian-gray mb-6">
                Обратная связь
              </h2>
              
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="border-gray-200 focus:border-meridian-red"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email"
                    placeholder="Email адрес" 
                    className="border-gray-200 focus:border-meridian-red"
                  />
                </div>
                
                <div>
                  <Input 
                    type="tel"
                    placeholder="Телефон" 
                    className="border-gray-200 focus:border-meridian-red"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    rows={4}
                    className="border-gray-200 focus:border-meridian-red resize-none"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" />
                  <label htmlFor="consent" className="text-sm text-meridian-light-gray">
                    Даю согласие на обработку персональных данных
                  </label>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-meridian-red hover:bg-meridian-red-hover text-white"
                >
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-meridian-gray mb-6">
                Карта присутствия
              </h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-meridian-red" />
              </div>
            </div>
            
            <Card className="bg-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-meridian-red mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-gray">Call-центр</p>
                    <p className="text-meridian-light-gray">8(3452)580-064</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-meridian-red mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-gray">Аварийная служба</p>
                    <p className="text-meridian-light-gray">8(3452)202-434</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-meridian-red mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-gray">Email</p>
                    <p className="text-meridian-light-gray">info@meridian-service72.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};