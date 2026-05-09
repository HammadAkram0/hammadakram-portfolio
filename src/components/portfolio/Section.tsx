import type { ReactNode } from "react";

export function Section({
  id,
  number,
  title,
  subtitle,
  children,
}: {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end gap-4 mb-3">
          <span className="font-mono text-sm text-primary">{number}.</span>
          <div className="h-px flex-1 max-w-[60px] bg-primary/40" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl mb-12">{subtitle}</p>
        )}
        {!subtitle && <div className="mb-12" />}
        {children}
      </div>
    </section>
  );
}
