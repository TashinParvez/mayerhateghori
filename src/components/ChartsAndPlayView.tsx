import type { Language } from '../types';
import {
  FeelingsChartGuide,
  KimsGameGuide,
  MarketObservationGuide,
  MorningChartGuide,
  NatureWalkGuide,
  ThreeSentenceStoryGuide,
} from './PlayGuides';

interface ChartsAndPlayViewProps {
  lang: Language;
  onOpenChapter: (clusterId: string) => void;
}

export function ChartsAndPlayView({ lang, onOpenChapter }: ChartsAndPlayViewProps) {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-2.5">
        <p className="text-sm font-bold text-teal-800">
          {lang === 'bn'
            ? 'খেলা ও চার্ট · নিজে শিখুন, তারপর সন্তানের সাথে খেলুন'
            : 'Charts & Play · Learn Here, Play Together in Real Life'}
        </p>
        <h1 className="text-2xl font-bold text-stone-900 sm:text-3xl">
          {lang === 'bn'
            ? 'খেলার নিয়ম ও দেয়ালে টাঙানোর চার্ট'
            : 'Home Play Guides & Printable Wall Charts'}
        </h1>
        <p className="text-base leading-relaxed text-stone-700">
          {lang === 'bn'
            ? 'নিচে ১ম মাসের সব মজার খেলা ও চার্ট একসাথে দেওয়া আছে। প্রতিটি খেলার ওপরে লেখা আছে সেটি কোন অধ্যায় ও ক্লাস্টারের অংশ—চাইলে এক ট্যাপে পুরো অধ্যায়টিও পড়ে নিতে পারবেন।'
            : 'All Month 1 play demonstrations and printable wall charts are visible right below. Each one shows its chapter and cluster reference so you can jump straight to the full lesson anytime.'}
        </p>
      </section>

      {/* All Charts & Games directly visible by scrolling (No hidden tabs or accordions) */}
      <MorningChartGuide lang={lang} showReference onOpenChapter={onOpenChapter} />
      <KimsGameGuide lang={lang} showReference onOpenChapter={onOpenChapter} />
      <MarketObservationGuide lang={lang} showReference onOpenChapter={onOpenChapter} />
      <ThreeSentenceStoryGuide lang={lang} showReference onOpenChapter={onOpenChapter} />
      <FeelingsChartGuide lang={lang} showReference onOpenChapter={onOpenChapter} />
      <NatureWalkGuide lang={lang} showReference onOpenChapter={onOpenChapter} />
    </div>
  );
}
