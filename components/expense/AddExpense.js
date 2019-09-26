import React from 'react'
import axios from 'axios';

let timer;

class AddExpense extends React.Component {
  state = {
    name: '',
    amount: '',
    category: 'CASH',
    date: '',
    loading: false,
    error: null
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      error: null,
      loading: true,
      success: false
    })

    const data = {
      name: this.state.name,
      amount: this.state.amount,
      category: this.state.category,
      date: this.state.date
    }
    
    console.log(data)
    axios.post('/api/expense', data)
      .then(expense => {
        this.setState({
          error: false,
          success: true,
          loading: false,
          name: '',
          amount: '',
          category: 'CASH',
          date: ''
        });
        timer = setTimeout(() => {
          this.setState({
            success: false
          });
        }, 2000)
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          error: err.message || 'Error creating expense'
        })
      })
  }

  componentWillUnmount() {
    clearTimeout(timer);
  }
  

  render() {
    const {error, loading, success} = this.state;
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            <h4>Add Expense</h4>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input 
                  name="name"
                  className="form-control" 
                  placeholder="Name"
                  value = {this.state.name}
                  required
                  onChange={this.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="">Amount</label>
                <input 
                  type="number"
                  name="amount" 
                  className="form-control" 
                  value={this.state.amount} 
                  placeholder="Amount"
                  required
                  onChange={this.handleChange}
                  />
              </div>

              <div className="form-group">
                <label htmlFor="">Category</label>
                <select 
                  value={this.state.category}
                  onChange={this.handleChange}
                  className="form-control" name="category">
                  <option value="CASH">CASH</option>
                  <option value="BANK">BANK</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="">Date</label>
                <input 
                  type="date"
                  name="date" 
                  className="form-control" 
                  value={this.state.date} 
                  placeholder="Date"
                  required
                  onChange={this.handleChange}
                  />
              </div>
              {
                loading ? 
                  <button 
                    type="submit" 
                    disabled
                    className="btn btn-primary">
                    Submitting
                  </button> 
                :
                  <button 
                    type="submit" 
                    className="btn btn-primary">
                    Submit
                  </button>
              }
              <div>
                {
                  error && (
                    <p className="text-danger">{error}</p>
                  )
                }
                {
                  success && (
                    <div className="m-3 alert alert-success" role="alert">
                      Expense added successfully
                    </div>
                  )
                }
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AddExpense
