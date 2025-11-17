const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Donations API is working!',
    donations: []
  });
});

router.get('/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      total: 0,
      food: 0,
      completed: 0,
      today: 0,
      restaurants: 15,
      organizations: 8,
      cities: 3
    }
  });
});

router.post('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Donation created successfully!',
    donation: req.body
  });
});

module.exports = router;
