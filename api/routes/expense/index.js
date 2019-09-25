const router = require('express').Router();

router.post('/add', (req, res) => {
  res.json({
    expense: '4000'
  });
})

module.exports = router;