import Link from 'next/link';
import Layout from '../layout/IncomeLayout';
import Modal from './Modal'


const Navbar = () => (
<Layout>
  <div className = "jumbotron main" >
      <div className = "row">
            <div className = "col-6">
                <h1 className="display-5">Transaction type</h1>
                <p className="lead" >Income</p>
            </div>
            <div className = "col-6">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add +</button>
            </div>
      </div>
  </div>
  <Modal modalId="myModal"/>
 
  <style jsx>{`
       
        div.main{
            background-color: #CACACB !important;
            color: black;
           
        }
        h1{
            margin-left: 30px;
        }
        p{
            color: #f5429b;
            font-weight: bold;
            margin-left: 38px;
        }
        button{
            
            border-radius: 20px;
            padding: 15px;
            margin-top: 20px;
            margin-left: 70% !important;
        }
      `}</style>
</Layout>

);

export default Navbar;


