import * as React from "react"
import { theme } from "../theme/GlobalStyles.js"
import styled from "styled-components"

import Layout from "../components/layout.js"
import AboutBanner from "../components/AboutBanner.js"
import SubHeading from "../components/SubHeading.js"

const Section = styled.div`
  background-color: ${props => props.blue ? theme.lightBlue : "none"};
  padding: 3rem;
  @media (min-width: ${theme.tablet}) {
      padding: 3rem 3rem 3rem 6rem;
  }
`
const Row = styled.div`
  display: flex;
  padding-top: 1.5rem;
  flex-direction: column;
  @media (min-width: ${theme.tablet}) {
    flex-direction: row;
  }
`
const Box = styled.div`
  padding-right: 1rem;
  width: 100%;
  @media (min-width: ${theme.tablet}) {
    padding-right: 3rem;
    width: 30%;
  }
`

// markup
const AboutPage = () => {

  return (
    <Layout>
      <AboutBanner />

      <Section blue>
        <SubHeading text="Relevant Coursework" />
        <Row>
          <Box>
            <p>Computer Graphics.</p>
            <p>Databases.</p>
            <p>Cryptography.</p>
          </Box>
          <Box>
            <p>Artificial Intelligence.</p>
            <p>Natural Language Processing.</p>
          </Box>
          <Box>
            <p>Computer Systems.</p>
            <p>Computer Science Theory.</p>
          </Box>
        </Row>
      </Section>

      <Section>
        <SubHeading text="Other Work Experience" />
        <Row>
          <Box>
            <h3>Intercollegiate Chamber Music Festival</h3>
            <h3>Executive Producer</h3>
            <p>
              I organize masterclasses, panels, and performances in collaboration with world renowned artists and the Chamber Music Society of Lincoln Center. 
            </p>
          </Box>
          <Box>
            <h3>Kairos Partners</h3>
            <h3>IT Consultant Intern</h3>
            <p>
              I helped implement cost efficient solutions for client infrastructures and also streamlined internal communciation by establishing technical documentation protocols.
            </p>
          </Box>
          <Box>
            <h3>Workville</h3>
            <h3>Marketing Intern & Community Manager</h3>
            <p>
              I created content to increase online presence and conducted market research to facilitate partnership negotiations. I also engaged with a community of 400+ daily.
            </p>
          </Box>
        </Row>
      </Section>
    
   </Layout>

  )
}


export default AboutPage