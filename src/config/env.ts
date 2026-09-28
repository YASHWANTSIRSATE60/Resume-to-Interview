import { z } from "zod";

const schema = z.object({
  MONGODB_URI: z.string().min(1).default("mongodb://127.0.0.1:27017/r2i"),
  AUTH_SECRET: z.string().min(16).default("dev-only-change-this-secret"),
  GOOGLE_CLIENT_ID: z.string().min(1).default("placeholder-google-client-id"),
  GOOGLE_CLIENT_SECRET: z
    .string()
    .min(1)
    .default("placeholder-google-client-secret"),
  OPENAI_API_KEY: z.string().min(1).default("placeholder-openai-key"),
  OPENAI_MODEL: z.string().min(1).default("gpt-4o-mini"),
  APP_URL: z.string().url().default("http://localhost:3000"),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success && process.env.NODE_ENV === "production") {
  throw new Error("Invalid environment configuration.");
}

export const env = parsed.success
  ? parsed.data
  : schema.parse({ NODE_ENV: process.env.NODE_ENV });
