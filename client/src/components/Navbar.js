import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <span className='navbar-brand mb-0 h1'>MERN Calculator</span>
        <div className='me-auto'>
          <Link className='link' to='/'>
            Input
          </Link>
          <Link className='link' to='/result'>
            Result
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
