# Hady Sleam portfolio

Personal portfolio of Hady Sleam, a backend-focused developer (Node.js, Laravel, SQL) and third-year Physics and Computer Science student. Live site: https://hadysleam-afk.github.io/

## What this is

- A single-page portfolio with sections for selected work, stack, services and contact.
- English and Arabic, with right-to-left layout for Arabic.
- Project cards that say plainly what is real and what is demo data. SolarMind uses simulated telemetry. The WhatsApp Store Assistant runs on a simulated chat channel, and its Meta WhatsApp Cloud API adapter is written but not connected to a live account.
- Projects shown: SolarMind (full-stack demo), WhatsApp Store Assistant (backend demo), Community Platform (Laravel), and three interface projects.

## Stack

Next.js (static export) and React with TypeScript, built in `portfolio-next/`. Deployed to GitHub Pages by a GitHub Actions workflow (`.github/workflows/deploy.yml`).

## Images

Images are stored as base64 text files in `site/images-b64/` and decoded by the deploy workflow before the build. For local development, decode them into `portfolio-next/public/images`.

## Related repositories

- WhatsApp Store Assistant: https://github.com/hadysleam-afk/whatsapp-store-assistant
- SolarMind: https://github.com/hadysleam-afk/SolarMind
