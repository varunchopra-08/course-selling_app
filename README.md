Course Selling App Backend
This repository contains the basic backend setup for a Course Selling App. The backend uses MongoDB as the database, Mongoose as the ODM (Object Data Modeling) library, and an HTTP server to handle API requests.

Table of Contents
Project Structure
Technologies Used
Installation
Configuration
Usage
API Endpoints
Contributing
License
Project Structure
bash
Copy code
.
├── config
│   └── db.js              # Database connection setup
├── models
│   └── Course.js          # Mongoose schema for courses
├── routes
│   ├── courses.js         # Routes for course-related operations
│   └── index.js           # Main route file
├── controllers
│   └── courseController.js # Course business logic
├── .env                   # Environment variables
├── server.js              # Main server file
└── README.md
Technologies Used
Node.js - JavaScript runtime environment
Express - Web application framework for Node.js
MongoDB - NoSQL database
Mongoose - MongoDB object modeling tool
dotenv - Environment variable management
Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd course-selling-app-backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following variables:

bash
Copy code
PORT=3000
MONGO_URI=<your_mongo_database_uri>
Configuration
Database Connection:
The MongoDB connection is configured in config/db.js and uses the MONGO_URI variable from .env.
Usage
Run the server:

bash
Copy code
npm start
Server will start on http://localhost:3000

API Endpoints
Courses
GET /api/courses
Fetches all available courses.

POST /api/courses
Creates a new course.
Body: { title: String, description: String, price: Number, instructor: String }

GET /api/courses/

Fetches a course by its ID.

PUT /api/courses/

Updates an existing course by ID.
Body: { title: String, description: String, price: Number, instructor: String }

DELETE /api/courses/

Deletes a course by ID.

Contributing
Contributions are welcome! Please create an issue to discuss any feature enhancements or bug fixes.

License
This project is licensed under the MIT License.
