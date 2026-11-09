import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MiEspacio } from "@/components/MiEspacio";

export const metadata: Metadata = { title: "Mi espacio" };

export default function PaginaMiEspacio() {
  return (
    <>
      <Header />
      <main className="fondo-suave flex-1">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <MiEspacio />
        </div>
      </main>
      <Footer />
    </>
  );
}
