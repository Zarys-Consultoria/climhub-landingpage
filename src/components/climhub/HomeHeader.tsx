"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import headerLogo from "@/assets/brand/logo2-climhub.png";
import { WHATSAPP_URL } from "@/components/climhub/SiteChrome";

const nav = [
  { href: "/solucoes", label: "Soluções" },
  { href: "#solucoes", label: "Funcionalidades" },
  { href: "#campo", label: "Operação em campo" },
  { href: "/planos", label: "Planos" },
];

function smoothScroll(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
}

export function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>) {
    smoothScroll(e);
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-6">
        <a href="#inicio" onClick={smoothScroll} aria-label="Climhub, início">
          <Image
            src={headerLogo}
            alt="Climhub"
            priority
            className="h-auto w-28 object-contain object-left md:w-36"
          />
        </a>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                onClick={smoothScroll}
                className="text-sm font-semibold text-ink/70 transition hover:text-brand"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink/70 transition hover:text-brand"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Falar conosco
            <ArrowRight size={16} />
          </a>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ice active:bg-brand/10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="animate-menu-open border-t border-line bg-white px-4 pb-5 pt-3 md:hidden">
          {nav.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block rounded-lg px-3 py-3 text-[15px] font-semibold text-ink transition-colors active:bg-ice"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-[15px] font-semibold text-ink transition-colors active:bg-ice"
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white active:bg-brand-dark"
          >
            Falar conosco
            <ArrowRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
