# Portfolio (React + TypeScript + Tailwind)

Modern, component-based portfolio with i18n support (DE/EN), glassmorphism cards, and a dark theme.

## Quick start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Customize content

- Update text in `src/i18n/en.ts` and `src/i18n/de.ts` (look for `//!!` placeholders).
- Replace imagery and links in `src/data/projects.ts`, `src/data/skills.ts`, and `src/data/certificates.ts`.
- Swap the logo in `src/components/Navbar.tsx` and background image in `src/index.css`.
- Update contact details in `src/sections/Contact.tsx` and social links in `src/components/Footer.tsx`.

## Structure

- `src/components`: reusable UI components
- `src/sections`: page sections
- `src/data`: project, skill, and certificate data
- `src/i18n`: translations and provider
