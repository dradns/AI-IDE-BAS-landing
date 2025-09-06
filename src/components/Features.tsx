import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, FileText, Settings, Users, GitBranch } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Any LLM Choice",
    description: "Integration with LLM via your API key",
    color: "text-blue-500"
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reduce costs on routine operations by more than half", 
    color: "text-green-500"
  },
  {
    icon: FileText,
    title: "Quality Templates",
    description: "AI IDE BAS includes artifact templates developed by recognized industry experts",
    color: "text-purple-500"
  },
  {
    icon: Settings,
    title: "Flexible Configuration", 
    description: "Refine modes according to your project needs",
    color: "text-orange-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborative work on projects with shared context",
    color: "text-pink-500"
  },
  {
    icon: GitBranch,
    title: "Versioning",
    description: "Complete change history, Git integration",
    color: "text-cyan-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">AI IDE BAS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern AI technologies for automating documentation, visualizing requirements and accelerating routine processes right in VS Code
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 shadow-card bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-glow transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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