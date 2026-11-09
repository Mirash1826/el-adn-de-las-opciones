import Link from "next/link";
import type { ReactNode } from "react";

const estilos = {
  primario:
    "bg-tinta text-white shadow-lg shadow-tinta/20 hover:bg-[#463a6b]",
  suave:
    "bg-white text-tinta ring-1 ring-rosa-200 hover:bg-rosa-50",
};

export function Boton({
  href,
  children,
  variante = "primario",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variante?: keyof typeof estilos;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-bold transition-colors ${estilos[variante]} ${className}`}
    >
      {children}
    </Link>
  );
}
