import { Seccion } from "./Seccion";

const pasos = [
  {
    titulo: "Elige tu paquete",
    texto: "Una, dos o tres horas. Tú decides cuánto tiempo necesitas.",
  },
  {
    titulo: "Agenda y paga",
    texto:
      "Escoges día y hora. Tu cita queda reservada en cuanto se confirma el pago.",
  },
  {
    titulo: "Recibe tu enlace",
    texto:
      "Te llega por correo el enlace de la videollamada. Entras con cámara o solo con voz.",
  },
];

export function HowItWorks() {
  return (
    <Seccion
      id="como-funciona"
      etiqueta="Cómo funciona"
      titulo="Tres pasos y ya estamos conversando"
      className="bg-cielo-50"
    >
      <ol className="grid gap-5 md:grid-cols-3">
        {pasos.map((p, i) => (
          <li key={p.titulo} className="rounded-3xl bg-white p-7">
            <span className="flex size-10 items-center justify-center rounded-full bg-cielo-200 font-display text-lg font-semibold">
              {i + 1}
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">
              {p.titulo}
            </h3>
            <p className="mt-2 leading-relaxed text-tinta-suave">{p.texto}</p>
          </li>
        ))}
      </ol>
    </Seccion>
  );
}
