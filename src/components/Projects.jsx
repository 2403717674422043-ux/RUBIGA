import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ArrowUpRight, Github, Sparkles, Layers } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & ML', 'Full Stack'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-ice-200 text-xs font-semibold text-ice-700 uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5 text-ice-500" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A collection of machine learning systems, citation-aware RAG assistants, and full-stack web applications developed during my postgraduate studies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-white text-ice-700 shadow-sm border border-sky-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-ice-300 p-7 sm:p-8 shadow-xs hover:shadow-ice-card transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Card Bar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ice-100/80 text-ice-800 text-xs font-bold border border-ice-200">
                    <Sparkles className="w-3 h-3 text-ice-600" />
                    {project.category}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-ice-600 hover:border-ice-300 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-ice-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Card Elements */}
              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-200/60">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Explore Details CTA Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white hover:bg-ice-50 border border-slate-200 hover:border-ice-300 text-xs font-bold text-slate-800 hover:text-ice-700 transition-all duration-200 shadow-xs group/btn"
                >
                  <span>Explore Architecture & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ice-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
