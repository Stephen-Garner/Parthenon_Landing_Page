"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AnimateOnScroll from "./AnimateOnScroll";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").optional().or(z.literal("")),
  source: z.string().min(1, "Please let us know how you heard about us"),
});

type FormData = z.infer<typeof schema>;

const sources = [
  { value: "", label: "How did you hear about us?" },
  { value: "social", label: "Social Media" },
  { value: "referral", label: "Friend / Referral" },
  { value: "event", label: "Event" },
  { value: "search", label: "Online Search" },
  { value: "mailer", label: "Direct Mail / Flyer" },
  { value: "other", label: "Other" },
];

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="join" className="relative bg-charcoal grain-overlay py-28 lg:py-40 overflow-hidden">
      {/* Warm ambient glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #B8975A 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimateOnScroll className="mb-16 text-center">
          <span className="font-sans text-xs tracking-[0.35em] text-gold uppercase mb-4 block">
            Founding Membership
          </span>
          <h2
            className="font-serif text-cream font-light mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Be first.
            <br />
            <em className="italic text-sandstone">Join the Founding 500.</em>
          </h2>
          <p className="font-sans text-sm text-cream/55 leading-7 max-w-lg mx-auto">
            Reserve your spot now. Founding members receive priority access, locked-in rates, and
            exclusive recognition as Parthenon&apos;s original community.
          </p>
        </AnimateOnScroll>

        {/* Form or success state */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <AnimateOnScroll>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* First Name */}
                    <div className="input-gold-focus">
                      <label className="block font-sans text-xs tracking-widest uppercase text-cream/50 mb-2">
                        First Name <span className="text-gold">*</span>
                      </label>
                      <input
                        {...register("firstName")}
                        type="text"
                        autoComplete="given-name"
                        className="w-full bg-white/5 border border-white/10 text-cream font-sans text-sm px-5 py-4 placeholder-cream/25 transition-all duration-300"
                        placeholder="First name"
                      />
                      {errors.firstName && (
                        <p className="font-sans text-xs text-gold/80 mt-1">{errors.firstName.message}</p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="input-gold-focus">
                      <label className="block font-sans text-xs tracking-widest uppercase text-cream/50 mb-2">
                        Last Name <span className="text-gold">*</span>
                      </label>
                      <input
                        {...register("lastName")}
                        type="text"
                        autoComplete="family-name"
                        className="w-full bg-white/5 border border-white/10 text-cream font-sans text-sm px-5 py-4 placeholder-cream/25 transition-all duration-300"
                        placeholder="Last name"
                      />
                      {errors.lastName && (
                        <p className="font-sans text-xs text-gold/80 mt-1">{errors.lastName.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="input-gold-focus">
                      <label className="block font-sans text-xs tracking-widest uppercase text-cream/50 mb-2">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        className="w-full bg-white/5 border border-white/10 text-cream font-sans text-sm px-5 py-4 placeholder-cream/25 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="font-sans text-xs text-gold/80 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="input-gold-focus">
                      <label className="block font-sans text-xs tracking-widest uppercase text-cream/50 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        autoComplete="tel"
                        className="w-full bg-white/5 border border-white/10 text-cream font-sans text-sm px-5 py-4 placeholder-cream/25 transition-all duration-300"
                        placeholder="(801) 000-0000"
                      />
                      {errors.phone && (
                        <p className="font-sans text-xs text-gold/80 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Source dropdown */}
                  <div className="mb-8 input-gold-focus">
                    <label className="block font-sans text-xs tracking-widest uppercase text-cream/50 mb-2">
                      How did you hear about us? <span className="text-gold">*</span>
                    </label>
                    <select
                      {...register("source")}
                      className="w-full bg-white/5 border border-white/10 text-cream font-sans text-sm px-5 py-4 appearance-none cursor-pointer transition-all duration-300"
                    >
                      {sources.map((s) => (
                        <option key={s.value} value={s.value} className="bg-charcoal text-cream">
                          {s.label}
                        </option>
                      ))}
                    </select>
                    {errors.source && (
                      <p className="font-sans text-xs text-gold/80 mt-1">{errors.source.message}</p>
                    )}
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="font-sans text-xs text-gold/80 mb-4 border border-gold/20 px-4 py-3">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full text-center relative"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-3 h-3 border border-cream/50 border-t-cream rounded-full animate-spin" />
                        Reserving your spot...
                      </span>
                    ) : (
                      "Reserve My Spot"
                    )}
                  </button>

                  <p className="font-sans text-xs text-cream/30 text-center mt-5 leading-5">
                    No commitment. No payment required. We&apos;ll contact you with updates on our September
                    2026 opening.
                  </p>
                </form>
              </AnimateOnScroll>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 border-2 border-gold flex items-center justify-center mx-auto mb-8">
                <span className="text-gold text-2xl">✦</span>
              </div>
              <h3 className="font-serif text-cream text-3xl font-light mb-4">
                Welcome to the founding community.
              </h3>
              <p className="font-sans text-sm text-cream/55 max-w-md mx-auto leading-7">
                Your spot is reserved. We&apos;ll be in touch as we approach our September 2026 opening. In
                the meantime, watch for updates on the build-out and programming.
              </p>
              <div className="w-8 h-px bg-gold mx-auto mt-8" />
              <p className="font-sans text-xs text-cream/30 mt-6 tracking-widest uppercase">
                Embrace the struggle
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
