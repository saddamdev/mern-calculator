const Modal = (props) => {
  return (
    <div className='modal' style={{ display: 'block' }}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <h5>{props.inputData}</h5>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-danger'
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
