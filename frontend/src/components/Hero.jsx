import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiDocumentDownload,
  HiOutlineEye,
  HiSparkles,
  HiOutlineLocationMarker,
  HiOutlineClipboardCopy,
  HiOutlineCheck,
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import photoImg from "../assets/photo.jpg";
import { resumeConfig, getResumeFullUrl } from "../data/resumeConfig";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = getResumeFullUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-16 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Designation, Intro & CTAs (7 cols) */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Hire • Junior Full Stack Developer</span>
          </div>

          {/* Heading with Name & Designation */}
          <div className="space-y-2">
            <p className="font-mono text-sm sm:text-base text-gray-500 flex items-center gap-2">
              <span className="text-teal-600 font-bold">const</span> developer ={" "}
              <span className="text-gray-900 font-semibold">"Kazol Chandra Roy"</span>;
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Junior{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                Full Stack
              </span>{" "}
              Developer
            </h1>
            <p className="text-lg sm:text-xl font-medium text-teal-700">
              Fresh skills. Real projects. Ready to ship.
            </p>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            I build modern, performant web applications with{" "}
            <span className="text-gray-900 font-semibold">React.js</span>,{" "}
            <span className="text-gray-900 font-semibold">Next.js</span>,{" "}
            <span className="text-gray-900 font-semibold">Node.js</span>, and{" "}
            <span className="text-gray-900 font-semibold">MongoDB</span>. Computer Science graduate
            from Bangladesh University with professional experience as both a Volunteer and Consultant in
            ICT Support at UNESCO Dhaka. Passionate about engineering clean, scalable full-stack applications,
            ready to contribute immediate value and ship real features.
          </p>

          {/* Single-Click Resume Download & Usable Link Actions */}
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              {/* Direct Link to View PDF in New Tab */}
              <a
                href={resumeConfig.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
                title="Open resume in browser"
              >
                <HiOutlineEye className="text-xl" />
                <span>View Resume</span>
              </a>

              {/* Single-Click Download Button */}
              <a
                href={resumeConfig.pdfUrl}
                download={resumeConfig.downloadFileName}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-teal-500 hover:text-teal-700 px-5 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-teal-50/40"
                title="Download PDF to device"
              >
                <HiDocumentDownload className="text-xl text-teal-600" />
                <span>Download PDF</span>
              </a>

              {/* One-Click Copy Resume Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3.5 rounded-xl text-sm font-semibold transition cursor-pointer"
                title="Copy shareable resume link to clipboard"
              >
                {copied ? (
                  <>
                    <HiOutlineCheck className="text-lg text-emerald-600" />
                    <span className="text-emerald-700">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <HiOutlineClipboardCopy className="text-lg text-teal-600" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              {/* View Interactive ATS Web Resume Page */}
              <Link
                to={resumeConfig.interactiveRoute}
                className="inline-flex items-center justify-center text-sm font-semibold text-gray-600 hover:text-teal-700 px-3 py-3.5 transition"
              >
                ATS Web CV &rarr;
              </Link>
            </div>
          </div>

          {/* Social Links (Task Req 4) */}
          <div className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 font-mono">
              Connect With Me
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://github.com/kazolroy"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                title="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/kazol-roy-a33113325/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                title="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="https://wa.me/8801719381405"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Contact"
                className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                title="WhatsApp (+880 1719-381405)"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-gray-200/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5 font-mono">
              <HiSparkles className="text-teal-600" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-medium border border-gray-200">
                <FaReact className="text-cyan-500 text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-medium border border-gray-200">
                <SiNextdotjs className="text-black text-base" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-medium border border-gray-200">
                <FaNodeJs className="text-emerald-500 text-base" /> Node.js &amp; Express
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-medium border border-gray-200">
                <SiMongodb className="text-green-600 text-base" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-medium border border-gray-200">
                <SiTailwindcss className="text-teal-500 text-base" /> Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Photo Card & Sticky Note (5 cols) */}
        <div className="lg:col-span-5 relative">
          {/* Main Card Container */}
          <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-800 text-white overflow-hidden">
            {/* Accent Glow inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>

            {/* Terminal / Code Card Topbar */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="font-mono text-xs text-gray-400">@kazolroy</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Active
              </span>
            </div>

            {/* Profile Avatar / Photo Area */}
            <div className="mt-6 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-3xl bg-gradient-to-tr from-teal-500 via-cyan-500 to-blue-600 p-1 shadow-xl shadow-teal-500/25 mb-4 group">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src={photoImg}
                    alt="Kazol Chandra Roy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-xl shadow-md text-xs font-bold" title="Verified Developer">
                  ✓
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white">
                Kazol Chandra Roy
              </h2>
              <p className="text-teal-400 font-mono text-xs sm:text-sm mt-0.5">
                Junior Full Stack Developer
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                <HiOutlineLocationMarker className="text-teal-400" />
                <span>Dhaka, Bangladesh</span>
                <span>•</span>
                <span className="text-gray-300 font-mono">B.Sc. in CSE</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2.5 mt-6 pt-5 border-t border-gray-800 text-center">
              <div className="p-2.5 rounded-xl bg-gray-800/60 border border-gray-700/50">
                <span className="block text-lg font-black text-teal-400 font-mono">3.67</span>
                <span className="text-[11px] text-gray-400">CSE CGPA</span>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-800/60 border border-gray-700/50">
                <span className="block text-lg font-black text-cyan-400 font-mono">2</span>
                <span className="text-[11px] text-gray-400">Featured Apps</span>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-800/60 border border-gray-700/50">
                <span className="block text-lg font-black text-emerald-400 font-mono">UNESCO</span>
                <span className="text-[11px] text-gray-400">ICT Support</span>
              </div>
            </div>

            {/* Bottom Contact Pill */}
            <div className="mt-5 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>status: ready_to_join</span>
              <a
                href="#contact"
                className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-1"
              >
                Let's talk &rarr;
              </a>
            </div>
          </div>

          {/* Sticky Note Badge */}
          <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-4 bg-amber-300 text-amber-950 p-4 rounded-xl shadow-xl transform rotate-2 max-w-xs border border-amber-400">
            <p className="text-xs font-bold italic leading-snug">
              "Make it work, make it clear, then make it fast."
            </p>
            <span className="block text-[10px] font-mono font-bold tracking-wider text-amber-800 mt-2 uppercase">
              // Note to self
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
