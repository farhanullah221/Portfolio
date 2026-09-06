import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  Copy,
  Check,
  PhoneCall,
} from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mljejnpn");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("farhansalikh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090d16] py-20 sm:py-28 text-white"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-teal-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-400 shadow-sm shadow-teal-500/5">
            <Mail className="h-3.5 w-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something great together.
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-slate-400">
            Have a project in mind or looking for a frontend developer? I'd love
            to hear about it.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT SIDE: Updated to Match Screenshot */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-800/80 bg-[#0d111a] p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Reach Out Directly
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              I typically respond within 24 hours. Open to remote full-time,
              contract, or freelance frontend and WordPress work.
            </p>

            {/* Info Cards Stack */}
            <div className="mt-6 space-y-3.5">
              {/* Email Card with Copy */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 transition-colors hover:border-slate-700">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-white">
                      farhansalikh@gmail.com
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address"
                  className="p-1.5 text-slate-400 transition-colors hover:text-white"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-teal-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Pakistan (Remote Ready Worldwide)
                  </span>
                </div>
              </div>

              {/* Work Preference Card */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400">
                    Work Preference
                  </span>
                  <span className="text-sm font-semibold text-white">
                    🌐 Remote & On-site Opportunities{" "}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-slate-800/80" />

            {/* Developer & Professional Profiles Grid */}
            <div className="space-y-3">
              <span className="block text-xs font-mono font-medium uppercase tracking-wider text-slate-400">
                DEVELOPER & PROFESSIONAL PROFILES
              </span>

              <div className="grid grid-cols-3 gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/farhanullah221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 text-slate-300 transition-all hover:border-teal-500/50 hover:bg-slate-900 hover:text-white"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span className="text-xs font-medium">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/farhan-ullah-10206633b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 text-slate-300 transition-all hover:border-teal-500/50 hover:bg-slate-900 hover:text-white"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/923489877787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 text-slate-300 transition-all hover:border-teal-500/50 hover:bg-slate-900 hover:text-white"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="text-xs font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Completely Untouched */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
              {/* Top Gradient Highlight Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent rounded-t-3xl" />

              {/* SUCCESS MESSAGE */}
              {state.succeeded ? (
                <div className="space-y-5 py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-500/30 bg-teal-500/10 text-teal-400 shadow-lg shadow-teal-500/10">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-white">
                    Message Sent Successfully!
                  </h3>

                  <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-400">
                    Thank you for getting in touch. Your message has been
                    successfully sent. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                /* CONTACT FORM */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* NAME */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                      >
                        Your Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Farhan Salih"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 transition-all duration-200 focus:border-teal-400/80 focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-teal-400/30"
                      />

                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-xs text-rose-400"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                      >
                        Your Email
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="hello@example.com"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 transition-all duration-200 focus:border-teal-400/80 focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-teal-400/30"
                      />

                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-xs text-rose-400"
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Subject
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project Inquiry / Freelance Work"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 transition-all duration-200 focus:border-teal-400/80 focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-teal-400/30"
                    />

                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                      className="text-xs text-rose-400"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project goals, timeline, or open roles..."
                      className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 transition-all duration-200 focus:border-teal-400/80 focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-teal-400/30"
                    />

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-xs text-rose-400"
                    />
                  </div>

                  {/* FORM ERROR */}
                  {state.errors && (
                    <ValidationError
                      errors={state.errors}
                      className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-3.5 text-xs text-rose-400"
                    />
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-indigo-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:from-teal-300 hover:to-indigo-300 hover:shadow-teal-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {state.submitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
