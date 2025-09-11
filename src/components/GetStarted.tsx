import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, FileText, Download, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const GetStarted = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="get-started" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            {t.getStarted.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.getStarted.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-6 shadow-card bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-glow transition-smooth group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{t.getStarted.videoTutorial.title}</h3>
            </div>
            <p className="text-foreground mb-6">
              {t.getStarted.videoTutorial.description}
            </p>
            <Button 
              variant="outline" 
              className="w-full group"
              onClick={() => window.open('https://vkvideo.ru/video-231325948_456239056?t=9m57s', '_blank')}
            >
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t.getStarted.videoTutorial.button}
            </Button>
          </Card>
          
          <Card className="p-6 shadow-card bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-glow transition-smooth group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">{t.getStarted.textTutorial.title}</h3>
            </div>
            <p className="text-foreground mb-6">
              {t.getStarted.textTutorial.description}
            </p>
            <Button 
              variant="outline" 
              className="w-full group"
              onClick={() => window.open('https://telegra.ph/Instrukciya-po-ustanovke-i-nastrojke-AI-IDE-BAS-07-30', '_blank')}
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t.getStarted.textTutorial.button}
            </Button>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            variant="hero" 
            size="hero" 
            className="group"
            onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=8eton.ai-ide-bas', '_blank')}
          >
            <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            {t.getStarted.install}
          </Button>
          
          <div id="community" className="mt-12">
            <h3 className="text-xl font-semibold mb-6">{t.getStarted.needHelp}</h3>
            <p className="text-foreground mb-6">
              {t.getStarted.contactUs}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="feature" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://t.me/AI_IDE_BAS', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                {t.getStarted.telegram}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://t.me/+ZBkoEo8HhtFjYjIy', '_blank')}
              >
                <Send className="w-5 h-5" />
                {t.getStarted.setupHelp}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;