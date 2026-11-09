import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PaginaLegal({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          {titulo}
        </h1>
        <div className="mt-8 space-y-4 leading-relaxed text-tinta-suave [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-tinta [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-tinta">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
