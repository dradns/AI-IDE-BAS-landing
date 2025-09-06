import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import MatrixAnimation from "./MatrixAnimation";
const Hero = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Animation Background */}
      <MatrixAnimation />
      
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-primary opacity-20 blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/30 blur-2xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          
          
          {/* Logos row */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg role="img" viewBox="0 0 24 24" className="w-full h-full fill-current text-primary">
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
              </svg>
            </div>
            <div className="w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-primary">
                <path d="M12 2L22 7L12 12L2 7L12 2Z"/>
                <path d="M2 17L12 22L22 17L12 12L2 17Z"/>
                <path d="M2 12L12 17L22 12L12 7L2 12Z" opacity="0.7"/>
              </svg>
            </div>
            <div className="w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-primary">
                <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                <path d="M2 12L12 17L22 12L12 7L2 12Z"/>
                <path d="M2 17L12 22L22 17L12 12L2 17Z"/>
              </svg>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient">AI-расширение</span>
          </h1>
          <p className="text-4xl md:text-5xl text-foreground font-bold text-center whitespace-nowrap">
            для аналитиков и архитекторов решений
          </p>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button variant="hero" size="hero" className="group">
              {t.hero.install}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t.hero.watchDemo}
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;