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
  return <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Matrix Animation Background */}
      <MatrixAnimation />
      
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-primary opacity-20 blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/30 blur-2xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          
          
          {/* Logos row */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <img src="/vscode-logo.png" alt="VS Code" className="w-full h-full object-contain" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <img src="/cursor-logo.png" alt="Cursor" className="w-full h-full object-contain" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <img src="/windsurf-logo.png" alt="Windsurf" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient inline-flex items-center justify-center gap-3">
              {t.hero.extension}
              <img src="/extention.png" alt="Extension" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </span>
          </h1>
          <p className="text-4xl md:text-5xl text-foreground font-bold text-center whitespace-nowrap -mt-2">
            {t.hero.description}
          </p>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button 
              variant="hero" 
              size="hero" 
              className="group"
              onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=8eton.ai-ide-bas', '_blank')}
            >
              {t.hero.install}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://vkvideo.ru/video-231325948_456239030', '_blank')}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t.hero.watchDemo}
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;