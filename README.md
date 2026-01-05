# WTWR (What to Wear?): Back End

## Project Description

The **Weather Wardrobe API** provides a simple RESTful backend for managing:

- **Users** (name + avatar)
- **Clothing items** (name, weather type, image URL, owner, likes)

The primary goals of this stage are to:

- Set up a maintainable Express server with proper project structure
- Create and connect a MongoDB database using Mongoose
- Implement authentication and authorization using JWT
- Protect routes and user-owned resources
- Return consistent JSON error responses with appropriate status codes
- Prepare the backend for secure frontend integration

---

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1fLUgjhiC2N9-cdQ3_Z2T7JbB4P0Dxzof/view?usp=sharing), where I describe my project.

---

## Features

- ✅ **Express server** running on port **3001**
- ✅ **MongoDB + Mongoose** connection (`wtwr_db`)
- ✅ **Mongoose models** for:
  - `User` (name, avatar)
  - `ClothingItem` (name, weather, imageUrl, owner, likes, createdAt)
- ✅ **Password hashing** using `bcryptjs`
- ✅ **JWT-based authentication** (7-day expiration)
- ✅ **Authorization middleware** protecting private routes
- ✅ **Public routes**:
  - `POST /signup`
  - `POST /signin`
  - `GET /items`
- ✅ **Protected routes** requiring a valid JWT
- ✅ **User routes**:
  - `GET /users/me` – get current user
  - `PATCH /users/me` – update name and avatar
- ✅ **Ownership checks** preventing users from deleting others’ items
- ✅ **URL validation** for avatar and image URLs using `validator`
- ✅ **RESTful routes**:
  - `POST /items`, `DELETE /items/:itemId`
  - `PUT /items/:itemId/likes`, `DELETE /items/:itemId/likes`
- ✅ **Centralized error handling** with:
  - `400` – invalid data / validation errors
  - `401` – unauthorized
  - `403` – forbidden
  - `404` – resource not found
  - `409` – conflict (duplicate email)
  - `500` – default server error `"An error has occurred on the server"`
- ✅ **ESLint + Prettier** integration using the Airbnb style guide
- ✅ **Nodemon** hot reload via `npm run dev`
- ✅ **CORS enabled** for frontend communication

---

## Technologies & Techniques Used

- **Node.js** & **Express** – server and routing
- **MongoDB** – NoSQL database
- **Mongoose** – schemas, models, and database queries
- **validator** – URL validation in Mongoose schemas
- **ESLint** – code linting with `airbnb-base` + `eslint:recommended`
- **Prettier** – code formatting (`eslint-config-prettier`)
- **Nodemon** – hot reload during development
- **Postman** – manual API testing
- **JWT (jsonwebtoken)** – authentication
- **bcryptjs** – password hashing
- **cors** – cross-origin requests

---

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

---

## Related Frontend Project

This API is designed to work with the front-end Weather Wardrobe app:

- **Frontend Repo (React)**: `se_project_react`
- **Live Demo**: [Weather Wardrobe on GitHub Pages](https://joyce1312.github.io/se_project_react/)

The frontend will connect to this API for authenticated user actions, protected routes, and full CRUD operations.
