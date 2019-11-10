/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
    margin: 0 auto;
    max-width: 800px;
    margin-top: 4rem;
    font-size: 1.4rem;
    color: #fff;
    font-weight: 200;
    line-height: 2.7rem;
    letter-spacing: 3px;;
  }
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      /* color: #6a6a6a; */
      text-shadow: 0px 0px 0px;
      color: lightcoral;
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
          Hi, I&apos;m a web developer from El Paso, Texas, currently based in sunny California. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me
          <span><Link to="/contact"> here.</Link></span>
        </p>
      </Container>
    </Layout>
  </Wrapper>
);

export default IndexPage;

