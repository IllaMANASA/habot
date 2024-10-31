import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/habot-logo.jpg';
import dropdownArrow from '../assets/drop-down.png';
import './Navbar.css';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <Link to="/"><img src={logo} alt='Logo of company' className="navbar-logo" /></Link>

      {/* Hamburger icon to toggle menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <AiOutlineMenu size={24} />
      </div>

      <nav className={`links ${menuOpen ? 'open' : ''}`}>
        <Link to="/findsuppliers">Find Suppliers</Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <div className="dropdown-button">
            Find Service Tags
            <img src={dropdownArrow} alt="Dropdown arrow" className="dropdown-arrow" height='12px' width='12px'/>
          </div>
          {dropdownVisible && (
            <div className="dropdown-content">
              <Link to="/tag1">Service Tag 1</Link>
              <Link to="/tag2">Service Tag 2</Link>
            </div>
          )}
        </div>

        <Link to="/login" className="login-signup" style={{color:'#00732F'}}>Login / Sign Up</Link>
      </nav>
    </div>
  );
}
