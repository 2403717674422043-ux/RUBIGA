import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Brain, Sparkles, Database, Sliders, Layout, FileSpreadsheet, BarChart3, Atom, FileCode, Server, Globe, Palette, Code, Coffee, Cpu, Table, LayoutGrid, HeartHandshake, GitBranch, Laptop } from 'lucide-react';

const iconMap = {
  Code2, Brain, Sparkles, Database, Sliders, Layout, FileSpreadsheet, BarChart3,
  Atom, FileCode, Server, Globe, Palette, Code, Coffee, Cpu, Table, LayoutGrid,
  HeartHandshake, GitBranch, Laptop
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-xs font-semibold text-ice-700 uppercase tracking-wider shadow-xs">
            <Brain className="w-3.5 h-3.5 text-ice-500" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 max-w-xl text-sm sm:text-base">
            Categorized technical stack spanning Artificial Intelligence, Full-Stack Web Architecture, Databases, and UI/UX Design Tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-ice-600 hover:bg-ice-50 border border-slate-200/80 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-ice-300 shadow-xs hover:shadow-ice-card transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ice-50 border border-ice-100 flex items-center justify-center text-ice-600 group-hover:scale-110 group-hover:bg-ice-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-semibold text-slate-600 group-hover:bg-ice-100 group-hover:text-ice-700 transition-colors">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-ice-600 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 capitalize mt-0.5">
                    {skill.category === 'ai' ? 'AI / Machine Learning' : skill.category === 'web' ? 'Full Stack' : skill.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          * Hands-on experience gained through academic research projects at Coimbatore Institute of Technology and practical application.
        </div>

      </div>
    </section>
  );
}
