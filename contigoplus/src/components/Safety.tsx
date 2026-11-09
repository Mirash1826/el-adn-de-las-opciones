import { CreditCard, Link2, ShieldAlert } from "lucide-react";
import { Seccion } from "./Seccion";

const reglas = [
  {
    icono: ShieldAlert,
    titulo: "Cero tolerancia",
    texto:
      "Cualquier insinuación sexual, acoso o falta de respeto termina la llamada de inmediato, sin reembolso.",
  },
  {
    icono: Link2,
    titulo: "Solo por enlace seguro",
    texto:
      "Las sesiones se hacen únicamente con el enlace que genera la plataforma. No se comparten teléfonos ni redes personales.",
  },
  {
    icono: CreditCard,
    titulo: "Pago anticipado",
    texto:
      "La cita queda bloqueada en la agenda solo cuando el pago está confirmado.",
  },
];

export function Safety() {
  return (
    <Seccion
      etiqueta="Reglas del espacio"
      titulo="Respeto en las dos direcciones"
      className="bg-lila-100/50"
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {reglas.map(({ icono: Icono, titulo, texto }) => (
          <li key={titulo} className="rounded-3xl bg-white p-7">
            <Icono className="size-7 text-rosa-600" aria-hidden strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-xl font-semibold">{titulo}</h3>
            <p className="mt-2 leading-relaxed text-tinta-suave">{texto}</p>
          </li>
        ))}
      </ul>
    </Seccion>
  );
}
