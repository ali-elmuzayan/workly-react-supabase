import { Button } from "./ui/button";

type PageHeaderProps = {
  title: string;
  description: string;
  button: string;
  onClick: () => void;
};

const PageHeader = ({
  title,
  description,
  button,
  onClick,
}: PageHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold ">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div>
        <Button onClick={onClick}>{button}</Button>
      </div>
    </div>
  );
};

export default PageHeader;
