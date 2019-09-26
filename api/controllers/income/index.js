const incomeLib = require('../../../lib/income');

module.exports.addIncome = (req, res) => {
  // console.log('Add Exepense', req.body)
  const {date, category, amount, name} = req.body;
  console.log(req.body)
  const incomeData = {
    date,
    category,
    amount,
    
  };

  incomeLib.addIncome(incomeData)
    .then(income => {
      return res.json({
        success: true,
        msg: 'Income added successfully',
        data: income
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

module.exports.getIncomes = (req, res) => {
  incomeLib.getIncomes()
    .then(incomes => {
      return res.json({
        success: true,
        msg: 'Incomes',
        data: incomes
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
