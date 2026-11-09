import { Brain, Laptop, MoonStar, Sunset } from "lucide-react";
import { Seccion } from "./Seccion";

const casos = [
  {
    icono: Sunset,
    fondo: "bg-rosa-100",
    titulo: "Desahogo al final del día",
    texto:
      "Para cuando tuviste una jornada agotadora y no quieres abrumar a tu pareja, tu familia o tus amigos.",
  },
  {
    icono: MoonStar,
    fondo: "bg-lila-100",
    titulo: "Noches de soledad o insomnio",
    texto:
      "Cuando necesitas conversar de temas ligeros (cine, libros, proyectos, la vida cotidiana) para despejar la mente.",
  },
  {
    icono: Brain,
    fondo: "bg-cielo-100",
    titulo: "Pensar en voz alta",
    texto:
      "Para ordenar ideas o tomar decisiones personales con alguien neutral que no te dará sermones ni juzgará tus elecciones.",
  },
  {
    icono: Laptop,
    fondo: "bg-menta-100",
    titulo: "Compañía mientras trabajas",
    texto:
      "Si teletrabajas o estudias a solas y quieres una presencia de fondo que te ayude a avanzar en tus tareas.",
  },
];

export function UseCases() {
  return (
    <Seccion
      id="para-quien"
      etiqueta="Para quién es"
      titulo="Un espacio para cuando solo quieres hablar"
      intro="No hace falta tener un problema. Basta con querer conversar."
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {casos.map(({ icono: Icono, fondo, titulo, texto }) => (
          <li
            key={titulo}
            className="rounded-3xl bg-white p-7 ring-1 ring-rosa-100"
          >
            <span
              className={`flex size-12 items-center justify-center rounded-2xl ${fondo}`}
            >
              <Icono className="size-6" aria-hidden strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">
              {titulo}
            </h3>
            <p className="mt-2 leading-relaxed text-tinta-suave">{texto}</p>
          </li>
        ))}
      </ul>
    </Seccion>
  );
}
