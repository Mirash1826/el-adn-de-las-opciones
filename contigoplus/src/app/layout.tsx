import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({ variable: "--font-display", subsets: ["latin"] });
const body = Nunito({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nombre} · Alguien neutral que te escucha`,
    template: `%s · ${site.nombre}`,
  },
  description: site.descripcion,
  openGraph: {
    title: `${site.nombre} · Alguien neutral que te escucha`,
    description: site.descripcion,
    locale: "es",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
