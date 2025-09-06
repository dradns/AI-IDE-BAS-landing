import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Building, Eye, Palette, User } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const modes = [
  {
    id: "business-analyst",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    id: "system-analyst",
    icon: Code,
    color: "bg-green-500"
  },
  {
    id: "architect",
    icon: Building,
    color: "bg-purple-500"
  },
  {
    id: "reviewer",
    icon: Eye,
    color: "bg-orange-500"
  },
  {
    id: "designer",
    icon: Palette,
    color: "bg-pink-500"
  },
  {
    id: "project-manager",
    icon: User,
    color: "bg-cyan-500"
  }
];

const Modes = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const modeNames = [
    t.modes.businessAnalyst,
    t.modes.systemAnalyst, 
    t.modes.architect,
    t.modes.reviewer,
    t.modes.designer,
    t.modes.projectManager
  ];

  const exampleCode = language === 'ru' 
    ? `# US-XXX: [Краткое название функциональности]

Как <роль пользователя>,
я хочу <желаемое действие/функциональность>,
чтобы <ожидаемый результат/выгода>.

## Критерии приемки
- [ ] Пользователь может выполнить действие
- [ ] Система обрабатывает запрос корректно
- [ ] Результат соответствует ожиданиям`
    : `# US-XXX: [Short functionality title]

As a <user role>,
I want <desired action/functionality>,
so that <expected result/benefit>.

## Acceptance Criteria
- [ ] User can perform the action
- [ ] System processes the request correctly
- [ ] Result meets expectations`;

  return (
    <section id="modes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.modes.title}
          </h2>
        </div>
        
        {/* Mode buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <Button
                key={mode.id}
                variant={index === 0 ? "default" : "outline"}
                className="p-4 h-auto flex-col gap-2 text-center"
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium leading-tight">{modeNames[index]}</span>
              </Button>
            );
          })}
        </div>
        
        {/* Featured mode details */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 shadow-card bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold">{t.modes.businessAnalyst}</h3>
                </div>
                
                <div className="space-y-3">
                  {t.modes.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-blue-500 font-bold">{index + 1}.</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap overflow-auto">
                  {exampleCode}
                </pre>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Modes;