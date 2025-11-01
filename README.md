

##  Running the Application

### Option 1: Using Docker

#### Development Mode
```bash
# Start database and adminer only
docker-compose -f docker-compose.dev.yml up -d

# In separate terminals:
cd backend && npm run dev
cd frontend && npm start
```

#### Production Mode
```bash
# Start all services (database, backend, frontend, adminer)
docker-compose -f docker-compose.prod.yml up -d
```

Access the application:
- **Frontend:** http://localhost:8080
- **Backend API:** https://localhost:4000
- **Adminer:** http://localhost:8081

### Option 2: Manual Setup

#### 1. Start PostgreSQL
```bash
docker-compose up db -d
```

#### 2. Start Backend
```bash
cd backend
npm run dev
```

#### 3. Start Frontend
```bash
cd frontend
npm start
```

Access the application:
- **Frontend:** http://localhost:4200
- **Backend API:** https://localhost:4000
- **Adminer:** http://localhost:8080

---

## Default Users

The application comes with two pre-configured users:

### Admin Account
- **Username:** `admin`
- **Password:** `admin`
- **Role:** Administrator
- **Access:** Full access to all routes including admin panel

### Regular User Account
- **Username:** `bob`
- **Password:** `Secure123!`
- **Role:** User
- **Access:** Limited to user routes (home page)



### Production Environment

The production setup includes:
- PostgreSQL with health checks
- Backend (Node.js) with compiled TypeScript
- Frontend (Angular) served via NGINX
- Adminer for database management
- All services in isolated network

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Useful Docker Commands

```bash
# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop all services
docker-compose -f docker-compose.prod.yml down

# Rebuild services
docker-compose -f docker-compose.prod.yml up -d --build

# Remove volumes (caution: deletes data)
docker-compose -f docker-compose.prod.yml down -v
```

---
