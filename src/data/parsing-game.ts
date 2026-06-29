// Parsing game: sentences where dragging a governing particle changes the ending

export interface ParticleOption {
  arabic: string;
  latin: string;
  effect: string; // what case it causes
  color: string; // tailwind color class
}

export interface GameSentence {
  id: string;
  baseSentence: string; // without particle
  baseEnding: string;
  baseCase: string;
  resultSentence: string; // with particle applied
  resultEnding: string;
  resultCase: string;
  resultExplanation: string;
  particle: string;
}

export const gameParticles: ParticleOption[] = [
  {
    arabic: "إِنَّ",
    latin: "inna",
    effect: "نصب الاسم ورفع الخبر",
    color: "text-red-500",
  },
  {
    arabic: "لَنْ",
    latin: "lan",
    effect: "نصب الفعل المضارع",
    color: "text-red-500",
  },
  {
    arabic: "لَمْ",
    latin: "lam",
    effect: "جزم الفعل المضارع",
    color: "text-purple-500",
  },
  {
    arabic: "بِـ",
    latin: "bi",
    effect: "جرّ الاسم",
    color: "text-green-500",
  },
  {
    arabic: "كَأَنَّ",
    latin: "ka'anna",
    effect: "نصب الاسم ورفع الخبر",
    color: "text-red-500",
  },
  {
    arabic: "لَيْتَ",
    latin: "layta",
    effect: "نصب الاسم ورفع الخبر",
    color: "text-red-500",
  },
  {
    arabic: "لَعَلَّ",
    latin: "la'alla",
    effect: "نصب الاسم ورفع الخبر",
    color: "text-red-500",
  },
  {
    arabic: "كَيْ",
    latin: "kay",
    effect: "نصب الفعل المضارع",
    color: "text-red-500",
  },
];

export const gameSentences: GameSentence[] = [
  {
    id: "gs-1",
    baseSentence: "زَيْدٌ قَائِمٌ",
    baseEnding: "ـٌ",
    baseCase: "مرفوع (مبتدأ)",
    resultSentence: "إِنَّ زَيْدًا قَائِمٌ",
    resultEnding: "ـًا",
    resultCase: "منصوب (اسم إنّ)",
    resultExplanation: "إِنَّ من أخوات إنَّ تنصب الاسم وترفع الخبر. فزَيْدٌ الذي كان مبتدأً مرفوعاً صار اسم إنّ منصوباً، وقَائِمٌ الذي كان خبراً مرفوعاً بقي خبراً مرفوعاً.",
    particle: "إِنَّ",
  },
  {
    id: "gs-2",
    baseSentence: "يَضْرِبُ",
    baseEnding: "ـُ",
    baseCase: "مرفوع",
    resultSentence: "لَنْ يَضْرِبَ",
    resultEnding: "ـَ",
    resultCase: "منصوب",
    resultExplanation: "لَنْ من حروف النصب، تنصب الفعل المضارع. فالضمة التي كانت علامة الرفع تقلب فتحة علامة النصب.",
    particle: "لَنْ",
  },
  {
    id: "gs-3",
    baseSentence: "يَضْرِبُ",
    baseEnding: "ـُ",
    baseCase: "مرفوع",
    resultSentence: "لَمْ يَضْرِبْ",
    resultEnding: "ـْ",
    resultCase: "مجزوم",
    resultExplanation: "لَمْ من حروف الجزم، تجزم الفعل المضارع. فالضمة التي كانت علامة الرفع تقلب سكوناً علامة الجزم.",
    particle: "لَمْ",
  },
  {
    id: "gs-4",
    baseSentence: "زَيْدٌ",
    baseEnding: "ـٌ",
    baseCase: "مرفوع",
    resultSentence: "بِزَيْدٍ",
    resultEnding: "ـٍ",
    resultCase: "مجرور",
    resultExplanation: "الباء من حروف الجرّ، تجرّ الاسم. فالضمة التي كانت علامة الرفع تقلب كسرة علامة الجرّ.",
    particle: "بِـ",
  },
  {
    id: "gs-5",
    baseSentence: "زَيْدٌ أَسَدٌ",
    baseEnding: "ـٌ",
    baseCase: "مرفوع (مبتدأ)",
    resultSentence: "كَأَنَّ زَيْدًا أَسَدٌ",
    resultEnding: "ـًا",
    resultCase: "منصوب (اسم كأنّ)",
    resultExplanation: "كَأَنَّ من الحروف المشبّهة بالفعل، تنصب الاسم وترفع الخبر. فزَيْدٌ المرفوع يصير منصوباً اسم كأنّ، وأَسَدٌ يبقى مرفوعاً خبراً.",
    particle: "كَأَنَّ",
  },
  {
    id: "gs-6",
    baseSentence: "زَيْدًا حَاضِرٌ",
    baseEnding: "ـًا",
    baseCase: "منصوب (مع ليت)",
    resultSentence: "لَيْتَ زَيْدًا حَاضِرٌ",
    resultEnding: "ـًا",
    resultCase: "منصوب (اسم ليت)",
    resultExplanation: "لَيْتَ للتمنّي، من الحروف المشبّهة بالفعل، تنصب الاسم وترفع الخبر. زَيْدًا اسم ليت منصوب، حَاضِرٌ خبر ليت مرفوع.",
    particle: "لَيْتَ",
  },
  {
    id: "gs-7",
    baseSentence: "يَخْرُجُ",
    baseEnding: "ـُ",
    baseCase: "مرفوع",
    resultSentence: "كَيْ يَخْرُجَ",
    resultEnding: "ـَ",
    resultCase: "منصوب",
    resultExplanation: "كَيْ من حروف النصب، تنصب الفعل المضارع. فالضمة تقلب فتحة.",
    particle: "كَيْ",
  },
  {
    id: "gs-8",
    baseSentence: "عَمْرٌو غَالِبٌ",
    baseEnding: "ـٌ",
    baseCase: "مرفوع (مبتدأ)",
    resultSentence: "لَعَلَّ عَمْرًا غَالِبٌ",
    resultEnding: "ـًا",
    resultCase: "منصوب (اسم لعل)",
    resultExplanation: "لَعَلَّ للترجّي، من الحروف المشبّهة بالفعل، تنصب الاسم وترفع الخبر. عَمْرٌو المرفوع يصير منصوباً اسم لعل، وغَالِبٌ يبقى مرفوعاً خبراً.",
    particle: "لَعَلَّ",
  },
];

// Hover tooltip practice sentences
export interface TooltipWord {
  arabic: string;
  root: string;
  classification: string;
  grammaticalState: string;
  case: "مرفوع" | "منصوب" | "مجرور" | "مبني";
}

export interface TooltipSentence {
  id: string;
  sentence: string;
  words: TooltipWord[];
}

export const tooltipSentences: TooltipSentence[] = [
  {
    id: "ts-1",
    sentence: "ضَرَبَ زَيْدٌ عَمْرًا",
    words: [
      { arabic: "ضَرَبَ", root: "ض-ر-ب", classification: "فعل ماضٍ", grammaticalState: "مبني على الفتح", case: "مبني" },
      { arabic: "زَيْدٌ", root: "ز-ي-د", classification: "اسم علم", grammaticalState: "فاعل مرفوع بالضمة", case: "مرفوع" },
      { arabic: "عَمْرًا", root: "ع-م-ر", classification: "اسم علم", grammaticalState: "مفعول به منصوب بالفتحة", case: "منصوب" },
    ],
  },
  {
    id: "ts-2",
    sentence: "إِنَّ زَيْدًا قَائِمٌ",
    words: [
      { arabic: "إِنَّ", root: "إ-ن-ن", classification: "حرف مشبّه بالفعل", grammaticalState: "حرف ناسخ (نصب الاسم ورفع الخبر)", case: "مبني" },
      { arabic: "زَيْدًا", root: "ز-ي-د", classification: "اسم علم", grammaticalState: "اسم إنّ منصوب بالفتحة", case: "منصوب" },
      { arabic: "قَائِمٌ", root: "ق-ي-م", classification: "اسم فاعل", grammaticalState: "خبر إنّ مرفوع بالضمة", case: "مرفوع" },
    ],
  },
  {
    id: "ts-3",
    sentence: "كَانَ زَيْدٌ قَائِمًا",
    words: [
      { arabic: "كَانَ", root: "ك-و-ن", classification: "فعل ناقص", grammaticalState: "حرف ناسخ (رفع الاسم ونصب الخبر)", case: "مبني" },
      { arabic: "زَيْدٌ", root: "ز-ي-د", classification: "اسم علم", grammaticalState: "اسم كان مرفوع بالضمة", case: "مرفوع" },
      { arabic: "قَائِمًا", root: "ق-ي-م", classification: "اسم فاعل", grammaticalState: "خبر كان منصوب بالفتحة", case: "منصوب" },
    ],
  },
  {
    id: "ts-4",
    sentence: "مَرَرْتُ بِزَيْدٍ",
    words: [
      { arabic: "مَرَرْتُ", root: "م-ر-ر", classification: "فعل ماضٍ + ضمير", grammaticalState: "مبني على السكون", case: "مبني" },
      { arabic: "بِـ", root: "—", classification: "حرف جر", grammaticalState: "حرف جر مبني", case: "مبني" },
      { arabic: "زَيْدٍ", root: "ز-ي-د", classification: "اسم علم", grammaticalState: "اسم مجرور بالباء بالكسرة", case: "مجرور" },
    ],
  },
  {
    id: "ts-5",
    sentence: "لَمْ يَضْرِبْ زَيْدٌ",
    words: [
      { arabic: "لَمْ", root: "—", classification: "حرف جزم ونفي", grammaticalState: "حرف جزم مبني", case: "مبني" },
      { arabic: "يَضْرِبْ", root: "ض-ر-ب", classification: "فعل مضارع", grammaticalState: "مجزوم بالسكون", case: "مبني" },
      { arabic: "زَيْدٌ", root: "ز-ي-د", classification: "اسم علم", grammaticalState: "فاعل مرفوع بالضمة", case: "مرفوع" },
    ],
  },
  {
    id: "ts-6",
    sentence: "لَنْ يَخْرُجَ زَيْدٌ",
    words: [
      { arabic: "لَنْ", root: "—", classification: "حرف نصب ونفي", grammaticalState: "حرف نصب مبني", case: "مبني" },
      { arabic: "يَخْرُجَ", root: "خ-ر-ج", classification: "فعل مضارع", grammaticalState: "منصوب بالفتحة", case: "منصوب" },
      { arabic: "زَيْدٌ", root: "ز-ي-د", classification: "اسم علم", grammaticalState: "فاعل مرفوع بالضمة", case: "مرفوع" },
    ],
  },
];