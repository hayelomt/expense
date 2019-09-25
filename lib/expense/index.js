const fs = require('fs');
const path = require('path');

module.exports.addExpense = expense => {
  return new Promise((resolve, reject) => {
    try {
      const dbFile = path.join(__dirname, 'db.js');
      if (!fs.existsSync(dbFile)) {
        fs.writeFileSync(dbFile, JSON.stringify([]));
      }

      fs.readFile(dbFile, (err, data) => {
        if (err) {
          return reject(err);
        }
        let incomeData = JSON.parse(data.toString());
        incomeData.push(expense);

        fs.writeFile(dbFile, JSON.stringify(incomeData), (err) => {
          if (err) {
            return reject(err);
          }
          resolve(expense);
        })
      })
    }
    catch(err) {
      return reject(err);
    }
  });
}

module.exports.getExpenses = expense => {
  return new Promise((resolve, reject) => {
    try {
      const dbFile = path.join(__dirname, 'db.js');

      fs.readFile(dbFile, (err, data) => {
        if (err) {
          return reject(err);
        }

        const incomeData = JSON.parse(data.toString());
        resolve(incomeData);
      })
    }
    catch(err) {
      return reject(err);
    }
  })
}