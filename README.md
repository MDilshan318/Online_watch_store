# Luxury Time - Premium E-Commerce Platform

A professional full-stack E-commerce platform specialized in premium watches.

## Architecture
- **Frontend**: HTML5, Vanilla CSS3 (Flexbox/Grid), JavaScript (ES6+ with Fetch API)
- **Backend**: Spring Boot, Spring Data JPA, Lombok
- **Database**: MySQL

## Getting Started

### 1. Database Setup
Ensure you have MySQL installed and running on port `3306`.
Create a database named `luxury_time`:
```sql
CREATE DATABASE luxury_time;
```
The backend is configured to use `root` / `root` as credentials. Modify `backend/src/main/resources/application.properties` if your MySQL credentials differ.

### 2. Running the Backend
Ensure you have Java 17+ and Maven installed.
```bash
cd backend
mvn clean compile
mvn spring-boot:run
```
The REST API will start on `http://localhost:8080`. The Spring Data JPA configuration uses `ddl-auto=update` so the `users` and `products` tables will be created automatically upon connection to the MySQL database.

### 3. Running the Frontend
The frontend consists of static files. Since we use `localStorage` and `fetch` APIs, you should serve them via a local HTTP server to avoid CORS/file protocol restrictions.
If you have python installed, run:
```bash
cd frontend
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## Features
- **Dark Luxury Aesthetic**: Deep Black (#0b0b0b), Charcoal Gray (#161616), Metallic Gold (#c5a059).
- **Authentication**: REST API with `fetch` pre-configured for Login and Signup.
- **Cart System**: Client-side state managed via `LocalStorage`.
- **Responsive Navigation**: Full 7-page cohesive structure.
