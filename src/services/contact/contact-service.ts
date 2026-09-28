import { AppError } from "@/lib/errors";

type ContactInput = {
  fullName: string;
  email: string;
  message: string;
};

export async function submitContactMessage(input: ContactInput) {
  if (!input.message.trim()) {
    throw new AppError("Message is required.", 400, true);
  }

  return {
    accepted: true,
  };
}
