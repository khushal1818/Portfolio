import { useEffect, useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "khushalbhaliya@gmail.com",
    href: "mailto:khushalbhaliya@gmail.com",
    color: "#C9A84C",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
    color: "#00D4FF",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahemedabad, Gujarat, India",
    href: "#",
    color: "#A8FF78",
  },
];

export default function Contact() {
  const ref = useRef(null);

  const [visible, setVisible] = useState(false);

  const [status, setStatus] = useState("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  const validate = () => {
    const errs = {};

    if (!form.name.trim()) {
      errs.name = "Name is required";
    }

    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errs.email = "Valid email required";
    }

    if (!form.subject.trim()) {
      errs.subject = "Subject is required";
    }

    if (form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }

    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          access_key: "333c3278-29b5-4d59-856c-2ddf7632266a",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) =>
    `w-full px-4 py-3 rounded-xl bg-[#0F1E35] border text-white placeholder-gray-500 outline-none transition-all duration-300 ${
      errors[field]
        ? "border-red-500"
        : "border-white/10 focus:border-[#C9A84C]"
    }`;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 overflow-hidden bg-[#050A14]"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A84C]/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#C9A84C] text-sm font-bold tracking-[0.3em] uppercase mb-3">
            Contact Me
          </p>

          <h2 className="text-4xl lg:text-6xl font-black text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent rounded-full" />

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Have a project idea, freelance work, or collaboration opportunity?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Side */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-5">
              {contactInfo.map(
                ({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-[#0A1628]/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${color}15`,
                      }}
                    >
                      <Icon size={24} style={{ color }} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                        {label}
                      </p>

                      <p className="text-white font-semibold">{value}</p>
                    </div>
                  </a>
                )
              )}

              {/* Status Card */}
              {/* <div className="p-6 rounded-2xl bg-gradient-to-br from-[#C9A84C]/10 to-[#E8D48E]/5 border border-[#C9A84C]/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#A8FF78] animate-pulse shadow-[0_0_12px_rgba(168,255,120,0.8)]" />

                  <span className="text-[#A8FF78] font-bold text-sm">
                    Available for Freelance
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  I’m currently available for freelance projects, internships,
                  and full-stack web development opportunities.
                </p>
              </div> */}
            </div>
          </div>

          {/* Right Side Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative p-8 rounded-3xl bg-[#0A1628]/80 border border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent pointer-events-none" />

              {status === "success" ? (
                <div className="h-[420px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#A8FF78]/10 flex items-center justify-center mb-5">
                    <CheckCircle
                      size={40}
                      className="text-[#A8FF78]"
                    />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">
                    Message Sent Successfully
                  </h3>

                  <p className="text-gray-400 max-w-md">
                    Thank you for contacting me. I’ll reply to your message as
                    soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={inputStyle("name")}
                      />

                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={inputStyle("email")}
                      />

                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project discussion"
                      className={inputStyle("subject")}
                    />

                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Message
                    </label>

                    <textarea
                      rows={6}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      className={`${inputStyle("message")} resize-none`}
                    />

                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <AlertCircle
                        size={18}
                        className="text-red-400"
                      />

                      <p className="text-red-400 text-sm">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8D48E] text-[#050A14] font-black hover:scale-[1.02] transition-all duration-300"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600 pt-2">
                    <MessageSquare size={14} />
                    Powered by Web3Forms
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}