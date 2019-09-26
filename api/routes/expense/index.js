const router = require('express').Router();
const expenseController = require('../../controllers/expense');

router.get('/', expenseController.getExpenses);

router.post('/', expenseController.addExpense);

module.exports = router;