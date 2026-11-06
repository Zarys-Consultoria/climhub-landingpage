import { Bell, FileText, Package, Users } from "lucide-react";
import { Reveal } from "@/components/climhub/Reveal";

export function DashboardMockup() {
  return (
    <div className="relative hidden lg:block">
      <Reveal delay={180}>
        <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-20px_rgba(18,81,141,0.18)] md:p-6">
          <div className="mb-5 flex items-center justify-between border-b border-ice pb-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.12em] text-brand">
                Dashboard
              </p>
              <p className="mt-1 font-display text-xl font-extrabold text-ink">
                Visão geral
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-ice transition-colors hover:bg-brand/10">
              <Bell size={18} className="text-brand" />
            </div>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-3">
            {[
              { icon: Users, label: "Clientes", value: "48" },
              { icon: Package, label: "Equipamentos", value: "312" },
              { icon: FileText, label: "OS ativas", value: "17" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[14px] bg-ice p-4 transition-all duration-200 hover:bg-brand/10 hover:shadow-sm"
              >
                <div className="mb-2.5 flex items-center gap-2">
                  <stat.icon size={16} className="text-brand" />
                  <span className="text-[11px] font-semibold text-muted">
                    {stat.label}
                  </span>
                </div>
                <p className="font-display text-2xl font-extrabold text-ink">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[14px] bg-[#f8fafc] p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.08em] text-muted">
              Próximas manutenções
            </p>
            <div className="space-y-2">
              {[
                {
                  label: "Preventiva · Unidade Centro",
                  time: "Hoje · 08:00",
                  badge: "Agendada",
                  primary: true,
                },
                {
                  label: "Corretiva · Cliente Andrade",
                  time: "Hoje · 14:00",
                  badge: "Pendente",
                  primary: false,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[10px] bg-white px-3.5 py-3 transition-all duration-200 hover:shadow-sm hover:ring-1 hover:ring-brand/15"
                >
                  <div
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      item.primary ? "bg-brand" : "bg-brand-dark"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-ink">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted">{item.time}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      item.primary
                        ? "bg-brand text-white"
                        : "bg-ice text-brand"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={360} className="absolute -right-10 top-14 z-10 w-48">
        <div className="rounded-2xl border border-line bg-white p-4 shadow-[0_12px_36px_-12px_rgba(18,81,141,0.15)] transition-transform duration-300 hover:scale-105">
          <p className="text-[11px] font-bold uppercase tracking-[.1em] text-brand">
            Contrato ativo
          </p>
          <p className="mt-1 text-[15px] font-bold text-ink">Empresa ABC</p>
          <p className="mt-1 text-xs text-muted">12 equipamentos</p>
          <div className="mt-2.5 h-1 rounded-full bg-ice">
            <div className="h-full w-3/4 rounded-full bg-brand" />
          </div>
          <p className="mt-1.5 text-[11px] text-muted">75% da vigência</p>
        </div>
      </Reveal>
    </div>
  );
}
