"use client";

import { motion } from "framer-motion";
import type { Example } from "@/data/curriculum";
import CaseBadge from "./CaseBadge";
import { CASE_VARIANT, exampleArabicClass } from "@/lib/caseStyles";

export default function ExampleCard({ example, index }: { example: Example; index: number }) {
  const sourceLabel = example.source === "nahw-mir" ? "Nahw Mir" : "Al-Kafiyah";
  const sourceClass =
    example.source === "nahw-mir"
      ? "bg-[#1a2744]/5 text-[#1a2744]"
      : "bg-amber-100 text-amber-700";
  const variant = CASE_VARIANT[example.case];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={`example-card example-card--${variant} bg-white/90 rounded-xl border border-[#c9a96e]/20 p-5 hover:border-[#c9a96e]/40 transition-all`}
    >
      <div className="flex items-start justify-between mb-3 gap-3">
        <div className={`text-3xl arabic-text leading-relaxed ${exampleArabicClass(example.case)}`} dir="rtl">
          {example.arabic}
        </div>
        <CaseBadge caseType={example.case} />
      </div>

      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium text-[#1a2744]">Iʿrāb:</span>{" "}
          <span className="arabic-text" dir="rtl">{example.irab}</span>
        </div>
        <div className="italic text-gray-600">{example.translation}</div>
        <div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${sourceClass}`}>{sourceLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}