import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaAward, FaNetworkWired } from "react-icons/fa";

const experiences = [
  {
    role: "Consultant – ICT Support",
    company: "UNESCO Dhaka",
    location: "Dhaka, Bangladesh",
    period: "15 May 2025 – 30 Sep 2025",
    type: "Consultancy • ICT Operations",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    responsibilities: [
      "Managed day-to-day ICT support operations across all teams at UNESCO Dhaka, diagnosing and resolving complex hardware, software, printing, and local network issues.",
      "Configured operating systems, workstation installations, preventive hardware maintenance, and overall organizational ICT infrastructure.",
      "Supervised digital collaboration tools, staff email systems, audio-visual conference equipment, and coordinated live technical operations for high-level meetings and national/international workshops.",
      "Provided prompt technical guidance with clear, patient communication to ensure uninterrupted office workflows.",
    ],
    technologies: [
      "ICT Operations",
      "Network Troubleshooting",
      "Hardware & Software Support",
      "Audio-Visual Systems",
      "Workstation Configuration",
      "System Administration",
    ],
  },
  {
    role: "Volunteer – ICT Support",
    company: "UNESCO Dhaka",
    location: "Dhaka, Bangladesh",
    period: "3 Nov 2024 – 3 May 2025",
    type: "Volunteer • Practical Training",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    responsibilities: [
      "Delivered technical assistance to staff members, diagnosing computer hardware, operating system setups, software updates, and local network connectivity problems.",
      "Assisted the IT department with assembling, setting up, and deploying workstations, laptops, and peripheral hardware.",
      "Arranged conference room multimedia tools, projectors, audio systems, and digital presentations for organizational training sessions and workshops.",
      "Maintained IT support logs and collaborated closely with senior consultants to optimize workstation speed and stability.",
    ],
    technologies: [
      "Technical Troubleshooting",
      "Workstation Setup",
      "Hardware Diagnostics",
      "Audio-Visual Setup",
      "ICT Support",
    ],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Web Mastery",
    desc: "Hands-on expertise across React 19, Next.js App Router, Tailwind CSS, Node.js, Express, and MongoDB, actively shipping production features.",
  },
  {
    icon: FaNetworkWired,
    title: "Proven UNESCO ICT Experience",
    desc: "Demonstrated reliability as both Volunteer and Consultant at UNESCO Dhaka, troubleshooting IT infrastructure under international standards.",
  },
  {
    icon: FaHandsHelping,
    title: "Empathetic & Clear Communicator",
    desc: "Easygoing, patient, and respectful collaborator who communicates effectively with developers, non-technical team members, and stakeholders.",
  },
  {
    icon: FaAward,
    title: "Rapid Adaptability & Drive",
    desc: "Eager to absorb constructive code reviews, follow industry best practices, and contribute immediate engineering value from day one.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/60">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider font-mono">
          <HiOutlineBriefcase className="text-teal-600 text-sm" />
          <span>/experience</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Experience
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          My professional career timeline spanning ICT consultancy and volunteer work at UNESCO Dhaka, while actively building modern full-stack web applications.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-teal-300 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span
                  className={`inline-block text-xs font-semibold font-mono px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}
                >
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-teal-700 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700 font-mono">
                  <HiOutlineCalendar className="text-teal-600" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2.5 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <HiOutlineCheckCircle className="text-teal-600 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase font-mono text-gray-400 mr-1">
                Competencies:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Hire Me Callout Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-teal-200/80 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <div className="inline-flex items-center gap-1 text-teal-700 text-xs font-bold uppercase tracking-wider font-mono">
            <HiOutlineSparkles /> Value Proposition
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Why Hire Me as a Full Stack Developer?
          </h3>
          <p className="text-sm text-gray-500">
            What I bring to your engineering team from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-teal-50/30 border border-teal-100/60"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
