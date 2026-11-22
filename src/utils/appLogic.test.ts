import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkKimsGameGuess,
  computeRatioWidths,
  createKimsGameRound,
  formatCount,
  getNextClusterId,
  toBanglaDigits,
} from './appLogic';
import type { KimsGameItem } from '../types';

const SAMPLE_KIMS_ITEMS: KimsGameItem[] = [
  { id: 'spoon', name: { bn: 'চামচ', en: 'Spoon' } },
  { id: 'pencil', name: { bn: 'পেন্সিল', en: 'Pencil' } },
  { id: 'car', name: { bn: 'খেলনা গাড়ি', en: 'Toy car' } },
  { id: 'ball', name: { bn: 'বল', en: 'Ball' } },
  { id: 'book', name: { bn: 'ছোট বই', en: 'Small book' } },
];

test('toBanglaDigits converts ASCII numerals accurately', () => {
  assert.equal(toBanglaDigits(0), '০');
  assert.equal(toBanglaDigits(8), '৮');
  assert.equal(toBanglaDigits('60/40'), '৬০/৪০');
  assert.equal(formatCount(5, 'bn'), '৫');
  assert.equal(formatCount(5, 'en'), '5');
});

test('Kim Game round hides exactly one item and validates guesses', () => {
  const round = createKimsGameRound(SAMPLE_KIMS_ITEMS, 3, 1);
  assert.equal(round.options.length, 3);
  assert.equal(round.visibleItems.length, 2);
  assert.equal(round.hiddenItemId, 'pencil');
  assert.equal(checkKimsGameGuess(round, 'pencil'), true);
  assert.equal(checkKimsGameGuess(round, 'spoon'), false);
});

test('getNextClusterId returns next chapter or null at end', () => {
  const ids = ['c1', 'c2', 'c3'];
  assert.equal(getNextClusterId(ids, 'c1'), 'c2');
  assert.equal(getNextClusterId(ids, 'c2'), 'c3');
  assert.equal(getNextClusterId(ids, 'c3'), null);
  assert.equal(getNextClusterId(ids, 'unknown'), null);
});

test('computeRatioWidths calculates 60/40 and 70/30 visual bars accurately', () => {
  assert.deepEqual(computeRatioWidths(60), { primaryWidth: 60, secondaryWidth: 40 });
  assert.deepEqual(computeRatioWidths(70), { primaryWidth: 70, secondaryWidth: 30 });
});
