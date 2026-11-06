import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  Check,
  ChevronDown,
  ClipboardList,
  FileText,
  Package,
  Search,
  Settings2,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HomeHeader } from "@/components/climhub/HomeHeader";
import { Reveal } from "@/components/climhub/Reveal";
import { DashboardMockup } from "@/components/climhub/DashboardMockup";
import { PhoneMockup } from "@/components/climhub/PhoneMockup";
import { SiteFooter, WHATSAPP_URL } from "@/components/climhub/SiteChrome";

const features: {
  icon: LucideIcon;
  title: string;
  text: string;
  highlights: string[];
  dark?: boolean;
}[] = [
  {
    icon: Package,
    title: "Equipamentos",
    text: "Inventário completo com tipo, fabricante, modelo, capacidade, localização e histórico de manutenções de cada equipamento.",
    highlights: [
      "Código, patrimônio e série",
      "Situação e localização",
      "Histórico completo de OS",
    ],
  },
  {
    icon: Users,
    title: "Clientes e unidades",
    text: "Estrutura hierárquica: empresa, unidades, ambientes e equipamentos. Tudo conectado com contratos e serviços.",
    highlights: [
      "Razão social, CNPJ, contatos",
      "Unidades e ambientes",
      "Pendências e histórico",
    ],
  },
  {
    icon: ClipboardList,
    title: "Ordens de Serviço",
    text: "Abertura, agendamento, execução e conclusão. Controle completo de cada atendimento com fotos, vídeos e evidências.",
    highlights: [
      "Status e rastreamento",
      "Evidências multimídia",
      "Vínculo com contratos",
    ],
  },
  {
    icon: FileText,
    title: "Contratos",
    text: "Vigência, serviços contratados, valores, SLA, aditivos e documentos. Tudo centralizado com renovação e histórico completo.",
    highlights: [
      "Vigência e renovações",
      "Equipamentos vinculados",
      "Indicadores e documentos",
    ],
    dark: true,
  },
  {
    icon: Wrench,
    title: "Manutenções",
    text: "Preventivas e corretivas organizadas. Cronograma, periodicidade e registro completo da execução de cada serviço.",
    highlights: [
      "Preventivas programadas",
      "Corretivas sob demanda",
      "Histórico por equipamento",
    ],
    dark: true,
  },
  {
    icon: CalendarCheck,
    title: "Agenda e planejamento",
    text: "Transforme contratos e planos em uma agenda operacional. Visualize serviços, distribua atividades e acompanhe a execução.",
    highlights: [
      "Calendário integrado",
      "Distribuição de equipes",
      "Pendências visíveis",
    ],
    dark: true,
  },
];

const fieldSteps = [
  {
    n: "1",
    title: "Agenda",
    text: "Técnico visualiza serviços do dia com cliente, local, equipamento e horário.",
  },
  {
    n: "2",
    title: "Selecionar OS",
    text: "Acessa a OS com dados do cliente, local, equipamento e tipo de serviço.",
  },
  {
    n: "3",
    title: "Histórico",
    text: "Consulta última manutenção, serviços realizados, problemas e fotos anteriores.",
  },
  {
    n: "4",
    title: "Iniciar",
    text: "Sistema registra data, horário, técnico e OS automaticamente.",
  },
  {
    n: "5",
    title: "Problema",
    text: "Registra problema com texto, áudio, fotos e vídeo como evidência.",
  },
  {
    n: "6",
    title: "Executar",
    text: "Seleciona tipo de serviço e registra o que foi executado no equipamento.",
  },
  {
    n: "7",
    title: "Resultado",
    text: "Informa se o problema foi solucionado, parcialmente ou necessita retorno/peça.",
  },
  {
    n: "8",
    title: "Evidências",
    text: "Envia fotos, vídeos, áudio e observações para comprovar a conclusão.",
  },
];

const plans = [
  {
    name: "Climhub Start",
    price: "199",
    profile: "Para pequenas operações que querem sair das planilhas.",
    details: ["Até 3 usuários", "Até 30 clientes", "Até 300 equipamentos"],
  },
  {
    name: "Climhub Pro",
    price: "399",
    profile: "Para empresas que querem organizar e escalar sua operação.",
    details: [
      "Até 10 usuários",
      "Até 100 clientes",
      "Até 1.500 equipamentos",
      "Gestão de equipes e campo",
    ],
  },
  {
    name: "Climhub Premium",
    price: "699",
    profile: "Para operações que precisam de mais capacidade e controle.",
    details: [
      "Até 25 usuários",
      "Clientes ilimitados",
      "Equipamentos ilimitados",
      "Suporte prioritário",
    ],
  },
];

function PrimaryButton({
  children,
  href = "#contato",
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 md:px-7 md:py-3.5";
  const variant = light
    ? "bg-white text-brand hover:bg-ice hover:-translate-y-0.5 active:translate-y-0 active:bg-brand/10"
    : "bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/25 active:translate-y-0 active:shadow-none";
  return href.startsWith("/") ? (
    <Link href={href} className={`${base} ${variant}`}>
      {children}
      <ArrowRight size={17} />
    </Link>
  ) : (
    <a href={href} className={`${base} ${variant}`}>
      {children}
      <ArrowRight size={17} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <HomeHeader />

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-b from-ice to-white px-6 pb-24 pt-36 md:pb-32 md:pt-48"
      >
        <div className="absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-brand/[.06] blur-[80px]" />
        <div className="absolute -bottom-16 -left-20 h-[350px] w-[350px] rounded-full bg-brand/[.04] blur-[60px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
          <Reveal>
            <h1 className="max-w-[580px] font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-ink md:text-[clamp(2.5rem,5vw,3.5rem)] md:leading-[1.06]">
              Sua operação de climatização,{" "}
              <span className="text-brand">mais simples.</span>
            </h1>
            <p className="mt-5 max-w-[500px] text-base leading-relaxed text-muted md:mt-6 md:text-[19px]">
              Gerencie clientes, contratos, equipamentos, PMOCs e manutenções em
              uma única plataforma — do escritório à equipe em campo.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
              <PrimaryButton href="#solucoes">Conhecer o Climhub</PrimaryButton>
              <a
                href="#planos"
                className="inline-flex items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-bold text-brand transition-all duration-200 hover:border-brand hover:bg-brand/5 active:bg-brand/10 md:px-7 md:py-3.5"
              >
                Ver planos
                <ChevronDown size={17} />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 md:mt-12 md:flex md:gap-10">
              {[
                { value: "6", label: "Módulos integrados" },
                { value: "100%", label: "Operação conectada" },
                { value: "Web + App", label: "Escritório e campo" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-10">
                  {i > 0 && (
                    <div className="mr-10 hidden h-10 w-px bg-line md:block" />
                  )}
                  <div className="group cursor-default">
                    <p className="font-display text-xl font-extrabold text-ink transition-colors group-hover:text-brand md:text-[28px]">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted md:text-[13px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <DashboardMockup />
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="bg-white px-6 py-16 md:py-32">
        <Reveal className="mx-auto max-w-[800px] text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">
            Mais controle, menos retrabalho
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:mt-5 md:text-5xl">
            Menos planilhas.
            <br />
            <span className="text-brand">Mais controle da sua operação.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
            Contratos espalhados, manutenções atrasadas, informações
            descentralizadas e equipes em campo sem visibilidade dificultam o
            crescimento. O Climhub centraliza tudo para que sua empresa saiba o
            que precisa ser feito, onde, quando e por quem.
          </p>
        </Reveal>
      </section>

      {/* FEATURES */}
      <section id="solucoes" className="bg-[#f7fafd] px-6 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">
              Funcionalidades
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
              Tudo o que sua operação precisa.{" "}
              <span className="text-brand">Em um só lugar.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3">
            {features.map((feat, i) => (
              <Reveal key={feat.title} delay={i * 80} as="article">
                <div className="group cursor-default rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-[var(--shadow-soft)] active:translate-y-0 md:p-7">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-[14px] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 md:h-12 md:w-12 ${
                      feat.dark ? "bg-brand-dark" : "bg-brand"
                    }`}
                  >
                    <feat.icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-ink transition-colors group-hover:text-brand md:mt-6 md:text-xl">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted md:mt-3">
                    {feat.text}
                  </p>
                  <ul className="mt-3.5 space-y-2 md:mt-4">
                    {feat.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-[13px] text-ink"
                      >
                        <Check
                          size={16}
                          className="shrink-0 text-brand transition-transform group-hover:scale-110"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center md:mt-12">
            <PrimaryButton href="/solucoes">Conhecer as soluções</PrimaryButton>
          </Reveal>
        </div>
      </section>

      {/* FIELD OPERATIONS */}
      <section
        id="campo"
        className="overflow-hidden bg-ink px-6 py-16 text-white md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.85fr] lg:gap-16">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-white/50">
                Operação em campo
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
                A operação não acontece
                <br className="hidden md:block" /> apenas no escritório.
              </h2>
              <p className="mt-5 max-w-[480px] text-base leading-relaxed text-white/65 md:mt-6 md:text-[17px]">
                Do agendamento à conclusão, o técnico tem tudo que precisa no
                celular: agenda, dados do cliente, equipamentos, histórico e
                registro do atendimento com fotos, vídeos e áudios.
              </p>
              <div className="mt-8 space-y-3 md:mt-10">
                {[
                  {
                    icon: CalendarCheck,
                    title: "Agenda do técnico",
                    desc: "Serviços do dia com cliente, local e horário",
                  },
                  {
                    icon: Search,
                    title: "Histórico do equipamento",
                    desc: "Últimas manutenções, peças trocadas e fotos",
                  },
                  {
                    icon: Camera,
                    title: "Evidências completas",
                    desc: "Fotos, vídeos, áudios e observações",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 rounded-[14px] border border-white/10 bg-white/[.06] px-4 py-3.5 transition-all duration-200 hover:border-brand/40 hover:bg-white/10 md:px-5 md:py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-brand transition-transform duration-200 group-hover:scale-110">
                      <item.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="mt-0.5 text-xs text-white/55">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <PhoneMockup />
          </div>

          {/* 9 Steps */}
          <div className="mt-16 md:mt-20">
            <Reveal className="mb-10 text-center md:mb-12">
              <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-[28px]">
                Fluxo completo do atendimento
              </h3>
              <p className="mt-2 text-sm text-white/55 md:text-[15px]">
                9 etapas do agendamento à conclusão
              </p>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
              {fieldSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 60}>
                  <div className="group rounded-2xl border border-white/10 bg-white/[.06] p-5 transition-all duration-200 hover:border-brand/30 hover:bg-white/10 md:p-6">
                    <div className="mb-2.5 flex items-center gap-3 md:mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-brand text-sm font-extrabold text-white transition-transform duration-200 group-hover:scale-110">
                        {step.n}
                      </div>
                      <span className="text-sm font-bold">{step.title}</span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-white/55">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={480}>
                <div className="group rounded-2xl border border-brand/30 bg-brand/15 p-5 transition-all duration-200 hover:border-brand/50 hover:bg-brand/25 md:p-6">
                  <div className="mb-2.5 flex items-center gap-3 md:mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-brand transition-transform duration-200 group-hover:scale-110">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-bold">Finalizar</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-white/55">
                    OS concluída com registro completo de horários, serviços e
                    evidências.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="bg-white px-6 py-16 md:py-32">
        <div className="mx-auto max-w-[1100px]">
          <Reveal className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">
              Planos
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
              Escolha o ritmo da sua operação.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted md:mt-4 md:text-lg">
              Comece simples e evolua conforme sua empresa cresce.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:mt-14 md:gap-5 lg:grid-cols-3">
            {plans.map((plan, i) => {
              const isPro = i === 1;
              return (
                <Reveal key={plan.name} delay={i * 100} as="article">
                  <div
                    className={`flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 md:p-8 ${
                      isPro
                        ? "border-brand bg-brand text-white shadow-2xl shadow-brand/25 lg:-translate-y-3"
                        : "border-line hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-[var(--shadow-soft)] active:translate-y-0"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-extrabold md:text-[22px]">{plan.name}</h3>
                      {isPro && (
                        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold">
                          Mais escolhido
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isPro ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {plan.profile}
                    </p>
                    <p className="mt-5 font-display text-4xl font-extrabold md:mt-6 md:text-[40px]">
                      R$ {plan.price}
                      <span
                        className={`text-base font-medium ${
                          isPro ? "text-white/65" : "text-muted"
                        }`}
                      >
                        /mês
                      </span>
                    </p>
                    <ul className="mt-5 flex-1 space-y-3 border-t border-current/15 pt-5 md:mt-6 md:space-y-3.5 md:pt-6">
                      {plan.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2.5 text-sm"
                        >
                          <Check
                            size={18}
                            className={isPro ? "text-white" : "text-brand"}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-7 flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 md:mt-8 md:py-3.5 ${
                        isPro
                          ? "bg-white text-brand hover:shadow-lg hover:shadow-white/20"
                          : "bg-ice text-brand hover:bg-brand/10"
                      }`}
                    >
                      Falar com um especialista
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-10 text-center md:mt-12">
            <Link
              href="/planos"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
            >
              Ver comparativo completo
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="bg-ink px-6 py-16 text-white md:py-28">
        <Reveal className="mx-auto max-w-[700px] text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand transition-transform duration-300 hover:rotate-45 md:mb-6 md:h-14 md:w-14">
            <Settings2 size={24} className="text-white" />
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Menos ferramentas.
            <br />
            <span className="text-brand">Mais Climhub.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[540px] text-base leading-relaxed text-white/60 md:mt-6 md:text-[17px]">
            Centralize sua operação e tenha uma visão completa dos seus clientes,
            contratos, equipamentos e manutenções em um único lugar.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-9">
            <PrimaryButton href="#planos">Conhecer os planos</PrimaryButton>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:bg-white/15 md:px-7 md:py-3.5"
            >
              Falar com um especialista
            </a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
