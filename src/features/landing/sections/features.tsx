import SectionTitle from "../components/section-title";
import { StickyNote, CheckCircle2, FolderKanban, Timer } from "lucide-react";
import FeatureCard from "../components/feature-card";

const features = [
  {
    icon: <StickyNote />,
    title: "Smart Notes",
    description:
      "Write freely and let AI generate summaries and auto-apply tags so you can find anything instantly.",
    color: "bg-violet-500/15 text-violet-600",
    border: "border-violet-500/20",
  },
  {
    icon: <CheckCircle2 />,
    title: "Task Tracking",
    description:
      "Create tasks, set priorities and due dates, and move through your backlog with confidence.",
    color: "bg-blue-500/15 text-blue-600",
    border: "border-blue-500/20",
  },
  {
    icon: <FolderKanban />,
    title: "Projects",
    description:
      "Group tasks into projects, track progress, and collaborate with your team — all in one place.",
    color: "bg-emerald-500/15 text-emerald-600",
    border: "border-emerald-500/20",
  },
  {
    icon: <Timer />,
    title: "Focus Timer",
    description:
      "Built-in Pomodoro timer with streak tracking to keep you in deep work mode every day.",
    color: "bg-amber-500/15 text-amber-600",
    border: "border-amber-500/20",
  },
];

const Features = () => {
  return (
    <section id="features" className="px-4 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionTitle
          title="Everything you need to stay on top"
          subtitle="Four tightly integrated tools that work together — no more switching between apps"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <FeatureCard {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
