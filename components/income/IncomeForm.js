import React from 'react'
const axios = require('axios')

const AddIncome = async (fd) => {
    console.log("jkkkdsnksjdnksjdnkjsdnksjd", fd );
    try {
        console.log("jkkkdsnksjdnksjdnkjsdnksjd" );
      return await axios.post('http://localhost:3000/api/income/add-income', fd)
    } catch (error) {
      console.error(error)
    }
}
export default class IncomeForm extends React.Component {
    constructor(){
        super();
        this.state={
            amount: '',
            date: '',
            status: ''
        }
    
    }
    onSubmit(e){
        e.preventDefault();
        console.log("amount ", this.state.amount);
        console.log("date", this.state.date);
        let fd = {
            amount: this.state.amount,
            date: this.state.date,
            category: this.props.category
        }
        console.log("my form data ", fd)
        AddIncome(fd).then(()=>{
            console.log("saved")
            this.setState({status: "saved"})
        })

    }
  render() {
    
    return (

        <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
            <p className="lead text-center">Record your income below</p>
            <form onSubmit={(e)=>this.onSubmit(e)}>
               {/*amount*/}
               <input className="form-control form-control-lg" type="Number" 
               placeholder="Amount" value={this.state.amount} name = "amount"
               onChange= {(e)=>{
                   this.setState({
                       [e.target.name] : e.target.value
                   })
               }}
               />
               <br/>
               {/*date */}
              <input className="form-control form-control-lg" type="date" value="2011-08-19T13:45:00" 
               placeholder="DATE" value={this.state.date} name = "date"
               onChange= {(e)=>{
                   this.setState({
                       [e.target.name] : e.target.value
                   })
               }}
              />
                         <p className = "text-success">{this.state.status}</p>
               <button type="submit" className="btn btn-dark btn-block mt-4">Save</button>
            </form>
  
            </div>
        </div>
        </div>


    )
  }
}