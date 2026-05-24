# Portfolio (React + TypeScript + Tailwind)

Modernes, komponentenbasiertes Portfolio mit i18n (DE/EN), Dark-Theme, Glassmorphism-Karten, Projekt-Lightbox und responsivem Layout.

## Quick start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Inhalte anpassen

- Texte: `src/i18n/de.ts` und `src/i18n/en.ts` (achte auf `//!!`-Platzhalter).
- Projekte: `src/data/projects.ts` (Titel, Tech-Stack, Links, Bildpfade).
- Skills: `src/data/skills.ts` (Icon-Pfade in `public/skills/*`).
- Zertifikate: `src/data/certificates.ts` (Bildpfade in `public/certificates/*`).
- About-Galerie: `src/data/aboutGallery.ts` (Bildpfade in `public/about/*`).
- Logo: `src/components/Navbar.tsx` (`//!!`-Platzhalter).
- Hintergrundbild: `src/index.css` (`//!!`-Platzhalter).
- Kontakt & Socials: `src/sections/Contact.tsx` und `src/components/Footer.tsx`.

## Features

- Mehrsprachig: Deutsch/Englisch per Language Switcher
- Sticky Navbar mit aktivem Abschnitt
- Section-Layout: Home, About, Projects, Skills, Certificates, Contact
- Projektbilder mit Lightbox (Vollbild-Modal)
- Karten mit Glasmorphismus und Glow-Akzenten

## Struktur

- `src/components`: wiederverwendbare UI-Komponenten
- `src/sections`: Seitensektionen
- `src/data`: Projects/Skills/Certificates/About-Galerie
- `src/i18n`: Übersetzungen + Provider
- `public`: statische Bilder (Skills, Certificates, About, Background)

## Hinweise

- Bildpfade in den Datenfiles sind relativ zum `public`-Ordner.
- Falls ein Bild fehlt, erscheint es nicht in der UI oder wird als leere Karte angezeigt.
- Alle ersetzbaren Inhalte sind mit `//!!` markiert.
