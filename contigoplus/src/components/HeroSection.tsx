import { HeartHandshake, ShieldCheck, Video } from "lucide-react";
import { site } from "@/lib/site";
import { Boton } from "./Boton";
import { FotoPill } from "./FotoPill";

const tonos = ["cielo", "durazno", "lila", "menta"] as const;

export function HeroSection() {
  return (
    <section className="fondo-suave overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <p className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-rosa-600 ring-1 ring-rosa-200">
            Escucha y compañía virtual
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            A veces solo necesitas a alguien neutral que te escuche{" "}
            <em className="text-rosa-600">sin juzgar.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta-suave">
            Compañía y escucha 100% virtual por videollamada o voz. Habla de tu
            día, desahógate o comparte de 1 a 3 horas de conversación ligera, a
            tu propio ritmo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Boton href="/reserva">Agendar mi charla ahora</Boton>
            <Boton href="/#como-funciona" variante="suave">
              Cómo funciona
            </Boton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-tinta-suave">
            <li className="flex items-center gap-2">
              <Video className="size-4 text-cielo-700" aria-hidden /> Video o
              solo voz
            </li>
            <li className="flex items-center gap-2">
              <HeartHandshake className="size-4 text-cielo-700" aria-hidden />{" "}
              Sin sermones
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-cielo-700" aria-hidden />{" "}
              Espacio de respeto
            </li>
          </ul>
        </div>

        <div className="flex h-[21rem] items-stretch justify-center gap-2 sm:h-[28rem] sm:gap-3">
          {site.fotos.tiras.map((src, i) => (
            <FotoPill
              key={i}
              src={src}
              tono={tonos[i % tonos.length]}
              className={`w-10 sm:w-14 ${i % 2 ? "mt-8" : "mb-8"} ${i < 2 ? "hidden sm:block" : ""}`}
            />
          ))}
          <FotoPill
            src={site.fotos.principal}
            alt="Marcela sonriendo en una sala con luz cálida"
            tono="rosa"
            className="flotar w-52 rounded-[3rem] ring-cielo-200 sm:w-64"
          >
            <div className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-2">
              <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-extrabold">
                Marcela
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-tinta-suave">
                Te escucho sin juzgar
              </span>
            </div>
          </FotoPill>
        </div>
      </div>
    </section>
  );
}
