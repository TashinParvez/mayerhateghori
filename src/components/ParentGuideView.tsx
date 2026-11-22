import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  XCircle,
} from 'lucide-react';
import {
  DAILY_ROUTINE_STEPS,
  PARENT_GUIDE_CONTENT,
  SIX_MONTH_PLAN,
} from '../data/month1Content';
import type { Language } from '../types';
import { computeRatioWidths } from '../utils/appLogic';

interface ParentGuideViewProps {
  lang: Language;
  onOpenMonth1Roadmap: () => void;
}

export function ParentGuideView({
  lang,
  onOpenMonth1Roadmap,
}: ParentGuideViewProps) {
  const ratio6040 = computeRatioWidths(60);
  const ratio7030 = computeRatioWidths(70);

  return (
    <div className="space-y-8">
      {/* 1. Why This Book Matters (MIT Letter + 60/40 + 70/30 Rules) */}
      <section
        aria-labelledby="why-urgent-heading"
        className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-8 space-y-6"
      >
        <div className="space-y-2">
          <p className="text-sm font-bold text-teal-800">
            {lang === 'bn' ? 'মা-বাবার জন্য বিশেষ কথা' : 'A Special Note for Moms & Parents'}
          </p>
          <h1 id="why-urgent-heading" className="text-2xl font-bold text-stone-900 sm:text-3xl">
            {PARENT_GUIDE_CONTENT.whyUrgentTitle[lang]}
          </h1>
        </div>

        <div className="space-y-3 rounded-2xl border border-amber-200 bg-amber-50/50 p-5 sm:p-6">
          {PARENT_GUIDE_CONTENT.whyUrgentParagraphs.map((para, i) => (
            <p
              key={i}
              className={`text-base leading-relaxed sm:text-lg ${
                i === 2 ? 'font-bold text-teal-950' : 'text-stone-800'
              }`}
            >
              {para[lang]}
            </p>
          ))}
        </div>

        {/* 60/40 Learning Rule & 70/30 Development Rule */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 60/40 Card */}
          <article className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                {PARENT_GUIDE_CONTENT.rule6040Title[lang]}
              </h2>
              <p className="text-sm font-semibold text-stone-600">
                {PARENT_GUIDE_CONTENT.rule6040Subtitle[lang]}
              </p>
            </div>

            {/* Visual 60/40 Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-base font-bold tabular-nums">
                <span className="text-teal-800">{PARENT_GUIDE_CONTENT.rule6040Primary.label[lang]}</span>
                <span className="text-amber-800">{PARENT_GUIDE_CONTENT.rule6040Secondary.label[lang]}</span>
              </div>
              <div
                className="flex h-4 w-full overflow-hidden rounded-full bg-stone-200"
                role="img"
                aria-label={`${PARENT_GUIDE_CONTENT.rule6040Primary.label[lang]} / ${PARENT_GUIDE_CONTENT.rule6040Secondary.label[lang]}`}
              >
                <div
                  style={{ width: `${ratio6040.primaryWidth}%` }}
                  className="bg-teal-700"
                />
                <div
                  style={{ width: `${ratio6040.secondaryWidth}%` }}
                  className="bg-amber-500"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-teal-200 bg-white p-4">
                <h3 className="text-base font-bold text-teal-900">
                  {PARENT_GUIDE_CONTENT.rule6040Primary.title[lang]}
                </h3>
                <p className="mt-1 text-base text-stone-700">
                  {PARENT_GUIDE_CONTENT.rule6040Primary.desc[lang]}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-white p-4">
                <h3 className="text-base font-bold text-amber-900">
                  {PARENT_GUIDE_CONTENT.rule6040Secondary.title[lang]}
                </h3>
                <p className="mt-1 text-base text-stone-700">
                  {PARENT_GUIDE_CONTENT.rule6040Secondary.desc[lang]}
                </p>
              </div>
            </div>
          </article>

          {/* 70/30 Card */}
          <article className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                {PARENT_GUIDE_CONTENT.rule7030Title[lang]}
              </h2>
              <p className="text-sm font-semibold text-stone-600">
                {PARENT_GUIDE_CONTENT.rule7030Subtitle[lang]}
              </p>
            </div>

            {/* Visual 70/30 Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-base font-bold tabular-nums">
                <span className="text-emerald-800">{PARENT_GUIDE_CONTENT.rule7030Primary.label[lang]}</span>
                <span className="text-sky-800">{PARENT_GUIDE_CONTENT.rule7030Secondary.label[lang]}</span>
              </div>
              <div
                className="flex h-4 w-full overflow-hidden rounded-full bg-stone-200"
                role="img"
                aria-label={`${PARENT_GUIDE_CONTENT.rule7030Primary.label[lang]} / ${PARENT_GUIDE_CONTENT.rule7030Secondary.label[lang]}`}
              >
                <div
                  style={{ width: `${ratio7030.primaryWidth}%` }}
                  className="bg-emerald-700"
                />
                <div
                  style={{ width: `${ratio7030.secondaryWidth}%` }}
                  className="bg-sky-600"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-emerald-200 bg-white p-4">
                <h3 className="text-base font-bold text-emerald-900">
                  {PARENT_GUIDE_CONTENT.rule7030Primary.title[lang]}
                </h3>
                <p className="mt-1 text-base text-stone-700">
                  {PARENT_GUIDE_CONTENT.rule7030Primary.desc[lang]}
                </p>
              </div>
              <div className="rounded-xl border border-sky-200 bg-white p-4">
                <h3 className="text-base font-bold text-sky-900">
                  {PARENT_GUIDE_CONTENT.rule7030Secondary.title[lang]}
                </h3>
                <p className="mt-1 text-base text-stone-700">
                  {PARENT_GUIDE_CONTENT.rule7030Secondary.desc[lang]}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 2. Role of Parents: Guide vs Teacher */}
      <section className="rounded-3xl border border-teal-200 bg-teal-50/70 p-5 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-teal-900">
          <HeartHandshake className="h-6 w-6" aria-hidden="true" />
          <p className="text-sm font-bold">{PARENT_GUIDE_CONTENT.roleTitle[lang]}</p>
        </div>
        <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
          {PARENT_GUIDE_CONTENT.guideVsTeacherTitle[lang]}
        </h2>
        <p className="text-base leading-relaxed text-stone-800 sm:text-lg">
          {PARENT_GUIDE_CONTENT.guideVsTeacherBody[lang]}
        </p>
      </section>

      {/* 3. Story of Two Children: Rahat vs Tanim */}
      <section aria-labelledby="two-kids-heading" className="space-y-4">
        <h2 id="two-kids-heading" className="text-xl font-bold text-stone-900 sm:text-2xl">
          {PARENT_GUIDE_CONTENT.twoKidsTitle[lang]}
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-emerald-950">
              {PARENT_GUIDE_CONTENT.childA.title[lang]}
            </h3>
            <p className="text-base leading-relaxed text-stone-800">
              {PARENT_GUIDE_CONTENT.childA.story[lang]}
            </p>
            <p className="rounded-xl bg-white p-3.5 text-base font-bold text-emerald-900">
              {PARENT_GUIDE_CONTENT.childA.result[lang]}
            </p>
          </article>

          <article className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6 space-y-3">
            <h3 className="text-lg font-bold text-stone-900">
              {PARENT_GUIDE_CONTENT.childB.title[lang]}
            </h3>
            <p className="text-base leading-relaxed text-stone-700">
              {PARENT_GUIDE_CONTENT.childB.story[lang]}
            </p>
            <p className="rounded-xl bg-stone-100 p-3.5 text-base font-bold text-stone-800">
              {PARENT_GUIDE_CONTENT.childB.result[lang]}
            </p>
          </article>
        </div>
      </section>

      {/* 4. Simple Daily Routine (Reference Guide, NOT a checklist tracker) */}
      <section
        aria-labelledby="daily-routine-guide-heading"
        className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-4"
      >
        <div className="space-y-1">
          <h2 id="daily-routine-guide-heading" className="text-xl font-bold text-stone-900 sm:text-2xl">
            {lang === 'bn' ? 'প্রতিদিনের সহজ রুটিন' : 'Simple Daily Routine'}
          </h2>
          <p className="text-base text-stone-600">
            {lang === 'bn'
              ? 'সকাল থেকে রাত পর্যন্ত ঘরের স্বাভাবিক কাজের মাঝেই ছোট ছোট অভ্যাসগুলো মনে রাখুন:'
              : 'Keep these gentle everyday moments in mind from morning to bedtime:'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {DAILY_ROUTINE_STEPS.map((step) => (
            <article
              key={step.id}
              className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4 space-y-1.5"
            >
              <p className="text-sm font-bold text-teal-800">
                <span aria-hidden="true" className="mr-1.5">{step.emoji}</span>
                {step.timeOfDay[lang]}
              </p>
              <h3 className="text-lg font-bold text-stone-900">{step.habit[lang]}</h3>
              <p className="text-base leading-relaxed text-stone-700">
                {step.description[lang]}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Golden Rules (1–6 Do's & Don'ts) */}
      <section aria-labelledby="golden-rules-heading" className="space-y-4">
        <h2 id="golden-rules-heading" className="text-xl font-bold text-stone-900 sm:text-2xl">
          {PARENT_GUIDE_CONTENT.goldenRulesTitle[lang]}
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {PARENT_GUIDE_CONTENT.goldenRules.map((rule) => (
            <article
              key={rule.id}
              className="rounded-3xl border border-stone-200 bg-white p-5 space-y-3"
            >
              <h3 className="text-lg font-bold text-stone-900">{rule.situation[lang]}</h3>

              <div className="flex items-start gap-2.5 rounded-2xl bg-emerald-50 p-3.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-emerald-900">
                    {lang === 'bn' ? '✅ যা করবেন:' : '✅ What to do:'}
                  </p>
                  <p className="mt-0.5 text-base text-stone-900">{rule.doAction[lang]}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl bg-rose-50/80 p-3.5">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-700" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-rose-900">
                    {lang === 'bn' ? '❌ যা করবেন না:' : "❌ What not to do:"}
                  </p>
                  <p className="mt-0.5 text-base text-stone-800">{rule.dontAction[lang]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Handling Refusal or Stubbornness */}
      <section
        aria-labelledby="resistance-heading"
        className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-4"
      >
        <div className="space-y-2">
          <h2 id="resistance-heading" className="text-xl font-bold text-stone-900 sm:text-2xl">
            {PARENT_GUIDE_CONTENT.resistanceTitle[lang]}
          </h2>
          <p className="rounded-xl bg-amber-50 px-4 py-3 text-base font-bold text-amber-950">
            {PARENT_GUIDE_CONTENT.resistanceMantra[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PARENT_GUIDE_CONTENT.resistanceScenarios.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-stone-50/60 p-4 space-y-3"
            >
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-stone-900">{item.trigger[lang]}</h3>
                <p className="text-sm font-medium text-stone-600">{item.guidance[lang]}</p>
              </div>
              <p className="rounded-xl border border-teal-200 bg-white p-3 text-base font-semibold text-teal-950">
                {item.exactScript[lang]}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 7. 5 Core Rules to Remember */}
      <section
        aria-labelledby="five-rules-heading"
        className="rounded-3xl border border-teal-200 bg-teal-800 p-5 text-white sm:p-7 space-y-4"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-amber-300" aria-hidden="true" />
          <h2 id="five-rules-heading" className="text-xl font-bold sm:text-2xl">
            {PARENT_GUIDE_CONTENT.fiveCoreRulesTitle[lang]}
          </h2>
        </div>

        <ol className="space-y-2.5">
          {PARENT_GUIDE_CONTENT.fiveCoreRules.map((rule, idx) => (
            <li
              key={idx}
              className="rounded-2xl bg-white/10 px-4 py-3 text-base font-semibold leading-relaxed text-white"
            >
              {rule[lang]}
            </li>
          ))}
        </ol>
      </section>

      {/* 8. 6-Month Complete Plan & 8 Permanent Learning Areas */}
      <section
        aria-labelledby="six-month-guide-heading"
        className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-6"
      >
        <div className="space-y-2">
          <h2 id="six-month-guide-heading" className="text-xl font-bold text-stone-900 sm:text-2xl">
            {SIX_MONTH_PLAN.title[lang]}
          </h2>
          <p className="text-base leading-relaxed text-stone-700">
            {SIX_MONTH_PLAN.intro[lang]}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-stone-900">
            {SIX_MONTH_PLAN.stepsTitle[lang]}
          </h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {SIX_MONTH_PLAN.months.map((m) => (
              <div
                key={m.monthNumber}
                className={`rounded-2xl border p-4 space-y-2 ${
                  m.isCurrent
                    ? 'border-teal-600 bg-teal-50/70'
                    : 'border-stone-200 bg-stone-50/50'
                }`}
              >
                <p className={`text-sm font-bold ${m.isCurrent ? 'text-teal-800' : 'text-stone-500'}`}>
                  {m.monthLabel[lang]}
                </p>
                <h4 className="text-lg font-bold text-stone-900">{m.title[lang]}</h4>
                <p className="text-sm font-semibold text-stone-800">{m.goal[lang]}</p>
                <p className="text-sm text-stone-600">{m.detail[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 border-t border-stone-200 pt-5">
          <h3 className="text-lg font-bold text-stone-900">
            {SIX_MONTH_PLAN.permanentAreasTitle[lang]}
          </h3>
          <p className="text-base text-stone-700">{SIX_MONTH_PLAN.permanentAreasIntro[lang]}</p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {SIX_MONTH_PLAN.permanentAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3 text-base font-semibold text-stone-900"
              >
                <span aria-hidden="true">{area.emoji}</span>
                <span>{area.label[lang]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onOpenMonth1Roadmap}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-base font-bold text-white hover:bg-teal-800"
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            <span>{lang === 'bn' ? '১ম মাসের ৮টি অধ্যায় দেখুন' : 'Open Month 1 Chapters'}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
