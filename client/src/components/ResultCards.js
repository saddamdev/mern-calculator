import { useState, useEffect } from 'react';
import Modal from './Modal';

const ResultCards = (props) => {
  const [inputText, setInputText] = useState('');
  const [show, setShow] = useState(false);

  const fetchResults = () => {
    try {
      fetch('http://localhost:5000/')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) => props.onSetResults(jsonRes));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResults();
    // eslint-disable-next-line
  }, []);

  const seeInput = (text) => {
    setInputText(text);
    setShow(true);
  };

  return (
    <div className='container'>
      <h1>Total results: {props.resultList.length}</h1>
      {props.resultList.map((rslt, i) => (
        <div className='card mb-3' key={i}>
          <h5 className='card-header'>{rslt.title}</h5>
          <div className='card-body'>
            <h5 className='card-title'>{'=' + rslt.result}</h5>
            <button
              type='button'
              className='btn btn-success'
              onClick={() => {
                seeInput(rslt.txt);
              }}
            >
              See Input
            </button>
          </div>
        </div>
      ))}
      {show && <Modal inputData={inputText} onClose={() => setShow(false)} />}
    </div>
  );
};

export default ResultCards;
