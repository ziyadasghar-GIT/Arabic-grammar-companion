"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Type, AlignLeft, Wand2, Atom, Repeat, Copy,
  BookOpen, GamepadIcon, MousePointerClick, ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import CaseBadge from "@/components/CaseBadge";

const iconMap: Record<string, any> = {
  Type, AlignLeft, Wand2, Atom, Repeat, Copy,
  GamepadIcon, MousePointerClick,
};

const modules = [
  {
    id: "the-word",
    title: "The Word",
    arabic: "الكلمة",
    icon: "Type",
    description: "Noun, verb, and particle — the three pillars of Arabic speech",
    href: "/module/the-word",
  },
  {
    id: "sentence-structures",
    title: "Sentence Structures",
    arabic: "الجمل",
    icon: "AlignLeft",
    description: "Nominal (اسمية) and verbal (فعلية) sentences and their components",
    href: "/module/sentence-structures",
  },
  {
    id: "irab",
    title: "Inflection (I'rab)",
    arabic: "الإعراب",
    icon: "Wand2",
    description: "The system of case endings: nominative, accusative, and genitive",
    href: "/module/irab",
  },
  {
    id: "governing-particles",
    title: "Governing Particles",
    arabic: "العوامل",
    icon: "Atom",
    description: "Prepositions, verb-like particles, negatives, and conditionals",
    href: "/module/governing-particles",
  },
  {
    id: "verb-inflection",
    title: "Verb Inflection",
    arabic: "إعراب الفعل",
    icon: "Repeat",
    description: "The present tense verb: nominative, subjunctive, and jussive",
    href: "/module/verb-inflection",
  },
  {
    id: "followers",
    title: "Followers (التوابع)",
    arabic: "التوابع",
    icon: "Copy",
    description: "Adjectives, conjoined words, appositives, and substitutions",
    href: "/module/followers",
  },
];

const interactiveTools = [
  {
    title: "Parsing Game",
    arabic: "لعبة الإعراب",
    description: "Tap a governing particle and watch the word endings change with smooth animations",
    icon: "GamepadIcon",
    href: "/game",
  },
  {
    title: "Hover Practice",
    arabic: "التمرين التفاعلي",
    description: "Hover over words in real sentences to reveal root, classification, and grammatical state",
    icon: "MousePointerClick",
    href: "/hover-practice",
  },
];

export default function HomePage() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        {/* Hero */}
        <div className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a96e]/15 text-[#1a2744] text-xs tracking-[1.5px] uppercase font-medium mb-3">
            <BookOpen size={13} />
            Intermediate Level
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-[#1a2744] mb-1 tracking-tight">
            النحو التفاعلي
          </h1>
          <p className="text-lg text-[#1a2744]/60 mb-3">Arabic Grammar Companion</p>

          <p className="max-w-2xl mx-auto text-[15px] text-[#4a4a4a]">
            An interactive curriculum drawn from <span className="font-medium">Nahw Mir</span> and{" "}
            <span className="font-medium">Al-Kafiyah</span> — clear definitions paired with intermediate nuances and real textual examples.
          </p>
        </div>

        {/* Color Legend — improved */}
        <div className="bg-white/85 rounded-2xl p-5 border border-[#c9a96e]/25">
          <div className="text-center text-xs tracking-[2px] font-semibold text-[#1a2744]/70 mb-3">COLOR-CODED GRAMMATICAL CASES</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <CaseBadge caseType="مرفوع" />
            <CaseBadge caseType="منصوب" />
            <CaseBadge caseType="مجرور" />
            <CaseBadge caseType="مبني" />
          </div>
        </div>

        {/* Interactive Tools */}
        <div>
          <div className="text-xs tracking-[2px] font-semibold text-[#c9a96e] mb-3 px-1">INTERACTIVE EXERCISES</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {interactiveTools.map((tool, i) => {
              const Icon = iconMap[tool.icon];
              return (
                <Link key={i} href={tool.href} className="group block">
                  <div className="card rounded-2xl p-6 h-full transition-all hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-xl bg-[#1a2744] text-[#c9a96e]">
                        <Icon size={26} />
                      </div>
                      <ArrowRight size={20} className="text-[#c9a96e] mt-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <div className="text-2xl font-semibold text-[#1a2744]">{tool.title}</div>
                    <div className="arabic-text text-lg text-[#c9a96e] -mt-0.5 mb-2" dir="rtl">{tool.arabic}</div>
                    <p className="text-sm text-[#4a4a4a] leading-snug">{tool.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Curriculum Modules */}
        <div>
          <div className="flex items-center gap-2 mb-4 px-1">
            <BookOpen size={19} className="text-[#c9a96e]" />
            <div className="font-semibold text-[#1a2744]">Curriculum Modules</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod, i) => {
              const Icon = iconMap[mod.icon];
              return (
                <Link key={mod.id} href={mod.href} className="group block">
                  <div className="card rounded-2xl p-5 h-full transition-all hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-[#1a2744] text-[#c9a96e] mt-0.5">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[#1a2744] text-[17px] leading-tight">{mod.title}</div>
                        <div className="arabic-text text-[#c9a96e] text-base mt-px" dir="rtl">{mod.arabic}</div>
                        <p className="mt-3 text-sm text-[#4a4a4a] leading-relaxed">{mod.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center text-xs text-[#1a2744]/50 pt-2">
          All examples taken directly from the source texts • Color coding follows classical Iʿrāb
        </div>
      </motion.div>
    </Layout>
  );
}
