/**
 * CENTRAL IMAGE CONFIGURATION
 * ---------------------------------------------------------------------------
 * Replace any image path below with your own image URL (e.g., "/images/my-photo.jpg")
 * when you are ready to customize the photos/illustrations.
 * Keeping all image paths in this single file makes swapping images effortless.
 */

export interface AppImageAsset {
  src: string;
  altBn: string;
  altEn: string;
}

export const APP_IMAGES = {
  heroMotherChild: {
    src: '/src/assets/images/hero_mother_child_1795284605561.jpg',
    altBn: 'মা এবং ছোট্ট মেয়ে তাবিয়া একসাথে ঘরে বসে গল্পের বই ও রঙিন ব্লক নিয়ে খেলছে',
    altEn: 'A Bangladeshi mother and her 4-year-old daughter Tabia reading a picture book and playing with wooden blocks together at home',
  },
  morningRoutine: {
    src: '/src/assets/images/morning_routine_home_1795284607369.jpg',
    altBn: 'ছোট্ট তাবিয়া সকালবেলা নিজের ছোট ব্যাগ ও পানির বোতল নিজেই গুছিয়ে রাখছে',
    altEn: 'Young Tabia neatly packing her small backpack and placing her water bottle and shoes in order in the morning',
  },
  mindGym: {
    src: '/src/assets/images/mind_gym_play_1795284607335.jpg',
    altBn: 'কাঠের ট্রেতে রাখা পাঁচটি পরিচিত জিনিস: চামচ, পেন্সিল, খেলনা গাড়ি, বল এবং ছোট বই',
    altEn: 'Five everyday items on a wooden tray for memory play: spoon, pencil, toy car, ball, and small picture book',
  },
  languageStory: {
    src: '/src/assets/images/cluster3_language_story_1795331909142.jpg',
    altBn: 'সন্ধ্যায় মা ও তাবিয়া একসাথে বসে প্রজাপতির ছবির বই দেখছে আর গল্প বলছে',
    altEn: 'Mother and Tabia sitting together in the evening reading a butterfly picture book and talking joyfully',
  },
  heartFeelings: {
    src: '/src/assets/images/cluster4_heart_feelings_1795331909018.jpg',
    altBn: 'মা আদর করে তাবিয়ার পাশে বসে দেয়ালের অনুভূতির চার্ট দেখিয়ে মনের কথা বুঝছেন',
    altEn: 'A gentle mother comforting her daughter beside a wall feelings chart showing emotions',
  },
  creativeArt: {
    src: '/src/assets/images/cluster5_creative_art_1795331908835.jpg',
    altBn: 'তাবিয়া মেঝেতে পাটি বিছিয়ে মোমরং দিয়ে আনন্দের সাথে চাঁদের দেশে বাড়ির ছবি আঁকছে',
    altEn: 'Tabia lying happily on a woven mat drawing a house on the moon and a bird with wax crayons',
  },
  naturePark: {
    src: '/src/assets/images/nature_park_bangladesh_1795284608388.jpg',
    altBn: 'মা ও মেয়ে একসাথে বাগানে দাঁড়িয়ে গাছের পাতা, গাঁদা ফুল, পাখি ও প্রজাপতি দেখছে',
    altEn: 'A mother and daughter observing leaves, marigold flowers, a bird, and a butterfly together in a garden',
  },
  kitchenHealth: {
    src: '/src/assets/images/cluster7_kitchen_health_1795331909525.jpg',
    altBn: 'রান্নাঘরের বেসিনে মা ও তাবিয়া সাবান দিয়ে হাত ধুচ্ছে এবং পাশে তাজা ফল রাখা আছে',
    altEn: 'Mother and daughter washing hands with soap in a bright home kitchen beside fresh mangoes and bananas',
  },
  vegetableMarket: {
    src: '/src/assets/images/vegetable_market_bangladesh_1795284608631.jpg',
    altBn: 'সবজির বাজারে মা ও তাবিয়া টমেটো, লাউ ও গাজর দেখছে এবং দোকানদার হাসিমুখে কথা বলছেন',
    altEn: 'Mother and Tabia visiting a friendly vegetable market stall looking at fresh tomatoes, gourds, and carrots',
  },
} as const satisfies Record<string, AppImageAsset>;

export type AppImageKey = keyof typeof APP_IMAGES;
