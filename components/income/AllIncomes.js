import React from 'react';


const axios = require('axios')
const getAllIncomes = async () => {
    try {
      return await axios.get('http://localhost:3000/api/income/get-incomes')
    } catch (error) {
      console.error(error)
    }
}


export default class AllIncomes extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            incomeData: null
        }
    }
    componentDidMount(){
        getAllIncomes().then((data)=>{
            this.setState({
                incomeData: data,
                loading: false
            });
        })
    }
    render() {
        let display = "loading"
        if(!this.state.loading){
            console.log("here is the data",this.state.incomeData.data.data);
            const incomes = this.state.incomeData.data.data;
            display = incomes.map((income, index)=>{
               return ( 
                  <tr key={index}> 
                    <th scope="row">{index+1}</th>
                    <td>{income.category}</td>
                    <td>{income.amount}</td>
                    <td>{income.date}</td>
                  </tr>
               )
            });
        }
        return(
            <div>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                    {display}
                </tbody>
            </table>
            </div>
        )
    }
}


