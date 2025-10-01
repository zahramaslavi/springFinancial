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

## Future Improvements

- **Avoid duplicate products**  
  - Currently, generating products with hardcoded names can create duplicates.  
  - I would have to use UUIDs, timestamps, or random names.  

- **Scale to large batches**  
  - Currently, I'm saving the products one by one which is very slow and causes frequent connections to the db. Even for small number such as 100, this is not efficient
  - I have to Optimize product generation to handle 10,000+ products using batch insert (in mongoose `insertMany`).
  - We can also can consider adding Kafka to and a worker service that would queue jobs for generating products by batches. ex: FrontEnd request -> dataGenService (this will do the process of batching the jobs and sending request to kafka one by one) -> Kafka (listen for jobs (messages in a topic) and stores them) -> WorkerService (listen for messages in that topic(jobs) and does batch db record insert in more managable numbers one by one - we can also think about scaling the workers) 
  - We can also consider load balancing, so on huge number requests the server and the DB can scale and handel  10,000+ products generation.

- **API enhancements**  
  - It would be nice if we add query parameters for batch size, categories, or filters when generating products.  
  - It would be nice if we add rate limiting or async job processing for very large data generation.  

- **Frontend improvements**  
  - Add pagination and sorting when viewing large product lists.  
  - Improve search experience with debounce and partial matching.  


## Installation

### Run with Docker Compose (recommended)

Make sure you have **Docker** and **Docker Compose** installed.  
From the project root, run:

```bash
docker-compose up --build
