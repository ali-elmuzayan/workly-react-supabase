const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-600 text-lg text-balance">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
