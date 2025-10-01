# Spring Financial Project

A simple full-stack demo project to manage products.  
It uses **Node.js + Express + MongoDB (Mongoose)** for the backend, and **React + TypeScript + Material UI** for the frontend.

---

## Features

### Backend Services
1. **Product Service**
   - `POST /products/generate` → generate products  
   - `POST /products` → get all products  

2. **Search Service**
   - `GET /products/search/:searchKeyword` → search products across fields (name, description, category, SKU, etc.)

---

### Frontend
- React + TypeScript app styled with Material UI.
- Components:
  - **ProductManager** →  
    - Loads product list on page load.  
    - Button to generate demo products.  
  - **ProductSearch** →  
    - Input + button for keyword search.  
    - Displays search results.  

---

## Tech Stack

- **Backend:** Node.js, Express, Mongoose, TypeScript  
- **Frontend:** React, TypeScript, Material UI  
- **Database:** MongoDB  

---

## Installation

### Run with Docker Compose (recommended)

Make sure you have **Docker** and **Docker Compose** installed.  
From the project root, run:

```bash
docker-compose up --build