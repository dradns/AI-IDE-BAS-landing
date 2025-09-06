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
              <img src="/vscode-logo.svg" alt="VS Code" className="w-full h-full" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-primary">
                <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10S10 9.1 10 8V4C10 2.9 10.9 2 12 2M21 11H20V10C20 8.9 19.1 8 18 8S16 8.9 16 10V11H15C14.4 11 14 11.4 14 12V20C14 20.6 14.4 21 15 21H21C21.6 21 22 20.6 22 20V12C22 11.4 21.6 11 21 11M18.5 16C18.5 16.8 17.8 17.5 17 17.5S15.5 16.8 15.5 16S16.2 14.5 17 14.5S18.5 15.2 18.5 16M18 11V10C18 9.4 17.6 9 17 9S16 9.4 16 10V11H18Z"/>
              </svg>
            </div>
            <div className="w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-primary">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                <path d="M6 17L7.05 20.05L10 19L7.05 17.95L6 17Z"/>
                <path d="M18 5L19.05 8.05L22 7L19.05 5.95L18 5Z"/>
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