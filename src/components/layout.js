import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from "../components/footer"
import "./layout.css"
import { relative } from "path"

const FooterStyles = styled.footer`
margin: 0 auto;
max-width: 1120px;
font-size: 16px;
display: grid;
grid-template-columns: 1fr 1fr;

a {
  text-decoration: none;
  /* color: #444; */
  color: #6a6a6a;
  font-weight: 100;
}

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
        <div
          style={{
            position: relative,
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
          <div style={{ margin: `0 auto`,maxWidth: `1120px` }}>
            <hr /> 
          </div>
          <FooterStyles>
              <div>
              Copyright © {new Date().getFullYear()}, Leo Torres - All Rights Reserved
              </div>

              <div style={{ textAlign: 'right', }}>
              <a href="https://leo-torres.com" target="_blank" rel="noopener noreferrer">A BobaBird Website</a>
              </div>
          </FooterStyles>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
