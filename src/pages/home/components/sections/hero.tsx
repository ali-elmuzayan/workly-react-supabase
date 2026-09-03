import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-4 pt-20 pb-28 text-center">
      <div className="max-w-3xl mx-auto">
        <Badge
          variant="secondary"
          className="mb-4 border border-gray-300 px-3 py-2 text-xs "
        >
          <Zap className="mr-1 h-4 w-4" />
          AI-powered productivity
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Your secondary brain,
          <br />
          <span className="text-muted-foreground">powered by AI</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          PlanMe combines smart notes, task management, project boards, and a
          Pomodoro timer — with AI that keeps everything organised for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" variant="black" className="w-full sm:w-auto">
            <Link to="/signup">Start for free</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            <a href="#features">See what's inside</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
