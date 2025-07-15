# PW LEAPX 🚀

**Live Site**: [https://pw-leap-x.vercel.app](https://pw-leap-x.vercel.app)

PW Leap X is a responsive, modern, and interactive React + TypeScript web application built to showcase the PW Leap X initiative. The site highlights key information like program benefits, experts, services, and project showcases in a sleek single-page experience.

---

## 🧠 Overview

This is a multi-section frontend project with dynamic rendering using React components and local JSON data. It is styled using **Tailwind CSS** and deployed on **Vercel**.

---

## 🗂️ Project Structure

```plaintext
PWLeapX/
├── public/                     # Static files like images, favicons
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── AboutUs.tsx
│   │   ├── Achievement.tsx
│   │   ├── Clients.tsx
│   │   ├── Contact.tsx
│   │   ├── DemoModal.tsx
│   │   ├── Experts.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Services.tsx
│   │   └── ServicesDetail.tsx
│   ├── data/
│   │   └── projects.json       # Project data loaded into the Projects section
│   ├── pages/                  # Main pages of the site
│   │   ├── HomePage.tsx
│   │   └── Projects.tsx
│   ├── App.tsx                 # Entry point for routing/layout
│   ├── App.css                 # Global styles
│   ├── index.css               # Tailwind base styles
│   ├── main.tsx                # Root React render call
│   └── vite-env.d.ts
├── index.html                  # Main HTML template
├── tailwind.config.js          # Tailwind configuration
├── tsconfig*.json              # TypeScript configs
├── postcss.config.js
├── vite.config.ts              # Vite config
├── vercel.json                 # Vercel deployment config
├── .eslintrc.js                # Linting rules
├── .gitignore
├── package.json
└── README.md                   # Project documentation
