import { useState } from 'react';
import ResultCards from './ResultCards';
import Form from './Form';

const ScreenA = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <ResultCards resultList={results} onSetResults={setResults} />
      <Form onSetResults={setResults} />
    </>
  );
};

export default ScreenA;
