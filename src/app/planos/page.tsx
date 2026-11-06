import type { Metadata } from "next";
import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import {
  ActionButton,
  SiteFooter,
  SiteHeader,
  WHATSAPP_URL,
} from "@/components/climhub/SiteChrome";
import { Reveal } from "@/components/climhub/Reveal";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Compare os planos Climhub Start, Pro e Premium. Escolha o ideal para sua operação de climatização.",
  alternates: { canonical: "/planos/" },
};

const plans = [
  {
    name: "Climhub Start",
    price: "199",
    profile: "Operações pequenas",
    limits: ["Até 3", "Até 30", "Até 300"],
    description:
      "Para pequenas operações que querem sair das planilhas. Organize clientes, equipamentos, contratos, PMOCs e manutenções em um único lugar.",
  },
  {
    name: "Climhub Pro",
    price: "399",
    profile: "Empresas em crescimento",
    limits: ["Até 10", "Até 100", "Até 1.500"],
    description:
      "Para empresas que querem organizar e escalar sua operação. Tenha todos os recursos do Start, mais gestão de equipes, operação em campo, indicadores e recursos avançados para controlar o dia a dia.",
  },
  {
    name: "Climhub Premium",
    price: "699",
    profile: "Operações maiores",
    limits: ["Até 25", "Ilimitados", "Ilimitados"],
    description:
      "Para operações que precisam de mais capacidade e controle. Mais usuários, clientes e equipamentos, recursos avançados e suporte prioritário para operações de maior porte.",
  },
];

type CellValue = boolean | string;

const rows: { category: string; items: [string, CellValue, CellValue, CellValue][] }[] = [
  {
    category: "Capacidade",
    items: [
      ["Usuários", "Até 3", "Até 10", "Até 25"],
      ["Clientes", "Até 30", "Até 100", "Ilimitados"],
      ["Equipamentos", "Até 300", "Até 1.500", "Ilimitados"],
    ],
  },
  {
    category: "Gestão e cadastros",
    items: [
      ["Cadastro de clientes e unidades", true, true, true],
      ["Cadastro de equipamentos", true, true, true],
      ["Contratos e vigências", true, true, true],
      ["PMOC", true, true, true],
      ["Ordens de serviço", true, true, true],
      ["Agenda e planejamento", true, true, true],
      ["Documentos e anexos", true, true, true],
    ],
  },
  {
    category: "Manutenções",
    items: [
      ["Manutenções preventivas", true, true, true],
      ["Manutenções corretivas", true, true, true],
      ["Cronograma e periodicidade", true, true, true],
      ["Histórico por equipamento", true, true, true],
      ["Programação automática", false, true, true],
    ],
  },
  {
    category: "Operação em campo",
    items: [
      ["Agenda do técnico", "Básica", "Completa", "Completa"],
      ["Consulta de equipamentos", true, true, true],
      ["Registro do atendimento", true, true, true],
      ["Evidências (fotos, vídeos, áudio)", "Apenas fotos", "Completas", "Completas"],
      ["Histórico em campo", false, true, true],
      ["Fluxo completo (9 etapas)", false, true, true],
    ],
  },
  {
    category: "Contratos e comercial",
    items: [
      ["Gestão de contratos", true, true, true],
      ["Serviços contratados e periodicidade", true, true, true],
      ["Valores, SLA e condições", false, true, true],
      ["Aditivos e renovações", false, true, true],
      ["Indicadores do contrato", false, true, true],
    ],
  },
  {
    category: "Relatórios e gestão",
    items: [
      ["Relatórios", "Básicos", "Completos", "Completos"],
      ["Indicadores de gestão", false, true, true],
      ["Gestão de equipes", false, true, true],
      ["Histórico de alterações", false, true, true],
    ],
  },
  {
    category: "Suporte e extras",
    items: [
      ["Suporte por e-mail", true, true, true],
      ["Suporte prioritário", false, false, true],
      ["Recursos avançados", false, false, true],
    ],
  },
];

function Cell({ value }: { value: CellValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto text-brand" size={18} />
    ) : (
      <Minus className="mx-auto text-muted/30" size={18} />
    );
  }
  return (
    <span className="text-[13px] font-medium text-ink">{value}</span>
  );
}

export default function PlansPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-ice px-4 pb-24 pt-36 md:px-6 md:pb-32 md:pt-48">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[.2em] text-brand">
            Planos Climhub
          </p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
            Escolha o ritmo da
            <br />
            <span className="text-brand">sua operação.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:mt-7 md:text-xl">
            Comece simples e evolua conforme sua empresa cresce. Todos os planos
            conectam a gestão da operação de climatização em um só lugar.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 md:px-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const isPro = index === 1;
            return (
              <Reveal key={plan.name} delay={index * 120} as="article">
                <div
                  className={`flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 md:p-8 ${
                    isPro
                      ? "border-brand bg-brand text-white shadow-2xl shadow-brand/25 lg:-translate-y-3"
                      : "border-line hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-[var(--shadow-soft)] active:translate-y-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-extrabold md:text-2xl">{plan.name}</h2>
                    {isPro && (
                      <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold">
                        Mais escolhido
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-4 text-sm leading-relaxed md:mt-5 ${
                      isPro ? "text-white/75" : "text-muted"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <p className="mt-6 font-display text-4xl font-extrabold md:mt-8 md:text-5xl">
                    R$ {plan.price}
                    <span
                      className={`text-base font-medium ${
                        isPro ? "text-white/70" : "text-muted"
                      }`}
                    >
                      /mês
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 border-t border-current/15 pt-6 text-sm md:mt-8 md:pt-7">
                    <li className="flex gap-2">
                      <Check size={18} />
                      {plan.limits[0]} usuários
                    </li>
                    <li className="flex gap-2">
                      <Check size={18} />
                      {plan.limits[1]} clientes
                    </li>
                    <li className="flex gap-2">
                      <Check size={18} />
                      {plan.limits[2]} equipamentos
                    </li>
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 md:mt-9 ${
                      isPro ? "bg-white text-brand hover:shadow-lg hover:shadow-white/20" : "bg-ice text-brand hover:bg-brand/10"
                    }`}
                  >
                    Falar com um especialista
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ice py-16 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[.2em] text-brand">
              Comparativo completo
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
              Recursos para cada fase da operação.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Veja em detalhes o que cada plano oferece e escolha o que melhor se
              encaixa na sua empresa.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-10 md:mt-12">
            <div className="hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-soft)] md:block">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-line">
                    <th className="w-[40%] p-5 text-left font-bold text-ink">
                      Recursos
                    </th>
                    {plans.map((plan, i) => (
                      <th
                        key={plan.name}
                        className={`w-[20%] p-5 text-center ${
                          i === 1
                            ? "bg-brand/[.04] font-extrabold text-brand"
                            : "font-bold text-ink"
                        }`}
                      >
                        <span className="block text-[15px]">{plan.name}</span>
                        <span
                          className={`mt-1 block text-xs font-medium ${
                            i === 1 ? "text-brand/70" : "text-muted"
                          }`}
                        >
                          R$ {plan.price}/mês
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((section) => (
                    <Fragment key={section.category}>
                      <tr className="bg-[#f7fafd]">
                        <th
                          colSpan={4}
                          className="px-5 py-3 text-left text-xs font-bold uppercase tracking-[.12em] text-brand"
                        >
                          {section.category}
                        </th>
                      </tr>
                      {section.items.map(([label, start, pro, premium]) => (
                        <tr
                          key={String(label)}
                          className="border-b border-line/60 transition-colors hover:bg-brand/[.03] last:border-0"
                        >
                          <td className="px-5 py-3.5 font-medium text-ink">
                            {label as string}
                          </td>
                          <td className="px-5 py-3.5 text-center">
                            <Cell value={start} />
                          </td>
                          <td className="bg-brand/[.02] px-5 py-3.5 text-center">
                            <Cell value={pro} />
                          </td>
                          <td className="px-5 py-3.5 text-center">
                            <Cell value={premium} />
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-line">
                    <td className="p-5" />
                    {plans.map((plan, i) => (
                      <td key={plan.name} className={`p-5 text-center ${i === 1 ? "bg-brand/[.04]" : ""}`}>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                            i === 1
                              ? "bg-brand text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/25"
                              : "bg-ice text-brand hover:bg-brand/10"
                          }`}
                        >
                          Escolher plano
                        </a>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="space-y-4 md:hidden">
              {rows.map((section) => (
                <div key={section.category} className="rounded-2xl border border-line bg-white shadow-sm">
                  <div className="border-b border-line bg-[#f7fafd] px-4 py-3 rounded-t-2xl">
                    <h3 className="text-xs font-bold uppercase tracking-[.12em] text-brand">
                      {section.category}
                    </h3>
                  </div>
                  <div className="divide-y divide-line/60">
                    {section.items.map(([label, start, pro, premium]) => (
                      <div key={String(label)} className="px-4 py-3">
                        <p className="text-[13px] font-semibold text-ink">{label as string}</p>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          {[
                            { name: "Start", value: start },
                            { name: "Pro", value: pro },
                            { name: "Premium", value: premium },
                          ].map((col, i) => (
                            <div
                              key={col.name}
                              className={`flex flex-col items-center rounded-lg px-2 py-2 ${
                                i === 1 ? "bg-brand/[.06]" : "bg-ice/60"
                              }`}
                            >
                              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                                i === 1 ? "text-brand" : "text-muted"
                              }`}>
                                {col.name}
                              </span>
                              <span className="mt-1">
                                <Cell value={col.value} />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                {plans.map((plan, i) => (
                  <a
                    key={plan.name}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold transition-all duration-200 active:translate-y-0 ${
                      i === 1
                        ? "bg-brand text-white active:bg-brand-dark"
                        : "bg-ice text-brand active:bg-brand/10"
                    }`}
                  >
                    Escolher {plan.name}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-center text-white md:px-6 md:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-5xl">
            Pronto para centralizar <br /> sua operação?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 md:mt-6 md:text-lg">
            Da gestão no escritório à execução em campo, o Climhub conecta
            clientes, contratos, equipamentos, equipes e serviços.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-9">
            <ActionButton href={WHATSAPP_URL}>
              Falar com um especialista
            </ActionButton>
            <a
              href="/solucoes"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10"
            >
              Conhecer as soluções
            </a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
