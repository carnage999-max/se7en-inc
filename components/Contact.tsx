"use client";

import { FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") {
      return;
    }

    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-7">
      <h3 className="font-display text-2xl text-marble">Corporate Engagement Only</h3>
      <p>
        SE7EN INC. engages through institutional channels: venture governance, intellectual property frameworks, and
        long-term strategic alignment.
      </p>
      <p>Public inquiries, speculative proposals, and unsolicited pitches are not considered.</p>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-stone/35 bg-[rgba(12,11,9,0.6)] p-6 sm:p-7">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.14em] text-[rgba(193,160,88,0.9)]" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-stone/30 bg-transparent px-4 py-3 text-sm text-marble outline-none focus:border-[rgba(193,160,88,0.6)]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.14em] text-[rgba(193,160,88,0.9)]" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-stone/30 bg-transparent px-4 py-3 text-sm text-marble outline-none focus:border-[rgba(193,160,88,0.6)]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.14em] text-[rgba(193,160,88,0.9)]" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            className="w-full resize-none rounded-md border border-stone/30 bg-transparent px-4 py-3 text-sm text-marble outline-none focus:border-[rgba(193,160,88,0.6)]"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="btn-gold inline-flex items-center justify-center rounded-md px-6 py-3 text-xs uppercase tracking-[0.16em]"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "success" && (
            <span className="text-xs uppercase tracking-[0.16em] text-[rgba(193,160,88,0.9)]">Message sent.</span>
          )}
          {status === "error" && (
            <span className="text-xs uppercase tracking-[0.16em] text-[rgba(236,120,92,0.9)]">Send failed.</span>
          )}
        </div>
      </form>

      <div className="rounded-2xl border border-stone/35 bg-[rgba(14,13,11,0.72)] p-6 sm:p-7">
        <p className="text-sm uppercase tracking-[0.14em] text-[rgba(193,160,88,0.9)]">Disclaimer</p>
        <p className="mt-3 text-base leading-8 text-muted">
          SE7EN INC. materials are provided for informational purposes only. No public claims of partnership,
          endorsement, or guarantees are made on this site.
        </p>
      </div>
    </div>
  );
}
