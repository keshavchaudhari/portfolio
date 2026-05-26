# Keshav Chaudhari — Premium Developer Portfolio

A world-class, AI-powered developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, Recharts, and EmailJS.

## Features

- Premium SaaS-inspired UI (Vercel / Linear / Stripe aesthetic)
- Dark & light mode toggle
- Framer Motion animations throughout
- Scroll progress, particles, custom cursor
- EmailJS contact form
- Recharts GitHub activity visualization
- Fully responsive (mobile → desktop)

## Quick Start

```bash
cd portfolio1
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Copy `.env.example` to `.env`
3. Add your service ID, template ID, and public key

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Customize

- **Personal info**: `src/constants/site.ts`
- **Projects**: `src/data/projects.ts`
- **Skills**: `src/data/skills.ts`
- **Experience**: `src/data/experience.ts`
- **Resume**: Replace `public/resume.pdf` with your PDF

## Build & Deploy

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Vercel, Netlify, or GitHub Pages.

## Tech Stack

React · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · React Icons · Recharts · EmailJS
