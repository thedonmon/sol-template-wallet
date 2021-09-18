import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { Wallet } from './web3/Wallet';
  
function Navbar() {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/home'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/transact'>
            Transact
          </NavLink>
        </NavMenu>
        <Wallet/>
      </Nav>
    </>
  );
};
  
export default Navbar;