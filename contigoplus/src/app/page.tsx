import { AboutMarcela } from "@/components/AboutMarcela";
import { Boton } from "@/components/Boton";
import { CheckIn } from "@/components/CheckIn";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HelpLines } from "@/components/HelpLines";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingCards } from "@/components/PricingCards";
import { Safety } from "@/components/Safety";
import { UseCases } from "@/components/UseCases";
import { WhatItIs } from "@/components/WhatItIs";

export default function Inicio() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="mx-auto -mt-6 max-w-4xl px-4 sm:px-6">
          <CheckIn />
        </div>
        <UseCases />
        <HowItWorks />
        <WhatItIs />
        <AboutMarcela />
        <PricingCards />
        <Safety />
        <FAQ />
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="fondo-suave rounded-[2rem] p-10 text-center ring-1 ring-rosa-100 sm:p-14">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                ¿Quieres charlar un rato?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-lg text-tinta-suave">
                Elige un horario y cuéntame cómo va tu día.
              </p>
              <Boton href="/reserva" className="mt-7">
                Agendar mi charla ahora
              </Boton>
            </div>
          </div>
        </section>
        <HelpLines />
      </main>
      <Footer />
    </>
  );
}
