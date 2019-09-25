const router = require('express').Router();

router.post('/', (req, res) => {
  res.json({
    income: '4000'
  });
})

module.exports = router;