"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, BookOpen, Sparkles } from "lucide-react";
import type { Module, SubTopic } from "@/data/curriculum";
import ExampleCard from "./ExampleCard";

export default function ModuleContent({ module }: { module: Module }) {
  const [openTopic, setOpenTopic] = useState<string | null>(module.subtopics[0]?.id || null);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a2744] rounded-xl p-6 text-[#f5ecd9]"
      >
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-[#c9a96e]" size={28} />
          <h2 className="text-2xl font-bold">{module.title}</h2>
        </div>
        <p className="arabic-text text-[#c9a96e] text-xl mb-3" dir="rtl">{module.titleArabic}</p>
        <p className="text-sm text-[#f5ecd9]/80">{module.description}</p>
      </motion.div>

      <div className="space-y-4">
        {module.subtopics.map((topic, idx) => (
          <SubTopicCard
            key={topic.id}
            topic={topic}
            isOpen={openTopic === topic.id}
            onToggle={() => setOpenTopic(openTopic === topic.id ? null : topic.id)}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

function SubTopicCard({
  topic,
  isOpen,
  onToggle,
  index,
}: {
  topic: SubTopic;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/60 rounded-xl border border-[#c9a96e]/30 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#c9a96e]/5 transition-colors"
      >
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#1a2744]">{topic.title}</h3>
          <p className="arabic-text text-[#c9a96e] text-base mt-1" dir="rtl">{topic.titleArabic}</p>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="text-[#1a2744]" size={22} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 space-y-4">
              <div className="bg-[#f5ecd9]/50 rounded-lg p-4 border border-[#c9a96e]/20">
                <p className="arabic-text text-lg leading-relaxed text-[#1a2744]" dir="rtl">
                  {topic.definition}
                </p>
              </div>

              {topic.nuances && (
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-amber-600" size={16} />
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      Intermediate Nuance (Al-Kafiyah)
                    </span>
                  </div>
                  <p className="arabic-text text-base leading-relaxed text-amber-900" dir="rtl">
                    {topic.nuances}
                  </p>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                {topic.examples.map((ex, i) => (
                  <ExampleCard key={i} example={ex} index={i} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}