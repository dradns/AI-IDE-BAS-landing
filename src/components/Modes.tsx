import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Building, Eye, Palette, User } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { useState } from "react";
import LazyGif from "@/components/LazyGif";

const modes = [
  {
    id: "business-analyst",
    icon: Users,
    color: "bg-primary"
  },
  {
    id: "system-analyst",
    icon: Code,
    color: "bg-primary"
  },
  {
    id: "architect",
    icon: Building,
    color: "bg-primary"
  },
  {
    id: "reviewer",
    icon: Eye,
    color: "bg-primary"
  },
  {
    id: "designer",
    icon: Palette,
    color: "bg-primary"
  },
  {
    id: "project-manager",
    icon: User,
    color: "bg-primary"
  }
];

const Modes = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedMode, setSelectedMode] = useState("business-analyst");

  const modeNames = [
    t.modes.businessAnalyst,
    t.modes.systemAnalyst, 
    t.modes.architect,
    t.modes.reviewer,
    t.modes.designer,
    t.modes.projectManager
  ];

  const getModeTitle = (modeId: string) => {
    switch (modeId) {
      case "business-analyst":
        return language === 'ru' ? 'Режим бизнес-аналитика' : 'Business Analyst Mode';
      case "system-analyst":
        return language === 'ru' ? 'Режим системного аналитика' : 'System Analyst Mode';
      case "architect":
        return language === 'ru' ? 'Режим архитектора' : 'Architect Mode';
      case "reviewer":
        return language === 'ru' ? 'Режим ревьювера' : 'Reviewer Mode';
      case "designer":
        return language === 'ru' ? 'Режим дизайнера' : 'Designer Mode';
      case "project-manager":
        return language === 'ru' ? 'Режим проектного менеджера' : 'Project Manager Mode';
      default:
        return t.modes.businessAnalyst;
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
        return t.modes.features;
    }
  };

  const getModeIcon = (modeId: string) => {
    const mode = modes.find(m => m.id === modeId);
    return mode ? mode.icon : Users;
  };

  const getModeColor = (modeId: string) => {
    return "bg-primary";
  };

  const exampleCode = selectedMode === "business-analyst" 
    ? (language === 'ru' 
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
- [ ] Result meets expectations`)
    : selectedMode === "system-analyst" 
    ? (language === 'ru'
      ? `@startuml
title Процесс установки расширения AI IDE BAS

actor Пользователь
participant "VS Code" as VSCode

Пользователь -> VSCode: Нажимает "Установить"
VSCode -> VSCode: Устанавливает расширение
VSCode -> Пользователь: Дает суперсилу
@enduml`
      : `@startuml
title AI IDE BAS Extension Installation Process

actor User
participant "VS Code" as VSCode

User -> VSCode: Clicks "Install"
VSCode -> VSCode: Installs extension
VSCode -> User: Gives superpower
@enduml`)
    : selectedMode === "architect"
    ? (language === 'ru'
      ? `@startuml
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
@enduml`
      : `@startuml
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
@enduml`)
    : selectedMode === "reviewer"
    ? (language === 'ru'
      ? `**Проверка логической целостности:**
- [ ] AS IS логически предшествует TO BE
- [ ] Роли соответствуют реальным участникам процесса
- [ ] Действия выполнимы в рамках предметной области
- [ ] Результаты достижимы и измеримы

**Статус:** ✅ Требования корректны`
      : `**Logical integrity check:**
- [ ] AS IS logically precedes TO BE
- [ ] Roles correspond to real process participants
- [ ] Actions are feasible within the domain
- [ ] Results are achievable and measurable

**Status:** ✅ Requirements are correct`)
    : selectedMode === "designer"
    ? `Header
==================
[Logo] [Menu] [Search] [User]

Main Content Area
==================`
    : selectedMode === "project-manager"
    ? (language === 'ru'
      ? `@startuml
title Диаграмма Ганта - Проект AI IDE BAS

[Анализ требований] starts 2025-01-01 and lasts 14 days
[Проектирование] starts 2025-01-15 and lasts 21 days
[Разработка] starts 2025-02-05 and lasts 30 days
[Тестирование] starts 2025-03-07 and lasts 14 days
[Внедрение] starts 2025-03-21 and lasts 7 days
@enduml`
      : `@startuml
title Gantt Chart - AI IDE BAS Project

[Requirements Analysis] starts 2025-01-01 and lasts 14 days
[Design] starts 2025-01-15 and lasts 21 days
[Development] starts 2025-02-05 and lasts 30 days
[Testing] starts 2025-03-07 and lasts 14 days
[Deployment] starts 2025-03-21 and lasts 7 days
@enduml`)
    : `# Default mode`;

  return (
    <section id="modes" className="pt-2 pb-20 bg-gradient-to-b from-secondary/10 to-secondary/30 relative z-10">
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
                variant={selectedMode === mode.id ? "default" : "outline"}
                className="p-4 h-auto flex-col gap-2 text-center"
                onClick={() => setSelectedMode(mode.id)}
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
                  <div className={`w-12 h-12 rounded-lg ${getModeColor(selectedMode)}/20 flex items-center justify-center`}>
                    {(() => {
                      const Icon = getModeIcon(selectedMode);
                      return <Icon className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold">{getModeTitle(selectedMode)}</h3>
                </div>
                
                <div className="space-y-3">
                  {getModeFeatures(selectedMode).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {selectedMode !== "designer" && (
                        <span className="text-primary font-bold">{index + 1}.</span>
                      )}
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
                {selectedMode === "designer" ? (
                  <div className="space-y-4">
                    <LazyGif 
                      src="/designer-demo.gif" 
                      alt="Демонстрация работы дизайнера" 
                      className="w-full max-w-md mx-auto"
                      placeholder="🎨 Загружается демо..."
                    />
                    <pre className="text-sm text-foreground whitespace-pre-wrap overflow-auto">
                      {exampleCode}
                    </pre>
                  </div>
                ) : (
                  <pre className="text-sm text-foreground whitespace-pre-wrap overflow-auto">
                    {exampleCode}
                  </pre>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Modes;