# Hospital Management System

A full-stack **Hospital Management System** built using **Spring Boot, React, and MySQL**.
This project demonstrates **REST API development, authentication, database integration, and cloud deployment**.

---

# Live Application

Frontend (Vercel)
https://hospital-management-three-hazel.vercel.app

Backend API (Render)
https://hospital-management-v4yu.onrender.com

---

# Tech Stack

## Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* Maven

## Frontend

* React
* Axios
* React Router

## Database

* MySQL

## Tools

* GitHub
* SonarQube
* Vercel (Frontend Deployment)
* Render (Backend Deployment)

---

# Features

* User Registration & Login
* Role Based Access (Admin / User)
* Department Management
* Secure Password Encryption
* REST API Integration
* Automatic Default Data Initialization
* Full-Stack Deployment

---

# Project Structure

```
hospital-management
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── config
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── services
│
└── README.md
```

---

# Backend Setup

Clone the repository

```
git clone https://github.com/your-username/hospital-management.git
```

Navigate to backend

```
cd backend
```

Run the application

```
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

# Frontend Setup

Navigate to frontend

```
cd frontend
```

Install dependencies

```
npm install
```

Run React app

```
npm start
```

Frontend runs on

```
http://localhost:3000
```

---

# Default Admin Account

The system automatically creates an admin account during startup.

Email

```
admin@hospital.com
```

Password

```
admin123
```

---

# API Examples

Authentication

```
POST /api/auth/signup
POST /api/auth/signin
```

Departments

```
GET /api/departments
POST /api/departments
```

---

# Code Quality

This project uses **SonarQube** for static code analysis to detect:

* Bugs
* Code smells
* Security vulnerabilities
* Maintainability issues

---

# Future Improvements

* Doctor Management
* Appointment Booking
* Patient Records
* Swagger API Documentation
* Docker Support
* CI/CD Pipeline

---

# Author

Aswin
