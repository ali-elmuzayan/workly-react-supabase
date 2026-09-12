import PageHeader from "@/components/page-header";

const Dashboard = () => {
  const userName = "ali";
  return (
    <div className="">
      <PageHeader
        title={`Good Morning, ${userName}`}
        description="Here's a quick Overview of you workspace."
        button="+ Quick Add"
        onClick={() => {
          alert("hi from there");
        }}
      />
      {/* <SummaryCards />
      <UpCommingTasks />
      <FocusTimer />
      <ActiveProjects />
      <RecentNotes />
      <Summary /> */}
    </div>
  );
};

export default Dashboard;
