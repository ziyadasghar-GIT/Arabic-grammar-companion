"use client";

import { motion } from "framer-motion";
import type { Example } from "@/data/curriculum";
import CaseBadge from "./CaseBadge";

const caseColorMap: Record<string, string> = {
  "مرفوع": "case-marfu",
  "منصوب": "case-mansub",
  "مجرور": "case-majrur",
  "مبني": "case-mabni",
};

export default function ExampleCard({ example, index }: { example: Example; index: number }) {
  const sourceLabel = example.source === "nahw-mir" ? "Nahw Mir" : "Al-Kafiyah";
  const sourceClass = example.source === "nahw-mir" ? "bg-indigo-100 text-indigo-700" : "bg-amber-100 text-amber-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-white/80 backdrop-blur rounded-xl border border-[#c9a96e]/20 p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-3xl arabic-text leading-loose" dir="rtl">
          <span className={caseColorMap[example.case]}>{example.arabic}</span>
        </div>
        <CaseBadge caseType={example.case} />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-[#1a2744]">I&apos;rab: </span>
          <span className="arabic-text" dir="rtl">{example.irab}</span>
        </p>
        <p className="text-sm text-gray-600 italic">{example.translation}</p>
        <div className="flex items-center gap-2 pt-1">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sourceClass}`}>
            {sourceLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}