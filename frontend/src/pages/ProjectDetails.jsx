import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import {
  HiArrowLeft,
  HiExternalLink,
  HiCode,
  HiLightBulb,
  HiShieldCheck,
  HiArrowRight,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <main className="min-h-[75vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h2>
          <p className="text-gray-600 text-sm mb-6">
            The project you are looking for does not exist or may have been updated.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  // Next project navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gray-50/70 text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold font-mono text-gray-600 hover:text-teal-600 transition"
          >
            <HiArrowLeft /> cd ../projects
          </Link>

          <Link
            to="/resume"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:underline"
          >
            <HiOutlineDocumentText className="text-base" />
            <span>View Full Resume</span>
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Screenshot Container */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md aspect-video bg-gray-900">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title, Subtitle & Category */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {project.category && (
                <span className="inline-block bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold font-mono px-3 py-1 rounded-full">
                  {project.category}
                </span>
              )}
              <span className="text-xs text-gray-500 font-mono">
                Project #{project.id} of {projects.length}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {project.name}
            </h1>
            <p className="text-base sm:text-lg text-teal-700 font-semibold font-mono">
              {project.subtitle}
            </p>
          </div>

          {/* Action Links Bar (Task Req 9: Live Link & GitHub Client Repo) */}
          <div className="flex flex-wrap items-center gap-3 pt-2 pb-4 border-b border-gray-100">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-teal-500/20 hover:shadow-lg transition text-sm"
              >
                <span>Live Project Demo</span>
                <HiExternalLink className="text-base" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition text-sm"
              >
                <FaGithub className="text-lg" />
                <span>Client Repository (GitHub)</span>
              </a>
            )}
          </div>

          {/* Main Technology Stack (Task Req 9) */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
              <HiCode className="text-teal-600 text-base" /> Main Technology Stack Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-teal-50 text-teal-900 border border-teal-100 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold font-mono shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Brief & Full Description (Task Req 9) */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
            {project.points && (
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pt-1">
                {project.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Challenges Faced While Developing the Project (Task Req 9) */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-4 p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <HiShieldCheck className="text-emerald-600 text-2xl" />
                <span>Challenges Faced &amp; Technical Solutions</span>
              </h2>
              <ul className="space-y-3 text-sm text-gray-700">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Potential Improvements and Future Plans (Task Req 9) */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-4 p-6 rounded-2xl bg-teal-50/50 border border-teal-200/70">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <HiLightBulb className="text-amber-500 text-2xl" />
                <span>Potential Improvements &amp; Future Plans</span>
              </h2>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {project.future.map((enhancement, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{enhancement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Project Navigation */}
          <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold font-mono text-gray-600 hover:text-teal-600 transition"
            >
              <HiArrowLeft /> All Projects
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition"
            >
              <span>Next Project: {nextProject.name}</span>
              <HiArrowRight className="text-base" />
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
