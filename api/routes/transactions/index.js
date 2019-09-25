const router = require('express').Router();

router.post('/', (req, res) => {
  res.json({
    transactions: '6000'
  });
})

module.exports = router;