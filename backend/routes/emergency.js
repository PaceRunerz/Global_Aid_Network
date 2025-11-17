const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    emergencies: [
      {
        id: 1,
        type: 'food',
        title: 'Food shortage in downtown area',
        description: 'Urgent need for food supplies',
        status: 'pending',
        priority: 'high'
      }
    ]
  });
});

router.post('/', (req, res) => {
  res.json({
    success: true,
    message: 'Emergency request submitted successfully!',
    emergency: req.body
  });
});

module.exports = router;
