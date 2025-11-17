const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email, password, role } = req.body;
  
  res.json({
    _id: 'mock_user_id_123',
    name: name,
    email: email,
    role: role,
    token: 'mock_jwt_token_123'
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  res.json({
    _id: 'mock_user_id_123',
    name: 'Test User',
    email: email,
    role: 'individual',
    token: 'mock_jwt_token_123'
  });
});

router.get('/me', (req, res) => {
  res.json({
    _id: 'mock_user_id_123',
    name: 'Test User',
    email: 'test@test.com',
    role: 'individual'
  });
});

module.exports = router;
