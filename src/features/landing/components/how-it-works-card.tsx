type HowItWorksCardProps = {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const HowItWorksCard = ({
  step,
  icon,
  title,
  description,
}: HowItWorksCardProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-bold text-gray-300  ">{step}</h3>
      <div className="bg-gray-200 w-fit p-2 rounded-md">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default HowItWorksCard;
