import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ScreenA />}></Route>
        <Route path='/result' element={<ScreenB />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
