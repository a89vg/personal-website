import clsx from 'clsx';

const variantStyles = {
  default: 'text-text-muted bg-bg-elevated border-border hover:border-accent/40 hover:text-accent',
  cyan: 'text-cyan-300 bg-cyan-400/10 border-cyan-400/20 hover:border-cyan-400/40 hover:text-cyan-200',
  purple: 'text-purple-300 bg-purple-400/10 border-purple-400/20 hover:border-purple-400/40 hover:text-purple-200',
  blue: 'text-blue-300 bg-blue-400/10 border-blue-400/20 hover:border-blue-400/40 hover:text-blue-200',
  green: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20 hover:border-emerald-400/40 hover:text-emerald-200',
  amber: 'text-amber-300 bg-amber-400/10 border-amber-400/20 hover:border-amber-400/40 hover:text-amber-200',
};

export default function TechBadge({ children, variant = 'default' }) {
  return (
    <span className={clsx(
      'inline-block px-4 py-2 text-sm font-medium border rounded-lg transition-all duration-200',
      variantStyles[variant] || variantStyles.default
    )}>
      {children}
    </span>
  );
}
