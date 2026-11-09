import { LifeBuoy } from "lucide-react";
import { lineasDeAyuda } from "@/lib/site";

export function HelpLines() {
  return (
    <section id="ayuda-urgente" className="pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-cielo-100 p-7 sm:p-10">
          <h2 className="flex items-center gap-3 font-display text-2xl font-semibold">
            <LifeBuoy className="size-6" aria-hidden /> ¿Necesitas ayuda
            urgente?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            Este servicio no atiende crisis ni emergencias. Si tú o alguien
            cercano está en riesgo, llama ahora a la línea de tu país:
          </p>
          <dl className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {lineasDeAyuda.map((l) => (
              <div key={l.pais} className="flex flex-wrap gap-x-2">
                <dt className="font-extrabold">{l.pais}:</dt>
                <dd>{l.linea}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
