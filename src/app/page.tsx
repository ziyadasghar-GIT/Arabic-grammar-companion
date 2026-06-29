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
  {
    id: "the-word",
    title: "The Word",
    arabic: "الكلمة",
    icon: "Type",
    description: "Noun, verb, and particle — the three pillars of Arabic speech",
    color: "from-blue-600 to-blue-800",
    href: "/module/the-word",
  },
  {
    id: "sentence-structures",
    title: "Sentence Structures",
    arabic: "الجمل",
    icon: "AlignLeft",
    description: "Nominal (اسمية) and verbal (فعلية) sentences and their components",
    color: "from-indigo-600 to-indigo-800",
    href: "/module/sentence-structures",
  },
  {
    id: "irab",
    title: "Inflection (I'rab)",
    arabic: "الإعراب",
    icon: "Wand2",
    description: "The system of case endings: nominative, accusative, and genitive",
    color: "from-amber-600 to-amber-800",
    href: "/module/irab",
  },
  {
    id: "governing-particles",
    title: "Governing Particles",
    arabic: "العوامل",
    icon: "Atom",
    description: "Prepositions, verb-like particles, negatives, and conditionals",
    color: "from-purple-600 to-purple-800",
    href: "/module/governing-particles",
  },
  {
    id: "verb-inflection",
    title: "Verb Inflection",
    arabic: "إعراب الفعل",
    icon: "Repeat",
    description: "The present tense verb: nominative, subjunctive, and jussive",
    color: "from-teal-600 to-teal-800",
    href: "/module/verb-inflection",
  },
  {
    id: "followers",
    title: "Followers (التوابع)",
    arabic: "التوابع",
    icon: "Copy",
    description: "Adjectives, conjoined words, appositives, and substitutions",
    color: "from-rose-600 to-rose-800",
    href: "/module/followers",
  },
];

const interactiveTools = [
  {
    title: "Parsing Game",
    arabic: "لعبة الإعراب",
    description: "Drag governing particles and watch endings change",
    icon: "GamepadIcon",
    href: "/game",
    gradient: "from-[#1a2744] to-[#0f1828]",
  },
  {
    title: "Hover Practice",
    arabic: "التمرين التفاعلي",
    description: "Hover over words to see root, classification & grammatical state",
    icon: "MousePointerClick",
    href: "/hover-practice",
    gradient: "from-amber-600 to-amber-800",
  },
];

export default function HomePage() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Hero */}
        <div className="text-center pt-8 lg:pt-12 pb-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a2744] text-[#c9a96e] text-xs font-medium mb-4"
          >
            <BookOpen size={14} />
            Intermediate Arabic Grammar Curriculum
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a2744] mb-3">
            النحو التفاعلي
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            An interactive curriculum based on{" "}
            <span className="font-semibold text-indigo-700">Nahw Mir</span> and{" "}
            <span className="font-semibold text-amber-700">Al-Kafiyah</span> —
            foundational definitions and intermediate nuances of Arabic grammar.
          </p>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/60 rounded-xl p-4 border border-[#c9a96e]/30"
        >
          <p className="text-sm font-semibold text-[#1a2744] mb-3 text-center">
            Color-coded grammatical cases
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-500" />
              <span className="arabic-text" dir="rtl">مرفوع (Nominative)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-500" />
              <span className="arabic-text" dir="rtl">منصوب (Accusative)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500" />
              <span className="arabic-text" dir="rtl">مجرور (Genitive)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-gray-500" />
              <span className="arabic-text" dir="rtl">مبني (Invariable)</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive tools */}
        <div className="grid sm:grid-cols-2 gap-4">
          {interactiveTools.map((tool, i) => {
            const Icon = iconMap[tool.icon];
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Link
                  href={tool.href}
                  className={`block bg-gradient-to-br ${tool.gradient} rounded-xl p-6 text-white hover:scale-[1.02] transition-transform shadow-lg group`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="text-[#c9a96e]" size={32} />
                    <ArrowRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-[#c9a96e]">{tool.title}</h3>
                  <p className="arabic-text text-lg text-white/80 mt-1" dir="rtl">{tool.arabic}</p>
                  <p className="text-sm text-white/60 mt-2">{tool.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Curriculum modules */}
        <div>
          <h2 className="text-xl font-bold text-[#1a2744] mb-4 flex items-center gap-2">
            <BookOpen size={22} className="text-[#c9a96e]" />
            Curriculum Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod, i) => {
              const Icon = iconMap[mod.icon];
              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <Link
                    href={mod.href}
                    className="block bg-white/70 hover:bg-white rounded-xl p-5 border border-[#c9a96e]/30 hover:border-[#c9a96e]/60 hover:shadow-lg transition-all group h-full"
                  >
                    <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${mod.color} text-white mb-3`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-[#1a2744] group-hover:text-[#c9a96e] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="arabic-text text-[#c9a96e] text-base mb-2" dir="rtl">{mod.arabic}</p>
                    <p className="text-xs text-gray-600">{mod.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}