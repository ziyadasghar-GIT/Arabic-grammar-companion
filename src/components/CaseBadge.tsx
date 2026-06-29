import type { Case } from "@/data/curriculum";

const caseConfig: Record<
  Case,
  { label: string; arabic: string; classes: string; dotClass: string }
> = {
  "مرفوع": {
    label: "Nominative",
    arabic: "مرفوع",
    classes: "bg-blue-100 text-blue-800 border-blue-300",
    dotClass: "bg-blue-500",
  },
  "منصوب": {
    label: "Accusative",
    arabic: "منصوب",
    classes: "bg-red-100 text-red-800 border-red-300",
    dotClass: "bg-red-500",
  },
  "مجرور": {
    label: "Genitive",
    arabic: "مجرور",
    classes: "bg-green-100 text-green-800 border-green-300",
    dotClass: "bg-green-500",
  },
  "مبني": {
    label: "Invariable",
    arabic: "مبني",
    classes: "bg-gray-100 text-gray-800 border-gray-300",
    dotClass: "bg-gray-500",
  },
};

export default function CaseBadge({ caseType }: { caseType: Case }) {
  const config = caseConfig[caseType];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.classes}`}
    >
      <span className={`w-2 h-2 rounded-full ${config.dotClass}`} />
      {config.arabic}
      <span className="opacity-60">·</span>
      {config.label}
    </span>
  );
}