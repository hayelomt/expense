import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ShowExpense() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/expense')
      .then(response => {
        const {data} = response;
        const expenses = data.data;
        // console.log('Got Expenss', expenses);
        setExpenses(expenses);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error', err);
        setError(err.message || 'Error occured whilte fetching data');
        setLoading(false);
      })
  }, [])

  return (
    <React.Fragment>
      <div className="container">
        {
          loading ? <div>Loading...</div>
          : (
            error ? (
              <div>
                <p className="text-danger">{error}</p>
              </div>
            ) : (
              <ul className="list-group">
                {
                  expenses.map((expense, i) => <li key={i} 
                    className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                      <p>{expense.name} [{expense.category}]</p>
                      <p>{expense.date}</p>
                    </span>
                    <span className="badge badge-primary badge-pill">
                      $ {expense.amount}
                    </span>
                  </li>)  
                }
              </ul>
            )
          )
        }
      </div>
    </React.Fragment>
  )
}

export default ShowExpense
