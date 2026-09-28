import { AppError } from "@/lib/errors";
import { User } from "@/models/user";
import { connectToDatabase } from "@/db/mongoose";
import { hashPassword, verifyPassword } from "@/services/auth/password";

type SignupInput = {
  fullName: string;
  email: string;
  password: string;
};

type LoginInput = {
  email: string;
  password: string;
};

export async function registerUser(input: SignupInput) {
  await connectToDatabase();

  const existing = await User.findOne({ email: input.email.toLowerCase() }).lean();

  if (existing) {
    throw new AppError("An account with this email already exists.", 409, true);
  }

  const created = await User.create({
    email: input.email.toLowerCase(),
    fullName: input.fullName,
    passwordHash: hashPassword(input.password),
    role: "user",
  });

  return {
    id: String(created._id),
    email: created.email,
    role: created.role,
  };
}

export async function authenticateUser(input: LoginInput) {
  await connectToDatabase();

  const user = await User.findOne({ email: input.email.toLowerCase() });

  if (!user || !verifyPassword(input.password, user.passwordHash)) {
    throw new AppError("Invalid email or password.", 401, true);
  }

  return {
    id: String(user._id),
    email: user.email,
    role: user.role,
  };
}
