import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

const contactMethods = [
  {
    name: "Email",
    value: "farhansalikh@gmail.com",
    href: "mailto:farhansalikh@gmail.com",
    icon: Mail,
    color: "hover:border-teal-500/40 hover:text-teal-400",
    badge: "Direct Mail",
  },
  {
    name: "WhatsApp",
    value: "+92 348 9877787",
    href: "https://wa.me/923489877787",
    icon: MessageSquare,
    color: "hover:border-emerald-500/40 hover:text-emerald-400",
    badge: "Quick Chat",
  },
  {
    name: "Facebook",
    value: "facebook.com",
    href: "https://www.facebook.com/share/18uSfV4WhS/",
    icon: ExternalLink,
    color: "hover:border-blue-500/40 hover:text-blue-400",
    badge: "Social Profile",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/farhansalih",
    href: "https://www.linkedin.com/in/farhan-ullah-10206633b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: ExternalLink,
    color: "hover:border-blue-500/40 hover:text-blue-400",
    badge: "Professional",
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("mljejnpn");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090d16] py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-teal-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-400">
            <Mail className="h-3.5 w-3.5" />
            <span>CONTACT</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something great together.
          </h2>

          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            Have a project in mind or looking for a frontend developer? I'd love
            to hear about it.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-4 lg:col-span-5">
            <h3 className="mb-6 text-xl font-bold text-white">
              Reach out directly
            </h3>

            <div className="space-y-3">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;

                return (
                  <a
                    key={method.name}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900/80 ${method.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-slate-800/70 p-2.5 text-slate-300 transition-colors group-hover:text-teal-400">
                        <IconComponent className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-xs font-medium text-slate-400">
                          {method.name}
                        </div>

                        <div className="text-sm font-semibold text-slate-200 transition-colors group-hover:text-white sm:text-base">
                          {method.value}
                        </div>
                      </div>
                    </div>

                    <span className="rounded-md bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-400 transition-colors group-hover:bg-slate-800">
                      {method.badge}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              {/* SUCCESS MESSAGE */}
              {state.succeeded ? (
                <div className="space-y-4 py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
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
                        className="block text-xs font-medium text-slate-300"
                      >
                        Your Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Farhan Salih"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 transition-all duration-200 focus:border-teal-400/80 focus:outline-none focus:ring-1 focus:ring-teal-400/30"
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
                        className="block text-xs font-medium text-slate-300"
                      >
                        Your Email
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="hello@example.com"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 transition-all duration-200 focus:border-teal-400/80 focus:outline-none focus:ring-1 focus:ring-teal-400/30"
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
                      className="block text-xs font-medium text-slate-300"
                    >
                      Subject
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project Inquiry / Freelance Work"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 transition-all duration-200 focus:border-teal-400/80 focus:outline-none focus:ring-1 focus:ring-teal-400/30"
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
                      className="block text-xs font-medium text-slate-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project goals, timeline, or open roles..."
                      className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 transition-all duration-200 focus:border-teal-400/80 focus:outline-none focus:ring-1 focus:ring-teal-400/30"
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
                      className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-400"
                    />
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-indigo-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:from-teal-300 hover:to-indigo-300 hover:shadow-teal-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
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
