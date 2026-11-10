import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiPostman,
  SiVercel,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { HiOutlineCode, HiOutlineServer, HiOutlineTerminal, HiOutlineDatabase } from "react-icons/hi";
import { TbApi } from "react-icons/tb";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend", icon: HiOutlineServer },
  { id: "database", name: "Database", icon: HiOutlineDatabase },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50 border-cyan-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "Hooks, Router, Context API, Lifecycle, Custom Hooks, Reusable UI",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-gray-900",
    bg: "bg-gray-100 border-gray-200",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "App Router, Server Components, BetterAuth integration, API Routes",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-amber-500",
    bg: "bg-amber-50 border-amber-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "Async/Await, Promises, DOM manipulation, Array methods, ES Modules",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50 border-teal-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "Utility classes, Flex/Grid layouts, Responsive breakpoints, Custom config",
  },
  {
    name: "HTML5 & Semantic Web",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    level: 5,
    ratingText: "Advanced (5/5)",
    description: "Semantic elements, SEO optimization, Forms, Accessibility best practices",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "Flexbox, CSS Grid, Transitions, Keyframes, Custom Properties",
  },
  {
    name: "Bootstrap 5",
    category: "frontend",
    icon: SiBootstrap,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
    level: 3,
    ratingText: "Comfortable (3/5)",
    description: "Responsive grid systems, Modals, Navbar components, Utilities",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    level: 3,
    ratingText: "Comfortable (3/5)",
    description: "Event-driven runtime, NPM ecosystem, Server architecture, Async I/O",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "text-gray-800",
    bg: "bg-gray-100 border-gray-200",
    level: 3,
    ratingText: "Comfortable (3/5)",
    description: "Routing, Custom Middlewares, Error handling, Serverless Vercel rewrite",
  },
  {
    name: "RESTful APIs",
    category: "backend",
    icon: TbApi,
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "CRUD design, Status codes, JSON payloads, CORS, JWKS token verification",
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    color: "text-green-600",
    bg: "bg-green-50 border-green-100",
    level: 3,
    ratingText: "Comfortable (3/5)",
    description: "NoSQL document structure, CRUD queries, Aggregations, Indexing",
  },
  {
    name: "MongoDB Atlas",
    category: "database",
    icon: SiMongodb,
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-100",
    level: 3,
    ratingText: "Comfortable (3/5)",
    description: "Cloud clusters, Network whitelisting, Connection strings, Backups",
  },

  // Tools & Deployment
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "Branching, Pull Requests, Commit hygiene, Merge conflict resolution",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: VscVscode,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    level: 5,
    ratingText: "Daily Use (5/5)",
    description: "Debugger, Emmet shortcuts, Extensions, Snippets, Integrated terminal",
  },
  {
    name: "Vite",
    category: "tools",
    icon: SiVite,
    color: "text-purple-500",
    bg: "bg-purple-50 border-purple-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "Fast HMR, Bundling configurations, Asset optimization, Build scripts",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "API testing, Headers, Request payloads, Environment variables",
  },
  {
    name: "Firebase",
    category: "tools",
    icon: SiFirebase,
    color: "text-amber-500",
    bg: "bg-amber-50 border-amber-100",
    level: 3,
    ratingText: "Comfortable (3/5)",
    description: "Authentication (Email/Password & Google), Session handling, Token auth",
  },
  {
    name: "Vercel",
    category: "tools",
    icon: SiVercel,
    color: "text-gray-900",
    bg: "bg-gray-100 border-gray-200",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "Continuous deployments, Serverless functions, DNS configuration",
  },
  {
    name: "npm Ecosystem",
    category: "tools",
    icon: FaNpm,
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
    level: 4,
    ratingText: "Proficient (4/5)",
    description: "Package dependency management, Scripts, Semantic versioning",
  },
];

const foundationalLanguages = [
  { name: "C", desc: "Core algorithms & memory concepts" },
  { name: "C++", desc: "Object-oriented programming & STL" },
  { name: "Java", desc: "Class architectures & OOP principles" },
  { name: "Python", desc: "Scripting & computational problem-solving" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider font-mono">
          <HiOutlineCode className="text-teal-600 text-sm" />
          <span>/stack</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          My Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Skills &amp; Stack
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          The languages, frontend frameworks, backend runtimes, databases, and deployment tools I leverage daily to engineer robust web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-mono transition-all duration-300 cursor-pointer ${
              activeTab === cat.id
                ? "bg-teal-600 text-white shadow-md shadow-teal-500/25 scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-600 hover:bg-gray-50"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid (Graphical format with rating dots & levels) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:shadow-lg hover:border-teal-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon />
                  </div>

                  {/* Level text badge */}
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-teal-50 text-teal-800 border-teal-200">
                    {skill.ratingText}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-teal-600 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Graphical Rating Indicator Dots (Task Req 6) */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5" title={`Confidence: ${skill.level} out of 5`}>
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        dot <= skill.level ? "bg-teal-500" : "bg-gray-200"
                      }`}
                    ></span>
                  ))}
                </div>

                <span className="text-[11px] font-mono text-gray-400 capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Graphical Legend */}
      <p className="text-center font-mono text-xs text-gray-400 mt-8">
        // Rating dots show confidence level: 3 = Comfortable, 4 = Proficient, 5 = Daily use.
      </p>

      {/* Additional Foundations: C, C++, Java, Python (from University CSE) */}
      <div className="mt-12 bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h4 className="text-base font-bold text-gray-900 font-mono flex items-center gap-2">
              <span className="text-teal-600">&gt;</span> Also Comfortable With (Foundations)
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Programming languages studied in-depth during undergraduate Computer Science &amp; Engineering coursework.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {foundationalLanguages.map((lang) => (
            <div
              key={lang.name}
              className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 transition"
            >
              <span className="font-mono font-bold text-teal-700 text-sm block">
                {lang.name}
              </span>
              <span className="text-xs text-gray-500 mt-0.5 block leading-normal">
                {lang.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
