import { useEffect } from "react";

const ProductivityLine = ({ percentage }: { percentage: number }) => {
  const percentageWidth =
    "divice he current width of the component on the percent then show the line ";

  useEffect(() => {
    console.log(percentageWidth, percentage);
  }, [percentage]);

  return <div className="bg-gray-200 h-2 w-full"></div>;
};

export default ProductivityLine;
