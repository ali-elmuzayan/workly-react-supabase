import { useForm, type SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import {
  registerSchema,
  type TRegisterFormInput,
} from "@/validation/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "@/components/auth-input";

const RegisterForm = () => {
  const focusEl = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (document.activeElement === focusEl.current) return;
    focusEl.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
      <AuthInput
        label="Name"
        name="name"
        register={register}
        error={errors.name?.message}
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
