import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
// import Toggle from '../utilities/toggle';

const MobileNavWrapper = styled.div`
    position: absolute;
    display: flex;
    /* justify-content: center;
    text-align: center; */
    top: 4rem;
    top: 80px;
    left: 0;
    width: 100%;
    background: #323944;
    box-shadow: 0px 10px 8px rgba(20, 20, 20, 0.6);
    z-index: 99;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    ul {
        font-size: 1.5rem;  
        list-style: none;
        li {
            padding: 20px 0;
            width: 30vw;
            a {
                text-decoration: none;
                color: #fff;
                letter-spacing: 0.08rem;
                text-transform: uppercase;
            }
        }
    }

    @media (max-width: 574px) {
      ul {
        li {
          padding: 20px;
          width: 65vw;
        }
      }
    }
`;

const NavMenu = () => (

  <MobileNavWrapper>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <hr />
      <li>
        <Link to="/about/">About</Link>
      </li>
      <hr />
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
      <hr />
      <li>
        <Link to="/portfolio/">Portfolio</Link>
      </li>
    </ul>
  </MobileNavWrapper>
  
)
  

export default NavMenu