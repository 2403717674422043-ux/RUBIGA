import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, MapPin } from 'lucide-react';

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-ice-200 text-xs font-semibold text-ice-700 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-ice-500" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Education & Academic Track
          </h2>
          <p className="text-slate-600 max-w-xl text-sm sm:text-base">
            Postgraduate academic training at Coimbatore Institute of Technology combining AI/ML theory, practical model evaluation, and software engineering.
          </p>
        </div>

        {/* Minimal Timeline Card */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs relative">
          
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-ice-700 uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{personalInfo.duration}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {personalInfo.institution}
              </h3>
              <p className="text-sm text-slate-600 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </p>
            </div>

            <div className="px-4 py-2 rounded-2xl bg-white border border-sky-200 shadow-xs self-start">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Cumulative Score</span>
              <span className="text-lg font-extrabold text-ice-700">
                CGPA {personalInfo.cgpa}
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-ice-500" />
              Degree: {personalInfo.degree}
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Enrolled in an integrated 5-year postgraduate degree focused on computer science fundamentals, statistical machine learning, deep learning, computer vision, natural language processing, vector databases, and full-stack software development.
            </p>

            <div className="pt-4 border-t border-slate-200/60">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Key Areas of Academic Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-ice-500" />
                  <span>Machine Learning & Supervised Classification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-ice-500" />
                  <span>Retrieval-Augmented Generation (RAG)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-ice-500" />
                  <span>Full-Stack Web Engineering (React/Node)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-ice-500" />
                  <span>UI/UX Design & User-Centered Prototyping</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
