import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import { FiMenu } from 'react-icons/fi';
// import Toggle from '../Utilities/toggle';
// import NavMenu from './nav-menu';
// import Img from 'gatsby-image'
// import { graphql } from 'gatsby'
import Image from './image'
// import NavMenu from './nav-menu';

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  // max-width: 100vw;
  overflow: hidden;
  // padding: 1.45rem 0rem 1.45rem;
  background: inherit;
  /* margin-bottom: 1.45rem; */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  h1 {
    font-weight: 500;
    font-size: 2.25rem;
    a {
      text-decoration: none;
      color: #1f2023;
      text-shadow: 0.5px 0.5px 1px #636363, -0.25px -0.25px 2px #636363;
      // padding-left: 20px;
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
      // margin-left: 1em;
      margin-right: 20px;
      font-size: 1.3rem;
      padding-top: 12px;
    }
  }
  a {
    color: #FF7C00;
    text-decoration: none;
    &:hover {
      transition: all 230ms ease;
    }
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
  text-decoration: none;
  padding-left: 0;

  img {
    transition: all .8s;
  }
  img:hover {
    transform: scale(.9) rotate(-5deg);
  }

  @media (max-width: 1565px) {
    // max-width: 60vw;
  }
  @media  (max-width: 1486px) {
    // margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    // text-align: center;
  }
`;

const NavContainer = styled.div`
  // z-index: 3;
  // max-width: 50vw;
  // margin: 0;
  ul {
    display: flex;
    justify-content: space-evenly;
    li {

    }
  }
  a {
    &:hover {
      transition: all 230ms ease;
      border-bottom: 3px solid cornflowerblue;
    }
   
  }
`;

const activeLinkStyle = {
  borderBottom: '1px solid cornflowerblue',
  fontWeight: 490,
}


const Header = ({ siteTitle, data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoContainer >
          <Link to="/" >
            <Image id="logo" style={{ maxHeight: '120px', maxWidth: '120px'}}/>
          </Link>
      </LogoContainer>


      <NavContainer>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>About</Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>Contact</Link>
          </li>
          <li>
            <Link to="/portfolio/" activeStyle={activeLinkStyle}>Portfolio</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;



// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
