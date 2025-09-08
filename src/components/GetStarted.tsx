import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, FileText, Download } from "lucide-react";
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
            <p className="text-muted-foreground mb-6">
              {t.getStarted.videoTutorial.description}
            </p>
            <Button variant="outline" className="w-full group">
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
            <p className="text-muted-foreground mb-6">
              {t.getStarted.textTutorial.description}
            </p>
            <Button variant="outline" className="w-full group">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t.getStarted.textTutorial.button}
            </Button>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="hero" className="group">
            <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            {t.getStarted.install}
          </Button>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">{t.getStarted.needHelp}</h3>
            <p className="text-muted-foreground mb-6">
              {t.getStarted.contactUs}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="feature" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://t.me/AI_IDE_BAS', '_blank')}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.435-1.132 1.685-1.132 1.685s-.431.086-.992-.172c-.561-.258-1.248-.578-1.735-.802-.49-.224-.95-.463-1.528-.693-.578-.23-1.165-.455-1.735-.693-.57-.238-1.248-.518-1.735-.802s-.992-.172-.992-.172-.83-.25-1.132-1.685c0 0-.727-4.87-.896-6.728-.169-1.858.302-2.132.302-2.132s.648-.344 1.735.052c1.087.396 2.465.85 3.88 1.346 1.415.496 2.83.946 4.245 1.346 1.415-.4 2.83-.85 4.245-1.346 1.415-.496 2.793-.95 3.88-1.346 1.087-.396 1.735-.052 1.735-.052s.471.274.302 2.132z"/>
                </svg>
                {t.getStarted.telegram}
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.435-1.132 1.685-1.132 1.685s-.431.086-.992-.172c-.561-.258-1.248-.578-1.735-.802-.49-.224-.95-.463-1.528-.693-.578-.23-1.165-.455-1.735-.693-.57-.238-1.248-.518-1.735-.802s-.992-.172-.992-.172-.83-.25-1.132-1.685c0 0-.727-4.87-.896-6.728-.169-1.858.302-2.132.302-2.132s.648-.344 1.735.052c1.087.396 2.465.85 3.88 1.346 1.415.496 2.83.946 4.245 1.346 1.415-.4 2.83-.85 4.245-1.346 1.415-.496 2.793-.95 3.88-1.346 1.087-.396 1.735-.052 1.735-.052s.471.274.302 2.132z"/>
                </svg>
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