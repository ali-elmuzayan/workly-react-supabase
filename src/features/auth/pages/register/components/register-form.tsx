import { useForm, type SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  registerSchema,
  type TRegisterFormInput,
} from "@/validation/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "@/features/auth/components/auth-input";
import useFocusRef from "@/hooks/useFocusRef";

const RegisterForm = () => {
  const focusEl = useFocusRef<HTMLInputElement>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormInput>({
    resolver: zodResolver(registerSchema),
  });

  const submitForm: SubmitHandler<TRegisterFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
      <AuthInput
        label="Name"
        name="name"
        register={register}
        error={errors.name?.message}
        ref={focusEl}
      />
      <AuthInput
        label="Email"
        name="email"
        register={register}
        error={errors.email?.message}
      />
      <AuthInput
        label="Password"
        name="password"
        register={register}
        error={errors.password?.message}
      />
      <AuthInput
        label="Confirm Password"
        name="passwordConfirmation"
        register={register}
        error={errors.passwordConfirmation?.message}
      />

      <div className="flex justify-end mt-4">
        <Button type="submit">Register</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
