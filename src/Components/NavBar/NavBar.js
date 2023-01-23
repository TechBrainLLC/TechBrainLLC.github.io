
import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo, Title } from './NavBarElements';


export const NavBar = () => {
    return (
        <>
            <Nav>
                <Logo></Logo>
                <Title>TechBrain</Title>
                <Bars/>
                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/About/AboutUs' activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to='/Articles/Hub' activeStyle>
                        Articles
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
