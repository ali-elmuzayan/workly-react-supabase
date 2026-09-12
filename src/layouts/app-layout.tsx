import { Outlet } from "react-router";
import Header from "./components/header";

const AppLayout = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <main className="px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
