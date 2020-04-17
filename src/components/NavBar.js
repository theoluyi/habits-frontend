import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'gray',
  textDecoration: 'none',
  color: 'white',
}

const darkBlue = {
  background: "green"
}

const NavBar = () => {
  return (
    <>
    <div className="navbar" >
      <NavLink
      to="/" exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
      Home
      </NavLink>

      <NavLink
      to='/login' exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
        Login
      </NavLink>
      
      <NavLink
      to='/register' exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
        Register
      </NavLink>

      <NavLink
      to='/habits' exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
        Habits
      </NavLink>
      
      <NavLink
      to='/leaderboard' exact
      style={linkStyle}
      activeStyle={darkBlue}
      >
        Leaderboard
      </NavLink>
    </div>
    <br/><br/>
    </>
  );
};

export default NavBar;
