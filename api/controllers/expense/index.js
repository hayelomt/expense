const expenseLib = require('../../../lib/expense');

module.exports.addExpense = (req, res) => {
  // console.log('Add Exepense', req.body)
  const {date, category, amount, name} = req.body;
  const expenseData = {
    date,
    category,
    amount,
    name
  };

  expenseLib.addExpense(expenseData)
    .then(expense => {
      return res.json({
        success: true,
        msg: 'Expense added successfully',
        data: expense
      });
    })
    .catch(err => {
      return res.status(500)
        .json({
          success: false,
          msg: err.msg || 'Error occurred on server'
        });
    })
}

module.exports.getExpenses = (req, res) => {
  expenseLib.getExpenses()
    .then(expenses => {
      return res.json({
        success: true,
        msg: 'Expenses',
        data: expenses
      })
    })
    .catch(err => {
      return res.status(500)
        .json({
          success: false,
          msg: err.msg || 'Error occurred on server'
        });
    })
}

// module.exports.getExpenses = (req, res) => {
  // expenseLib.getExpenses()
  //   .then(expenses => {
  //     return res.json({
  //       success: true,
  //       msg: 'Expenses',
  //       data: expenses
  //     })
  //   })
  //   .catch(err => {
  //     return res.status(500)
  //       .json({
  //         success: false,
  //         msg: err.msg || 'Error occurred on server'
  //       });
  //   })
// }
