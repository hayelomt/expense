const fs = require('fs');
const path = require('path');

module.exports.addIncome = income => {
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
        incomeData.push(income);

        fs.writeFile(dbFile, JSON.stringify(incomeData), (err) => {
          if (err) {
            return reject(err);
          }
          resolve(income);
        })
      })
    }
    catch(err) {
      return reject(err);
    }
  });
}

module.exports.getIncomes = () => {
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