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
      
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-8">
          {/* Badge */}
          
          
          {/* Logos row */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-4 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <img src="/vscode-logo.png" alt="VS Code" className="w-full h-full object-contain" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <img src="/cursor-logo.png" alt="Cursor" className="w-full h-full object-contain" />
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <img src="/windsurf-logo.png" alt="Windsurf" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient inline-flex items-center justify-center gap-2 md:gap-3">
              {t.hero.extension}
              <img src="/extention.png" alt="Extension" className="w-10 h-10 md:w-16 md:h-16 object-contain" />
            </span>
          </h1>
          <p className="text-3xl md:text-5xl text-foreground font-bold text-center md:whitespace-nowrap -mt-1 md:-mt-2">
            {t.hero.description}
          </p>
          
          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            {t.hero.subtitle}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-2 md:pt-4 px-4 md:px-0">
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
              size="hero" 
              className="group"
              onClick={() => window.open('https://vkvideo.ru/video-231325948_456239030', '_blank')}
            >
              {t.hero.watchDemo}
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          
          {/* Hero GIF */}
          <div className="mt-12 md:mt-20 w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border/10 bg-muted/10">
              <div className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
                <img 
                  src="/hero_gifka.gif" 
                  alt="AI IDE BAS Demo" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="text-center space-y-4"><div class="text-muted-foreground">Демо временно недоступно</div><div class="text-sm text-muted-foreground/70">Файл слишком большой (37.7 MB)</div></div>';
                    }
                  }}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '1';
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm" id="loading-overlay">
                  <div className="text-center space-y-4">
                    <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
                    <p className="text-muted-foreground">Загрузка демо...</p>
                    <p className="text-xs text-muted-foreground/70">37.7 MB • Это может занять время</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;