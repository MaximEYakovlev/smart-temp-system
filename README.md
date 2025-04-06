# Smart Temp System

A modular temperature tracking system designed for smart medical or industrial environments. The system is built using a monorepo structure and includes multiple isolated services such as backend API, frontend interface, database, and more.

---

## 📦 Structure

smart-temp-system/
├── services/ 
│ └── backend-api/ # NestJS backend service 
│ └── ... # Other future services (frontend, analytics, etc.) 
├── README.md


---

## 🚀 Technologies

- **NestJS** – backend framework (REST API)
- **TypeScript** – for strict, type-safe development
- **PostgreSQL** – for storing temperature data (coming soon)
- **Docker** – (planned) for easy service orchestration
- **React / Vite** – (planned) frontend dashboard

---

## 🎯 Project Goal

To create a flexible, modular, and scalable temperature tracking system that could be used:

- in medical devices or cosmetic equipment
- for monitoring room or device temperature in real-time
- with support for Wi-Fi-connected sensors, service interfaces, and secure data storage

---

## 📡 Current Features

- Basic backend service with REST API:
  - `POST /temperature` – Save a temperature value
  - `GET /temperature` – Retrieve the latest value

---

## 🛠️ Getting Started

```bash
cd services/backend-api
npm install
npm run start
```

API will run at: http://localhost:3000

🧱 Roadmap

- NestJS backend with basic temperature endpoints

- PostgreSQL integration

- Frontend dashboard with charts

- WebSocket streaming for real-time data

- Device simulation and sandbox mode

- Docker-based environment

- Auth + access control for engineers/admins

🧪 Sandbox?

This project may include a sandbox environment later for:

- simulating temperature sensor data

- testing without real hardware

- quick frontend/backend integration testing


🤝 Contributing

You're welcome to contribute ideas, code, issues, or just feedback ✌️


📜 License

MIT – do whatever you want, but give credit if you build something cool 💥