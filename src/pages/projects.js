import * as React from "react"
import styled from "styled-components";
import { theme } from "../theme/GlobalStyles.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout.js"

import ProjectItem from "../components/ProjectItem"
import SubHeading from "../components/SubHeading"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

// markup
const ProjectsPage = () => {

  return ( 
    <Layout>
      <Container>
        <SubHeading text="My Projects" title/>
      </Container>
      <ProjectItem />
    </Layout>
  )
 
}

export default ProjectsPage