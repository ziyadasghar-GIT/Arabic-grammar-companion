"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointerClick, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { tooltipSentences, type TooltipWord } from "@/data/parsing-game";
import type { Case } from "@/data/curriculum";

const caseClassMap: Record<Case, string> = {
  "مرفوع": "text-blue-700",
  "منصوب": "text-red-700",
  "مجرور": "text-green-700",
  "مبني": "text-gray-600",
};

export default function HoverPracticePage() {
  const [hoveredWord, setHoveredWord] = useState<TooltipWord | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (word: TooltipWord, e: React.MouseEvent) => {
    setHoveredWord(word);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setHoverPosition({ x: rect.left + rect.width / 2, y: rect.bottom + 10 });
  };

  return (
    <Layout>
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#c9a96e] mb-4">
        <ArrowLeft size={16} /> Dashboard
      </Link>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1.5">
          <div className="p-2 bg-[#1a2744] rounded-lg text-[#c9a96e]">
            <MousePointerClick size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#1a2744]">Hover Practice</h1>
            <p className="arabic-text text-[#c9a96e] text-xl" dir="rtl">التمرين التفاعلي</p>
          </div>
        </div>
        <p className="text-sm text-[#4a4a4a] flex items-center gap-2">
          <Info size={15} /> Hover over any word to reveal its root, classification and grammatical state.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(caseClassMap).map(([c, cls]) => (
          <span key={c} className={`arabic-text px-3 py-1 text-sm rounded-full border bg-white ${cls}`} dir="rtl">
            {c}
          </span>
        ))}
      </div>

      {/* Sentences */}
      <div className="space-y-5">
        {tooltipSentences.map((sent, si) => (
          <div key={sent.id} className="card rounded-2xl p-8">
            <div className="text-center">
              <p className="arabic-text text-3xl lg:text-4xl leading-[1.9] tracking-wide" dir="rtl">
                {sent.words.map((word, wi) => (
                  <span key={wi} className="inline-block">
                    <span
                      onMouseEnter={(e) => handleMouseEnter(word, e)}
                      onMouseLeave={() => setHoveredWord(null)}
                      className={`cursor-help transition-all hover:underline decoration-dotted ${caseClassMap[word.case]}`}
                    >
                      {word.arabic}
                    </span>
                    {wi < sent.words.length - 1 && " "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredWord && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: hoverPosition.x,
              top: hoverPosition.y,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-white border border-[#c9a96e]/30 shadow-xl rounded-2xl p-4 min-w-[240px]">
              <div className="arabic-text text-2xl font-semibold mb-2 text-[#1a2744]" dir="rtl">{hoveredWord.arabic}</div>
              <div className="space-y-1 text-sm">
                <div><span className="text-gray-500">Root:</span> <span className="arabic-text font-medium">{hoveredWord.root}</span></div>
                <div><span className="text-gray-500">Classification:</span> <span className="arabic-text">{hoveredWord.classification}</span></div>
                <div><span className="text-gray-500">Grammatical state:</span> <span className="arabic-text font-semibold">{hoveredWord.grammaticalState}</span></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
