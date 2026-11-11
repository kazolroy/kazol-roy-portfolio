import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
  HiOutlineClipboardCopy,
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import photoImg from "../assets/photo.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copyFeedback, setCopyFeedback] = useState("");

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(`${label} copied to clipboard!`);
    setTimeout(() => setCopyFeedback(""), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Open mailto link directly as in index1.html
    const mailtoUrl = `mailto:kazolroy74@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 7000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider font-mono">
          <HiOutlineChatAlt2 className="text-teal-600 text-sm" />
          <span>/contact</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Have a role or project{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            in mind?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Feel free to reach out directly or send a message below. I am actively looking for junior full-stack &amp; frontend roles and usually reply within a day.
        </p>
      </div>

      {/* Copy notification banner */}
      {copyFeedback && (
        <div className="max-w-xl mx-auto mb-6 p-3 bg-teal-600 text-white text-center text-xs sm:text-sm font-semibold rounded-xl shadow-lg transition-all animate-bounce">
          {copyFeedback}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info Cards & Social Links (Task Req 10 & 4) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Profile Avatar & Badge */}
            <div className="flex items-center gap-3.5 pb-5 border-b border-gray-100">
              <div className="w-13 h-13 rounded-2xl overflow-hidden border-2 border-teal-500/30 shadow-xs shrink-0 bg-gray-900">
                <img
                  src={photoImg}
                  alt="Kazol Chandra Roy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-gray-900 truncate">
                  Kazol Chandra Roy
                </h3>
                <p className="text-xs text-teal-600 font-semibold font-mono">
                  Junior Full Stack Developer
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] text-gray-500 font-mono">
                    Available for Immediate Hire
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base font-bold text-gray-900">
                Contact Information
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Reach me directly through email, phone, WhatsApp, or connect across social channels.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {/* Email (Task Req 10) */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal-200 transition group">
                <a
                  href="mailto:kazolroy74@gmail.com"
                  className="flex items-center gap-3.5 min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <HiOutlineMail className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-gray-500 font-medium block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors truncate block">
                      kazolroy74@gmail.com
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy("kazolroy74@gmail.com", "Email")}
                  className="p-2 text-gray-400 hover:text-teal-600 rounded-lg hover:bg-white transition cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  <HiOutlineClipboardCopy className="text-lg" />
                </button>
              </div>

              {/* Phone (Task Req 10) */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal-200 transition group">
                <a
                  href="tel:+8801719381405"
                  className="flex items-center gap-3.5 min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <HiOutlinePhone className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-gray-500 font-medium block">
                      Phone Number
                    </span>
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors font-mono">
                      +880 1719-381405
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy("+8801719381405", "Phone")}
                  className="p-2 text-gray-400 hover:text-teal-600 rounded-lg hover:bg-white transition cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  <HiOutlineClipboardCopy className="text-lg" />
                </button>
              </div>

              {/* WhatsApp (Task Req 10 - Optional/Included) */}
              <a
                href="https://wa.me/8801719381405"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/70 transition group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-emerald-800 font-medium block">
                      WhatsApp (Direct Chat)
                    </span>
                    <span className="text-sm font-semibold text-emerald-950 font-mono">
                      +880 1719-381405
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-700 px-2 py-1 rounded bg-white shadow-2xs">
                  Chat &rarr;
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">
                    Current Location
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    Dhaka, Bangladesh (Open to Remote / On-Site)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Profile Links (Task Req 4) */}
            <div className="pt-4 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3 font-mono">
                Social Media Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/kazolroy"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                  title="GitHub (@kazolroy)"
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kazolchandraroy/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>

                <a
                  href="https://wa.me/8801719381405"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Contact"
                  className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                  title="WhatsApp (+880 1719-381405)"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Messaging Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-xs">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Write your inquiry, project proposal, or job role details below.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <HiOutlineCheckCircle className="text-2xl text-emerald-600 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Email client triggered!</p>
                  <p className="text-xs text-emerald-700">
                    Thank you! Your default mail client has opened to send the message.
                  </p>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {status.error && (
              <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                  Subject / Opportunity
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Junior Developer Opening / Freelance Collaboration"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase font-mono mb-1.5">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Kazol, we came across your portfolio and would like to discuss a Junior Full Stack role at our company..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-teal-500/25 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-sm"
              >
                <span>Write Email</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
