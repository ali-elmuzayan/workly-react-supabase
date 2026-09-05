import { Link } from "react-router";
import RegisterForm from "./components/register-form";

const Register = () => {
  return (
    <div className="max-w-md w-full px-8 py-12 glass-card flex flex-col items-center gap-4">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-gray-700">Register</h1>
        <p className="text-xs text-gray-500 ">
          Welcome, we feel great because you join us{" "}
        </p>
      </div>
      <div className="w-full ">
        <RegisterForm />
      </div>
      <p className="text-sm text-gray-700">
        Already have account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
