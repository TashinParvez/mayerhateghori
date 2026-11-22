import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Package,
  Sparkles,
} from 'lucide-react';
import { CLUSTERS } from '../data/month1Content';
import type { Language } from '../types';
import { formatCount, getNextClusterId } from '../utils/appLogic';
import { ClusterIcon } from './ClusterVisuals';
import {
  DownloadPosterButton,
  FeelingsChartGuide,
  KimsGameGuide,
  MarketObservationGuide,
  MorningChartGuide,
  NatureWalkGuide,
  ThreeSentenceStoryGuide,
} from './PlayGuides';
import { SafeImage } from './SafeImage';

interface ClusterDetailViewProps {
  lang: Language;
  clusterId: string;
  onBackToRoadmap: () => void;
  onSelectCluster: (id: string) => void;
}

export function ClusterDetailView({
  lang,
  clusterId,
  onBackToRoadmap,
  onSelectCluster,
}: ClusterDetailViewProps) {
  const cluster = CLUSTERS.find((c) => c.id === clusterId) ?? CLUSTERS[0];
  const nextId = getNextClusterId(
    CLUSTERS.map((c) => c.id),
    cluster.id,
  );
  const nextCluster = nextId ? CLUSTERS.find((c) => c.id === nextId) : null;

  return (
    <div className="space-y-6">
      {/* Top Back Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBackToRoadmap}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2 text-base font-semibold text-stone-800 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          <span>{lang === 'bn' ? '১ম মাসের যাত্রায় ফিরুন' : 'Back to Month 1 Journey'}</span>
        </button>

        <span className="text-sm font-bold text-stone-500 tabular-nums">
          {lang === 'bn'
            ? `অধ্যায় ${formatCount(cluster.number, lang)} / ${formatCount(CLUSTERS.length, lang)}`
            : `Chapter ${cluster.number} of ${CLUSTERS.length}`}
        </span>
      </div>

      {/* Header + Critical Representative Image + Intro + Primary Task */}
      <section className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span
                style={{ backgroundColor: cluster.nodeColor }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
              >
                <ClusterIcon clusterNumber={cluster.number} className="h-6 w-6" />
              </span>
              <span className="text-sm font-bold text-teal-800">
                {cluster.pathLabel[lang]}
              </span>
            </div>

            <h1 className="text-2xl font-bold leading-snug text-stone-900 sm:text-3xl">
              {cluster.chapterTitle[lang]}
            </h1>

            <p className="text-base leading-relaxed text-stone-700 sm:text-lg">
              {cluster.intro[lang]}
            </p>

            {/* Primary Task Highlight Box */}
            <div className={`rounded-2xl border p-4 sm:p-5 ${cluster.accentBg} ${cluster.accentBorder}`}>
              <p className={`text-base font-bold leading-relaxed ${cluster.accentText}`}>
                {cluster.primaryTask[lang]}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SafeImage
              imageKey={cluster.imageKey}
              lang={lang}
              aspectClass="aspect-[4/3]"
              className="border border-stone-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Practical Activities (Each with What to Do, Materials, What to Say, and Benefits) */}
      <section aria-labelledby="chapter-activities-heading" className="space-y-4">
        <div className="space-y-1">
          <h2 id="chapter-activities-heading" className="text-xl font-bold text-stone-900 sm:text-2xl">
            {lang === 'bn'
              ? 'কীভাবে শেখাবেন? (বাস্তব উদাহরণ ও উপকারিতা)'
              : 'How to Conduct Activities (Materials, Examples & Benefits)'}
          </h2>
          <p className="text-base text-stone-600">
            {lang === 'bn'
              ? 'প্রতিটি কাজের নিচে কী লাগবে, সন্তানকে কী বলবেন এবং এতে ওর কী উপকার হবে—সব স্পষ্ট করে লেখা আছে।'
              : 'Every activity lists the exact home materials, what to say to your child, and why it helps.'}
          </p>
        </div>

        <div className="space-y-4">
          {cluster.activities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6 space-y-4"
            >
              <h3 className="text-lg font-bold text-stone-900 sm:text-xl">
                {activity.title[lang]}
              </h3>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="space-y-3">
                  <div className="rounded-2xl bg-stone-50 p-4">
                    <p className="text-sm font-bold text-stone-900">
                      {lang === 'bn' ? 'কীভাবে করবেন:' : 'What to do:'}
                    </p>
                    <p className="mt-1 text-base leading-relaxed text-stone-700">
                      {activity.whatToDo[lang]}
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-2xl border border-stone-200 bg-white p-4">
                    <Package className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-stone-900">
                        {lang === 'bn' ? 'কী কী লাগবে:' : 'Materials needed:'}
                      </p>
                      <p className="mt-0.5 text-base text-stone-700">
                        {activity.materials[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-4">
                    <p className="text-sm font-bold text-teal-950">
                      {lang === 'bn' ? 'সন্তানকে কী বলবেন বা জিজ্ঞেস করবেন:' : 'What to say or ask:'}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-base font-medium leading-relaxed text-stone-900">
                      {activity.whatToSay[lang]}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
                    <p className="text-base font-semibold leading-relaxed text-emerald-950">
                      {activity.benefit[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Practical Exercise + Benefits */}
      {cluster.exercise && (
        <section
          aria-labelledby="chapter-exercise-heading"
          className="rounded-3xl border border-teal-200 bg-teal-50/60 p-5 sm:p-7 space-y-5"
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-1 h-6 w-6 shrink-0 text-teal-800" aria-hidden="true" />
            <div className="space-y-1">
              <h2 id="chapter-exercise-heading" className="text-xl font-bold text-teal-950 sm:text-2xl">
                {cluster.exercise.title[lang]}
              </h2>
              <p className="text-base leading-relaxed text-stone-800">
                {cluster.exercise.intro[lang]}
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {cluster.exercise.steps.map((step, i) => (
              <li
                key={i}
                className="rounded-xl border border-teal-200 bg-white px-4 py-3 text-base font-semibold text-stone-900"
              >
                {step[lang]}
              </li>
            ))}
          </ol>

          {cluster.exercise.extraQuestionsTitle && cluster.exercise.extraQuestions && (
            <div className="rounded-2xl bg-white/90 p-4 space-y-1.5">
              <p className="text-base font-bold text-teal-950">
                {cluster.exercise.extraQuestionsTitle[lang]}
              </p>
              {cluster.exercise.extraQuestions.map((q, idx) => (
                <p key={idx} className="text-base text-stone-800">
                  {q[lang]}
                </p>
              ))}
            </div>
          )}

          {/* Benefits list (Guideline 7.4) */}
          <div className="rounded-2xl border border-emerald-200 bg-white p-4 sm:p-5 space-y-2.5">
            <h3 className="text-lg font-bold text-emerald-950">
              {cluster.exercise.benefitsTitle[lang]}
            </h3>
            <ul className="space-y-2">
              {cluster.exercise.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-stone-800">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span>{b[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          {cluster.exercise.tip && (
            <p className="rounded-xl bg-white/90 p-4 text-base font-semibold text-teal-950">
              {cluster.exercise.tip[lang]}
            </p>
          )}
        </section>
      )}

      {/* Embedded Games & Charts directly inside matching chapters (as requested for Charts & Play!) */}
      {cluster.id === 'cluster-1' && <MorningChartGuide lang={lang} showDownload={false} />}
      {cluster.id === 'cluster-2' && (
        <div className="space-y-6">
          <KimsGameGuide lang={lang} />
          <MarketObservationGuide lang={lang} />
        </div>
      )}
      {cluster.id === 'cluster-3' && <ThreeSentenceStoryGuide lang={lang} showDownload={false} />}
      {cluster.id === 'cluster-4' && <FeelingsChartGuide lang={lang} showDownload={false} />}
      {cluster.id === 'cluster-6' && <NatureWalkGuide lang={lang} showDownload={false} />}
      {cluster.id === 'cluster-8' && <MarketObservationGuide lang={lang} />}

      {/* Printable Wall Material Download Box */}
      <section className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-3">
        <h2 className="text-xl font-bold text-stone-900">
          {lang === 'bn'
            ? 'দেয়ালে টাঙানোর জন্য চার্ট ডাউনলোড করুন'
            : 'Download Printable Wall Material'}
        </h2>
        <p className="text-base text-stone-700">
          {lang === 'bn'
            ? 'এই বোতামে চাপ দিলে আপনার ফোনে সুন্দর একটি চার্টের ছবি সেভ হবে—যা প্রিন্ট করে ঘরে ঝুলিয়ে রাখলে প্রতিদিন মনে রাখতে সুবিধা হবে।'
            : 'Tap below to save a clear printable wall chart image to your phone so you can print and hang it at home.'}
        </p>
        <DownloadPosterButton lang={lang} clusterId={cluster.id} />
      </section>

      {/* Important Note (e.g. Soroban warning in Cluster 2) */}
      {cluster.importantNote && (
        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
          <p className="text-base font-bold leading-relaxed text-amber-950">
            {cluster.importantNote[lang]}
          </p>
        </section>
      )}

      {/* Expected Result */}
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6 space-y-2">
        <div className="flex items-center gap-2 text-emerald-900">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          <h2 className="text-xl font-bold">
            {lang === 'bn' ? 'সম্ভাব্য ফলাফল' : 'Expected Result'}
          </h2>
        </div>
        <p className="text-base leading-relaxed text-stone-800 sm:text-lg">
          {cluster.expectedResult[lang]}
        </p>
      </section>

      {/* Distinct Japanese Connection Box */}
      <section
        aria-labelledby="japanese-lesson-heading"
        className="rounded-3xl border-2 border-amber-300 bg-amber-50 p-5 sm:p-7 space-y-4"
      >
        <div className="flex items-center gap-2.5 text-amber-950">
          <Sparkles className="h-6 w-6 shrink-0 text-amber-700" aria-hidden="true" />
          <h2 id="japanese-lesson-heading" className="text-xl font-bold sm:text-2xl">
            {cluster.japaneseLessonTitle[lang]}
          </h2>
        </div>

        <div className="space-y-3">
          {cluster.connections.map((conn, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-amber-200 bg-white p-4 sm:p-5 space-y-1.5"
            >
              <h3 className="text-lg font-bold text-amber-950">{conn.name[lang]}</h3>
              <p className="text-base text-stone-800">{conn.meaning[lang]}</p>
              <p className="pt-1 text-base font-semibold text-teal-900">
                {conn.howApplied[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation: Left -> Back to View 2 | Right -> Next Cluster */}
      <nav
        aria-label={lang === 'bn' ? 'অধ্যায় নেভিগেশন' : 'Chapter navigation'}
        className="flex flex-col gap-3 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <button
          type="button"
          onClick={onBackToRoadmap}
          className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-base font-bold text-stone-800 hover:bg-stone-50"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          <span>{lang === 'bn' ? 'সব অধ্যায় ও যাত্রাপথ' : 'Back to Cluster List'}</span>
        </button>

        {nextCluster ? (
          <button
            type="button"
            onClick={() => onSelectCluster(nextCluster.id)}
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-base font-bold text-white hover:bg-teal-800"
          >
            <span>
              {lang === 'bn'
                ? `পরের ক্লাস্টার: ক্লাস্টার ${formatCount(nextCluster.number, lang)} ➔`
                : `Next Cluster: Cluster ${nextCluster.number} ➔`}
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onSelectCluster(CLUSTERS[0].id)}
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-base font-bold text-white hover:bg-teal-800"
          >
            <span>{lang === 'bn' ? '১ম ক্লাস্টারে ফিরে যান' : 'Return to Cluster 1'}</span>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </nav>
    </div>
  );
}
