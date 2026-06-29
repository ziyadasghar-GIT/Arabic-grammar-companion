import type { Case } from "@/data/curriculum";

const caseConfig: Record<
  Case,
  { label: string; arabic: string; classes: string; dotClass: string }
> = {
  "مرفوع": {
    label: "Nominative",
    arabic: "مرفوع",
    classes: "bg-blue-50 text-blue-800 border-blue-300",
    dotClass: "bg-blue-600",
  },
  "منصوب": {
    label: "Accusative",
    arabic: "منصوب",
    classes: "bg-red-50 text-red-800 border-red-300",
    dotClass: "bg-red-600",
  },
  "مجرور": {
    label: "Genitive",
    arabic: "مجرور",
    classes: "bg-green-50 text-green-800 border-green-300",
    dotClass: "bg-green-600",
  },
  "مبني": {
    label: "Invariable",
    arabic: "مبني",
    classes: "bg-gray-50 text-gray-700 border-gray-300",
    dotClass: "bg-gray-600",
  },
};

export default function CaseBadge({ caseType }: { caseType: Case }) {
  const config = caseConfig[caseType];
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium border-2 ${config.classes}`}
    >
      <span className={`w-2.5 h-2.5 rounded-full ${config.dotClass}`} />
      <span className="arabic-text font-semibold" dir="rtl">{config.arabic}</span>
      <span className="text-[#1a2744]/30">·</span>
      <span>{config.label}</span>
    </span>
  );
}
