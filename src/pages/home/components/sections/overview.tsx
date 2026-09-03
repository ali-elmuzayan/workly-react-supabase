// import ProductivityLine from "@/components/productivity-line";

const analyticsSummaries: {
  title: string;
  value: string;
  color: string;
}[] = [
  {
    title: "notes",
    value: "24",
    color: "purble",
  },
  {
    title: "open tasks",
    value: "8",
    color: "blue",
  },
  {
    title: "Projects",
    value: "3",
    color: "green",
  },
  {
    title: "Focus",
    value: "90M",
    color: "orange",
  },
];

const OverviewSection = () => {
  return (
    <div className="border border-gray-300 rounded-xl shadow-xl p-8">
      <div className="flex items-center  gap-4">
        {analyticsSummaries.map(({ title, value, color }) => (
          <div className="border border-gray-200 p-2 rounded-lg w-full ">
            <h3
              className={`text-${color}-900 bg-${color}-300 rounded w-fit px-1 font-bold text-lg`}
            >
              {value}
            </h3>
            <p className="text-sm font-normal">{title}</p>
          </div>
        ))}
      </div>
      <div>
        {/* <ProductivityLine percentage={60} /> */}
        <p>Weekly productivity -- 60%</p>
      </div>
    </div>
  );
};

export default OverviewSection;
