import clsx from 'clsx';

export default function Card({ children, className, hover = true }) {
  return (
    <div
      className={clsx(
        'relative bg-bg-card border border-border rounded-2xl p-6 transition-all duration-300 shadow-md shadow-black/20',
        'before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:rounded-t-2xl before:bg-gradient-to-r before:from-accent before:via-orange before:to-accent',
        hover && 'hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/15',
        className
      )}
    >
      {children}
    </div>
  );
}
