import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-display text-2xl font-semibold tracking-tight text-tinta"
      aria-label="Contigo Plus, inicio"
    >
      contigo<span className="text-rosa-600">+</span>
    </Link>
  );
}
