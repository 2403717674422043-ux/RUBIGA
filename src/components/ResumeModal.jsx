import React from 'react';
import { X, Download, Printer, FileText, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white border border-sky-100 shadow-2xl overflow-hidden my-6 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-ice-400" />
            <h3 className="font-bold text-base sm:text-lg">
              Rubiga R K — Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-ice-300" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white font-sans text-slate-800 text-sm">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-200">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {personalInfo.phone} | {personalInfo.email} | {personalInfo.location}
            </p>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-extrabold text-ice-700 uppercase tracking-widest mb-2 border-b border-ice-100 pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              M.Sc. Artificial Intelligence and Machine Learning student with hands-on experience in Machine Learning, RAG systems, Full-Stack web development, and human-centered UI/UX design. Experienced in Python, Scikit-learn, SMOTE, ChromaDB, React.js, Node.js, Express.js, MongoDB, and Figma prototyping.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold text-ice-700 uppercase tracking-widest mb-3 border-b border-ice-100 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900">{personalInfo.institution}</h3>
                <p className="text-xs text-slate-600 italic">{personalInfo.degree}</p>
                <p className="text-xs font-semibold text-ice-700 mt-1">CGPA: {personalInfo.cgpa}</p>
              </div>
              <span className="text-xs text-slate-500 font-semibold">{personalInfo.duration}</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold text-ice-700 uppercase tracking-widest mb-3 border-b border-ice-100 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <p><span className="font-bold text-slate-900">Programming:</span> Python, JavaScript, Java, C, SQL</p>
              <p><span className="font-bold text-slate-900">Libraries & Frameworks:</span> NumPy, Pandas, Matplotlib, Scikit-learn, SMOTE, Streamlit, React.js, Express.js, ChromaDB, RAG</p>
              <p><span className="font-bold text-slate-900">Databases:</span> MongoDB, SQL</p>
              <p><span className="font-bold text-slate-900">Design & Tools:</span> Git, GitHub, Figma, UI/UX Design, Prototyping, VS Code</p>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-extrabold text-ice-700 uppercase tracking-widest mb-3 border-b border-ice-100 pb-1">
              Key Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {project.title} – {project.subtitle}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-400 italic">
                      {project.techStack.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Interests */}
          <div>
            <h2 className="text-xs font-extrabold text-ice-700 uppercase tracking-widest mb-2 border-b border-ice-100 pb-1">
              Soft Skills & Areas of Interest
            </h2>
            <p className="text-xs text-slate-600">
              <span className="font-bold text-slate-900">Soft Skills:</span> Communication, Leadership, Team Collaboration, Adaptability
            </p>
            <p className="text-xs text-slate-600 mt-1">
              <span className="font-bold text-slate-900">Areas of Interest:</span> UI/UX Design, Figma Prototyping, User-Centered Design, Generative AI & Vector Search
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-ice-600 text-white text-xs font-semibold transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
