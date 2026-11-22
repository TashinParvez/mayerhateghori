import { useEffect, useState } from 'react';
import {
  Gamepad2,
  Globe,
  HeartHandshake,
  Home,
} from 'lucide-react';
import { ChartsAndPlayView } from './components/ChartsAndPlayView';
import { ClusterDetailView } from './components/ClusterDetailView';
import { HomeView } from './components/HomeView';
import { ParentGuideView } from './components/ParentGuideView';
import { RoadmapView } from './components/RoadmapView';
import { UI_COPY } from './data/month1Content';
import type {
  HomeScreenView,
  Language,
  NavTab,
  RoadmapLayoutMode,
} from './types';

const STORAGE_LANG_KEY = 'tabia-guidebook-lang-v1';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_LANG_KEY);
      return saved === 'en' ? 'en' : 'bn';
    } catch {
      return 'bn';
    }
  });

  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [homeSubView, setHomeSubView] = useState<HomeScreenView>('monthHome');
  const [roadmapLayout, setRoadmapLayout] = useState<RoadmapLayoutMode>('path');
  const [selectedClusterId, setSelectedClusterId] = useState<string>('cluster-1');

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // Ignore storage errors
    }
  }, [lang]);

  const scrollTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTab = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setHomeSubView('monthHome');
    }
    scrollTopSmooth();
  };

  const openRoadmap = () => {
    setActiveTab('home');
    setHomeSubView('roadmap');
    scrollTopSmooth();
  };

  const openClusterDetail = (clusterId: string) => {
    setSelectedClusterId(clusterId);
    setActiveTab('home');
    setHomeSubView('clusterDetail');
    scrollTopSmooth();
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const navItems: {
    id: NavTab;
    label: string;
    Icon: typeof Home;
  }[] = [
    { id: 'home', label: UI_COPY.nav.home[lang], Icon: Home },
    { id: 'charts', label: UI_COPY.nav.charts[lang], Icon: Gamepad2 },
    { id: 'guide', label: UI_COPY.nav.guide[lang], Icon: HeartHandshake },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 pb-20 md:pb-12">
      {/* Top Bar: Compact on mobile, sticky 3-zone header on desktop */}
      <header className="border-b border-stone-200 bg-white/95 backdrop-blur-md md:sticky md:top-0 md:z-40">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:gap-8">
          {/* Zone 1: Brand Title */}
          <button
            type="button"
            onClick={() => navigateTab('home')}
            className="text-left text-lg font-bold tracking-tight text-teal-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            {UI_COPY.brandName[lang]}
          </button>

          {/* Zone 2: Desktop 3-Tab Links */}
          <nav
            aria-label={lang === 'bn' ? 'প্রধান মেনু' : 'Main navigation'}
            className="hidden md:flex md:items-center md:gap-7"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`min-h-[44px] px-1 text-base font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                    isActive
                      ? 'border-b-2 border-teal-700 text-teal-800'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={UI_COPY.switchLangAria[lang]}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-teal-700 bg-teal-50 px-4 py-2 text-sm font-bold text-teal-900 hover:bg-teal-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{UI_COPY.switchLangLabel[lang]}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {activeTab === 'home' && homeSubView === 'monthHome' && (
          <HomeView
            lang={lang}
            onOpenRoadmap={openRoadmap}
            onOpenGuide={() => navigateTab('guide')}
          />
        )}

        {activeTab === 'home' && homeSubView === 'roadmap' && (
          <RoadmapView
            lang={lang}
            layoutMode={roadmapLayout}
            onChangeLayoutMode={setRoadmapLayout}
            onBackHome={() => {
              setHomeSubView('monthHome');
              scrollTopSmooth();
            }}
            onSelectCluster={openClusterDetail}
          />
        )}

        {activeTab === 'home' && homeSubView === 'clusterDetail' && (
          <ClusterDetailView
            lang={lang}
            clusterId={selectedClusterId}
            onBackToRoadmap={openRoadmap}
            onSelectCluster={openClusterDetail}
          />
        )}

        {activeTab === 'charts' && (
          <ChartsAndPlayView lang={lang} onOpenChapter={openClusterDetail} />
        )}

        {activeTab === 'guide' && (
          <ParentGuideView lang={lang} onOpenMonth1Roadmap={openRoadmap} />
        )}
      </main>

      {/* Quiet Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-6 pt-4 text-center text-sm text-stone-500 sm:px-6">
        <p>
          {lang === 'bn'
            ? 'মায়ের হাতেখড়ি · ১ম মাস — হাতে-কলমে ও আনন্দের সাথে শেখার বই'
            : "Mom's Teaching Guide · Month 1 — A practical guidebook for joyful home learning"}
        </p>
      </footer>

      {/* Mobile Fixed 3-Tab Thumb Navigation Bar */}
      <nav
        aria-label={lang === 'bn' ? 'মোবাইল নেভিগেশন' : 'Mobile navigation'}
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-stone-200 bg-white/95 backdrop-blur-md md:hidden"
      >
        <div className="grid h-16 grid-cols-3 items-center">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.Icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateTab(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex h-full min-h-[44px] flex-col items-center justify-center gap-1 px-1 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-teal-700 ${
                  isActive
                    ? 'bg-teal-50/80 font-bold text-teal-800'
                    : 'bg-white font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute top-0 left-4 right-4 h-0.5 rounded-full bg-teal-700"
                    aria-hidden="true"
                  />
                )}
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="max-w-full truncate text-xs leading-tight">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
