import { ChevronDown } from "lucide-react";
import { Seccion } from "./Seccion";

const preguntas = [
  {
    p: "¿Esto es terapia?",
    r: "No. Es un servicio informal de escucha y conversación. No hay diagnóstico, tratamiento ni seguimiento clínico. Si necesitas atención psicológica, lo indicado es acudir a un profesional en consulta.",
  },
  {
    p: "¿De qué puedo hablar?",
    r: "De lo que quieras: tu día, tu trabajo, una decisión que te da vueltas, una película, un proyecto. También puedes quedarte en silencio trabajando mientras te acompañan.",
  },
  {
    p: "¿Tengo que encender la cámara?",
    r: "No. Puedes conectarte con video o solo con voz, y cambiar durante la llamada.",
  },
  {
    p: "¿Lo que cuente es confidencial?",
    r: "Sí. Lo que compartes se queda en la conversación. Las sesiones no se graban.",
  },
  {
    p: "¿Puedo cancelar o reprogramar?",
    r: "Sí, con al menos 24 horas de anticipación puedes reprogramar sin costo. Las condiciones completas están en los Términos.",
  },
  {
    p: "¿Qué pasa si estoy en una crisis?",
    r: "Este espacio no atiende emergencias. Si sientes que tu integridad está en riesgo, comunícate de inmediato con las líneas de emergencia de tu país. Más abajo encuentras un listado.",
  },
];

export function FAQ() {
  return (
    <Seccion id="preguntas" etiqueta="Preguntas frecuentes" titulo="Lo que suelen preguntarnos">
      <div className="max-w-3xl space-y-3">
        {preguntas.map(({ p, r }) => (
          <details
            key={p}
            className="group rounded-2xl bg-white px-6 py-4 ring-1 ring-rosa-100"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
              {p}
              <ChevronDown
                className="size-5 shrink-0 transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="mt-3 leading-relaxed text-tinta-suave">{r}</p>
          </details>
        ))}
      </div>
    </Seccion>
  );
}
