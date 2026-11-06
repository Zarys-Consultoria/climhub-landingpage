import type { Metadata } from "next";
import { ArrowRight, Link2 } from "lucide-react";
import { ActionButton, SiteFooter, SiteHeader, WHATSAPP_URL } from "@/components/climhub/SiteChrome";
import { SolutionsShowcase } from "@/components/climhub/SolutionsShowcase";
import { Reveal } from "@/components/climhub/Reveal";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Conheça os módulos do Climhub: gestão de clientes, contratos, equipamentos, PMOCs, manutenções, ordens de serviço e operação em campo.",
  alternates: { canonical: "/solucoes/" },
};

export default function SolutionsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-ice px-4 pb-24 pt-36 md:px-6 md:pb-32 md:pt-48">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[.2em] text-brand">Soluções Climhub</p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
            Uma plataforma para <br /> <span className="text-brand">toda a operação.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted md:mt-7 md:text-xl">
            O Climhub centraliza as principais rotinas da operação de climatização, mantendo informações, documentos e atividades conectados durante todo o ciclo de atendimento ao cliente.
          </p>
        </Reveal>
      </section>

      <SolutionsShowcase />

      <section className="bg-ice py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Link2 className="mx-auto text-brand" size={36} />
            <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">Uma operação conectada de ponta a ponta</h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">O diferencial do Climhub não está apenas em cada funcionalidade. Está na conexão entre elas.</p>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm font-bold text-brand md:mt-12 md:text-lg">
            {["Cliente", "Contrato", "Unidade", "Equipamento", "PMOC", "Manutenção", "Equipe", "Histórico"].map((item, index, list) => (
              <span key={item} className="flex items-center gap-2">
                {item}
                {index < list.length - 1 && <ArrowRight size={17} />}
              </span>
            ))}
          </Reveal>
          <Reveal delay={200} className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted md:mt-10">
            Quando todas essas informações fazem parte da mesma plataforma, sua empresa ganha mais controle sobre a operação e reduz a dependência de planilhas, documentos e informações espalhadas.
          </Reveal>
          <Reveal delay={280} className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10">
            <ActionButton href="/planos">Conhecer os planos</ActionButton>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-brand/25 px-6 py-3.5 text-sm font-bold text-brand transition hover:bg-white">
              Falar com um especialista
            </a>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
