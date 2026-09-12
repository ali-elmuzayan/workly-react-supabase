import { Skeleton } from "@/components/ui/skeleton";
import { Outlet } from "react-router";

const ProtectedGuard = () => {
  const user = "any value";
  const isLoading = false;
  console.log(user);

  if (isLoading) return <Skeleton />;

  return <Outlet />;
};

export default ProtectedGuard;
