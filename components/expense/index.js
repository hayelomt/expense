import React, {useState} from 'react';
import AddExpense from './AddExpense';
import ShowExpense from './ShowExpense';

const Expense = () => {
  const [screen, setScreen] = useState('view');

  return (
    <React.Fragment>
      <div className="container">
        <ul className="nav nav-tabs justify-content-center">
          <li className="list-group-item">
            <button onClick={() => setScreen('view')}>View</button>
          </li>
          <li className="list-group-item">
            <button onClick={() => setScreen('add')}>Add</button>
          </li>
        </ul>
        <div>
          {
            screen === 'view' ?
              <ShowExpense />
            :
              <AddExpense />
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default Expense;
