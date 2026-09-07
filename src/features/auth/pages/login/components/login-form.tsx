import AuthInput from "@/features/auth/components/auth-input";
import { Button } from "@/components/ui/button";
import useFocusRef from "@/hooks/useFocusRef";
import {
  loginSchema,
  type TLoginFormInputs,
} from "@/features/auth/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";

const LoginForm = () => {
  const focusEl = useFocusRef<HTMLInputElement>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const submitForm: SubmitHandler<TLoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-full  space-y-2">
      <AuthInput
        type="email"
        label="Email"
        name="email"
        register={register}
        error={errors.email?.message}
        ref={focusEl}
      />
      <AuthInput
        type="password"
        label="Password"
        name="password"
        register={register}
        error={errors.password?.message}
      />
      <div className="flex justify-end mt-4">
        <Button type="submit" className="px-4 ">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
