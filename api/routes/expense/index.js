const router = require('express').Router();

router.post('/', (req, res) => {
  res.json({
    expense: '4000'
  });
})

module.exports = router;