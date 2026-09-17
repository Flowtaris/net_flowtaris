interface StatusBadgeProps {
  status: 'operational' | 'degraded' | 'outage';
  label?: string;
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const colors = {
    operational: 'bg-[var(--color-brand-accent)]',
    degraded: 'bg-[var(--color-brand-gold)]',
    outage: 'bg-red-500'
  };

  const textColors = {
    operational: 'text-[var(--color-brand-accent)]',
    degraded: 'text-[var(--color-brand-gold)]',
    outage: 'text-red-500'
  };

  const defaultLabels = {
    operational: 'Operational',
    degraded: 'Degraded',
    outage: 'Outage'
  };

  const displayLabel = label || defaultLabels[status];

  return (
    <div className="flex items-center space-x-2">
      <div className="relative flex h-3 w-3">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colors[status]}`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 ${colors[status]}`}></span>
      </div>
      <span className={`text-sm font-medium ${textColors[status]}`}>{displayLabel}</span>
    </div>
  );
}

