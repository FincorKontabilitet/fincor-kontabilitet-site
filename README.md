# Fincor Kontabilitet

Faqja zyrtare e zyrës së kontabilitetit **Fincor Kontabilitet**. Prezanton shërbimet e zyrës, mënyrën e punës, paketat dhe pyetjet e shpeshta, dhe lejon klientët e rinj të kërkojnë një konsultë falas përmes një formulari.

## Çfarë përmban

- **Ballina** (`/`): seksioni kryesor, shërbimet, pse ne, si punojmë, zgjedhësi interaktiv i paketave, pyetjet e shpeshta dhe formulari i kontaktit.
- **Faqet e shërbimeve** (`/sherbimet/<slug>`): një faqe për secilin nga gjashtë shërbimet, me çfarë përfshin dhe formularin e kontaktit me shërbimin e parazgjedhur.
- **Formulari i konsultës**: kërkesat ruhen në Netlify Forms dhe shfaqen te paneli i projektit.

## Teknologjitë

- TanStack Start + React 19
- Tailwind CSS 4
- Netlify Forms (kërkesat për konsultë)
- Netlify Image CDN (imazhet shërbehen në WebP me madhësi të përshtatur)

## Ndryshimi i përmbajtjes

- Emri, adresa, telefoni, emaili, orari, premtimet, hapat dhe pyetjet: `src/data/site.ts`
- Shërbimet dhe paketat: `src/data/services.ts`
- Imazhet: `public/img/`

> Adresa, telefoni dhe emaili aktualë janë shembuj – zëvendësojini me të dhënat reale të zyrës para publikimit.

## Nisja lokale

```bash
pnpm install
netlify dev   # ose: pnpm dev
pnpm test
```

Formulari dërgon kërkesa vetëm kur faqja është e publikuar në Netlify (ose nën `netlify dev`); një parapamje e thjeshtë Vite nuk i përpunon dërgimet.

## Hapat e mundshëm më tej

- Zëvendësimi i të dhënave të kontaktit dhe imazheve me ato reale të zyrës
- Njoftime me email për çdo kërkesë të re (Netlify Forms → njoftimet)
- Version anglisht i faqes
- Blog / lajme tatimore për klientët
