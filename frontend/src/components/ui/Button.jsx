import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', href, to, className, ...props }) {
  const base = 'inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer';
  const variants = {
    primary: 'bg-gradient-to-r from-accent to-orange text-bg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5',
    secondary: 'border border-border text-text-muted hover:border-accent hover:text-accent hover:shadow-md hover:shadow-accent/10 hover:-translate-y-0.5',
  };

  const classes = clsx(base, variants[variant], className);

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }
  return <button className={classes} {...props}>{children}</button>;
}
