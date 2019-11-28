/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { FaGithub } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo'

const Wrapper = styled.div`
  -webkit-transform: translate3d(0,0,0);
  background: var(--bg);
  color: var(--text-color);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  @media  (max-width: 475px) {
    max-width: 100vw;
    padding: 0.025rem;
    overflow: hidden;
  }
`
const Container = styled.div`
  text-align: center;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  /* margin-bottom: 200px; */
  max-width: 960px;
  min-height: 80vh;
  /* color: #4d4d4d; */
  color: #6a6a6a;
  h1 {
    z-index: -1;
    font-size: 4.25rem;
    font-weight: 300;
  }
  p {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 475px) {
    display: block;
  }
`

const CardContainer = styled.div`
  display: flex;;
  justify-content: space-around;

  @media screen and (max-width: 475px) {
    display: block;
    padding: 0;
  }
  @media screen and (min-width: 476px) and (max-width: 1315px) {
    display: block;
    justify-content: space-around;
    padding: 0;
  }
`
const LinkContainer = styled.div`
  text-align: center;
  margin-bottom: 200px;
a {
  font-size: 1.2rem;
  color: #4d4d4d;
  text-decoration: none;
  &:hover {
    color: #898989;
  }
}
`

const Card = styled.div`

  margin: 40px;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  min-width: 400px;
  box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.15), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
  transition: all .5s ease;

  &:hover {
    transform: scale3d(1.04, 1.04, 1.04);
  }

  h1 {
    margin-top: 0;
    padding: 0.8rem;
  }

  h3 {
    padding: 0.8rem;
    font-size: 0.8rem;
    color: orange;
    font-weight: 400;
    letter-spacing: 2px;
    /* text-align: left; */
   }

  p {
    text-align: left;
    padding: 0.8rem;
    font-size: 0.6rem;
    color: var(--p-text-color);
    font-weight: 400;
    letter-spacing: 2px;
  }

  a {
    text-decoration: none;
  }

  #github {
    font-size: 2rem;
    fill: #6a6a6a;
    &:hover {
      stroke-width: 0;
      /* fill: #9542f4 !important; */
      fill: orange !important;
    }
  }

  @media (max-width: 475px) {
    margin: 40px auto 80px;
    min-width: 80vw;

    p {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 476px) and (max-width: 1315px) {
    display: block;
    padding: 0;
    margin: 40px auto 100px;
    width: 65vw;
  }
  `

const Portfolio = ({ data }) => (
  <>
    <Wrapper>
      <Layout>
        <SEO title="Portfolio" />
        <Container>

          <h1>Portfolio</h1>
          <p>Please have a look at some examples of my work.</p>

          <CardContainer>
            

            <Card>
              <Img 
                fluid={data.taco.fluid}
              />
              <a href="https://gifted-goldberg-11d877.netlify.com/" target="_blank" rel="noopener noreferrer">
                <h3>Lily&#39;s Taqueria</h3>
              </a>
              <p>Tech Stack: React, Gatsby, JavaScript, CSS, Styled Components, GraphQL</p>
              <a href="https://github.com/osogrizz/lilys-taqueria" target="_blank" rel="noopener noreferrer"><FaGithub id="github" /></a>
            </Card>

            <Card>
              <Img
                // style={{ height: '100%' }}
                fluid={data.conjugator.fluid}
              />
              <a href="https://conjugator-bw.netlify.com/" target="_blank" rel="noopener noreferrer">
                <h3>Spanish Conjugator App</h3>
              </a>
              <p>Tech Stack: JavaScript, React, React Router, API </p>
              <a href="https://github.com/Conjugator-bw/conj-FE/tree/master/campeon-conjugator" target="_blank" rel="noopener noreferrer"><FaGithub id="github" /></a>
            </Card>

            <Card>
              <Img
                // style={{ height: '100%' }}
                fluid={data.santaFe.fluid}
              />
              <a href="https://gatsby-starter-santa-fe.netlify.com/" target="_blank" rel="noopener noreferrer">
                <h3>Gatsby Starter Santa Fe</h3>
              </a>
              <p>Tech Stack: React, Gatsby, JavaScript, CSS, Styled Components, GraphQL</p>
              <a href="https://github.com/osogrizz" target="_blank" rel="noopener noreferrer"><FaGithub id="github" /></a>
            </Card>

          </CardContainer>

          <CardContainer>
            
            <Card>
              <Img
                // style={{ height: '100%' }}
                fluid={data.markDown.fluid}
              />
              <a href="https://markdown-preview.netlify.com/" target="_blank" rel="noopener noreferrer">
                <h3>Markdown Previewer</h3>
              </a>
              <p>Tech Stack: Javascript, MD, CSS, Styled Components, Gatsby</p>
              <a href="https://github.com/osogrizz" target="_blank" rel="noopener noreferrer"><FaGithub id="github" /></a>
            </Card>

            <Card>
              <Img
                // style={{ height: '100%' }}
                fluid={data.cocktails.fluid}
              />
              <a href="https://mystifying-bartik-7d34ab.netlify.com/" target="_blank" rel="noopener noreferrer">
                <h3>Whisper Sister&#39;s</h3>
              </a>
              <p>Tech Stack: Gatsby, Styled Components, Instagram API, Styled Components, CSS </p>
              <a href="https://github.com/osogrizz" target="_blank" rel="noopener noreferrer"><FaGithub id="github" /></a>
            </Card>

            <Card>
              <Img
                // style={{ height: '100%' }}
                fluid={data.tmdb.fluid}
              />
              <a href="https://silly-brattain-800b5c.netlify.com/" target="_blank" rel="noopener noreferrer">
                <h3>Movie Database</h3>
              </a>
              <p>Tech Stack: JavaScript, Styled Components, CSS, The Movie Database API </p>
              <a href="https://github.com/osogrizz" target="_blank" rel="noopener noreferrer"><FaGithub id="github" /></a>
            </Card> 

          </CardContainer>
        </Container>

        <LinkContainer>
          <Link to="/">Go back to the homepage</Link>
        </LinkContainer>

      </Layout>
    </Wrapper>
  </>
);


export default Portfolio;

export const query = graphql`
  query PortfolioQuery {
    card: imageSharp(fluid: {originalName: {eq: "homeBG.jpg" } } ) {
      fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
      }
    }
    
    cocktails: imageSharp(fluid: {originalName: {eq: "whisper-sisters.png" } } ) {
      fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
      }
    }
    
    markDown: imageSharp(fluid: {originalName: {eq: "markDown.png" } } ) {
      fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
      }
    }
    santaFe: imageSharp(fluid: {originalName: {eq: "santaFe.png" } } ) {
      fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
      }
    }
    taco: imageSharp(fluid: {originalName: {eq: "taco.png" } } ) {
      fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
      }
    }
    tmdb: imageSharp(fluid: {originalName: {eq: "tmdb.png" } } ) {
      fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
      }
    }
    conjugator: imageSharp(fluid: {originalName: {eq: "conjugator.png" } } ) {
      fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid
      }
    }

  }
`;
