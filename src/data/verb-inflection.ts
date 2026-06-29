// Verb inflection data — from Nahw Mir (foundational) and Al-Kafiyah (nuances)

import type { Module } from "./curriculum";

export const verbInflection: Module[] = [
  {
    id: "verb-inflection",
    title: "Verb Inflection (إعراب الفعل)",
    titleArabic: "إعراب الفعل",
    icon: "Repeat",
    description: "The inflection of the present tense verb — nominative, subjunctive, and jussive — and the particles that govern each.",
    subtopics: [
      {
        id: "mudari-marfu",
        title: "Nominative Present (مرفوع)",
        titleArabic: "رفع المضارع",
        definition: "الفعل المضارع مرفوع إذا تجرّد من الناصب والجازم. رفعه بالضمة في الصحيح المجرد، وبإثبات النون في الأفعال الخمسة (يَضْرِبَانِ، يَضْرِبُوْنَ، تَضْرِبِيْنَ).",
        examples: [
          { arabic: "هُوَ يَضْرِبُ", irab: "يَضْرِبُ: فعل مضارع مرفوع بالضمة", case: "مرفوع", source: "nahw-mir", translation: "He strikes" },
          { arabic: "هُمَا يَضْرِبَانِ", irab: "يَضْرِبَانِ: فعل مضارع مرفوع بثبات النون", case: "مرفوع", source: "nahw-mir", translation: "They (dual) strike" },
          { arabic: "هُمْ يَضْرِبُوْنَ", irab: "يَضْرِبُوْنَ: فعل مضارع مرفوع بثبات النون", case: "مرفوع", source: "nahw-mir", translation: "They (plural) strike" },
          { arabic: "أَنْتِ تَضْرِبِيْنِ", irab: "تَضْرِبِيْنِ: فعل مضارع مرفوع بثبات النون", case: "مرفوع", source: "nahw-mir", translation: "You (fem.) strike" },
        ],
        nuances: "Al-Kafiyah: المضارع: ما أشبه الاسم بأحد حروف (نأيت). ويرتفع إذا تجرّد عن الناصب والجازم، نحو (يقوم زيد).",
      },
      {
        id: "mudari-mansub",
        title: "Subjunctive Present (منصوب)",
        titleArabic: "نصب المضارع",
        definition: "النواصب للفعل المضارع أربعة: أنْ، ولنْ، وكَيْ، وإذَنْ. وتُقدّر أنْ بعد ستة: حتى، ولام الجحد، وأو، وواو الصرف، ولام كي، والفاء السببية. ينصب المضارع بحذف النون في الأفعال الخمسة، وبالفتحة في غيرها.",
        examples: [
          { arabic: "أُرِيْدُ أَنْ تَقُوْمَ", irab: "تَقُوْمَ: مضارع منصوب بأنْ", case: "منصوب", source: "nahw-mir", translation: "I want you to stand" },
          { arabic: "لَنْ يَخْرُجَ زَيْدٌ", irab: "يَخْرُجَ: مضارع منصوب بلنْ", case: "منصوب", source: "nahw-mir", translation: "Zayd will not leave" },
          { arabic: "أَسْلَمْتُ كَيْ أَدْخُلَ الْجَنَّةَ", irab: "أَدْخُلَ: مضارع منصوب بكيْ", case: "منصوب", source: "nahw-mir", translation: "I embraced Islam to enter Paradise" },
          { arabic: "لَنْ يَّضْرِبَا", irab: "يَّضْرِبَا: مضارع منصوب بحذف النون", case: "منصوب", source: "nahw-mir", translation: "They (dual) will not strike" },
        ],
        nuances: "Al-Kafiyah: وينتصب بـ (أنّ) و(لنّ) و(إذن) و(كي). وبـ (أن) مقدّرة بعد (حتّى) ولام (كي) ولام الجحود والفاء والواو و(أو).",
      },
      {
        id: "mudari-majzum",
        title: "Jussive Present (مجزوم)",
        titleArabic: "جزم المضارع",
        definition: "الجازمة للفعل المضارع خمسة: لمْ، ولمَّا، ولام الأمر، ولا النهي، وإن الشرطية. يجزم المضارع بالسكون في الصحيح، وبحذف النون في الأفعال الخمسة، وبحذف حرف العلة في المعتل الآخر.",
        examples: [
          { arabic: "لَمْ يَضْرِبْ", irab: "يَضْرِبْ: مضارع مجزوم بالسكون", case: "مبني", source: "nahw-mir", translation: "He did not strike" },
          { arabic: "لَمَّا يَنْصُرْ", irab: "يَنْصُرْ: مضارع مجزوم بلمَّا", case: "مبني", source: "nahw-mir", translation: "He has not yet helped" },
          { arabic: "لِيَنْصُرْ", irab: "يَنْصُرْ: مضارع مجزوم بلام الأمر", case: "مبني", source: "nahw-mir", translation: "Let him help" },
          { arabic: "لَا تَنْصُرْ", irab: "تَنْصُرْ: مضارع مجزوم بلا الناهية", case: "مبني", source: "nahw-mir", translation: "Do not [expect to] be helped" },
        ],
        nuances: "Al-Kafiyah: وينجزم بـ (لم) و(لمّا) ولام الأمر و(لا) في النهي وكلم المجازاة. فـ (لم) لقلب المضارع ماضياً ونفيه. و(لمّا) مثلها وتختص بالاستغراق. وكلم المجازاة تدخل على فعلين.",
      },
    ],
  },
];