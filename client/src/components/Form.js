import { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [isCalculating, setCalculating] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      setCalculating(true);
      const formData = new FormData();
      formData.append('title', title);
      formData.append('file', file);
      try {
        axios
          .post('/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            if (res.status === 200) {
              props.onSetResults(res.data);
            }
          });
      } catch (err) {
        console.log(err);
      }
      setCalculating(false);
    }
  };

  return (
    <div className='container'>
      <h1>Input</h1>
      <form onSubmit={submitForm}>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter a calculation title'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <input
            type='file'
            accept='.txt'
            className='form-control'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        {isCalculating ? (
          <p className='warning' style={{ color: '#ffc107' }}>
            Calculating, please wait...
          </p>
        ) : (
          <button type='submit' className='btn btn-primary'>
            Calculate
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
