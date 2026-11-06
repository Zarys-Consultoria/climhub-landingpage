import {
  CalendarCheck,
  Check,
  ClipboardList,
  FileText,
  FolderOpen,
  Package,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/climhub/Reveal";

const solutions = {
  pmoc: {
    icon: ClipboardList,
    title: "Gestão de PMOC",
    lead: "Planeje, acompanhe e mantenha cada manutenção sob controle.",
    text: "Organize o Plano de Manutenção, Operação e Controle dos seus clientes de forma integrada à rotina da empresa. Cadastre os equipamentos, defina as atividades e periodicidades de manutenção e acompanhe o que precisa ser realizado em cada instalação. Com o Climhub, o PMOC deixa de ser apenas um documento e passa a fazer parte da operação.",
    resources: ["Cadastro e gestão de PMOCs", "Vinculação de equipamentos e ambientes", "Planejamento das manutenções", "Definição de periodicidades", "Acompanhamento das atividades previstas", "Histórico das manutenções realizadas", "Registro das informações da execução", "Geração e armazenamento de documentos"],
  },
  contracts: {
    icon: FileText,
    title: "Contratos",
    lead: "Do contrato assinado à execução do serviço.",
    text: "Centralize as informações comerciais e operacionais dos contratos mantidos com seus clientes. Defina vigência, serviços contratados, unidades atendidas, equipamentos vinculados, valores e demais condições importantes para que a equipe saiba exatamente o que deve ser entregue.",
    resources: ["Cadastro de contratos", "Controle de vigência", "Serviços contratados", "Valores e condições comerciais", "Clientes e unidades vinculadas", "Equipamentos vinculados ao contrato", "Documentos e anexos", "Histórico do contrato", "Acompanhamento de contratos ativos e encerrados"],
  },
  clients: {
    icon: Users,
    title: "Clientes e unidades",
    lead: "Toda a estrutura do cliente organizada.",
    text: "Centralize as informações de cada cliente e mantenha suas unidades, responsáveis, contratos, equipamentos e serviços conectados. Tenha uma visão completa do relacionamento com o cliente sem precisar procurar informações em diferentes sistemas, documentos ou planilhas.",
    resources: ["Cadastro de clientes", "Cadastro de unidades e locais de atendimento", "Contatos e responsáveis", "Contratos vinculados", "Equipamentos instalados", "Histórico de serviços", "Documentos e informações da operação"],
  },
  assets: {
    icon: Package,
    title: "Equipamentos e ativos",
    lead: "Conheça cada equipamento que está sob sua responsabilidade.",
    text: "Mantenha um inventário completo dos equipamentos atendidos pela sua empresa. Identifique onde cada equipamento está instalado, suas características técnicas, histórico de manutenção e vínculo com contratos e planos de manutenção.",
    resources: ["Cadastro de equipamentos", "Fabricante, modelo e identificação", "Capacidade e características técnicas", "Local e ambiente de instalação", "Cliente e unidade responsáveis", "Contrato vinculado", "PMOC vinculado", "Histórico de manutenções", "Documentos e registros técnicos"],
  },
  maintenance: {
    icon: Wrench,
    title: "Manutenções",
    lead: "Saiba o que precisa ser feito antes que vire um problema.",
    text: "Organize manutenções preventivas e corretivas em uma única rotina operacional. Acompanhe serviços programados, atividades pendentes e trabalhos já realizados para ter uma visão clara da operação.",
    resources: ["Manutenções preventivas", "Manutenções corretivas", "Programação de atividades", "Cronograma de manutenção", "Controle de periodicidade", "Registro da execução", "Histórico por equipamento", "Acompanhamento de pendências"],
  },
  field: {
    icon: Users,
    title: "Operação em campo",
    lead: "A informação acompanha sua equipe.",
    text: "Leve as informações da operação para quem está executando o serviço. A equipe pode consultar dados do cliente, equipamentos e atividades previstas, além de registrar as informações do atendimento diretamente durante a execução. Menos papel, mensagens e informações perdidas entre o campo e o escritório.",
    resources: ["Visualização das atividades programadas", "Informações do cliente e local", "Consulta aos equipamentos", "Atividades previstas para execução", "Registro dos serviços realizados", "Observações da equipe", "Evidências e informações do atendimento", "Histórico das atividades"],
  },
  agenda: {
    icon: CalendarCheck,
    title: "Agenda e planejamento",
    lead: "Veja o que precisa acontecer hoje, amanhã e nos próximos meses.",
    text: "Transforme contratos e planos de manutenção em uma agenda operacional organizada. Visualize as próximas atividades, identifique pendências e distribua os serviços para a equipe com maior previsibilidade.",
    resources: ["Calendário de manutenções", "Atividades programadas", "Próximos atendimentos", "Serviços pendentes", "Distribuição das atividades", "Acompanhamento da execução", "Visualização por período"],
  },
  history: {
    icon: FolderOpen,
    title: "Documentos e histórico",
    lead: "Informação registrada. Histórico preservado.",
    text: "Centralize documentos e registros relacionados aos clientes, contratos, equipamentos e serviços executados. Assim, sua empresa constrói um histórico operacional organizado e fácil de consultar sempre que precisar.",
    resources: ["Documentos dos clientes", "Arquivos dos contratos", "Registros de manutenção", "Documentação dos equipamentos", "Evidências dos serviços", "Histórico de alterações e atividades", "Consulta centralizada das informações"],
  },
};

type Solution = (typeof solutions)[keyof typeof solutions];

function IconTile({ icon: Icon, large = false }: { icon: LucideIcon; large?: boolean }) {
  return (
    <div className={`flex shrink-0 items-center justify-center rounded-2xl bg-ice text-brand transition-all duration-200 group-hover:bg-brand/10 group-hover:scale-105 ${large ? "h-14 w-14" : "h-11 w-11"}`}>
      <Icon size={large ? 26 : 21} strokeWidth={1.8} />
    </div>
  );
}

function ResourceList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-snug text-muted transition-colors hover:text-ink">
          <Check size={16} className="mt-0.5 shrink-0 text-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeatureHeading({ item, index, inverse = false, id }: { item: Solution; index: string; inverse?: boolean; id?: string }) {
  return (
    <div className="flex items-start gap-4">
      <IconTile icon={item.icon} large />
      <div>
        <p className={`text-xs font-bold uppercase tracking-[.16em] ${inverse ? "text-white/65" : "text-brand"}`}>{index}</p>
        <h3 id={id} className={`mt-1 text-2xl font-extrabold tracking-tight md:text-3xl ${inverse ? "text-white" : "text-ink"}`}>{item.title}</h3>
      </div>
    </div>
  );
}

function PmocPreview() {
  const tasks = ["Vincular equipamentos", "Definir periodicidades", "Acompanhar atividades", "Registrar execução"];
  return (
    <div className="rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-soft)] sm:p-7">
      <div className="flex items-center justify-between border-b border-line pb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-muted">Plano de manutenção</p>
          <p className="mt-1 text-lg font-extrabold text-ink">PMOC do cliente</p>
        </div>
        <IconTile icon={ClipboardList} />
      </div>
      <div className="mt-5 space-y-3">
        {tasks.map((task, index) => (
          <div key={task} className="flex items-center gap-3 rounded-xl bg-[#f7f9fb] px-4 py-3 transition-all duration-200 hover:bg-brand/[.06] hover:shadow-sm">
            <span className={`flex h-6 w-6 items-center justify-center rounded-full ${index < 2 ? "bg-brand text-white" : "border border-line bg-white text-brand"}`}>
              {index < 2 ? <Check size={14} /> : <span className="text-xs font-bold">{index + 1}</span>}
            </span>
            <span className="text-sm font-medium text-ink">{task}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between rounded-xl bg-ice px-4 py-3 text-sm">
        <span className="font-semibold text-ink">Histórico e documentos</span>
        <FileText size={18} className="text-brand" />
      </div>
    </div>
  );
}

function ContractPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] md:rotate-1">
      <div className="flex items-center justify-between border-b border-line pb-5">
        <div className="flex items-center gap-3"><IconTile icon={FileText} /><div><p className="text-xs text-muted">Documento</p><p className="font-bold text-ink">Contrato de serviço</p></div></div>
        <span className="rounded-full bg-ice px-3 py-1 text-xs font-semibold text-brand">Ativo</span>
      </div>
      <div className="grid grid-cols-2 gap-4 py-5">
        {["Vigência", "Serviços", "Unidades", "Equipamentos"].map((label) => (
          <div key={label} className="rounded-xl bg-[#f7f9fb] p-3"><p className="text-xs text-muted">{label}</p><div className="mt-3 h-2 w-4/5 rounded-full bg-brand/20" /><div className="mt-2 h-2 w-2/3 rounded-full bg-brand/10" /></div>
        ))}
      </div>
      <div className="border-t border-line pt-4 text-sm font-medium text-muted">Condições comerciais e histórico vinculados</div>
    </div>
  );
}

function FieldPreview() {
  return (
    <div className="mx-auto w-64 rounded-[2rem] border-[6px] border-ink bg-white p-3 shadow-2xl shadow-black/20">
      <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-line" />
      <div className="rounded-2xl bg-ice p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-brand">Atividade programada</p>
        <p className="mt-2 font-bold text-ink">Manutenção preventiva</p>
        <p className="mt-1 text-xs text-muted">Cliente e local de atendimento</p>
      </div>
      <div className="mt-4 space-y-3 px-1">
        {["Consultar equipamentos", "Executar atividades", "Registrar atendimento"].map((item, index) => (
          <div key={item} className="flex items-center gap-2 text-xs text-ink"><span className={`flex h-5 w-5 items-center justify-center rounded-full ${index === 0 ? "bg-brand text-white" : "bg-ice text-brand"}`}><Check size={12} /></span>{item}</div>
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-brand px-3 py-2.5 text-center text-xs font-bold text-white">Salvar registro</div>
    </div>
  );
}

function CalendarPreview() {
  const days = ["SEG", "TER", "QUA", "QUI", "SEX"];
  const rows = ["Preventiva", "Visita técnica", "Retorno"];
  return (
    <div className="rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-soft)] sm:p-7">
      <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-muted">Planejamento</p><p className="mt-1 text-lg font-extrabold text-ink">Agenda de serviços</p></div><CalendarCheck className="text-brand" size={24} /></div>
      <div className="mt-6 grid grid-cols-5 gap-2">
        {days.map((day) => <div key={day} className="pb-1 text-center text-[10px] font-bold tracking-wider text-muted">{day}</div>)}
        {days.map((day, index) => <div key={day} className={`rounded-lg py-2 text-center text-sm font-bold ${index === 2 ? "bg-brand text-white" : "bg-[#f7f9fb] text-ink"}`}>{12 + index}</div>)}
      </div>
      <div className="mt-5 space-y-2">
        {rows.map((row, index) => <div key={row} className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5 transition-all duration-200 hover:border-brand/25 hover:shadow-sm"><span className={`h-2 w-2 rounded-full ${index === 1 ? "bg-brand-dark" : "bg-brand"}`} /><span className="text-sm font-medium text-ink">{row}</span><span className="ml-auto text-xs text-muted">Equipe</span></div>)}
      </div>
    </div>
  );
}

function DocumentStack() {
  return (
    <div className="grid grid-cols-[.7fr_1fr] items-center gap-4 sm:gap-8">
      <div className="relative mx-auto h-52 w-40">
        <div className="absolute left-7 top-3 h-40 w-28 rotate-[-12deg] rounded-2xl border border-line bg-[#f7f9fb]" />
        <div className="absolute left-3 top-7 h-40 w-28 rotate-[-5deg] rounded-2xl border border-line bg-ice" />
        <div className="absolute left-0 top-12 flex h-40 w-28 flex-col rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-soft)]">
          <FileText className="text-brand" size={22} /><span className="mt-5 h-2 w-full rounded bg-brand/20" /><span className="mt-2 h-2 w-4/5 rounded bg-brand/10" /><span className="mt-2 h-2 w-full rounded bg-brand/10" /><span className="mt-auto h-6 w-6 rounded-lg bg-ice" />
        </div>
      </div>
      <div className="space-y-3">
        {["Cliente", "Contrato", "Equipamento", "Serviço executado"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-3 text-sm font-medium text-ink transition-all duration-200 hover:border-brand/25 hover:shadow-sm"><FolderOpen size={17} className="text-brand" />{item}<ArrowRightMini /></div>)}
      </div>
    </div>
  );
}

function ArrowRightMini() {
  return <span aria-hidden="true" className="ml-auto text-muted">›</span>;
}

export function SolutionsShowcase() {
  const pmoc = solutions.pmoc;
  const maintenance = solutions.maintenance;
  const contracts = solutions.contracts;
  const clients = solutions.clients;
  const assets = solutions.assets;
  const field = solutions.field;
  const agenda = solutions.agenda;
  const history = solutions.history;

  return (
    <>
      <section className="bg-white px-4 py-16 md:px-6 md:py-28" aria-labelledby="pmoc-heading">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid items-center gap-12 rounded-[2rem] border border-line bg-[#f7f9fb] p-5 md:p-10 lg:grid-cols-[1fr_.9fr] lg:gap-16 lg:p-14">
              <div>
                <FeatureHeading item={pmoc} id="pmoc-heading" index="Planejamento e controle" />
                <p className="mt-6 leading-relaxed text-muted">{pmoc.text}</p>
                <ResourceList items={pmoc.resources} />
              </div>
              <PmocPreview />
            </div>
          </Reveal>
          <Reveal className="mt-8 grid gap-8 border-b border-line pb-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div>
              <FeatureHeading item={maintenance} index="Rotina de serviços" />
              <p className="mt-5 leading-relaxed text-muted">{maintenance.text}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {maintenance.resources.map((resource, index) => <div key={resource} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-sm"><span className="text-sm font-bold text-brand">0{index + 1}</span><span className="text-sm font-medium text-ink">{resource}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice px-4 py-16 md:px-6 md:py-28" aria-labelledby="structure-heading">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-3xl md:mb-12">
            <p className="text-sm font-extrabold uppercase tracking-[.2em] text-brand">Estrutura da operação</p>
            <h2 id="structure-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">Tudo começa com uma <br /> visão completa.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">Conecte clientes, contratos, unidades e equipamentos em uma estrutura fácil de acompanhar.</p>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
            <Reveal as="article" className="group rounded-3xl border border-line bg-white p-5 transition-all duration-300 hover:border-brand/20 hover:shadow-[var(--shadow-soft)] md:p-9 lg:col-span-7">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_.85fr]">
                <div><FeatureHeading item={contracts} index="Gestão comercial" /><p className="mt-5 leading-relaxed text-muted">{contracts.text}</p></div>
                <ContractPreview />
              </div>
              <ResourceList items={contracts.resources} />
            </Reveal>
            <Reveal as="article" delay={120} className="group rounded-3xl border border-line bg-white p-5 transition-all duration-300 hover:border-brand/20 hover:shadow-[var(--shadow-soft)] md:p-9 lg:col-span-5">
              <FeatureHeading item={clients} index="Relacionamento" />
              <p className="mt-5 leading-relaxed text-muted">{clients.text}</p>
              <div className="mt-6 rounded-2xl bg-ice p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Estrutura do cliente</p>
                <div className="mt-3 flex flex-wrap gap-2">{["Unidades", "Responsáveis", "Contratos", "Serviços"].map((label) => <span key={label} className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-ink transition-all duration-200 hover:bg-brand/10 hover:text-brand">{label}</span>)}</div>
              </div>
              <ResourceList items={clients.resources} />
            </Reveal>
            <Reveal as="article" delay={200} className="group rounded-3xl border border-line bg-white p-5 transition-all duration-300 hover:border-brand/20 hover:shadow-[var(--shadow-soft)] md:p-9 lg:col-span-12">
              <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
                <div><FeatureHeading item={assets} index="Inventário técnico" /><p className="mt-5 leading-relaxed text-muted">{assets.text}</p></div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {assets.resources.map((resource, index) => <div key={resource} className={`flex min-h-24 flex-col justify-between rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${index % 3 === 1 ? "bg-ice hover:bg-brand/10" : "bg-[#f7f9fb] hover:bg-brand/[.06]"}`}><Package size={19} className="text-brand" /><span className="text-sm font-semibold leading-snug text-ink">{resource}</span></div>)}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink px-4 py-16 text-white md:px-6 md:py-28" aria-labelledby="field-heading">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-20">
          <div>
            <FeatureHeading item={field} index="Execução em campo" inverse />
            <h2 id="field-heading" className="sr-only">Operação em campo</h2>
            <p className="mt-6 leading-relaxed text-white/75">{field.text}</p>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {field.resources.map((resource) => <li key={resource} className="flex gap-2 text-sm leading-snug text-white/85"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{resource}</li>)}
            </ul>
          </div>
          <FieldPreview />
        </Reveal>
      </section>

      <section className="bg-white px-4 py-16 md:px-6 md:py-28" aria-labelledby="agenda-heading">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <CalendarPreview />
          <div>
            <FeatureHeading item={agenda} index="Agenda e previsibilidade" />
            <h2 id="agenda-heading" className="sr-only">Agenda e planejamento</h2>
            <p className="mt-6 leading-relaxed text-muted">{agenda.text}</p>
            <ResourceList items={agenda.resources} />
          </div>
        </Reveal>
      </section>

      <section className="bg-ice px-4 py-16 md:px-6 md:py-20" aria-labelledby="history-heading">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-line bg-white p-5 md:p-10 lg:grid-cols-[.9fr_1.1fr] lg:p-14">
          <div>
            <FeatureHeading item={history} index="Documentos e histórico" />
            <h2 id="history-heading" className="sr-only">Documentos e histórico</h2>
            <p className="mt-6 leading-relaxed text-muted">{history.text}</p>
            <ResourceList items={history.resources} />
          </div>
          <DocumentStack />
        </Reveal>
      </section>
    </>
  );
}
