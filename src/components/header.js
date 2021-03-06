import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Image from './image'

import ThemePicker from './ThemePicker'

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  /* overflow: hidden;   */
  overflow: visible;  
  background: inherit;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  h1 {
    font-weight: 500;
    font-size: 2.25rem;
    a {
      text-decoration: none;
      color: #1f2023;
      text-shadow: 0.5px 0.5px 1px #636363, -0.25px -0.25px 2px #636363;
    }
  }
  p {
    color: #4d4d4d;
  }
  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: inline-block;
      margin-right: 20px;
      font-size: 1.3rem;
      padding-top: 12px;  
    }
  }
  a {
    color: #FF7C00;
    /* color: lightcoral; */
    text-decoration: none;
    &:hover {
      transition: all 230ms ease;
    }
  }

  @media (max-width: 1486px) {
    height: 350px;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 95vw;
  padding: 1.45rem 1.0875rem;
      
  :first-child {  
    width: 80%; 
  }

  @media  (max-width: 1486px) {
    display: block;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    
    :first-child {  
      width: 120px;
      height: 200px;
    }

  }
`;

const LogoContainer = styled.div`
  min-width: 120px;
  height: fit-content;
  text-decoration: none;
  padding-left: 0;
  transition: all .1s;
  border: 4px solid orange;
  border-radius: 50%;

  .gatsby-image-wrapper {
    filter: drop-shadow(2px 4px 6px black );
  }

  @media screen and (max-width: 800px) {
   .gatsby-image-wrapper  {
      filter: none;
      box-shadow: 2px 6px 18px black;
      border-radius: 50%;
     }
  }

  &:hover {
    transition: 0.1s cubic-bezier(0, 1.8, 1, 1.8);
    transform:  translateY(0.7em) scale(1.05);
  }

  img {
    transition: all 0.1s;
  }
  img:hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 1565px) {
    margin-bottom: 40px;
  }
  @media  (max-width: 1486px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const NavContainer = styled.div`
  ul {
    display: flex;
    justify-content: space-evenly;
    li {
      letter-spacing: 2.4px;
    }
    .link-list {
      min-width: 120px;
    }
  }
  a {
    filter: drop-shadow(2px 4px 6px black);
    &:hover {
      transition: all 230ms ease;
      border-bottom: 3px solid cornflowerblue;
    }
  }

  @media (max-width: 500px) {
    ul {
      li {
        padding-top: 40px;
        margin-right: 10px;
        font-size: 18px;
      }
      .link-list {
        min-width: auto;
      }
    }
  }
`;

const activeLinkStyle = {
  borderBottom: '1px solid cornflowerblue',
  letterSpacing: '2px',
  fontWeight: 500,
}


const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <Image id="logo" style={{ maxHeight: '120px', maxWidth: '120px' }} />
        </Link>
      </LogoContainer>

      <NavContainer>
        <ul>
          <li className="link-list" >
            <Link to="/" activeStyle={activeLinkStyle}>Home</Link>
          </li>
          <li className="link-list" >
            <Link to="/contact/" activeStyle={activeLinkStyle}>Contact</Link>
          </li>
          <li className="link-list" >
            <Link to="/portfolio/" activeStyle={activeLinkStyle}>Portfolio</Link>
          </li>
          <li>
            <ThemePicker />
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;