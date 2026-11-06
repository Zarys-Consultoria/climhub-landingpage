"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/brand/logo-climhub.png";
import headerLogo from "@/assets/brand/logo2-climhub.png";

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5585987734863&text&type=phone_number&app_absent=0";

export function ActionButton({ children, href = "/", light = false }: { children: ReactNode; href?: string; light?: boolean }) {
  const className = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${light ? "bg-white text-brand hover:bg-ice" : "bg-brand text-white hover:bg-brand-dark"}`;
  return href.startsWith("/") ? <Link href={href} className={className}>{children}<ArrowRight size={17} /></Link> : <a href={href} className={className}>{children}<ArrowRight size={17} /></a>;
}

function InstagramIcon({ size = 27 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="6" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" /></svg>; }
function LinkedInIcon({ size = 27 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" /></svg>; }

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [{ href: "/solucoes", label: "Soluções" }, { href: "/#solucoes", label: "Funcionalidades" }, { href: "/#campo", label: "Operação em campo" }, { href: "/planos", label: "Planos" }];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-6">
        <Link href="/" aria-label="Climhub — início">
          <Image src={headerLogo} alt="Climhub" priority className="h-auto w-28 object-contain object-left md:w-36" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((link) => {
            const active = pathname === link.href || (link.href === "/#campo" && pathname === "/");
            return (
              <a key={link.href} href={link.href} className={`nav-link relative py-2 text-sm font-semibold transition ${active ? "text-ink" : "text-ink/70 hover:text-brand"}`}>
                {link.label}
                <span className={`nav-underline absolute -bottom-1 left-0 right-0 h-[3px] rounded-full ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </a>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <ActionButton href="/solucoes">Conhecer o Climhub</ActionButton>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ice active:bg-brand/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="animate-menu-open border-t border-line bg-white px-4 pb-5 pt-3 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-[15px] font-semibold text-ink transition-colors active:bg-ice">
              {link.label}
            </a>
          ))}
          <div className="mt-3">
            <ActionButton href="/solucoes">Conhecer o Climhub</ActionButton>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-[#0b1d2f] px-6 pb-10 pt-12 text-white md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        <div>
          <Image src={logo} alt="Climhub" className="h-auto w-56 object-contain object-left md:w-72" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45 md:mt-5">
            Sua operação de climatização, mais simples. Gerencie tudo em uma única plataforma.
          </p>
          <div className="mt-5 flex items-center gap-5 md:mt-6">
            <a href="#" aria-label="Instagram" className="text-white/60 transition-all duration-200 hover:scale-110 hover:text-brand">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/60 transition-all duration-200 hover:scale-110 hover:text-brand">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <nav aria-label="Navegação do rodapé">
          <h3 className="text-xs font-bold uppercase tracking-[.15em] text-white">Navegação</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/50 md:mt-5 md:space-y-3">
            <li><Link href="/solucoes" className="transition-colors hover:text-brand">Soluções</Link></li>
            <li><Link href="/#solucoes" className="transition-colors hover:text-brand">Funcionalidades</Link></li>
            <li><Link href="/#campo" className="transition-colors hover:text-brand">Operação em campo</Link></li>
            <li><Link href="/#planos" className="transition-colors hover:text-brand">Planos</Link></li>
          </ul>
        </nav>
        <nav aria-label="Contato">
          <h3 className="text-xs font-bold uppercase tracking-[.15em] text-white">Contato</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/50 md:mt-5 md:space-y-3">
            <li><a href="mailto:contato@climhub.com.br" className="transition-colors hover:text-brand">contato@climhub.com.br</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">Falar com um especialista</a></li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 md:mt-14 md:pt-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Climhub. Sua operação de climatização, mais simples.
          </p>
          <a href="https://zarysconsultoria.com.br/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 text-xs text-white/40 transition-colors hover:text-white/70">
            <span>Um produto</span>
            <svg className="h-5 w-5 transition-transform group-hover:scale-110" viewBox="110.95 71.61 528.65 518.56" aria-hidden="true"><path transform="matrix(1,0,0,-1,577.8773,350.00938)" d="M0 0C17.462 18.846-.436 42.085-13.537 52.884L-142.461-72.599C-143.162-73.282-164.363-53.377-180.03-35.939L-13.425 130.667C-10.769 129.046 59.359 77.074 60.786 21.672 61.723-14.716 42.054-37.319 34.236-45.018 34.234-45.021-69.066-145.889-69.066-145.889-69.066-145.889-106.967-109.321-106.974-109.313Z" fill="#05c3de" /><path transform="matrix(1,0,0,-1,446.1242,562.8321)" d="M0 0C-23.368-19.576-48.727-27.344-78.952-23.206-106.224-19.473-119.725-4.417-128.504 3.018L-229.414 104.058C-217.591 117.693-204.932 130.108-191.369 142.262L-86.155 39.537C-63.99 17.373-40.049 38.56-40.05 38.56Z" fill="#f6be00" /><path transform="matrix(1,0,0,-1,319.5751,98.95807)" d="M0 0C23.368 19.576 48.727 27.344 78.952 23.206 106.224 19.473 119.725 4.417 128.504-3.018L230.144-104.789 192.02-142.913 86.155-39.537C63.99-17.373 40.049-38.56 40.05-38.56Z" fill="#f6be00" /><path transform="matrix(1,0,0,-1,448.5024,541.0487)" d="M0 0-157.043 156.282C-156.744 157.056-118.782 194.757-118.782 194.757L38.252 35.98C38.256 35.976 54.296 18.428 37.289 .906 19.61-17.31 0 0 0 0" fill="#f6be00" /><path transform="matrix(1,0,0,-1,475.4362,278.03068)" d="M0 0-38.288-38.288-195.575 118.625C-199.988 124.104-203.093 130.355-203.183 137.526-203.307 147.271-198.13 156.685-189.545 161.575-182.49 165.593-172.344 166.911-165.135 162.817-160.569 160.224-157.022 156.215-153.198 152.447Z" fill="#f6be00" /><path transform="matrix(1,0,0,-1,183.3559,339.6678)" d="M0 0C-.004 0-31.757 8.216-57.582-18.191-69.161 7.2-72.41 25.756-54.033 48.274-43.849 60.752 73.409 175.134 73.413 175.138 86.726 163.599 98.754 151.284 110.527 137.885 110.526 137.884 9.866 33.5 3.321 27.438-12.088 13.167 0 .019 0 0" fill="#f6be00" /><path transform="matrix(1,0,0,-1,233.9289,410.38929)" d="M0 0C4.088 36.65-20.959 56.156-20.96 56.157L96.641 171.225 134.396 133.353C129.029 126.585-.005-.005 0 0" fill="#f6be00" /><path transform="matrix(1,0,0,-1,218.0373,401.6761)" d="M0 0C0-25.83-20.939-46.77-46.77-46.77-72.6-46.77-93.539-25.83-93.539 0-93.539 25.83-72.6 46.77-46.77 46.77-20.939 46.77 0 25.83 0 0" fill="#f6be00" /></svg>
            <span className="font-semibold">Zarys Consultoria</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
