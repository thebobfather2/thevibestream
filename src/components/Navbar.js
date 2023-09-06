import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

function AuthNavbar({ isAuthenticated, currentPage, handlePageChange }) {
  const [user, setUser] = useState(null);
  const accessToken = localStorage.getItem('accessToken');
  console.log('Access Token:', accessToken);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (accessToken) {
      axios.get('http://localhost:3000/api/users/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [accessToken]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/Login');
  };

  return (
    <div className="NavbarWrapper"> {/* add a wrapper div */}
    <div className='Navbar'>
      <nav>
        <div className='Navbar__mobile'>
          <button className='Navbar__toggle' onClick={toggleMenu}>
            <i className='fa fa-bars' />
          </button>
          {showMenu && (
           <div className='Navbar__mobile-menu'>
           <Link className='MobileLinks' to='/' onClick={closeMenu}>
             Home
           </Link>
           <Link className='MobileLinks' to='/Marketplace' onClick={closeMenu}>
             Marketplace
           </Link>
           <Link className='MobileLinks' to='/Music' onClick={closeMenu}>
             Music
           </Link>
           <Link className='MobileLinks' to='/MidwestBoy' onClick={closeMenu}>
             MidwestBoy
           </Link>
         </div>
       )}
     </div>
        <div className='Navbar__desktop'>
          <Link
            className='Links'
            style={{ color: '#ffffff' }}
            to='/'
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          >
            Home
          </Link>

          <Link
            className='Links'
            style={{ color: '#ffffff' }}
            to='/Marketplace'
            // Check to see if the currentPage is `Homework`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          >
            Marketplace
          </Link>

          <Link
            className='Links'
            style={{ color: '#ffffff' }}
            to='/Music'
          >
            Music
          </Link>

          <Link
            className='Links'
            style={{ color: '#ffffff' }}
            to='/MidwestBoy'
          >
            MidwestBoy
          </Link>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default AuthNavbar;