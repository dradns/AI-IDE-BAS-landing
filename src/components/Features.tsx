import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, FileText, Settings, Users, GitBranch } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: Brain,
      title: t.features.llmChoice.title,
      description: t.features.llmChoice.description,
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: t.features.timeSavings.title,
      description: t.features.timeSavings.description, 
      color: "text-green-500"
    },
    {
      icon: FileText,
      title: t.features.qualityTemplates.title,
      description: t.features.qualityTemplates.description,
      color: "text-purple-500"
    },
    {
      icon: Settings,
      title: t.features.flexibleConfig.title, 
      description: t.features.flexibleConfig.description,
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: t.features.teamCollaboration.title,
      description: t.features.teamCollaboration.description,
      color: "text-pink-500"
    },
    {
      icon: GitBranch,
      title: t.features.versioning.title,
      description: t.features.versioning.description,
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.features.title} <span className="text-gradient">AI IDE BAS</span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            <span dangerouslySetInnerHTML={{ __html: t.features.subtitle }} />
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 shadow-card bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-glow transition-smooth group h-full flex flex-col min-h-[180px]">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground leading-relaxed flex-1">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;