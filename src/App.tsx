import { useState } from 'react';
import { useGameState } from './hooks/useGameState';
import { ElementChip } from './components/ElementChip';
import { CombineZone } from './components/CombineZone';
import { ELEMENTS, CATEGORY_COLORS } from './data/elements';
import type { Category } from './data/elements';
import './App.css';

const CATEGORY_LABELS: Record<Category, string> = {
  basic: '🔵 Basic',
  nature: '🌿 Nature',
  weather: '🌤️ Weather',
  technology: '🔧 Technology',
  food: '🍕 Food',
  space: '🚀 Space',
  mythical: '🐉 Mythical',
  material: '⚙️ Materials',
  life: '🌱 Life',
  concept: '💡 Concepts',
  energy: '⚡ Energy',
};

const CATEGORY_ORDER: Category[] = [
  'basic', 'nature', 'weather', 'material', 'life', 'energy',
  'technology', 'food', 'space', 'mythical', 'concept',
];

function App() {
  const { discovered, selected, lastResult, selectElement, reset, shareText, totalElements } = useGameState();
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  // Group discovered elements by category
  const discoveredArr = [...discovered].sort((a, b) => {
    const ea = ELEMENTS[a], eb = ELEMENTS[b];
    if (!ea || !eb) return 0;
    const ci = CATEGORY_ORDER.indexOf(ea.category) - CATEGORY_ORDER.indexOf(eb.category);
    if (ci !== 0) return ci;
    return ea.name.localeCompare(eb.name);
  });

  const filtered = filter === 'all'
    ? discoveredArr
    : discoveredArr.filter(id => ELEMENTS[id]?.category === filter);

  // Count per category
  const categoryCounts: Record<string, number> = {};
  discoveredArr.forEach(id => {
    const cat = ELEMENTS[id]?.category;
    if (cat) categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  });

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ text: shareText }); } catch {}
    } else {
      await navigator.clipboard.writeText(shareText);
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">
          <span className="title-icon">🧪</span>
          Infinite Fusion
        </h1>
        <div className="counter">
          {discovered.size} / {totalElements} discovered
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(discovered.size / totalElements) * 100}%` }}
          />
        </div>
      </header>

      <CombineZone selected={selected} lastResult={lastResult} />

      <div className="filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({discovered.size})
        </button>
        {CATEGORY_ORDER.map(cat => {
          const count = categoryCounts[cat] || 0;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              style={{
                borderColor: filter === cat ? CATEGORY_COLORS[cat].text : CATEGORY_COLORS[cat].border,
                background: filter === cat ? CATEGORY_COLORS[cat].bg : 'white',
                color: CATEGORY_COLORS[cat].text,
              }}
            >
              {CATEGORY_LABELS[cat]} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid">
        {filtered.map(id => (
          <ElementChip
            key={id}
            id={id}
            isSelected={selected === id}
            isNew={lastResult?.id === id && lastResult.isNew}
            onClick={() => selectElement(id)}
          />
        ))}
      </div>

      <footer className="footer">
        <button className="action-btn share-btn" onClick={handleShare}>
          📤 Share Progress
        </button>
        {showConfirmReset ? (
          <div className="reset-confirm">
            <span>Reset all progress?</span>
            <button className="action-btn danger" onClick={() => { reset(); setShowConfirmReset(false); }}>
              Yes, reset
            </button>
            <button className="action-btn" onClick={() => setShowConfirmReset(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="action-btn reset-btn" onClick={() => setShowConfirmReset(true)}>
            🔄 Start Over
          </button>
        )}
      </footer>
    </div>
  );
}

export default App;
