# GDG RBU Frontend Task

This is a frontend landing page built for the GDG RBU recruitment task. The goal was to build a responsive, interactive page following a neo-brutalist design reference.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- Google Gemini API (called from a Next.js API route)

## Features

- Responsive design that works well across mobile, tablet, and desktop screens.
- Dark and light mode toggle.
- Subtle scroll and interactive animations (which respect user reduced-motion preferences).
- Accessible, using semantic HTML, ARIA labels, and clear keyboard focus outlines.
- Ask GDG: an AI chat box below the FAQ that answers questions about GDG RBU (powered by Google Gemini)

## How the AI feature works

The chat box sends the question to an API route (`/api/ask`). The route checks the question (not empty, max 300 characters) and calls the Gemini API with a system instruction that keeps answers limited to GDG RBU topics. The API key stays on the server, so it is never visible in the browser.

## Live Demo

[Link to Live Demo](https://gdg-rbu-aj.vercel.app/)

## Folder Structure

```text
├── design/              # Design reference screenshots
├── public/
│   └── images/          # Static assets (logo, shapes, team image)
├── src/
│   ├── app/
│   │   ├── globals.css  # Global Tailwind configuration and CSS variables
│   │   ├── layout.tsx   # Root layout and theme provider setup
│   │   └── page.tsx     # Main page assembling all sections
│   └── components/      # Individual UI sections and elements
│       ├── FAQ.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Team.tsx
│       ├── ThemeProvider.tsx
│       ├── ThemeToggle.tsx
│       └── UpcomingEvent.tsx
├── next.config.ts
└── package.json
```

## How to Run Locally

Clone the repository and install the dependencies:

```bash
npm install
```
Create a `.env.local` file in the project root (use `.env.example` as a reference) and add your Gemini API key:

GEMINI_API_KEY=your_key_here

You can get a free key from Google AI Studio (aistudio.google.com). Do not commit `.env.local`, it is already in `.gitignore`.

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the page.

To build the project for production, run:

```bash
npm run build
```

## Screenshots

### Desktop
![Desktop View](screenshots/desktop.png)

### Mobile
![Mobile View](screenshots/mobile.png)

### Dark Mode
![Dark Mode View](screenshots/dark.png)

## What I would improve

If I were to take this project further, a few things I would improve include:
- Fetching real event data from a backend API or CMS instead of using hardcoded objects.
- Writing tests for the interactive components (like the mobile menu and FAQ accordion) to make sure they are robust over time.
