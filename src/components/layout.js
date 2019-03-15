import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const LayoutWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1240;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const TopFooter = styled.footer`
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

const FooterBreak = styled.div`
  margin: 0 auto;
  max-width: 1120px;

@media (max-width: 750px) {
  margin: 0 10px;
}


`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutWrapper>
          <main>{children}</main>
        </LayoutWrapper>
        <FooterBreak>
          <hr /> 
        </FooterBreak>
        <TopFooter>
          <div>
              Copyright © 
            {' '}
            {new Date().getFullYear()}
, Leo Torres - All Rights Reserved
          </div>

          <div style={{ textAlign: 'right', }}>
            <p>A BobaBird Website</p>
          </div>
        </TopFooter>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
