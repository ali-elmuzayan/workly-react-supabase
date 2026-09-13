import { SignIn as SignInComponent } from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-between">
      <SignInComponent />
    </div>
  );
};

export default SignIn;
