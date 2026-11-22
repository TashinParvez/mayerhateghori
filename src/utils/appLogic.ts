import type { KimsGameItem, Language } from '../types';

const BANGLA_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'] as const;

export function toBanglaDigits(input: number | string): string {
  return String(input).replace(/\d/g, (digit) => {
    const idx = Number(digit);
    return BANGLA_DIGITS[idx] ?? digit;
  });
}

export function formatCount(value: number, lang: Language): string {
  return lang === 'bn' ? toBanglaDigits(value) : String(value);
}

export interface KimsGameRound {
  visibleItems: KimsGameItem[];
  hiddenItemId: string;
  options: KimsGameItem[];
}

export function createKimsGameRound(
  allItems: readonly KimsGameItem[],
  itemCount: 3 | 5,
  seedIndex?: number,
): KimsGameRound {
  const pool = allItems.slice(0, Math.min(itemCount, allItems.length));
  if (pool.length === 0) {
    return { visibleItems: [], hiddenItemId: '', options: [] };
  }
  const chosenIndex =
    typeof seedIndex === 'number'
      ? Math.abs(seedIndex) % pool.length
      : Math.floor(Math.random() * pool.length);

  const hiddenItem = pool[chosenIndex];
  const visibleItems = pool.filter((item) => item.id !== hiddenItem.id);

  return {
    visibleItems,
    hiddenItemId: hiddenItem.id,
    options: pool,
  };
}

export function checkKimsGameGuess(
  round: KimsGameRound,
  guessedItemId: string,
): boolean {
  if (!round.hiddenItemId) {
    return false;
  }
  return round.hiddenItemId === guessedItemId;
}

export function getNextClusterId(
  clusterIds: readonly string[],
  currentId: string,
): string | null {
  const idx = clusterIds.indexOf(currentId);
  if (idx < 0 || idx >= clusterIds.length - 1) {
    return null;
  }
  return clusterIds[idx + 1];
}

export function computeRatioWidths(primaryPercent: number): {
  primaryWidth: number;
  secondaryWidth: number;
} {
  const clamped = Math.max(0, Math.min(100, Math.round(primaryPercent)));
  return {
    primaryWidth: clamped,
    secondaryWidth: 100 - clamped,
  };
}
