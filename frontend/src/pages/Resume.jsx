import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
  HiDocumentDownload,
  HiOutlineClipboardCopy,
  HiOutlineCheck,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import photoImg from "../assets/photo.jpg";
import { resumeConfig, getResumeFullUrl } from "../data/resumeConfig";

const Resume = () => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    const url = getResumeFullUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 hover:text-teal-700 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Copy Shareable Resume Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-3.5 py-2.5 rounded-lg shadow-xs transition cursor-pointer"
            title="Copy direct link to clipboard"
          >
            {copied ? (
              <>
                <HiOutlineCheck className="text-base text-emerald-600" />
                <span className="text-emerald-700 font-medium">Link Copied!</span>
              </>
            ) : (
              <>
                <HiOutlineClipboardCopy className="text-base text-teal-600" />
                <span>Copy Shareable Link</span>
              </>
            )}
          </button>

          {/* Open Raw PDF in New Tab */}
          <a
            href={resumeConfig.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-3.5 py-2.5 rounded-lg shadow-xs transition"
            title="Open raw PDF document"
          >
            <HiExternalLink className="text-base text-teal-600" />
            <span>Open PDF File</span>
          </a>

          {/* Direct Download PDF Button */}
          <a
            href={resumeConfig.pdfUrl}
            download={resumeConfig.downloadFileName}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition"
          >
            <HiDocumentDownload className="text-lg" />
            <span>Download PDF</span>
          </a>

          {/* Print / Save as PDF Button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-lg shadow-xs transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/80 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-teal-500/30 shadow-sm shrink-0 bg-gray-100">
                <img
                  src={photoImg}
                  alt="Kazol Chandra Roy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                  KAZOL CHANDRA ROY
                </h1>
                <p className="text-base sm:text-lg font-semibold text-teal-700 mt-0.5 font-mono">
                  Junior Full Stack Developer
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Fresh skills. Real projects. Ready to ship.
                </p>
              </div>
            </div>

            {/* Quick Badges / Availability */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open for Junior Full Stack Roles
              </span>
              <span className="text-xs text-gray-500 mt-1 font-mono">
                Available to join immediately
              </span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100">
            <a
              href="mailto:kazolroy74@gmail.com"
              className="flex items-center gap-1.5 hover:text-teal-700 transition"
            >
              <HiMail className="text-teal-600 text-base shrink-0" />
              <span className="truncate">kazolroy74@gmail.com</span>
            </a>

            <a
              href="tel:+8801719381405"
              className="flex items-center gap-1.5 hover:text-teal-700 transition"
            >
              <HiPhone className="text-teal-600 text-base shrink-0" />
              <span>+880 1719-381405</span>
            </a>

            <a
              href="https://wa.me/8801719381405"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-700 transition"
            >
              <FaWhatsapp className="text-emerald-600 text-base shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://github.com/kazolroy"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-900 transition"
            >
              <FaGithub className="text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kazol-roy-a33113325/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-700 transition"
            >
              <FaLinkedin className="text-blue-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>

            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-teal-600 text-base shrink-0" />
              <span>Dhaka, BD</span>
            </div>
          </div>
        </header>

        {/* Section: Career Objective */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-teal-600 rounded-sm"></span>
            Career Objective
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Passionate Junior Full Stack Developer with hands-on expertise building modern, performant web applications with <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. A Computer Science graduate from Bangladesh University (CGPA 3.67 / 4.00) with proven professional experience as both a Volunteer and Consultant in ICT Support at UNESCO Dhaka. Dedicated to writing clean, maintainable, and accessible code with strong attention to UX. Seeking a full-stack or frontend engineering role to deliver high-quality digital products and contribute immediate value.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-teal-600 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Languages:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                JavaScript (ES6+), HTML5, CSS3, C, C++, Java, Python
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Frameworks &amp; Libraries:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                React.js, Next.js (App Router), Node.js, Express.js, Tailwind CSS, DaisyUI, Bootstrap 5
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Databases &amp; Authentication:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                MongoDB, MongoDB Atlas, Firebase Authentication, BetterAuth, REST APIs, JWKS/jose
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Tools &amp; Deployment:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Git, GitHub, VS Code, Vite, npm, Postman, Vercel
              </p>
            </div>
          </div>
        </section>

        {/* Section: Professional Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-teal-600 rounded-sm"></span>
            Professional Experience
          </h2>

          <div className="space-y-4">
            {/* Role 1: Consultant – ICT Support, UNESCO */}
            <div className="border-l-2 border-blue-600 pl-4 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    Consultant – ICT Support
                  </h3>
                  <p className="text-xs font-semibold text-blue-700">
                    UNESCO Dhaka • Dhaka, Bangladesh
                  </p>
                </div>
                <span className="text-xs font-mono font-medium text-gray-500">
                  15 May 2025 – 30 Sep 2025
                </span>
              </div>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Managed day-to-day ICT support operations across all teams at UNESCO Dhaka, troubleshooting hardware, software, printing, and network infrastructure.
                </li>
                <li>
                  Configured workstations, operating systems, and preventative hardware maintenance while managing digital email systems and ICT stability.
                </li>
                <li>
                  Coordinated audio-visual setups and live technical operations during high-level meetings and national/international workshops.
                </li>
              </ul>
            </div>

            {/* Role 2: Volunteer – ICT Support, UNESCO */}
            <div className="border-l-2 border-emerald-600 pl-4 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    Volunteer – ICT Support
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700">
                    UNESCO Dhaka • Dhaka, Bangladesh
                  </p>
                </div>
                <span className="text-xs font-mono font-medium text-gray-500">
                  3 Nov 2024 – 3 May 2025
                </span>
              </div>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Delivered hands-on IT support to staff members, diagnosing computer hardware, operating system updates, software setups, and local network issues.
                </li>
                <li>
                  Assisted the IT department with workstation assembly, equipment deployments, and multimedia conference room preparations.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-teal-600 rounded-sm"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1: StudioSpace */}
            <div className="border-l-2 border-teal-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  StudioSpace – Creative Workspace &amp; Studio Booking Platform
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-teal-700">
                  <a href="https://studiospace-client-mu.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/kazolroy/studiospace-client" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                Tech Stack: React, Vite, React Router, Tailwind CSS, Swiper, Firebase Auth, Node.js, Express.js, MongoDB Atlas, Vercel
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Engineered an hourly studio booking marketplace with real-time double booking prevention via server-side slot overlap checks (HTTP 409).
                </li>
                <li>
                  Implemented token authentication without service account secrets using jose verified against Google JWKS with strict ownership validation on delete/update routes.
                </li>
                <li>
                  Built a host portal for listing creative spaces, category and price filtering, and customer reviews with rating calculations.
                </li>
              </ul>
            </div>

            {/* Project 2: BazarDor */}
            <div className="border-l-2 border-cyan-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  BazarDor (বাজার দর) – Daily Essential Commodity Price Tracker
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-cyan-700">
                  <a href="https://b14-a7-bazar-dor-792d.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/kazolroy/B14-A7-Bazar-Dor" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                Tech Stack: Next.js (App Router), Tailwind CSS, DaisyUI, BetterAuth, MongoDB, react-hot-toast
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Created a daily grocery market tracker highlighting rising/falling trends with real-time percentage indicators.
                </li>
                <li>
                  Implemented protected product detail views with BetterAuth session management on the Next.js App Router.
                </li>
                <li>
                  Built a smooth continuous horizontal price alert ticker and dynamic sorting (top 6 increases/decreases).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-teal-600 rounded-sm"></span>
            Educational Qualifications
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-bold text-gray-900">
                  Bachelor of Science in Computer Science &amp; Engineering (CSE)
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Bangladesh University • Dhaka, Bangladesh
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Relevant Coursework: Data Structures &amp; Algorithms, OOP (C++, Java), DBMS, Web Technologies, Software Engineering, Python.
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-mono sm:text-right shrink-0 mt-1 sm:mt-0">
                <span>2018 – 2022</span>
                <span className="block text-teal-700 font-semibold">CGPA: 3.67 / 4.00</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between pt-2 border-t border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900">
                  Higher Secondary Certificate (HSC) – Science
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Saidpur Govt. Science College • Saidpur, Bangladesh
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-mono sm:text-right shrink-0 mt-1 sm:mt-0">
                <span>2010 – 2013</span>
                <span className="block text-gray-700 font-semibold">GPA: 4.20 / 5.00</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between pt-2 border-t border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900">
                  Secondary School Certificate (SSC) – Science
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Sonapukur Surabhy High School • Saidpur, Bangladesh
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-mono sm:text-right shrink-0 mt-1 sm:mt-0">
                <span>2008 – 2010</span>
                <span className="block text-gray-700 font-semibold">GPA: 5.00 / 5.00 (A+)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Languages & Soft Skills */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-teal-600 rounded-sm"></span>
            Languages &amp; Interpersonal Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Languages:</span>
              <p>Bengali (Native), English (Professional Working Proficiency).</p>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Interpersonal Skills:</span>
              <p>Collaborative Teamwork, Adaptability, Clear Communication, Problem Solving, Time Management.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
