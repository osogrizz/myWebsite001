import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub, FaFreeCodeCamp } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
// FiFacebook -- to add Facebook SVG image

// const MainWrapper = styled.div`
//   background-color:  #323944;
//   color: #6a6a6a;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// `

const SectionContainer = styled.div`
  padding-top: 120px;
  min-height: 390px;
  text-align: center;
  justify-content: space-around;
  ul {
      margin: 0;
      align-items: center;
      li {
          display: inline-flex;
          margin-left: 0 auto;
          padding:  0 10px;
          
          svg {
              height: 1.3em;
              width: 1.3em;
              font-weight: lighter;
          }

          #twitter {
              stroke: #00aced;
              &:hover {
                  stroke-width: 0;
                  color: orange;
                  fill: #00aced !important;
              }
          }
          #facebook {
              stroke: #3b5998;
              &:hover {
                  stroke-width: 0;
                  color: orange;
                  fill: #3b5998 !important;
              }
          }
          #linkedin {
              fill: #6a6a6a;
              &:hover {
                  stroke-width: 0;
                  color: orange;
                  fill: #0077B5 !important;
              }
          }
          #github {
              fill: #6a6a6a;
              &:hover {
                  stroke-width: 0;
                  color: orange;
                  fill: #9542f4 !important;
              }
          }
          #free-code-camp {
              fill: #6a6a6a;
              &:hover {
                  stroke-width: 0;
                  color: orange;
                  fill: rgb(1, 100, 0) !important;
              }
          }
          #mail {
              fill: #6a6a6a;
              &:hover {
                  stroke-width: 0;
                  color: orange;
                  fill: orange !important;
              }
          } 
      }
  }
`

const Titles = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
`

const TopWrapper = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    text-decoration: none;
    color: #6a6a6a;
    font-weight: 100;
  }

  @media (max-width: 750px) {
    margin: 0 10px;
  }
`

const SectionWrapper = styled.div`
  /* position: static; */
  color: #6a6a6a;
  /* backgroundColor: 'rgba(20, 20, 20, 1)', */
  /* backgroundColor: 'inherit', */
  bottom: 0;
`

const FooterBreak = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  @media (max-width: 750px) {
    margin: 0 10px;
  }
`

// const TopFooter = () => (
//   <TopWrapper>
//     <div>
//       Copyright © 
//       {' '}
//       {new Date().getFullYear()}
//       , Leo Torres - All Rights Reserved
//     </div>

//     <div style={{ textAlign: 'right', }}>
//       <p>A BobaBird Website</p>
//     </div>
//   </TopWrapper>
// )


const Footer = () => (

  <SectionWrapper>
    <FooterBreak>
      <hr /> 
    </FooterBreak>
    <TopWrapper>
      <div>
      Copyright © 
        {' '}
        {new Date().getFullYear()}
      , Leo Torres - All Rights Reserved
      </div>

      <div style={{ textAlign: 'right', }}>
        <p>A BobaBird Website</p>
      </div>
    </TopWrapper>
    <SectionContainer>
      <Titles>Social Media</Titles>
      <ul>
        <li>
          <a href="https://twitter.com/oso_grizz" target="_blank" rel="noopener noreferrer"><FiTwitter id="twitter" /></a>
        </li>
        {/* <li>
                    <a href="" label="facebook" tooltiptext="Coming soon."><FiFacebook id="facebook" /></a>
            </li> */}
        <li>
          <a href="/contact/"><FaEnvelope id="mail" /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/leohtorres/" target="_blank" rel="noopener noreferrer"><FaLinkedin id="linkedin" /></a>
        </li>
        <li>
          <a href="https://github.com/osogrizz" target="_blank" rel="noopener noreferrer"><FaGithub id="github" /></a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/osogrizz" target="_blank" rel="noopener noreferrer"><FaFreeCodeCamp id="free-code-camp" /></a>
        </li>
      </ul>
    </SectionContainer>
  </SectionWrapper>

);

export default Footer;
