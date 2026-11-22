import { ArrowRight, BookOpen, CheckCircle2, HeartHandshake } from 'lucide-react';
import { SIX_MONTH_PLAN, UI_COPY } from '../data/month1Content';
import type { Language } from '../types';
import { SafeImage } from './SafeImage';

interface HomeViewProps {
  lang: Language;
  onOpenRoadmap: () => void;
  onOpenGuide: () => void;
}

export function HomeView({ lang, onOpenRoadmap, onOpenGuide }: HomeViewProps) {
  const m1 = UI_COPY.month1Card;

  return (
    <div className="space-y-8">
      {/* VIEW 1: Large Welcoming Month 1 Card */}
      <section className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between space-y-5 lg:col-span-6">
            <div className="space-y-3">
              <p className="text-sm font-bold text-teal-800">{m1.kicker[lang]}</p>
              <h1 className="text-2xl font-bold leading-snug text-stone-900 sm:text-4xl">
                {m1.title[lang]}
              </h1>
              <p className="text-base leading-relaxed text-stone-700 sm:text-lg">
                {m1.subtitle[lang]}
              </p>
            </div>

            {/* Highlighted 5 Key Points (Guideline 7.3) */}
            <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-4 sm:p-5 space-y-2.5">
              <h2 className="text-base font-bold text-teal-950">
                {m1.highlightsTitle[lang]}
              </h2>
              <ul className="space-y-2">
                {m1.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-base font-semibold text-stone-900">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prominent Primary Button -> Opens View 2 (The Cluster Roadmap) */}
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenRoadmap}
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-2xl bg-teal-700 px-6 py-3.5 text-lg font-bold text-white shadow-sm transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <BookOpen className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{m1.primaryBtn[lang]}</span>
                <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SafeImage
              imageKey="heroMotherChild"
              lang={lang}
              aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full"
              className="border border-stone-200"
            />
          </div>
        </div>
      </section>

      {/* Secondary Distinct Card/Button: Parents' Guide for M1 */}
      <section aria-label={m1.secondaryCardTitle[lang]}>
        <button
          type="button"
          onClick={onOpenGuide}
          className="group flex w-full flex-col justify-between gap-4 rounded-3xl border-2 border-amber-300 bg-amber-50/70 p-5 text-left transition-colors hover:border-amber-400 hover:bg-amber-50 sm:flex-row sm:items-center sm:p-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-900">
              <HeartHandshake className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
                {m1.secondaryCardTitle[lang]}
              </h2>
              <p className="text-base leading-relaxed text-stone-700">
                {m1.secondaryCardDesc[lang]}
              </p>
            </div>
          </div>
          <span className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-base font-bold text-amber-950 border border-amber-200 group-hover:bg-amber-100">
            <span>{lang === 'bn' ? 'গাইড পড়ুন' : 'Open Guide'}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
      </section>

      {/* 6-Month Overview Roadmap Strip */}
      <section aria-labelledby="home-six-month-heading" className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-5">
        <div className="space-y-1.5">
          <h2 id="home-six-month-heading" className="text-xl font-bold text-stone-900 sm:text-2xl">
            {SIX_MONTH_PLAN.title[lang]}
          </h2>
          <p className="text-base leading-relaxed text-stone-700">
            {SIX_MONTH_PLAN.intro[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SIX_MONTH_PLAN.months.map((m) => (
            <div
              key={m.monthNumber}
              className={`flex flex-col justify-between rounded-2xl border p-4 space-y-2 ${
                m.isCurrent
                  ? 'border-teal-600 bg-teal-50/70'
                  : 'border-stone-200 bg-stone-50/50'
              }`}
            >
              <div className="space-y-1.5">
                <p className={`text-sm font-bold ${m.isCurrent ? 'text-teal-800' : 'text-stone-500'}`}>
                  {m.monthLabel[lang]}
                  {m.isCurrent
                    ? lang === 'bn'
                      ? ' · এখন চলছে'
                      : ' · Current Month'
                    : ''}
                </p>
                <h3 className="text-lg font-bold text-stone-900">{m.title[lang]}</h3>
                <p className="text-sm leading-relaxed text-stone-700">{m.goal[lang]}</p>
              </div>
              {m.isCurrent && (
                <button
                  type="button"
                  onClick={onOpenRoadmap}
                  className="mt-2 inline-flex min-h-[40px] items-center gap-1.5 text-sm font-bold text-teal-800 underline-offset-4 hover:underline"
                >
                  <span>{lang === 'bn' ? '১ম মাসের যাত্রাপথ খুলুন' : 'Open Month 1 Path'}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
