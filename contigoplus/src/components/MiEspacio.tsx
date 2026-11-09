"use client";

import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useYo } from "@/lib/useYo";
import { Boton } from "./Boton";
import { animos, CheckIn, type AnimoId } from "./CheckIn";

type Registro = { fecha: string; animo: AnimoId };
const CLAVE = "contigo:animos";

function leer(): Registro[] {
  try {
    return JSON.parse(localStorage.getItem(CLAVE) ?? "[]");
  } catch {
    return [];
  }
}

function saludoPorHora() {
  const h = new Date().getHours();
  if (h < 12) return "Buenos días";
  if (h < 19) return "Buenas tardes";
  return "Buenas noches";
}

export function MiEspacio() {
  const { cargando, usuario } = useYo();
  const [historial, setHistorial] = useState<Registro[]>([]);
  const [saludo, setSaludo] = useState("Hola");

  useEffect(() => {
    // Datos del navegador: solo disponibles tras montar.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHistorial(leer());
    setSaludo(saludoPorHora());
  }, []);

  function guardar(animo: AnimoId) {
    const hoy = new Date().toISOString().slice(0, 10);
    const nuevo = [
      { fecha: hoy, animo },
      ...leer().filter((r) => r.fecha !== hoy),
    ].slice(0, 14);
    try {
      localStorage.setItem(CLAVE, JSON.stringify(nuevo));
    } catch {}
    setHistorial(nuevo);
  }

  const nombre = usuario?.nombre?.split(" ")[0];

  return (
    <div className="space-y-8">
      <CheckIn
        saludo={`${saludo}${nombre ? `, ${nombre}` : ""}. ¿Cómo te sientes hoy?`}
        alElegir={guardar}
      />

      {historial.length > 0 ? (
        <section className="rounded-3xl bg-white p-7 ring-1 ring-rosa-100">
          <h2 className="font-display text-xl font-semibold">Tus últimos días</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {historial.map((r) => {
              const a = animos.find((x) => x.id === r.animo);
              return (
                <li
                  key={r.fecha}
                  className="rounded-2xl bg-cielo-50 px-4 py-2 text-sm"
                >
                  <span aria-hidden>{a?.emoji} </span>
                  <span className="font-bold">{a?.etiqueta}</span>{" "}
                  <span className="text-tinta-suave">
                    {new Date(r.fecha + "T12:00").toLocaleDateString("es", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm text-tinta-suave">
            Esto se guarda solo en este dispositivo.
          </p>
        </section>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <Boton href="/reserva">Agendar una charla</Boton>
        {cargando ? null : usuario ? (
          <button
            type="button"
            onClick={() => signOut({ redirectTo: "/" })}
            className="min-h-12 cursor-pointer rounded-full px-5 font-bold text-tinta-suave hover:bg-white"
          >
            Cerrar sesión
          </button>
        ) : (
          <Boton href="/acceso" variante="suave">
            Entrar con Google
          </Boton>
        )}
      </div>
    </div>
  );
}
