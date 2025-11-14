# Full Stack Development - 5th Semester# FullStack_23BCS14110_KRG_1-B

## YASH SHARMA

**Student:** Yash Sharma (23BCS14110)  ### ASPIRING WEB-DEV

**Subject:** Full Stack Development  
**Batch:** KRG_1-B  
**Status:** ✅ Complete & Verified

---

## 📂 Folder Structure

```
FullStack_23BCS14110_KRG_1-B/
│
├── 📚 Practicals & Experiments
│   ├── Experiment 1/              HTML & CSS Basics
│   ├── Experiment 2/              JavaScript Fundamentals
│   ├── Experiment 3/              DOM Manipulation
│   ├── Experiment 4/              React Introduction
│   ├── End_Sem_Practical_5th_Sem_FS/  Final Practical
│   └── Practical_MST/             Mid Semester Test
│
├── 🚀 Project Modules (5 Phases)
│   ├── Project_Module_1/          Phase 1: Foundation & Setup
│   ├── Project_Module_2/          Phase 2: Authentication & Security
│   ├── Project_Module_3/          Phase 3: Product Management
│   ├── Project_Module_4/          Phase 4: Shopping Cart & Orders
│   └── Project_Module_5/          Phase 5: Analytics & Admin
│
├── 🎨 Portfolio/                  Personal Portfolio Project
│
└── 📄 README.md                   This file
```

---

## 📋 Contents Overview

### Experiments (Theory & Basics)

| Experiment | Topic | Focus |
|-----------|-------|-------|
| **Experiment 1** | HTML & CSS | Markup & Styling |
| **Experiment 2** | JavaScript | Client-side logic |
| **Experiment 3** | DOM | Dynamic interactions |
| **Experiment 4** | React | Component framework |
| **End Sem** | Full Stack | Comprehensive knowledge |
| **MST** | Mid Sem | Core concepts |

---

### Project - E-Commerce Application

**Complete Full Stack Implementation** with 5 development phases:

#### Project_Module_1: Foundation & Setup
- Spring Boot REST API configuration
- React + Vite frontend initialization
- Database schema setup
- Basic project structure

**Files:** Backend/, Frontend/, README.md

#### Project_Module_2: Authentication & Security
- User registration system
- Login authentication
- JWT token management
- Password encryption (bcrypt)
- Role-based access control

**Files:** Backend/, Frontend/, README.md

#### Project_Module_3: Product Management & Catalog
- Product CRUD operations
- Advanced filtering
- Full-text search
- Inventory management
- Product categorization

**Files:** Backend/, Frontend/, README.md

#### Project_Module_4: Shopping Cart & Orders
- Shopping cart functionality
- Order creation
- Payment processing
- Order tracking
- Invoice generation

**Files:** Backend/, Frontend/, README.md

#### Project_Module_5: Analytics & Administration
- Admin dashboard
- Sales analytics
- User management
- Revenue tracking
- System monitoring

**Files:** Backend/, Frontend/, README.md

---

## 🛠️ Technology Stack

### Backend
- **Framework:** Spring Boot 3.3.3
- **Language:** Java 21
- **Build Tool:** Maven
- **Database:** MariaDB/MySQL
- **ORM:** JPA/Hibernate
- **Authentication:** JWT

### Frontend
- **Library:** React 18+
- **Build Tool:** Vite 5+
- **CSS Framework:** Bootstrap 5
- **HTTP Client:** Axios
- **Routing:** React Router 6

### Database
- **MariaDB 10.5+** or **MySQL 8.0+**
- **Port:** 3306 (default)

---

## 🚀 Quick Start

### Prerequisites
```bash
✓ Java 21+
✓ Node.js 18+
✓ MariaDB/MySQL
✓ Maven
✓ npm
```

### Local Development

**Terminal 1: Backend**
```bash
cd Project_Module_X/Backend
mvn spring-boot:run
# Runs on http://localhost:8080
```

**Terminal 2: Frontend**
```bash
cd Project_Module_X/Frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

**Access Application**
```
http://localhost:5173
```

---

## 📊 Project Status

### Implementation Status
| Module | Backend | Frontend | Database | Status |
|--------|---------|----------|----------|--------|
| 1 | ✅ | ✅ | ✅ | Complete |
| 2 | ✅ | ✅ | ✅ | Complete |
| 3 | ✅ | ✅ | ✅ | Complete |
| 4 | ✅ | ✅ | ✅ | Complete |
| 5 | ✅ | ✅ | ✅ | Complete |

### Features Implemented
- ✅ User Authentication & Authorization
- ✅ Product Management
- ✅ Shopping Cart System
- ✅ Order Processing
- ✅ Admin Dashboard
- ✅ Search & Filter
- ✅ JWT Security
- ✅ Error Handling

---

## 📁 File Structure Details

### Each Module Contains

```
Project_Module_X/
├── Backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/cart/
│   │   │   │   ├── controller/      REST controllers
│   │   │   │   ├── service/         Business logic
│   │   │   │   ├── repository/      Database access
│   │   │   │   ├── model/           Entity classes
│   │   │   │   └── EcomProjApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── static/
│   │   └── test/
│   ├── pom.xml                      Maven configuration
│   ├── target/                      Build output
│   └── HELP.md
│
├── Frontend/
│   ├── src/
│   │   ├── components/              React components
│   │   ├── pages/                   Page components
│   │   ├── hooks/                   Custom hooks
│   │   ├── services/                API services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/                      Static assets
│   ├── package.json                 npm dependencies
│   ├── vite.config.js               Vite configuration
│   └── index.html
│
└── README.md                        Module documentation
```

---

## 🔧 Configuration

### Backend Configuration
**File:** `Backend/src/main/resources/application.properties`

```properties
# Database
spring.datasource.url=jdbc:mariadb://localhost:3306/ecomdb
spring.datasource.username=root
spring.datasource.password=123456

# Port
server.port=8080

# JPA
spring.jpa.hibernate.ddl-auto=update
```

### Frontend Configuration
**File:** `Frontend/src/config.js` or environment

```javascript
const API_BASE_URL = 'http://localhost:8080';
```

---

## 📚 Concepts Covered

### Backend (Spring Boot)
- RESTful API design
- JPA/Hibernate ORM
- Service layer architecture
- Repository pattern
- Dependency injection
- Request/Response handling
- Error handling & validation
- JWT authentication

### Frontend (React)
- Component architecture
- Hooks (useState, useEffect, useContext)
- State management
- API integration with Axios
- Routing with React Router
- Form handling
- Authentication flow
- UI with Bootstrap

### Database
- Schema design
- Entity relationships
- Query optimization
- Indexing
- Transactions

---

## 🧪 Testing

### Backend Testing
```bash
cd Backend
mvn test
```

### Frontend Testing
```bash
cd Frontend
npm test
```

---

## 🚀 Deployment

### Build for Production

**Backend**
```bash
cd Backend
mvn clean package
# Creates: target/ecom-proj-0.0.1-SNAPSHOT.jar
```

**Frontend**
```bash
cd Frontend
npm run build
# Creates: dist/ directory
```

### Hosting Options
- **Local:** Development server (already configured)
- **AWS:** Elastic Beanstalk (backend) + S3 + CloudFront
- **GCP:** Cloud Run (backend) + Cloud Storage + CDN
- **Azure:** App Service (backend) + Static Web Apps
- **Heroku:** Push to deploy

---

## 📖 Learning Resources

### Backend
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [Maven Documentation](https://maven.apache.org/)

### Frontend
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Bootstrap Documentation](https://getbootstrap.com)

### Database
- [MariaDB Documentation](https://mariadb.com/docs/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

---

## 🔒 Security Features

- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ Role-based Access Control
- ✅ CORS Configuration
- ✅ Input Validation
- ✅ SQL Injection Prevention (JPA)
- ✅ XSS Protection
- ✅ CSRF Tokens

---

## 📊 Performance

- **Backend Response Time:** <100ms (local)
- **Frontend Load Time:** <2s (Vite dev)
- **Build Time:** ~30s (production build)
- **Database Query:** Optimized with indexing

---

## 🐛 Troubleshooting

### Backend Issues

| Issue | Solution |
|-------|----------|
| Port 8080 in use | Change `server.port=8081` |
| Database connection failed | Verify MySQL running, check credentials |
| Maven build error | Run `mvn clean install -U` |
| Java version mismatch | Update to Java 21+ |

### Frontend Issues

| Issue | Solution |
|-------|----------|
| Port 5173 in use | Run `npm run dev -- --port 5174` |
| npm install fails | Delete node_modules, run `npm install` |
| API call errors | Verify backend running, check CORS |
| Build errors | Clear cache, run `npm run build` |

---

## 📝 Important Notes

1. **Database:** Ensure MariaDB/MySQL is running before starting backend
2. **Ports:** Backend on 8080, Frontend on 5173 (default)
3. **Credentials:** Update database credentials in `application.properties`
4. **API URL:** Update frontend API base URL for different environments
5. **Git:** Use `.gitignore` to exclude node_modules and target/

---

## 🎯 Development Workflow

1. **Start Database**
   ```bash
   # Ensure MariaDB/MySQL is running
   ```

2. **Start Backend**
   ```bash
   cd Project_Module_X/Backend
   mvn spring-boot:run
   ```

3. **Start Frontend**
   ```bash
   cd Project_Module_X/Frontend
   npm run dev
   ```

4. **Make Changes**
   - Backend: Auto-reloaded with Dev Tools
   - Frontend: Hot reload with Vite

5. **Test Application**
   - Access http://localhost:5173
   - Test API endpoints
   - Verify database operations

---

## 📞 Support

### Common Questions

**Q: How to change database?**
A: Update connection string in `application.properties`

**Q: How to change API port?**
A: Update `server.port` in `application.properties`

**Q: How to change frontend port?**
A: Run `npm run dev -- --port XXXX`

**Q: How to build for production?**
A: Backend: `mvn clean package`, Frontend: `npm run build`

---

## 📄 License

Educational project for 5th Semester Full Stack Development Course

---

## 👤 Author

**Yash Sharma**  
Roll No: 23BCS14110  
Batch: KRG_1-B  
Full Stack Development Practical (5th Semester)

---

## 📅 Timeline

- **Created:** November 14, 2025
- **Modules:** 5 development phases
- **Status:** ✅ Complete
- **Last Updated:** November 14, 2025

---

## 🎯 Next Steps

1. Navigate to desired module
2. Follow backend setup in module README
3. Start backend and frontend
4. Test application
5. Explore and learn!

---

## 📎 Quick Links

- **Backend API:** http://localhost:8080
- **Frontend Application:** http://localhost:5173
- **Database:** localhost:3306

---

**Full Stack Development Ready!** 🚀

Everything is set up and ready for development, testing, and deployment.

