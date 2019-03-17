/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TypedText from '../components/typed'

const Wrapper = styled.div`
  background: #323944;
  width: 100%;
  color: #6a6a6a;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const Container = styled.div`
  position: relative;
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
    font-size: 1.8rem;
    color: #fff;
    font-weight: 200;
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
  <Wrapper>  
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Container>
        <h1>
          <TypedText />
        </h1>
        <h2>Websites, Blogs, E-Commerce</h2>
        <p>Custom sites for what you need.</p>
      </Container>
    </Layout>
  </Wrapper>
);

export default IndexPage;

