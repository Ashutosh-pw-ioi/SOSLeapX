# 🚀 PWLeapX

**Live Demo:** [https://pw-leap-x.vercel.app](https://pw-leap-x.vercel.app)

PWLeapX is a modern, fully responsive, and interactive web application built using **React**, **TypeScript**, and **Tailwind CSS**. It showcases the PW Leap X initiative with sections like About, Experts, Projects, Services, and more. The project is deployed via **Vercel** for seamless accessibility.

---

## 📌 Features

- ⚡ Lightning-fast performance with Vite
- 🧩 Modular component-based architecture
- 🌐 Fully responsive and mobile-first design
- 🎯 Interactive UI with smooth animations
- 📁 Clean file structure for easy scalability
- 💡 Dynamic rendering of project data using JSON
- ☁️ Live deployment using Vercel

---

## 🛠️ Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** Vercel

---

## 📁 Folder Structure

```plaintext
PWLeapX/
├── public/                    # Static assets (images, icons, etc.)
├── src/
│   ├── components/            # Reusable UI components
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
│   │   └── projects.json      # JSON file containing project details
│   ├── pages/                 # Main pages of the application
│   │   ├── HomePage.tsx
│   │   └── Projects.tsx
│   ├── App.tsx                # Root component
│   ├── App.css                # Global app-level styles
│   ├── index.css              # Tailwind CSS base styles
│   ├── main.tsx               # Entry point for rendering React
│   └── vite-env.d.ts
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig*.json             # TypeScript configurations
├── postcss.config.js
├── vite.config.ts             # Vite configuration
├── vercel.json                # Vercel deployment settings
├── .eslintrc.js               # Linting rules
├── .gitignore
├── package.json
└── README.md                  # Project documentation
