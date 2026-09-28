import { z } from "zod";

export const contactMessageSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  message: z.string().min(20).max(2000),
});
