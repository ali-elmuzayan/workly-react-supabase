import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
