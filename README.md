# Vit Sphere - A VIT Student Social Media Platform

![Vit Sphere Logo](./client/src/vitgif.gif)

Vit Sphere is a full-stack MERN (MongoDB, Express, React, Node.js) project designed to create a thriving online community for VIT students. This platform allows students to connect, share posts, toggle between dark and light themes, and manage their sessions securely. Whether you're new to VIT or an existing student, Vit Sphere is the perfect place to engage with your peers.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration and Login**: New users can easily register or existing users can log in securely to access the platform.

- **Password Security**: User passwords are securely stored using bcrypt, ensuring a high level of protection.

- **Secure JWT Token Authentication**: User sessions are managed with JWT token authentication, ensuring data security.

- **Post Creation and Sharing**: Users can create and share posts, including text posts, image posts, or a combination of both, providing a variety of content options.

- **User Feed**: The platform offers a user feed where students can view posts from others, comment, like, and connect with their peers.

- **Dark and Light Theme**: Enjoy a visually appealing experience with the option to switch between dark and light themes, enhancing user experience.

## Project Structure

The repository is organized into two main directories: `client` and `server`, each responsible for different aspects of the project.

### Client

The client-side of the project is built using React.js and utilizes the following core modules:

- **Material-UI (MUI)**: Provides elegant and responsive styling for the user interface.

- **Redux**: Manages state effectively, ensuring a seamless user experience.

- **React Router DOM**: Enables navigation between different parts of the application.

- **Axios**: Facilitates API calls to the backend for data retrieval and updates.

### Server

The server-side of the project handles the backend logic and is powered by the following modules:

- **Express**: Manages routing and handles HTTP requests efficiently.

- **CORS (Cross-Origin Resource Sharing)**: Enables secure communication between the client and server across different domains.

- **Bcrypt**: Safely hashes and encrypts user passwords, maintaining high security.

- **Multer**: Allows seamless handling of file uploads, making image posts easy to manage.

- **Helmet**: Sets secure HTTP headers, minimizing potential security vulnerabilities.

- **Morgan**: Provides detailed request logging for debugging and monitoring.

- **Mongoose**: Interacts with MongoDB, storing and retrieving data with a well-structured folder organization, including models, middlewares, and routes.

The backend uses JWT (JSON Web Tokens) for user session management and ensures data integrity by connecting to a MongoDB database.

## Run in Local environment

To get started with Vit Sphere, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ishanaudichya/social-media.git
   ```

2. Navigate to the client and server directories and install dependencies:

   ```bash
   cd client
   npm install
   ```

   ```bash
   cd server
   npm install
   ```

3. Add a `.env` file in server folder with your own Mongo url and jwt token as shown below.
   ```
   MONGO_URL="your mongo link"
   JWT_SECRET="your secret"
   ```
4. Start the client and server separately:
   ```bash
   cd client
   npm start
   ```
   ```bash
   cd server
   npm start
   ```
5. Access the application in your web browser at http://localhost:3000.

## Demo links

The website is up and running on `vercel` with proper json configuration for express backend as well as react frontend

- the backend server is connected to a mongodb and api is hosted at link => https://social-media-nine-hazel.vercel.app/
- the front end client is running at https://vitsphere.vercel.app/

Note: The login page shows an email and password to use for demo purposes.

## Updates

All the upcoming registered links and updates will be shwon here
