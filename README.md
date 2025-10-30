# 🔐 Role-Based Access Control (RBAC) using Node.js, Express, and JWT

This project demonstrates **Role-Based Access Control (RBAC)** in a backend system using **Node.js**, **Express.js**, and **JSON Web Tokens (JWT)**.  
It provides secure authentication and role-based route protection for **Admin**, **Moderator**, and **User** roles.

---

## 🚀 Features

✅ User login with **JWT token generation**  
✅ Role-based route protection (Admin / Moderator / User)  
✅ Middleware for token verification & role authorization  
✅ Secure error handling for unauthorized access  
✅ Ready to deploy on **Render / Vercel / GitHub**

---

## 🧠 Tech Stack

- **Node.js**
- **Express.js**
- **JWT (jsonwebtoken)**
- **bcrypt.js**
- **dotenv**

---

## 📂 Project Structure

role-based-access-control/
│
├── server.js
├── package.json
├── .gitignore
│
├── config/
│ └── jwtConfig.js
│
├── middleware/
│ └── authMiddleware.js
│
├── routes/
│ ├── authRoutes.js
│ └── protectedRoutes.js
│
└── users/
└── usersData.js

yaml
Copy code

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/role-based-access-control.git
cd role-based-access-control
