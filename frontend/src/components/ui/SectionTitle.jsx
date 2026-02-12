import ScrollReveal from './ScrollReveal';

export default function SectionTitle({ children }) {
  return (
    <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-accent via-orange to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
        {children}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-accent via-orange to-accent bg-[length:200%_auto] mx-auto rounded-full mb-12 animate-gradient" />
    </ScrollReveal>
  );
}
