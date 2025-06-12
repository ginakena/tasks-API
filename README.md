# 📝 Tasks API

A simple Task Management REST API built with **Node.js**, **Express**, and **Prisma** — fully deployed with a PostgreSQL database on **Render**.

---

## 🌐 Live API

📍 Base URL: [`https://tasks-api-d458.onrender.com`](https://tasks-api-d458.onrender.com)

---

## 🚀 Features

- ✅ Create a task
- 📋 View all tasks
- 🔍 Get a specific task by ID
- ✏️ Update a task
- ❌ Delete a task

---

## 🧪 API Endpoints

### `GET /`
Returns a welcome message.

---

### `GET /tasks`
Get all tasks.

#### Response:
```json
[
  {
    "id": "uuid",
    "title": "Sample Task",
    "description": "Sample description",
    "isCompleted": false
  }
]
