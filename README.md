# Assignment 14 - Portfolio Website

## Overview

This project is a multi-page portfolio website built using React and TypeScript. It showcases course work, technical skills, and useful resources developed during the Full Stack Web Development program. The application uses reusable components from a component library and is containerized using Docker for production deployment.

---

## Features

- Multi-page React application using React Router
- Pages included:
  - Home
  - Work
  - Skills
  - Resources
  - Developer Setup

- Reusable components:
  - Card
  - Table
  - Text
  - Navbar

- Clean and responsive UI
- Dockerized production build using nginx
- Navigation between pages using React Router

---

## Technologies Used

- React (Vite)
- TypeScript
- Docker
- Nginx
- ESLint
- Prettier
- Husky

---

## Running the Project Locally

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Open in browser

```
http://localhost:5173
```

---

## Running with Docker

### Step 1: Build Docker Image

```bash
docker build -t kaur_samreet_coding_assignment14 .
```

### Step 2: Run Docker Container

```bash
docker run -d -p 127.0.0.1:5575:5575 --name kaur_samreet_coding_assignment14 kaur_samreet_coding_assignment14
```

### Step 3: Open in Browser

```
http://127.0.0.1:5575
```

---

## Docker Commands

### Stop container

```bash
docker stop kaur_samreet_coding_assignment14
```

### Remove container

```bash
docker rm kaur_samreet_coding_assignment14
```

---

## Project Structure

```
src/
  components/
    Card/
    Table/
    Text/
    Navbar.tsx
  pages/
    Home.tsx
    Work.tsx
    Skills.tsx
    Resources.tsx
    DeveloperSetup.tsx
  App.tsx
  main.tsx
index.html
Dockerfile
nginx.conf
```

---

## Notes

- This project reuses components created in a previous assignment (Component Library).
- React Router is used for navigation between multiple pages.
- Docker is used to build and serve the production version of the application using nginx.
- The application runs on port **5575** as required.
