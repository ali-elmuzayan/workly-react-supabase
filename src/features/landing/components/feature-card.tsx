type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  border: string;
};
const FeatureCard = ({
  title,
  description,
  icon,
  color,
  border,
}: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 flex flex-col gap-4">
      <span
        className={`flex items-center justify-center w-11 h-11 rounded-xl border ${border} ${color}`}
      >
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-base mb-1.5">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
