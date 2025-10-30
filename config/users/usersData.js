import bcrypt from "bcryptjs";

// Simulated user database
export const users = [
  {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin"
  },
  {
    id: 2,
    username: "moderator",
    password: bcrypt.hashSync("mod123", 10),
    role: "moderator"
  },
  {
    id: 3,
    username: "user",
    password: bcrypt.hashSync("user123", 10),
    role: "user"
  }
];
