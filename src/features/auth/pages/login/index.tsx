import { Link } from "react-router";
import LoginForm from "./components/login-form";

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-md xl:max-w-xl w-full p-4 glass-card py-8 px-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        <p className="text-sm text-gray-700">
          Welcome back, add your credentials to keep going.
        </p>
      </div>
      <LoginForm />
      <div>
        <p className="text-sm text-gray-700">
          Don't have account?{" "}
          <Link
            to="/register"
            className="text-sm text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
