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

  :root {
  --bg: white;
  --text-color: #555;
  --link-color: #639A67;
  --link-hover: #205D67;
}

.dark-theme {
  --bg: #323944;
  --text-color: #6a6a6a;
  --link-color: #4d4d4d;
  --link-hover: #898989;
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
        <Footer />  
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
