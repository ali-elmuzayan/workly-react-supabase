import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthInputProps<TFieldValue extends FieldValues> = {
  type?: string;
  label: string;
  name: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
};

const AuthInput = <TFieldValue extends FieldValues>({
  type = "text",
  label,
  name,
  register,
  error,
  ref = null,
}: AuthInputProps<TFieldValue>) => {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <Input type={type} aria-invalid={!!error} {...register(name)} ref={ref} />

      {error && (
        <span className="text-xs text-red-700 block text-left">{error}</span>
      )}
    </div>
  );
};

export default AuthInput;
