"use client";

import Link from "next/link";
import { useYo } from "@/lib/useYo";

export function AuthButton() {
  const { cargando, usuario } = useYo();

  if (cargando) return <span className="h-10 w-24" aria-hidden />;

  if (usuario) {
    const nombre = usuario.nombre?.split(" ")[0] ?? "Mi espacio";
    return (
      <Link
        href="/mi-espacio"
        className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-bold ring-1 ring-cielo-200 hover:bg-cielo-50"
      >
        {usuario.imagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={usuario.imagen}
            alt=""
            className="size-6 rounded-full"
            referrerPolicy="no-referrer"
          />
        ) : null}
        {nombre}
      </Link>
    );
  }

  return (
    <Link
      href="/acceso"
      className="inline-flex min-h-10 items-center rounded-full px-4 text-sm font-bold text-tinta hover:bg-white"
    >
      Entrar
    </Link>
  );
}
