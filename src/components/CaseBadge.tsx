import type { Case } from "@/data/curriculum";
import { ALL_CASES, CASE_ENGLISH, CASE_VARIANT, caseFromText } from "@/lib/caseStyles";

type LegendSize = "default" | "compact";

export function CaseLegend({ size = "default" }: { size?: LegendSize }) {
  const pillClass = size === "compact" ? "legend-pill legend-pill--sm" : "legend-pill";

  return (
    <div className="bg-white/80 border border-[#c9a96e]/25 rounded-2xl p-4 sm:p-5">
      <div className="text-center text-[10px] tracking-[2.5px] font-semibold text-[#1a2744]/60 mb-3">
        COLOR-CODED GRAMMATICAL CASES
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ALL_CASES.map((c) => {
          const v = CASE_VARIANT[c];
          return (
            <div key={c} className={`${pillClass} legend-pill--${v}`}>
              <span className={`case-dot case-dot--${v}`} />
              <span className="arabic-text font-semibold text-[15px]" dir="rtl">
                {c}
              </span>
              <span className="opacity-40">·</span>
              <span className="text-sm font-medium">{CASE_ENGLISH[c]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CaseBadge({ caseType }: { caseType: Case }) {
  const variant = CASE_VARIANT[caseType];
  const arabic = caseType;
  const english = CASE_ENGLISH[caseType];
  return (
    <span className={`case-badge case-badge--${variant}`}>
      <span className={`case-dot case-dot--${variant}`} />
      <span className="arabic-text font-semibold" dir="rtl">
        {arabic}
      </span>
      <span className="opacity-40">·</span>
      <span>{english}</span>
    </span>
  );
}

export function CaseLabel({ text }: { text: string }) {
  const matched = caseFromText(text);
  if (!matched) {
    return <span className="text-sm text-[#1a2744]/80">{text}</span>;
  }
  const variantKey = CASE_VARIANT[matched];
  return (
    <span className={`case-badge case-badge--${variantKey} text-sm`}>
      <span className={`case-dot case-dot--${variantKey}`} />
      <span className="arabic-text" dir="rtl">
        {text}
      </span>
    </span>
  );
}

export default CaseBadge;