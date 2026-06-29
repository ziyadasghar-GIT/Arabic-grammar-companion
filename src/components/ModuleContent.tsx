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
      <div className="rounded-2xl p-6 bg-[#1a2744] text-[#f5ecd9]">
        <div className="flex items-center gap-3 mb-1.5">
          <BookOpen className="text-[#c9a96e]" size={26} />
          <h1 className="text-2xl font-semibold">{module.title}</h1>
        </div>
        <p className="arabic-text text-xl text-[#c9a96e] mb-2" dir="rtl">{module.titleArabic}</p>
        <p className="text-sm text-[#f5ecd9]/75 max-w-3xl">{module.description}</p>
      </div>

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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="card rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-black/5 transition-colors"
      >
        <div>
          <h3 className="text-lg font-semibold text-[#1a2744]">{topic.title}</h3>
          <p className="arabic-text text-[#c9a96e] text-[15px] mt-0.5" dir="rtl">{topic.titleArabic}</p>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="text-[#1a2744]/70" size={22} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 space-y-4 border-t border-[#c9a96e]/15">
              <div className="pt-4">
                <div className="bg-[#f5ecd9]/70 rounded-xl p-4 border border-[#c9a96e]/20">
                  <p className="arabic-text text-lg leading-relaxed text-[#1a2744]" dir="rtl">
                    {topic.definition}
                  </p>
                </div>
              </div>

              {topic.nuances && (
                <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-amber-600" size={15} />
                    <span className="text-[10px] font-semibold tracking-[1px] text-amber-700 uppercase">From Al-Kafiyah</span>
                  </div>
                  <p className="arabic-text text-[15px] leading-relaxed text-amber-950" dir="rtl">
                    {topic.nuances}
                  </p>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2 pt-1">
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
