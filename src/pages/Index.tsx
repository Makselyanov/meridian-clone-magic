import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PersonalAccount } from "@/components/PersonalAccount";
import { SimpleSteps } from "@/components/SimpleSteps";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CookieNotice } from "@/components/CookieNotice";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <PersonalAccount />
      <SimpleSteps />
      <Contact />
      <Footer />
      <CookieNotice />
    </div>
  );
};

export default Index;
