/**
 * Configuración central del sitio. Casi todo lo que cambia con el tiempo
 * (precios, fotos, enlace de agenda, contacto) se edita aquí.
 */
export const site = {
  nombre: "Contigo Plus",
  descripcion:
    "Compañía y escucha 100% virtual por videollamada o voz. Un espacio neutral para hablar de tu día sin que nadie te juzgue.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contacto: "hola@contigoplus.com", // TODO: confirmar cuando exista el dominio
  /** Enlace de Cal.com, p. ej. "marcela/charla". Vacío = aún sin agenda. */
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
  /**
   * Fotos reales de Marcela. Guardar los archivos en /public/marcela/
   * y poner aquí la ruta ("/marcela/principal.jpg"). null = marcador de posición.
   */
  fotos: {
    principal: null as string | null,
    tiras: [null, null, null, null] as (string | null)[],
    retrato: null as string | null,
  },
};

export type Paquete = {
  id: string;
  nombre: string;
  minutos: number;
  duracion: string;
  objetivo: string;
  /** Precio en USD. null = por confirmar. */
  precio: number | null;
  destacado?: boolean;
};

export const paquetes: Paquete[] = [
  {
    id: "expres",
    nombre: "Charla Exprés",
    minutos: 60,
    duracion: "60 minutos",
    objetivo:
      "Desahogo puntual, ordenar las ideas del día o una pausa activa.",
    precio: null,
  },
  {
    id: "completo",
    nombre: "Espacio Completo",
    minutos: 120,
    duracion: "2 horas",
    objetivo:
      "Conversación pausada, profundizar sin afán y compartir la tarde o la noche.",
    precio: null,
    destacado: true,
  },
  {
    id: "extendida",
    nombre: "Sesión Extendida",
    minutos: 180,
    duracion: "3 horas",
    objetivo:
      "Acompañamiento prolongado en bloques de trabajo, estudio o insomnio.",
    precio: null,
  },
];

export const disclaimer =
  "Este servicio es estrictamente de compañía virtual y escucha atenta informal. NO constituye psicoterapia, consulta clínica, diagnóstico médico, intervención en crisis ni tratamiento de salud mental. Si atraviesas por una crisis emocional severa o riesgo para tu integridad, por favor comunícate con las líneas oficiales de emergencia de tu país.";

/** TODO: verificar cada número antes de publicar. */
export const lineasDeAyuda = [
  { pais: "Colombia", linea: "123 (emergencias) · 106 (Bogotá)" },
  { pais: "México", linea: "911 · Línea de la Vida 800 911 2000" },
  { pais: "España", linea: "112 · 024 (atención a la conducta suicida)" },
  { pais: "Argentina", linea: "911 · 135 (CABA y GBA)" },
  { pais: "Chile", linea: "*4141 · 131 (SAMU)" },
  { pais: "Perú", linea: "113 opción 5 · 106 (SAMU)" },
  { pais: "Estados Unidos", linea: "988 (opción 2, español) · 911" },
];
