# WTWR (What to Wear?): Back End

## Project Description

The **Weather Wardrobe API** provides a simple RESTful backend for managing:

- **Users** (name + avatar)
- **Clothing items** (name, weather type, image URL, owner, likes)

The primary goals of this stage are to:

- Set up a maintainable Express server with proper project structure
- Create and connect a MongoDB database using Mongoose
- Implement initial routes and controllers for users and clothing items
- Return consistent JSON error responses with appropriate status codes
- Introduce a temporary authorization middleware to associate created items with a test user

---

## Features

- ✅ **Express server** running on port **3001**
- ✅ **MongoDB + Mongoose** connection (`wtwr_db`)
- ✅ **Mongoose models** for:
  - `User` (name, avatar)
  - `ClothingItem` (name, weather, imageUrl, owner, likes, createdAt)
- ✅ **URL validation** for avatar and image URLs using `validator`
- ✅ **RESTful routes**:
  - `GET /users`, `GET /users/:userId`, `POST /users`
  - `GET /items`, `POST /items`, `DELETE /items/:itemId`
  - `PUT /items/:itemId/likes`, `DELETE /items/:itemId/likes`
- ✅ **Temporary auth middleware** that attaches a hardcoded test user ID to `req.user`
- ✅ **Centralized error handling** with:
  - `400` – invalid data / invalid ID format
  - `404` – resource not found (user, item, or route)
  - `500` – default server error `"An error has occurred on the server"`
- ✅ **ESLint + Prettier** integration using the Airbnb style guide
- ✅ **Nodemon** hot reload via `npm run dev`

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

---

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

---

## Related Frontend Project

This API is designed to work with the front-end Weather Wardrobe app:

- **Frontend Repo (React)**: `se_project_react`
- **Live Demo**: [Weather Wardrobe on GitHub Pages](https://joyce1312.github.io/se_project_react/)

The frontend fetches clothing items and user data and will later use this API for full CRUD operations and authorization.
