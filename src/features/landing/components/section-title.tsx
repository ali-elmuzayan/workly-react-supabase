const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="text-center ">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
