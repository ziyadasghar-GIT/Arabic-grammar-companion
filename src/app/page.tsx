"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Type, AlignLeft, Wand2, Atom, Repeat, Copy,
  BookOpen, GamepadIcon, MousePointerClick, ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";

const iconMap: Record<string, any> = {
  Type, AlignLeft, Wand2, Atom, Repeat, Copy,
  GamepadIcon, MousePointerClick,
};

const modules = [
  { id: "the-word", title: "The Word", arabic: "الكلمة", icon: "Type", description: "Noun, verb, and particle — the three pillars of Arabic speech", href: "/module/the-word" },
  { id: "sentence-structures", title: "Sentence Structures", arabic: "الجمل", icon: "AlignLeft", description: "Nominal (اسمية) and verbal (فعلية) sentences and their components", href: "/module/sentence-structures" },
  { id: "irab", title: "Inflection (I'rab)", arabic: "الإعراب", icon: "Wand2", description: "The system of case endings: nominative, accusative, and genitive", href: "/module/irab" },
  { id: "governing-particles", title: "Governing Particles", arabic: "العوامل", icon: "Atom", description: "Prepositions, verb-like particles, negatives, and conditionals", href: "/module/governing-particles" },
  { id: "verb-inflection", title: "Verb Inflection", arabic: "إعراب الفعل", icon: "Repeat", description: "The present tense verb: nominative, subjunctive, and jussive", href: "/module/verb-inflection" },
  { id: "followers", title: "Followers (التوابع)", arabic: "التوابع", icon: "Copy", description: "Adjectives, conjoined words, appositives, and substitutions", href: "/module/followers" },
];

const interactiveTools = [
  { title: "Parsing Game", arabic: "لعبة الإعراب", description: "Tap a governing particle and watch the word endings change with smooth animations", icon: "GamepadIcon", href: "/game" },
  { title: "Hover Practice", arabic: "التمرين التفاعلي", description: "Hover over words in real sentences to reveal root, classification, and grammatical state", icon: "MousePointerClick", href: "/hover-practice" },
];

const legendItems = [
  { variant: "marfu" as const, arabic: "مرفوع", english: "Nominative" },
  { variant: "mansub" as const, arabic: "منصوب", english: "Accusative" },
  { variant: "majrur" as const, arabic: "مجرور", english: "Genitive" },
  { variant: "mabni" as const, arabic: "مبني", english: "Invariable" },
];

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-[980px] mx-auto space-y-9 pt-4">
        {/* Hero */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#c9a96e]/20 text-[#1a2744] text-xs tracking-[2px] font-semibold mb-4">
            <BookOpen size={14} />
            INTERMEDIATE LEVEL
          </div>

          <h1 className="text-[56px] lg:text-7xl font-bold text-[#1a2744] tracking-[-1.5px] leading-none mb-3">
            النحو التفاعلي
          </h1>
          <p className="text-2xl text-[#1a2744]/70 mb-4">Arabic Grammar Companion</p>

          <p className="max-w-xl mx-auto text-[15px] text-[#3f3f3f]">
            Interactive curriculum drawn from <span className="font-semibold">Nahw Mir</span> and <span className="font-semibold">Al-Kafiyah</span>.
            Clear definitions + intermediate nuances + real examples.
          </p>
        </div>

        {/* Legend - prominent */}
        <div className="bg-white/80 border border-[#c9a96e]/25 rounded-2xl p-5">
          <div className="text-center text-[10px] tracking-[2.5px] font-semibold text-[#1a2744]/60 mb-3">COLOR-CODED GRAMMATICAL CASES</div>
          <div className="flex flex-wrap justify-center gap-3">
            {legendItems.map((item, i) => (
              <div key={i} className={`legend-pill legend-pill--${item.variant}`}>
                <span className={`case-dot case-dot--${item.variant}`} />
                <span className="arabic-text font-semibold text-[15px]" dir="rtl">{item.arabic}</span>
                <span className="opacity-40">·</span>
                <span className="text-sm font-medium">{item.english}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Exercises */}
        <div>
          <div className="section-label mb-3 px-1">Interactive Exercises</div>
          <div className="grid sm:grid-cols-2 gap-5">
            {interactiveTools.map((tool, i) => {
              const Icon = iconMap[tool.icon];
              return (
                <Link key={i} href={tool.href} className="group">
                  <div className="tool-card rounded-2xl p-7 h-full flex flex-col">
                    <div className="flex justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-[#1a2744] text-[#c9a96e] flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <ArrowRight className="text-[#c9a96e] mt-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>

                    <div className="flex-1">
                      <div className="text-[22px] font-semibold text-[#1a2744] tracking-[-0.3px]">{tool.title}</div>
                      <div className="arabic-text text-xl text-[#c9a96e] -mt-1 mb-3" dir="rtl">{tool.arabic}</div>
                      <p className="text-[14.5px] text-[#3f3f3f] leading-relaxed pr-2">{tool.description}</p>
                    </div>

                    <div className="text-xs text-[#c9a96e] font-semibold tracking-wider mt-5">OPEN EXERCISE →</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Curriculum Modules */}
        <div>
          <div className="flex items-center gap-2 mb-4 px-1">
            <BookOpen size={17} className="text-[#c9a96e]" />
            <span className="font-semibold text-lg text-[#1a2744]">Curriculum Modules</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod, i) => {
              const Icon = iconMap[mod.icon];
              return (
                <Link key={i} href={mod.href} className="group">
                  <div className="module-card rounded-2xl p-6 h-full">
                    <div className="flex gap-4">
                      <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-[#1a2744] text-[#c9a96e] flex items-center justify-center mt-0.5">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-[#1a2744] text-[16.5px]">{mod.title}</div>
                        <div className="arabic-text text-[#c9a96e] text-[17px] leading-tight" dir="rtl">{mod.arabic}</div>
                        <p className="mt-4 text-sm text-[#3f3f3f] leading-snug">{mod.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center text-xs text-[#1a2744]/50 pt-2">
          Examples taken directly from the source texts • Classical colour coding
        </div>
      </div>
    </Layout>
  );
}
