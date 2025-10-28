import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-buildings.jpg";

export const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(216, 86, 80, 0.2) 0%, rgba(255, 255, 255, 0.8) 100%), url(${heroBg})`
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="bg-meridian-red/90 text-white p-8 rounded-lg shadow-xl backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Современный подход
              <br />
              к управлению домами
            </h2>
            
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/coming-soon')}
              className="mt-6 bg-white text-meridian-red hover:bg-gray-50 font-semibold px-8 py-3 text-lg"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              ПРИСОЕДИНЯЙТЕСЬ К НАМ!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};