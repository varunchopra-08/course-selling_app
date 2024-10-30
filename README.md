# Course Selling App Backend  

This repository contains the basic backend setup for a Course Selling App. The backend uses MongoDB as the database, Mongoose as the ODM (Object Data Modeling) library, and an HTTP server to handle API requests.  

## Table of Contents  
- [Project Structure](#project-structure)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)  

## Project Structure

.
├── config
│ └── db.js # Database connection setup
├── models
│ └── Course.js # Mongoose schema for courses
├── routes
│ ├── courses.js # Routes for course-related operations
│ └── index.js # Main route file
├── controllers
│ └── courseController.js # Course business logic
├── .env # Environment variables
├── server.js # Main server file
└── README.md # Project documentation


## Technologies Used  
- **Node.js** - JavaScript runtime environment  
- **Express** - Web application framework for Node.js  
- **MongoDB** - NoSQL database  
- **Mongoose** - MongoDB object modeling tool  
- **dotenv** - Environment variable management  

## Installation  
1. Clone the repository:  
   ```bash  
   git clone <repository_url>  
   cd course-selling-app-backend

2.Install dependencies:
  npm install

3.Set up environment variables:
Create a .env file in the root directory and add the following variables:

bash
PORT=3000  
MONGO_URI=<your_mongo_database_uri>  

Configuration
Database Connection
The MongoDB connection is configured in config/db.js and uses the MONGO_URI variable from .env.

Usage
Run the server:

bash
npm start  
Server will start on http://localhost:3000

