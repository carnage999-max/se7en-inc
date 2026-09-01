"use client";

import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";

const TURNSTILE_ACTION = "contact_form";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type TurnstileRenderOptions = {
  sitekey: string;
  action?: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible";
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isTurnstileReady, setIsTurnstileReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  function resetTurnstileWidget() {
    setTurnstileToken("");
    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  }

  useEffect(() => {
    if (
      !isTurnstileReady ||
      !TURNSTILE_SITE_KEY ||
      !turnstileContainerRef.current ||
      !window.turnstile ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      action: TURNSTILE_ACTION,
      theme: "dark",
      size: "flexible",
      callback: (token) => {
        setTurnstileToken(token);
        setStatus("idle");
      },
      "error-callback": () => {
        setTurnstileToken("");
        setStatus("error");
        setStatusMessage("Security check could not load. Please refresh and try again.");
      },
      "expired-callback": () => {
        setStatus("error");
        setStatusMessage("Security check expired. Please complete it again.");
        resetTurnstileWidget();
      },
      "timeout-callback": () => {
        setStatus("error");
        setStatusMessage("Security check timed out. Please complete it again.");
        resetTurnstileWidget();
      },
    });

    return () => {
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [isTurnstileReady]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") {
      return;
    }

    if (!TURNSTILE_SITE_KEY) {
      setStatus("error");
      setStatusMessage("Security check is temporarily unavailable. Please try again shortly.");
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setStatusMessage("Please complete the security check before submitting.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Request failed");
      }

      form.reset();
      resetTurnstileWidget();
      setStatus("success");
    } catch (error) {
      resetTurnstileWidget();
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Send failed.");
    }
  };

  return (
    <div className="space-y-7">
      {TURNSTILE_SITE_KEY ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setIsTurnstileReady(true)}
          onError={() => {
            setStatus("error");
            setStatusMessage("Security check could not load. Please refresh and try again.");
          }}
        />
      ) : null}

      <h3 className="font-display text-2xl text-marble">Corporate Engagement Only</h3>
      <p>
        SE7EN EQUITY HOLDINGS INC. engages through institutional channels: venture governance, intellectual property frameworks, and
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

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-[rgba(193,160,88,0.9)]">Security Check</span>
          {TURNSTILE_SITE_KEY ? (
            <div ref={turnstileContainerRef} />
          ) : (
            <p className="text-sm text-[rgba(236,120,92,0.9)]">
              Security check is temporarily unavailable. Please try again shortly.
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="btn-gold inline-flex items-center justify-center rounded-md px-6 py-3 text-xs uppercase tracking-[0.16em]"
            disabled={status === "sending" || !TURNSTILE_SITE_KEY}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "success" && (
            <span className="text-xs uppercase tracking-[0.16em] text-[rgba(193,160,88,0.9)]">Message sent.</span>
          )}
          {status === "error" && (
            <span className="text-xs uppercase tracking-[0.16em] text-[rgba(236,120,92,0.9)]">
              {statusMessage || "Send failed."}
            </span>
          )}
        </div>
      </form>

      <div className="rounded-2xl border border-stone/35 bg-[rgba(14,13,11,0.72)] p-6 sm:p-7">
        <p className="text-sm uppercase tracking-[0.14em] text-[rgba(193,160,88,0.9)]">Disclaimer</p>
        <p className="mt-3 text-base leading-8 text-muted">
          SE7EN EQUITY HOLDINGS INC. materials are provided for informational purposes only. No public claims of partnership,
          endorsement, or guarantees are made on this site.
        </p>
      </div>
    </div>
  );
}
