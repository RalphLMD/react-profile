import React from 'react'

import {Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks} from './NavbarElements';

import {FaBars} from 'react-icons/fa'


const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
               <NavLogo to='/'>&lt;<span>RD/</span>&#62;{/*<img src="images/logo2.png" class="logo"/>*/}</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contacts">Contacts</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar