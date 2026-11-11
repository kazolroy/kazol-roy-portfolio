import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
} from "react-icons/hi";

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

    </section>
  );
};

export default Experience;
