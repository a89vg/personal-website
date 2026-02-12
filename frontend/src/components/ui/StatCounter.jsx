import { useCountUp } from '../../hooks/useCountUp';

export default function StatCounter({ value, suffix = '', label }) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent">
        {count}{suffix}
      </p>
      <p className="text-text-muted text-sm mt-1">{label}</p>
    </div>
  );
}
