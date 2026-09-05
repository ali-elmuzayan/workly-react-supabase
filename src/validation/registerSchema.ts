import { z } from "zod";

const registerSchema = z
  .object({
    name: z
      .string({ message: "should be of type string" })
      .min(1, { message: "Name is required" }),
    email: z.string().email().min(1, { message: "Email is Required" }),
    password: z
      .string()
      .min(8, { message: "password Must be at least 8 Characters length" })
      .regex(/.*[!@#&$%^&*()_+{}|[\]\\:";j'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    passwordConfirmation: z
      .string()
      .min(1, { message: "Password confirmation required" }),
  })
  .refine((input) => input.password === input.passwordConfirmation, {
    message: "password confirmation should be equivalent to password",
    path: ["passwordConfirmation"],
  });

type TRegisterFormInput = z.infer<typeof registerSchema>;

export { registerSchema, type TRegisterFormInput };
