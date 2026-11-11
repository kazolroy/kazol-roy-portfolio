import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiMail,
  HiArrowUp,
  HiDocumentDownload,
  HiOutlineEye,
  HiOutlineClipboardCopy,
  HiOutlineCheck,
} from "react-icons/hi";
import { resumeConfig, getResumeFullUrl } from "../data/resumeConfig";
import photoImg from "../assets/photo.jpg";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyResumeLink = () => {
    const url = getResumeFullUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="bg-white border-t border-gray-200/90 text-gray-600 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand, Photo & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="text-xl font-bold font-mono text-gray-900 flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-teal-500/40 shadow-xs group-hover:scale-105 transition-transform shrink-0 bg-gray-900">
                <img
                  src={photoImg}
                  alt="Kazol Chandra Roy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-mono text-xl text-gray-900">
                &lt;<span className="text-teal-600 font-bold">kazolroy</span> /&gt;
              </span>
            </Link>

            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              <strong>Kazol Chandra Roy</strong> &mdash; Junior Full Stack Developer specializing in React, Next.js, Node.js, Express, and MongoDB. Former ICT Support Volunteer &amp; Consultant at UNESCO Dhaka.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Hire &bull; Immediate Joining</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase font-mono tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a href="/#home" className="hover:text-teal-600 transition inline-block">
                  /home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-teal-600 transition inline-block">
                  /about
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-teal-600 transition inline-block">
                  /stack &bull; skills
                </a>
              </li>
              <li>
                <a href="/#education" className="hover:text-teal-600 transition inline-block">
                  /education
                </a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-teal-600 transition inline-block">
                  /experience
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-teal-600 transition inline-block">
                  /projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-teal-600 transition inline-block">
                  /contact
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-teal-600 font-semibold hover:underline inline-block">
                  /resume (ATS View) &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Resume Actions (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase font-mono tracking-wider">
              Connect &amp; Resume
            </h4>
            <p className="text-xs text-gray-500">
              Dhaka, Bangladesh &bull; kazolroy74@gmail.com &bull; +880 1719-381405
            </p>

            {/* Social Icons (GitHub, LinkedIn, WhatsApp, Email) */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/kazolroy"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                title="GitHub (@kazolroy)"
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href="https://www.linkedin.com/in/kazolchandraroy/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                title="LinkedIn (Kazol Roy)"
              >
                <FaLinkedin className="text-base" />
              </a>

              <a
                href="https://wa.me/8801719381405"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Contact"
                className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                title="WhatsApp (+880 1719-381405)"
              >
                <FaWhatsapp className="text-base" />
              </a>

              <a
                href="mailto:kazolroy74@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-teal-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
                title="Email (kazolroy74@gmail.com)"
              >
                <HiMail className="text-base" />
              </a>
            </div>

            {/* Clean Resume Actions (View, Download, Copy Link) */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2 text-xs">
              {/* 1. View / Open PDF */}
              <a
                href={resumeConfig.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-gray-700 hover:text-teal-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-xl transition"
              >
                <HiOutlineEye className="text-base text-teal-600" />
                <span>View Resume</span>
              </a>

              {/* 2. Download PDF */}
              <a
                href={resumeConfig.pdfUrl}
                download={resumeConfig.downloadFileName}
                className="inline-flex items-center gap-1.5 font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-2 rounded-xl transition"
              >
                <HiDocumentDownload className="text-base text-teal-600" />
                <span>Download PDF</span>
              </a>

              {/* 3. Copy Link */}
              <button
                type="button"
                onClick={handleCopyResumeLink}
                className="inline-flex items-center gap-1.5 font-semibold text-gray-700 hover:text-teal-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-xl transition cursor-pointer"
                title="Copy shareable resume link"
              >
                {copied ? (
                  <>
                    <HiOutlineCheck className="text-base text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <HiOutlineClipboardCopy className="text-base text-teal-600" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Kazol Chandra Roy. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-gray-600 hover:text-teal-600 font-medium transition cursor-pointer group"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
