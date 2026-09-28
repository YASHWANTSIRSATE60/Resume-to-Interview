import { connectToDatabase } from "@/db/mongoose";
import { User } from "@/models/user";

export async function getUserById(userId: string) {
  await connectToDatabase();

  return User.findById(userId).select("email fullName role createdAt updatedAt").lean();
}
