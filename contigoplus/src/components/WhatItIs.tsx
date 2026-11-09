import { Check, X } from "lucide-react";
import { Seccion } from "./Seccion";

const si = [
  "Una conversación tranquila con alguien que te presta toda su atención.",
  "Un lugar para desahogarte sin que nadie te juzgue ni te dé sermones.",
  "Compañía de fondo mientras trabajas, estudias o no puedes dormir.",
  "Un trato respetuoso, con horarios y límites claros.",
];
const no = [
  "No es psicoterapia ni consulta clínica.",
  "No es diagnóstico ni tratamiento de salud mental.",
  "No es atención de crisis ni de emergencias.",
  "No es un servicio de citas ni de contenido romántico o sexual.",
];

export function WhatItIs() {
  return (
    <Seccion
      etiqueta="Con total claridad"
      titulo="Qué es y qué no es este espacio"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl bg-menta-100 p-7">
          <h3 className="font-display text-xl font-semibold">Sí es</h3>
          <ul className="mt-4 space-y-3">
            {si.map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed">
                <Check className="mt-1 size-5 shrink-0" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-rosa-100 p-7">
          <h3 className="font-display text-xl font-semibold">No es</h3>
          <ul className="mt-4 space-y-3">
            {no.map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed">
                <X className="mt-1 size-5 shrink-0" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Seccion>
  );
}
