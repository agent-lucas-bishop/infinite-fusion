import { ELEMENTS } from '../data/elements';

interface Props {
  selected: string | null;
  lastResult: { id: string; isNew: boolean } | null;
}

export function CombineZone({ selected, lastResult }: Props) {
  return (
    <div className="combine-zone">
      {lastResult ? (
        <div className={`result-display ${lastResult.isNew ? 'celebration' : 'known'}`}>
          {lastResult.isNew && <div className="sparkles">✨</div>}
          <span className="result-emoji">{ELEMENTS[lastResult.id]?.emoji}</span>
          <span className="result-name">{ELEMENTS[lastResult.id]?.name}</span>
          {lastResult.isNew && <div className="new-badge">NEW!</div>}
        </div>
      ) : selected ? (
        <div className="combine-hint">
          <span className="hint-emoji">{ELEMENTS[selected]?.emoji}</span>
          <span className="hint-text">{ELEMENTS[selected]?.name} + ?</span>
        </div>
      ) : (
        <div className="combine-hint idle">
          <span className="hint-text">Select two elements to combine</span>
        </div>
      )}
    </div>
  );
}
