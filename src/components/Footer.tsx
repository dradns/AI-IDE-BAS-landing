import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Youtube } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left side - Logo and description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold text-foreground">AI IDE BAS</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              {language === 'ru' 
                ? 'Революционный AI-инструмент для аналитиков и архитекторов решений. 6 экспертных режимов.'
                : 'Revolutionary AI tool for analysts and solution architects. 6 expert modes.'}
            </p>
          </div>

          {/* Right side - Community section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">
              {language === 'ru' ? 'Сообщество' : 'Community'}
            </h3>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://github.com/dradns/AI-IDE-BAS', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://t.me/AI_IDE_BAS', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open('https://vkvideo.ru/video-231325948_456239030', '_blank')}
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;