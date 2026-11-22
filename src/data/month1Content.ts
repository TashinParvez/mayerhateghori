import type {
  DailyRoutineStep,
  FeelingOption,
  GoldenRuleRow,
  KimsGameItem,
  LearningCluster,
  ResistanceScenario,
  SixMonthStep,
} from '../types';

export const UI_COPY = {
  brandName: {
    bn: 'মায়ের হাতেখড়ি',
    en: "Mom's Teaching Guide",
  },
  nav: {
    home: { bn: 'হোম', en: 'Home' },
    charts: { bn: 'খেলা ও চার্ট', en: 'Charts & Play' },
    guide: { bn: 'মা-বাবার গাইড', en: "Parent's Guide" },
  },
  switchLangLabel: {
    bn: 'English',
    en: 'বাংলা',
  },
  switchLangAria: {
    bn: 'ইংরেজি ভাষায় দেখুন',
    en: 'Switch to Bangla language',
  },
  month1Card: {
    kicker: { bn: '১ম মাস · শেখার বই ও রোডম্যাপ', en: 'Month 1 · Digital Guidebook & Roadmap' },
    title: { bn: '১ম মাস — মূল ভিত্তি তৈরি করা', en: 'Month 1 — Building the Foundation' },
    subtitle: {
      bn: 'এই ওয়েবসাইটটি আপনার নিজের শেখার বই। এখান থেকে খেলার নিয়ম ও উদাহরণ দেখে নিন, তারপর ফোন পাশে রেখে সন্তানের সাথে বাস্তবে অনুশীলন করুন।',
      en: 'This website is your personal guidebook. Learn the games and examples here, then put your phone aside and play together in real life.',
    },
    highlightsTitle: {
      bn: '১ম মাসে আমরা যে ৫টি বিষয়ে জোর দেব:',
      en: '5 Core Focus Points in Month 1:',
    },
    highlights: [
      { bn: 'নিজের কাজ নিজে করতে শেখা।', en: 'Learning to do small everyday tasks independently.' },
      { bn: 'চারপাশের সবকিছু মন দিয়ে খেয়াল করা।', en: 'Noticing and observing things around her.' },
      { bn: 'নতুন কিছু জানার আগ্রহ তৈরি করা।', en: 'Building curiosity to ask and discover new things.' },
      { bn: 'ভয় ছাড়াই মনের কথা প্রকাশ করতে শেখা।', en: 'Expressing thoughts and feelings without fear.' },
      { bn: 'মুখস্থ করার চেয়ে বুঝে শেখার অভ্যাস তৈরি করা।', en: 'Understanding through real play instead of memorizing.' },
    ],
    primaryBtn: {
      bn: 'শেখার বিষয়গুলো দেখুন',
      en: 'See Learning Topics',
    },
    secondaryCardTitle: {
      bn: 'মা-বাবার গাইড ➔',
      en: "Parents' Guide for Month 1 ➔",
    },
    secondaryCardDesc: {
      bn: 'কেন এই বইটি জরুরি, ৬০/৪০ ও ৭০/৩০ নিয়ম এবং বাচ্চা জেদ করলে কীভাবে সামলাবেন—সব এখানে সহজ ভাষায় আছে।',
      en: 'Learn why real-world play matters, the 60/40 & 70/30 rules, and exactly what to say when your child refuses.',
    },
  },
} as const;

export const CLUSTERS: LearningCluster[] = [
  {
    id: 'cluster-1',
    number: 1,
    chapterTitle: {
      bn: 'অধ্যায় ১: আমার জিনিস, আমার কাজ',
      en: 'Chapter 1: My Things, My Tasks (Self-Reliance)',
    },
    pathLabel: {
      bn: '১. নিজের কাজ',
      en: '1. My Tasks',
    },
    shortTitle: {
      bn: 'আমার জিনিস, আমার কাজ',
      en: 'Self-reliance & Independence',
    },
    intro: {
      bn: 'অনেক সময় আমরা সময় বাঁচাতে গিয়ে ৪ বছর বয়সী শিশুর জুতা পরিয়ে দিই, গ্লাস এগিয়ে দিই বা খেলনা তুলে দিই। কিন্তু এতে সে নিজের ওপর বিশ্বাস করতে শেখে না। এই অধ্যায়ে আমরা জানব—কীভাবে ঘরের প্রতিদিনের ছোট কাজের মাধ্যমে তাবিয়াকে নিজের কাজ নিজে করতে উৎসাহ দেব।',
      en: 'Often we put on a 4-year-old’s shoes or tidy her toys to save time, which takes away her chance to build confidence. This chapter shows how simple daily home routines teach Tabia to try small tasks on her own.',
    },
    primaryTask: {
      bn: 'মূল কাজ: বড়দের সাহায্য ছাড়াই ঘরের ছোট ছোট কাজ (যেমন—খেলনা গোছানো, জামা বেছে নেওয়া, নিজের বোতল রাখা) ধাপে ধাপে নিজে করার অভ্যাস তৈরি করা।',
      en: 'Primary Task: Help her build the habit of doing small everyday tasks—like tidying toys, choosing clothes, and putting away her bottle—step by step on her own.',
    },
    accentBg: 'bg-teal-50',
    accentText: 'text-teal-900',
    accentBorder: 'border-teal-200',
    nodeColor: '#0F766E',
    imageKey: 'morningRoutine',
    activities: [
      {
        id: 'c1-a1',
        title: { bn: '১. খেলা শেষে নিজের খেলনা গোছানো', en: '1. Tidying Toys After Play' },
        whatToDo: {
          bn: 'খেলা শেষ হলে সাথে সাথে আপনি নিজে খেলনা তুলবেন না। একটি ঝুড়ি বা বাক্স ওর হাতের নাগালে রাখুন এবং দুজন মিলে খেলায় খেলায় খেলনা তুলুন।',
          en: 'Do not pick up the toys yourself right away. Keep a low basket within reach and turn tidying up into a friendly shared game.',
        },
        materials: {
          bn: 'একটি প্লাস্টিকের ঝুড়ি বা শক্ত কার্টনের বাক্স এবং ওর প্রতিদিনের খেলনা।',
          en: 'A small basket or cardboard box and her everyday toys.',
        },
        whatToSay: {
          bn: '"চলো তো দেখি, সব গাড়িগুলো তাদের বাড়িতে (ঝুড়িতে) পৌঁছে দিই! আগে কে ৫টা ব্লক রাখতে পারে দেখি?"',
          en: '"Let us send all the toys back to their house! Shall we see who puts 5 blocks in the basket first?"',
        },
        benefit: {
          bn: 'উপকারিতা: নিজের জিনিসের যত্ন নেওয়ার দায়িত্ববোধ তৈরি হয় এবং ঘর গোছানোকে ও শাস্তি না ভেবে মজার কাজ হিসেবে নেয়।',
          en: 'Benefit: Builds responsibility for personal belongings and turns tidying into a joyful habit rather than a chore.',
        },
      },
      {
        id: 'c1-a2',
        title: { bn: '২. নিজের জামা ও জুতা পরার চেষ্টা করা', en: '2. Dressing & Putting On Shoes' },
        whatToDo: {
          bn: 'সকালে দুটি জামা বিছানার ওপর রেখে ওকে যেকোনো একটি পছন্দ করতে দিন। জুতা পরার সময় জুতার ফিতা বা বেল্ট খুলে দিয়ে শুধু পা ঢোকাতে বলুন।',
          en: 'Lay two outfits on the bed and let her choose one. Loosen her shoes and let her slide her feet in and fasten the strap herself.',
        },
        materials: {
          bn: 'দুটি সাধারণ জামা এবং ভেলক্রো বা সহজ স্যান্ডেল/জুতা।',
          en: 'Two everyday outfits and easy-to-wear sandals or Velcro shoes.',
        },
        whatToSay: {
          bn: '"আজ তুমি লাল জামা পরবে নাকি নীল জামা? বা পা-টা আগে এই জুতার ভেতর দাও তো, আমি দেখছি।"',
          en: '"Would you like the red dress or the blue one today? Try sliding your left foot in first—I am watching!"',
        },
        benefit: {
          bn: 'উপকারিতা: ছোট বয়স থেকেই সিদ্ধান্ত নেওয়ার ক্ষমতা বাড়ে এবং হাত-আঙুলের সূক্ষ্ম কাজ করার শক্তি তৈরি হয়।',
          en: 'Benefit: Strengthens decision-making skills and develops fine-motor finger coordination.',
        },
      },
      {
        id: 'c1-a3',
        title: { bn: '৩. নিজের পানির বোতল ও গ্লাসে পানি নেওয়া', en: '3. Pouring Water & Keeping Bottle in Place' },
        whatToDo: {
          bn: 'ছোট একটি হালকা জগে অল্প পানি রাখুন। আপনার সামনে বসে ওকে ছোট গ্লাসে পানি ঢেলে খেতে দিন। পড়ে গেলে বকা না দিয়ে নরম কাপড় দিয়ে মুছতে দিন।',
          en: 'Fill a small lightweight jug halfway. Under your supervision, let her pour water into a steel or plastic cup. If it spills, wipe it calmly together.',
        },
        materials: {
          bn: 'ছোট প্লাস্টিক বা স্টিলের জগ, হালকা গ্লাস এবং পাশে রাখার জন্য একটি মোছার কাপড়।',
          en: 'A small jug, a light cup, and a small kitchen cloth nearby.',
        },
        whatToSay: {
          bn: '"দুই হাত দিয়ে জগটা ধরো। আস্তে আস্তে গ্লাসে ঢালো—দেখো কত সুন্দর হচ্ছে! একটু পড়ে গেছে? সমস্যা নেই, চলো মুছে ফেলি।"',
          en: '"Hold the jug with both hands and pour slowly. Look how nicely you did that! Spilled a little? No problem, let us wipe it together."',
        },
        benefit: {
          bn: 'উপকারিতা: চোখের সাথে হাতের মাপ বোঝার ক্ষমতা বাড়ে এবং ভুল করলে ভয় না পেয়ে ঠিক করার সাহস জন্মে।',
          en: 'Benefit: Improves hand-eye coordination and teaches that spills are easy to fix without fear.',
        },
      },
      {
        id: 'c1-a4',
        title: { bn: '৪. কথা শুনে পরপর দুটি কাজ করা', en: '4. Following Two-Step Instructions' },
        whatToDo: {
          bn: 'একসাথে অনেক বড় আদেশ না দিয়ে সহজ দুটি কাজের কথা স্পষ্ট করে বলুন এবং কাজ শেষে হাসিমুখে ধন্যবাদ দিন।',
          en: 'Give two clear, gentle steps in one sentence instead of a long list, and smile warmly when she finishes.',
        },
        materials: {
          bn: 'ঘরের পরিচিত জিনিস (যেমন: বই, চিরুনি, বা পানির বোতল)।',
          en: 'Everyday household items (a book, comb, or water bottle).',
        },
        whatToSay: {
          bn: '"বাবু, ওই লাল বইটি নিয়ে এসো এবং পড়ার টেবিলের ওপর রাখো তো।"',
          en: '"Sweetheart, please pick up that red book and place it on the table."',
        },
        benefit: {
          bn: 'উপকারিতা: মনোযোগ দিয়ে কথা শোনার অভ্যাস হয় এবং মনে রেখে পরপর কাজ করার ক্ষমতা বাড়ে।',
          en: 'Benefit: Builds active listening and short-term working memory.',
        },
      },
    ],
    exercise: {
      title: {
        bn: 'প্রধান অনুশীলন: সকালের রুটিন চার্ট (দেয়ালে টাঙানোর জন্য)',
        en: 'Main Practice: Morning Independence Wall Chart',
      },
      intro: {
        bn: 'নিচের ৭টি ধাপের চার্টটি প্রিন্ট করে বা হাতে এঁকে ঘরের দেয়ালে (যেখানে তাবিয়ার হাত পৌঁছায়) টাঙিয়ে রাখুন। রোজ সকালে প্রতিটি কাজ শেষ হলে তাবিয়াকে আঙুল দিয়ে দেখাতে বলুন—এরপর কোন কাজটি বাকি আছে:',
        en: 'Print or draw this 7-step picture chart and hang it at Tabia’s eye level. Each morning, let her point to what she just finished and see what comes next:',
      },
      steps: [
        { bn: '১. ঘুম থেকে ওঠা ও বিছানার বালিশ ঠিক করা', en: '1. Wake up & straighten pillow' },
        { bn: '২. দাঁত ব্রাশ করা', en: '2. Brush teeth' },
        { bn: '৩. মুখ ধোয়া ও তোয়ালে দিয়ে মোছা', en: '3. Wash face & dry with towel' },
        { bn: '৪. নিজের পছন্দের জামাকাপড় পরা', en: '4. Put on chosen clothes' },
        { bn: '৫. টেবিলে বসে সকালের নাশতা খাওয়া', en: '5. Eat breakfast' },
        { bn: '৬. খেলার ও পড়ার জিনিস গুছিয়ে রাখা', en: '6. Put toys & books away' },
        { bn: '৭. বাইরে যাওয়ার ছোট ব্যাগ ও বোতল গোছানো', en: '7. Pack small outing bag & bottle' },
      ],
      benefitsTitle: {
        bn: 'এই চার্ট ব্যবহার করলে তাবিয়ার কী উপকার হবে?',
        en: 'How does this chart benefit Tabia?',
      },
      benefits: [
        { bn: 'বড়দের বারবার তাড়া না খেয়েই নিজে পরের কাজটি বুঝতে পারবে।', en: 'She learns what comes next without constant nagging.' },
        { bn: 'সকালবেলা জামা পরা বা দাঁত মাজা নিয়ে জেদ ও কান্নাকাটি কমে যাবে।', en: 'Reduces morning arguments over brushing or dressing.' },
        { bn: '"আমিও পারি"—এই আত্মবিশ্বাস ছোট থেকেই তৈরি হবে।', en: 'Builds early pride and "I can try it myself" confidence.' },
      ],
    },
    expectedResult: {
      bn: 'সে মনে মনে ভাবতে শুরু করবে, "আমি নিজেই এটা করার চেষ্টা করতে পারি," এবং ধীরে ধীরে প্রতিদিনের ছোটখাটো কাজের জন্য বড়দের ওপর নির্ভর করা কমিয়ে দেবে।',
      en: 'She begins to think, "I can try doing this myself," and gradually depends less on adults for everyday routines.',
    },
    japaneseLessonTitle: {
      bn: 'জাপানি শিক্ষা (Japanese Lesson)',
      en: 'Japanese Lesson',
    },
    connections: [
      {
        name: { bn: 'কাইজেন (Kaizen)', en: 'Kaizen' },
        meaning: {
          bn: 'একদিনে সবকিছু নিখুঁত করার বদলে প্রতিদিন অল্প অল্প করে উন্নতি করা।',
          en: 'Continuous small improvements every single day rather than rushing perfection.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: আজ হয়তো তাবিয়া শুধু একটা জুতা পরতে পারল, কাল দুটো পারবে। তাবিয়ার প্রতিটি ছোট চেষ্টাকেই আমরা কাইজেন হিসেবে দেখব।',
          en: 'How this chapter applies it: Today she tries one shoe; next week she does both. Every tiny daily effort counts as Kaizen.',
        },
      },
      {
        name: { bn: 'গানবারু (Ganbaru)', en: 'Ganbaru' },
        meaning: {
          bn: 'কঠিন মনে হলেই শুরুতেই হাল না ছেড়ে নিজের সর্বোচ্চ চেষ্টা করা।',
          en: 'Doing your patient best instead of giving up right away.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: জগ থেকে পানি ঢালতে বা জামার বোতাম লাগাতে আটকে গেলে সাথে সাথে মা করে না দিয়ে ওকে আরেকবার চেষ্টা করতে বলা।',
          en: 'How this chapter applies it: When a sleeve or bottle cap feels tricky, Mom encourages one more patient try before helping.',
        },
      },
    ],
    printablePoster: {
      id: 'poster-1',
      buttonLabel: {
        bn: 'সকালের রুটিন চার্ট ডাউনলোড করুন (দেয়ালে টাঙানোর জন্য)',
        en: 'Download Morning Routine Wall Chart (PNG)',
      },
      posterTitle: {
        bn: 'তাবিয়ার সকালের কাজের চার্ট',
        en: "Tabia's Morning Routine Chart",
      },
      posterSubtitle: {
        bn: 'অধ্যায় ১ · আমার জিনিস, আমার কাজ (১ম মাস)',
        en: 'Chapter 1 · Self-Reliance & Independence',
      },
      items: [
        { bn: 'ঘুম থেকে ওঠা ও বালিশ ঠিক করা', en: 'Wake up & straighten pillow' },
        { bn: 'দাঁত ব্রাশ করা', en: 'Brush teeth' },
        { bn: 'মুখ ধোয়া', en: 'Wash face' },
        { bn: 'জামাকাপড় পরা', en: 'Get dressed' },
        { bn: 'সকালের নাশতা খাওয়া', en: 'Eat breakfast' },
        { bn: 'নিজের জিনিস গুছিয়ে রাখা', en: 'Put belongings away' },
        { bn: 'ছোট ব্যাগ ও পানির বোতল গোছানো', en: 'Pack small bag & bottle' },
      ],
      footerNote: {
        bn: 'প্রতিটি কাজের ছবি তাবিয়াকে দেখান এবং নিজে চেষ্টা করার জন্য বাহবা দিন।',
        en: 'Hang at child eye level and praise every effort!',
      },
      filename: 'tabia-morning-routine-chart',
      accentHex: '#0F766E',
    },
  },
  {
    id: 'cluster-2',
    number: 2,
    chapterTitle: {
      bn: 'অধ্যায় ২: মগজের ব্যায়াম বা মাইন্ড জিম',
      en: 'Chapter 2: Mind Gym (Memory, Observation & Counting)',
    },
    pathLabel: {
      bn: '২. মগজের ব্যায়াম',
      en: '2. Mind Gym',
    },
    shortTitle: {
      bn: 'মগজের ব্যায়াম বা মাইন্ড জিম',
      en: 'Mind Gym',
    },
    intro: {
      bn: 'অঙ্ক বা বুদ্ধি শেখানোর জন্য ৪ বছর বয়সে মোটা খাতা-কলমের দরকার নেই। ঘরের চামচ, পেঁয়াজ, বোতাম আর ছবির মাধ্যমেই শিশুর মস্তিষ্ক সবচেয়ে দ্রুত শেখে। এই অধ্যায়ে আমরা জানব—কীভাবে খেলার ছলে স্মৃতিশক্তি, মনোযোগ আর গোনার অভ্যাস বাড়ানো যায়।',
      en: 'At age 4, brain growth does not need heavy worksheets. Everyday spoons, fruits, blocks, and pictures build memory, focus, and early math far better. Here is how to run fun 5-minute brain games at home.',
    },
    primaryTask: {
      bn: 'মূল কাজ: খেলার মাধ্যমে চারপাশের জিনিস ভালো করে খেয়াল করা, মনে রাখা, রঙ-আকার অনুযায়ী আলাদা করা এবং ১ থেকে ৫ পর্যন্ত বাস্তব জিনিস গোনা শেখানো।',
      en: 'Primary Task: Use playful games to teach observation, visual memory, sorting by colour/size, and counting real objects from 1 to 5.',
    },
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-900',
    accentBorder: 'border-amber-200',
    nodeColor: '#D97706',
    imageKey: 'mindGym',
    activities: [
      {
        id: 'c2-a1',
        title: { bn: '১. মনোযোগ দিয়ে ছবি দেখা (বাজারের ছবির খেলা)', en: '1. Careful Observation (Market Picture Hunt)' },
        whatToDo: {
          bn: 'নিচের বা বাজারের রঙিন একটি ছবি তাবিয়ার সামনে রাখুন। শুধু "ছবিটা দেখো" না বলে, ছবির ভেতরের ছোট ছোট জিনিস একসাথে খুঁজে বের করার খেলা খেলুন।',
          en: 'Place a colourful market picture (see the interactive Market Observation game below) in front of Tabia and ask specific search questions instead of just saying "look at the picture."',
        },
        materials: {
          bn: 'বাজারের ছবি (এই অধ্যায়ের নিচেই দেওয়া আছে) অথবা ঘরের যেকোনো ছবির বই।',
          en: 'The market scene shown below or any colourful Bangla picture book.',
        },
        whatToSay: {
          bn: '• ছবিতে একটি লাউ খুঁজে বের করো তো!\n• লাউয়ের পাশে কী আছে বলো?\n• ছবিতে কয়টি গাজর বা টমেটোর ঝুড়ি দেখতে পাচ্ছ?\n• লাল রঙের কোনো জিনিস আঙুল দিয়ে দেখাও।',
          en: '• Find a green bottle gourd in the picture!\n• What is sitting right next to the gourd?\n• How many carrots or tomato baskets can you count?\n• Point with your finger to something red.',
        },
        benefit: {
          bn: 'উপকারিতা: চোখের মনোযোগ ও ধৈর্য বাড়ে, ছোটখাটো জিনিস আলাদা করে চিনতে শেখে এবং পরবর্তীতে বই পড়ার সময় বর্ণ ও ছবি চিনতে সুবিধা হয়।',
          en: 'Benefit: Sharpens visual attention and patience, helping her notice details accurately.',
        },
      },
      {
        id: 'c2-a2',
        title: { bn: '২. ঘরের জিনিস গোনা ও সংখ্যা চেনা (১ থেকে ৫)', en: '2. Counting Everyday Objects (1 to 5)' },
        whatToDo: {
          bn: 'সকালে নাশতার সময় বা সিঁড়ি দিয়ে ওঠার সময় হাতের কাছের জিনিস আঙুল দিয়ে ছুঁয়ে ছুঁয়ে গুনতে বলুন। ৫-এর বেশি একসাথে দেবেন না, যাতে সে সহজেই পারে।',
          en: 'During breakfast or while walking up stairs, ask her to touch each item one by one as she counts up to 5.',
        },
        materials: {
          bn: '৪টি স্টিলের চামচ, ৩টি কলা, ৫টি খেলার ব্লক বা ঘরের সিঁড়ি।',
          en: '4 steel spoons, 3 bananas, 5 blocks, or steps on the stairs.',
        },
        whatToSay: {
          bn: '"দেখো তো মা কয়টি চামচ রেখেছে? চলো আঙুল দিয়ে ছুঁয়ে গুনি—১, ২, ৩, ৪! আচ্ছা, এই বাটিতে বেশি আম আছে নাকি ওই প্লেটে?"',
          en: '"How many spoons did Mom put on the mat? Let us touch and count: 1, 2, 3, 4! Which bowl has more mangoes?"',
        },
        benefit: {
          bn: 'উপকারিতা: সংখ্যা শুধু মুখস্থ না করে "৩ বলতে আসলেই ৩টি জিনিস বোঝায়"—এই আসল গণিতের ভিত্তি তৈরি হয়।',
          en: 'Benefit: Connects spoken numbers to real quantities instead of empty rote memorization.',
        },
      },
      {
        id: 'c2-a3',
        title: { bn: '৩. রঙ, আকার ও নকশা মেলানো (Sorting & Patterns)', en: '3. Sorting & Simple Patterns' },
        whatToDo: {
          bn: 'বাটিতে দুই-তিন রঙের বড় বোতাম, প্লাস্টিকের চামচ বা রঙিন ব্লক মিশিয়ে দিন। প্রথমে রঙ অনুযায়ী আলাদা করতে বলুন, তারপর "একটি লাল, একটি হলুদ, একটি লাল..." এভাবে সাজাতে বলুন।',
          en: 'Mix colourful blocks or large safe bangles in a bowl. First sort by colour, then arrange a simple repeating pattern: red, yellow, red, yellow.',
        },
        materials: {
          bn: 'রঙিন প্লাস্টিকের ব্লক, বাটি, অথবা বড় কাঁচি ছাড়া নিরাপদ রঙিন চুড়ি/পুঁতি।',
          en: 'Colourful plastic blocks, bowls, or large safe bangles.',
        },
        whatToSay: {
          bn: '"সব লাল ব্লকগুলো এই বাটিতে রাখো আর নীলগুলো ওই বাটিতে রাখো তো! এবার চলো ট্রেন বানাই—একটা লাল, একটা নীল, এরপর কোন রঙ বসবে?"',
          en: '"Put all the red blocks in this bowl and blue ones in that bowl! Now let us make a train—red, blue, red... what comes next?"',
        },
        benefit: {
          bn: 'উপকারিতা: মিল-অমিল খুঁজে বের করার যুক্তিবোধ ও মগজের প্যাটার্ন চেনার ক্ষমতা তৈরি হয়।',
          en: 'Benefit: Builds logical classification and pattern-recognition skills.',
        },
      },
      {
        id: 'c2-a4',
        title: { bn: '৪. বুদ্ধির বোর্ড গেম: "১ থেকে ২০ সাপ-লুডুর মতো ঘর খেলা"', en: '4. Specific Board Game: Simple 1–20 Path Game' },
        whatToDo: {
          bn: 'একটি সাদা কাগজে বা কার্টনে ১ থেকে ২০ পর্যন্ত বড় বড় ঘর আঁকুন। একটি ছক্কা (Dice) আর দুটি রঙের বোতাম (গুটি) নিন। পালা করে ছক্কা চালুন আর ঘর গুনে গুনে গুটি এগিয়ে নিন। কে আগে ২০-এ পৌঁছায় তা খেলুন।',
          en: 'Draw a big numbered path from 1 to 20 on cardboard. Use one dice and two bottle caps as tokens. Take turns rolling and hopping forward step by step until someone reaches 20.',
        },
        materials: {
          bn: 'একটি বড় কাগজ/কার্টন, মার্কার কলম, লুডুর ছক্কা (Dice) এবং দুটি বোতাম বা বোতলের ঢাকনা।',
          en: 'A sheet of cardboard, marker pen, one dice, and two bottle caps as playing pieces.',
        },
        whatToSay: {
          bn: '"এখন তোমার পালা! ছক্কায় কয় ফোঁটা উঠেছে দেখো—১, ২, ৩! তাহলে তোমার গুটি তিন ঘর লাফ দেবে। এরপর আমার পালা, তুমি একটু অপেক্ষা করবে কিন্তু!"',
          en: '"Your turn! Let us count the dots on the dice—1, 2, 3! Hop your piece 3 steps. Now it is Mom’s turn!"',
        },
        benefit: {
          bn: 'উপকারিতা: খেলার নিয়ম মানা, নিজের পালা আসার জন্য ধৈর্য ধরে অপেক্ষা করা এবং ছক্কা দেখে দ্রুত গোনার অভ্যাস গড়ে ওঠে।',
          en: 'Benefit: Teaches turn-taking, patience, rule-following, and joyful counting.',
        },
      },
      {
        id: 'c2-a5',
        title: { bn: '৫. জাপানি গণনার যন্ত্র "সোরোবান" পরিচিতি', en: '5. Gentle Soroban Bead Exploration' },
        whatToDo: {
          bn: 'বাসায় সোরোবান (কাঠের পুঁতির যন্ত্র) থাকলে শুধু ওকে হাত দিয়ে পুঁতিগুলো উপরে-নিচে সরাতে দিন আর ২-৩টি পুঁতি গুনতে বলুন। কোনো অঙ্ক কষতে বলবেন না।',
          en: 'If you have a Soroban abacus, simply let her slide the beads with her fingers and count 2 or 3 beads slowly.',
        },
        materials: {
          bn: 'একটি সাধারণ সোরোবান বা কাঠের পুঁতির ফ্রেম।',
          en: 'A simple Soroban abacus frame.',
        },
        whatToSay: {
          bn: '"দেখো, এই কাঠের পুঁতিটা আঙুল দিয়ে উপরে তুললে টুক করে শব্দ হয়! চলো তো ৩টা পুঁতি উপরে তুলি—১, ২, ৩।"',
          en: '"Look how the wooden bead clicks when you push it up! Let us slide 3 beads together—1, 2, 3."',
        },
        benefit: {
          bn: 'উপকারিতা: পুঁতি স্পর্শ করে গণনার প্রতি ভালোবাসা তৈরি হয়, কোনো ভয় তৈরি হয় না।',
          en: 'Benefit: Creates tactile curiosity for numbers without pressure.',
        },
      },
    ],
    exercise: {
      title: {
        bn: 'বাস্তব অনুশীলন: কিমস গেম (Kim’s Game — স্মৃতিশক্তির খেলা)',
        en: "Practical Practice: Kim's Game (Visual Memory)",
      },
      intro: {
        bn: 'একটি ট্রে-তে নিচের ৫টি জিনিস রাখুন। তাবিয়াকে ১০-১৫ সেকেন্ড ভালো করে দেখতে দিন। এরপর একটি রুমাল বা কাপড় দিয়ে ট্রে ঢেকে ওর অজান্তে ১টি জিনিস সরিয়ে ফেলুন। কাপড় সরিয়ে জিজ্ঞেস করুন: "বলো তো এখান থেকে কোন জিনিসটি হারিয়ে গেছে?" (নিচে আমরা এই খেলার একটি নমুনাও রেখেছি যাতে আপনি আগে নিজে নিয়মটি বুঝে নিতে পারেন।)',
        en: 'Place these 5 everyday items on a tray. Let Tabia look for 10–15 seconds, cover the tray with a cloth, secretly remove 1 item, uncover it, and ask: "What is missing?"',
      },
      steps: [
        { bn: '১. একটি স্টিলের চামচ', en: '1. A steel spoon' },
        { bn: '২. একটি হলুদ পেন্সিল', en: '2. A yellow pencil' },
        { bn: '৩. একটি ছোট খেলনা গাড়ি', en: '3. A small toy car' },
        { bn: '৪. একটি রঙিন বল', en: '4. A colourful ball' },
        { bn: '৫. একটি ছোট ছবির বই', en: '5. A small picture book' },
      ],
      benefitsTitle: {
        bn: 'কিমস গেম খেললে তাবিয়ার কী উপকার হবে?',
        en: "How does Kim's Game benefit Tabia?",
      },
      benefits: [
        { bn: 'চোখে দেখা জিনিস মনে রাখার ক্ষমতা (স্মৃতিশক্তি) দ্রুত বাড়ে।', en: 'Sharpens visual memory and recall.' },
        { bn: 'একটি জায়গায় স্থির হয়ে মন দিয়ে দেখার অভ্যাস তৈরি হয়।', en: 'Improves focused attention span.' },
        { bn: 'খেলায় খেলায় চারপাশের জিনিস খুঁটিয়ে দেখার চোখ তৈরি হয়।', en: 'Trains her brain to notice small changes.' },
      ],
      tip: {
        bn: 'শুরুতে ৫টি কঠিন মনে হলে ৩টি জিনিস (যেমন—চামচ, বল, পেন্সিল) দিয়ে শুরু করুন। ও সহজে পারলে তবেই ৫টি দেবেন।',
        en: 'Start with 3 objects if 5 feels hard; increase to 5 only when she finds 3 easy and fun.',
      },
    },
    expectedResult: {
      bn: 'ধীরে ধীরে তার পর্যবেক্ষণ ক্ষমতা, স্মৃতিশক্তি, মনোযোগ, সংখ্যা চেনার ক্ষমতা এবং নকশা বোঝার দক্ষতা বাড়বে।',
      en: 'She gradually improves her observation, memory, concentration, number awareness, and pattern recognition.',
    },
    japaneseLessonTitle: {
      bn: 'জাপানি শিক্ষা (Japanese Lesson)',
      en: 'Japanese Lesson',
    },
    connections: [
      {
        name: { bn: 'শোশিন (Shoshin)', en: 'Shoshin' },
        meaning: {
          bn: 'সব সময় নতুন কিছু শেখার জন্য কৌতূহলী ও খোলা মন নিয়ে প্রস্তুত থাকা।',
          en: "Beginner's mind—staying curious and eager to explore.",
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: সাধারণ চামচ বা বাজারের ছবিও যেন ওর কাছে নতুন রহস্যের মতো মজার মনে হয়, তাই আমরা প্রশ্ন করে ওকে ভাবতে শেখাচ্ছি।',
          en: 'How this chapter applies it: Even familiar spoons or market pictures become exciting mysteries when we ask curious questions.',
        },
      },
      {
        name: { bn: 'গানবারু (Ganbaru)', en: 'Ganbaru' },
        meaning: {
          bn: 'পাজল বা খেলা একটু কঠিন মনে হলেও হাল না ছেড়ে চেষ্টা চালিয়ে যাওয়া।',
          en: 'Keeping at a puzzle or memory game even when it takes a little extra thought.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: হারিয়ে যাওয়া জিনিস প্রথমবারে মনে না পড়লে উত্তর বলে না দিয়ে হালকা ইঙ্গিত দেওয়া ("বলো তো, ওটা দিয়ে আমরা ভাত খাই!")।',
          en: 'How this chapter applies it: If she forgets the missing item, give a small clue instead of giving away the answer right away.',
        },
      },
    ],
    importantNote: {
      bn: 'গুরুত্বপূর্ণ সতর্কতা: ৪ বছর বয়সে সোরোবান শুধু পুঁতি ছোঁয়া ও গোনার মধ্যেই রাখুন। এখনই দ্রুত মনে মনে অঙ্ক কষার (Anzan) চাপ দেবেন না।',
      en: 'Important Note: At age 4, keep Soroban purely playful bead-touching and counting—never push speed mental math (Anzan).',
    },
    printablePoster: {
      id: 'poster-2',
      buttonLabel: {
        bn: 'কিমস গেম ও গণনার খেলার গাইড ডাউনলোড করুন',
        en: "Download Kim's Game & Counting Guide (PNG)",
      },
      posterTitle: {
        bn: 'মগজের ব্যায়াম: কিমস গেম ও গোনা',
        en: "Mind Gym: Kim's Game & Counting",
      },
      posterSubtitle: {
        bn: 'অধ্যায় ২ · খেলার নিয়ম মনে রাখার চার্ট',
        en: 'Chapter 2 · Home Play Reminder Sheet',
      },
      items: [
        { bn: 'ট্রেতে ৩–৫টি জিনিস রাখুন (চামচ, বল, পেন্সিল)', en: 'Place 3–5 objects on a tray' },
        { bn: '১০ সেকেন্ড ভালো করে দেখতে বলুন', en: 'Let her observe for 10 seconds' },
        { bn: 'কাপড় দিয়ে ঢেকে ১টি জিনিস সরান', en: 'Cover and secretly remove 1 item' },
        { bn: 'জিজ্ঞেস করুন: "কোন জিনিসটি হারিয়ে গেছে?"', en: 'Ask: "What is missing?"' },
        { bn: 'খাবার টেবিলে ১–৫ পর্যন্ত ফল বা চামচ গুনুন', en: 'Count fruits or spoons from 1–5' },
      ],
      footerNote: {
        bn: 'প্রতিদিন মাত্র ৫ মিনিট খেলার ছলে স্মৃতিশক্তি ও মনোযোগ বাড়ান।',
        en: 'Just 5 joyful minutes a day builds lasting memory and focus.',
      },
      filename: 'tabia-mind-gym-guide',
      accentHex: '#B45309',
    },
  },
  {
    id: 'cluster-3',
    number: 3,
    chapterTitle: {
      bn: 'অধ্যায় ৩: কথা ও ভাষা',
      en: 'Chapter 3: Voice & Words (Language & Storytelling)',
    },
    pathLabel: {
      bn: '৩. কথা ও ভাষা',
      en: '3. Voice & Words',
    },
    shortTitle: {
      bn: 'কথা ও ভাষা',
      en: 'Voice & Words',
    },
    intro: {
      bn: 'মোবাইল বা টিভিতে কার্টুন দেখে বাচ্চারা কিছু শব্দ শুনলেও মনের কথা গুছিয়ে বলতে শেখে না। শিশু তখনই সুন্দর কথা বলতে শেখে, যখন মা-বাবা ওর কথা মন দিয়ে শোনেন এবং ওর সাথে গল্পগুজব করেন। এই অধ্যায়ে বাংলা ও ইংরেজি—দুই ভাষাতেই কথা বলার জড়তা কাটানোর সহজ উপায় দেওয়া আছে।',
      en: 'Watching screens does not teach a child how to express her own thoughts. Children learn to speak clearly when parents listen warmly and chat with them daily. This chapter gives practical ways to build both Bangla and English vocabulary naturally.',
    },
    primaryTask: {
      bn: 'মূল কাজ: তাবিয়াকে ভয় বা লজ্জা ছাড়াই নিজের মনের ভাব, দেখা ঘটনা ও গল্প সহজ বাংলা ও ইংরেজি শব্দে গুছিয়ে বলতে উৎসাহ দেওয়া।',
      en: 'Primary Task: Encourage Tabia to share her thoughts, observations, and simple stories in everyday Bangla and English without shyness.',
    },
    accentBg: 'bg-sky-50',
    accentText: 'text-sky-900',
    accentBorder: 'border-sky-200',
    nodeColor: '#0369A1',
    imageKey: 'languageStory',
    activities: [
      {
        id: 'c3-a1',
        title: { bn: '১. ছবির বই জোরে পড়ে শোনানো ও গল্প করা', en: '1. Reading Picture Books Aloud Together' },
        whatToDo: {
          bn: 'বিকেলে বা ঘুমের আগে ১০ মিনিট পাশে বসিয়ে বাংলা বা ইংরেজি ছবির বই খুলে আঙুল দিয়ে ছবি দেখিয়ে পড়ুন। শুধু পড়েই শেষ করবেন না—ছবি নিয়ে প্রশ্ন করুন।',
          en: 'Sit together for 10 minutes with a Bangla or English picture book. Point to illustrations and ask simple questions about what the characters are doing.',
        },
        materials: {
          bn: 'বড় ছবির যেকোনো বাংলা বা ইংরেজি গল্পের বই।',
          en: 'Any colourful Bangla or English picture storybook.',
        },
        whatToSay: {
          bn: '"দেখো তো, এই বিড়ালটা কোথায় বসে আছে? তোমার কী মনে হয়, এরপর বিড়ালটা কী করল?"',
          en: '"Look, where is the little cat sitting? What do you think happened next?"',
        },
        benefit: {
          bn: 'উপকারিতা: কল্পনাশক্তি বাড়ে, নতুন শব্দের অর্থ বুঝতে পারে এবং বইয়ের প্রতি ভালোবাসা জন্মে।',
          en: 'Benefit: Sparks imagination, builds vocabulary, and nurtures a lifelong love for books.',
        },
      },
      {
        id: 'c3-a2',
        title: { bn: '২. ঘরের জিনিস দেখিয়ে বাংলা ও ইংরেজি নাম শেখা', en: '2. Everyday Bangla & English Naming' },
        whatToDo: {
          bn: 'আলাদা ইংরেজি গ্রামার বই পড়ানোর দরকার নেই। রান্নাঘরে বা বারান্দায় যা দেখছেন, বাংলা নামের পাশাপাশি মজার ছলে সহজ ইংরেজি নামটাও বলে দিন।',
          en: 'No grammar drills needed. Simply name fruits, colours, vehicles, and kitchen items naturally in both Bangla and English as you see them.',
        },
        materials: {
          bn: 'ঘরের ফল, সবজি, খেলনা গাড়ি বা জানালার বাইরের পাখি-গাছ।',
          en: 'Real fruits, toys, cups, or birds and trees outside the window.',
        },
        whatToSay: {
          bn: '"এটা হলো কলা, ইংরেজিতে বলে Banana। এই দেখো একটা লাল গাড়ি—Red Car! বলো তো, এটা কী রঙ?"',
          en: '"This is a Kola—in English we call it a Banana! Look, a Red Car! Can you find something Yellow?"',
        },
        benefit: {
          bn: 'উপকারিতা: কোনো মুখস্থ চাপ ছাড়াই স্বাভাবিক কথাবার্তায় বাংলা ও ইংরেজি দুই ভাষার শব্দভাণ্ডার বাড়ে।',
          en: 'Benefit: Builds bilingual vocabulary naturally through real objects without stress.',
        },
      },
      {
        id: 'c3-a3',
        title: { bn: '৩. দেখানো ও বলা (Show-and-Tell)', en: '3. Family Show-and-Tell' },
        whatToDo: {
          bn: 'সন্ধ্যায় পরিবারের সবাই (বাবা, দাদা-দাদি বা ভাইবোন) একসাথে বসলে তাবিয়াকে ওর প্রিয় একটি খেলনা বা ফুল হাতে নিয়ে সবার সামনে সেটির কথা বলতে বলুন।',
          en: 'When family members sit together in the evening, invite Tabia to hold her favourite toy or a flower and tell everyone two things about it.',
        },
        materials: {
          bn: 'তাবিয়ার প্রিয় কোনো পুতুল, গাড়ি, বই বা বাগানের ফুল।',
          en: 'Her favourite toy, storybook, or a flower.',
        },
        whatToSay: {
          bn: '"আজ তাবিয়া আমাদের সবাইকে ওর প্রিয় পুতুলটার গল্প বলবে! আমরা সবাই চুপ করে শুনছি, বলো মা।"',
          en: '"Today Tabia is going to tell all of us about her favourite toy! We are all listening quietly."',
        },
        benefit: {
          bn: 'উপকারিতা: মানুষের সামনে দাঁড়িয়ে কথা বলার ভয় কেটে যায় এবং আত্মবিশ্বাস তৈরি হয়।',
          en: 'Benefit: Removes stage fright and builds confidence speaking in front of others.',
        },
      },
    ],
    exercise: {
      title: {
        bn: 'বাস্তব অনুশীলন: প্রতিদিন তিন বাক্যে গল্প বলা',
        en: 'Practical Practice: Daily Three-Sentence Storytelling',
      },
      intro: {
        bn: 'প্রতিদিন সন্ধ্যায় তাবিয়াকে বলুন পরিবারের সবার সামনে সারাদিনের তিনটি ঘটনার কথা বলতে। যেমন:',
        en: 'Every evening, ask Tabia to share three short things about her day with the family. For example:',
      },
      steps: [
        { bn: '১. "আজ আমি পার্কে গিয়েছিলাম।"', en: '1. "Today I went to the park."' },
        { bn: '২. "আমি একটি প্রজাপতি দেখেছি।"', en: '2. "I saw a butterfly."' },
        { bn: '৩. "প্রজাপতিটি হলুদ রঙের ছিল।"', en: '3. "The butterfly was yellow."' },
      ],
      benefitsTitle: {
        bn: 'এই Activity করলে তাবিয়ার কী উপকার হবে?',
        en: 'How does this activity benefit Tabia?',
      },
      benefits: [
        { bn: 'মানুষের সামনে কথা বলার জড়তা ধীরে ধীরে কমবে।', en: 'Hesitation when speaking in front of people slowly disappears.' },
        { bn: 'নিজের মনের কথা গুছিয়ে বলতে শিখবে।', en: 'Learns to organize her thoughts clearly into sentences.' },
        { bn: 'নতুন শব্দ ব্যবহার করতে শিখবে।', en: 'Starts using new words naturally in daily speech.' },
        { bn: 'কোনো ঘটনা মনে রেখে অন্যকে বোঝানোর অভ্যাস তৈরি হবে।', en: 'Develops the habit of remembering an event and explaining it to others.' },
        { bn: 'পরিবারের সবার সামনে কথা বলার আত্মবিশ্বাস বাড়বে।', en: 'Builds strong self-confidence speaking in front of family.' },
      ],
      tip: {
        bn: 'প্রয়োজন হলে তাকে সাহায্য করুন ("তারপর কী দেখেছিলে মনে করে বলো তো?"), তবে গল্পটি তাকেই নিজের ভাষায় শেষ করতে দিন।',
        en: 'Help gently if she pauses, but let her finish the story in her own words.',
      },
    },
    expectedResult: {
      bn: 'ধীরে ধীরে তার শব্দভাণ্ডার বাড়বে, সে নিজের চিন্তাভাবনা সহজভাবে প্রকাশ করতে পারবে এবং নিজে থেকেই ছোট ছোট গল্প বলতে শুরু করবে।',
      en: 'Her vocabulary expands naturally and she begins telling small stories independently.',
    },
    japaneseLessonTitle: {
      bn: 'জাপানি শিক্ষা (Japanese Lesson)',
      en: 'Japanese Lesson',
    },
    connections: [
      {
        name: { bn: 'শোশিন (Shoshin)', en: 'Shoshin' },
        meaning: {
          bn: 'নতুন শব্দ ও নতুন ধারণা শেখার প্রতি কৌতূহলী থাকা।',
          en: 'Staying curious and open to new words and ideas.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: আমরা ভুল ধরার বদলে ও নতুন কী শব্দ শিখল বা নিজের ভাষায় কীভাবে গল্প বলল—সেই কৌতূহলকে উৎসাহ দিচ্ছি।',
          en: 'How this chapter applies it: Instead of correcting grammar harshly, we celebrate her curiosity to try new Bangla and English words.',
        },
      },
    ],
    printablePoster: {
      id: 'poster-3',
      buttonLabel: {
        bn: 'সন্ধ্যায় ৩ বাক্যে গল্প বলার চার্ট ডাউনলোড করুন',
        en: 'Download 3-Sentence Story Guide (PNG)',
      },
      posterTitle: {
        bn: 'প্রতিদিন সন্ধ্যায় ৩ বাক্যের গল্প',
        en: 'Daily 3-Sentence Evening Story',
      },
      posterSubtitle: {
        bn: 'অধ্যায় ৩ · কথা ও ভাষা',
        en: 'Chapter 3 · Voice & Words',
      },
      items: [
        { bn: 'বাক্য ১: আজ আমি কোথায় গিয়েছিলাম / কী করেছি?', en: 'Line 1: Where did I go or what did I do?' },
        { bn: 'বাক্য ২: আমি কী দেখেছি বা কার সাথে খেলেছি?', en: 'Line 2: What did I see or who did I play with?' },
        { bn: 'বাক্য ৩: জিনিসটা দেখতে বা অনুভূতিটা কেমন ছিল?', en: 'Line 3: What colour was it or how did it feel?' },
        { bn: 'উদাহরণ: "আজ পার্কে গিয়েছি · প্রজাপতি দেখেছি · ওটা হলুদ ছিল"', en: 'Example: "Went to park · Saw butterfly · It was yellow"' },
      ],
      footerNote: {
        bn: 'গল্প বলার সময় মোবাইল ও টিভি বন্ধ রেখে তাবিয়ার কথা মন দিয়ে শুনুন।',
        en: 'Keep phones away and listen warmly to build lifelong speaking confidence.',
      },
      filename: 'tabia-three-sentence-story',
      accentHex: '#0369A1',
    },
  },
  {
    id: 'cluster-4',
    number: 4,
    chapterTitle: {
      bn: 'অধ্যায় ৪: মন ও চরিত্র গঠন (আবেগ বোঝা ও ভালো মানুষ হওয়া)',
      en: 'Chapter 4: Heart & Character (Emotions & Values)',
    },
    pathLabel: {
      bn: '৪. মন ও চরিত্র',
      en: '4. Heart & Values',
    },
    shortTitle: {
      bn: 'মন ও চরিত্র গঠন',
      en: 'Heart & Character',
    },
    intro: {
      bn: 'একজন শিশু বড় হয়ে কত ভালো মানুষ হবে, তা শুধু পরীক্ষার নম্বরের ওপর নির্ভর করে না—বরং সে নিজের রাগ, দুঃখ ও ভয় কীভাবে সামলায় এবং অন্যের প্রতি কতটা দয়ালু, তার ওপর নির্ভর করে। এই অধ্যায়ে আমরা জানব কীভাবে তাবিয়াকে নিজের মন বুঝতে ও সত্য কথা বলতে সাহায্য করব।',
      en: 'Who a child becomes depends deeply on how she understands anger, sadness, kindness, and honesty. This chapter guides mothers on helping Tabia name her feelings calmly and practice empathy every day.',
    },
    primaryTask: {
      bn: 'মূল কাজ: নিজের অনুভূতিগুলো চেনা (খুশি, মন খারাপ, রাগ, ভয়, উত্তেজিত), বকা না খেয়ে সত্য কথা বলার সাহস পাওয়া এবং অন্যের সাথে ভাগ করে নেওয়া।',
      en: 'Primary Task: Recognize core emotions, feel safe telling the truth without fear, and practice sharing, waiting turns, and kindness.',
    },
    accentBg: 'bg-rose-50',
    accentText: 'text-rose-900',
    accentBorder: 'border-rose-200',
    nodeColor: '#BE123C',
    imageKey: 'heartFeelings',
    activities: [
      {
        id: 'c4-a1',
        title: { bn: '১. অনুভূতি চেনা ও মনের কথা মুখে বলা', en: '1. Naming & Expressing Emotions' },
        whatToDo: {
          bn: 'যখন তাবিয়া রেগে চিৎকার করে বা কান্না করে, তখন "কাঁদছ কেন, চুপ করো" না বলে ওর অনুভূতিটার নাম বলে দিন, যেন ও নিজের মনের অবস্থা বুঝতে শেখে।',
          en: 'When she cries or shouts, gently name the emotion instead of saying "stop crying," so she learns words for what she feels inside.',
        },
        materials: {
          bn: 'নিচের "অনুভূতির চার্ট" (ছবিসহ ৫টি মুখের ছবি)।',
          en: 'The 5-face Feelings Chart shown below.',
        },
        whatToSay: {
          bn: '"আমি দেখছি খেলনাটা ভেঙে যাওয়ায় তোমার খুব মন খারাপ হয়েছে, তাই না? একটু শান্ত হয়ে মাকে বলো তো।"',
          en: '"I see you feel really sad because the toy broke. Take a deep breath and tell Mom how you feel."',
        },
        benefit: {
          bn: 'উপকারিতা: শিশু জেদ করে হাত-পা ছোড়ার বদলে মুখে কথা বলে নিজের কষ্ট বোঝাতে শিখবে।',
          en: 'Benefit: Helps her use words instead of tantrums when overwhelmed.',
        },
      },
      {
        id: 'c4-a2',
        title: { bn: '২. ভাগ করে নেওয়া ও নিজের পালার জন্য অপেক্ষা করা', en: '2. Sharing & Taking Turns' },
        whatToDo: {
          bn: 'খেলার সময় বা ফল খাওয়ার সময় মায়ের সাথেও ভাগ করে খেতে উৎসাহ দিন। লুডু বা বল ছোড়ার খেলায় জোর করে কেড়ে না নিয়ে নিজের পালা আসার জন্য ৫ সেকেন্ড অপেক্ষা করার অভ্যাস করান।',
          en: 'Practice sharing snacks with family and waiting for turns during ball rolling or simple games.',
        },
        materials: {
          bn: 'এক প্লেট বিস্কুট/ফল অথবা একটি খেলার বল।',
          en: 'A plate of sliced fruit or a soft ball.',
        },
        whatToSay: {
          bn: '"এখন মায়ের পালা, তারপরই তাবিয়ার পালা! তুমি কী সুন্দর অপেক্ষা করছ, সাবাশ!"',
          en: '"Now it is Mom’s turn, and right after me it is Tabia’s turn! Thank you for waiting so patiently."',
        },
        benefit: {
          bn: 'উপকারিতা: অন্যের প্রতি দয়া, ধৈর্য এবং মিলেমিশে থাকার সামাজিক গুণ তৈরি হয়।',
          en: 'Benefit: Cultivates patience, generosity, and cooperative play.',
        },
      },
      {
        id: 'c4-a3',
        title: { bn: '৩. বকার ভয় ছাড়া সত্য কথা বলা ও ভুল মেনে নেওয়া', en: '3. Honesty Without Fear & Fixing Mistakes' },
        whatToDo: {
          bn: 'কখনো কোনো কাঁচ বা খেলনা ভেঙে ফেললে বা দেয়ালে দাগ দিলে চিৎকার করে মারবেন না। বকার ভয়েই শিশুরা মিথ্যা বলতে শেখে। বরং সত্য বলার জন্য আদর করে একসাথে পরিষ্কার করুন।',
          en: 'If she spills milk or makes a mess, stay calm. Harsh scolding teaches children to hide the truth. Praise her for telling the truth and clean up together.',
        },
        materials: {
          bn: 'একটি মোছার কাপড় এবং আপনার শান্ত ভালোবাসাময় আচরণ।',
          en: 'A cleaning cloth and a calm, reassuring voice.',
        },
        whatToSay: {
          bn: '"তুমি যে লুকিয়ে না রেখে সত্যি কথাটা মাকে বলেছ, এতে আমি খুব খুশি হয়েছি! চলো এবার দুজন মিলে মেঝেটা মুছে ফেলি।"',
          en: '"I am so proud that you told me the truth instead of hiding it. Now let us clean this up together."',
        },
        benefit: {
          bn: 'উপকারিতা: শিশু সারা জীবন মা-বাবার কাছে কোনো কিছু লুকাবে না এবং দায়িত্বশীল মানুষ হয়ে উঠবে।',
          en: 'Benefit: Builds lifelong trust, honesty, and accountability.',
        },
      },
    ],
    exercise: {
      title: {
        bn: 'বাস্তব অনুশীলন: অনুভূতির চার্ট (Feelings Chart)',
        en: 'Practical Practice: Daily Feelings Chart',
      },
      intro: {
        bn: 'নিচের ৫টি অনুভূতির ছবি দেয়ালে টাঙিয়ে রাখুন (অথবা এই অধ্যায়ের নিচের চার্টটি একসাথে দেখুন)। প্রতিদিন বিকেলে বা ঘুমের আগে তাকে জিজ্ঞেস করুন: "আজ তোমার মন কেমন লাগছে?"',
        en: 'Hang this 5-emotion picture chart on the wall (or explore the interactive chart below). Each day ask: "How are you feeling today?" and "Why do you feel that way?"',
      },
      steps: [
        { bn: '১. খুশি (Happy)', en: '1. Happy' },
        { bn: '২. মন খারাপ (Sad)', en: '2. Sad' },
        { bn: '৩. রাগ (Angry)', en: '3. Angry' },
        { bn: '৪. ভয় (Scared)', en: '4. Scared' },
        { bn: '৫. খুব আনন্দিত বা উত্তেজিত (Excited)', en: '5. Excited' },
      ],
      benefitsTitle: {
        bn: 'অনুভূতির চার্ট চর্চা করলে কী উপকার হবে?',
        en: 'How does the Feelings Chart benefit Tabia?',
      },
      benefits: [
        { bn: 'নিজের মনের রাগ বা কষ্ট চিনে শান্তভাবে প্রকাশ করতে শিখবে।', en: 'Learns to recognize and express anger or sadness calmly.' },
        { bn: 'অন্য মানুষের কষ্ট বা আনন্দের প্রতি সহানুভূতিশীল হবে।', en: 'Becomes kind and attentive to other people’s feelings.' },
        { bn: 'মা-বাবার সাথে সন্তানের মনের সম্পর্ক আরও গভীর ও নিরাপদ হবে।', en: 'Deepens emotional trust between parent and child.' },
      ],
      tip: {
        bn: 'তাকে সাথে সাথে উত্তর দেওয়ার জন্য জোর করবেন না। সে যেন নিজের মতো করে মনের কথা বলতে পারে, সেই সময়টুকু দিন।',
        en: 'Never force an immediate answer. Give her gentle space to speak when ready.',
      },
    },
    expectedResult: {
      bn: 'সে ধীরে ধীরে নিজের আবেগ চিনতে ও প্রকাশ করতে শিখবে, অন্যদের প্রতি দয়ালু হবে, অন্যের কষ্ট বুঝবে এবং কঠিন পরিস্থিতিতে শান্ত থাকতে শিখবে।',
      en: 'She learns to recognize and express her feelings, show kindness, understand others, and stay calmer in tough moments.',
    },
    japaneseLessonTitle: {
      bn: 'জাপানি শিক্ষা (Japanese Lesson)',
      en: 'Japanese Lesson',
    },
    connections: [
      {
        name: { bn: 'ওমোইয়ারি (Omoiyari)', en: 'Omoiyari' },
        meaning: {
          bn: 'অন্য মানুষের অনুভূতি ও প্রয়োজনের কথা সহানুভূতির সাথে চিন্তা করা।',
          en: "Caring thoughtfully about other people's feelings and needs.",
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: খেলনা ভাগ করে নেওয়া এবং কেউ কথা বলার সময় চুপ করে মন দিয়ে শোনার মাধ্যমে ওমোইয়ারি চর্চা হয়।',
          en: 'How this chapter applies it: Practised whenever she shares a snack or listens quietly while someone else speaks.',
        },
      },
      {
        name: { bn: 'গামান (Gaman)', en: 'Gaman' },
        meaning: {
          bn: 'কোনো কিছু কঠিন মনে হলে ধৈর্য ধরে ও মর্যাদার সাথে সামলে নেওয়া।',
          en: 'Showing patience and self-control when something feels hard.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: খেলার সময় নিজের পালা আসার জন্য অপেক্ষা করা এবং রাগ হলে জোরে শ্বাস নিয়ে শান্ত হওয়া।',
          en: 'How this chapter applies it: Waiting calmly for her turn and taking a breath when frustrated.',
        },
      },
      {
        name: { bn: 'হানসেই (Hansei)', en: 'Hansei' },
        meaning: {
          bn: 'ভুল হলে মন খারাপ বা রাগ না করে শান্তভাবে ভাবা—"এখান থেকে আমি কী শিখলাম?"',
          en: 'Calmly reflecting on what happened and what can be learned from a mistake.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: পানি পড়ে গেলে বা ভুল করলে বকা না দিয়ে একসাথে চিন্তা করা পরের বার কীভাবে সাবধানে ধরলে পড়বে না।',
          en: 'How this chapter applies it: Reflecting gently after a spill on how to hold the glass safely next time.',
        },
      },
    ],
    printablePoster: {
      id: 'poster-4',
      buttonLabel: {
        bn: 'অনুভূতির চার্ট ডাউনলোড করুন (দেয়ালে টাঙানোর জন্য)',
        en: 'Download Feelings Wall Chart (PNG)',
      },
      posterTitle: {
        bn: 'আজ আমার মন কেমন আছে?',
        en: 'How Am I Feeling Today?',
      },
      posterSubtitle: {
        bn: 'অধ্যায় ৪ · অনুভূতির চার্ট (মন ও চরিত্র গঠন)',
        en: 'Chapter 4 · Heart & Character',
      },
      items: [
        { bn: 'খুশি (Happy) — আজ কী নিয়ে আমি খুশি?', en: 'Happy — What made me smile today?' },
        { bn: 'মন খারাপ (Sad) — কিসে আমার মন খারাপ?', en: 'Sad — What made me feel upset?' },
        { bn: 'রাগ (Angry) — আমি শ্বাস নিয়ে শান্ত হতে পারি', en: 'Angry — I can breathe and calm down' },
        { bn: 'ভয় (Scared) — মা-বাবা পাশে আছেন, আমি নিরাপদ', en: 'Scared — Mom & Dad keep me safe' },
        { bn: 'খুব আনন্দিত (Excited) — দারুণ কিছু ঘটতে যাচ্ছে!', en: 'Excited — Something fun is happening!' },
      ],
      footerNote: {
        bn: 'প্রতিদিন তাবিয়াকে জিজ্ঞেস করুন: "আজ তোমার মন কেমন লাগছে এবং কেন?"',
        en: 'Ask gently every evening: "How are you feeling today and why?"',
      },
      filename: 'tabia-feelings-chart',
      accentHex: '#BE123C',
    },
  },
  {
    id: 'cluster-5',
    number: 5,
    chapterTitle: {
      bn: 'অধ্যায় ৫: সৃজনশীলতার জগৎ (Maker Studio)',
      en: 'Chapter 5: Maker Studio (Creative Exploration)',
    },
    pathLabel: {
      bn: '৫. সৃজনশীলতা',
      en: '5. Creativity',
    },
    shortTitle: {
      bn: 'সৃজনশীলতার জগৎ',
      en: 'Maker Studio',
    },
    intro: {
      bn: 'অনেক সময় আমরা চাই বাচ্চা একদম বইয়ের ছবির মতো সুন্দর ও নিখুঁত আম বা ঘর আঁকুক। কিন্তু ৪ বছর বয়সে নিয়ম বেঁধে দিলে বাচ্চার কল্পনাশক্তি নষ্ট হয়ে যায়। ১ম মাসে কঠিন হাতের কাজের দরকার নেই—শুধু কাগজ আর মোমরং দিয়ে নিজের মনে যা আসে তা-ই আঁকতে দিন।',
      en: 'At age 4, forcing neat outlines stops creative thinking. No complex craft programme is needed in Month 1—just give Tabia paper, cardboard, and crayons to express her imagination freely.',
    },
    primaryTask: {
      bn: 'মূল কাজ: "সুন্দর বা নিখুঁত হতে হবে"—এই ভয় ছাড়াই রঙ, কাগজ ও কল্পনা নিয়ে মনের আনন্দে আঁকাআঁকি ও বানানোর সুযোগ দেওয়া।',
      en: 'Primary Task: Let her draw and build freely with crayons, paper, and safe household cardboard without worrying about perfection.',
    },
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-900',
    accentBorder: 'border-purple-200',
    nodeColor: '#7E22CE',
    imageKey: 'creativeArt',
    activities: [
      {
        id: 'c5-a1',
        title: { bn: '১. নিজের কল্পনায় ইচ্ছেমতো আঁকা', en: '1. Free Drawing Without Rules' },
        whatToDo: {
          bn: 'একটি বড় সাদা কাগজ বা পুরোনো ক্যালেন্ডারের উল্টো পিঠ দিন। হাত ধরে এঁকে দেবেন না—ও যা আঁকতে চায় তা-ই আঁকুক। দাগ বাইরে চলে গেলেও থামাবেন না।',
          en: 'Give her a large sheet of plain paper (even the back of an old calendar). Never hold her hand to fix lines—let her draw whatever she imagines.',
        },
        materials: {
          bn: 'সাদা কাগজ বা বড় কার্ডবোর্ড এবং মোমরং (Crayons) বা রঙিন পেন্সিল।',
          en: 'Plain paper and thick wax crayons or colour pencils.',
        },
        whatToSay: {
          bn: '"বাহ! কী দারুণ রঙ দিয়েছ! আচ্ছা, এই ছবির ভেতর কী গল্প হচ্ছে আমাকে একটু বুঝিয়ে বলো তো?"',
          en: '"What lovely colours! Tell me the story of what you drew here!"',
        },
        benefit: {
          bn: 'উপকারিতা: আঙুলের জোর বাড়ে (যা পরে সুন্দর হাতের লেখায় সাহায্য করবে) এবং নিজের মনের ভাব ছবিতে প্রকাশ করার সাহস তৈরি হয়।',
          en: 'Benefit: Strengthens pencil grip naturally and builds fearless creative expression.',
        },
      },
      {
        id: 'c5-a2',
        title: { bn: '২. কল্পনার খেলা: "চাঁদের দেশে একটি বাড়ি"', en: '2. Imagination Prompt: A House on the Moon' },
        whatToDo: {
          bn: 'কখনো কখনো ওকে মজার কল্পনার বিষয় দিন। যেমন—"চলো আজ চাঁদের দেশে একটা বাড়ির ছবি আঁকি!" অথবা "তুমি যদি একটা প্রজাপতির বাড়ি বানাতে, সেটা কেমন হতো?"',
          en: 'Give playful imagination prompts like drawing a house on the moon or a butterfly’s home, plus safe empty biscuit boxes to stack.',
        },
        materials: {
          bn: 'কাগজ, মোমরং এবং বিস্কুটের খালি কার্টন/বাক্স।',
          en: 'Paper, crayons, and safe empty cardboard boxes.',
        },
        whatToSay: {
          bn: '"চাঁদের দেশে কি গাড়ি চলে নাকি রকেট? তোমার চাঁদের বাড়িতে জানালা কয়টা হবে?"',
          en: '"How would your moon house look? Does it have a big door for a rocket or wings?"',
        },
        benefit: {
          bn: 'উপকারিতা: মস্তিষ্কের চিন্তা করার ও নতুন কিছু উদ্ভাবন করার ক্ষমতা বিকশিত হয়।',
          en: 'Benefit: Fuels original imagination and independent creative problem-solving.',
        },
      },
    ],
    expectedResult: {
      bn: 'ছবি একদম নিখুঁত হতে হবে—এই ভয় ছাড়াই সে আঁকাআঁকির মাধ্যমে নিজের মনের ভাব প্রকাশ করতে স্বাচ্ছন্দ্য বোধ করবে।',
      en: 'She feels joyful expressing ideas through drawing and making without fearing imperfect lines.',
    },
    japaneseLessonTitle: {
      bn: 'জাপানি শিক্ষা (Japanese Lesson)',
      en: 'Japanese Lesson',
    },
    connections: [
      {
        name: { bn: 'ওয়াবি-সাবি (Wabi-Sabi)', en: 'Wabi-Sabi' },
        meaning: {
          bn: 'কোনো কিছু একদম নিখুঁত না হলেও তার মধ্যেও নিজস্ব সৌন্দর্য ও আনন্দ থাকে।',
          en: 'Finding beauty and joy in imperfection and natural expression.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: আঁকাবাঁকা দাগ বা রঙ বেরিয়ে যাওয়া ছবিকেও আমরা সুন্দর হিসেবে মেনে নিই ও প্রশংসা করি।',
          en: 'How this chapter applies it: We celebrate wiggly lines and colourful scribbles instead of demanding neat adult-style drawings.',
        },
      },
    ],
    printablePoster: {
      id: 'poster-5',
      buttonLabel: {
        bn: 'সৃজনশীল খেলার আইডিয়া কার্ড ডাউনলোড করুন',
        en: 'Download Creative Ideas Card (PNG)',
      },
      posterTitle: {
        bn: 'ইচ্ছেমতো আঁকা ও বানানোর আইডিয়া',
        en: 'Free Drawing & Imagination Ideas',
      },
      posterSubtitle: {
        bn: 'অধ্যায় ৫ · সৃজনশীলতার জগৎ (ওয়াবি-সাবি)',
        en: 'Chapter 5 · Maker Studio (Wabi-Sabi)',
      },
      items: [
        { bn: 'চাঁদের দেশে একটি বাড়ি আঁকো', en: 'Draw a house on the moon' },
        { bn: 'তোমার প্রিয় পশু বা পাখি আঁকো', en: 'Draw your favourite animal or bird' },
        { bn: 'হাতের কাছে থাকা ৩টি রঙ দিয়ে ইচ্ছেমতো দাগ টানো', en: 'Explore 3 crayon colours freely' },
        { bn: 'খালি কার্ডবোর্ডের বাক্স দিয়ে গাড়ি বা ঘর বানাও', en: 'Build a house from an empty box' },
        { bn: 'ছবি আঁকা শেষে গল্পটা মাকে বলো', en: 'Tell Mom the story of your drawing' },
      ],
      footerNote: {
        bn: 'ভুল বা এলোমেলো আঁকাকে কখনো "খারাপ" বলবেন না—ওর কল্পনাকে প্রশংসা করুন।',
        en: 'Every scribble is a step in imagination—never demand perfection.',
      },
      filename: 'tabia-creative-ideas-card',
      accentHex: '#7E22CE',
    },
  },
  {
    id: 'cluster-6',
    number: 6,
    chapterTitle: {
      bn: 'অধ্যায় ৬: প্রকৃতি ও শরীরচর্চা',
      en: 'Chapter 6: Nature & Body (Outdoor Exploration)',
    },
    pathLabel: {
      bn: '৬. প্রকৃতি ও শরীর',
      en: '6. Nature & Body',
    },
    shortTitle: {
      bn: 'প্রকৃতি ও শরীরচর্চা',
      en: 'Nature & Body',
    },
    intro: {
      bn: 'ঘরের চার দেয়ালের ভেতর সারাক্ষণ থাকলে শিশুর শরীর ও মন সতেজ থাকে না। ছাদ, বাড়ির উঠান বা পাশের পার্কে নিয়ে গেলে ও গাছের পাতা, পাখি আর আবহাওয়া দেখে অনেক কিছু শিখতে পারে। একই সাথে শুরু থেকেই পানির বিপদ সম্পর্কে সচেতন করতে হবে।',
      en: 'Fresh air, running, and observing real leaves, birds, and weather keep a child healthy and curious. At the same time, water safety awareness starts right away from Month 1.',
    },
    primaryTask: {
      bn: 'মূল কাজ: নিরাপদে দৌড়ঝাঁপ ও খেলাধুলা করা, গাছ-পাখি-আবহাওয়া পর্যবেক্ষণ করা এবং বড়দের ছাড়া পানির কাছে না যাওয়ার নিয়ম শেখা।',
      en: 'Primary Task: Encourage active outdoor movement, nature observation, plant watering, and strict water safety around ponds, tubs, or rivers.',
    },
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-900',
    accentBorder: 'border-emerald-200',
    nodeColor: '#047857',
    imageKey: 'naturePark',
    activities: [
      {
        id: 'c6-a1',
        title: { bn: '১. গাছে পানি দেওয়া ও আবহাওয়া খেয়াল করা', en: '1. Watering Plants & Noticing Weather' },
        whatToDo: {
          bn: 'বাড়ির বারান্দায় বা উঠানে থাকা একটি টবের গাছে ছোট মগ দিয়ে পানি দিতে বলুন। প্রতিদিন সকালে জানালা দিয়ে আকাশ দেখিয়ে জিজ্ঞেস করুন আজ রোদ উঠেছে নাকি মেঘ করেছে।',
          en: 'Let her water one potted plant with a small cup under supervision. Each morning, look out the window together and notice if it is sunny, cloudy, or rainy.',
        },
        materials: {
          bn: 'একটি টবের গাছ ও ছোট প্লাস্টিকের মগ।',
          en: 'A potted plant and a small plastic cup.',
        },
        whatToSay: {
          bn: '"গাছের পাতাটা শুকিয়ে গেছে দেখছ? চলো একটু পানি দিই, তাহলে গাছটা খুশি হবে! আজ আকাশে কি রোদ উঠেছে নাকি বৃষ্টি আসবে?"',
          en: '"Look, the plant looks thirsty! Let us give it some water. Is the sky sunny or cloudy today?"',
        },
        benefit: {
          bn: 'উপকারিতা: প্রকৃতির প্রতি মমতা তৈরি হয় এবং দিন-আবহাওয়ার পরিবর্তন বুঝতে শেখে।',
          en: 'Benefit: Builds care for living things and awareness of weather changes.',
        },
      },
      {
        id: 'c6-a2',
        title: { bn: '২. দৌড়ানো, বল খেলা ও শরীরের অঙ্গ চেনা', en: '2. Active Movement & Body Awareness' },
        whatToDo: {
          bn: 'বিকেলে নিরাপদ জায়গায় বল গড়িয়ে বা ছুড়ে খেলা, এক পায়ে লাফানো বা গানের তালে নাচা। খেলার ফাঁকে হাত, পা, কনুই, হাঁটু ইত্যাদি অঙ্গের নাম চেনান।',
          en: 'Play ball toss, hop like a frog, or dance together. Name body parts like knees, shoulders, and elbows naturally during play.',
        },
        materials: {
          bn: 'একটি হালকা রাবারের বা কাপড়ের বল।',
          en: 'A soft ball and open space to move safely.',
        },
        whatToSay: {
          bn: '"দেখি তো বলটা হাঁটু দিয়ে না ছুঁয়ে শুধু হাত দিয়ে ধরতে পারো কি না! এবার ব্যাঙের মতো ৩ বার লাফ দাও তো!"',
          en: '"Can you catch the ball with both hands? Now hop 3 times like a little frog!"',
        },
        benefit: {
          bn: 'উপকারিতা: শরীরের ভারসাম্য, শক্তি ও ফুর্তি বাড়ে এবং রাতের ঘুম ভালো হয়।',
          en: 'Benefit: Improves physical balance, strength, and restful sleep.',
        },
      },
      {
        id: 'c6-a3',
        title: { bn: '৩. পানি থেকে সাবধানতা (অত্যন্ত জরুরি শিক্ষা)', en: '3. Water Safety Awareness' },
        whatToDo: {
          bn: 'শুরু থেকেই স্পষ্টভাবে শিখিয়ে রাখুন—পুকুর, নদী, ডোবা বা বাথরুমের বড় বালতির কাছেও কখনো মা-বাবা বা বিশ্বস্ত বড় কাউকে ছাড়া যাওয়া যাবে না।',
          en: 'Teach firmly and calmly from the very first week: never go near a pond, river, pool, or filled water tub without a trusted adult holding her hand.',
        },
        materials: {
          bn: 'বাস্তব উদাহরণ দিয়ে সহজ ও শান্ত আলোচনা।',
          en: 'Clear, calm conversation whenever near water.',
        },
        whatToSay: {
          bn: '"মা বা বাবা সাথে না থাকলে কখনোই পুকুর বা পানির কাছে একা যাবে না। সবসময় বড়দের হাত ধরে থাকবে, মনে থাকবে তো?"',
          en: '"Never go near ponds, rivers, or deep water alone—always hold a trusted adult’s hand first."',
        },
        benefit: {
          bn: 'উপকারিতা: বাংলাদেশে শিশুদের নিরাপদ রাখতে ছোটবেলা থেকেই পানির বিপদ সম্পর্কে সচেতনতা তৈরি হয়।',
          en: 'Benefit: Establishes vital lifelong water safety habits early on.',
        },
      },
    ],
    exercise: {
      title: {
        bn: 'বাস্তব অনুশীলন: প্রকৃতি পর্যবেক্ষণ ভ্রমণ',
        en: 'Practical Practice: Nature Observation Walk',
      },
      intro: {
        bn: 'তাবিয়াকে কোনো বাগান, ছাদবাগান বা পার্কে নিয়ে যান এবং নিচের ৪টি জিনিস খুঁজে বের করতে বলুন:',
        en: 'Take Tabia to a garden, rooftop garden, or park and invite her to find these 4 things:',
      },
      steps: [
        { bn: '১. তিনটি আলাদা রকমের গাছের পাতা', en: '1. Three different leaves' },
        { bn: '২. দুটি আলাদা রঙের ফুল', en: '2. Two different flowers' },
        { bn: '৩. একটি পাখি (যেমন: দোয়েল বা চড়ুই)', en: '3. One bird' },
        { bn: '৪. একটি পোকা (যেমন: প্রজাপতি বা পিঁপড়া)', en: '4. One insect (butterfly or ant)' },
      ],
      extraQuestionsTitle: {
        bn: 'খুঁজে পাওয়ার পর তাবিয়াকে কী জিজ্ঞেস করবেন?',
        en: 'Ask her what differences she notices:',
      },
      extraQuestions: [
        { bn: '• কোন পাতাটি বেশি বড় আর কোনটি ছোট?', en: '• Which leaf is bigger and which is smaller?' },
        { bn: '• কোন ফুলটির রঙ আলাদা?', en: '• Which flower has a different colour?' },
        { bn: '• পাখিটি ডালে বসে কী করছে?', en: '• What is the bird doing on the branch?' },
      ],
      benefitsTitle: {
        bn: 'এই ভ্রমণে তাবিয়ার কী উপকার হবে?',
        en: 'How does this nature walk benefit Tabia?',
      },
      benefits: [
        { bn: 'ছোট-বড় ও রঙের পার্থক্য চোখে দেখে সহজেই বুঝতে শিখবে।', en: 'Learns to compare sizes, shapes, and colours in real life.' },
        { bn: 'প্রকৃতি ও প্রাণীদের প্রতি ভালোবাসা ও কৌতূহল তৈরি হবে।', en: 'Develops curiosity and gentle care for nature.' },
        { bn: 'হাঁটাচলা ও রোদ-বাতাসে শরীর সুস্থ ও চটপটে থাকবে।', en: 'Keeps her active, healthy, and energetic.' },
      ],
    },
    expectedResult: {
      bn: 'সে আরও মনোযোগী হবে, শারীরিকভাবে চটপটে থাকবে এবং প্রকৃতির প্রতি তার ভালোবাসা তৈরি হবে।',
      en: 'She becomes more observant, physically active, and interested in the natural world.',
    },
    japaneseLessonTitle: {
      bn: 'শিক্ষা পদ্ধতির সংযোগ (জাপান ও ডেনমার্ক)',
      en: 'Learning Approach Connection',
    },
    connections: [
      {
        name: { bn: 'ডেনমার্কের আউটডোর লার্নিং পদ্ধতি', en: "Denmark's Outdoor Learning Approach" },
        meaning: {
          bn: 'বড়দের নিরাপদ তত্ত্বাবধানে শিশুরা প্রকৃতির মাঝে খেলে খেলে শেখে।',
          en: 'Children explore nature freely through supervised outdoor play.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: পাতা কুড়িয়ে বড়-ছোট মাপা এবং পাখি দেখা—কোনো ক্লাসরুম ছাড়াই প্রকৃতির মাঝে বিজ্ঞান শেখা।',
          en: 'How this chapter applies it: Sorting real leaves by size and watching birds turns any garden or rooftop into a joyful classroom.',
        },
      },
      {
        name: { bn: 'শোশিন (Shoshin)', en: 'Shoshin' },
        meaning: {
          bn: 'চেনা জিনিসগুলোকেও নতুন চোখ ও কৌতূহল নিয়ে দেখা।',
          en: 'Observing familiar things with fresh curiosity.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: প্রতিদিন দেখা পিপঁড়া বা গাঁদা ফুলকেও প্রশ্ন করে নতুনভাবে দেখা।',
          en: 'How this chapter applies it: Looking at a familiar marigold or ant as if discovering it for the first time.',
        },
      },
    ],
    printablePoster: {
      id: 'poster-6',
      buttonLabel: {
        bn: 'প্রকৃতি খোঁজার তালিকা ডাউনলোড করুন',
        en: 'Download Nature Explorer Sheet (PNG)',
      },
      posterTitle: {
        bn: 'প্রকৃতি পর্যবেক্ষণ: বাইরে কী খুঁজব?',
        en: 'Nature Walk: What Shall We Find?',
      },
      posterSubtitle: {
        bn: 'অধ্যায় ৬ · প্রকৃতি ও শরীরচর্চা',
        en: 'Chapter 6 · Nature & Body',
      },
      items: [
        { bn: '৩টি আলাদা রকমের গাছের পাতা', en: '3 different leaves' },
        { bn: '২টি আলাদা রঙের ফুল', en: '2 different flowers' },
        { bn: '১টি পাখি দেখা ও নাম বলা', en: 'Spot 1 bird & watch what it does' },
        { bn: '১টি পোকা বা প্রজাপতি দেখা', en: 'Spot 1 insect or butterfly' },
        { bn: 'সবসময় বড়দের হাত ধরে নিরাপদে থাকা', en: 'Stay safe near water with an adult' },
      ],
      footerNote: {
        bn: 'খুঁজে পাওয়ার পর জিজ্ঞেস করুন: "কোন পাতাটি বড় আর কোনটি ছোট?"',
        en: 'Ask outdoors: "Which leaf is bigger? What colour is the flower?"',
      },
      filename: 'tabia-nature-walk-guide',
      accentHex: '#047857',
    },
  },
  {
    id: 'cluster-7',
    number: 7,
    chapterTitle: {
      bn: 'অধ্যায় ৭: রান্নাঘর ও স্বাস্থ্য',
      en: 'Chapter 7: Kitchen & Health',
    },
    pathLabel: {
      bn: '৭. রান্নাঘর ও স্বাস্থ্য',
      en: '7. Kitchen & Health',
    },
    shortTitle: {
      bn: 'রান্নাঘর ও স্বাস্থ্য',
      en: 'Kitchen & Health',
    },
    intro: {
      bn: '১ম মাসে ৪ বছর বয়সী শিশুকে আলাদা করে রান্না শেখানোর বা চুলার কাছে নেওয়ার কোনো দরকার নেই। এটি পরের ধাপের জন্য রাখুন। আপাতত প্রতিদিনের খাবার ও পরিষ্কার-পরিচ্ছন্নতার সাধারণ অভ্যাসগুলো দেখাই যথেষ্ট।',
      en: 'No formal cooking lessons are needed in Month 1—save that for later months. For now, gentle everyday exposure to healthy foods, handwashing, and safe kitchen observation is plenty.',
    },
    primaryTask: {
      bn: 'মূল কাজ: বিভিন্ন ফল ও সবজির নাম চেনা, খাওয়ার আগে সাবান দিয়ে হাত ধোয়ার অভ্যাস করা এবং নিরাপদ দূরত্বে দাঁড়িয়ে রান্না দেখা।',
      en: 'Primary Task: Identify common fruits and vegetables, wash hands with soap before eating, and observe cooking from a safe distance.',
    },
    accentBg: 'bg-lime-50',
    accentText: 'text-lime-900',
    accentBorder: 'border-lime-200',
    nodeColor: '#4D7C0F',
    imageKey: 'kitchenHealth',
    activities: [
      {
        id: 'c7-a1',
        title: { bn: '১. খাওয়ার আগে সাবান দিয়ে হাত ধোয়া', en: '1. Washing Hands With Soap Before Eating' },
        whatToDo: {
          bn: 'ভাত বা ফল খাওয়ার আগে ও বাইরে থেকে ফিরে একসাথে বেসিনে গিয়ে সাবান দিয়ে হাত ধোবেন। ফেনা তৈরি করে ১ থেকে ১০ পর্যন্ত গুনতে গুনতে হাত ধোয়ার মজার অভ্যাস করান।',
          en: 'Before meals and after coming inside, wash hands with soap together while counting slowly from 1 to 10.',
        },
        materials: {
          bn: 'সাবান, পানি, ছোট টুল (যাতে ওর হাত বেসিনে পৌঁছায়) এবং একটি পরিষ্কার তোয়ালে।',
          en: 'Soap, running water, a sturdy low step-stool, and a hand towel.',
        },
        whatToSay: {
          bn: '"চলো, হাতের সব দুষ্টু জীবাণু তাড়াতে সাবান দিয়ে ফেনা বানাই! ১, ২, ৩... ১০ পর্যন্ত গুনে ধুয়ে ফেলি।"',
          en: '"Let us make bubbly soap foam to wash away germs! Count 1 to 10 with me while we scrub."',
        },
        benefit: {
          bn: 'উপকারিতা: জীবাণু ও অসুখ থেকে দূরে থাকার স্বাস্থ্যকর অভ্যাস সারা জীবনের জন্য গড়ে ওঠে।',
          en: 'Benefit: Builds lifelong personal hygiene and illness prevention habits.',
        },
      },
      {
        id: 'c7-a2',
        title: { bn: '২. ফল, সবজি চেনা ও কেন ভালো খাবার খাই তা বোঝা', en: '2. Recognizing Fruits, Vegetables & Healthy Food' },
        whatToDo: {
          bn: 'রান্নাঘরের ঝুড়ি থেকে আম, কলা, পেঁপে, আলু বা টমেটো হাতে নিয়ে ওর সাথে নাম ও রঙ বলুন। খাবার নষ্ট না করে প্লেটের খাবার শেষ করার গুরুত্ব সহজভাবে বুঝিয়ে দিন।',
          en: 'Let her hold fresh fruits and vegetables from the kitchen basket, name them, and talk simply about how colourful foods give energy to run and play.',
        },
        materials: {
          bn: 'রান্নাঘরের তাজা ফল বা সবজি (আম, কলা, গাজর, শসা)।',
          en: 'Fresh fruits and vegetables from your kitchen basket.',
        },
        whatToSay: {
          bn: '"এই গাজর আর পেঁপে খেলে চোখ ভালো থাকে আর দৌড়ানোর শক্তি পাওয়া যায়! আচ্ছা, প্লেটে যতটুকু খাবে ততটুকুই নেবে, নষ্ট করবে না—কেমন?"',
          en: '"Eating carrots and papaya helps your eyes shine and gives you energy to jump! Let us take only what we can finish so food is never wasted."',
        },
        benefit: {
          bn: 'উপকারিতা: বাইরের জাঙ্ক ফুডের বদলে ঘরের পুষ্টিকর খাবার ও ফল খাওয়ার প্রতি আগ্রহ তৈরি হয়।',
          en: 'Benefit: Encourages appreciation for nutritious home food and avoids food waste.',
        },
      },
      {
        id: 'c7-a3',
        title: { bn: '৩. নিরাপদ দূরত্বে দাঁড়িয়ে রান্না দেখা', en: '3. Safe Kitchen Observation' },
        whatToDo: {
          bn: 'গরম চুলা বা ধারালো বঁটি/ছুরি থেকে নিরাপদ দূরত্বে একটি মাদুর বা মোড়ায় বসিয়ে মা কীভাবে চাল ধোয় বা ডাল রান্না করে তা দেখতে দিন।',
          en: 'Have her sit at a safe distance away from the stove and sharp knives while she watches you wash rice or stir a pot.',
        },
        materials: {
          bn: 'নিরাপদ বসার জায়গা (চুলা ও ধারালো জিনিস থেকে দূরে)।',
          en: 'A safe spot away from heat and sharp utensils.',
        },
        whatToSay: {
          bn: '"দেখো তো চাল ধুলে পানিটা কেমন সাদা হয়ে গেল! কিন্তু চুলার কাছে কখনো একা আসবে না, ওখানে অনেক গরম থাকে।"',
          en: '"Look how the water turns milky when we wash rice! Always stay right here safely away from the hot stove."',
        },
        benefit: {
          bn: 'উপকারিতা: রান্নার প্রক্রিয়া সম্পর্কে কৌতূহল বাড়ে এবং আগুন ও ধারালো জিনিসের বিপদ সম্পর্কে সচেতন হয়।',
          en: 'Benefit: Builds curiosity about how meals are made while teaching kitchen safety.',
        },
      },
    ],
    expectedResult: {
      bn: 'সে খাবার, পরিষ্কার-পরিচ্ছন্নতা এবং সুস্বাস্থ্যের মধ্যে যে সম্পর্ক আছে, তা বুঝতে শুরু করবে।',
      en: 'She begins recognizing the connection between clean hands, healthy food, and staying strong.',
    },
    japaneseLessonTitle: {
      bn: 'জাপানি শিক্ষা (Japanese Lesson)',
      en: 'Japanese Lesson',
    },
    connections: [
      {
        name: { bn: 'মোত্তাইনাই (Mottainai)', en: 'Mottainai' },
        meaning: {
          bn: 'খাবার, পানি বা কোনো জিনিস অযথা অপচয় না করা এবং তার প্রতি কৃতজ্ঞ থাকা।',
          en: 'Respecting resources and avoiding wasting food or water.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: প্লেটে অল্প করে খাবার নেওয়া এবং খাওয়া শেষে একটি ভাতও যেন নষ্ট না হয় সেই অভ্যাস শেখানো।',
          en: 'How this chapter applies it: Serving small portions so no food is thrown away, and turning off the tap right after handwashing.',
        },
      },
    ],
    printablePoster: {
      id: 'poster-7',
      buttonLabel: {
        bn: 'হাত ধোয়া ও সুস্থ খাবারের নিয়ম ডাউনলোড করুন',
        en: 'Download Handwashing & Food Guide (PNG)',
      },
      posterTitle: {
        bn: 'পরিষ্কার হাত, সুস্থ শরীর',
        en: 'Clean Hands, Healthy Body',
      },
      posterSubtitle: {
        bn: 'অধ্যায় ৭ · রান্নাঘর ও স্বাস্থ্য (মোত্তাইনাই)',
        en: 'Chapter 7 · Kitchen & Health (Mottainai)',
      },
      items: [
        { bn: 'খাওয়ার আগে সাবান দিয়ে ১–১০ গুনে হাত ধোয়া', en: 'Wash hands with soap counting 1–10' },
        { bn: 'নতুন ফল ও সবজির নাম ও রঙ বলা', en: 'Name fresh fruits & vegetables' },
        { bn: 'যতটুকু খাব ততটুকুই প্লেটে নেওয়া (অপচয় নয়)', en: 'Take only what we can eat (no waste)' },
        { bn: 'চুলা ও ধারালো জিনিস থেকে দূরে থাকা', en: 'Stay safely away from stove & knives' },
      ],
      footerNote: {
        bn: 'বেসিনের পাশে টাঙিয়ে রাখলে তাবিয়া খাওয়ার আগে নিজেই হাত ধুতে মনে রাখবে।',
        en: 'Hang near the dining area or washbasin as a gentle visual reminder.',
      },
      filename: 'tabia-kitchen-health-guide',
      accentHex: '#4D7C0F',
    },
  },
  {
    id: 'cluster-8',
    number: 8,
    chapterTitle: {
      bn: 'অধ্যায় ৮: বাস্তব জগতের অভিযাত্রী',
      en: 'Chapter 8: Real World Explorer (Early Exposure)',
    },
    pathLabel: {
      bn: '৮. বাস্তব জগত',
      en: '8. Real World',
    },
    shortTitle: {
      bn: 'বাস্তব জগতের অভিযাত্রী',
      en: 'Real World Explorer',
    },
    intro: {
      bn: '১ম সপ্তাহ থেকেই তাবিয়াকে নিয়ে ঘরের বাইরে পরিচিত জায়গায় (যেমন—পাশের মুদি দোকান, কাঁচাবাজার বা পার্ক) ঘুরতে যান। এর উদ্দেশ্য তাকে একবারে সবকিছু শিখিয়ে ফেলা নয়, বরং বইয়ের বাইরেও যে শেখার বিশাল পৃথিবী আছে—সেটির সাথে পরিচয় করিয়ে দেওয়া।',
      en: 'From Week 1, take small local outings—like visiting the neighbourhood vegetable stall or park. The goal is not to lecture about society, but to help her notice how the real world works outside books.',
    },
    primaryTask: {
      bn: 'মূল কাজ: বাজার, রাস্তা ও সমাজের বিভিন্ন পেশার মানুষকে (দোকানদার, রিকশাচালক, পরিচ্ছন্নতাকর্মী) কাছ থেকে দেখা ও সম্মান করতে শেখা।',
      en: 'Primary Task: Observe local markets, neighbourhoods, and everyday workers (shopkeepers, drivers, cleaners) with curiosity and respect.',
    },
    accentBg: 'bg-orange-50',
    accentText: 'text-orange-900',
    accentBorder: 'border-orange-200',
    nodeColor: '#C2410C',
    imageKey: 'vegetableMarket',
    activities: [
      {
        id: 'c8-a1',
        title: { bn: '১. বিভিন্ন পেশার মানুষকে চেনা ও প্রশ্ন করা', en: '1. Observing Professions & Asking Kindly' },
        whatToDo: {
          bn: 'রিকশায় চড়লে বা দোকানে গেলে রিকশাচালক চাচা বা দোকানদার কীভাবে কাজ করছেন তা তাবিয়াকে দেখান। আপনার সাহায্যে ওকে ভদ্রভাবে কথা বলতে ও ধন্যবাদ দিতে শেখান।',
          en: 'When riding a rickshaw or buying groceries, point out what the driver or shopkeeper does and help her greet and thank them politely.',
        },
        materials: {
          bn: 'পাশের দোকান, বাজার বা বাড়ির সামনের রাস্তা (বড়দের হাত ধরে)।',
          en: 'A short walk to a local shop or market holding your hand.',
        },
        whatToSay: {
          bn: '"দেখো, উনি দোকানদার চাচা—উনি আমাদের জন্য তাজা সবজি এনে বিক্রি করেন। চলো আমরা ওনাকে সালাম দিই এবং জিজ্ঞেস করি, চাচা এই লাউটা কোথা থেকে এসেছে?"',
          en: '"Look, the shopkeeper brings fresh vegetables so families can cook. Let us smile and ask him which farm these came from!"',
        },
        benefit: {
          bn: 'উপকারিতা: সমাজে সবাই যে গুরুত্বপূর্ণ কাজ করেন এবং সব কাজই সম্মানের—এই মূল্যবোধ ছোট থেকেই গড়ে ওঠে।',
          en: 'Benefit: Builds respect for every kind of honest work in the community.',
        },
      },
      {
        id: 'c8-a2',
        title: { bn: '২. টাকা-পয়সার প্রাথমিক ধারণা ও কেনাকাটা দেখা', en: '2. Watching How Money Works' },
        whatToDo: {
          bn: 'এখনই অঙ্ক কষাতে হবে না—দোকানদারকে টাকা দেওয়ার সময় ওকে কাছে রাখুন যেন সে দেখে জিনিসের বিনিময়ে মানুষ কীভাবে টাকা দেয় এবং বাকি টাকা ফেরত নেয়।',
          en: 'No math drills yet—simply let her watch when you hand notes to the shopkeeper and receive vegetables and change.',
        },
        materials: {
          bn: 'ছোট নোট (১০/২০/৫০ টাকা) এবং কেনাকাটার ব্যাগ।',
          en: 'Small everyday currency notes and a cloth shopping bag.',
        },
        whatToSay: {
          bn: '"দেখো, আমরা টমেটো নিলাম আর দোকানদার চাচাকে টাকা দিলাম। চাচা আমাদের হিসাব করে বাকি টাকা ফেরত দিলেন।"',
          en: '"See how we gave the shopkeeper money for the tomatoes, and he counted our change back carefully."',
        },
        benefit: {
          bn: 'উপকারিতা: জিনিসের মূল্য ও লেনদেন কীভাবে হয়—তার বাস্তব ধারণা তৈরি হয়।',
          en: 'Benefit: Gives a natural first understanding of value and everyday exchange.',
        },
      },
      {
        id: 'c8-a3',
        title: { bn: '৩. মা-বাবার পছন্দের পেশার সাথে সহজ পরিচয়', en: '3. Introducing Inspiring Professions' },
        whatToDo: {
          bn: 'মা-বাবা তার জন্য ভবিষ্যতে যে স্বপ্ন দেখেন (যেমন—ডাক্তার, বিজ্ঞানী, শিক্ষক বা নির্মাতা), গল্পের ছলে সেই মানুষগুলো মানুষের কী উপকার করেন তা সহজ করে বলুন।',
          en: 'In playful stories, introduce the professions you admire (doctor, scientist, teacher, engineer) by explaining how they help people.',
        },
        materials: {
          bn: 'গল্পের কথা বা খেলার ডাক্তার সেট / বিল্ডিং ব্লক।',
          en: 'Playful conversation or simple toy props.',
        },
        whatToSay: {
          bn: '"জানো মা, বিজ্ঞানীরা নতুন নতুন জিনিস খুঁজে বের করে সবার জীবন সহজ করেন, আর ডাক্তাররা অসুস্থ মানুষকে সুস্থ করে তোলেন।"',
          en: '"Did you know scientists discover new ideas to help everyone, and doctors help sick people feel strong again?"',
        },
        benefit: {
          bn: 'উপকারিতা: বড় হয়ে ভালো কিছু করার স্বপ্ন ও কৌতূহল মনের ভেতর বীজের মতো বপন হয়।',
          en: 'Benefit: Plants early curiosity and big dreams about contributing to the world.',
        },
      },
    ],
    exercise: {
      title: {
        bn: 'বাস্তব অনুশীলন: সবজির বাজার ঘুরে দেখা',
        en: 'Practical Practice: Vegetable Market Exploration',
      },
      intro: {
        bn: 'তাবিয়াকে একটি কাছের সবজির দোকানে বা কাঁচাবাজারে নিয়ে যান এবং নিচের ৫টি মজার কাজ একসাথে করুন:',
        en: 'Take Tabia to a local vegetable stall or market and do these 5 observations together:',
      },
      steps: [
        { bn: '১. পাঁচটি পরিচিত সবজির নাম চেনা (যেমন—আলু, টমেটো, লাউ, গাজর, পটল)', en: '1. Name 5 vegetables (tomato, gourd, carrot, potato, spinach)' },
        { bn: '২. সবজিগুলোর রঙ বলা (লাল টমেটো, সবুজ লাউ, কমলা গাজর)', en: '2. Name their colours' },
        { bn: '৩. কয়েকটি আলু বা টমেটো গুনে দেখা (১ থেকে ৫)', en: '3. Count 3–5 vegetables on display' },
        { bn: '৪. দোকানদার কীভাবে ওজন করে বিক্রি করছেন তা দেখা', en: '4. Notice how the shopkeeper weighs and packs items' },
        { bn: '৫. ক্রেতারা কীভাবে টাকা দিচ্ছেন তা খেয়াল করা', en: '5. Watch how customers pay' },
      ],
      extraQuestionsTitle: {
        bn: 'বাজার থেকে ফিরে বা হাঁটতে হাঁটতে সহজ ৪টি প্রশ্ন করুন:',
        en: 'Ask these 4 simple questions:',
      },
      extraQuestions: [
        { bn: '• সবজি কে বিক্রি করছিলেন?', en: '• Who was selling the vegetables?' },
        { bn: '• উনার কাজ কী?', en: "• What is that person's job?" },
        { bn: '• মানুষ কেন বাজার থেকে সবজি কেনে?', en: '• Why do people buy vegetables?' },
        { bn: '• তোমার কোন সবজিটি সবচেয়ে বেশি পছন্দ?', en: '• Which vegetable did you like best?' },
      ],
      benefitsTitle: {
        bn: 'বাজার ভ্রমণে তাবিয়ার কী উপকার হবে?',
        en: 'How does this market visit benefit Tabia?',
      },
      benefits: [
        { bn: 'বইয়ের বাইরে বাস্তব পৃথিবীতে রঙ, সংখ্যা ও মানুষের কাজ একসাথে শিখবে।', en: 'Connects colours, counting, and human work outside textbooks.' },
        { bn: 'চারপাশের জগতকে মন দিয়ে দেখার ও প্রশ্ন করার সাহস তৈরি হবে।', en: 'Builds keen observation and courage to ask questions.' },
        { bn: 'সমাজের পরিশ্রমী মানুষদের প্রতি শ্রদ্ধা তৈরি হবে।', en: 'Teaches appreciation and respect for working people.' },
      ],
    },
    expectedResult: {
      bn: 'সে বুঝতে শুরু করবে যে শুধু বইয়ের ভেতরেই নয়, বইয়ের বাইরেও শেখার অনেক কিছু আছে এবং সমাজে বিভিন্ন মানুষ আলাদা আলাদা কাজ করে থাকেন।',
      en: 'She starts understanding that learning happens everywhere outside books and that many people work together in society.',
    },
    japaneseLessonTitle: {
      bn: 'শিক্ষা পদ্ধতির সংযোগ (জাপান, ফিনল্যান্ড ও নিউজিল্যান্ড)',
      en: 'Global Learning Connection',
    },
    connections: [
      {
        name: { bn: 'ওমোইয়ারি (Omoiyari)', en: 'Omoiyari' },
        meaning: {
          bn: 'আমাদের প্রতিদিনের জীবনে যারা নানাভাবে সাহায্য করেন (দোকানদার, চালক, পরিচ্ছন্নতাকর্মী), তাদের সম্মান করা।',
          en: 'Respecting and appreciating the everyday people who support our daily lives.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: বাজারে গিয়ে দোকানদারকে হাসিমুখে সালাম ও "ধন্যবাদ" বলা শেখানো।',
          en: 'How this chapter applies it: Greeting the vegetable seller warmly and saying thank you.',
        },
      },
      {
        name: { bn: 'ফিনল্যান্ড ও নিউজিল্যান্ডের প্রাথমিক শিক্ষা পদ্ধতি', en: 'Finnish & New Zealand Early Learning' },
        meaning: {
          bn: 'প্রতিদিনের বাস্তব অভিজ্ঞতা, সবার সাথে মিলেমিশে থাকা এবং চারপাশ ঘুরে দেখার মাধ্যমে শেখা।',
          en: 'Learning through real-world belonging, everyday outings, and active exploration.',
        },
        howApplied: {
          bn: 'এই অধ্যায়ে কীভাবে কাজে লাগে: সপ্তাহে একদিন পাড়ার বাজার বা দোকান ঘুরে আসাকেই একটি জীবন্ত ক্লাসরুম বানিয়ে ফেলা।',
          en: 'How this chapter applies it: Turning a simple neighbourhood grocery trip into a rich living classroom.',
        },
      },
    ],
    printablePoster: {
      id: 'poster-8',
      buttonLabel: {
        bn: 'সবজির বাজার ভ্রমণের গাইড ডাউনলোড করুন',
        en: 'Download Market Explorer Guide (PNG)',
      },
      posterTitle: {
        bn: 'সবজির বাজার ভ্রমণ: ৫টি মজার কাজ',
        en: 'Vegetable Market Trip: 5 Fun Steps',
      },
      posterSubtitle: {
        bn: 'অধ্যায় ৮ · বাস্তব জগতের অভিযাত্রী',
        en: 'Chapter 8 · Real World Explorer',
      },
      items: [
        { bn: '৫টি সবজির নাম ও রঙ চেনা (টমেটো, লাউ, গাজর)', en: 'Name 5 vegetables & their colours' },
        { bn: '১ থেকে ৫ পর্যন্ত আলু বা টমেটো গোনা', en: 'Count 1 to 5 vegetables' },
        { bn: 'দোকানদার কীভাবে ওজন করে বিক্রি করেন দেখা', en: 'Watch how the shopkeeper weighs & sells' },
        { bn: 'টাকা দেওয়া ও বাকি টাকা নেওয়া খেয়াল করা', en: 'Observe paying & getting change' },
        { bn: 'দোকানদার চাচাকে হাসিমুখে "ধন্যবাদ" বলা', en: 'Say thank you politely to the worker' },
      ],
      footerNote: {
        bn: 'বাড়ি ফিরে জিজ্ঞেস করুন: "সবজি কে বিক্রি করছিলেন এবং তোমার কোন সবজি ভালো লেগেছে?"',
        en: 'Ask afterwards: "Who sold the vegetables and which one did you like?"',
      },
      filename: 'tabia-market-explorer-guide',
      accentHex: '#C2410C',
    },
  },
];

export const FEELINGS_OPTIONS: FeelingOption[] = [
  {
    id: 'happy',
    label: { bn: 'খুশি (Happy)', en: 'Happy' },
    parentPrompt: {
      bn: 'তাবিয়া খুশি থাকলে হাসিমুখে বলুন: "আজ কোন জিনিসটা তোমাকে এত খুশি করেছে আমাকে বলো তো?" এতে ও আনন্দের কথা গুছিয়ে বলতে শিখবে।',
      en: 'Smile and ask: "What made you feel so happy today?" This helps her put joyful memories into words.',
    },
    colorClass: 'text-emerald-900',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-300',
  },
  {
    id: 'sad',
    label: { bn: 'মন খারাপ (Sad)', en: 'Sad' },
    parentPrompt: {
      bn: 'পাশে বসে আদর করে জিজ্ঞেস করুন: "কেন এমন লাগছে?" সাথে সাথে উত্তর দিতে জোর করবেন না—নীরবে পাশে থাকুন, ও নিজেই বলবে।',
      en: 'Sit gently beside her and ask: "Why do you feel sad?" Do not force an immediate reply—stay close and patient.',
    },
    colorClass: 'text-sky-900',
    bgClass: 'bg-sky-50',
    borderClass: 'border-sky-300',
  },
  {
    id: 'angry',
    label: { bn: 'রাগ (Angry)', en: 'Angry' },
    parentPrompt: {
      bn: 'বকা দেবেন না। শান্ত গলায় বলুন: "আমি বুঝতে পারছি তোমার খুব রাগ হয়েছে। একটু শ্বাস নাও, তারপর আমাকে বলো কী হয়েছে।"',
      en: 'Stay calm and avoid scolding. Say: "I see you feel angry. Take one deep breath, then tell me what happened."',
    },
    colorClass: 'text-rose-900',
    bgClass: 'bg-rose-50',
    borderClass: 'border-rose-300',
  },
  {
    id: 'scared',
    label: { bn: 'ভয় (Scared)', en: 'Scared' },
    parentPrompt: {
      bn: 'জড়িয়ে ধরে ভরসা দিন: "আমি তোমার পাশেই আছি, তোমার কোনো ভয় নেই। কিসে ভয় পেয়েছ মা?"',
      en: 'Hug her and reassure: "I am right here with you, you are safe. Can you tell me what felt scary?"',
    },
    colorClass: 'text-indigo-900',
    bgClass: 'bg-indigo-50',
    borderClass: 'border-indigo-300',
  },
  {
    id: 'excited',
    label: { bn: 'খুব আনন্দিত (Excited)', en: 'Excited' },
    parentPrompt: {
      bn: 'ওর উচ্ছ্বাসের সাথে যোগ দিন! জিজ্ঞেস করুন: "বাহ! আজ কী নিয়ে এত মজা হচ্ছে আমাকে গল্প করে শোনাও!"',
      en: 'Share her excitement! Ask: "Tell me all about what you are so excited for!"',
    },
    colorClass: 'text-amber-900',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-300',
  },
];

export const KIMS_GAME_ITEMS: KimsGameItem[] = [
  { id: 'spoon', name: { bn: 'চামচ', en: 'Spoon' } },
  { id: 'pencil', name: { bn: 'পেন্সিল', en: 'Pencil' } },
  { id: 'car', name: { bn: 'খেলনা গাড়ি', en: 'Toy car' } },
  { id: 'ball', name: { bn: 'বল', en: 'Ball' } },
  { id: 'book', name: { bn: 'ছোট বই', en: 'Small book' } },
];

export const MARKET_OBSERVATION_QA = [
  {
    q: { bn: '১. ছবিতে একটি সবুজ লাউ খুঁজে বের করো তো!', en: '1. Find a green bottle gourd in the picture!' },
    hint: { bn: 'মায়ের হাতের কাছে বাঁশের ঝুড়িতে দুটি বড় সবুজ লাউ রাখা আছে।', en: 'Two big green gourds are sitting in the front woven basket.' },
  },
  {
    q: { bn: '২. লাউয়ের ঠিক পাশে কী রাখা আছে?', en: '2. What is sitting right next to the gourd?' },
    hint: { bn: 'পাশের ঝুড়িতে কমলা রঙের গাজর আর লাল টমেটো রয়েছে।', en: 'Orange carrots on the left and bright red tomatoes beside it.' },
  },
  {
    q: { bn: '৩. ছবিতে কয়টি গাজর বা বড় কুমড়া দেখতে পাচ্ছ গুনে বলো?', en: '3. How many orange pumpkins or carrot bunches can you count?' },
    hint: { bn: 'একসাথে আঙুল দিয়ে ছুঁয়ে ১, ২, ৩ করে গুনতে সাহায্য করুন।', en: 'Let her point with her finger and count 1, 2, 3 slowly.' },
  },
  {
    q: { bn: '৪. ছবিতে লাল রঙের কোনো জিনিস খুঁজে বের করো।', en: '4. Find something red in the picture.' },
    hint: { bn: 'ঝুড়ি ভরা লাল টমেটো আর মায়ের শাড়ির পাড়ে লাল রঙ দেখা যাচ্ছে!', en: 'Red tomatoes in the baskets and the red border on Mom’s saree!' },
  },
] as const;

export const DAILY_ROUTINE_STEPS: DailyRoutineStep[] = [
  {
    id: 'r-morning',
    emoji: '🌅',
    timeOfDay: { bn: 'সকাল (ঘুম থেকে ওঠার পর)', en: 'Morning (After Waking Up)' },
    habit: {
      bn: 'বিছানা একটু গোছানো ও দাঁত মাজা',
      en: 'Straighten the pillow & brush teeth',
    },
    description: {
      bn: 'ঘুম থেকে উঠে নিজের বালিশটা ঠিক জায়গায় রাখা এবং নিজে ব্রাশ হাতে নেওয়া। আপনি পাশে দাঁড়িয়ে উৎসাহ দিন।',
      en: 'Put her own pillow in place after waking up and hold her toothbrush herself while you stand nearby cheering her on.',
    },
  },
  {
    id: 'r-breakfast',
    emoji: '🍽️',
    timeOfDay: { bn: 'সকালের নাশতা', en: 'Breakfast' },
    habit: {
      bn: 'নিজের হাতে খাওয়া ও গ্লাস ধরা',
      en: 'Eat with her own hand & hold her cup',
    },
    description: {
      bn: 'চামচ বা হাত দিয়ে নিজে খাবার খাওয়ার সুযোগ দিন। একটু পড়ে গেলে বকা দেবেন না; খাওয়া শেষে প্লেটটা সিঙ্কে বা নির্দিষ্ট জায়গায় রাখতে বলুন।',
      en: 'Let her eat using a spoon or her fingers. Do not scold small spills; invite her to place her plate in the sink afterward.',
    },
  },
  {
    id: 'r-afternoon',
    emoji: '☀️',
    timeOfDay: { bn: 'দুপুর ও বিকেল', en: 'Afternoon' },
    habit: {
      bn: 'খেলার পর খেলনা গোছানো ও প্রকৃতি দেখা',
      en: 'Tidy toys after play & explore nature',
    },
    description: {
      bn: 'বিকেলে একটু ছাদে, উঠানে বা পার্কে নিয়ে যান। খেলা শেষ হলে বলুন—"চলো, এবার খেলনাগুলোকে ওদের বাড়িতে (বাক্সে) পাঠিয়ে দিই।"',
      en: 'Take her to the rooftop, yard, or park. When play finishes, say: "Let us send the toys back to their house (basket)!"',
    },
  },
  {
    id: 'r-evening',
    emoji: '🌆',
    timeOfDay: { bn: 'সন্ধ্যা', en: 'Evening' },
    habit: {
      bn: 'সারা দিনের ৩টি কথার গল্প',
      en: '3-sentence story about the day',
    },
    description: {
      bn: 'সন্ধ্যায় চা-নাশতার সময় ওর পাশে বসে সারাদিন কী কী দেখল তা নিয়ে ৩ লাইনে গল্প করুন। এই সময় মোবাইল টিভি বন্ধ রাখুন।',
      en: 'During evening tea, sit beside her and ask for a 3-sentence story about what she saw today. Keep phones and TV off.',
    },
  },
  {
    id: 'r-bedtime',
    emoji: '🌙',
    timeOfDay: { bn: 'ঘুমানোর আগে', en: 'Before Bedtime' },
    habit: {
      bn: 'ছবির বই দেখা ও ভালোবাসার কথা',
      en: 'Picture book & warm words of love',
    },
    description: {
      bn: 'ঘুমানোর আগে ১০ মিনিট ছবির বই থেকে একটি ছোট গল্প পড়ে শোনান আর বলুন, "আজ তুমি অনেক ভালো চেষ্টা করেছ, মা তোমাকে খুব ভালোবাসে।"',
      en: 'Read a short picture book for 10 minutes before sleep and tell her: "You tried so well today, and Mom loves you very much."',
    },
  },
];

export const PARENT_GUIDE_CONTENT = {
  whyUrgentTitle: {
    bn: 'কেন এই বইটি আপনার সন্তানের জন্য জরুরি?',
    en: 'Why Is This Book So Important for Your Child?',
  },
  whyUrgentParagraphs: [
    {
      bn: 'প্রিয় মা, আমরা সবাই চাই আমাদের সন্তান বড় হয়ে অনেক ভালো কিছু করুক। কিন্তু আমরা বেশিরভাগ সময় ভাবি—বাচ্চা শুধু বই মুখস্থ করলেই আর পরীক্ষায় ভালো নম্বর পেলেই বড় মানুষ হবে।',
      en: 'Dear Mom, we all dream of our child growing up to achieve wonderful things. Yet we often assume that memorizing textbooks and scoring high exam marks alone makes a great person.',
    },
    {
      bn: 'সত্যি কথা হলো, যে শিশু শুধু চার দেয়ালের ভেতর বইয়ের পাতায় আটকে থাকে, সে বাইরের বিশাল পৃথিবীটা দেখতে পায় না। আর যে শিশু পৃথিবী দেখেনি, সে কখনো বড় স্বপ্নও দেখতে পারে না।',
      en: 'The truth is, a child kept confined inside four walls and textbook pages never gets to see the vast real world—and a child who has never seen the world cannot dream big.',
    },
    {
      bn: 'পৃথিবীর বড় বড় বিশ্ববিদ্যালয়—যেমন এমআইটি (MIT)—বা বড় বিজ্ঞানী, ডাক্তার, ইঞ্জিনিয়ার বা সফল মানুষ হওয়ার স্বপ্ন তখনই জন্মায়, যখন শিশু ছোটবেলা থেকে হাতে-কলমে জিনিস দেখে, প্রশ্ন করে এবং নিজে চেষ্টা করতে শেখে।',
      en: 'Dreams of reaching top universities like MIT—or becoming a great scientist, doctor, engineer, or leader—begin in early childhood when a child touches real things, asks questions, and tries tasks herself.',
    },
    {
      bn: 'আমাদের চেনা গণ্ডি বা আরামের জায়গা থেকে একটু বের হয়ে সন্তানকে যদি বাস্তব জগতের সাথে মিশতে দিই, তাহলে ওর ভেতরের আসল মেধা জেগে উঠবে।',
      en: 'When we step slightly outside our familiar comfort zone and let our child engage with real life, her true natural intelligence awakens.',
    },
  ],
  rule6040Title: {
    bn: '৬০/৪০ শেখার নিয়ম',
    en: 'The 60/40 Learning Rule',
  },
  rule6040Subtitle: {
    bn: 'শিশু কীভাবে সবচেয়ে ভালো শেখে?',
    en: 'How does a child learn best?',
  },
  rule6040Primary: {
    percent: 60,
    label: { bn: '৬০%', en: '60%' },
    title: { bn: '৬০% বাস্তব অভিজ্ঞতা থেকে শেখা', en: '60% Learning from Real-Life Experience' },
    desc: {
      bn: 'হাতে-কলমে কাজ করা, খেলা, রান্নাঘর দেখা, বাজার দেখা, গাছপালা ছুঁয়ে দেখা এবং নিজের কাজ নিজে করা।',
      en: 'Hands-on tasks, play, watching the kitchen, visiting markets, touching plants, and doing her own small chores.',
    },
  },
  rule6040Secondary: {
    percent: 40,
    label: { bn: '৪০%', en: '40%' },
    title: { bn: '৪০% বই ও পড়াশোনা থেকে শেখা', en: '40% Learning from Books & Study' },
    desc: {
      bn: 'ছবির বই দেখা, গল্প শোনা, বর্ণ-সংখ্যা চেনা এবং আনন্দের সাথে খাতা-কলমে অনুশীলন করা।',
      en: 'Exploring picture books, listening to stories, recognizing letters/numbers, and joyful drawing practice.',
    },
  },
  rule7030Title: {
    bn: '৭০/৩০ বিকাশের নিয়ম',
    en: 'The 70/30 Development Rule',
  },
  rule7030Subtitle: {
    bn: 'শিশুর বড় হওয়ার আসল ভিত্তি কী?',
    en: "What is the real foundation of a child's growth?",
  },
  rule7030Primary: {
    percent: 70,
    label: { bn: '৭০%', en: '70%' },
    title: { bn: '৭০% জীবনের মূল দক্ষতা ও চরিত্র', en: '70% Core Life Skills & Character' },
    desc: {
      bn: 'সততা, ধৈর্য, নিজের কাজ নিজে করার সাহস, সবার সাথে ভালো ব্যবহার ও বিপদে মাথা ঠান্ডা রাখা।',
      en: 'Honesty, patience, courage to try tasks independently, kindness to others, and staying calm in difficulties.',
    },
  },
  rule7030Secondary: {
    percent: 30,
    label: { bn: '৩০%', en: '30%' },
    title: { bn: '৩০% ভবিষ্যৎ পেশা ও বড় স্বপ্ন', en: '30% Future Professions & Big Dreams' },
    desc: {
      bn: 'মানুষ কী কী কাজ করে (যেমন—ডাক্তার, বিজ্ঞানী, কৃষক, নির্মাতা) তা চেনা ও বড় স্বপ্ন দেখতে শেখা।',
      en: 'Learning what people do—doctors, scientists, farmers, builders—and daring to dream big.',
    },
  },
  roleTitle: {
    bn: 'মা-বাবার ভূমিকা — কীভাবে শেখাবেন?',
    en: 'Role of Parents — How Should You Teach?',
  },
  guideVsTeacherTitle: {
    bn: 'আপনি শিক্ষক নন, আপনি পথপ্রদর্শক',
    en: 'You Are Not a Strict Teacher—You Are a Guide',
  },
  guideVsTeacherBody: {
    bn: 'শিশুর কাছে আপনি কোনো কড়া শিক্ষিকা বা শাসক নন—আপনি হলেন ওর সবচেয়ে কাছের পথপ্রদর্শক (Guide)। কড়া শাসনে বাচ্চা ভয়ে মুখস্থ করে, কিন্তু ভালোবাসা আর সঠিক পথ দেখালে সে নিজে থেকেই শিখতে চায়।',
    en: 'To your child, you are not a strict examiner or ruler—you are her closest Guide. Strict fear forces rote memorization, while warmth and patient guidance make her eager to learn on her own.',
  },
  twoKidsTitle: {
    bn: 'একটি ছোট্ট গল্প: দুই শিশুর পার্থক্য',
    en: 'A Short Story: The Difference Between Two Children',
  },
  childA: {
    title: {
      bn: '🌟 শিশু ক (যাকে ছোট ছোট সুযোগ দেওয়া হয়)',
      en: '🌟 Child A (Given Small Opportunities)',
    },
    story: {
      bn: 'রাহাত বয়সে ৪ বছর। মা ওকে রোজ সকালে জিজ্ঞেস করেন—"বাবু, আজ তুমি নীল জামা পরবে নাকি হলুদ জামা?" ও নিজের হাতে জুতা গুছিয়ে রাখে, পানি ঢেলে খায়। মাঝে মাঝে পানি পড়ে যায়, মা রাগ না করে মুছে দিয়ে বলেন, "আরেকবার চেষ্টা করো সোনা।"',
      en: 'Rahat is 4 years old. Every morning Mom asks: "Sweetheart, blue shirt or yellow shirt today?" He puts his shoes away and pours his own water. Sometimes it spills—Mom wipes it calmly and says, "Try again, dear."',
    },
    result: {
      bn: 'ফলাফল: ৬ মাস পর রাহাত আত্মবিশ্বাসী, নিজের সিদ্ধান্ত নিজে নিতে পারে এবং নতুন কোনো কাজ দেখলে ভয় পায় না।',
      en: 'Result: After 6 months, Rahat is confident, makes small decisions independently, and is unafraid of new tasks.',
    },
  },
  childB: {
    title: {
      bn: '🌧️ শিশু খ (যার সব কাজ বড়রা করে দেন)',
      en: '🌧️ Child B (Everything Done by Adults)',
    },
    story: {
      bn: 'তানিমের বয়সও ৪ বছর। মায়ের ভয়, ও নিজে করতে গেলে ঘর নোংরা করবে বা সময় নষ্ট হবে। তাই মা নিজেই ওকে ভাত খাইয়ে দেন, জামা পরিয়ে দেন, খেলনা গুছিয়ে দেন। ভুল করার কোনো সুযোগই ও পায় না।',
      en: 'Tanim is also 4. His mom worries he will make a mess or take too long, so she feeds him, dresses him, and packs all his toys. He never gets a chance to try or make a mistake.',
    },
    result: {
      bn: 'ফলাফল: তানিম বড় হওয়ার সাথে সাথে সব কাজে অন্যের ওপর নির্ভর করে, ছোটখাটো সমস্যায় কেঁদে ফেলে আর নিজে চেষ্টা করতে চায় না।',
      en: 'Result: As Tanim grows, he relies on others for everything, cries over minor setbacks, and avoids trying on his own.',
    },
  },
  goldenRulesTitle: {
    bn: 'সোনালি নিয়মাবলি (যা করবেন ও যা করবেন না)',
    en: "Golden Rules (What to Do & What Not to Do)",
  },
  goldenRules: [
    {
      id: 'gr1',
      number: 1,
      situation: { bn: '১. বাচ্চা কোনো কাজে আটকে গেলে', en: '1. When the child gets stuck on a task' },
      doAction: {
        bn: 'সাথে সাথে করে না দিয়ে একটু সময় দিন। বলুন, "আরেকবার ভেবে দেখো তো, কীভাবে করলে সহজ হবে?"',
        en: 'Pause before helping. Say: "Think once more—how might it work more easily?"',
      },
      dontAction: {
        bn: '"দাও, তোমার দ্বারা হবে না"—বলে ওর হাত থেকে জিনিস কেড়ে নিয়ে নিজে করে দেওয়া।',
        en: 'Saying "Give it to me, you cannot do it" and snatching the task away.',
      },
    },
    {
      id: 'gr2',
      number: 2,
      situation: { bn: '২. বাচ্চা অনেক প্রশ্ন করলে', en: '2. When the child asks many questions' },
      doAction: {
        bn: 'মন দিয়ে শুনুন। উত্তর জানা থাকলে সহজ করে বলুন, আর না জানলে বলুন—"চলো দুজন মিলে খুঁজে দেখি।"',
        en: 'Listen warmly. Explain simply if you know, or say: "Let us find out together!"',
      },
      dontAction: {
        bn: '"এত কথা বলো কেন? চুপ থাকো"—বলে ওর কৌতূহল থামিয়ে দেওয়া।',
        en: 'Saying "Why do you talk so much? Be quiet" and shutting down curiosity.',
      },
    },
    {
      id: 'gr3',
      number: 3,
      situation: { bn: '৩. বাচ্চা ভুল করলে (যেমন: পানি পড়ে গেলে)', en: '3. When she makes a mistake (like spilling water)' },
      doAction: {
        bn: 'শান্ত থাকুন। হাতে একটা কাপড় দিয়ে বলুন—"কোনো সমস্যা নেই, চলো দুজন মিলে মুছে ফেলি।"',
        en: 'Stay calm. Hand over a cloth and say: "No problem, let us wipe it up together."',
      },
      dontAction: {
        bn: 'চিৎকার করা, বকা দেওয়া বা হাত-পায়ে মারা। এতে বাচ্চা নতুন কাজ করতে ভয় পাবে।',
        en: 'Shouting, scolding, or hitting—this makes a child terrified of trying anything new.',
      },
    },
    {
      id: 'gr4',
      number: 4,
      situation: { bn: '৪. পাজল বা খেলা মেলানোর সময়', en: '4. When solving a puzzle or game' },
      doAction: {
        bn: 'পাশে বসে দেখুন ও কীভাবে চিন্তা করছে। খুব দরকার হলে ছোট্ট একটা ইশারা দিন।',
        en: 'Watch patiently how she thinks. Give only a tiny hint if truly needed.',
      },
      dontAction: {
        bn: 'মাঝখান থেকে নিজে সব পাজল মিলিয়ে দেওয়া। এতে বাচ্চার নিজের আনন্দ নষ্ট হয়।',
        en: 'Finishing the puzzle yourself—this steals her joy of discovery.',
      },
    },
    {
      id: 'gr5',
      number: 5,
      situation: { bn: '৫. কোনো কিছু বেছে নেওয়ার সময়', en: '5. When making everyday choices' },
      doAction: {
        bn: 'দুটি সহজ পছন্দ দিন। যেমন—"তুমি কলা খাবে নাকি ডিম?" বা "লাল রঙ নেবে নাকি নীল?"',
        en: 'Offer two simple choices: "Banana or egg?" or "Red colour or blue?"',
      },
      dontAction: {
        bn: 'সবসময় নিজের পছন্দ ওর ওপর চাপিয়ে দেওয়া।',
        en: 'Forcing your choice every single time.',
      },
    },
    {
      id: 'gr6',
      number: 6,
      situation: { bn: '৬. প্রশংসা করার নিয়ম', en: '6. How to praise' },
      doAction: {
        bn: 'কাজের চেষ্টার প্রশংসা করুন। বলুন—"তুমি খুব সুন্দর মন দিয়ে এঁকেছ!" বা "তুমি অনেক চেষ্টা করেছ!"',
        en: 'Praise the effort: "You focused so nicely on drawing!" or "You kept trying!"',
      },
      dontAction: {
        bn: 'শুধু বলা "তুমি সবচেয়ে সেরা" বা অন্য বাচ্চার সাথে তুলনা করা ("ও পারল, তুমি পারলে না কেন?")।',
        en: 'Comparing her with cousins or neighbours ("Why couldn’t you do what they did?").',
      },
    },
  ] as GoldenRuleRow[],
  resistanceTitle: {
    bn: 'বাচ্চা জেদ করলে বা না চাইলে কী করবেন?',
    en: 'What If Your Child Refuses or Gets Stubborn?',
  },
  resistanceMantra: {
    bn: 'মূল মন্ত্র: শিশুকে জোর করে বদলানোর চেষ্টা করবেন না; বরং কাজ বা খেলাটি বদলে দিন।',
    en: 'Core Principle: Never try to force the child to change; change the activity instead.',
  },
  resistanceScenarios: [
    {
      id: 'rs1',
      trigger: {
        bn: 'যখন বলে: "আমি এখন এটা করব না / পড়ব না!"',
        en: 'When she says: "I will not do this / study now!"',
      },
      guidance: {
        bn: 'তখনই জোর করবেন না। খেলা বা কাজের ধরন পাল্টে ফেলুন।',
        en: 'Do not force her. Switch the format into something playful.',
      },
      exactScript: {
        bn: 'আপনি যা বলবেন: "ঠিক আছে সোনা, এখন বই লাগবে না। চলো আমরা রান্নাঘরে গিয়ে আলু আর পেঁয়াজ গুনে আসি—দেখি কয়টা আছে!"',
        en: 'What to say: "Okay dear, no book right now. Let us go to the kitchen and count how many potatoes and onions we have!"',
      },
    },
    {
      id: 'rs2',
      trigger: {
        bn: 'যখন খেলনা গোছাতে চায় না বা জেদ করে',
        en: 'When she refuses to put toys away',
      },
      guidance: {
        bn: 'কাজটিকে মজার খেলায় পরিণত করুন।',
        en: 'Turn the chore into a joyful race or game.',
      },
      exactScript: {
        bn: 'আপনি যা বলবেন: "দেখি তো কে বেশি দ্রুত খেলনাগুলো ঝুড়িতে রাখতে পারে—তুমি নাকি মা? এক, দুই, তিন... শুরু!"',
        en: 'What to say: "Let us see who can put the toys into the basket faster—you or Mom! One, two, three... go!"',
      },
    },
    {
      id: 'rs3',
      trigger: {
        bn: 'যখন কান্নাকাটি করে বা বিরক্ত হয়',
        en: 'When she cries or gets frustrated',
      },
      guidance: {
        bn: 'আগে জড়িয়ে ধরে শান্ত হতে দিন, তারপর কথা বলুন।',
        en: 'Hold her gently until she calms down, then talk softly.',
      },
      exactScript: {
        bn: 'আপনি যা বলবেন: "আমি বুঝতে পারছি তোমার এখন মন খারাপ লাগছে। একটু আমার কাছে বসে পানি খাও, তারপর আমরা মজার কিছু করব।"',
        en: 'What to say: "I see you feel upset right now. Sit close, sip some water, and then we will do something nice together."',
      },
    },
  ] as ResistanceScenario[],
  fiveCoreRulesTitle: {
    bn: '📌 মনে রাখার ৫টি মূল নিয়ম',
    en: '📌 5 Core Rules to Remember',
  },
  fiveCoreRules: [
    {
      bn: '১. তুলনা নয়: আপনার সন্তান অন্য কারো মতো নয়, ও নিজের মতো করে বেড়ে উঠবে।',
      en: '1. No comparisons: Your child is unique and will grow at her own beautiful pace.',
    },
    {
      bn: '২. মুখস্থ নয়: ৪–৬ বছর বয়সে মুখস্থ বিদ্যার চেয়ে দেখে, ছুঁয়ে ও খেলে শেখা ১০০ গুণ বেশি কার্যকর।',
      en: '2. No rote cramming: At ages 4–6, learning by seeing, touching, and playing works 100× better.',
    },
    {
      bn: '৩. ভুলের স্বাধীনতা: ভুল না করলে কোনো মানুষই নতুন কিছু শিখতে পারে না।',
      en: '3. Freedom to make mistakes: Nobody learns anything new without small mistakes.',
    },
    {
      bn: '৪. প্রতিদিন ১৫–২০ মিনিট: সারাদিন না পারলেও অন্তত ১৫–২০ মিনিট ফোন রেখে সন্তানের সাথে খেলা করুন।',
      en: '4. 15–20 minutes daily: Even on busy days, put your phone aside for 15–20 minutes of pure play.',
    },
    {
      bn: '৫. মায়ের হাসিই আসল শক্তি: আপনি শান্ত ও হাসিখুশি থাকলে সন্তানও আনন্দের সাথে শিখবে।',
      en: "5. A mother's smile is the real power: When you feel calm and happy, your child learns with joy.",
    },
  ],
} as const;

export const SIX_MONTH_PLAN = {
  title: {
    bn: '৬ মাসের পুরো পরিকল্পনা (এক নজরে রোডম্যাপ)',
    en: 'Complete 6-Month Plan (Roadmap at a Glance)',
  },
  intro: {
    bn: 'এই পুরো বইটি ৬ মাসের একটি সহজ যাত্রা। কোনো তাড়াহুড়ো নেই। প্রতিটি মাসে আপনার সন্তান ধাপে ধাপে নতুন দক্ষতা অর্জন করবে।',
    en: 'This entire book is a calm 6-month journey with no rush. Month by month, your child builds new life skills naturally.',
  },
  stepsTitle: {
    bn: '১ম থেকে ৬ষ্ঠ মাসের ধাপ',
    en: 'Steps from Month 1 to Month 6',
  },
  months: [
    {
      monthNumber: 1,
      monthLabel: { bn: '১ম মাস', en: 'Month 1' },
      title: { bn: 'মূল ভিত্তি তৈরি করা', en: 'Building the Foundation' },
      goal: {
        bn: 'মূল লক্ষ্য: নিজের ছোট ছোট কাজ নিজে করা, কৌতূহল জাগানো ও ভয় কাটানো।',
        en: 'Goal: Independence in small daily tasks, sparking curiosity, and removing fear.',
      },
      detail: {
        bn: 'এই মাসে আমরা কোনো পড়ার চাপ দেব না, শুধু দৈনন্দিন কাজের মাধ্যমে শেখার অভ্যাস গড়ব।',
        en: 'Zero study pressure—we build joyful learning habits through everyday routines.',
      },
      isCurrent: true,
    },
    {
      monthNumber: 2,
      monthLabel: { bn: '২য় মাস', en: 'Month 2' },
      title: { bn: 'চিন্তাশক্তি ও বুদ্ধি বাড়ানো', en: 'Thinking & Curiosity' },
      goal: {
        bn: 'মূল লক্ষ্য: কেন হলো, কীভাবে হলো—এমন প্রশ্ন করতে শেখা এবং ছোট সমস্যার সমাধান খোঁজা।',
        en: 'Goal: Asking "why" and "how" questions and solving small everyday puzzles.',
      },
      detail: {
        bn: 'গল্প, পাজল ও দৈনন্দিন পর্যবেক্ষণের মাধ্যমে মগজকে শাণিত করা।',
        en: 'Sharpening thinking through stories, puzzles, and daily observation.',
      },
    },
    {
      monthNumber: 3,
      monthLabel: { bn: '৩য় মাস', en: 'Month 3' },
      title: { bn: 'সৃজনশীলতা ও নিজের হাতে গড়া', en: 'Creativity & Making' },
      goal: {
        bn: 'মূল লক্ষ্য: কোনো কিছুর ভয় না পেয়ে নিজের কল্পনা দিয়ে ছবি আঁকা, কাগজ বা মাটি দিয়ে জিনিস বানানো।',
        en: 'Goal: Drawing from imagination and crafting with paper or clay without fear.',
      },
      detail: {
        bn: 'মুখস্থ নকল করার বদলে নিজে নতুন কিছু তৈরি করার আনন্দ শেখা।',
        en: 'Enjoying making original things instead of copying mechanically.',
      },
    },
    {
      monthNumber: 4,
      monthLabel: { bn: '৪র্থ মাস', en: 'Month 4' },
      title: { bn: 'বাস্তব পৃথিবীর সাথে পরিচয়', en: 'Connecting With the Real World' },
      goal: {
        bn: 'মূল লক্ষ্য: ঘরের বাইরে মানুষের কাজ, প্রকৃতি, বাজার, গাছপালা ও পশুপাখি কাছ থেকে দেখা।',
        en: 'Goal: Observing workers, markets, nature, plants, and animals outdoors.',
      },
      detail: {
        bn: 'বইয়ের ছবি নয়, আসল দুনিয়ার সাথে বন্ধুত্ব তৈরি করা।',
        en: 'Making friends with the real world beyond textbook illustrations.',
      },
    },
    {
      monthNumber: 5,
      monthLabel: { bn: '৫ম মাস', en: 'Month 5' },
      title: { bn: 'কথা বলা ও ব্যক্তিত্ব গঠন', en: 'Speaking & Character' },
      goal: {
        bn: 'মূল লক্ষ্য: ভয় ছাড়া নিজের মনের কথা গুছিয়ে বলা, অন্যের কথা শোনা ও ভদ্র আচরণ চর্চা।',
        en: 'Goal: Expressing thoughts clearly, listening to others, and polite manners.',
      },
      detail: {
        bn: 'মানুষের সামনে আত্মবিশ্বাসের সাথে কথা বলার সাহস তৈরি করা।',
        en: 'Building courage to speak confidently in front of family and guests.',
      },
    },
    {
      monthNumber: 6,
      monthLabel: { bn: '৬ষ্ঠ মাস', en: 'Month 6' },
      title: { bn: 'নিজে নিজে একটি প্রজেক্ট করা', en: 'Creating Her Own Project' },
      goal: {
        bn: 'মূল লক্ষ্য: গত ৫ মাসে যা শিখেছে, তা দিয়ে নিজে ভেবে একটি ছোট কাজ বা প্রজেক্ট সম্পূর্ণ করা।',
        en: 'Goal: Completing a small self-led project using skills learned in Months 1–5.',
      },
      detail: {
        bn: 'যেমন: নিজের হাতে একটি ছোট বাগান বানানো বা নিজের গল্পের বই তৈরি করা।',
        en: 'For example: growing a tiny home plant corner or making her own picture storybook.',
      },
    },
  ] as SixMonthStep[],
  permanentAreasTitle: {
    bn: '৮টি স্থায়ী শেখার ক্ষেত্র',
    en: '8 Permanent Learning Areas',
  },
  permanentAreasIntro: {
    bn: 'প্রতিটি মাসেই আমরা শিশুকে একই ধরনের কাজ দিয়ে বিরক্ত করব না। বরং পুরো মাসজুড়ে ৮টি স্থায়ী শেখার ক্ষেত্র ঘুরে ঘুরে চর্চা করানো হবে—যাতে ওর শরীর, মন, বুদ্ধি, কথা ও চরিত্র একসাথে সুন্দরভাবে বেড়ে ওঠে।',
    en: 'Each month rotates gently across 8 permanent learning areas so body, mind, language, creativity, and character grow together harmoniously.',
  },
  permanentAreas: [
    { emoji: '🎒', label: { bn: '১. আমার জিনিস, আমার কাজ', en: '1. My Things, My Tasks' } },
    { emoji: '🧠', label: { bn: '২. মগজের ব্যায়াম', en: '2. Mind Gym' } },
    { emoji: '🗣️', label: { bn: '৩. কথা ও ভাষা', en: '3. Voice & Words' } },
    { emoji: '❤️', label: { bn: '৪. মন ও চরিত্র গঠন', en: '4. Heart & Character' } },
    { emoji: '🎨', label: { bn: '৫. সৃজনশীলতার জগৎ', en: '5. Maker Studio' } },
    { emoji: '🌿', label: { bn: '৬. প্রকৃতি ও শরীরচর্চা', en: '6. Nature & Body' } },
    { emoji: '🍲', label: { bn: '৭. রান্নাঘর ও স্বাস্থ্য', en: '7. Kitchen & Health' } },
    { emoji: '🌍', label: { bn: '৮. বাস্তব জগতের অভিযাত্রী', en: '8. Real World Explorer' } },
  ],
} as const;
