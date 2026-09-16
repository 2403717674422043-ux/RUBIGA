import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Layout, Brain, Download, FileText, Leaf } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-32 pb-28 md:pt-40 md:pb-40 overflow-hidden bg-gradient-to-b from-[#e0f2fe]/70 via-[#edf7fc] to-[#e6f4fe]/80">
      
      {/* Dominant Organic Watercolor Background Washes */}
      <div className="absolute top-10 left-[-5%] w-[650px] h-[650px] watercolor-shape-1 pointer-events-none rounded-full animate-float-slow opacity-75"></div>
      <div className="absolute top-1/4 right-[-5%] w-[600px] h-[600px] watercolor-shape-2 pointer-events-none rounded-full animate-float-slow-alt opacity-65"></div>
      <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] watercolor-shape-3 pointer-events-none rounded-full opacity-50"></div>

      {/* Signature Botanical / Geometry SVG Line Artwork in Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
        <path d="M -100 180 Q 350 80 750 380 T 1550 180" fill="none" stroke="#a3b18a" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M 0 480 Q 520 280 920 580 T 1650 380" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & Hero Button System */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Degree Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-ice-300 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ice-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ice-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">
                {personalInfo.degree}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-ice-600 to-sage-600">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 max-w-xl leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Postgraduate student at <span className="font-semibold text-slate-900">{personalInfo.institution}</span> focusing on machine learning algorithms, retrieval-augmented generation (RAG), full-stack software development, and aesthetic UI design.
            </p>

            {/* Interest Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/90 border border-ice-200 text-xs font-semibold text-slate-800 shadow-xs">
                <Brain className="w-3.5 h-3.5 text-ice-600" />
                AI / Machine Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/90 border border-sage-200 text-xs font-semibold text-slate-800 shadow-xs">
                <Code className="w-3.5 h-3.5 text-sage-600" />
                Software Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/90 border border-lavender-200 text-xs font-semibold text-slate-800 shadow-xs">
                <Layout className="w-3.5 h-3.5 text-lavender-500" />
                UI / Visual Design
              </span>
            </div>

            {/* Cohesive 3-Button System: View Projects, Contact Me, Download CV */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Primary Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ice-500 hover:bg-ice-600 text-white font-semibold text-sm shadow-md hover:shadow-ice-glow transition-all duration-300 group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-ice-100 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/90 hover:bg-ice-50 text-slate-900 font-semibold text-sm border border-ice-300 shadow-xs transition-all duration-300"
              >
                <span>Contact Me</span>
              </a>

              {/* Download CV Button */}
              <a
                href={personalInfo.resumePdf}
                download="Rubiga_RK_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ice-200/90 hover:bg-ice-300 text-slate-900 font-semibold text-sm border border-ice-300 shadow-xs transition-all duration-300 group"
                title="Download Rubiga R K's CV (PDF)"
              >
                <Download className="w-4 h-4 text-ice-700 group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-2 sm:border-l sm:border-ice-200">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/90 border border-ice-200 text-slate-600 hover:text-ice-600 hover:border-ice-400 transition-colors shadow-xs"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/90 border border-ice-200 text-slate-600 hover:text-ice-600 hover:border-ice-400 transition-colors shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Signature Visual Detail - Floating Photo Composition */}
          <div className="lg:col-span-5 flex justify-center relative pt-8 lg:pt-0">
            
            {/* 1. Signature Soft Halo Element behind photo */}
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-ice-300/60 via-sage-200/50 to-lavender-200/40 blur-2xl pointer-events-none"></div>

            {/* 2. Dual Organic Blob Backdrops */}
            <div className="absolute -inset-6 hero-organic-blob-1 opacity-80 filter blur-xl animate-float-slow pointer-events-none"></div>
            <div className="absolute -inset-2 hero-organic-blob-2 opacity-70 filter blur-lg animate-float-slow-alt pointer-events-none"></div>

            {/* 3. Abstract Botanical Curved Stroke Artwork */}
            <svg className="absolute -top-12 -left-12 w-48 h-48 pointer-events-none opacity-50" viewBox="0 0 200 200">
              <path d="M 20,100 C 50,20 150,20 180,100 C 150,180 50,180 20,100 Z" fill="none" stroke="#a3b18a" strokeWidth="1.5" />
            </svg>
            <svg className="absolute -bottom-10 -right-10 w-48 h-48 pointer-events-none opacity-50" viewBox="0 0 200 200">
              <path d="M 10,90 Q 90,10 170,90 T 10,90" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            </svg>

            {/* 4. Floating Photo Glass Container */}
            <div className="relative group w-full max-w-sm">
              
              {/* Back Offset Glass Plate */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-sage-100/70 to-ice-100/70 border border-ice-300/60 transform rotate-3 translate-x-3 translate-y-3 pointer-events-none"></div>

              {/* Main Floating Portrait Card */}
              <div className="relative rounded-[2.25rem] overflow-hidden p-3.5 bg-white/90 border border-ice-200 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Base Fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-65"></div>

                  {/* Floating Micro Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{personalInfo.name}</p>
                      <p className="text-[10px] font-medium text-slate-600">Coimbatore Institute of Technology</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-ice-100 text-[10px] font-bold text-ice-800 border border-ice-300">
                      CGPA {personalInfo.cgpa.split('/')[0]}
                    </span>
                  </div>
                </div>

                {/* Sub-bar */}
                <div className="mt-3 px-2 py-2 flex items-center justify-between text-xs text-slate-500 font-medium border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-slate-700 text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-ice-500" />
                    AI/ML & UI Design Focus
                  </span>
                  <button
                    onClick={onOpenResume}
                    className="flex items-center gap-1 text-ice-600 hover:text-ice-700 font-semibold transition-colors text-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View CV</span>
                  </button>
                </div>

              </div>

              {/* Botanical Accent Badge */}
              <div className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white border border-ice-300 shadow-md flex items-center justify-center text-ice-600 text-xs">
                <Leaf className="w-4 h-4 text-sage-600" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
