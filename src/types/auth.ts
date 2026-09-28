export type UserRole = "user" | "admin";

export type SessionUser = {
  id: string;
  email: string;
  role: UserRole;
};

export type AuthSession = {
  token: string;
  user: SessionUser;
};
