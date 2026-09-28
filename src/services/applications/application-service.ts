export type ApplicationRecord = {
  id: string;
  userId: string;
  company: string;
  role: string;
  status: "draft" | "submitted" | "interview";
};

export async function listApplicationsByUser(userId: string) {
  return [] as ApplicationRecord[];
}

export function assertResourceOwner(resourceUserId: string, sessionUserId: string) {
  return resourceUserId === sessionUserId;
}
