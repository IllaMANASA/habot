import { Link } from 'react-router-dom';
import logo from '../assets/habot-logo.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='Logo of company' height='130px' width='130px' />
      <nav className='links'>
        <Link to="/findsuppliers">Find Suppliers</Link>
        <Link to="/findservices">Find Service Tags</Link>
        <Link to="/login" className="login-signup">Login / Sign Up</Link>
      </nav>
    </div>
  );
}
