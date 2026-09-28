"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState =
  | { status: "idle"; message: "" }
  | { status: "error"; message: string }
  | { status: "success"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setState({ status: "idle", message: "" });

    const formData = new FormData(event.currentTarget);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setState({ status: "error", message: data.message ?? "Unable to submit your message." });
      setSubmitting(false);
      return;
    }

    setState({ status: "success", message: "Thanks. Our team will reply shortly." });
    event.currentTarget.reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="contact-status">
      <div>
        <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-brand-navy">
          Full name
        </label>
        <Input id="fullName" name="fullName" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-navy">
          Work email
        </label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-navy">
          Message
        </label>
        <Textarea id="message" name="message" required minLength={20} />
      </div>
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send message"}
      </Button>
      <p id="contact-status" className="text-sm text-brand-muted" role="status" aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
