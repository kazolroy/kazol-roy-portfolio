import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiMenuAlt3,
  HiX,
  HiDocumentDownload,
  HiOutlineEye,
  HiOutlineClipboardCopy,
  HiChevronDown,
  HiOutlineCheck,
} from "react-icons/hi";
import { resumeConfig, getResumeFullUrl } from "../data/resumeConfig";
import photoImg from "../assets/photo.jpg";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Shadow and active section detection when scrolling on home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 110;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResumeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleCopyResumeLink = () => {
    const url = getResumeFullUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/80"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-12">
        {/* Brand Logo with Kazol's Photo */}
        <Link
          to="/"
          className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-teal-500/40 shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform shrink-0 bg-gray-900">
            <img
              src={photoImg}
              alt="Kazol Chandra Roy"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="tracking-tight text-gray-900">
            &lt;<span className="text-teal-600 font-bold">kazolroy</span> /&gt;
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={`relative py-1 font-mono text-sm transition-colors duration-200 ${
                    isLinkActive
                      ? "text-teal-600 font-semibold"
                      : "text-gray-600 hover:text-teal-600"
                  }`}
                >
                  /{link.name.toLowerCase()}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-teal-600 transition-all duration-300 ${
                      isLinkActive ? "w-full" : "w-0 hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right: Resume Actions & Dropdown (Task Requirement: Resume Button in Navbar) */}
        <div className="hidden md:flex items-center gap-2.5 relative" ref={dropdownRef}>
          {/* Main Resume Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-teal-500/20 hover:shadow-lg transition-all cursor-pointer"
              aria-expanded={resumeMenuOpen}
              aria-haspopup="true"
              title="Resume options"
            >
              <HiDocumentDownload className="text-lg" />
              <span>Resume</span>
              <HiChevronDown
                className={`text-sm transition-transform duration-200 ${
                  resumeMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Resume Dropdown Menu */}
            {resumeMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-teal-500/30 shadow-xs shrink-0 bg-gray-900">
                    <img
                      src={photoImg}
                      alt="Kazol Chandra Roy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900 font-mono truncate">
                      Kazol Chandra Roy
                    </p>
                    <p className="text-[11px] text-teal-600 font-medium">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* Option 1: Open PDF in New Tab */}
                <a
                  href={resumeConfig.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                >
                  <HiOutlineEye className="text-base text-teal-600 shrink-0" />
                  <div>
                    <span className="font-semibold block">Open PDF in Browser</span>
                    <span className="text-[10px] text-gray-500">View in a new tab</span>
                  </div>
                </a>

                {/* Option 2: Download PDF directly */}
                <a
                  href={resumeConfig.pdfUrl}
                  download={resumeConfig.downloadFileName}
                  onClick={() => setResumeMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                >
                  <HiDocumentDownload className="text-base text-teal-600 shrink-0" />
                  <div>
                    <span className="font-semibold block">Download PDF Resume</span>
                    <span className="text-[10px] text-gray-500">Save to your device</span>
                  </div>
                </a>

                {/* Option 3: Copy Direct Resume Link */}
                <button
                  type="button"
                  onClick={handleCopyResumeLink}
                  className="w-full text-left flex items-center gap-2.5 px-4 py-2.5 text-xs text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition cursor-pointer"
                >
                  {copied ? (
                    <HiOutlineCheck className="text-base text-emerald-600 shrink-0" />
                  ) : (
                    <HiOutlineClipboardCopy className="text-base text-teal-600 shrink-0" />
                  )}
                  <div>
                    <span className="font-semibold block">
                      {copied ? "Link Copied!" : "Copy Shareable Link"}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {copied ? "Ready to share with recruiters" : "Copy full URL to clipboard"}
                    </span>
                  </div>
                </button>

                {/* Option 4: View Interactive ATS Web Page */}
                <div className="pt-1.5 mt-1.5 border-t border-gray-100">
                  <Link
                    to={resumeConfig.interactiveRoute}
                    onClick={() => setResumeMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-teal-700 hover:bg-teal-50 transition"
                  >
                    <span>View ATS Web Resume &rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Mobile Topbar Buttons */}
        <div className="flex md:hidden items-center gap-2">
          {/* Direct link for mobile */}
          <a
            href={resumeConfig.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-teal-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
            aria-label="View Resume"
          >
            <HiOutlineEye className="text-base" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="text-2xl text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[32rem] py-5 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block py-2 font-mono text-base font-medium transition ${
                    isLinkActive ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  /{link.name.toLowerCase()}
                </a>
              </li>
            );
          })}

          {/* Mobile Resume Action Row */}
          <li className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={resumeConfig.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-xl font-semibold shadow hover:opacity-95 transition"
            >
              <HiOutlineEye className="text-xl" />
              Open Resume (PDF Link)
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={resumeConfig.pdfUrl}
                download={resumeConfig.downloadFileName}
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 bg-gray-100 text-gray-800 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition text-xs"
              >
                <HiDocumentDownload className="text-base text-teal-600" />
                Download PDF
              </a>

              <button
                type="button"
                onClick={() => {
                  handleCopyResumeLink();
                  closeMenu();
                }}
                className="flex items-center justify-center gap-1.5 bg-gray-100 text-gray-800 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition text-xs cursor-pointer"
              >
                <HiOutlineClipboardCopy className="text-base text-teal-600" />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>

            <Link
              to={resumeConfig.interactiveRoute}
              onClick={closeMenu}
              className="w-full text-center text-xs text-teal-700 font-semibold hover:underline py-1"
            >
              View ATS Web Resume &rarr;
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
