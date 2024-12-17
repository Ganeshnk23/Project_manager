

Project Assignment and Progress Tracking System

Overview

This project is a Full Stack web application that provides the following functionalities:

1. Project Assignment Module:  
   - View all assigned projects.  
   - Accept projects to start working on them.  

2. Progress Tracking and Scoring System:  
   - Update project progress in percentage.  
   - Calculate and display scores dynamically based on task completion.

---

Technology Stack

- Frontend: React.js  
- Backend: Node.js (Express)  
- Database: PostgreSQL  

---

Features

1. Project Assignment Module:  
   - Allows users to view and accept assigned projects.  
   - Stores assignment information in the PostgreSQL database.  

2. Progress Tracking and Scoring System:  
   - Enables dynamic progress tracking for each project.  
   - Calculates and stores scores based on progress updates.

---

Setup Instructions

Prerequisites

1. Node.js installed on the system.  
2. PostgreSQL installed and running.  

Backend Setup

1. Navigate to the `backend` folder:  
   `cd backend`  

2. Install dependencies:  
   `npm install`  

3. Set up the database:  
   - Execute the `SQL_scripts.sql` file in PostgreSQL to create the database schema.  
   - Update the database credentials in `server.js`.  

4. Start the backend server:  
   `node server.js`  

   Backend runs at `http://localhost:5000`.  

Frontend Setup

1. Navigate to the `frontend` folder:  
   `cd frontend`  

2. Install dependencies:  
   `npm install`  

3. Start the React app:  
   `npm start`  

   Frontend runs at `http://localhost:3000`.  

---

Usage

1. Open the application in a browser at `http://localhost:3000`.  
2. View the list of assigned projects.  
3. Accept a project to start working on it.  
4. Update progress for the project and track the calculated score dynamically.  

---

Testing

- Ensure the backend server is running at `http://localhost:5000`.  
- Open the frontend at `http://localhost:3000`.  
- Test all functionalities including viewing, accepting projects, and updating progress.  

---

API Endpoints

Project Assignment Module
- `GET /api/projects`: Fetch all projects.  
- `PUT /api/projects/accept/:id`: Accept a project.  

Progress Tracking and Scoring System
- `PUT /api/projects/:id`: Update progress and calculate score for a project.  

---

Folder Structure

```
project-submission/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── SQL_scripts.sql
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── other_components/
│   ├── public/
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

Notes

- Ensure that PostgreSQL is running with the correct credentials.  
- For any issues, check the console for error logs in both the frontend and backend.  

---

