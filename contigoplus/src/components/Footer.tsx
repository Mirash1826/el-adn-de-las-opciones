import Link from "next/link";
import { disclaimer, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rosa-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-tinta-suave">
            {disclaimer}
          </p>
        </div>
        <nav aria-label="Legal" className="flex flex-col gap-2 text-sm font-semibold md:items-end">
          <Link href="/terminos" className="hover:underline">Términos y condiciones</Link>
          <Link href="/privacidad" className="hover:underline">Política de privacidad</Link>
          <Link href="/#ayuda-urgente" className="hover:underline">Líneas de ayuda urgente</Link>
          <a href={`mailto:${site.contacto}`} className="hover:underline">{site.contacto}</a>
        </nav>
      </div>
      <p className="border-t border-rosa-100 px-4 py-5 text-center text-xs text-tinta-suave">
        © {site.nombre}. Servicio exclusivo para mayores de 18 años.
      </p>
    </footer>
  );
}
