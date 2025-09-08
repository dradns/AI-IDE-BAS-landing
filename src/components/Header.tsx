import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/logo.png" alt="AI IDE BAS Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="text-xl font-bold text-foreground">AI IDE BAS</span>
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
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </Button>
          <Button 
            variant="hero" 
            size="lg"
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