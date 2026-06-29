// Governing particles data — extracted from Nahw Mir and Al-Kafiyah

import type { Module } from "./curriculum";

export const governingParticles: Module[] = [
  {
    id: "governing-particles",
    title: "Governing Particles (العوامل)",
    titleArabic: "العوامل",
    icon: "Atom",
    description: "Particles that govern case endings — prepositions, verb-like particles, negative particles, and conditionals.",
    subtopics: [
      {
        id: "huruf-jarra",
        title: "Prepositions (حروف الجر)",
        titleArabic: "حروف الجر",
        definition: "الحروف الجارّة: وهي سبعة عشر حرفاً: الباء، ومن، وإلى، وحتّى، وفي، واللام، وربّ، وواو القسم، وتاء القسم، وعن، وعلى، والكاف للتشبيه، ومذ، ومنذ، وحاشا، وخلا، وعدا. وهي تجرّ الاسم.",
        examples: [
          { arabic: "اَلْمَالُ لِزَيْدٍ", irab: "زَيْدٍ: مجرور باللام", case: "مجرور", source: "nahw-mir", translation: "The wealth is for Zayd" },
          { arabic: "بِزَيْدٍ", irab: "زَيْدٍ: مجرور بالباء", case: "مجرور", source: "nahw-mir", translation: "By Zayd" },
          { arabic: "وَاللهِ", irab: "اللهِ: مجرور بواو القسم", case: "مجرور", source: "nahw-mir", translation: "By Allah (oath)" },
          { arabic: "فِي الدَّارِ", irab: "الدَّارِ: مجرور بفي", case: "مجرور", source: "nahw-mir", translation: "In the house" },
        ],
        nuances: "Al-Kafiyah: (من) للابتداء، والتبيين، والتبعيض، وزائدة في غير الموجب. و(إلى) للانتهاء. و(في) للظرفيّة. و(الباء) للإلصاق، والاستعانة، والمصاحبة، والتعدية. و(اللام) للاختصاص، والتعليل. و(ربّ) للتقليل.",
      },
      {
        id: "huruf-mushabbaha",
        title: "Verb-Like Particles (الحروف المشبّهة بالفعل)",
        titleArabic: "الحروف المشبّهة بالفعل",
        definition: "الحروف المشبّهة بالفعل: وهي ستة: إنَّ، وأنَّ، وكأنَّ، ولكنَّ، وليت، ولعلّ. ولا بدّ لهذه الحروف من اسم منصوب وخبر مرفوع. فلفظ إنَّ وأنَّ للتحقيق، وكأنَّ للتشبيه، ولكنَّ للاستدراك، وليت لتمنّي، ولعلّ للترجّي.",
        examples: [
          { arabic: "إِنَّ زَيْدًا قَائِمٌ", irab: "زَيْدًا: اسم إنّ منصوب، قَائِمٌ: خبر إنّ مرفوع", case: "منصوب", source: "nahw-mir", translation: "Indeed Zayd is standing" },
          { arabic: "لَيْتَ زَيْدًا حَاضِرٌ", irab: "زَيْدًا: اسم ليت منصوب، حَاضِرٌ: خبر ليت مرفوع", case: "منصوب", source: "nahw-mir", translation: "If only Zayd were present" },
          { arabic: "لَعَلَّ عَمْرًا غَالِبٌ", irab: "عَمْرًا: اسم لعل منصوب، غَالِبٌ: خبر لعل مرفوع", case: "منصوب", source: "nahw-mir", translation: "Perhaps Amr will prevail" },
          { arabic: "كَأَنَّ زَيْدًا أَسَدٌ", irab: "زَيْدًا: اسم كأنّ منصوب، أَسَدٌ: خبر كأنّ مرفوع", case: "منصوب", source: "al-kafiyah", translation: "As if Zayd is a lion" },
        ],
        nuances: "Al-Kafiyah: لها صدر الكلام، سوى (أنّ) فهي بعكسها. وتلحقها (ما) فتلغى على الأفصح. فإنّ لا تغيّر معنى الجملة. وأنّ مع جملتها في حكم المفرد، من ثمّ وجب الكسر في موضع الجمل، والفتح في موضع المفرد.",
      },
      {
        id: "la-nafia",
        title: "Negative Particle لا (لا النافية للجنس)",
        titleArabic: "لا النافية للجنس",
        definition: "لا التي لنفي الجنس: يكون اسمها منصوباً مضافاً غالباً، وخبرها مرفوعاً، مثل: «لَا غُلَامَ رَجُلٍ ظَرِيْفٌ فِي الدَّارِ». فإن كانت بعدها نكرة مفردة، كانت مبنية على الفتح، مثل: «لَا رَجُلَ فِي الدَّارِ».",
        examples: [
          { arabic: "لَا رَجُلَ فِي الدَّارِ", irab: "رَجُلَ: اسم لا مبني على الفتح في محل نصب", case: "منصوب", source: "nahw-mir", translation: "There is no man in the house" },
          { arabic: "لَا غُلَامَ رَجُلٍ ظَرِيْفٌ فِي الدَّارِ", irab: "غُلَامَ: اسم لا منصوب، رَجُلٍ: مضاف إليه مجرور، ظَرِيْفٌ: خبر لا مرفوع", case: "مرفوع", source: "nahw-mir", translation: "No servant of a man is clever in the house" },
        ],
        nuances: "Al-Kafiyah: وإن كانت بعدها معرفة يجب تكريرها مع معرفة أخرى، وتلغي لا، وترفع المعرفة بالابتداء، مثل: «لَا زَيْدٌ عِنْدِيْ، وَلَا عَمْرٌو». وفي مثل «لا حول ولا قوة إلا بالله» خمسة أوجه.",
      },
      {
        id: "ma-la-mushabbaha",
        title: "ما and لا resembles ليس (ما ولا المشبّهتان بليس)",
        titleArabic: "ما ولا المشبّهتان بليس",
        definition: "ما ولا المشبّهتان بـ ليس: عملهما كعمل ليس، كما تقول: «مَا زَيْدٌ قَائِمًا»، «زَيْدٌ»: اسم ما، و«قَائِمًا» خبرها. وإذا زيدت إنّ مع ما، أو انتقض النفي بإلاّ، أو تقدّم الخبر، بطل العمل.",
        examples: [
          { arabic: "مَا زَيْدٌ قَائِمًا", irab: "زَيْدٌ: اسم ما مرفوع، قَائِمًا: خبر ما منصوب", case: "منصوب", source: "nahw-mir", translation: "Zayd is not standing" },
          { arabic: "لَا رَجُلَ أَفْضَلُ مِنْكَ", irab: "رَجُلَ: اسم لا مرفوع، أَفْضَلُ: خبر لا منصوب", case: "مرفوع", source: "nahw-mir", translation: "No man is better than you" },
        ],
        nuances: "Al-Kafiyah: وإذا عطف عليه بموجب فالرفع. وهي لغة أهل الحجاز. وإذا زيدت إنّ مع ما، أو انتقض النفي بإلاّ، أو تقدّم الخبر، بطل العمل.",
      },
    ],
  },
];