import type { Case } from "@/data/curriculum";

const caseVariant: Record<Case, "marfu" | "mansub" | "majrur" | "mabni"> = {
  "مرفوع": "marfu",
  "منصوب": "mansub",
  "مجرور": "majrur",
  "مبني": "mabni",
};

const caseLabel: Record<Case, { arabic: string; english: string }> = {
  "مرفوع": { arabic: "مرفوع", english: "Nominative" },
  "منصوب": { arabic: "منصوب", english: "Accusative" },
  "مجرور": { arabic: "مجرور", english: "Genitive" },
  "مبني": { arabic: "مبني", english: "Invariable" },
};

export default function CaseBadge({ caseType }: { caseType: Case }) {
  const variant = caseVariant[caseType];
  const { arabic, english } = caseLabel[caseType];
  return (
    <span className={`case-badge case-badge--${variant}`}>
      <span className={`case-dot case-dot--${variant}`} />
      <span className="arabic-text font-semibold" dir="rtl">{arabic}</span>
      <span className="opacity-40">·</span>
      <span>{english}</span>
    </span>
  );
}