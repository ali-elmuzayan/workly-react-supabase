import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "email is required" }).email(),
  password: z.string().min(1, { message: "password is required" }),
});

type TLoginFormInputs = z.infer<typeof loginSchema>;

export { loginSchema, type TLoginFormInputs };
