import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { GlobalStyles } from "../theme/GlobalStyles"
import {theme} from "../theme/GlobalStyles"

import NavBar from "./NavBar.js"

const Container = styled.div`
  margin: 0;
  /* max-width: ${theme.largeDesktop}; */
  padding: 0 0 0;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            title
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <NavBar
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <Container>
        <main>{children}</main>
      </Container>  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout