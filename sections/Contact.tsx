"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const serviceOptions = [
  "Consulting",
  "Training / Education",
  "Mentoring",
  "Negotiation",
  "General enquiry",
];

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          organisation: formData.get("organisation"),
          service: formData.get("service"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thanks, your message has been sent. We will be in touch shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atria-600 sm:text-sm sm:tracking-[0.25em]">
            Contact Us
          </p>

          <h2 className="mt-4 text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">
            Start a conversation with Atria.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Get in touch to discuss your organisation&apos;s supply chain or training
            support requirements.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-atria-100 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)] sm:p-7">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">
              Send an Enquiry
            </h3>

            <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                autoComplete="name"
                className="rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition duration-300 focus:border-atria-600 focus:ring-4 focus:ring-atria-100 sm:py-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                autoComplete="email"
                className="rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition duration-300 focus:border-atria-600 focus:ring-4 focus:ring-atria-100 sm:py-3"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  autoComplete="tel"
                  className="rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition duration-300 focus:border-atria-600 focus:ring-4 focus:ring-atria-100 sm:py-3"
                />

                <input
                  type="text"
                  name="organisation"
                  placeholder="Company / Organisation (optional)"
                  autoComplete="organization"
                  className="rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition duration-300 focus:border-atria-600 focus:ring-4 focus:ring-atria-100 sm:py-3"
                />
              </div>

              <select
                name="service"
                defaultValue=""
                className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-600 outline-none transition duration-300 focus:border-atria-600 focus:ring-4 focus:ring-atria-100 sm:py-3"
              >
                <option value="">Service / Interest (optional)</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="How can we help?"
                required
                className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition duration-300 focus:border-atria-600 focus:ring-4 focus:ring-atria-100"
              />

              {status.message && (
                <p
                  className={`rounded-xl border px-4 py-3 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-atria-100 bg-atria-50 text-atria-700"
                      : "border-red-100 bg-red-50 text-red-700"
                  }`}
                  role={status.type === "error" ? "alert" : "status"}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-atria-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-atria-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-fit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="grid gap-5 sm:gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-atria-100 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)] sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Contact Information
              </h3>

              <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2 lg:grid-cols-1">
                <p>
                  <span className="font-semibold text-slate-900">
                    Declan McDonnell
                  </span>
                  <br />
                  <a
                    href="tel:+353862520345"
                    className="transition duration-300 hover:text-atria-600"
                  >
                    +353 86 2520345
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-slate-900">
                    Sharon Byrne
                  </span>
                  <br />
                  <a
                    href="tel:+353868213963"
                    className="transition duration-300 hover:text-atria-600"
                  >
                    +353 86 8213963
                  </a>
                </p>

                <p className="sm:col-span-2 lg:col-span-1">
                  <span className="font-semibold text-slate-900">
                    Address
                  </span>
                  <br />
                  22H Axis Business Park
                  <br />
                  Tullamore, Co. Offaly
                  <br />
                  R35 YX52
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-atria-100 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)]">
              <iframe
                src="https://www.google.com/maps?q=53.288779,-7.515590&z=15&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="h-56 w-full border-0 sm:h-72 lg:h-64"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-5 aspect-[16/8] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-atria-100 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,0.4)] sm:mt-6 lg:aspect-[16/7]">
          <Image
            src="/images/office.png"
            alt="Atria office"
            fill
            sizes="(min-width: 1152px) 1152px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
