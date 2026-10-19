# Morgan's Garden Advice

Morgan S. Company / Morgan Seed Company: a C64-inspired garden advice page and field notebook for dated photographs, observations, and plant-first reasoning.

The site describes five-picture garden reviews and written seed recommendations. It is a static React application: the contact section currently explains intake requirements, and submissions, payments, uploads, and live weather lookups are not implemented.

## Development

Use Node.js 24 and npm. The lockfile is committed; use `npm ci` for a reproducible installation.

```sh
npm ci
npm run dev
```

Vite prints the local development URL. To build and serve the production bundle:

```sh
npm run build
npm run preview
```

The build is written to `dist/`. No environment variables or credentials are needed for the current static site.

## Checks and tests

```sh
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:browser
```

- `npm test` checks local documentation links, research JSON, and original photograph hashes, sizes, and manifest coverage. It runs offline and does not verify external URLs or factual claims.
- `npm run test:browser` serves the production build and checks the rendered journal, photograph decoding, navigation, intake status, button contrast, and narrow-screen layout. Run `npm run build` first. Browser checks do not depend on external stock-image services.
- `npm run check` runs lint, repository tests, the build, and browser tests in sequence. Install the Playwright browser first; on Linux, `npx playwright install --with-deps chromium` also installs required system libraries.

To use an existing Chromium installation, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable path. GitHub Actions runs the same checks on pushes and pull requests.

## Repository map

- `src/App.tsx` and `src/App.css`: service page, intake information, and creative acknowledgments.
- `src/components/GardenStrip.tsx` and `src/data/gardenJournal.ts`: dated garden journal and photograph selection.
- `public/garden/2026-10-17/`: 23 original photographs and their SHA-256/byte-count manifest. Preserve the originals and update the manifest if intentionally replacing them.
- `docs/`: field logs, research, reading lists, and historical checkpoints. Dated observations and weather snapshots are historical evidence, not current conditions.
- `docs/archive/`: superseded authored material retained for reference; excluded from the application.
- `tests/`: repository integrity and browser regression checks.

## Garden logs and research

- [Garden Log — 17 October 2026: Late Bloomers](docs/GARDEN_LOG_2026-10-17_LATE_BLOOMERS.md): calendulas, cosmos, sunflowers, nasturtiums, original photographs, and dated NASA POWER/lunar data.
- [Garden Log — 30 August 2026](docs/GARDEN_LOG_2026-08-30_CHICKS_SEEDS_SOUNDTRACK.md): chicks, garden observations, calendula seed, and the cleaning soundtrack.
- [Weather Is What the Garden Has to Solve](docs/WEATHER_BIOLOGY_MATH_WHITEPAPER.md): biological and mathematical methods for translating weather evidence into garden advice, with Works Cited.
- [NotebookLM: Flowers, NASA, Sagan and the Space Cadets](docs/NOTEBOOKLM_GARDEN_NASA_SAGAN_PROMPT.json): an audio prompt derived from the August garden conversation; use the whitepaper alongside it for source context.
- [Offline-First Archon Checkpoint — 27 August 2026](docs/MSSS_OFFLINE_FIRST_ARCHON_CHECKPOINT_2026-08-27.md): historical architecture and mathematics notes; proposed capabilities are not a description of the current frontend.
- [Title 22 — Congressional History and Reading Links](docs/TITLE_22_CONGRESSIONAL_HISTORY_READING.md): statutory and congressional reading sources.
- [USIP / Donald J. Trump Name — Fact Check, 17 September 2026](docs/USIP_TRUMP_NAME_FACT_CHECK_2026-09-17.md): dated branding and congressional-origin research, including limits of the legal evidence.
- [USIP Wordplay Checkpoint — 17 September 2026](docs/USIP_PISS_JOKE_CHECKPOINT_2026-09-17.md): a preserved satire note.
- [G4LO Creative Influences](docs/G4LO_CREATIVE_INFLUENCES.md): artist links, creative credit, and an explicit independence boundary.
- [Bibliography and Documentation Audit — 19 October 2026](docs/BIBLIOGRAPHY_AUDIT_2026-10-19.md): corrections, source-check results, and unresolved verification limits.

When updating research, distinguish observation, calculation, inference, and speculation. Keep dates and units with data, preserve source provenance, and record retrieval failures separately from confirmed citation errors.
