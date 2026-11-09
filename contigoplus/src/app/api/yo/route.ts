import { connection } from "next/server";
import { auth, authConfigurado } from "@/auth";

/** Estado de sesión para el cliente. Nunca falla aunque falten las claves. */
export async function GET() {
  await connection(); // siempre en tiempo de petición, nunca en caché
  if (!authConfigurado) {
    return Response.json({ configurado: false, usuario: null });
  }
  const sesion = await auth();
  const u = sesion?.user;
  return Response.json({
    configurado: true,
    usuario: u ? { nombre: u.name ?? null, imagen: u.image ?? null } : null,
  });
}
