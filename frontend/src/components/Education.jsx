import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaGraduationCap, FaAward, FaUniversity } from "react-icons/fa";

const educationHistory = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)",
    institution: "Bangladesh University",
    location: "Dhaka, Bangladesh",
    period: "2018 – 2022",
    grade: "CGPA: 3.67 / 4.00",
    badge: "Graduated with High Merit",
    description:
      "Completed a rigorous four-year undergraduate curriculum in computer science. Built a rock-solid foundation in computational logic, algorithmic complexity, software development lifecycles, and database engineering through hands-on lab projects.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++, Java)",
      "Database Management Systems (DBMS)",
      "Web Technologies & Engineering",
      "Software Engineering & Design Patterns",
      "Python Programming",
      "Operating Systems & Computer Networks",
      "Discrete Mathematics",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Saidpur Govt. Science College",
    location: "Saidpur, Nilphamari, Bangladesh",
    period: "2010 – 2013",
    grade: "GPA: 4.20 / 5.00",
    badge: "Science Division",
    description:
      "Higher secondary education with a major in Science, developing analytical thinking, scientific methodology, and higher-level mathematical problem-solving skills.",
    coursework: [
      "Higher Mathematics",
      "Physics",
      "Chemistry",
      "Information & Communication Technology (ICT)",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Sonapukur Surabhy High School",
    location: "Saidpur, Nilphamari, Bangladesh",
    period: "2008 – 2010",
    grade: "GPA: 5.00 / 5.00 (A+)",
    badge: "Distinction (A+)",
    description:
      "Graduated secondary school with full distinction (GPA 5.00) in the Science group, establishing foundational academic curiosity and dedication.",
    coursework: ["General Science", "Advanced Mathematics", "Physics", "Chemistry"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider font-mono">
          <HiOutlineAcademicCap className="text-teal-600 text-sm" />
          <span>/education</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Educational{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Qualifications
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          My academic trajectory and university coursework that shaped my algorithmic reasoning, analytical rigor, and computer science mindset.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Academic Degrees Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-teal-600" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu, idx) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-teal-200 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1.5 ${
                    idx === 0
                      ? "bg-gradient-to-b from-teal-600 to-cyan-600"
                      : "bg-gray-300"
                  }`}
                ></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <span className="inline-block text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700 mb-1.5">
                      {edu.badge}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-teal-700 flex items-center gap-1.5 mt-0.5">
                      <FaUniversity className="text-teal-600 text-xs" />
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold font-mono px-3 py-1 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1 font-mono">
                    <HiOutlineBookOpen className="text-teal-600 text-sm" />
                    Key Subjects &amp; Practical Labs
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-700 border border-gray-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Academic Highlights & Takeaways (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaAward className="text-amber-500" />
            <span>Academic Milestones</span>
          </h3>

          <div className="space-y-4">
            {/* CSE Degree Highlight Card */}
            <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-xs hover:border-teal-200 transition-all">
              <span className="text-xs font-bold font-mono text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                B.Sc. in CSE (2018–2022)
              </span>
              <h4 className="font-bold text-gray-900 text-sm mt-3">
                High Academic Standing
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Graduated with a <strong>CGPA of 3.67 / 4.00</strong> from Bangladesh University, completing 140+ credits of theoretical and laboratory coursework.
              </p>
            </div>

            {/* Solid Foundations Card */}
            <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-xs hover:border-teal-200 transition-all">
              <span className="text-xs font-bold font-mono text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                Foundations
              </span>
              <h4 className="font-bold text-gray-900 text-sm mt-3">
                Algorithmic &amp; OOP Foundations
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Extensive hands-on lab projects in C, C++, Java, and Python instilled disciplined memory management, clean code architecture, and modular system design.
              </p>
            </div>

            {/* Continuous Learning Callout Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-700 via-cyan-800 to-gray-900 text-white shadow-md">
              <h4 className="font-bold text-base mb-1.5 flex items-center gap-2">
                <span>Theory to Practice</span>
              </h4>
              <p className="text-xs text-teal-100 leading-relaxed mb-4">
                Bridged theoretical computer science concepts into production-grade web applications using React, Next.js, and Node.js.
              </p>
              <span className="inline-block bg-white/15 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 font-mono">
                Ready for Engineering Teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
