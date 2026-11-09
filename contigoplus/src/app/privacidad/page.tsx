import type { Metadata } from "next";
import { PaginaLegal } from "@/components/PaginaLegal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function Privacidad() {
  return (
    <PaginaLegal titulo="Política de privacidad">
      <p>
        <strong>Borrador pendiente de revisión legal.</strong> Aquí explicamos
        qué datos tratamos en {site.nombre} y para qué.
      </p>

      <h2>Datos que recogemos</h2>
      <ul>
        <li>
          <strong>Cuenta:</strong> si entras con Google, recibimos tu nombre,
          correo y foto de perfil.
        </li>
        <li>
          <strong>Reserva:</strong> nombre, correo, fecha y hora de la cita.
        </li>
        <li>
          <strong>Pago:</strong> lo procesa la pasarela de pagos. No
          almacenamos los datos de tu tarjeta.
        </li>
        <li>
          <strong>«¿Cómo estás hoy?»:</strong> tus respuestas se guardan solo
          en tu propio dispositivo.
        </li>
      </ul>

      <h2>Para qué los usamos</h2>
      <p>
        Para gestionar tu reserva, enviarte el enlace y los recordatorios de la
        sesión, y atender tus solicitudes. No vendemos tus datos ni los usamos
        para publicidad de terceros.
      </p>

      <h2>Lo que conversas</h2>
      <p>
        Las sesiones no se graban ni se transcriben. Lo que compartes se queda
        en la conversación.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedir en cualquier momento conocer, corregir o eliminar tus
        datos escribiendo a{" "}
        <a className="underline" href={`mailto:${site.contacto}`}>{site.contacto}</a>.
      </p>
    </PaginaLegal>
  );
}
