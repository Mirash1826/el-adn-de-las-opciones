import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reserva } from "@/components/Reserva";

export const metadata: Metadata = { title: "Agendar mi charla" };

export default function PaginaReserva() {
  return (
    <>
      <Header />
      <main className="fondo-suave">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h1 className="font-display text-4xl font-semibold tracking-tight">
            Agenda tu charla
          </h1>
          <p className="mt-3 text-lg text-tinta-suave">
            Tres pasos cortos y tu espacio queda reservado.
          </p>
          <div className="mt-10">
            <Suspense>
              <Reserva />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
