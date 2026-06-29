import type { Case } from "@/data/curriculum";

export type CaseVariant = "marfu" | "mansub" | "majrur" | "mabni";

export const ALL_CASES: readonly Case[] = ["مرفوع", "منصوب", "مجرور", "مبني"] as const;

export const CASE_ENGLISH: Record<Case, string> = {
  "مرفوع": "Nominative",
  "منصوب": "Accusative",
  "مجرور": "Genitive",
  "مبني": "Invariable",
};

export const CASE_VARIANT: Record<Case, CaseVariant> = {
  "مرفوع": "marfu",
  "منصوب": "mansub",
  "مجرور": "majrur",
  "مبني": "mabni",
};

/** Match case from labels like "مرفوع (مبتدأ)" */
export function caseFromText(text: string): Case | null {
  for (const c of ALL_CASES) {
    if (text.includes(c)) return c;
  }
  return null;
}

export function wordCaseClass(caseType: Case): string {
  return `word-case word-case--${CASE_VARIANT[caseType]}`;
}

export function exampleArabicClass(caseType: Case): string {
  return `case-text case-text--${CASE_VARIANT[caseType]}`;
}