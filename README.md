# Users Map App

Live demo: https://users-map-2ut4whozt-sanatdev99s-projects.vercel.app/

## Summary
A Vite + React + TypeScript app for managing users (CRUD) and drawing polygons on a map.
Data persists in IndexedDB/localStorage. Forms use react-hook-form + zod. Map uses Leaflet/react-leaflet.

## Features
- Users CRUD with modal forms
- Delete confirmation modal that requires a deletion reason
- IndexedDB/localStorage persistence
- Map page with polygon drawing (Leaflet + react-leaflet)
- Validation, loaders, and success/error notifications
- ESLint, Prettier, TypeScript configured

## Tech stack
- React 18, Vite, TypeScript
- Tailwind CSS v3
- react-hook-form, zod
- react-leaflet / Leaflet
- Zustand (or Redux if used)
- turf.js (optional)
- Vercel for deployment

## Install & run
```bash
npm install
npm run dev
