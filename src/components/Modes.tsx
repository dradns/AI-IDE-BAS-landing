import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Users, Code, Building, Eye, Palette, User } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { useState } from "react";
const modes = [{
  id: "business-analyst",
  icon: Users,
  gifSrc: "/ba.gif"
}, {
  id: "system-analyst",
  icon: Code,
  gifSrc: "/sa.gif"
}, {
  id: "architect",
  icon: Building,
  gifSrc: null
}, {
  id: "reviewer",
  icon: Eye,
  gifSrc: "/rev.gif"
}, {
  id: "designer",
  icon: Palette,
  gifSrc: "/des.gif"
}, {
  id: "project-manager",
  icon: User,
  gifSrc: "/pm.gif"
}];
const Modes = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  const [dialogStates, setDialogStates] = useState({
    'business-analyst': false,
    'system-analyst': false,
    'architect': false,
    'reviewer': false,
    'designer': false,
    'project-manager': false
  });
  const setDialogOpen = (modeId: string, isOpen: boolean) => {
    setDialogStates(prev => ({
      ...prev,
      [modeId]: isOpen
    }));
  };
  const getModeTitle = (modeId: string) => {
    switch (modeId) {
      case "business-analyst":
        return language === 'ru' ? 'Режим бизнес-аналитика' : 'Business Analyst Mode';
      case "system-analyst":
        return language === 'ru' ? 'Режим системного аналитика' : 'System Analyst Mode';
      case "architect":
        return language === 'ru' ? 'Режим архитектора' : 'Architect Mode';
      case "reviewer":
        return language === 'ru' ? 'Режим ревьюера' : 'Reviewer Mode';
      case "designer":
        return language === 'ru' ? 'Режим дизайнера' : 'Designer Mode';
      case "project-manager":
        return language === 'ru' ? 'Режим проектного менеджера' : 'Project Manager Mode';
      default:
        return '';
    }
  };
  const getModeFeatures = (modeId: string) => {
    switch (modeId) {
      case "business-analyst":
        return t.modes.features;
      case "system-analyst":
        return t.modes.systemAnalystFeatures;
      case "architect":
        return t.modes.architectFeatures;
      case "reviewer":
        return t.modes.reviewerFeatures;
      case "designer":
        return t.modes.designerFeatures;
      case "project-manager":
        return t.modes.projectManagerFeatures;
      default:
        return [];
    }
  };
  const getExampleCode = (modeId: string) => {
    switch (modeId) {
      case "business-analyst":
        return language === 'ru' ? `# US-XXX: [Краткое название функциональности]

Как <роль пользователя>,
я хочу <желаемое действие/функциональность>,
чтобы <ожидаемый результат/выгода>.

## Критерии приемки
- [ ] Пользователь может выполнить действие
- [ ] Система обрабатывает запрос корректно
- [ ] Результат соответствует ожиданиям` : `# US-XXX: [Short functionality title]

As a <user role>,
I want <desired action/functionality>,
so that <expected result/benefit>.

## Acceptance Criteria
- [ ] User can perform the action
- [ ] System processes the request correctly
- [ ] Result meets expectations`;
      case "system-analyst":
        return language === 'ru' ? `@startuml
title Процесс установки расширения AI IDE BAS

actor Пользователь
participant "VS Code" as VSCode

Пользователь -> VSCode: Нажимает "Установить"
VSCode -> VSCode: Устанавливает расширение
VSCode -> Пользователь: Дает суперсилу
@enduml` : `@startuml
title AI IDE BAS Extension Installation Process

actor User
participant "VS Code" as VSCode

User -> VSCode: Clicks "Install"
VSCode -> VSCode: Installs extension
VSCode -> User: Gives superpower
@enduml`;
      case "architect":
        return language === 'ru' ? `@startuml
title Архитектура системы

package "Frontend" {
  [React App]
  [UI Components]
}

package "Backend" {
  [API Gateway]
  [User Service]
  [Data Service]
}

database "Database" {
  [PostgreSQL]
}
@enduml` : `@startuml
title System Architecture

package "Frontend" {
  [React App]
  [UI Components]
}

package "Backend" {
  [API Gateway]
  [User Service]
  [Data Service]
}

database "Database" {
  [PostgreSQL]
}
@enduml`;
      case "reviewer":
        return language === 'ru' ? `**Проверка логической целостности:**
- [ ] AS IS логически предшествует TO BE
- [ ] Роли соответствуют реальным участникам процесса
- [ ] Действия выполнимы в рамках предметной области
- [ ] Результаты достижимы и измеримы

**Статус:** ✅ Требования корректны` : `**Logical integrity check:**
- [ ] AS IS logically precedes TO BE
- [ ] Roles correspond to real process participants
- [ ] Actions are feasible within the domain
- [ ] Results are achievable and measurable

**Status:** ✅ Requirements are correct`;
      case "designer":
        return `Header
==================
[Logo] [Menu] [Search] [User]

Main Content Area
==================`;
      case "project-manager":
        return language === 'ru' ? `@startuml
title Диаграмма Ганта - Проект AI IDE BAS

[Анализ требований] starts 2025-01-01 and lasts 14 days
[Проектирование] starts 2025-01-15 and lasts 21 days
[Разработка] starts 2025-02-05 and lasts 30 days
[Тестирование] starts 2025-03-07 and lasts 14 days
[Внедрение] starts 2025-03-21 and lasts 7 days
@enduml` : `@startuml
title Gantt Chart - AI IDE BAS Project

[Requirements Analysis] starts 2025-01-01 and lasts 14 days
[Design] starts 2025-01-15 and lasts 21 days
[Development] starts 2025-02-05 and lasts 30 days
[Testing] starts 2025-03-07 and lasts 14 days
[Deployment] starts 2025-03-21 and lasts 7 days
@enduml`;
      default:
        return '';
    }
  };
  return <section id="modes" className="pt-2 pb-20 bg-gradient-to-b from-secondary/10 to-secondary/30 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.modes.title.replace('AI IDE BAS', '')} <span className="text-gradient">AI IDE BAS</span>
          </h2>
        </div>
        
        {/* All modes displayed vertically */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {modes.map(mode => {
          const Icon = mode.icon;
          const features = getModeFeatures(mode.id);
          const exampleCode = getExampleCode(mode.id);
          return <Card key={mode.id} className={`p-8 shadow-card bg-card/50 backdrop-blur-sm border border-border/50 ${mode.id !== 'architect' ? 'h-[400px]' : ''}`}>
                <div className={`grid lg:grid-cols-2 gap-8 ${mode.id !== 'architect' ? 'items-center h-full' : 'items-start'}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{getModeTitle(mode.id)}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {features.map((feature, index) => <div key={index} className="flex items-center gap-3">
                          {mode.id !== "designer" && <span className="text-primary font-bold">{index + 1}.</span>}
                          <span className="text-foreground">{feature}</span>
                        </div>)}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
                    {mode.gifSrc ? <div className="space-y-4">
                        <Dialog open={dialogStates[mode.id]} onOpenChange={isOpen => setDialogOpen(mode.id, isOpen)}>
                          <DialogTrigger asChild>
                            <div className="cursor-pointer hover:opacity-80 transition-opacity">
                              <img src={mode.gifSrc} alt={`${mode.id} workflow animation`} className="w-full h-48 object-cover rounded-lg" />
                              <p className="text-center text-sm text-muted-foreground mt-2">
                                {language === 'ru' ? 'Нажмите для просмотра в полном размере' : 'Click to view full size'}
                              </p>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full max-h-[90vh] p-6">
                            <img src={mode.gifSrc} alt={`${mode.id} workflow animation`} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
                          </DialogContent>
                        </Dialog>
                      </div> : <div className="space-y-4">
                        <pre className="text-sm text-foreground whitespace-pre-wrap overflow-auto">
                          {exampleCode}
                        </pre>
                        {mode.id === "architect"}
                      </div>}
                  </div>
                </div>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Modes;