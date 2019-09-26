import Link from 'next/link';

const linkStyle = {
    marginRight: 15
  };

  
const Modal = (props) => (
<div className="modal" id={props.modalId}>
    <div className="modal-dialog">
      <div className="modal-content">
  
        <div className="modal-header">
          <h1 className="display-5">Choose category</h1>
        </div>
  
        <div className="modal-body">
            <Link href="/income/bank-income">
            <a>Bank</a>
            </Link>
            <Link href="/income/cash-income">
            <a>Cash</a>
            </Link>
        </div>
  
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>
    
  <style jsx>{`
       
       a{
           margin-right:100px;
       }
       h1{
          color: grey !important;
       }
       button{
       }
     `}</style>
</div>
)

export default Modal;