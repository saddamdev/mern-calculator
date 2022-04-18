import { useState } from 'react';
import ResultCards from './ResultCards';

const ScreenB = () => {
  const [results, setResults] = useState([]);
  return <ResultCards resultList={results} onSetResults={setResults} />;
};

export default ScreenB;
