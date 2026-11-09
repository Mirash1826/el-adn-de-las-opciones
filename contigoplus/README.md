# Contigo Plus

Sitio web de escucha y compañía virtual con Marcela. Next.js (App Router) + Tailwind CSS, pensado para Vercel.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Dónde se edita cada cosa

- **Precios, fotos, enlace de agenda, correo de contacto:** `src/lib/site.ts`
- **Fotos de Marcela:** guardarlas en `public/marcela/` y poner la ruta en `site.fotos`
- **Textos de cada sección:** `src/components/`
- **Términos y privacidad:** `src/app/terminos/` y `src/app/privacidad/` (borradores, falta revisión legal)

## Variables de entorno

Copiar `.env.example` a `.env.local` (en Vercel: Settings → Environment Variables).

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dirección pública del sitio |
| `NEXT_PUBLIC_CAL_LINK` | Evento de Cal.com, p. ej. `marcela/charla` |
| `AUTH_SECRET` | Se genera con `npx auth secret` |
| `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET` | Credenciales OAuth de Google |

Sin estas variables el sitio funciona igual: el botón de Google aparece desactivado y la reserva muestra "La agenda abre muy pronto".

## Pendiente

- Fotos reales de Marcela
- Precios de los paquetes
- Cal.com + pasarela de pago
- Credenciales de Google
- Dominio en Cloudflare apuntando a Vercel
- Verificar los números de las líneas de ayuda en `src/lib/site.ts`
