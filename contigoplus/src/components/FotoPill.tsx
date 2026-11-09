import { UserRound } from "lucide-react";

/**
 * Cápsula vertical con una foto. Sin `src` muestra un marcador pastel,
 * para reemplazar por las fotos reales de Marcela (ver src/lib/site.ts).
 */
export function FotoPill({
  src,
  alt = "",
  tono = "rosa",
  className = "",
  children,
}: {
  src?: string | null;
  alt?: string;
  tono?: "rosa" | "cielo" | "lila" | "durazno" | "menta";
  className?: string;
  children?: React.ReactNode;
}) {
  const fondos = {
    rosa: "from-rosa-100 to-rosa-300",
    cielo: "from-cielo-100 to-cielo-300",
    lila: "from-lila-100 to-lila-200",
    durazno: "from-durazno-100 to-rosa-200",
    menta: "from-menta-100 to-cielo-200",
  };
  return (
    <div
      className={`relative overflow-hidden rounded-full bg-gradient-to-b ring-4 ring-white shadow-xl shadow-rosa-300/30 ${fondos[tono]} ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : (
        <div className="flex size-full items-center justify-center" aria-hidden>
          <UserRound className="size-1/2 max-h-24 text-white/70" strokeWidth={1.2} />
        </div>
      )}
      {children}
    </div>
  );
}
