"use client";

import Link from "next/link";
import { useState } from "react";

export const animos = [
  {
    id: "bien",
    emoji: "😊",
    etiqueta: "Bien",
    respuesta: "Qué bueno leer eso. Los días buenos también merecen contarse.",
  },
  {
    id: "tranquilo",
    emoji: "😌",
    etiqueta: "En calma",
    respuesta: "La calma se disfruta más cuando se comparte un rato.",
  },
  {
    id: "cansado",
    emoji: "😮‍💨",
    etiqueta: "Con cansancio",
    respuesta: "Suena a un día largo. Soltarlo en voz alta suele aligerar.",
  },
  {
    id: "solo",
    emoji: "🌙",
    etiqueta: "Con soledad",
    respuesta: "Aquí hay alguien dispuesto a acompañarte un rato.",
  },
  {
    id: "abrumado",
    emoji: "🌧️",
    etiqueta: "Con agobio",
    respuesta:
      "Cuando todo se junta, ayuda ordenarlo hablando, sin prisa y sin juicios.",
  },
] as const;

export type AnimoId = (typeof animos)[number]["id"];

/** Saludo interactivo: "¿Cómo estás hoy?" */
export function CheckIn({
  saludo = "¿Cómo estás hoy?",
  alElegir,
}: {
  saludo?: string;
  alElegir?: (id: AnimoId) => void;
}) {
  const [elegido, setElegido] = useState<AnimoId | null>(null);
  const actual = animos.find((a) => a.id === elegido);

  return (
    <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-cielo-200/40 ring-1 ring-cielo-100 sm:p-10">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        {saludo}
      </h2>
      <div
        role="group"
        aria-label="Elige cómo te sientes"
        className="mt-6 flex flex-wrap gap-3"
      >
        {animos.map((a) => (
          <button
            key={a.id}
            type="button"
            aria-pressed={elegido === a.id}
            onClick={() => {
              setElegido(a.id);
              alElegir?.(a.id);
            }}
            className={`inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full px-5 font-bold transition-colors ${
              elegido === a.id
                ? "bg-tinta text-white"
                : "bg-cielo-50 hover:bg-cielo-100"
            }`}
          >
            <span aria-hidden>{a.emoji}</span> {a.etiqueta}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="mt-6 min-h-24">
        {actual ? (
          <div className="rounded-2xl bg-rosa-50 p-5">
            <p className="text-lg leading-relaxed">{actual.respuesta}</p>
            <p className="mt-3 font-bold">
              ¿Quieres charlar un rato?{" "}
              <Link href="/reserva" className="text-rosa-600 underline">
                Agenda tu espacio
              </Link>
            </p>
            {actual.id === "abrumado" || actual.id === "solo" ? (
              <p className="mt-3 text-sm text-tinta-suave">
                Si sientes que estás en riesgo, no esperes:{" "}
                <Link href="/#ayuda-urgente" className="underline">
                  mira las líneas de ayuda urgente
                </Link>
                .
              </p>
            ) : null}
          </div>
        ) : (
          <p className="text-tinta-suave">
            Elige una opción. No hay respuestas correctas.
          </p>
        )}
      </div>
    </div>
  );
}
