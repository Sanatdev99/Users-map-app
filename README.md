Users Map App

Live Demo: https://users-map-app-ycb6.vercel.app/

Main Branch: main

📌 Overview

This project is a React + TypeScript application built with Vite.
It contains two main pages:

Users Page (CRUD + IndexedDB)

Map Page (Polygon Drawing on Leaflet)

The project meets all technical requirements:

TypeScript

ESLint + Prettier

TailwindCSS

React-Hook-Form + Zod validation

IndexedDB/localStorage data persistence

Zustand global state

Responsive UI

React-Leaflet + Turf.js for polygon logic

Clean folder architecture

🚀 Features
👤 Users Page

CRUD user management with modal forms.

Includes:

Add new user (modal form)

Edit user (modal form with pre-filled data)

Delete user (confirmation modal + reason textarea)

IndexedDB/localStorage persistence

Form validation using Zod

Photo uploading (if added)

Loading states + success/error notifications

Optional search & pagination support

Fully responsive design

User data fields:

First Name

Last Name

Birthdate (date picker)

Gender (radio buttons)

🗺 Map Page

Interactive map with polygon drawing.

Includes:

Leaflet + React-Leaflet map

Add polygon by clicking points

Turf.js support

Reset / clear polygon

Responsive layout

Marker & styling customization

🧰 Tech Stack
Category	Libraries
Framework	React 18 + TypeScript
Builder	Vite
UI	TailwindCSS v3
Forms	React Hook Form + Zod
State	Zustand
Maps	Leaflet + React-Leaflet
Geo Tools	Turf.js
Storage	IndexedDB / LocalStorage
Deployment	Vercel
Linting/Formatting	ESLint + Prettier
📁 Project Structure
src/
 ├── components/
 │    ├── ui/
 │    ├── forms/
 │    └── modals/
 ├── pages/
 │    ├── UsersPage.tsx
 │    ├── MapPage.tsx
 │    └── App.tsx
 ├── hooks/
 ├── store/      # Zustand store
 ├── utils/      # validation, helpers
 ├── styles/
 │    └── index.css
 ├── lib/
 │    └── db.ts   # IndexedDB/localStorage utils
 ├── main.tsx
 └── router.tsx

🛠 How to Run Locally
Requirements:

Node 18+

npm 9+

Installation:
npm install
npm run dev

Production Build:
npm run build
npm run preview

🗄 Storage

User data is saved in:

IndexedDB (preferred)

Fallback: localStorage

So data persists after page refresh.

Demo GIFs

Below are short demo GIFs showing key features of the project.

👤 Users Page (CRUD + Modals + IndexedDB)

(create, edit, delete, modal-in-modal)


🗺 Map Page (Polygon Drawing)

(interactive polygon drawing with Leaflet)


📱 Responsive Layout

(mobile + desktop)
