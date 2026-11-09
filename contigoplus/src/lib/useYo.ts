"use client";

import { useEffect, useState } from "react";

export type Yo = {
  cargando: boolean;
  configurado: boolean;
  usuario: { nombre: string | null; imagen: string | null } | null;
};

export function useYo(): Yo {
  const [yo, setYo] = useState<Yo>({
    cargando: true,
    configurado: false,
    usuario: null,
  });

  useEffect(() => {
    let vivo = true;
    fetch("/api/yo")
      .then((r) => r.json())
      .then((d) => vivo && setYo({ cargando: false, ...d }))
      .catch(
        () =>
          vivo && setYo({ cargando: false, configurado: false, usuario: null }),
      );
    return () => {
      vivo = false;
    };
  }, []);

  return yo;
}
