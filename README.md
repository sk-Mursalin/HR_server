# Employee Management Backend 🚀

## 📌 Overview

**Employee Management** System is a full-stack web application designed to help HR teams efficiently manage employees, departments, and leave requests within an organization.
This system centralizes employee data, simplifies HR tasks, and ensures smooth workflow management

This repository contains the **backend** of VibeMatch, built with **Node.js, Express, and MongoDB**, following a **microservices architecture** for scalability.

> ⚠️ **Note:** The backend is **fully functional** and ready for further scaling and optimizations.

---

## 🛠️ Tech Stack

- **Backend Framework**: [Node.js](https://nodejs.org/en) + [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- **Authentication**: [JWT (JSON Web Tokens)](https://jwt.io/) + Cookies
- **Encryption**: [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing
- **API Testing**: Postman
- **Environment Variables Management**: dotenv
- **Package Manager**: npm

---

---

## 🚀 API Endpoints

### **1️⃣ Routes**

| Method | Endpoint             | Description                   | Auth Required |
| ------ | -------------------- | ----------------------------- | ------------- |
| POST   | `/auth/login`        | log in user                   | ❌            |
| POST   | `/auth/verify`       | Authenticate user & issue JWT | ❌            |
| get    | `/dashboard/summary` | for dashboard summary         | ✅            |
| get    | `/department`        | get all department list       | ✅            |
| post   | `/department/add`    | add a department in list      | ✅            |
| put    | `/department/:id`    | update a department in list   | ✅            |
| get    | `/department/:id`    | get a department from list    | ✅            |
| delete | `/department/:id`    | delete a department from list | ✅            |
| get    | `/employee/:id`      | get employee                  | ✅            |
| put    | `/employee/:id`      | update employee               | ✅            |
| post   | `/employee/add`      | add employee                  | ✅            |
| post   | `/leave/add`         | apply for new leave           | ✅            |
| get    | `/leave/:id`         | get leave of an employee      | ✅            |
| put    | `/leave/:id`         | update leave status           | ✅            |
| get    | `/leave/details/:id` | leave details of an employee  | ✅            |
| get    | `/leave`             | view all leaves as a admin    | ✅            |

---

## 🏗️ Setup & Running the Server

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/sk-Mursalin/HR_server.git
cd HR_server
```

### **2️⃣ Set Up Environment Variables**

Create a `.env` file and add:

```ini
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/collectionName
JWT_KEY=your_jwt_secret
```

### **3️⃣ Start the Backend Server**

```bash
npm run dev
```

Server runs at: `http://localhost:5000/`

---

## 🔗 Frontend Integration

The frontend for Employee Management is available at:
🔗 **[ Employee Management Frontend Repository](https://github.com/sk-Mursalin/HR_ui)**

Make sure the backend is running before accessing the frontend.

---

## 🚀 Deployment

deployed on Vercel.
