import { useState, useCallback, useEffect } from 'react';
import { BASE_ELEMENTS, combine, ELEMENTS, TOTAL_ELEMENTS } from '../data/elements';

const STORAGE_KEY = 'infinite-fusion-discovered';

function loadDiscovered(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const arr: string[] = JSON.parse(raw);
      return new Set(arr.filter(id => ELEMENTS[id]));
    }
  } catch {}
  return new Set(BASE_ELEMENTS);
}

function saveDiscovered(set: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export function useGameState() {
  const [discovered, setDiscovered] = useState<Set<string>>(loadDiscovered);
  const [selected, setSelected] = useState<string | null>(null);
  const [lastResult, setLastResult] = useState<{ id: string; isNew: boolean } | null>(null);

  useEffect(() => {
    saveDiscovered(discovered);
  }, [discovered]);

  const selectElement = useCallback((id: string) => {
    if (!selected) {
      setSelected(id);
      return;
    }
    if (selected === id) {
      setSelected(null);
      return;
    }
    // Try combine
    const result = combine(selected, id);
    if (result && ELEMENTS[result]) {
      const isNew = !discovered.has(result);
      if (isNew) {
        setDiscovered(prev => {
          const next = new Set(prev);
          next.add(result);
          return next;
        });
      }
      setLastResult({ id: result, isNew });
      setTimeout(() => setLastResult(null), 2000);
    } else {
      setLastResult(null);
    }
    setSelected(null);
  }, [selected, discovered]);

  const reset = useCallback(() => {
    const fresh = new Set(BASE_ELEMENTS);
    setDiscovered(fresh);
    setSelected(null);
    setLastResult(null);
    saveDiscovered(fresh);
  }, []);

  const shareText = `I've discovered ${discovered.size}/${TOTAL_ELEMENTS} elements in Infinite Fusion! 🧪✨`;

  return {
    discovered,
    selected,
    lastResult,
    selectElement,
    reset,
    shareText,
    totalElements: TOTAL_ELEMENTS,
  };
}
