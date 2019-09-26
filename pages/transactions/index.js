import Layout from "../../components/layout/Layout";
import ExTransaction from "../../components/transactions/ExTransaction";
import InTransaction from "../../components/transactions/InTransaction";
// import DatePicker from "react-datepicker";
import axios from 'axios'; 
// import "react-datepicker/dist/react-datepicker.css";



class Index extends React.Component {
  constructor (props){
    super(props);
   this.state = {
      selectedDate: this.formatDate(new Date().getDate()),
      expenseJson: [],
      incomeJson: [],
      expenseArray: [],
      incomeArray: []
    };
  }

  componentDidMount() {
    // get request
    console.log("component did mount.")
    axios.get('/api/expense')
    .then(response => {
      // console.log(response)
          const data = response.data.data;
          this.setState({expenseJson: data});

          console.log(this.state.expenseJson)
    })
    .catch((error) => {
      console.log(error);
    })
    axios.get('/api/income/get-incomes')
    .then(response => {
      // console.log(response);
      // console.log(response)
      const data = response.data.data;
      this.setState({incomeJson: data});

      console.log(this.state.incomeJson)

    })
    .catch((error) => {
      console.log(error);
    })
  }
  extractArray = json => {
    return Object.keys(json).map((key) => json[key]);
    
  }
  filterByDate = (array, date) => {
      return array.filter((item) => item.date.toString() === date.toString());
    };

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth()),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }


  handleDateChange = date => {
    this.setState({
      selectedDate: date,
      expenseArray: this.filterByDate(this.extractArray(this.state.expenseJson), date),
      incomeArray: this.filterByDate(this.extractArray(this.state.incomeJson), date)      
    });
  };
  
  render() {
    return (
      <Layout>
        <div className="form-group">
        <input className="form-control form-control-lg" type="date" value={this.state.selectedDate} onChange={event => this.handleDateChange(event.target.value)} />
        <br />
        
        </div>
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