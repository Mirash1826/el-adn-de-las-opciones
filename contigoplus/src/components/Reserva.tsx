"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { paquetes, site } from "@/lib/site";
import { consentimientos, LegalModal } from "./LegalModal";

export function Reserva() {
  const inicial = useSearchParams().get("paquete");
  const [paquete, setPaquete] = useState(
    paquetes.some((p) => p.id === inicial) ? inicial! : "completo",
  );
  const [marcados, setMarcados] = useState<Record<string, boolean>>({});
  const [agenda, setAgenda] = useState(false);
  const todo = consentimientos.every((c) => marcados[c.id]);

  return (
    <div className="space-y-8">
      <fieldset>
        <legend className="font-display text-xl font-semibold">
          1. Elige tu paquete
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {paquetes.map((p) => (
            <label
              key={p.id}
              className={`cursor-pointer rounded-2xl bg-white p-5 transition-shadow ${
                paquete === p.id
                  ? "ring-2 ring-tinta"
                  : "ring-1 ring-rosa-100 hover:ring-rosa-300"
              }`}
            >
              <input
                type="radio"
                name="paquete"
                value={p.id}
                checked={paquete === p.id}
                onChange={() => {
                  setPaquete(p.id);
                  setAgenda(false);
                }}
                className="sr-only"
              />
              <span className="block font-bold">{p.nombre}</span>
              <span className="block text-sm text-tinta-suave">
                {p.duracion}
                {p.precio !== null ? ` · $${p.precio} USD` : ""}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <h2 className="mb-4 font-display text-xl font-semibold">
          2. Acepta las condiciones
        </h2>
        <LegalModal
          marcados={marcados}
          alCambiar={(id, v) => {
            setMarcados((m) => ({ ...m, [id]: v }));
            if (!v) setAgenda(false);
          }}
        />
      </div>

      <div>
        <h2 className="mb-4 font-display text-xl font-semibold">
          3. Elige día y hora
        </h2>
        {!agenda ? (
          <>
            <button
              type="button"
              disabled={!todo}
              onClick={() => setAgenda(true)}
              className="inline-flex min-h-12 cursor-pointer items-center rounded-full bg-tinta px-7 font-bold text-white hover:bg-[#463a6b] disabled:cursor-not-allowed disabled:bg-tinta/35"
            >
              Continuar a la agenda
            </button>
            {!todo ? (
              <p className="mt-3 text-sm text-tinta-suave">
                Marca las tres casillas para continuar.
              </p>
            ) : null}
          </>
        ) : site.calLink ? (
          <iframe
            title="Agenda de reservas"
            src={`https://cal.com/${site.calLink}?paquete=${paquete}`}
            className="h-[44rem] w-full rounded-3xl bg-white ring-1 ring-rosa-100"
          />
        ) : (
          <div className="rounded-3xl bg-cielo-100 p-7" role="status">
            <p className="font-display text-xl font-semibold">
              La agenda abre muy pronto
            </p>
            <p className="mt-2 leading-relaxed">
              Todavía estamos conectando el calendario y los pagos. Mientras
              tanto, escríbenos a{" "}
              <a className="font-bold underline" href={`mailto:${site.contacto}`}>
                {site.contacto}
              </a>{" "}
              y te avisamos en cuanto esté lista.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
