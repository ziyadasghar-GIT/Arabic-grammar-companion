import type { Case } from "@/data/curriculum";

const caseConfig: Record<
  Case,
  { label: string; arabic: string; classes: string; dotClass: string }
> = {
  "مرفوع": {
    label: "Nominative",
    arabic: "مرفوع",
    classes: "bg-blue-100 text-blue-900 border-blue-400",
    dotClass: "bg-blue-600",
  },
  "منصوب": {
    label: "Accusative",
    arabic: "منصوب",
    classes: "bg-red-100 text-red-900 border-red-400",
    dotClass: "bg-red-600",
  },
  "مجرور": {
    label: "Genitive",
    arabic: "مجرور",
    classes: "bg-emerald-100 text-emerald-900 border-emerald-400",
    dotClass: "bg-green-600",
  },
  "مبني": {
    label: "Invariable",
    arabic: "مبني",
    classes: "bg-slate-100 text-slate-800 border-slate-400",
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
