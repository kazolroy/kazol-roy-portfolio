import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineDocumentDownload,
  HiOutlineHeart,
} from "react-icons/hi";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaFutbol,
  FaPlane,
  FaUsers,
} from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import photoImg from "../assets/photo.jpg";

import { resumeConfig } from "../data/resumeConfig";

const AboutMe = () => {
  const interests = [
    { name: "Full-Stack Web Apps", icon: FaLaptopCode, color: "text-teal-600 bg-teal-50" },
    { name: "Cricket", icon: MdSportsCricket, color: "text-emerald-600 bg-emerald-50" },
    { name: "Football", icon: FaFutbol, color: "text-blue-600 bg-blue-50" },
    { name: "Travelling", icon: FaPlane, color: "text-amber-600 bg-amber-50" },
    { name: "Connecting with People", icon: FaUsers, color: "text-purple-600 bg-purple-50" },
  ];

  const highlights = [
    {
      title: "Clean, Component-Driven Code",
      desc: "Writing modular, readable React & Next.js components adhering to modern architectural practices.",
    },
    {
      title: "Full-Stack API Integration",
      desc: "Connecting responsive client interfaces to Express and MongoDB REST APIs with robust error handling.",
    },
    {
      title: "UNESCO ICT Support Experience",
      desc: "Proven track record as Volunteer & Consultant at UNESCO Dhaka, managing hardware, network, and AV operations.",
    },
    {
      title: "Fast Learner & Team Player",
      desc: "Friendly, open-minded, and eager to accept feedback from senior engineers to grow rapidly.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/60">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider font-mono">
          <HiOutlineUser className="text-teal-600 text-sm" />
          <span>/about</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Curious by habit,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            careful by choice
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          A deeper look into my journey into programming, what drives my work, and who I am beyond the code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Visual Card & Quick Specs (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-teal-500/10 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-teal-500/30 shadow-md shadow-teal-500/20 shrink-0 bg-gray-900">
                <img
                  src={photoImg}
                  alt="Kazol Chandra Roy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Kazol Chandra Roy</h3>
                <p className="text-sm font-medium text-teal-600">Junior Full Stack Developer</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3.5 text-sm text-gray-600">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaGraduationCap className="text-teal-600" /> Education:
                </span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                  B.Sc. in CSE (CGPA 3.67)
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineBriefcase className="text-teal-600" /> Availability:
                </span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs">
                  Immediate Joining
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaLaptopCode className="text-teal-600" /> Core Stack:
                </span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                  React, Next.js, Node, MongoDB
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineMail className="text-teal-600" /> Communication:
                </span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                  English &amp; Bengali (Native)
                </span>
              </div>
            </div>

            {/* Outside the Code: Hobbies & Interests (Task Req 5) */}
            <div className="pt-6 mt-6 border-t border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                <HiOutlineHeart className="text-rose-500" /> Interests &amp; Activities
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${item.color} border border-gray-100`}
                    >
                      <Icon />
                      <span>{item.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Journey (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quote Block */}
          <blockquote className="border-l-4 border-teal-500 pl-4 py-1 text-gray-800 text-base sm:text-lg italic font-medium leading-relaxed bg-teal-50/40 rounded-r-xl pr-3">
            "Computer Science graduate who enjoys turning ideas into{" "}
            <span className="text-teal-700 font-bold not-italic">
              fast, reliable web apps
            </span>
            , with real-world experience as both a Volunteer and Consultant in ICT Support at UNESCO Dhaka."
          </blockquote>

          {/* Detailed Journey Narrative */}
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              My Programming Journey
            </h3>
            <p>
              I started learning programming during my undergraduate studies at <strong>Bangladesh University</strong>, graduating with a <strong>B.Sc. in Computer Science and Engineering (CGPA 3.67 / 4.00)</strong>. University coursework introduced me to foundational computer science through <strong>C, C++, Java, and Python</strong>, which sparked my passion for logic, data structures, and algorithmic problem-solving.
            </p>
            <p>
              Once I saw the creative thrill of building software that solves real user pain points, I immersed myself in modern web technologies. I dove deep into the JavaScript ecosystem, focusing on <strong>React.js</strong>, <strong>Next.js (App Router)</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight pt-2">
              The Type of Work I Enjoy
            </h3>
            <p>
              I truly enjoy building full-stack applications where a clean, responsive frontend talks smoothly to a well-designed RESTful API. I care deeply about readable and maintainable code, snappy page load times, accessible user interfaces, and layouts that look pixel-perfect across all mobile, tablet, and desktop screens.
            </p>
            <p>
              Beyond software engineering, I served as a <strong>Volunteer – ICT Support (Nov 2024 – May 2025)</strong> and subsequently as a <strong>Consultant – ICT Support (May 2025 – Sep 2025) at UNESCO Dhaka</strong>. There, I supported office-wide ICT infrastructure, resolved hardware and network issues, and managed audio-visual operations for international meetings and workshops. Currently, I am actively building production-grade web applications and seeking full-time opportunities as a <strong>Junior Full Stack Developer</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight pt-2">
              My Personality &amp; What Drives Me
            </h3>
            <p>
              I am a simple, friendly, and easygoing person who genuinely enjoys collaborating and connecting with people from diverse backgrounds. When I am away from my computer, you will find me playing <strong>cricket</strong> or <strong>football</strong>, or travelling and exploring new places across the country. I bring positive energy, dedication, and a relentless desire to learn to every team I join.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs"
              >
                <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <HiOutlineSparkles className="text-teal-600 shrink-0" />
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href={resumeConfig.pdfUrl}
              download={resumeConfig.downloadFileName}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-teal-500/20 transition-all duration-300"
            >
              <HiOutlineDocumentDownload className="text-xl" />
              <span>Download Resume PDF</span>
            </a>

            <Link
              to={resumeConfig.interactiveRoute}
              className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 hover:border-teal-500 hover:text-teal-600 px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
            >
              <span>Inspect Full CV Online &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
