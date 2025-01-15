import { z } from "zod";
export const loginSchema = z.object({
  email: z
    .string({ required_error: "E-mail is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be atleast 3 characters" }),
  password: z
    .string({ required_error: "pasword is required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" }),

  phone: z
    .string({ required_error: "Phone-No is required" })
    .trim()
    .min(10, { message: "Phone-No must be 10 digit" }),
});
