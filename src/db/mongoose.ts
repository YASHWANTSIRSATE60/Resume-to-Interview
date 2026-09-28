import mongoose from "mongoose";

import { env } from "@/config/env";

declare global {
  var __mongooseConnection: Promise<typeof mongoose> | undefined;
}

export async function connectToDatabase() {
  if (global.__mongooseConnection) {
    return global.__mongooseConnection;
  }

  global.__mongooseConnection = mongoose.connect(env.MONGODB_URI, {
    dbName: "r2i",
    maxPoolSize: 10,
  });

  return global.__mongooseConnection;
}
