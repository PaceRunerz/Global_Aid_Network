# Sampoorna 🌍
### *Complete Care, Connected Giving*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4%2B-green)](https://www.mongodb.com/)

> Sampoorna is a next-generation digital humanitarian platform that bridges the gap between abundance and need. Through intelligent matching, real-time verification, and transparent tracking, we're transforming charitable giving into a seamless, trustworthy, and impactful experience.

---

## 🎯 Vision

In a world where food waste and hunger coexist, Sampoorna creates pathways for resources to flow where they're needed most. We empower donors, NGOs, and communities to collaborate efficiently, ensuring no act of kindness goes unnoticed and no call for help goes unanswered.

## ✨ Core Features

### 🔐 Verified Donation Ecosystem
- **QR-Based Authentication**: Verification ensures donations reach intended recipients
- **Blockchain-Inspired Tracking**: Complete transparency from donor to beneficiary
- **Smart Matching Algorithm**: AI-powered pairing of resources with urgent needs

### 📊 Real-Time Impact Dashboard
- Live donation counters with granular analytics
- Interactive heatmaps showing community impact zones
- Personalized donor insights and contribution history
- Comparative metrics across regions and time periods

### 🤝 Social Impact Network
- Instagram-style feed for sharing success stories
- Community engagement through likes, comments, and shares
- Viral amplification of urgent needs
- Storytelling tools for NGOs and beneficiaries

### 🚨 Emergency Response System
- One-tap distress signal broadcasting
- Geolocation-based rapid deployment
- Two-factor verification for delivery confirmation
- Priority queue management for critical situations

### 🗺️ Intelligent Location Services
- Interactive maps with real-time NGO availability
- Proximity-based donation center recommendations
- Route optimization for pickup and delivery
- Coverage gap identification for strategic planning

---

## 🏗️ Architecture

### Technology Stack

**Frontend**
- Pure HTML5, CSS3, and Vanilla JavaScript
- Responsive design with mobile-first approach
- Progressive Web App (PWA) capabilities

**Backend**
- Node.js with Express.js framework
- RESTful API architecture
- JWT-based authentication
- Rate limiting and security middleware

**Database**
- MongoDB for flexible document storage
- Optimized indexing for geospatial queries
- Aggregation pipelines for analytics
- Automatic backup and recovery systems

**Third-Party Integrations**
- QR code generation and validation
- Email notification service
- SMS gateway for emergency alerts
- Map services for location features

---

## 📦 Quick Start

### Prerequisites

Ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sampoorna.git
cd sampoorna

# Install backend dependencies
cd backend
npm install

# Return to root directory
cd ..
```

### Environment Configuration

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=5001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/sampoorna
MONGODB_OPTIONS=retryWrites=true&w=majority

# Authentication & Security
JWT_SECRET=your_ultra_secure_random_string_here_min_32_chars
JWT_EXPIRE=30d
BCRYPT_ROUNDS=12

# Email Service (SMTP)
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password
EMAIL_FROM=noreply@sampoorna.org

# SMS Gateway (Optional)
SMS_API_KEY=your_sms_gateway_api_key
SMS_SENDER_ID=SAMPOORNA

# File Upload
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/jpg

# QR Code Configuration
QR_CODE_SIZE=300
QR_CODE_ERROR_CORRECTION=H

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Logging
LOG_LEVEL=info
LOG_FILE_PATH=./logs/sampoorna.log
```

### Database Setup

```bash
# Start MongoDB service
# On macOS/Linux:
sudo systemctl start mongod

# On Windows:
net start MongoDB

# Verify MongoDB is running
mongo --eval "db.adminCommand('ping')"
```

### Launch Application

```bash
# Terminal 1: Start Backend Server
cd backend
npm run dev
# Server will run on http://localhost:5001

# Terminal 2: Start Frontend Server
cd frontend

# Option 1: Python
python3 -m http.server 3000

# Option 2: Node.js http-server
npx http-server -p 3000

# Option 3: Direct browser access
# Simply open frontend/index.html in your browser
```

### Access the Application

Navigate to: **http://localhost:3000**

---

## 📂 Project Structure

```
sampoorna/
│
├── 📁 backend/
│   ├── 📁 config/
│   │   ├── database.js              # MongoDB connection & pool management
│   │   └── constants.js             # Application-wide constants
│   │
│   ├── 📁 controllers/
│   │   ├── authController.js        # Registration, login, password reset
│   │   ├── donationController.js    # Donation lifecycle management
│   │   ├── userController.js        # Profile & user operations
│   │   ├── feedController.js        # Social feed & interactions
│   │   ├── emergencyController.js   # Emergency request handling
│   │   └── analyticsController.js   # Data analytics & reporting
│   │
│   ├── 📁 models/
│   │   ├── User.js                  # User schema with role-based access
│   │   ├── Donation.js              # Donation records & tracking
│   │   ├── Post.js                  # Social posts & media
│   │   ├── Emergency.js             # Emergency requests
│   │   └── Organization.js          # NGO & restaurant profiles
│   │
│   ├── 📁 routes/
│   │   ├── auth.js                  # Authentication endpoints
│   │   ├── donations.js             # Donation management APIs
│   │   ├── users.js                 # User management APIs
│   │   ├── feed.js                  # Social feed APIs
│   │   ├── emergency.js             # Emergency response APIs
│   │   └── analytics.js             # Analytics & reporting APIs
│   │
│   ├── 📁 middleware/
│   │   ├── auth.js                  # JWT verification & role checks
│   │   ├── validation.js            # Input validation & sanitization
│   │   ├── errorHandler.js          # Centralized error handling
│   │   ├── rateLimiter.js           # API rate limiting
│   │   └── upload.js                # Multer file upload configuration
│   │
│   ├── 📁 utils/
│   │   ├── generateQR.js            # QR code generation utilities
│   │   ├── emailService.js          # Email notification templates
│   │   ├── smsService.js            # SMS notification service
│   │   ├── logger.js                # Winston logging configuration
│   │   └── validators.js            # Custom validation functions
│   │
│   ├── 📁 tests/
│   │   ├── auth.test.js             # Authentication test suites
│   │   ├── donations.test.js        # Donation flow tests
│   │   └── integration/             # End-to-end integration tests
│   │
│   ├── 📁 logs/                     # Application logs (git-ignored)
│   ├── 📁 uploads/                  # User-uploaded files (git-ignored)
│   │
│   ├── .env                         # Environment variables (git-ignored)
│   ├── .env.example                 # Environment template
│   ├── .gitignore                   # Git ignore rules
│   ├── package.json                 # Node dependencies & scripts
│   ├── package-lock.json            # Dependency lock file
│   └── server.js                    # Application entry point
│
├── 📁 frontend/                
│   │
│   ├── index.html                   # Main application page
│   ├── logo.png
│
├── 📁 docs/
│   ├── API.md                       # API documentation
│   ├── CONTRIBUTING.md              # Contribution guidelines
│   ├── DEPLOYMENT.md                # Deployment instructions
│   └── ARCHITECTURE.md              # System architecture details
│
├── .gitignore                       # Global git ignore rules
├── LICENSE                          # MIT License
├── README.md                        # This file
└── package.json                     # Root package configuration
```

---

## 🔧 Development

### Development Workflow

```bash
# Run backend in development mode (with auto-reload)
cd backend
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format
```

### API Testing

```bash
# Health check
curl http://localhost:5001/api/health

# Register new user
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123!",
    "role": "individual",
    "phone": "+911234567890"
  }'

# Login
curl -X POST http://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123!"
  }'

# Get donation statistics (requires authentication)
curl http://localhost:5001/api/donations/stats \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🚀 Deployment

### Production Build

```bash
# Set environment to production
export NODE_ENV=production

# Install production dependencies only
npm ci --production

# Run database migrations
npm run migrate

# Start application
npm start
```

### Docker Deployment

```bash
# Build Docker image
docker build -t sampoorna:latest .

# Run container
docker run -d \
  --name sampoorna-app \
  -p 5001:5001 \
  --env-file .env \
  sampoorna:latest

# Docker Compose (recommended)
docker-compose up -d
```

### Cloud Platforms

- **Heroku**: One-click deployment with Heroku button
- **AWS**: EC2, ECS, or Elastic Beanstalk configurations available
- **Google Cloud**: App Engine and Cloud Run compatible
- **DigitalOcean**: App Platform deployment ready

---

## 📊 Monitoring & Analytics

- **Application Monitoring**: Winston logging with log rotation
- **Performance Metrics**: Response time tracking and optimization
- **Error Tracking**: Sentry integration for production errors
- **User Analytics**: Privacy-respecting usage statistics
- **Database Monitoring**: MongoDB Atlas monitoring tools

---


### Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for complete details.

**MIT License Summary**: You are free to use, modify, and distribute this software for any purpose, including commercial applications, provided you include the original copyright notice.

---

## 🌟 Acknowledgments

- Inspired by the UN Sustainable Development Goals (Zero Hunger - SDG 2)
- Built with ❤️ by developers who believe technology can change lives
- Special thanks to all NGOs and volunteers who provided invaluable feedback

---

## 📞 Support & Contact

- **Email**: shreyanshtripathi210@gmail.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/sampoorna/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/sampoorna/discussions)

---


<div align="center">

**Sampoorna** - *Because every contribution counts, and every need matters.*

Made with 💚 for humanity

[⭐ Star us on GitHub](https://github.com/yourusername/sampoorna) | [🐛 Report Bug](https://github.com/yourusername/sampoorna/issues) | [💡 Request Feature](https://github.com/yourusername/sampoorna/issues)

</div>
