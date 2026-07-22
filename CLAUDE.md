# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal CV / portfolio site for Valentin Bourgoin (valentinbourgoin.fr), built with Next.js 16 (App Router) and React 19, with FR/EN i18n via next-intl. Content lives in `src/messages/{fr,en}/*.json`, not hardcoded in components.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint . (flat config, see eslint.config.mjs)
```

There is no test suite configured in this repo.

## Architecture

- **i18n routing**: FR/EN via `next-intl`, routed through the `src/app/[locale]/` dynamic segment (`defaultLocale: "fr"`, `localePrefix: "always"`, see `src/i18n/routing.ts`). `src/proxy.ts` (Next 16's rename of `middleware.ts`) redirects `/` to `/fr`. `src/i18n/navigation.ts` exports the locale-aware `Link`/`useRouter`/`usePathname`/`getPathname`, and `src/i18n/request.ts` merges the per-section message files into the request config.
- **Single page, section components**: `src/app/[locale]/page.tsx` renders one page by stacking section components in order: `Intro` → `About` → `Services` → `Resume` → `Contact`. `Footer` exists at `src/app/components/footer/index.tsx` but is not currently imported/rendered anywhere — a pre-existing gap, not i18n-related. Each section lives in `src/app/components/<section>/index.tsx`, is a server component, and reads copy via `useTranslations("<Namespace>")` — no hardcoded strings in JSX.
- **Message catalogs**: `src/messages/{fr,en}/{common,intro,about,services,resume,contact}.json`, one file per section, each namespaced at its top level (`Intro`, `About`, `Services`, `Resume`, `Contact`, plus `Meta`/`Footer` in `common.json`) to avoid key collisions when merged in `src/i18n/request.ts`. Update copy here, not in components. `Resume`'s work-history text and `Services`' service list are keyed objects (e.g. `Resume.work.works.omaj`) driven by an ordered array of keys in the component — add a new job/service by adding a JSON entry in both locales and a key to that array. Rich text (line breaks in `Resume`) uses `t.rich()` with `<br></br>`/`<hr></hr>` tags, not `dangerouslySetInnerHTML`.
- **Styling**: legacy CSS theme ("Kards" by styleshout), not Tailwind/CSS-in-JS. Stylesheets are imported globally in `src/app/[locale]/layout.tsx` in a fixed order: `vendor.css` → `base.css` → `fonts.css` → `main.css`. Icons come from Font Awesome and a custom `micons` icon font (both under `src/css/`). Custom webfonts (Lora, Poppins) live in `src/fonts/` and are loaded via `src/css/fonts.css`.
- **OG image**: `src/app/api/og/route.tsx` uses `next/og` (`ImageResponse`) to generate the Open Graph image dynamically at `/api/og`, referenced from `generateMetadata` in `src/app/[locale]/page.tsx`. It currently renders a static gradient + emoji, no text, so it isn't locale-aware.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).
