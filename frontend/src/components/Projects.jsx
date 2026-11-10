import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider font-mono">
          <HiOutlineSparkles className="text-teal-600 text-sm" />
          <span>/projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Projects
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Showcasing real-world full-stack web applications I engineered to solve practical problems, demonstrating component architecture, secure API integration, and clean responsive design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Project Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100 border-b border-gray-100">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-xs text-teal-300 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md shadow-xs">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-teal-700 font-semibold mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {project.short}
                </p>

                {/* Key Bullet Highlights */}
                {project.points && (
                  <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                    {project.points.slice(0, 2).map((point, idx) => (
                      <li key={idx} className="line-clamp-1">{point}</li>
                    ))}
                  </ul>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-teal-50 text-teal-800 border border-teal-100 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-100 text-gray-600 font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions (Task Req 9: View More / Details button + links) */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition group/btn"
                >
                  <span>View Details</span>
                  <HiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} Client Source Code on GitHub`}
                      className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
                      title="GitHub Client Repo"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} Live Demo`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition"
                      title="Live Demo"
                    >
                      <span>Live Site</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* GitHub Repository Callout */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Want to explore more codebases, repositories, and experiments? Visit my{" "}
          <a
            href="https://github.com/kazolroy"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-teal-600 hover:underline inline-flex items-center gap-1 font-mono"
          >
            GitHub Profile (@kazolroy) <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
