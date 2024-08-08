import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Mis tareas
        </Link>
        <button
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className='navbar-toggler'
          data-bs-target='#navbarNav'
          data-bs-toggle='collapse'
          type='button'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
        </div>
      </div>
    </nav>
  );
};
export default Header;