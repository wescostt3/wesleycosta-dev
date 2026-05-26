# Technical Decisions Log - AI Engineer Portfolio

This document details the architectural and engineering design choices made during the creation of the AI Engineer Portfolio Clone.

## 1. Modular and Customizable Architecture
- **Decision**: Separate the content data (variables) from the UI rendering logic.
- **Rationale**: The user requested the ability to quickly adapt this portfolio by changing only personal information. We created `data.js` as a global config object `window.PORTFOLIO_DATA` so that no HTML modifications are needed for basic customization.

## 2. Technology Stack & CDNs
- **Decision**: Avoid compilation/build steps (e.g. Vite, Webpack) and use lightweight CDNs for styling (Tailwind CSS) and icons (Lucide Icons).
- **Rationale**: Keeps the project fully static, portable, and extremely easy for the user to open locally without executing `npm install` or configuring dependencies.

## 3. High-Fidelity Canvas Particles Animation
- **Decision**: Implement a native HTML5 Canvas particle network inside `app.js` instead of using heavy external animation libraries.
- **Rationale**: Provides smooth performance, rich interactive visual background, and zero dependency weight.

## 4. Scroll-Triggered Reveal Animations
- **Decision**: Use `IntersectionObserver` to trigger Tailwind slide and fade animations when elements enter the viewport.
- **Rationale**: Replaces Framer Motion's complex React-specific triggers with standard, performant browser APIs.
