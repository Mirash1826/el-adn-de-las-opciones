import type { ReactNode } from "react";

export function Seccion({
  id,
  etiqueta,
  titulo,
  intro,
  children,
  className = "",
}: {
  id?: string;
  etiqueta?: string;
  titulo: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          {etiqueta ? (
            <p className="text-xs font-extrabold uppercase tracking-widest text-rosa-600">
              {etiqueta}
            </p>
          ) : null}
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {titulo}
          </h2>
          {intro ? (
            <p className="mt-4 text-lg leading-relaxed text-tinta-suave">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
