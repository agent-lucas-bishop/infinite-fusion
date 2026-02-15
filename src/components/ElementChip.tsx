import { ELEMENTS, CATEGORY_COLORS } from '../data/elements';

interface Props {
  id: string;
  isSelected?: boolean;
  isNew?: boolean;
  onClick?: () => void;
}

export function ElementChip({ id, isSelected, isNew, onClick }: Props) {
  const el = ELEMENTS[id];
  if (!el) return null;
  const colors = CATEGORY_COLORS[el.category];

  return (
    <button
      onClick={onClick}
      className={`element-chip ${isSelected ? 'selected' : ''} ${isNew ? 'new-discovery' : ''}`}
      style={{
        background: isSelected
          ? `linear-gradient(135deg, ${colors.border}, ${colors.bg})`
          : `linear-gradient(135deg, ${colors.bg}, white)`,
        borderColor: isSelected ? colors.text : colors.border,
        color: colors.text,
      }}
    >
      <span className="chip-emoji">{el.emoji}</span>
      <span className="chip-name">{el.name}</span>
    </button>
  );
}
