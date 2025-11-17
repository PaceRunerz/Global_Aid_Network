const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    posts: [
      {
        id: 1,
        username: 'Hope Foundation',
        content: 'Thanks to generous donations, we provided meals to 150 people today!',
        time: '2 hours ago',
        likes: 124,
        comments: 23
      },
      {
        id: 2,
        username: 'Community Response',
        content: 'URGENT: Need non-perishable food items for flood victims.',
        time: '1 day ago',
        likes: 89,
        comments: 17,
        urgent: true
      }
    ]
  });
});

router.post('/', (req, res) => {
  res.json({
    success: true,
    message: 'Post created successfully!',
    post: req.body
  });
});

module.exports = router;
