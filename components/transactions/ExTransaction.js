import Transaction from './index'

const ExTransaction = (props) => (
    <Transaction date={props.date}>
        <div>
            <strong><span>{props.name}</span></strong>
            <strong><span>{props.amount}</span></strong>
        </div>
    </Transaction>
    
);

export default ExTransaction;