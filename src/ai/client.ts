import { env } from "@/config/env";

export type AIRequest = {
  prompt: string;
  userId: string;
};

export async function runAIRequest(_request: AIRequest) {
  return {
    provider: "openai",
    model: env.OPENAI_MODEL,
    status: "queued",
  };
}
