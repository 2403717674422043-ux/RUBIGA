import React from 'react';
import { BookOpen, GraduationCap, Award, Compass, Heart, Users, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo, softSkills } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ice-50 border border-ice-200 text-xs font-semibold text-ice-700 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Blending Machine Intelligence with Creative Design
          </h2>
          <div className="w-12 h-1 bg-ice-400 rounded-full"></div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                I am an <span className="font-semibold text-slate-900">M.Sc. Artificial Intelligence and Machine Learning</span> postgraduate student at <span className="font-semibold text-slate-900">{personalInfo.institution}</span>. My work spans machine learning model development, data preprocessing, RAG architecture engineering, and full-stack software development.
              </p>
              <p>
                What distinguishes my approach is a deep-seated belief that <span className="text-ice-700 font-medium">technical intelligence should feel visually effortless</span>. I bring together mathematical machine learning concepts and human-centered UI design principles to build applications that are as elegant to look at as they are performant under the hood.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Whether analyzing financial fraud patterns with SMOTE and Random Forests, crafting citation-aware vector search pipelines in ChromaDB, or designing responsive React interfaces with Figma wireframes — I approach every problem with curiosity, precision, and visual aesthetic care.
              </p>
            </div>

            {/* Quick Core Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-ice-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-ice-100 flex items-center justify-center text-ice-600 mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Analytical Rigor</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Supervised learning, statistical model evaluation, class-imbalance handling & feature engineering.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-ice-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-ice-100 flex items-center justify-center text-ice-600 mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Human-Centered UI</h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Minimal visual hierarchy, Figma prototyping, responsive web layouts, and Scandinavian aesthetics.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Education & Soft Skills Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-ice-50/80 via-white to-slate-50 border border-sky-100 shadow-ice-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ice-100/40 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-ice-500 text-white shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-ice-600 uppercase tracking-wider">Education</span>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {personalInfo.institution}
                  </h3>
                  <p className="text-xs text-slate-500">{personalInfo.location}</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-200/60 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Degree</span>
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm text-right">
                    M.Sc. Artificial Intelligence & ML
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Duration</span>
                  <span className="font-semibold text-slate-700 text-xs sm:text-sm">
                    {personalInfo.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">CGPA</span>
                  <span className="px-2.5 py-1 rounded-full bg-ice-100 text-ice-700 font-bold text-xs border border-ice-200">
                    {personalInfo.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Soft Skills & Interests */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-ice-500" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Core Soft Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-ice-50 border border-slate-200/80 text-xs font-medium text-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-500 border-t border-slate-100">
                <span className="font-semibold text-slate-700">Areas of Interest:</span> UI/UX Design, Figma Prototyping, User-Centered Design, Generative AI & RAG systems.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
