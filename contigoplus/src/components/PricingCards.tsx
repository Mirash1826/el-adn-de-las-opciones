import { Clock } from "lucide-react";
import { paquetes } from "@/lib/site";
import { Boton } from "./Boton";
import { Seccion } from "./Seccion";

export function PricingCards() {
  return (
    <Seccion
      id="paquetes"
      etiqueta="Paquetes"
      titulo="Elige cuánto tiempo quieres compartir"
      intro="Todas las sesiones son por videollamada o solo voz, como te sientas más a gusto."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {paquetes.map((p) => (
          <li
            key={p.id}
            className={`flex flex-col rounded-3xl bg-white p-7 ${
              p.destacado
                ? "ring-2 ring-rosa-300 shadow-xl shadow-rosa-200/50"
                : "ring-1 ring-rosa-100"
            }`}
          >
            {p.destacado ? (
              <span className="mb-3 self-start rounded-full bg-rosa-100 px-3 py-1 text-xs font-extrabold text-rosa-600">
                El más elegido
              </span>
            ) : null}
            <h3 className="font-display text-2xl font-semibold">{p.nombre}</h3>
            <p className="mt-2 flex items-center gap-2 font-bold text-cielo-700">
              <Clock className="size-4" aria-hidden /> {p.duracion}
            </p>
            <p className="mt-4 flex-1 leading-relaxed text-tinta-suave">
              {p.objetivo}
            </p>
            <p className="mt-6 font-display text-3xl font-semibold">
              {p.precio === null ? (
                <span className="text-lg text-tinta-suave">
                  Precio por confirmar
                </span>
              ) : (
                <>
                  ${p.precio}{" "}
                  <span className="text-base text-tinta-suave">USD</span>
                </>
              )}
            </p>
            <Boton
              href={`/reserva?paquete=${p.id}`}
              variante={p.destacado ? "primario" : "suave"}
              className="mt-5"
            >
              Reservar
            </Boton>
          </li>
        ))}
      </ul>
    </Seccion>
  );
}
