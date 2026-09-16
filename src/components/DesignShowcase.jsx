import React, { useState } from 'react';
import { uiDesignPhilosophy } from '../data/portfolioData';
import { Palette, Sparkles, Layout, MousePointer, Layers, CheckCircle, Eye, Sliders } from 'lucide-react';

export default function DesignShowcase() {
  const [activeTab, setActiveTab] = useState('palette');

  return (
    <section id="design" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ice-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-xs font-semibold text-ice-700 uppercase tracking-wider shadow-xs">
            <Palette className="w-3.5 h-3.5 text-ice-500" />
            <span>Visual & UX Design Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {uiDesignPhilosophy.title}
          </h2>
          <p className="text-slate-600 max-w-xl text-sm sm:text-base">
            Bridging complex algorithmic logic with human-centered digital experiences through clean typography, Figma prototyping, and subtle glassmorphic aesthetics.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {uiDesignPhilosophy.principles.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-ice-300 shadow-xs hover:shadow-ice-card transition-all duration-300 space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-ice-50 border border-ice-100 flex items-center justify-center text-ice-600 font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Figma-Style Design System Canvas Preview */}
        <div className="rounded-3xl bg-white border border-sky-100/80 shadow-ice-card overflow-hidden p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-ice-600 uppercase tracking-wider">
                Figma Prototyping Showcase
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Scandinavian Ice-Blue Design System Spec
              </h3>
            </div>

            {/* Interactive Canvas View Toggles */}
            <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('palette')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'palette'
                    ? 'bg-white text-ice-700 shadow-xs border border-sky-100'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Color Palette
              </button>
              <button
                onClick={() => setActiveTab('typography')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'typography'
                    ? 'bg-white text-ice-700 shadow-xs border border-sky-100'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Typography Hierarchy
              </button>
              <button
                onClick={() => setActiveTab('components')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'components'
                    ? 'bg-white text-ice-700 shadow-xs border border-sky-100'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                UI Glass Components
              </button>
            </div>
          </div>

          {/* Canvas Preview Area */}
          <div className="pt-8">
            {activeTab === 'palette' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in duration-300">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div className="h-16 rounded-xl bg-slate-50 border border-slate-200 mb-2"></div>
                  <p className="text-xs font-bold text-slate-800">Cool Off-White</p>
                  <p className="text-[10px] text-slate-400">#F8FAFC • Primary BG</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div className="h-16 rounded-xl bg-ice-100 mb-2"></div>
                  <p className="text-xs font-bold text-slate-800">Soft Ice Tint</p>
                  <p className="text-[10px] text-slate-400">#E0F2FE • Glass Accent</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div className="h-16 rounded-xl bg-ice-500 mb-2"></div>
                  <p className="text-xs font-bold text-slate-800">Ice Blue Primary</p>
                  <p className="text-[10px] text-slate-400">#0284C7 • Primary CTAs</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div className="h-16 rounded-xl bg-slate-900 mb-2"></div>
                  <p className="text-xs font-bold text-slate-800">Deep Navy Slate</p>
                  <p className="text-[10px] text-slate-400">#0F172A • High Contrast</p>
                </div>
              </div>
            )}

            {activeTab === 'typography' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-ice-600">Plus Jakarta Sans — Bold 36px</span>
                    <h4 className="text-2xl font-bold text-slate-900">Minimal Editorial Headlines</h4>
                  </div>
                  <span className="text-xs text-slate-400">Headings & Titles</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-ice-600">Inter — Medium 16px</span>
                    <p className="text-sm text-slate-600">Comfortable body text with 1.6 line-height ratio for high legibility.</p>
                  </div>
                  <span className="text-xs text-slate-400">Body Copy</span>
                </div>
              </div>
            )}

            {activeTab === 'components' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                {/* Mock Card 1 */}
                <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-sky-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ice-100 flex items-center justify-center text-ice-600 font-bold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Glassmorphic Container</h5>
                    <p className="text-xs text-slate-500">Translucent backdrop-blur layout card</p>
                  </div>
                </div>

                {/* Mock Card 2 */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-ice-400 uppercase tracking-widest">Interactive Element</span>
                    <h5 className="font-bold text-sm">Primary High-Contrast Button</h5>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-ice-500 text-white text-xs font-semibold">Active</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
