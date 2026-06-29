import type { Case } from "@/data/curriculum";

const caseConfig: Record<
  Case,
  { label: string; arabic: string; classes: string; dotClass: string }
> = {
  "مرفوع": {
    label: "Nominative",
    arabic: "مرفوع",
    classes: "bg-blue-50 text-blue-800 border-blue-200",
    dotClass: "bg-blue-500",
  },
  "منصوب": {
    label: "Accusative",
    arabic: "منصوب",
    classes: "bg-red-50 text-red-800 border-red-200",
    dotClass: "bg-red-500",
  },
  "مجرور": {
    label: "Genitive",
    arabic: "مجرور",
    classes: "bg-green-50 text-green-800 border-green-200",
    dotClass: "bg-green-500",
  },
  "مبني": {
    label: "Invariable",
    arabic: "مبني",
    classes: "bg-gray-50 text-gray-700 border-gray-200",
    dotClass: "bg-gray-500",
  },
};

export default function CaseBadge({ caseType }: { caseType: Case }) {
  const config = caseConfig[caseType];
  return (
    <span
      className={`inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-medium border ${config.classes}`}
    >
      <span className={`w-2.5 h-2.5 rounded-full ${config.dotClass}`} />
      <span className="arabic-text font-semibold" dir="rtl">{config.arabic}</span>
      <span className="text-[#1a2744]/30">·</span>
      <span className="text-xs tracking-wide">{config.label}</span>
    </span>
  );
}
