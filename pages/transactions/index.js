import Layout from "../../components/layout/Layout";
import ExTransaction from "../../components/transactions/ExTransaction";
import InTransaction from "../../components/transactions/InTransaction";
import DatePicker from "react-datepicker";
import axios from 'axios'; 
import "react-datepicker/dist/react-datepicker.css";

class Index extends React.Component {
  constructor (props){
    super(props);
   this.state = {
      selectedDate: new Date(),
      expenseJson: [{ "1": { name: 'moto bike', amount: 345, date: new Date() },
  "2":{ name: 'oil', amount: 452, date: new Date() } }],
      incomeJson: [ { name: 'moto bike', amount: 345, date: new Date() },
      { name: 'oil', amount: 452, date: new Date() } ],
      expenseArray: [],
      incomeArray: []
    };
  }

  // componentDidMount() {
    //get request
  //   axios.get('')
  //   .then(response => {
          // this.state.expenseArray = Object.keys(response).map((key) => response[key])
  //   })
  //   .catch((error) => {
  //     console.log(e);
  //   })
  // }
  extractArray = json => Object.keys(json[0]).map((key) => json[0][key]);
  
  filterByDate = array => {
    // debugger;
    try {

      return array.filter((item) => item.date.getTime() === this.state.selectedDate.getTime());
    }
    catch (e) {

      return []
    }
    
  };
  
  handleChange = date => {
    this.setState({
      selectedDate: date,
      expenseArray: this.filterByDate(this.extractArray(this.state.expenseJson)),
      incomeArray: this.filterByDate(this.extractArray(this.state.incomeJson))
    });
  };

  
  render() {
    return (
      <Layout>
        <DatePicker
            selected={this.state.selectedDate}
            onChange={this.handleChange}
        />
        <ul className="list-group">
          {this.state.incomeArray.map(function (income, i) {
            return (
              <li key={i} className="list-group-item list-group-item-primary">
                <InTransaction amount={income.amount} 
                                date={income.date} />
              </li>
              )
            })}
        </ul>
        <ul className="list-group">
            {this.state.expenseArray.map(function (e,i) {
              return (
                <li key={i} className="list-group-item list-group-item-danger">
                  <ExTransaction name={e.name}
                              amount={e.amount}
                              date={e.date} />
                </li>
                )
            })}
        </ul>
        
      </Layout>
    )
  }
}

export default Index;