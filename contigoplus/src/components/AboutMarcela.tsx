import { site } from "@/lib/site";
import { FotoPill } from "./FotoPill";

export function AboutMarcela() {
  return (
    <section id="marcela" className="bg-rosa-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[auto_1fr]">
        <FotoPill
          src={site.fotos.retrato}
          alt="Retrato de Marcela"
          tono="durazno"
          className="mx-auto h-80 w-56"
        />
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-rosa-600">
            Sobre Marcela
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Hola, soy Marcela.
          </h2>
          <blockquote className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-tinta-suave">
            <p>
              Mi trayectoria profesional me ha enseñado el valor transformador
              de escuchar con verdadera atención.
            </p>
            <p>
              Creé este proyecto informal para quienes no buscan una consulta
              clínica ni un proceso psicoterapéutico, sino simplemente la
              calidez de un espacio seguro donde hablar libremente, a su propio
              ritmo.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
