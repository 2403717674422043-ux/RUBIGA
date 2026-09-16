import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 text-base">
            <span>{personalInfo.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ice-500"></span>
          </div>
          <p className="text-xs text-slate-500">
            M.Sc. Artificial Intelligence & Machine Learning • {personalInfo.institution}
          </p>
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Rubiga R K. Designed with Scandinavian minimal aesthetic & ice-blue precision.
          </p>
        </div>

        {/* Center: Quick Links & Socials */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-ice-600 hover:border-ice-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-ice-600 hover:border-ice-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-ice-600 hover:border-ice-300 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-ice-50 border border-slate-200 hover:border-ice-300 text-xs font-semibold text-slate-600 hover:text-ice-700 transition-all shadow-xs"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-ice-500" />
        </button>

      </div>
    </footer>
  );
}
