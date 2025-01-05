# Natours Project

## Overview

**Natours** is a Node.js-based application designed for managing tours, users, and reviews. It provides a robust backend with RESTful APIs, a user-friendly interface, and dynamic templates for rendering tour details and user interactions. The application is built with Express.js and MongoDB, incorporating modern features like authentication, error handling, and reusable utility functions.

---

## Features

### Core Functionality
- **Tours Management**: Create, update, delete, and view tours.
- **User Authentication**: Secure login, signup, and account management.
- **Reviews**: Add, update, and delete reviews for tours.
- **Email Notifications**: Send emails using dynamic templates.
- **Dynamic Templates**: Render user-facing pages using Pug templates.

### Developer Features
- **Error Handling**: Centralized error management for cleaner code.
- **Reusable Utilities**: Common functionalities like API filtering, pagination, and error catching.
- **Static Assets**: Serve CSS and images for frontend pages.
- **Development Data**: Preloaded data for tours, users, and reviews for testing.

---

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing application data.
- **Mongoose**: ODM for MongoDB.

### Frontend
- **HTML**: Static templates for rendering pages.
- **CSS**: Styling for pages and components.
- **Pug**: Template engine for dynamic HTML rendering.

---

## Directory Structure

### Key Folders and Files

- **`app.js`**: Main application file.
- **`server.js`**: Entry point for running the server.
- **`controllers/`**: Contains logic for handling routes.
  - `authController.js`: Authentication logic.
  - `errorController.js`: Handles application errors.
  - `tourController.js`: Manages tour-related operations.
  - `userController.js`: Manages user-related operations.
  - `reviewController.js`: Manages review-related operations.
  - `handlerFactory.js`: Reusable handlers for CRUD operations.

- **`dev-data/`**: Development data for testing and debugging.
  - `data/`: JSON files for tours, users, and reviews.
  - `templates/`: Pug templates for emails and web pages.

- **`models/`**: Mongoose schemas for database collections.
  - `tourModel.js`: Schema for tours.
  - `userModel.js`: Schema for users.
  - `reviewModel.js`: Schema for reviews.

- **`public/`**: Static assets for the application.
  - `css/`: Stylesheets.
  - `img/`: Images for tours and users.

- **`routes/`**: Route definitions for API endpoints.
  - `tourRoutes.js`: Routes for tour operations.
  - `userRoutes.js`: Routes for user operations.
  - `reviewRoutes.js`: Routes for review operations.

- **`utils/`**: Helper utilities for common tasks.
  - `apiFeatures.js`: API filtering, sorting, and pagination.
  - `appError.js`: Custom error class.
  - `catchAsync.js`: Wrapper for async functions. 
  - `email.js`: Email sending logic.

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB instance

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Zahidul-Turja-natours.git
   cd Zahidul-Turja-natours
   ```
2. Install dependencies:
  ```
  npm install
  ```
3. Setup environment variables:
   * Create a file named `.env`
   * Add the following variables to it
     ```
      NODE_ENV=development
      DATABASE=<your-mongodb-connection-string>
      DATABASE_PASSWORD=<your-database-password>
      JWT_SECRET=<your-jwt-secret>
      JWT_EXPIRES_IN=<token-expiry-time>
      EMAIL_USERNAME=<your-email-username>
      EMAIL_PASSWORD=<your-email-password>
     ```
4. Start development server:
   ```
   npm start
   ```
