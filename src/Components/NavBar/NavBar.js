
import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';


export const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/Home' activeStyle>
                        About Us
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/log-in'>Log In</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to='/sign-upin'>Sign Up</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
