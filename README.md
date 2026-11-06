# Climhub Landing Page

Site institucional do **Climhub**, o sistema de **gestão de manutenção, comodato e PMOC de
equipamentos de climatização** do grupo Zarys. A landing page apresenta o produto, as soluções e os
planos, permitindo que o visitante entre em contato ou contrate o sistema.

## Páginas

- **`/` (home):** hero, proposta de valor, funcionalidades, operação em campo (fluxo completo do
  atendimento em 9 etapas), resumo dos planos e chamada final para ação.
- **`/solucoes`:** módulos do produto em detalhe (clientes, equipamentos, contratos, PMOC, ordens de
  serviço, manutenções) e como a operação se conecta de ponta a ponta.
- **`/planos`:** comparativo completo dos planos **Start**, **Pro** e **Premium**.

## Stack

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4:** um único projeto, renderizado no
  servidor em build time.
- **Export estático:** `output: "export"` gera HTML, CSS e JS estáticos em `dist/` (um `index.html`
  por rota), ideal para hospedagem estática e bom para SEO. O site funciona sem servidor Node.
- **Server Components por padrão:** `"use client"` apenas nos componentes que precisam de interação
  (cabeçalho/menu e animações de scroll). Todo o conteúdo é renderizado no HTML.
- **Animações de entrada em CSS:** um `IntersectionObserver` leve apenas adiciona a classe que dispara
  a animação (`fade-up`). Não há animação feita em JavaScript, e o conteúdo continua visível caso o JS
  falhe (progressive enhancement via `<noscript>`).
- **lucide-react** para ícones e **next/font** (Inter e Manrope) com `display: swap`.

## Pré-requisitos

- **Node.js 20+**

## Como rodar localmente (desenvolvimento)

```bash
npm install
npm run dev
```

A aplicação sobe em **http://localhost:3000**.

## Build estático e preview de produção

```bash
# Gera o site estático em dist/
npm run build

# Serve o conteúdo de dist/ (preview do que vai para produção)
npx serve dist -l 3005
```

O preview sobe em **http://localhost:3005**. O conteúdo de `dist/` é totalmente estático e corresponde
ao que deve ser publicado em produção.

## Acessar pelo celular (mesma rede Wi-Fi)

Para testar em dispositivos móveis na rede local, sirva o **build estático** (`dist/`). O servidor de
desenvolvimento pode não carregar corretamente quando acessado fora do `localhost`.

1. PC e celular na **mesma rede Wi-Fi**.
2. Gere o build e sirva o `dist/` (passo acima).
3. Descubra o IP do PC:
   - macOS: `ipconfig getifaddr en0`
   - Linux: `hostname -I`
4. No celular, acesse `http://<IP-do-PC>:3005/`. Teste também `/solucoes/` e `/planos/`.

Se a página não abrir, verifique se o firewall do PC libera a porta na rede local.

## Scripts

- `npm run dev`: ambiente de desenvolvimento (`http://localhost:3000`)
- `npm run build`: gera o site estático em `dist/`
- `npm run lint`: ESLint
- `npm run format`: Prettier

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # layout raiz, metadados/SEO, fontes
│   ├── globals.css         # Tailwind v4 (@theme) e animações
│   ├── page.tsx            # home
│   ├── solucoes/page.tsx   # página de soluções
│   └── planos/page.tsx     # página de planos
├── assets/brand/           # logos e símbolos
└── components/climhub/
    ├── HomeHeader.tsx       # cabeçalho da home (client)
    ├── SiteChrome.tsx       # cabeçalho e rodapé das páginas internas (client)
    ├── Reveal.tsx           # wrapper de animação de entrada (client)
    ├── SolutionsShowcase.tsx
    ├── DashboardMockup.tsx  # mock do painel (hero)
    └── PhoneMockup.tsx      # mock do app no celular
public/
├── robots.txt
└── sitemap.xml
```

## SEO

- `robots.txt` e `sitemap.xml` em `public/`.
- Meta tags completas no `layout.tsx`: `title` (com template), `description`, `keywords`, Open Graph,
  Twitter card e `canonical` por página.
- Páginas pré-renderizadas como HTML estático.
