const express = require('express');
const router = express.Router();

router.get('/leaderboard', (req, res) => {
  const { type = 'restaurants' } = req.query;
  
  let leaderboard = [];
  
  if (type === 'restaurants') {
    leaderboard = [
      { name: 'Green Bites Restaurant', totalImpact: 1203, totalDonations: 45 },
      { name: 'Community Kitchen', totalImpact: 987, totalDonations: 32 },
      { name: 'Fresh Harvest Cafe', totalImpact: 756, totalDonations: 28 }
    ];
  } else if (type === 'ngos') {
    leaderboard = [
      { name: 'Hope Foundation', totalImpact: 2500, totalDonations: 67 },
      { name: 'Community Response', totalImpact: 1800, totalDonations: 54 },
      { name: 'Aid For All', totalImpact: 1500, totalDonations: 42 }
    ];
  } else {
    leaderboard = [
      { name: 'Sarah Johnson', totalDonations: 45, totalImpact: 2500 },
      { name: 'Michael Chen', totalDonations: 38, totalImpact: 1800 },
      { name: 'Emma Wilson', totalDonations: 32, totalImpact: 1500 }
    ];
  }
  
  res.json(leaderboard);
});

module.exports = router;
