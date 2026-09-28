export type ApplicationRecord = {
  id: string;
  userId: string;
  company: string;
  role: string;
  status: "draft" | "submitted" | "interview";
};

export async function listApplicationsByUser(userId: string) {
  const applications: ApplicationRecord[] = [];
  return applications.filter((application) => application.userId === userId);
}

export function assertResourceOwner(resourceUserId: string, sessionUserId: string) {
  return resourceUserId === sessionUserId;
}
