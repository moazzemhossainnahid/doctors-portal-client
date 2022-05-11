import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const menuitems = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/review'>Review</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/signin'>Signin</Link></li></>
  return (
    <div>
      <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuitems}
      </ul>
    </div>
    <a href='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuitems}
    </ul>
  </div>

</div>
    </div>
  );
};

export default Navbar;