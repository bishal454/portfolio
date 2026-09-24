# Bishal Ranjan Sah Portfolio

A modern, production-quality personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- Hero section with profile photo and animated background
- About section with professional introduction
- Technology stack display
- Featured projects (NeuroGlow)
- Achievements and recognition section
- Education timeline
- Contact form
- Fully responsive design
- Dark-first interface with smooth animations

## Getting Started

### Install dependencies
```bash
npm install
```

### Development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
```

### Lint
```bash
npx eslint app/
```

## Project Structure
```
├── app/
│   ├── components/     # React components (Hero, About, Projects, etc.)
│   ├── data/          # Centralized content (portfolio.ts)
│   ├── globals.css    # Global styles and Tailwind
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main page
├── public/
│   └── images/        # Static assets (profile photo)
├── package.json
├── tsconfig.json
├── next.config.ts
└── AGENTS.md
```

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React (icons)

## Deployment
Deploy on [Vercel](https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app).
