# 🛠️ React + Django (Advanced) - Full Setup Guide

This guide will help you set up and run a full-stack web application with **React (Vite) as the frontend** and **Django as the backend**. 🎯

---

## 📌 Prerequisites
Ensure you have the following installed:
- **Python** (3.8+)
- **Node.js** (18+)
- **npm** or **yarn**
- **PostgreSQL** or any database (if required)

---

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```bash
  git clone <your-repository-url>
  cd <your-repository-folder>
```

### 2️⃣ **Backend Setup (Django + Django REST Framework)**
#### 🔹 Create a Virtual Environment & Install Dependencies
```bash
  python -m venv venv
  source venv/bin/activate    # Mac/Linux
  venv\Scripts\activate      # Windows
  pip install -r requirements.txt
```

#### 🔹 Configure Database (Optional - If using PostgreSQL/MySQL)
Edit `settings.py` inside the `backend` folder:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',  # Change to 'mysql' if using MySQL
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',  # Default port for PostgreSQL
    }
}
```

#### 🔹 Apply Migrations & Run Server
```bash
  python manage.py makemigrations
  python manage.py migrate
  python manage.py runserver
```
Backend will run at **`http://127.0.0.1:8000/`** 🎯

---

### 3️⃣ **Frontend Setup (React + Vite)**
#### 🔹 Navigate to the Frontend Directory
```bash
  cd frontend
```

#### 🔹 Install Dependencies
```bash
  npm install  # OR yarn install
```

#### 🔹 Start the React App
```bash
  npm run dev  # OR yarn dev
```
Frontend will run at **`http://localhost:5173/`** 🎨

---

## 🔗 Connecting Frontend to Backend
#### 🔹 Configure API Base URL (React Environment Variables)
Edit `.env` inside `frontend/`:
```ini
VITE_API_URL=http://127.0.0.1:8000/api/
```
Restart React server after changing `.env`:
```bash
  npm run dev  # OR yarn dev
```

---

## 🛠️ Additional Commands

### 🌐 Running Both Frontend & Backend Together
For convenience, open **two terminal windows**:
- **Terminal 1** (Backend):
  ```bash
  python manage.py runserver
  ```
- **Terminal 2** (Frontend):
  ```bash
  npm run dev  # OR yarn dev
  ```

### 🏗️ Creating a Django Superuser
```bash
  python manage.py createsuperuser
```
Follow the prompts to set up an admin user.

### 🔍 Debugging Issues
- **React Issues:** Delete `node_modules` & reinstall dependencies:
  ```bash
  rm -rf node_modules package-lock.json
  npm install  # OR yarn install
  ```
- **Django Issues:** Clear migrations and reapply:
  ```bash
  rm -rf backend/migrations
  python manage.py makemigrations
  python manage.py migrate
  ```

---

## 🎉 Done!
Now, your React + Django app is up and running! 🚀 Happy coding! 💻

