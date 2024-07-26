import React, { Component } from 'react';

const NavBar = ({totalCounters}) => { //stateless functional component
    return ( <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar <span className='badge rounded-pill bg-secondary'>{totalCounters}</span></a>
    </div>
  </nav> );
}
 
export default NavBar;

