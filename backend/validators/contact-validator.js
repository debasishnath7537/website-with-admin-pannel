// validators/contact-validator.js
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  phone: z.string().min(10, { message: "Phone number must be 10 digits" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export default contactSchema;
