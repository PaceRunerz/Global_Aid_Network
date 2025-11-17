# Global_Aid_Network
A Digital Platform Connecting Donors with Those in Need
Global Aid Network is a comprehensive web platform that revolutionizes charitable giving by connecting donors directly with those in need through innovative technology. Our platform makes donations more efficient, transparent, and accessible worldwide.

🌟 Key Highlights
Real-time donation tracking

QR code verification system

Social media-style impact feed

Location-based help mapping

Emergency response system

✨ Features
🍲 Food Donation Management
📊 Live donation counter with daily reset

🏪 Restaurant participation portal

🎯 Organization pickup system

🔒 QR code verification for secure transfers

📱 Social Engagement
📢 Social impact feed for awareness

❤️ Like, comment, and share functionality

🚨 Emergency request broadcasting

📖 Success stories showcase

🏆 Recognition System
🥇 Leaderboard for top contributors

📅 Quarterly and annual rankings

🎉 Top 5 promotion features

📈 Performance analytics

🗺️ Location Services
🗺️ Interactive map integration

📍 Nearby NGO/donation center finder

🎯 Location-based suggestions

🚗 Pickup/drop-off coordination

🚨 Emergency Response
⚡ 24/7 emergency request system

🔒 Two-step delivery verification

🚀 Rapid deployment protocol

📱 Real-time notifications


Installation & Setup
1. Clone and Navigate
bash
# Navigate to project directory
cd global-aid-network

# Backend setup
cd backend
npm install

# Frontend is ready to use (static HTML)
2. Environment Configuration
Create .env file in backend/ directory:

env
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/global_aid_network

# Security
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d

# Email Service (Optional)
EMAIL_SERVICE=gmail
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
3. Start Services
bash
# Terminal 1 - Start MongoDB
mongod

# Terminal 2 - Start Backend Server
cd backend
npm run dev

# Terminal 3 - Start Frontend Server
cd frontend
python3 -m http.server 3000

# Alternative frontend commands:
# npx http-server -p 3000
# or open index.html directly in browser
4. Access Application
Open your browser and visit:
🌐 http://localhost:3000



global-aid-network/
├── 📁 backend/
│   ├── 📁 config/
│   │   └── database.js          # MongoDB connection
│   ├── 📁 controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── donationController.js # Donation operations
│   │   ├── userController.js    # User management
│   │   ├── feedController.js    # Social feed
│   │   └── emergencyController.js # Emergency system
│   ├── 📁 models/
│   │   ├── User.js              # User schema
│   │   ├── Donation.js          # Donation schema
│   │   ├── Post.js              # Post schema
│   │   └── Emergency.js         # Emergency schema
│   ├── 📁 routes/
│   │   ├── auth.js              # Auth routes
│   │   ├── donations.js         # Donation routes
│   │   ├── users.js             # User routes
│   │   ├── feed.js              # Feed routes
│   │   └── emergency.js         # Emergency routes
│   ├── 📁 middleware/
│   │   ├── auth.js              # JWT authentication
│   │   └── upload.js            # File upload handling
│   ├── 📁 utils/
│   │   ├── generateQR.js        # QR code generation
│   │   └── emailService.js      # Email notifications
│   ├── package.json             # Dependencies
│   ├── server.js               # Main server file
│   └── .env                    # Environment variables
└── 📁 frontend/
    └── index.html              # Single-page application



    Development
Running in Development Mode
bash
# Backend development (with auto-restart)
cd backend
npm run dev

# Backend production
npm start
Testing the API
bash
# Test backend connectivity
curl http://localhost:5001/api/donations/stats

# Test user registration
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","password":"123456","role":"individual"}'

License
This project is licensed under the MIT License - see the LICENSE file for details.

Support
For support, email shreyanshtripathi210@gmail.com or create an issue in the repository.
