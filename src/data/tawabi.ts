// Followers (التوابع) data — from Nahw Mir and Al-Kafiyah

import type { Module } from "./curriculum";

export const followers: Module[] = [
  {
    id: "followers",
    title: "Followers (التوابع)",
    titleArabic: "التوابع",
    icon: "Copy",
    description: "Words that follow the grammatical state of a preceding word — adjectives, conjoined, appositives, and substitutes.",
    subtopics: [
      {
        id: "naat",
        title: "The Adjective (النعت)",
        titleArabic: "النعت",
        definition: "الصفة: تابع يدلّ على معنى في متبوعه مطلقاً. فائدته تخصيص أو توضيح. وتتبع متبوعها في عشرة أشياء: التعريف، والتنكير، والتذكير، والتأنيث، والإفراد، والتثنية، والجمع، والرفع، والنصب، والجرّ.",
        examples: [
          { arabic: "جَاءَنِيْ رَجُلٌ عَالِمٌ", irab: "عَالِمٌ: نعت مرفوع تابع لرَجُلٌ", case: "مرفوع", source: "nahw-mir", translation: "A learned man came to me" },
          { arabic: "رَجُلَانِ عَالِمَانِ", irab: "عَالِمَانِ: نعت مرفوع بالألف", case: "مرفوع", source: "nahw-mir", translation: "Two learned men" },
          { arabic: "رِجَالٌ عَالِمُوْنَ", irab: "عَالِمُوْنَ: نعت مرفوع بالواو", case: "مرفوع", source: "nahw-mir", translation: "Learned men" },
          { arabic: "جَاءَ رَجُلٌ عَالِمٌ", irab: "عَالِمٌ: نعت مرفوع", case: "مرفوع", source: "al-kafiyah", translation: "A learned man came" },
        ],
        nuances: "Al-Kafiyah: النعت: تابع يدلّ على معنى في متبوعه مطلقاً. وقد يكون لمجرّد الثناء، أو الذم، أو التأكيد. والنعت السببي الذي يدلّ على معنى في متعلق متبوعه، يتبع متبوعه في خمسة: التعريف، والتنكير، والرفع، والنصب، والجرّ.",
      },
      {
        id: "tawkeed",
        title: "Emphasis (التأكيد)",
        titleArabic: "التأكيد",
        definition: "التأكيد: تابع يدلّ على تقرير حال المتبوع في النسبة أو الشمول. وهو لفظي (تكرار اللفظ) ومعنوي (بثمانية ألفاظ: نفس، عين، كلا وكلتا، كل، جميع، أجمع، أكتع، أبتع، أبصع).",
        examples: [
          { arabic: "جَاءَنِيْ زَيْدٌ نَفْسُهُ", irab: "نَفْسُهُ: تأكيد معنوي مرفوع", case: "مرفوع", source: "nahw-mir", translation: "Zayd himself came to me" },
          { arabic: "جَاءَنِيْ الْقَوْمُ كُلُّهُمْ", irab: "كُلُّهُمْ: تأكيد معنوي مرفوع", case: "مرفوع", source: "nahw-mir", translation: "All the people came to me" },
          { arabic: "رَأَيْتُ زَيْدًا عَيْنَهُ", irab: "عَيْنَهُ: تأكيد معنوي منصوب", case: "منصوب", source: "nahw-mir", translation: "I saw Zayd himself" },
        ],
        nuances: "Al-Kafiyah: التأكيد: تابع يقرّر أمر المتبوع في النسبة أو الشمول. أَكتع وأبتع وأبصع أتباع لأجمع، فلا تتقدّم عليه.",
      },
      {
        id: "badal",
        title: "Substitution (البدل)",
        titleArabic: "البدل",
        definition: "البدل: تابع مقصود بالنسبة، وهو على أربعة أقسام: بدل الكلّ، وبدل البعض، وبدل الاشتمال، وبدل الغلط.",
        examples: [
          { arabic: "جَاءَنِيْ زَيْدٌ أَخُوْكَ", irab: "أَخُوْكَ: بدل الكل مرفوع", case: "مرفوع", source: "nahw-mir", translation: "Zayd, your brother, came to me" },
          { arabic: "ضُرِبَ زَيْدٌ رَأْسَهُ", irab: "رَأْسَ: بدل البعض منصوب", case: "منصوب", source: "nahw-mir", translation: "Zayd's head was struck" },
          { arabic: "سُلِبَ زَيْدٌ ثَوْبَهُ", irab: "ثَوْبَ: بدل الاشتمال منصوب", case: "منصوب", source: "nahw-mir", translation: "Zayd's garment was taken" },
        ],
        nuances: "Al-Kafiyah: البدل: تابع مقصود بما نسب إلى المتبوع دونه. وهو بدل الكلّ، والبعض، والاشتمال، والغلط.",
      },
      {
        id: "atf",
        title: "Conjunction (العطف)",
        titleArabic: "العطف",
        definition: "العطف: تابع مقصود بالنسبة مع متبوعه، بعد حروف العطف العشرة: الواو، الفاء، ثمّ، حتى، أو، إمّا، أم، لا، بل، لكن.",
        examples: [
          { arabic: "جَاءَنِيْ زَيْدٌ وَّعَمْرٌو", irab: "عَمْرٌو: معطوف على زَيْدٌ مرفوع", case: "مرفوع", source: "nahw-mir", translation: "Zayd and Amr came to me" },
          { arabic: "رَأَيْتُ زَيْدًا وَّعَمْرًا", irab: "عَمْرًا: معطوف على زَيْدًا منصوب", case: "منصوب", source: "nahw-mir", translation: "I saw Zayd and Amr" },
        ],
        nuances: "Al-Kafiyah: العطف: تابع مقصود بالنسبة مع متبوعه. فالواو للجمع مطلقاً ولا ترتيب فيها. والفاء للترتيب. وثمّ مثلها بمهلة. و(أو) و(إمّا) و(أم) لأحد الأمرين مبهماً.",
      },
    ],
  },
];