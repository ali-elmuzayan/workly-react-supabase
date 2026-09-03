import { Brain, File, Folder } from "lucide-react";
import SectionTitle from "../section-title";
import HowItWorksCard from "../how-it-works-card";

const howItWorkSteps: {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    icon: <File />,
    title: "Step 1: Identify Your Goals",
    description:
      "Dump your thoughts as notes. PlanMe's AI instantly summarises and tags them for you.",
  },
  {
    step: "02",
    icon: <Folder />,
    title: "Organize",
    description:
      "Turn notes into tasks, group them into projects, and prioritise what matters most.",
  },
  {
    step: "03",
    icon: <Brain />,
    title: "Focus",
    description:
      "Use the built-in Pomodoro timer to enter deep work and keep your daily streak",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full space-y-12">
      <SectionTitle
        title="How It Works"
        subtitle="Discover how our platform simplifies your workflow and enhances productivity."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">
        {howItWorkSteps.map((step) => (
          <HowItWorksCard key={step.step} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
