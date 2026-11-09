import type { Metadata } from "next";
import { PaginaLegal } from "@/components/PaginaLegal";
import { disclaimer, site } from "@/lib/site";

export const metadata: Metadata = { title: "Términos y condiciones" };

export default function Terminos() {
  return (
    <PaginaLegal titulo="Términos y condiciones">
      <p>
        <strong>Borrador pendiente de revisión legal.</strong> Al reservar una
        sesión en {site.nombre} aceptas las siguientes condiciones.
      </p>

      <h2>1. Naturaleza del servicio</h2>
      <p>
        <strong>{disclaimer}</strong>
      </p>

      <h2>2. Quién puede usarlo</h2>
      <p>
        El servicio es exclusivo para personas mayores de 18 años. Al reservar
        declaras que cumples este requisito.
      </p>

      <h2>3. Reservas y pago</h2>
      <ul>
        <li>
          La cita solo queda confirmada cuando el pago se procesa por completo
          y de forma anticipada.
        </li>
        <li>
          Las sesiones se realizan únicamente mediante el enlace de
          videollamada que genera la plataforma. No se comparten números de
          teléfono ni cuentas personales.
        </li>
        <li>Las sesiones no se graban, y no está permitido grabarlas.</li>
      </ul>

      <h2>4. Cancelación y reprogramación</h2>
      <ul>
        <li>
          Puedes reprogramar sin costo avisando con al menos 24 horas de
          anticipación.
        </li>
        <li>
          Las cancelaciones con menos de 24 horas o la inasistencia no dan
          derecho a reembolso.
        </li>
        <li>
          Si la sesión no puede realizarse por una causa atribuible a{" "}
          {site.nombre}, se reprograma o se devuelve el pago completo.
        </li>
      </ul>

      <h2>5. Normas de conducta: cero tolerancia</h2>
      <p>
        Cualquier insinuación de tipo sexual, acoso, amenaza, discriminación o
        falta de respeto resultará en la terminación inmediata de la llamada,
        sin derecho a reembolso, y en el bloqueo de futuras reservas.
      </p>

      <h2>6. Emergencias</h2>
      <p>
        {site.nombre} no es un servicio de atención en crisis. Ante un riesgo
        para tu integridad o la de otra persona, comunícate con los servicios
        de emergencia de tu país.
      </p>

      <h2>7. Contacto</h2>
      <p>
        Escríbenos a <a className="underline" href={`mailto:${site.contacto}`}>{site.contacto}</a>.
      </p>
    </PaginaLegal>
  );
}
