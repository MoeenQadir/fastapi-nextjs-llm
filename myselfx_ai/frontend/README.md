# MyselfX AI — Frontend

Real-time AI chat assistant frontend built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

- **Live demo:** https://myselfx-ai.vercel.app
- **Author:** Moeen Ul Qadir — myselfxdeveloper@gmail.com

## Features

- Real-time **WebSocket chat** with streaming responses (PydanticAI agent)
- Automatic **offline demo mode** so the app always works on static hosting (Vercel)
- JWT authentication with HTTP-only cookies and auto-refresh
- Browser-persisted conversation history
- Light / dark theme
- Responsive dashboard layout

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS v4, Radix-inspired shadcn-style components |
| State | Zustand, TanStack Query |
| Markdown | react-markdown + remark-gfm + rehype-highlight |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

### Env vars (`.env.local`)

```env
# Backend API URL (server-side proxy only)
BACKEND_URL=http://localhost:8000

# WebSocket URL for real-time chat (client-side)
NEXT_PUBLIC_WS_URL=ws://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Without `NEXT_PUBLIC_WS_URL` the chat gracefully falls back to offline demo mode.

## Scripts

```bash
npm run dev          # dev server (port 3000)
npm run build        # production build
npm run start        # start production server
npm run lint         # eslint
npm run type-check   # TypeScript check
npm run test         # vitest unit tests
```

## Deploying to Vercel

1. Import this repo into Vercel.
2. Set **Root Directory** to `myselfx_ai/frontend` (or push with a repo-root `vercel.json` that already sets `rootDirectory`).
3. Framework preset: **Next.js** (auto-detected).
4. Add env vars as needed (`BACKEND_URL`, `NEXT_PUBLIC_WS_URL`, `NEXT_PUBLIC_SITE_URL`).
5. Deploy — your URL will be `https://<your-project>.vercel.app`.

>`myselfx-ai.vercel.app` is recommended for this project.

## Contact

- **Email:** myselfxdeveloper@gmail.com
- **Phone / WhatsApp:** +923441586424
- **Location:** Multan, Punjab, Pakistan