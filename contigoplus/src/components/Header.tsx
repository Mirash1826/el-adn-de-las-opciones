import Link from "next/link";
import { AuthButton } from "./AuthButton";
import { Logo } from "./Logo";

const enlaces = [
  { href: "/#para-quien", texto: "Para quién" },
  { href: "/#como-funciona", texto: "Cómo funciona" },
  { href: "/#marcela", texto: "Marcela" },
  { href: "/#paquetes", texto: "Paquetes" },
  { href: "/#preguntas", texto: "Preguntas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rosa-100/70 bg-crema/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Principal" className="hidden gap-6 lg:flex">
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="text-sm font-semibold text-tinta-suave hover:text-tinta"
            >
              {e.texto}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <AuthButton />
          <Link
            href="/reserva"
            className="inline-flex min-h-10 items-center rounded-full bg-tinta px-5 text-sm font-bold text-white hover:bg-[#463a6b]"
          >
            Agendar
          </Link>
        </div>
      </div>
    </header>
  );
}
