"use client";

import Link from "next/link";
import { disclaimer } from "@/lib/site";

export const consentimientos = [
  {
    id: "disclaimer",
    texto: (
      <>
        Entiendo que es un servicio informal de escucha y{" "}
        <strong>no es psicoterapia</strong>, consulta clínica ni atención en
        crisis.
      </>
    ),
  },
  { id: "edad", texto: <>Confirmo que soy mayor de 18 años.</> },
  {
    id: "conducta",
    texto: (
      <>
        Acepto los{" "}
        <Link href="/terminos" target="_blank" className="underline">
          Términos y condiciones
        </Link>
        , incluida la norma de cero tolerancia: cualquier insinuación sexual,
        acoso o falta de respeto termina la llamada sin reembolso.
      </>
    ),
  },
] as const;

/** Aceptación legal obligatoria antes de agendar y pagar. */
export function LegalModal({
  marcados,
  alCambiar,
}: {
  marcados: Record<string, boolean>;
  alCambiar: (id: string, valor: boolean) => void;
}) {
  return (
    <fieldset className="rounded-3xl bg-white p-7 ring-1 ring-rosa-200">
      <legend className="px-2 font-display text-xl font-semibold">
        Antes de continuar
      </legend>
      <p className="rounded-2xl bg-rosa-50 p-4 text-sm leading-relaxed">
        {disclaimer}
      </p>
      <div className="mt-5 space-y-4">
        {consentimientos.map((c) => (
          <label key={c.id} className="flex cursor-pointer gap-3 leading-relaxed">
            <input
              type="checkbox"
              className="mt-1 size-5 shrink-0 accent-[#33294f]"
              checked={Boolean(marcados[c.id])}
              onChange={(e) => alCambiar(c.id, e.target.checked)}
            />
            <span>{c.texto}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
