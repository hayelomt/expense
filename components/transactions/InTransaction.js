import Transaction from './index';

const InTransaction = (props) => (
    <Transaction date={props.date}>
        <div>
            <strong><span className="row-item">Income</span></strong>
            <strong><span className="row-item">{props.amount}</span></strong>
            <strong><span>{" ETB"}</span></strong>
            <style jsx>
                {`
                  .row-item{
                      padding: 30px;
                  }
                `}
            </style>
        </div>
    </Transaction>
    
);

export default InTransaction;