export type JobPayload = {
  userId: string;
  type: "profile_enrichment" | "job_matching" | "resume_tailoring";
};

export async function enqueueJob(payload: JobPayload) {
  return {
    id: crypto.randomUUID(),
    ...payload,
    state: "pending" as const,
  };
}
