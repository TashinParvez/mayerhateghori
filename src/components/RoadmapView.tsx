import { ArrowLeft, ArrowRight, List, Map } from 'lucide-react';
import { CLUSTERS } from '../data/month1Content';
import type { Language, RoadmapLayoutMode } from '../types';
import { formatCount } from '../utils/appLogic';
import { ClusterIcon } from './ClusterVisuals';
import { SafeImage } from './SafeImage';

interface RoadmapViewProps {
  lang: Language;
  layoutMode: RoadmapLayoutMode;
  onChangeLayoutMode: (mode: RoadmapLayoutMode) => void;
  onBackHome: () => void;
  onSelectCluster: (clusterId: string) => void;
}

const PATH_X_PERCENTS = [50, 72, 50, 28, 50, 72, 50, 28] as const;
const ROW_HEIGHT = 148;
const TOTAL_HEIGHT = PATH_X_PERCENTS.length * ROW_HEIGHT;

function buildWindingSvgPath(): string {
  const points = PATH_X_PERCENTS.map((xPct, idx) => ({
    x: (xPct / 100) * 400,
    y: idx * ROW_HEIGHT + ROW_HEIGHT / 2,
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midY = (p0.y + p1.y) / 2;
    d += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
  }
  return d;
}

const WINDING_SVG_D = buildWindingSvgPath();

export function RoadmapView({
  lang,
  layoutMode,
  onChangeLayoutMode,
  onBackHome,
  onSelectCluster,
}: RoadmapViewProps) {
  return (
    <div className="space-y-6">
      {/* Header with Back to View 1 & Path/List Toggle (No search or sorting) */}
      <section className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-7 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-stone-300 bg-stone-50 px-4 py-2 text-base font-semibold text-stone-800 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            <span>{lang === 'bn' ? 'হোমে ফিরে যান' : 'Back to Home'}</span>
          </button>

          {/* Switch between Path View and List View */}
          <div
            role="group"
            aria-label={lang === 'bn' ? 'দেখার ধরন বদলান' : 'Switch view layout'}
            className="inline-flex rounded-xl border border-stone-200 bg-stone-100 p-1"
          >
            <button
              type="button"
              onClick={() => onChangeLayoutMode('path')}
              aria-pressed={layoutMode === 'path'}
              className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-bold whitespace-nowrap ${
                layoutMode === 'path'
                  ? 'bg-white text-teal-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Map className="h-4 w-4" aria-hidden="true" />
              <span>{lang === 'bn' ? 'যাত্রাপথ' : 'Path View'}</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeLayoutMode('list')}
              aria-pressed={layoutMode === 'list'}
              className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-bold whitespace-nowrap ${
                layoutMode === 'list'
                  ? 'bg-white text-teal-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <List className="h-4 w-4" aria-hidden="true" />
              <span>{lang === 'bn' ? 'তালিকা' : 'List View'}</span>
            </button>
          </div>
        </div>

        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            {lang === 'bn' ? '১ম মাসের যাত্রা' : 'Month 1 Journey'}
          </h1>
          <p className="text-base text-stone-700">
            {lang === 'bn'
              ? '১ থেকে ৮ পর্যন্ত যেকোনো একটি গোল চিহ্নে ট্যাপ করলে সেই অধ্যায়ের ছবিসহ নিয়ম ও উদাহরণ খুলে যাবে।'
              : 'Tap any numbered stop from 1 to 8 to open that chapter with visual examples and home play activities.'}
          </p>
        </div>
      </section>

      {/* Winding Vertical Path View (Duolingo / Candy-Crush style stoppages) */}
      {layoutMode === 'path' ? (
        <section
          aria-label={lang === 'bn' ? '১ম মাসের ৮টি ধাপের যাত্রাপথ' : 'Month 1 winding path'}
          className="rounded-3xl border border-stone-200 bg-gradient-to-b from-white via-[#FAF8F5] to-teal-50/40 px-3 py-8 sm:px-8"
        >
          <div
            className="relative mx-auto w-full max-w-lg"
            style={{ height: `${TOTAL_HEIGHT}px` }}
          >
            {/* Winding road SVG */}
            <svg
              viewBox={`0 0 400 ${TOTAL_HEIGHT}`}
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d={WINDING_SVG_D}
                fill="none"
                stroke="#E7E5E4"
                strokeWidth="22"
                strokeLinecap="round"
              />
              <path
                d={WINDING_SVG_D}
                fill="none"
                stroke="#99F6E4"
                strokeWidth="6"
                strokeDasharray="14 14"
                strokeLinecap="round"
              />
            </svg>

            {/* 8 Numbered Circular Stoppage Nodes */}
            {CLUSTERS.map((cluster, idx) => {
              const xPct = PATH_X_PERCENTS[idx];
              const yCenter = idx * ROW_HEIGHT + ROW_HEIGHT / 2;

              return (
                <div
                  key={cluster.id}
                  style={{
                    left: `${xPct}%`,
                    top: `${yCenter}px`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={() => onSelectCluster(cluster.id)}
                    aria-label={`${cluster.pathLabel[lang]} — ${cluster.chapterTitle[lang]}`}
                    className="group flex flex-col items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                  >
                    <span
                      style={{ backgroundColor: cluster.nodeColor }}
                      className="flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-white text-white shadow-md transition-transform group-hover:scale-105 group-active:scale-95"
                    >
                      <ClusterIcon clusterNumber={cluster.number} className="h-6 w-6" />
                      <span className="mt-0.5 text-sm font-bold leading-none tabular-nums">
                        {formatCount(cluster.number, lang)}
                      </span>
                    </span>

                    <span className="mt-2 max-w-[160px] rounded-xl border border-stone-200 bg-white px-3 py-1.5 text-center text-sm font-bold leading-snug text-stone-900 shadow-sm group-hover:border-teal-500">
                      {cluster.pathLabel[lang]}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        /* List View (Card Format) */
        <section
          aria-label={lang === 'bn' ? 'সব ৮টি অধ্যায়ের তালিকা' : 'List of all 8 chapters'}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {CLUSTERS.map((cluster) => (
            <button
              key={cluster.id}
              type="button"
              onClick={() => onSelectCluster(cluster.id)}
              className="group flex flex-col justify-between rounded-3xl border border-stone-200 bg-white p-5 text-left transition-colors hover:border-teal-500 hover:bg-stone-50/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <div className="space-y-4">
                <SafeImage
                  imageKey={cluster.imageKey}
                  lang={lang}
                  aspectClass="aspect-[16/10]"
                  className="border border-stone-200"
                />
                <div className="flex items-center gap-3">
                  <span
                    style={{ backgroundColor: cluster.nodeColor }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-white tabular-nums"
                  >
                    {formatCount(cluster.number, lang)}
                  </span>
                  <h2 className="text-lg font-bold text-stone-900 group-hover:text-teal-900">
                    {cluster.chapterTitle[lang]}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-stone-700">
                  {cluster.primaryTask[lang]}
                </p>
              </div>

              <span className="mt-4 inline-flex items-center gap-1.5 text-base font-bold text-teal-800">
                <span>{lang === 'bn' ? 'অধ্যায়টি খুলুন' : 'Open Chapter'}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </button>
          ))}
        </section>
      )}
    </div>
  );
}
