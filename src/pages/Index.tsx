import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Modes from "@/components/Modes";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Modes />
        <Features />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
