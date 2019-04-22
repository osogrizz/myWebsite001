/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TypedText from '../components/typed'
import "../components/layout.css"

const Wrapper = styled.div`
  background: var(--bg);
  width: 100%;
  color: var(--text-color);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  margin-top: 1.45rem;
  max-width: 1200px;
  min-height: 90vh;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  color: #fff;
  z-index: 10;
  h1 {
    padding-top: 100px;
    font-size: 5.25rem;
    font-weight: 300;
  }
  h2 {
    font-size: 3rem;
    font-weight: 300;
  }
  p {
    margin-top: 4rem;
    font-size: 1.8rem;
    color: #fff;
    font-weight: 200;
    line-height: 3rem;
  }
  a {
    color: #fff; 
    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
    }
  }

  @media (max-width: 475px) {
    h1 {
      padding-top: 0;
      font-size: 4.25rem;
    }
  }
`

const IndexPage = () => (
  <Wrapper className="themeBody">  
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Container>
        <h1>
          <TypedText />
        </h1>
        <p>
          Lorem ipsum dolor amet chambray locavore asymmetrical godard man bun, pork belly butcher tumeric disrupt +1 iPhone health goth aesthetic. Pop-up echo park tofu next level, vice shabby chic trust fund kickstarter pitchfork. Jean shorts beard lyft copper mug hoodie chambray bespoke actually post-ironic literally crucifix austin paleo stumptown cronut. VHS blue bottle microdosing art party wayfarers shoreditch lo-fi +1 williamsburg authentic hoodie. Edison bulb hashtag 8-bit master cleanse yr williamsburg shoreditch. XOXO freegan enamel pin kombucha artisan before they sold out.
        </p>
      </Container>
    </Layout>
  </Wrapper>
);

export default IndexPage;

