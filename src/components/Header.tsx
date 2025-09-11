import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
          <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center">
            <img src="/logo.png" alt="AI IDE BAS Logo" className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 object-contain" />
          </div>
          <span className="text-lg md:text-lg lg:text-xl font-bold text-foreground">AI IDE BAS</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#modes" className="text-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
            {t.nav.modes}
          </a>
          <a href="#features" className="text-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
            {t.nav.features}
          </a>
          <a href="#get-started" className="text-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
            {t.nav.getStarted}
          </a>
          <a href="#community" className="text-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
            {t.nav.community}
          </a>
        </nav>
        
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <Button 
            variant="outline" 
            size="sm"
            className="text-xs md:text-sm lg:text-sm px-2 md:px-2.5 lg:px-3"
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </Button>
          <Button 
            variant="hero" 
            size="sm"
            className="md:size-md lg:size-lg text-xs md:text-sm lg:text-sm px-3 md:px-3.5 lg:px-4"
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