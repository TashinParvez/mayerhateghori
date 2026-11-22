import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  Eye,
  EyeOff,
  Lightbulb,
  MessageSquareQuote,
} from 'lucide-react';
import {
  CLUSTERS,
  FEELINGS_OPTIONS,
  KIMS_GAME_ITEMS,
  MARKET_OBSERVATION_QA,
} from '../data/month1Content';
import type { FeelingOption, Language } from '../types';
import {
  checkKimsGameGuess,
  createKimsGameRound,
  formatCount,
  type KimsGameRound,
} from '../utils/appLogic';
import { downloadWallPoster } from '../utils/posterDownload';
import { FeelingFaceSvg, KimsObjectSvg } from './ClusterVisuals';
import { SafeImage } from './SafeImage';

interface ChapterRefHeaderProps {
  lang: Language;
  clusterId: string;
  showReference?: boolean;
  onOpenChapter?: (clusterId: string) => void;
}

function ChapterRefHeader({
  lang,
  clusterId,
  showReference,
  onOpenChapter,
}: ChapterRefHeaderProps) {
  const cluster = CLUSTERS.find((c) => c.id === clusterId);
  if (!showReference || !cluster) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3 mb-4">
      <div className="flex items-center gap-2 text-sm font-bold text-teal-900">
        <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{cluster.chapterTitle[lang]}</span>
      </div>
      {onOpenChapter && (
        <button
          type="button"
          onClick={() => onOpenChapter(cluster.id)}
          className="inline-flex min-h-[40px] items-center gap-1 rounded-lg bg-teal-50 px-3 py-1.5 text-sm font-bold text-teal-800 hover:bg-teal-100"
        >
          <span>{lang === 'bn' ? 'অধ্যায়টি পড়ুন' : 'Read Chapter'}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

interface DownloadPosterButtonProps {
  lang: Language;
  clusterId: string;
}

export function DownloadPosterButton({ lang, clusterId }: DownloadPosterButtonProps) {
  const [downloaded, setDownloaded] = useState(false);
  const cluster = CLUSTERS.find((c) => c.id === clusterId);
  if (!cluster) return null;

  const handleDownload = () => {
    const ok = downloadWallPoster(cluster.printablePoster, lang);
    if (ok) {
      setDownloaded(true);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleDownload}
        className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-teal-700 px-5 py-3 text-base font-bold text-white transition-colors hover:bg-teal-800 sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>{cluster.printablePoster.buttonLabel[lang]}</span>
      </button>
      {downloaded && (
        <p role="status" className="text-sm font-semibold text-emerald-800">
          {lang === 'bn'
            ? 'চার্টের ছবিটি আপনার ফোনে সেভ হয়েছে! এটি প্রিন্ট করে ঘরে দেয়ালে টাঙিয়ে রাখতে পারেন।'
            : 'Wall chart saved to your device! You can print and hang it at eye level.'}
        </p>
      )}
    </div>
  );
}

/* 1. Chapter 1: Morning Routine Wall Chart Guide */
export function MorningChartGuide({
  lang,
  showReference = false,
  showDownload = true,
  onOpenChapter,
}: {
  lang: Language;
  showReference?: boolean;
  showDownload?: boolean;
  onOpenChapter?: (id: string) => void;
}) {
  const cluster1 = CLUSTERS[0];
  const steps = cluster1.printablePoster.items;

  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7">
      <ChapterRefHeader
        lang={lang}
        clusterId="cluster-1"
        showReference={showReference}
        onOpenChapter={onOpenChapter}
      />

      <div className="space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
            {lang === 'bn'
              ? 'সকালের রুটিন চার্ট (দেয়ালে টাঙানোর ও শেখানোর নমুনা)'
              : 'Morning Routine Wall Chart (Example & Printable)'}
          </h3>
          <p className="text-base leading-relaxed text-stone-700">
            {lang === 'bn'
              ? 'কীভাবে ব্যবহার করবেন: এই চার্টটি প্রিন্ট করে বা কাগজে এঁকে ঘরের দেয়ালে লাগিয়ে দিন। এটি প্রতিদিন ফোনে টিক দেওয়ার জন্য নয়—বরং তাবিয়া যেন ছবি দেখে নিজেই মনে রাখতে পারে ঘুম থেকে উঠে পরপর কী করতে হয়।'
              : 'How to use: Print or sketch this 7-step chart and hang it on the bedroom wall so Tabia remembers her morning sequence independently without nagging.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50/50 p-3.5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-700 text-sm font-bold text-white tabular-nums">
                {formatCount(i + 1, lang)}
              </span>
              <span className="text-base font-semibold text-stone-900">{step[lang]}</span>
            </div>
          ))}
        </div>

        {showDownload && (
          <div className="pt-1">
            <DownloadPosterButton lang={lang} clusterId="cluster-1" />
          </div>
        )}
      </div>
    </article>
  );
}

/* 2. Chapter 2: Kim's Game (Visual Parent Practice Demo) */
export function KimsGameGuide({
  lang,
  showReference = false,
  onOpenChapter,
}: {
  lang: Language;
  showReference?: boolean;
  onOpenChapter?: (id: string) => void;
}) {
  const [itemCount, setItemCount] = useState<3 | 5>(3);
  const [round, setRound] = useState<KimsGameRound>(() =>
    createKimsGameRound(KIMS_GAME_ITEMS, 3, 1),
  );
  const [phase, setPhase] = useState<'observe' | 'guess' | 'result'>('observe');
  const [guessedId, setGuessedId] = useState<string | null>(null);

  const startRound = (count: 3 | 5) => {
    setItemCount(count);
    setRound(createKimsGameRound(KIMS_GAME_ITEMS, count));
    setPhase('observe');
    setGuessedId(null);
  };

  const hiddenItemObj = KIMS_GAME_ITEMS.find((i) => i.id === round.hiddenItemId);
  const isCorrect = guessedId !== null && checkKimsGameGuess(round, guessedId);

  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-5">
      <ChapterRefHeader
        lang={lang}
        clusterId="cluster-2"
        showReference={showReference}
        onOpenChapter={onOpenChapter}
      />

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
          {lang === 'bn'
            ? 'কিমস গেম (Kim’s Game): আগে নিজে শিখে নিন, তারপর আসল ট্রেতে খেলুন'
            : "Kim's Game: Learn the Rules Here, Then Play With Real Objects"}
        </h3>
        <p className="text-base leading-relaxed text-stone-700">
          {lang === 'bn'
            ? 'মা-বাবার জন্য নির্দেশনা: নিচের খেলার নমুনাটি নিজে একবার খেলে দেখুন—তাহলে সহজেই বুঝতে পারবেন আসল চামচ, পেন্সিল ও বল নিয়ে তাবিয়ার সাথে কীভাবে খেলাটি খেলবেন।'
            : 'For Parents: Try this quick on-screen demonstration once so you see exactly how the game works before putting your phone aside and playing with a real tray and spoons.'}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => startRound(3)}
            aria-pressed={itemCount === 3}
            className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-bold ${
              itemCount === 3
                ? 'bg-amber-700 text-white'
                : 'border border-stone-300 bg-stone-50 text-stone-800 hover:bg-stone-100'
            }`}
          >
            {lang === 'bn' ? '৩টি জিনিস (সহজ শুরু)' : '3 Objects (Easy)'}
          </button>
          <button
            type="button"
            onClick={() => startRound(5)}
            aria-pressed={itemCount === 5}
            className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-bold ${
              itemCount === 5
                ? 'bg-amber-700 text-white'
                : 'border border-stone-300 bg-stone-50 text-stone-800 hover:bg-stone-100'
            }`}
          >
            {lang === 'bn' ? '৫টি জিনিস (একটু কঠিন)' : '5 Objects (Challenge)'}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 sm:p-5 space-y-4">
        {phase === 'observe' && (
          <>
            <p className="text-base font-bold text-amber-950">
              {lang === 'bn'
                ? 'ধাপ ১: ট্রে-তে রাখা জিনিসগুলো দেখুন (সন্তানকে ১০ সেকেন্ড দেখতে বলবেন):'
                : 'Step 1: Observe the items on the tray (give your child 10 seconds):'}
            </p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              {round.options.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-amber-200 bg-white p-3 text-center"
                >
                  <KimsObjectSvg itemId={item.id} />
                  <span className="text-sm font-bold text-stone-900 sm:text-base">
                    {item.name[lang]}
                  </span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setPhase('guess');
                setGuessedId(null);
              }}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-amber-700 px-5 py-2.5 text-base font-bold text-white hover:bg-amber-800"
            >
              <EyeOff className="h-5 w-5" aria-hidden="true" />
              <span>
                {lang === 'bn' ? 'কাপড় দিয়ে ঢেকে ১টি সরান' : 'Cover & Hide 1 Object'}
              </span>
            </button>
          </>
        )}

        {phase === 'guess' && (
          <>
            <p className="text-base font-bold text-amber-950">
              {lang === 'bn'
                ? 'ধাপ ২: ১টি জিনিস সরিয়ে নেওয়া হয়েছে! বলুন তো কোনটি হারিয়ে গেছে?'
                : 'Step 2: One item was removed! Which object is missing?'}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {round.visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white p-3 text-center"
                >
                  <KimsObjectSvg itemId={item.id} />
                  <span className="text-sm font-bold text-stone-800 sm:text-base">
                    {item.name[lang]}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {round.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setGuessedId(opt.id);
                    setPhase('result');
                  }}
                  className="min-h-[48px] rounded-xl border border-stone-300 bg-white px-4 py-2 text-base font-bold text-stone-900 hover:border-amber-600 hover:bg-amber-50"
                >
                  {opt.name[lang]}
                </button>
              ))}
            </div>
          </>
        )}

        {phase === 'result' && hiddenItemObj && (
          <div className="space-y-3">
            <div
              role="status"
              className={`rounded-xl border p-4 text-base font-bold ${
                isCorrect
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                  : 'border-amber-300 bg-white text-stone-900'
              }`}
            >
              {isCorrect
                ? lang === 'bn'
                  ? `একদম ঠিক! "${hiddenItemObj.name.bn}" সরানো হয়েছিল। আসল ট্রেতেও ঠিক এভাবেই খেলাটি খেলাবেন!`
                  : `Spot on! The ${hiddenItemObj.name.en} was missing. Now you are ready to play this with real objects!`
                : lang === 'bn'
                  ? `আসল উত্তর ছিল "${hiddenItemObj.name.bn}"। বাস্তবে খেললে তাবিয়া ভুল বললেও হালকা ইশারা দিয়ে সাহায্য করবেন।`
                  : `The missing item was ${hiddenItemObj.name.en}. In real life, give a gentle clue if she guesses wrong!`}
            </div>
            <button
              type="button"
              onClick={() => startRound(itemCount)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-amber-700 px-4 py-2 text-base font-bold text-white hover:bg-amber-800"
            >
              <Eye className="h-5 w-5" aria-hidden="true" />
              <span>{lang === 'bn' ? 'আরেকবার অনুশীলন করুন' : 'Practice Again'}</span>
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

/* 3. Chapter 2 & 8: Market Observation Picture Questions */
export function MarketObservationGuide({
  lang,
  showReference = false,
  onOpenChapter,
}: {
  lang: Language;
  showReference?: boolean;
  onOpenChapter?: (id: string) => void;
}) {
  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-5">
      <ChapterRefHeader
        lang={lang}
        clusterId="cluster-2"
        showReference={showReference}
        onOpenChapter={onOpenChapter}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SafeImage
            imageKey="vegetableMarket"
            lang={lang}
            aspectClass="aspect-[4/3]"
            className="border border-stone-200"
          />
        </div>

        <div className="space-y-3 lg:col-span-7">
          <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
            {lang === 'bn'
              ? 'ছবি দেখে মনোযোগ দিয়ে খোঁজার খেলা (বাজারের ছবি)'
              : 'Visual Observation Game: Spot Things in the Market'}
          </h3>
          <p className="text-base leading-relaxed text-stone-700">
            {lang === 'bn'
              ? 'সন্তানকে শুধু ছবি দেখতে না বলে, পাশের ছবিটি দেখিয়ে নিচের সহজ প্রশ্নগুলো একসাথে করুন:'
              : 'Show this market picture to Tabia and ask these exact observation questions together:'}
          </p>

          <div className="space-y-2.5">
            {MARKET_OBSERVATION_QA.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-stone-50/70 p-3.5"
              >
                <p className="text-base font-bold text-stone-900">{item.q[lang]}</p>
                <p className="mt-1 text-sm text-stone-600">{item.hint[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* 4. Chapter 3: 3-Sentence Evening Storytelling Guide */
export function ThreeSentenceStoryGuide({
  lang,
  showReference = false,
  showDownload = true,
  onOpenChapter,
}: {
  lang: Language;
  showReference?: boolean;
  showDownload?: boolean;
  onOpenChapter?: (id: string) => void;
}) {
  const cluster3 = CLUSTERS[2];
  const exercise = cluster3.exercise!;

  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-5">
      <ChapterRefHeader
        lang={lang}
        clusterId="cluster-3"
        showReference={showReference}
        onOpenChapter={onOpenChapter}
      />

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
          {exercise.title[lang]}
        </h3>
        <p className="text-base leading-relaxed text-stone-700">{exercise.intro[lang]}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {exercise.steps.map((step, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-sky-200 bg-sky-50/70 p-4 text-base font-bold text-sky-950"
          >
            {step[lang]}
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 sm:p-5 space-y-2">
        <p className="text-base font-bold text-emerald-950">{exercise.benefitsTitle[lang]}</p>
        <ul className="space-y-1.5 text-base text-stone-800">
          {exercise.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
              <span>{b[lang]}</span>
            </li>
          ))}
        </ul>
      </div>

      {showDownload && <DownloadPosterButton lang={lang} clusterId="cluster-3" />}
    </article>
  );
}

/* 5. Chapter 4: Feelings Chart Guide (all prompts visible directly + selectable preview) */
export function FeelingsChartGuide({
  lang,
  showReference = false,
  showDownload = true,
  onOpenChapter,
}: {
  lang: Language;
  showReference?: boolean;
  showDownload?: boolean;
  onOpenChapter?: (id: string) => void;
}) {
  const [highlightedId, setHighlightedId] = useState<FeelingOption['id']>('happy');

  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-5">
      <ChapterRefHeader
        lang={lang}
        clusterId="cluster-4"
        showReference={showReference}
        onOpenChapter={onOpenChapter}
      />

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
          {lang === 'bn'
            ? 'অনুভূতির চার্ট (Feelings Chart): কোন মন-মেজাজে মা কী বলবেন?'
            : 'Feelings Chart: How to Respond Gently to Every Emotion'}
        </h3>
        <p className="text-base leading-relaxed text-stone-700">
          {lang === 'bn'
            ? 'তাবিয়াকে প্রতিদিন একবার জিজ্ঞেস করুন: "আজ তোমার মন কেমন লাগছে?" নিচের ৫টি অনুভূতির ছবি ও প্রতিটি অবস্থায় মা হিসেবে আপনি কী বলবেন—সব এখানে স্পষ্টভাবে দেওয়া আছে।'
            : 'Ask Tabia once a day: "How are you feeling today?" Below are all 5 feelings with the exact calming response for Mom.'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {FEELINGS_OPTIONS.map((option) => {
          const isHighlighted = highlightedId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setHighlightedId(option.id)}
              aria-pressed={isHighlighted}
              className={`flex flex-col items-center gap-2.5 rounded-2xl border-2 p-4 text-center ${
                isHighlighted
                  ? `${option.bgClass} ${option.borderClass}`
                  : 'border-stone-200 bg-stone-50/70 hover:bg-stone-100'
              }`}
            >
              <FeelingFaceSvg feelingId={option.id} />
              <span className="text-base font-bold text-stone-900">{option.label[lang]}</span>
            </button>
          );
        })}
      </div>

      {/* Directly show all 5 parent prompts cleanly so zero content is hidden! */}
      <div className="space-y-2.5">
        {FEELINGS_OPTIONS.map((option) => {
          const isHighlighted = highlightedId === option.id;
          return (
            <div
              key={option.id}
              className={`flex items-start gap-3 rounded-2xl border p-4 ${
                isHighlighted
                  ? `${option.bgClass} ${option.borderClass}`
                  : 'border-stone-200 bg-stone-50/40'
              }`}
            >
              <MessageSquareQuote
                className="mt-1 h-5 w-5 shrink-0 text-stone-700"
                aria-hidden="true"
              />
              <div>
                <p className="text-base font-bold text-stone-900">{option.label[lang]}</p>
                <p className="mt-0.5 text-base leading-relaxed text-stone-800">
                  {option.parentPrompt[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {showDownload && <DownloadPosterButton lang={lang} clusterId="cluster-4" />}
    </article>
  );
}

/* 6. Chapter 6: Nature Walk Guide */
export function NatureWalkGuide({
  lang,
  showReference = false,
  showDownload = true,
  onOpenChapter,
}: {
  lang: Language;
  showReference?: boolean;
  showDownload?: boolean;
  onOpenChapter?: (id: string) => void;
}) {
  const cluster6 = CLUSTERS[5];
  const exercise = cluster6.exercise!;

  return (
    <article className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-5">
      <ChapterRefHeader
        lang={lang}
        clusterId="cluster-6"
        showReference={showReference}
        onOpenChapter={onOpenChapter}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SafeImage
            imageKey="naturePark"
            lang={lang}
            aspectClass="aspect-[4/3]"
            className="border border-stone-200"
          />
        </div>

        <div className="space-y-3 lg:col-span-7">
          <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
            {exercise.title[lang]}
          </h3>
          <p className="text-base text-stone-700">{exercise.intro[lang]}</p>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {exercise.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2.5 text-base font-semibold text-emerald-950"
              >
                {step[lang]}
              </div>
            ))}
          </div>

          {exercise.extraQuestionsTitle && exercise.extraQuestions && (
            <div className="rounded-2xl bg-stone-50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                <Lightbulb className="h-4 w-4 text-amber-700" aria-hidden="true" />
                <span>{exercise.extraQuestionsTitle[lang]}</span>
              </div>
              {exercise.extraQuestions.map((q, idx) => (
                <p key={idx} className="text-base text-stone-700">
                  {q[lang]}
                </p>
              ))}
            </div>
          )}

          {showDownload && <DownloadPosterButton lang={lang} clusterId="cluster-6" />}
        </div>
      </div>
    </article>
  );
}
