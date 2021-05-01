import * as React from "react"
import styled from "styled-components";

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
        <SubHeading text="My Projects" title={true}/>
      </Container>
      <ProjectItem />
    </Layout>
  )
 
}

export default ProjectsPage