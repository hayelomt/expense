import Transaction from './index';

const InTransaction = (props) => (
    <Transaction date={props.date}>
        <div>
            <strong><span>Income</span></strong>
            <strong><span>{props.amount}</span></strong>
        </div>
    </Transaction>
    
);

export default InTransaction;