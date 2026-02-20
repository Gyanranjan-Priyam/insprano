# Insprano — GCEK Techfest

<div align="center">

---

**Official website for Insprano, the annual Techfest of Government College of Engineering, Kalahandi (GCEK)**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

_Innovate. Compete. Inspire._

</div>

---

## 🌟 Overview

**Insprano** is the flagship annual Techfest of Government College of Engineering, Kalahandi (GCEK). This repository contains the source code for the official Insprano website, featuring event listings, registration info, gallery, merchandise, and more.

The website is built with a futuristic Tron-inspired design powered by [The GridCN](https://thegridcn.com) UI library, delivering an immersive digital experience.

### Key Features

- 🎯 **Events Portal** — Browse inter-college and intra-college events across all departments
- 🤖 **KiloBots** — Robotics events: Robo Sumo, Robo Soccer, Line Follower, Death Race
- 💻 **Codebreakers** — Coding & hackathon events including Hack Nova
- 🏫 **Intra-College Events** — Department-wise events (CE, CSE, ECE, EE, ME, and more)
- 🖼️ **Gallery** — Photo highlights from past editions
- 🛍️ **Merchandise** — Official Insprano merch showcase
- 📧 **Contact Page** — Get in touch with the organising committee
- 🎨 **Tron-Inspired UI** — Immersive design with 3D effects, neon glows, and HUD elements
- 🔒 **TypeScript** — Full type safety throughout the codebase
- 🎭 **Theme System** — Multiple themes (Ares, Tron, Clu, Athena, Aphrodite, Poseidon)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Gyanranjan-Priyam/insprano.git
cd insprano

# Install dependencies
npm install
# or
pnpm install

# Run the development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

## 📦 Project Structure

```
insprano/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── _components/            # Shared page components (error, not-found, etc.)
│   │   ├── (home)/                 # Homepage route group
│   │   ├── about-us/               # About page
│   │   ├── contact/                # Contact page
│   │   ├── gallery/                # Photo gallery
│   │   ├── merchandise/            # Merch page
│   │   ├── events/
│   │   │   ├── hackathon/          # Hackathon event page
│   │   │   ├── inter-college/      # Inter-college events
│   │   │   │   ├── kilobots/       # KiloBots sub-events
│   │   │   │   └── codebreakers/   # Codebreakers sub-events
│   │   │   └── intra-college/      # Intra-college dept. events
│   │   ├── layout.tsx              # Root layout
│   │   └── globals.css             # Global styles & themes
│   ├── components/
│   │   ├── ui/                     # shadcn/ui base components
│   │   ├── thegridcn/              # Tron-inspired UI components
│   │   ├── theme/                  # Theme provider & switcher
│   │   ├── layout/                 # Header, footer, Lenis scroll
│   │   └── website/                # Page-specific components
│   ├── data/
│   │   ├── eventData.ts            # All event data (inter + intra college)
│   │   ├── galleryItems.ts         # Gallery images
│   │   ├── devData.ts              # Team/developer data
│   │   ├── alumniData.ts           # Alumni data
│   │   └── index.ts                # Barrel exports
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility functions & SEO helpers
│   └── styles/                     # Tron theme CSS & intensity variants
├── public/
│   ├── assets/                     # Images and media
│   └── manifest.json               # PWA manifest
└── components.json                 # shadcn/ui configuration
```

### Main Pages

- **Home** (`/`) — Landing page with event highlights and marquee
- **Events**
  - `/events/hackathon` — Hackathon details
  - `/events/inter-college` — Inter-college event overview
  - `/events/inter-college/kilobots` — KiloBots robotics events
  - `/events/inter-college/codebreakers` — Codebreakers coding events
  - `/events/intra-college` — Department-wise intra-college events
- **Gallery** (`/gallery`) — Techfest photo gallery
- **Merchandise** (`/merchandise`) — Official merch
- **About Us** (`/about-us`) — About Insprano & GCEK
- **Contact** (`/contact`) — Reach the organising committee

## 🎨 UI & Design System

Built with [The GridCN](https://thegridcn.com) — a Tron-inspired design system with 50+ components and 6 unique themes.

### Available Themes

| Theme         | Color            | Inspiration                   |
| ------------- | ---------------- | ----------------------------- |
| **Ares**      | Red (#ff3333)    | God of War - Main theme       |
| **Tron**      | Cyan (#00d4ff)   | User - Classic Tron aesthetic |
| **Clu**       | Orange (#ff6600) | Program - Antagonist theme    |
| **Athena**    | Gold (#ffd700)   | Goddess of Wisdom             |
| **Aphrodite** | Pink (#ff1493)   | Goddess of Love               |
| **Poseidon**  | Blue (#0066ff)   | God of Sea                    |

Each theme includes custom OKLCH color palettes, neon glow effects, 3D grid visuals, CRT scanlines, and HUD animations.

## 🎯 Features

### Events System
- **Inter-College** — KiloBots (Robo Sumo, Robo Soccer, Line Follower, Death Race) and Codebreakers (Hack Nova hackathon)
- **Intra-College** — Events for CE, CSE, ECE, EE, ME and other departments
- Per-event detail pages with rules, prizes, timeline, team size, and contact info
- Category-filtered marquee on home page

### Gallery
- Grid-based photo gallery from past Techfest editions

### Merchandise
- Showcase of official Insprano merchandise

### Interactive UI
- 3D Spline scene on the hero section
- GSAP + ScrollTrigger scroll animations
- Lenis smooth scrolling
- Framer Motion transitions
- Tron-style HUD cards and overlays
- Fully responsive design

## 🛠️ Tech Stack

- **[Next.js 16.1](https://nextjs.org/)** — React framework with App Router
- **[React 19.2](https://react.dev/)** — UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** — Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Utility-first CSS
- **[The GridCN](https://thegridcn.com)** — Tron-inspired UI components
- **[shadcn/ui](https://ui.shadcn.com/)** — Component library foundation
- **[Three.js](https://threejs.org/)** — 3D graphics
- **[Spline](https://spline.design/)** — 3D hero scene
- **[Framer Motion](https://www.framer.com/motion/)** — Animations
- **[GSAP](https://gsap.com/)** — Scroll-driven animations
- **[Lenis](https://lenis.darkroom.engineering/)** — Smooth scrolling
- **[Radix UI](https://www.radix-ui.com/)** — Accessible primitives
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Theme management
- **[Vercel Analytics](https://vercel.com/analytics)** — Web analytics

## 💻 Development

### Adding / Editing Events

All event data lives in `src/data/eventData.ts`. Add a new `EventItem` to the relevant array (`kilobotsEvents`, `codebreakersEvents`, or a department array):

```typescript
{
  id: "kb-new-event",
  title: "New Event",
  shortDescription: "Short description shown on cards.",
  description: "Full description shown on the detail page.",
  thumbnail: "https://your-cdn.com/image.jpg",
  viewDetailsUrl: "/events/inter-college/kilobots/kb-new-event",
  tags: ["Robotics", "Manual"],
  eventDate: "Friday, October 17, 2025",
  eventTime: "10:00 AM",
  venue: "GCEK Ground Floor",
  teamSize: "2 to 4 members",
  entryFees: "Rs. 180 per head",
  prizes: [
    { position: "1st", reward: "₹8,000 + Certificates" },
  ],
  rules: ["Rule 1", "Rule 2"],
  contacts: [{ name: "Contact Name", phone: "+91 XXXXXXXXXX" }],
}
```

### Customizing Themes

Themes are defined in `src/app/globals.css`:

```css
[data-theme="ares"] {
  --primary: 2 90% 60%;
  --glow: 2 100% 50%;
  /* ... more theme variables */
}
```

## 🚢 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Configure environment variables if needed
4. Deploy!

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://insprano.gcek.ac.in
```

### Other Platforms

Standard Next.js — deployable on Netlify, Railway, AWS Amplify, or any Node.js host.

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/your-feature`)
3. **Commit your changes** (`git commit -m 'feat: add your feature'`)
4. **Push to the branch** (`git push origin feature/your-feature`)
5. **Open a Pull Request**

### Guidelines
- Follow existing code style and TypeScript conventions
- Write meaningful commit messages
- Test locally before submitting (`npm run build`)
- Keep event data changes in `src/data/eventData.ts`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[The GridCN](https://thegridcn.com)** — Tron-inspired UI library
- **[shadcn/ui](https://ui.shadcn.com/)** — Component library foundation
- **[Radix UI](https://www.radix-ui.com/)** — Accessible primitives
- **[Three.js](https://threejs.org/)** — 3D capabilities
- **[Spline](https://spline.design/)** — 3D hero scene

## 📞 Contact & Support

- 🌐 **Website**: [insprano.gcek.ac.in](https://insprano.gcek.ac.in)
- 📧 **Email**: Contact us through the [Contact Page](/contact)
- 💬 **GitHub Issues**: [github.com/Gyanranjan-Priyam/insprano/issues](https://github.com/Gyanranjan-Priyam/insprano/issues)

---

<div align="center">

**Built with ❤️ for GCEK Insprano Techfest**

_Innovate. Compete. Inspire._

</div>
