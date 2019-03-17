/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  position: relative;
  text-align: center;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  max-width: 960px;
  min-height: 90vh;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  color: #fff;
  p {
    font-size: 1.8rem;
    line-height: 2.9rem;
    font-weight: 200;

    a {
      text-align: left !important;
    }
  }
  h1 {
    font-size: 4.25rem;
    font-weight: 300;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #1f2023;
      border-bottom: 2px solid;
      text-shadow: none;
      font-weight: 200;
    }
  }

  @media (max-width: 475px) {
    h1 {
      padding-top: 0;
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.9rem;
    }
  }
`
const Wrapper = styled.div`
  background: #323944;
  width: 100%;
  color: #6a6a6a;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`


const About = () => (
  <Wrapper>
    <Layout>
      <SEO title="About" />
      <Container>
        <title>About</title>
        <h1>About</h1>
        <p>
          Hi, my name is Leo Torres. I enjoy making the internet one website at a time. I'm a one
          man team that can provide you with a professional, great looking website to showcase
          your Blog, Business or whatever it is you want to share.
        </p>
        <p>
          <Link to="/portfolio/"> Take a look at some of my work.</Link>
        </p> 
        <p>
          <Link to="/contact/"> Or, let's get started now.</Link>
        </p>
      </Container>
    </Layout>
  </Wrapper> 
)

export default About

