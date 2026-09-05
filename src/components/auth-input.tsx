import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type AuthInputProps<TFieldValue extends FieldValues> = {
  type?: string;
  label: string;
  name: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
  error?: string;
};

const AuthInput = <TFieldValue extends FieldValues>({
  type = "text",
  label,
  name,
  register,
  error,
}: AuthInputProps<TFieldValue>) => {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <Input type={type} aria-invalid={!!error} {...register(name)} />

      {error && (
        <span className="text-xs text-red-700 block text-left">{error}</span>
      )}
    </div>
  );
};

export default AuthInput;
