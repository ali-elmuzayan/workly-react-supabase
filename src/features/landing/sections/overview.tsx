const analyticsSummaries: {
  label: string;
  value: string;
  color: string;
}[] = [
  {
    label: "Notes",
    value: "24",
    color: "bg-violet-500/15 text-violet-600",
  },
  {
    label: "Open tasks",
    value: "8",
    color: "bg-blue-500/15 text-blue-600",
  },
  {
    label: "Projects",
    value: "3",
    color: "bg-emerald-500/15 text-emerald-600",
  },
  {
    label: "Focus today",
    value: "90m",
    color: "bg-amber-500/15 text-amber-600",
  },
];

const OverviewSection = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {analyticsSummaries.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border/60 p-4 text-left"
              >
                <p
                  className={`text-2xl font-bold ${s.color} -ml-1 px-1 rounded-lg w-fit mb-1`}
                >
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full w-3/5 bg-primary rounded-full" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-left">
            Weekly productivity — 60%
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
