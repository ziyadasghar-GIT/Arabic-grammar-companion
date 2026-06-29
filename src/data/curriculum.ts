// Curriculum data extracted from Nahw Mir (foundational definitions) and Al-Kafiyah (intermediate nuances)
// All Arabic examples are drawn directly from the source texts

export type Case = "مرفوع" | "منصوب" | "مجرور" | "مبني";

export interface Example {
  arabic: string;
  irab: string;
  case: Case;
  source: "nahw-mir" | "al-kafiyah";
  translation: string;
}

export interface SubTopic {
  id: string;
  title: string;
  titleArabic: string;
  definition: string;
  examples: Example[];
  nuances?: string;
}

export interface Module {
  id: string;
  title: string;
  titleArabic: string;
  icon: string; // lucide icon name
  description: string;
  subtopics: SubTopic[];
}

export const curriculum: Module[] = [
  {
    id: "the-word",
    title: "The Word (الكلمة)",
    titleArabic: "الكلمة",
    icon: "Type",
    description: "The foundational division of Arabic speech into noun, verb, and particle.",
    subtopics: [
      {
        id: "word-definition",
        title: "Definition of the Word",
        titleArabic: "تعريف الكلمة",
        definition: "اللفظ المستعمل في كلام العرب قسمان: مفرد ومركب. فالمفرد: لفظ منفرد يدل على معنى واحد مفرد، يقال له الكلمة أيضاً، والكلمة على ثلاثة أقسام: اسم، وفعل، وحرف.",
        examples: [
          { arabic: "رَجُلٌ", irab: "اسم مفرد", case: "مبني", source: "nahw-mir", translation: "A man (noun)" },
          { arabic: "ضَرَبَ", irab: "فعل ماضٍ مبني على الفتح", case: "مبني", source: "nahw-mir", translation: "He struck (verb)" },
          { arabic: "هَلْ", irab: "حرف استفهام مبني", case: "مبني", source: "nahw-mir", translation: "Is? (particle)" },
        ],
        nuances: "Al-Kafiyah defines: الكلمة: لفظ وضع لمعنى مفرد، وهي: اسم، وفعل، وحرف. لأنها إما أن تدلّ على معنى في نفسها أو لا، الثاني الحرف. والأول إما أن يقترن بأحد الأزمنة الثلاثة أو لا، الثاني الاسم، والأول الفعل.",
      },
      {
        id: "noun-definition",
        title: "The Noun (الاسم)",
        titleArabic: "الاسم",
        definition: "الاسم: ما دلّ على معنى في نفسه، من غير اقتران بزمان، مثل: محمّد، حصان، ذكاء، حجر. ومن خواصّه: دخول الألف واللام، والجرّ، والتنوين، والإسناد إليه، والإضافة.",
        examples: [
          { arabic: "اَلْحَمْدُ", irab: "اسم معرّف بالألف واللام", case: "مرفوع", source: "nahw-mir", translation: "The praise" },
          { arabic: "بَكْرٌ", irab: "اسم منوّن", case: "مرفوع", source: "nahw-mir", translation: "Bakr (with tanween)" },
          { arabic: "غُلَامُ زَيْدٍ", irab: "اسم مضاف", case: "مرفوع", source: "nahw-mir", translation: "Zayd's servant" },
        ],
        nuances: "Al-Kafiyah adds: الاسم: ما دلّ على معنى في نفسه غير مقترن بأحد الأزمنة الثلاثة. وهو معرب ومبنيّ، فالمعرب: المركّب الذي لم يشبه مبنيّ الأصل.",
      },
      {
        id: "verb-definition",
        title: "The Verb (الفعل)",
        titleArabic: "الفعل",
        definition: "الفعل: ما دلّ على معنى في نفسه «حدوث عمل» مقترن بزمان، مثل: صلى، صام، يصوم، أشهَدُ. ومن خواصّه: دخول قد، والسين، وسوف، والجوازم، وتاء التأنيث الساكنة.",
        examples: [
          { arabic: "قَدْ ضَرَبَ", irab: "فعل ماضٍ بعد قد", case: "مبني", source: "nahw-mir", translation: "He has struck" },
          { arabic: "سَيَضْرِبُ", irab: "فعل مضارع بعد السين", case: "مرفوع", source: "nahw-mir", translation: "He will strike" },
          { arabic: "لَمْ يَضْرِبْ", irab: "فعل مضارع مجزوم بلم", case: "مبني", source: "nahw-mir", translation: "He did not strike" },
        ],
        nuances: "Al-Kafiyah: الفعل: ما دلّ على معنى في نفسه مقترن بأحد الأزمنة الثلاثة. والماضي مبنيّ على الفتح، والمضارع معرب مرفوع إذا تجرّد عن الناصب والجازم، والأمر مبنيّ على ما يجزم به مضارعه.",
      },
      {
        id: "particle-definition",
        title: "The Particle (الحرف)",
        titleArabic: "الحرف",
        definition: "الحرف: ما دلّ على معنى في غيره، وليس له علامة يتميّز بها، كما للفعل والاسم. ومن علامة الحرف: إن لا توجد فيه علامة من علامات الاسم والفعل.",
        examples: [
          { arabic: "مِنْ", irab: "حرف جر مبني", case: "مبني", source: "nahw-mir", translation: "From (preposition)" },
          { arabic: "هَلْ", irab: "حرف استفهام مبني", case: "مبني", source: "nahw-mir", translation: "Is? (interrogative)" },
        ],
        nuances: "Al-Kafiyah: الحرف: ما دلّ على معنى في غيره ومن ثمّ احتاج في جزئيّته إلى اسم أو فعل.",
      },
    ],
  },
  {
    id: "sentence-structures",
    title: "Sentence Structures (الجمل)",
    titleArabic: "الجمل",
    icon: "AlignLeft",
    description: "Nominal and verbal sentences, their components, and sentence types.",
    subtopics: [
      {
        id: "nominal-sentence",
        title: "Nominal Sentence (الجملة الاسمية)",
        titleArabic: "الجملة الاسمية",
        definition: "الجملة الاسمية: ما كان جزءه الأول اسماً، فتسمى جملة اسمية، مثل: «زَيْدٌ عَالِمٌ»؛ جزءه الأول مسند إليه ويسمى مبتدأ، وجزءه الثاني مسند ويسمي خبراً.",
        examples: [
          { arabic: "زَيْدٌ عَالِمٌ", irab: "زَيْدٌ: مبتدأ مرفوع، عَالِمٌ: خبر مرفوع", case: "مرفوع", source: "nahw-mir", translation: "Zayd is knowledgeable" },
          { arabic: "عِنْدِيْ مَالٌ", irab: "مَالٌ: مبتدأ مؤخر مرفوع", case: "مرفوع", source: "nahw-mir", translation: "I have money (lit: with me is money)" },
        ],
        nuances: "Al-Kafiyah: المبتدأ: هو الاسم المجرّد عن العوامل اللفظيّة، مسنداً إليه. والخبر: هو المجرّد المسند به المغاير للصّفة المذكورة. وأصل المبتدأ التقديم، ومن ثمّ جاز (في داره زيد) وامتنع (صاحبها في الدّار).",
      },
      {
        id: "verbal-sentence",
        title: "Verbal Sentence (الجملة الفعلية)",
        titleArabic: "الجملة الفعلية",
        definition: "الجملة الفعلية: ما كان جزءه الأول فعلاً، مثل: «ضَرَبَ زَيْدٌ»؛ جزءه الأول مسند ويقال له الفعل، وجزءه الثاني مسند إليه ويقال له الفاعل.",
        examples: [
          { arabic: "ضَرَبَ زَيْدٌ", irab: "ضَرَبَ: فعل ماضٍ، زَيْدٌ: فاعل مرفوع", case: "مرفوع", source: "nahw-mir", translation: "Zayd struck" },
          { arabic: "قَامَ زَيْدٌ", irab: "قَامَ: فعل ماضٍ، زَيْدٌ: فاعل مرفوع", case: "مرفوع", source: "nahw-mir", translation: "Zayd stood" },
        ],
        nuances: "Al-Kafiyah: الفاعل: ما أسند إليه الفعل أو شبهه، وقدّم عليه على جهة قيامه به. والأصل أن يلي فعله، فلذلك جاز (ضرب غلامه زيد) وامتنع (ضرب غلامه زيدا).",
      },
      {
        id: "insha-sentences",
        title: "Insha Sentences (الإنشائية)",
        titleArabic: "الجملة الإنشائية",
        definition: "الجملة الإنشائية: ما لا يتصف قائلها بالصدق أو الكذب. وهي على أقسام: الأمر، النهي، الاستفهام، التمني، الترجي، العقود، النداء، العرض، القسم، التعجب.",
        examples: [
          { arabic: "إِفْعَلْ", irab: "أمر حاضر مبني على السكون", case: "مبني", source: "nahw-mir", translation: "Do! (command)" },
          { arabic: "لَا تَضْرِبْ", irab: "نهي عن الفعل، مجزوم بلا", case: "مبني", source: "nahw-mir", translation: "Do not strike" },
          { arabic: "هَلْ ضَرَبَ زَيْدٌ؟", irab: "جملة استفهامية", case: "مرفوع", source: "nahw-mir", translation: "Did Zayd strike?" },
          { arabic: "لَيْتَ زَيْدًا حَاضِرٌ", irab: "تمنّي: زَيْدًا اسم ليت منصوب", case: "منصوب", source: "nahw-mir", translation: "If only Zayd were present" },
        ],
      },
      {
        id: "compound-types",
        title: "Types of Compounds (المركبات)",
        titleArabic: "المركبات",
        definition: "المركب: لفظ يتركب من كلمتين أو أكثر. والمركب قسمان: مفيد وغير مفيد. والمركب غير المفيد ثلاثة أقسام: المركب الإضافي (غُلَامُ زَيْدٍ)، المركب العددي (أَحَدَ عَشَرَا)، ومركب منع الصرف (بَعَلَبَكُّ).",
        examples: [
          { arabic: "غُلَامُ زَيْدٍ", irab: "مركب إضافي: زَيْدٍ مجرور بالإضافة", case: "مجرور", source: "nahw-mir", translation: "Zayd's servant" },
          { arabic: "أَحَدَ عَشَرَا", irab: "مركب عددي مبني على فتح الجزئين", case: "مبني", source: "nahw-mir", translation: "Eleven" },
          { arabic: "بَعَلَبَكُّ", irab: "مركب منع صرف", case: "مبني", source: "nahw-mir", translation: "Ba'labakk (place name)" },
        ],
      },
    ],
  },
  {
    id: "irab",
    title: "Inflection (الإعراب)",
    titleArabic: "الإعراب",
    icon: "Wand2",
    description: "The system of case endings — nominative, accusative, genitive — and the rules of inflection.",
    subtopics: [
      {
        id: "irab-definition",
        title: "Definition of I'rab",
        titleArabic: "تعريف الإعراب",
        definition: "الإعراب: ما اختلف آخره به ليدلّ على المعاني المعتورة عليه. وأنواعه: رفع، ونصب، وجرّ. فالرفع: علم الفاعليّة، والنصب: علم المفعوليّة، والجرّ: علم الإضافة.",
        examples: [
          { arabic: "جَاءَنِيْ زَيْدٌ", irab: "زَيْدٌ: فاعل مرفوع بالضمة", case: "مرفوع", source: "nahw-mir", translation: "Zayd came to me" },
          { arabic: "رَأَيْتُ زَيْدًا", irab: "زَيْدًا: مفعول به منصوب بالفتحة", case: "منصوب", source: "nahw-mir", translation: "I saw Zayd" },
          { arabic: "مَرَرْتُ بِزَيْدٍ", irab: "زَيْدٍ: اسم مجرور بالباء بالكسرة", case: "مجرور", source: "nahw-mir", translation: "I passed by Zayd" },
        ],
        nuances: "Al-Kafiyah: العامل: ما به يتقوّم المعنى المقتضي للإعراب. والمفرد المنصرف، والجمع المكسّر المنصرف بالضّمة رفعاً، والفتحة نصباً، والكسرة جرّا.",
      },
      {
        id: "marfu-at",
        title: "The Nominative (المرفوعات)",
        titleArabic: "المرفوعات",
        definition: "المرفوعات: ما اشتمل على علم الفاعليّة. تشمل: الفاعل، المفعول ما لم يسمّ فاعله، المبتدأ والخبر، اسم كان وأخواتها، خبر إنّ وأخواتها، خبر لا النافية للجنس، اسم ما ولا المشبّهتين بليس.",
        examples: [
          { arabic: "قَامَ زَيْدٌ", irab: "زَيْدٌ: فاعل مرفوع", case: "مرفوع", source: "al-kafiyah", translation: "Zayd stood" },
          { arabic: "ضُرِبَ زَيْدٌ", irab: "زَيْدٌ: نائب فاعل مرفوع", case: "مرفوع", source: "al-kafiyah", translation: "Zayd was struck" },
          { arabic: "زَيْدٌ قَائِمٌ", irab: "زَيْدٌ: مبتدأ مرفوع، قَائِمٌ: خبر مرفوع", case: "مرفوع", source: "al-kafiyah", translation: "Zayd is standing" },
          { arabic: "كَانَ زَيْدٌ قَائِمًا", irab: "زَيْدٌ: اسم كان مرفوع، قَائِمًا: خبر كان منصوب", case: "مرفوع", source: "al-kafiyah", translation: "Zayd was standing" },
        ],
        nuances: "Al-Kafiyah details the types: الفاعل: ما أسند إليه الفعل أو شبهه، وقدّم عليه. والمبتدأ: الاسم المجرّد عن العوامل اللفظيّة، مسنداً إليه. والخبر: المجرّد المسند به المغاير للصفة.",
      },
      {
        id: "mansubat",
        title: "The Accusative (المنصوبات)",
        titleArabic: "المنصوبات",
        definition: "المنصوبات: ما اشتمل على علم المفعوليّة. تشمل: المفعول المطلق، المفعول به، المفعول فيه (الظرف)، المفعول له، المفعول معه، الحال، التمييز، المستثنى، اسم إنّ وأخواتها، خبر كان وأخواتها، المنادى.",
        examples: [
          { arabic: "ضَرَبَ زَيْدٌ عَمْرًا", irab: "عَمْرًا: مفعول به منصوب", case: "منصوب", source: "al-kafiyah", translation: "Zayd struck Amr" },
          { arabic: "جَلَسْتُ يَوْمَ الْجُمُعَةِ", irab: "يَوْمَ: مفعول فيه (ظرف زمان) منصوب", case: "منصوب", source: "al-kafiyah", translation: "I sat on Friday" },
          { arabic: "جَاءَ زَيْدٌ رَاكِبًا", irab: "رَاكِبًا: حال منصوب", case: "منصوب", source: "al-kafiyah", translation: "Zayd came riding" },
          { arabic: "إِنَّ زَيْدًا قَائِمٌ", irab: "زَيْدًا: اسم إنّ منصوب", case: "منصوب", source: "al-kafiyah", translation: "Indeed Zayd is standing" },
        ],
        nuances: "Al-Kafiyah على المفعول المطلق: اسم ما فعله فاعل فعل مذكور بمعناه. ويكون للتأكيد، والنوع، والعدد. والمنادى: المطلوب إقباله بحرف نائب مناب «أدعو».",
      },
      {
        id: "majrurat",
        title: "The Genitive (المجرورات)",
        titleArabic: "المجرورات",
        definition: "المجرورات: ما اشتمل على علم المضاف إليه. يجرّ الاسم بالحروف الجارة (من، إلى، في، الباء، اللام، الكاف، عن، على، حتى، ربّ، الواو، التاء) وبالإضافة.",
        examples: [
          { arabic: "اَلْمَالُ لِزَيْدٍ", irab: "زَيْدٍ: مجرور باللام", case: "مجرور", source: "nahw-mir", translation: "The wealth belongs to Zayd" },
          { arabic: "غُلَامُ زَيْدٍ", irab: "زَيْدٍ: مضاف إليه مجرور", case: "مجرور", source: "nahw-mir", translation: "Zayd's servant" },
          { arabic: "بِزَيْدٍ", irab: "زَيْدٍ: مجرور بالباء", case: "مجرور", source: "nahw-mir", translation: "By/with Zayd" },
        ],
        nuances: "Al-Kafiyah: المضاف إليه: كلّ اسم نسب إليه شيء بواسطة حرف الجرّ لفظاً أو تقديراً. والإضافة نوعان: معنوية (تفيد تعريفاً أو تخصيصاً) ولفظية (للتخفيف في اللفظ).",
      },
    ],
  },
];