
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from './../../Assets/TechBrainLogo.png'

export const Nav = styled.nav`
  background: #000;
  display: flex;
  padding: 1rem 10%;
  z-index: 12;
  max-height: 3rem
  
`;
  
export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Logo'
})`
  width: 3rem;
  height: auto;
  margin-right: 1%;
  align-self: flex-start;
`;


export const Title = styled.text`
  color: #fff;
  font-size: 2.5rem;
  margin-left: 1rem;
  align-self: center;
  

`;


export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  align-self: center;
  text-decoration: none;
  padding: 0rem 2.5rem 0rem 0rem;
  height: 100%;
  cursor: pointer;
 
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #4ed7cb;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
  white-space: nowrap; 
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  color: #4ed7cb;
  justify-content: flex-end;
  width: 400px;
  max-width: 120px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
