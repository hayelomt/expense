const Transaction = (props) => (
    <div className="container">
        <div className="row">
            {props.children}
        </div>
        <span>{props.date}</span>
    </div>
);

export default Transaction;