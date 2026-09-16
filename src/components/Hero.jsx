import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Layout, Brain, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
      {/* Soft Ambient Ice-Blue Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ice-glow-orb pointer-events-none rounded-full opacity-60"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-ice-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Scandinavian Line Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200/80 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ice-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ice-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
                {personalInfo.degree}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-ice-700 to-ice-500">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-xl leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Concise Role Statement */}
            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Postgraduate student at <span className="font-semibold text-slate-800">{personalInfo.institution}</span> focusing on machine learning algorithms, retrieval-augmented generation (RAG), full-stack software development, and aesthetic UI design.
            </p>

            {/* Quick Interest Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-sky-100 text-xs font-medium text-slate-700 shadow-xs">
                <Brain className="w-3.5 h-3.5 text-ice-500" />
                AI / Machine Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-sky-100 text-xs font-medium text-slate-700 shadow-xs">
                <Code className="w-3.5 h-3.5 text-ice-500" />
                Software Development
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-sky-100 text-xs font-medium text-slate-700 shadow-xs">
                <Layout className="w-3.5 h-3.5 text-ice-500" />
                UI / Visual Design
              </span>
            </div>

            {/* CTAs & Social Links */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-ice-600 text-white font-semibold text-sm shadow-md hover:shadow-ice-glow transition-all duration-300 group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-ice-200 group-hover:translate-y-0.5 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-ice-50 text-slate-800 font-semibold text-sm border border-slate-200 hover:border-ice-300 shadow-xs transition-all duration-300"
              >
                <span>Contact Me</span>
              </a>

              {/* Social Icon Row */}
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-2 sm:pt-0 sm:pl-3 sm:border-l sm:border-slate-200">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-ice-600 hover:border-ice-300 transition-colors shadow-xs"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-ice-600 hover:border-ice-300 transition-colors shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-ice-600 hover:border-ice-300 transition-colors shadow-xs"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Abstract Glass Accent */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Background Ice-Blue Geometric Ring */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-ice-200/50 via-sky-100/30 to-transparent blur-xl pointer-events-none"></div>

            {/* Main Portrait Card */}
            <div className="relative group w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden p-3 bg-white/80 border border-sky-100 shadow-ice-card backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-ice-300">
                
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Top Ice Blue Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Micro Badge inside Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{personalInfo.name}</p>
                      <p className="text-[10px] font-medium text-slate-600">Coimbatore Institute of Technology</p>
                    </div>
                    <span className="px-2 py-1 rounded-md bg-ice-50 text-[10px] font-bold text-ice-700 border border-ice-200">
                      CGPA {personalInfo.cgpa.split('/')[0]}
                    </span>
                  </div>
                </div>

                {/* Abstract Glass Corner Accent */}
                <div className="mt-3 px-2 py-2.5 flex items-center justify-between text-xs text-slate-500 font-medium border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-ice-500" />
                    AI/ML & UI Design Focus
                  </span>
                  <button 
                    onClick={onOpenResume}
                    className="flex items-center gap-1 text-ice-600 hover:text-ice-700 font-semibold transition-colors"
                  >
                    <span>Resume</span>
                    <Download className="w-3 h-3" />
                  </button>
                </div>

              </div>

              {/* Decorative Subtle Floating Orbit Dot */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-ice-500 text-xs">
                ✦
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
