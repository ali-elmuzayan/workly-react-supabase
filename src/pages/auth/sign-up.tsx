import { SignUp as SignUpComponent } from "@clerk/clerk-react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-between">
      <SignUpComponent />
    </div>
  );
};

export default SignUp;
