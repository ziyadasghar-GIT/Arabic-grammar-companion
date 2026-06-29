"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointerClick, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { tooltipSentences, type TooltipWord } from "@/data/parsing-game";
import type { Case } from "@/data/curriculum";

const caseClassMap: Record<Case, string> = {
  "مرفوع": "text-blue-600",
  "منصوب": "text-red-600",
  "مجرور": "text-green-600",
  "مبني": "text-gray-500",
};

const caseBgMap: Record<Case, string> = {
  "مرفوع": "bg-blue-50 border-blue-200",
  "منصوب": "bg-red-50 border-red-200",
  "مجرور": "bg-green-50 border-green-200",
  "مبني": "bg-gray-50 border-gray-200",
};

export default function HoverPracticePage() {
  const [hoveredWord, setHoveredWord] = useState<TooltipWord | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseEnter = (word: TooltipWord, e: React.MouseEvent) => {
    setHoveredWord(word);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setHoverPosition({ x: rect.left + rect.width / 2, y: rect.bottom + 8 });
  };

  return (
    <Layout>
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#c9a96e] mb-4 transition-colors">
        <ArrowLeft size={16} /> Dashboard
      </Link>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <MousePointerClick className="text-[#c9a96e]" size={28} />
          <h1 className="text-2xl font-bold text-[#1a2744]">Hover Practice — التمرين التفاعلي</h1>
        </div>
        <p className="text-sm text-gray-600 flex items-center gap-1.5">
          <Info size={14} />
          Hover over any word to see its root, classification, and grammatical state.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-xs">
        {(Object.keys(caseClassMap) as Case[]).map((c) => (
          <span key={c} className={`arabic-text px-2 py-1 rounded border ${caseBgMap[c]} ${caseClassMap[c]}`} dir="rtl">
            {c}
          </span>
        ))}
      </div>

      {/* Sentences */}
      <div className="space-y-6">
        {tooltipSentences.map((sent, si) => (
          <motion.div
            key={sent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.1 }}
            className="bg-white/70 rounded-xl border border-[#c9a96e]/30 p-8"
          >
            <div className="text-center">
              <p className="arabic-text text-4xl leading-loose" dir="rtl">
                {sent.words.map((word, wi) => (
                  <span key={wi} className="inline-block relative">
                    <span
                      onMouseEnter={(e) => handleMouseEnter(word, e)}
                      onMouseLeave={() => setHoveredWord(null)}
                      className={`cursor-help arabic-text ${caseClassMap[word.case]} hover:underline decoration-dotted transition-all`}
                      style={{ padding: "0 4px" }}
                    >
                      {word.arabic}
                    </span>
                    {wi < sent.words.length - 1 && <span>&nbsp;</span>}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating tooltip */}
      <AnimatePresence>
        {hoveredWord && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed pointer-events-none z-50 tooltip-content"
            style={{
              left: hoverPosition.x,
              top: hoverPosition.y,
              transform: "translateX(-50%)",
            }}
          >
            <div className={`rounded-lg border-2 shadow-xl p-4 ${caseBgMap[hoveredWord.case]}`}>
              <p className="arabic-text text-2xl font-bold mb-2" dir="rtl">{hoveredWord.arabic}</p>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-semibold text-gray-600">Root:</span>{" "}
                  <span className="arabic-text text-[#1a2744]" dir="rtl">{hoveredWord.root}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Classification:</span>{" "}
                  <span className="arabic-text text-[#1a2744]" dir="rtl">{hoveredWord.classification}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Grammatical State:</span>{" "}
                  <span className="arabic-text text-[#1a2744]" dir="rtl">{hoveredWord.grammaticalState}</span>
                </p>
                <p className="pt-1 flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded-full ${hoveredWord.case === "مرفوع" ? "bg-blue-500" : hoveredWord.case === "منصوب" ? "bg-red-500" : hoveredWord.case === "مجرور" ? "bg-green-500" : "bg-gray-500"}`} />
                  <span className="arabic-text font-semibold" dir="rtl">{hoveredWord.case}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}