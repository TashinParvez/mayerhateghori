# Mayer Hatekhori

**Mom's Teaching Guide / মায়ের হাতেখড়ি**

A bilingual, family-friendly digital guidebook for the first month of a young child's learning journey. It helps parents turn everyday household activities into practical lessons for independence, curiosity, observation, emotional expression, creativity, and real-world understanding.

> The project is focused on Bangla-first, hands-on learning and also provides an English interface.

## Overview

**Mayer's Hatekhori** is a responsive web application that presents Month 1 of a six-month child-development guide. Parents can explore learning themes, follow a visual chapter roadmap, open detailed activities, use printable wall-chart guides, and learn how to handle resistance with calm, practical scripts.

The app encourages learning through real-life play instead of memorization. It is designed for parents and guardians to use at home with a child.

## Features

- Bangla and English interface with a persistent language preference
- Month 1 learning-roadmap and chapter details
- Eight practical learning areas, including:
  - Independence and daily routines
  - Language and storytelling
  - Feelings and emotional expression
  - Creative art
  - Nature observation
  - Kitchen and health awareness
  - Market observation
  - Mind gym activities
- Parent guidance for the 60/40 and 70/30 learning principles
- Daily-routine and behavior-handling guidance
- Printable and downloadable poster content
- Morning chart, Kim's game, nature walk, feelings chart, market, and storytelling activities
- Responsive desktop and mobile navigation
- Bilingual content and Bangla numerals

## Screenshots / Demo

Screenshots and a public demo link can be added here once they are available.

Suggested screenshot locations:

- `docs/screenshots/home-bangla.png`
- `docs/screenshots/roadmap.png`
- `docs/screenshots/charts-and-play.png`
- `docs/screenshots/parent-guide.png`

To add a live deployment, set the public URL in this section:

```md
**Live demo:** https://your-deployment-url.example
```

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- Motion
- Express and dotenv (available project dependencies)
- Node.js built-in test runner with `tsx`

## Installation & Setup

### Prerequisites

- Node.js 18 or newer
- npm

### Run locally

```bash
git clone https://github.com/TashinParvez/mayerhateghori.git
cd mayerhateghori
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

The development server binds to `0.0.0.0`, so it is also accessible from another device on the same network using the host machine's IP address and port `3000`.

### Other useful commands

```bash
npm run build
npm run preview
npm run lint
```

- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs the TypeScript type checker

### Run tests

The repository includes utility tests in `src/utils/appLogic.test.ts`.

```bash
npx tsx --test src/utils/appLogic.test.ts
```

## Environment Variables

The current application interface does not require environment variables to build or run locally.

An `.env.example` file is included for AI Studio/Google Gemini integration templates:

| Variable | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | Reserved for Gemini API calls; not currently read by the React source |
| `APP_URL` | Reserved for a hosted app URL or callbacks; not currently read by the React source |
| `DISABLE_HMR` | Optional Vite setting used to disable HMR and file watching |

For optional local configuration, copy the template:

```bash
cp .env.example .env
```

Do not commit real API keys or secrets. In the current source, copy the `.env` file only if you are adding an integration that uses those values.

## Usage

1. Open the app and choose **English** or **বাংলা** from the header.
2. Start on the Home page to review Month 1 and the six-month plan.
3. Select **See Learning Topics** / **শেখার বিষয়গুলো দেখুন** to open the roadmap.
4. Choose a learning cluster to review activities, instructions, benefits, and a Japanese learning principle.
5. Open **Charts & Play** / **খেলা ও চার্ট** for the complete practical activity collection.
6. Open **Parents' Guide** / **মা-বাবার গাইড** for rules, routines, and resistance-handling scripts.
7. Use printable wall charts or poster actions where available.

Language selection is saved in the browser with `localStorage`.

## Project Structure

```text
.
├── src/
│   ├── App.tsx                 # Main navigation and application shell
│   ├── main.tsx                # React entry point
│   ├── index.css               # Global and Tailwind styles
│   ├── types.ts                # Shared TypeScript types
│   ├── assets/
│   │   └── images/             # Local learning and illustration assets
│   ├── components/
│   │   ├── HomeView.tsx
│   │   ├── RoadmapView.tsx
│   │   ├── ClusterDetailView.tsx
│   │   ├── ChartsAndPlayView.tsx
│   │   ├── PlayGuides.tsx
│   │   ├── ParentGuideView.tsx
│   │   ├── ClusterVisuals.tsx
│   │   ├── SafeImage.tsx
│   │   └── ...
│   ├── data/
│   │   ├── month1Content.ts    # Bilingual app content
│   │   └── images.ts           # Image mappings
│   └── utils/
│       ├── appLogic.ts
│       ├── appLogic.test.ts
│       └── posterDownload.ts
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .env.example
```

## Deployment

Build the static frontend before deployment:

```bash
npm install
npm run build
```

The generated `dist/` directory can be hosted on Vite-compatible static hosting services such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

The repository does not currently include an active deployment workflow or a confirmed public live URL. Configure hosting in the provider's dashboard and add the final URL to the Screenshots / Demo section.

For a generic static host, set the publish or output directory to `dist/`.

## Future Improvements

- Add a confirmed live demo URL and application screenshots
- Extend the roadmap beyond Month 1
- Add downloadable or printable PDF guides
- Add progress tracking for parents and completed activities
- Add optional cloud sync across devices
- Add more regional languages
- Add automated accessibility and responsive-layout tests
- Add a settings page for fonts, text size, and reduced motion
- Add unit and end-to-end test scripts to `package.json`
- Integrate age-specific learning recommendations

## Contributing Guidelines

Contributions are welcome.

1. Fork the repository.
2. Create a focused feature or fix branch:

   ```bash
   git checkout -b feature/my-improvement
   ```

3. Keep content updates aligned with the bilingual `BilingualText` structure.
4. Add or update tests for changed utility logic.
5. Run checks before opening a pull request:

   ```bash
   npm run lint
   npm run build
   npx tsx --test src/utils/appLogic.test.ts
   ```

6. Open a pull request with a concise description of the change and screenshots for UI updates.

Please avoid committing generated `dist/`, local environment files, API keys, or personal information.

## Contact / Credits

- **Maintainer:** [Tashin Parvez](https://github.com/TashinParvez)
- **Repository:** [TashinParvez/mayerhateghori](https://github.com/TashinParvez/mayerhateghori)

Content and UI assets used in this project are maintained by the repository owner. Contributions and educational feedback are welcome through GitHub Issues or Pull Requests.
