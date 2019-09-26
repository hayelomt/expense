const router = require('express').Router();
const incomeController = require('../../controllers/income');

router.get('/get-incomes', incomeController.getIncomes);

router.post('/add-income', incomeController.addIncome);

module.exports = router;