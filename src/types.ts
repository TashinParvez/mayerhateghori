export type Language = 'bn' | 'en';

export type NavTab = 'home' | 'charts' | 'guide';

export type HomeScreenView = 'monthHome' | 'roadmap' | 'clusterDetail';

export type RoadmapLayoutMode = 'path' | 'list';

export interface BilingualText {
  bn: string;
  en: string;
}

export interface ClusterActivity {
  id: string;
  title: BilingualText;
  whatToDo: BilingualText;
  materials: BilingualText;
  whatToSay: BilingualText;
  benefit: BilingualText;
}

export interface ClusterExercise {
  title: BilingualText;
  intro: BilingualText;
  steps: BilingualText[];
  extraQuestionsTitle?: BilingualText;
  extraQuestions?: BilingualText[];
  benefitsTitle: BilingualText;
  benefits: BilingualText[];
  tip?: BilingualText;
}

export interface ClusterConnection {
  name: BilingualText;
  meaning: BilingualText;
  howApplied: BilingualText;
}

export interface PrintablePosterSpec {
  id: string;
  buttonLabel: BilingualText;
  posterTitle: BilingualText;
  posterSubtitle: BilingualText;
  items: BilingualText[];
  footerNote: BilingualText;
  filename: string;
  accentHex: string;
}

export interface LearningCluster {
  id: string;
  number: number;
  chapterTitle: BilingualText;
  pathLabel: BilingualText;
  shortTitle: BilingualText;
  intro: BilingualText;
  primaryTask: BilingualText;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  nodeColor: string;
  imageKey:
    | 'morningRoutine'
    | 'mindGym'
    | 'languageStory'
    | 'heartFeelings'
    | 'creativeArt'
    | 'naturePark'
    | 'kitchenHealth'
    | 'vegetableMarket';
  activities: ClusterActivity[];
  exercise?: ClusterExercise;
  expectedResult: BilingualText;
  japaneseLessonTitle: BilingualText;
  connections: ClusterConnection[];
  importantNote?: BilingualText;
  printablePoster: PrintablePosterSpec;
}

export interface DailyRoutineStep {
  id: string;
  emoji: string;
  timeOfDay: BilingualText;
  habit: BilingualText;
  description: BilingualText;
}

export interface GoldenRuleRow {
  id: string;
  number: number;
  situation: BilingualText;
  doAction: BilingualText;
  dontAction: BilingualText;
}

export interface ResistanceScenario {
  id: string;
  trigger: BilingualText;
  guidance: BilingualText;
  exactScript: BilingualText;
}

export interface FeelingOption {
  id: 'happy' | 'sad' | 'angry' | 'scared' | 'excited';
  label: BilingualText;
  parentPrompt: BilingualText;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

export interface KimsGameItem {
  id: string;
  name: BilingualText;
}

export interface SixMonthStep {
  monthNumber: number;
  monthLabel: BilingualText;
  title: BilingualText;
  goal: BilingualText;
  detail: BilingualText;
  isCurrent?: boolean;
}
