## 🚀 Namaste React – Complete Learning Journey.

This repository documents my **complete React learning journey** inspired by  
**Namaste React by Akshay Saini**.

The goal of this repo is to build **strong React fundamentals**, understand **React internals**, and create **production‑ready applications**.

This monorepo contains my code for different episodes / milestones. For example, the `E03-Foundation` folder is a complete mini‑app built while learning JSX, components, routing, and Tailwind CSS.

---

## 📚 At a Glance

- **Learning Style**: Hands-on, episode‑wise implementations following Namaste React.
- **Main Project**: Food Ordering App (Swiggy/Zomato‑style) with routing, custom hooks, Redux, and Tailwind.
- **Goal**: From *Hello World* with CDN to **production‑ready, tested React apps**.
- **Best Place to Start**: Jump into `E03-Foundation` and run the app (see **Quick Start** below).

---

## 🧭 Table of Contents

- [📌 Course Philosophy](#-course-philosophy)
- [🧱 Tech Stack](#-tech-stack)
- [🗂️ Folder Structure (High‑Level)](#️-folder-structure-highlevel)
- [🧾 Project & File Summary](#-project--file-summary)
- [⚙️ How to Run the Projects Locally](#️-how-to-run-the-projects-locally)
- [🗺️ Course Roadmap (Episode‑wise)](#-course-roadmap-episodewise)
- [🍔 Final Project – Swiggy / Zomato Clone](#-final-project--swiggy--zomato-clone)
- [🎯 What I’ve Achieved (and Aiming For)](#-what-ive-achieved-and-aiming-for)
- [🙏 Credits](#-credits)
- [👨‍💻 Author](#-author)

---

## 📌 Course Philosophy

> “Don’t learn React, understand React.” – *Akshay Saini*

This journey focuses on:
- 🧠 **Deep fundamentals**
- ❓ Understanding **why** before **how**
- ⚙️ **React internals & performance**
- 🧑‍💻 **Real‑world projects**
- 🎯 **Interview‑oriented learning**

---

## 🧱 Tech Stack

- **React** (Functional Components & Hooks)
- **JavaScript (ES6+)**
- **Parcel** as the bundler (for now; may explore Vite later)
- **Tailwind CSS** for styling
- **React Router DOM** for routing
- **Redux Toolkit** for state management
- **Jest** & **React Testing Library** for testing

---

## 🗂️ Folder Structure (High‑Level)

- `E03-Foundation/` – Food Ordering App built while learning JSX, components, hooks, routing, and Tailwind.
- `node_modules/` – Auto‑generated dependencies.
- `package.json` – Project metadata, scripts, and dependencies.

> As I progress through the course, more episode‑wise folders and features will be added.

---

## 🧾 Project & File Summary

- **E01-Inception/**
  - Pure HTML + JS setup using CDN links for React & ReactDOM.
  - Files like `index.html`, `app.js`, and `style.css` show the very first React render using `React.createElement`.

- **E02-Igniting/**
  - First **Parcel** setup with `package.json`, `npm` scripts, and a basic React app.
  - Demonstrates bundling, dev server, and build pipeline.

- **E03-Foundation/**
  - Main **Food Ordering App** with:
    - `src/app.jsx` – Root React application and routing setup.
    - `src/components/` – All UI components (`Header`, `Body`, `RestaurantMenu`, `Shimmer`, etc.).
    - `src/utils/` – API mocks, constants, and custom hooks (e.g. `useRestaurantMenu`, `useOnlineStatus`).
    - `tailwind.config.js` + `style.css` – Tailwind CSS configuration and entry styles.
    - `postcss.config.cjs` – Tailwind + Autoprefixer pipeline for Parcel.

---

## ⚙️ How to Run the Projects Locally

> **Quick Start:**  
> If you just want to see the main app, run **E03-Foundation** using the commands in step 4.

### 1️⃣ Prerequisites (Install Once)

Make sure you have these installed on your system:

- **Node.js** (LTS version recommended, e.g. 18+)
- **npm** (comes with Node)

You can verify with:

```bash
node -v
npm -v
```

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/Riyanshu-256/namaste-react.git
cd namaste-react/namaste-react
```

> The inner `namaste-react` folder contains all the episode projects (`E01-*`, `E02-*`, `E03-*`, ...).

---

### 3️⃣ Run E02 – Igniting Our App

```bash
cd E02-Igniting
npm install        # install all dependencies (run once)
npm start          # start Parcel dev server
```

Then open the URL shown in the terminal (usually `http://localhost:1234`).

---

### 4️⃣ Run E03 – Food Ordering App (Foundation)

```bash
cd E03-Foundation
npm install        # install all dependencies (run once)
npm start          # start Parcel dev server with Tailwind
```

Open the app in your browser at `http://localhost:1234`.

---

### 5️⃣ Run E01 – Inception (CDN Setup)

E01 is a simple HTML + JS setup without `npm`:

- Open `E01-Inception/index.html` directly in the browser **or**
- Use a simple static server (for example):

```bash
npx serve E01-Inception
```

Then open the URL provided by `serve` (usually `http://localhost:3000`).

---

## 🗺️ Course Roadmap (Episode‑wise)

### 🟢 Phase 0: Prerequisites

#### Episode 0 – Web Foundations
- How browsers work
- JavaScript Engine & Execution Context
- Call Stack & Memory Heap
- `var`, `let`, `const`
- Arrow functions
- `map`, `filter`, `reduce`

---

### 🟢 Phase 1: Core React Fundamentals

#### Episode 1 – Inception
- Why React?
- React vs ReactDOM
- CDN vs NPM
- `React.createElement`
- Root rendering

#### Episode 2 – Igniting Our App
- NPM & `package.json`
- Parcel bundler
- Dev vs Prod builds
- Babel & transpilation

#### Episode 3 – Laying the Foundation
- JSX
- Functional Components
- Component Composition
- Expressions in JSX

#### Episode 4 – Talk is Cheap, Show Me the Code
- Props
- Reusable components
- Config‑driven UI
- Rendering lists using `map`

#### Episode 5 – Let’s Get Hooked
- `useState`
- Re‑rendering
- Event handling
- Conditional rendering

---

### 🟡 Phase 2: Data & Side Effects

#### Episode 6 – Exploring the World
- `useEffect`
- Fetch API
- Async / Await
- Shimmer UI
- Loading states

#### Episode 7 – Finding the Path
- React Router DOM
- SPA vs MPA
- Dynamic routing
- `useParams`
- Error handling

#### Episode 8 – Let’s Get Classy
- Class components
- Lifecycle methods
- Why hooks replaced classes

---

### 🟠 Phase 3: Performance & Architecture

#### Episode 9 – Optimizing Our App
- Custom Hooks
- Single Responsibility Principle
- Code splitting
- Lazy loading
- `React.memo`

#### Episode 10 – Jo Dikhta Hai, Vo Bikta Hai
- Tailwind CSS
- Responsive UI
- Clean UI practices

#### Episode 11 – Data is the New Oil
- Lifting state up
- Props drilling
- Context API

#### Episode 12 – Let’s Build Our Store
- Redux Toolkit
- Store & slices
- Dispatch & selectors

---

### 🔴 Phase 4: Testing & Production

#### Episode 13 – Time for the Test
- Jest
- React Testing Library
- Unit & Integration testing

---

## 🍔 Final Project – Swiggy / Zomato Clone

Planned features:
- Restaurant listing
- Menu page
- Search & filter
- Shimmer UI
- Cart functionality
- Redux store
- Lazy loading
- Responsive design

---

## 🎯 What I’ve Achieved (and Aiming For)

- ✅ Strong React fundamentals  
- ✅ Understanding of React internals  
- ✅ Scalable architecture patterns  
- ✅ Interview‑ready concepts  
- ✅ Production‑level React apps  

This repo will keep evolving as I go deeper into React and modern frontend engineering.

---

## 🙏 Credits

- **Akshay Saini** – Namaste React  
- React Official Documentation  

---

## 👨‍💻 Author

**Riyanshu Sharma**  
🎓 Computer Science Student  
🚀 Aspiring Full Stack Developer  

If you find this repository helpful, consider **starring** it and following my journey!
