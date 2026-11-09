import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GoogleButton } from "@/components/GoogleButton";
import { Header } from "@/components/Header";

export const metadata: Metadata = { title: "Entrar" };

export default function Acceso() {
  return (
    <>
      <Header />
      <main className="fondo-suave flex flex-1 items-center">
        <div className="mx-auto w-full max-w-md px-4 py-16">
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-xl shadow-rosa-200/40 ring-1 ring-rosa-100">
            <h1 className="font-display text-3xl font-semibold">
              Qué bueno verte
            </h1>
            <p className="mt-3 text-tinta-suave">
              Entra con tu cuenta de Google. Sin formularios ni contraseñas
              nuevas.
            </p>
            <div className="mt-7">
              <GoogleButton />
            </div>
            <p className="mt-6 text-xs leading-relaxed text-tinta-suave">
              Al entrar aceptas los{" "}
              <Link href="/terminos" className="underline">Términos</Link> y la{" "}
              <Link href="/privacidad" className="underline">Política de privacidad</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
