import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <img src="/logo.png" alt="AI IDE BAS Logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-foreground">AI IDE BAS</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#modes" className="text-muted-foreground hover:text-foreground transition-smooth">
            {t.nav.modes}
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
            {t.nav.features}
          </a>
          <a href="#get-started" className="text-muted-foreground hover:text-foreground transition-smooth">
            {t.nav.getStarted}
          </a>
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-smooth">
            {t.nav.community}
          </a>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            variant="outline" 
            size="sm"
            className="text-xs sm:text-sm px-2 sm:px-3"
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </Button>
          <Button 
            variant="hero" 
            size="sm"
            className="hidden sm:flex text-sm px-3 sm:px-4"
            onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=8eton.ai-ide-bas', '_blank')}
          >
            {t.nav.tryNow}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;