import { Reveal } from "@/components/climhub/Reveal";

export function PhoneMockup() {
  return (
    <Reveal className="mx-auto w-[240px] md:w-[280px]">
      <div className="rounded-[32px] border-[5px] border-white/20 bg-white p-2.5 shadow-2xl shadow-black/20">
        <div className="overflow-hidden rounded-[24px] bg-[#f8fafc]">
          <div className="bg-brand px-5 pb-4 pt-5 text-white">
            <p className="text-[11px] font-semibold opacity-70">Agenda de hoje</p>
            <p className="mt-1 font-display text-xl font-extrabold">
              3 atendimentos
            </p>
          </div>
          <div className="flex flex-col gap-2.5 p-4">
            {[
              {
                time: "08:00",
                type: "Preventiva",
                client: "Empresa ABC · Unidade Centro",
                equip: "Split LG 18.000 BTUs",
                status: "Agendada",
                primary: true,
              },
              {
                time: "10:00",
                type: "Inspeção técnica",
                client: "Cliente Andrade · Sala 3",
                equip: "",
                status: "Pendente",
                primary: false,
              },
              {
                time: "14:00",
                type: "Troca de filtro",
                client: "Unidade Norte · Recepção",
                equip: "",
                status: "Pendente",
                primary: false,
              },
            ].map((item) => (
              <div
                key={item.time}
                className="rounded-[14px] border border-ice bg-white p-3.5 transition-all duration-200 hover:border-brand/25 hover:shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-bold text-white ${
                      item.primary ? "bg-brand" : "bg-brand-dark"
                    }`}
                  >
                    {item.time}
                  </span>
                  <span
                    className={`text-[11px] font-semibold ${
                      item.primary ? "text-brand" : "text-muted"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-sm font-bold text-ink">{item.type}</p>
                <p className="mt-1 text-xs text-muted">{item.client}</p>
                {item.equip && (
                  <p className="mt-0.5 text-[11px] text-muted">{item.equip}</p>
                )}
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <div className="rounded-[14px] bg-brand py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-brand-dark">
              Iniciar atendimento
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
