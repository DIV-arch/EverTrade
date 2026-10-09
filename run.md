# Running the EverTrade Frontend

This guide details the setup and execution steps for the EverTrade risk management landing platform.

---

## Prerequisites

Before running the application, ensure the following are installed:
- **Node.js**: Version 18.0.0 or higher (v20+ recommended)
- **npm**: Version 9.0.0 or higher (comes bundled with Node.js)

Verify your environment:
```bash
node -v
npm -v
```

---

## Quick Start

### 1. Install Dependencies
Clone the repository (if not already local) and install all required packages:
```bash
npm install
```

### 2. Start the Development Server
Launch the Vite development server with hot-module replacement (HMR):
```bash
npm run dev
```

By default, the server will be available at:
```
http://localhost:5173/
```

To expose the development server to your local network (e.g. for testing across mobile devices):
```bash
npm run dev -- --host
```

---

## Production Build & Preview

### Build for Production
To generate optimized production assets in the `dist/` directory:
```bash
npm run build
```

### Preview Production Build
To preview the generated production build locally:
```bash
npm run preview
```

---

## Project Structure

```
EverTrade/
├── public/
│   ├── logo.png               # High-resolution glassmorphism brand mark
│   └── hero-flowers.png       # Botanical glass sculpture asset
├── src/
│   ├── assets/
│   │   └── hero-flowers.png   # Sculpted thumbnail asset
│   ├── App.jsx                # Main hero split-panel layout & interactive modals
│   ├── index.css              # Custom two-tier Liquid Glass engine & grayscale palette
│   └── main.jsx               # React entry point
├── index.html                 # HTML shell with Google Fonts (Poppins & Source Serif 4)
├── package.json               # Scripts & dependencies (React, Vite, TailwindCSS, Lucide)
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS styling configuration
└── vite.config.js             # Vite configuration
```

---

## Design System & Features

- **Liquid Glass Aesthetic**: Two-tier glassmorphism (`.liquid-glass` light and `.liquid-glass-strong` heavy) with custom masked gradient perimeter borders.
- **Dynamic Background**: Autoplaying, looping, muted video layer beneath floating glass panels.
- **Strict Grayscale Palette**: High-contrast, monochromatic interface without color noise.
- **Two-Panel Responsive Split**: Left protocol panel + Right ecosystem & telemetry panel.
- **Interactive Modals**: Solana wallet connect flow, risk feature inspection dialogs, and navigation drawer.
