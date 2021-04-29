import * as React from "react"
import { theme } from "../theme/GlobalStyles.js"
import styled from "styled-components"

import Layout from "../components/layout.js"
import Arrow from "../images/arrow.svg"

const TextContainer = styled.div`
    width: 50%;
    padding: 3rem 6rem;

`     
const Heading = styled.h1`
    font-size: 2.5rem;
    @media (min-width: ${theme.tablet}) {
        font-size: 3rem;
    }
`
const Name = styled.span`
    color: ${theme.magenta};
`
const Description = styled.p`
    line-height: 2rem;
`
const Resume = styled.a`
    text-decoration: none;
    font-weight: bold;
`
const Animation = styled.span`

  transition: 1s ease-in-out;
  &:hover { 
    position: fixed;
    transform: translate(0, -2px);
    transition: 1s ease-in-out;
  }
`

// markup
const AboutPage = () => (
  <Layout>
      <TextContainer>
        <Heading>
          Hi! I'm <Name>Jade.</Name>
        </Heading>
        <Description>
          I’m a rising senior at Columbia University studying computer science on the graphics and vision track. (I’m looking for summer 2022 internship opportunities!)
        </Description>
        <Description>
          To me, technology at its core is a creative enterprise. Problem solving in new ways and building meaningful applications provides me an outlet for impactful innovation and a space for intellectual curiosity, both of which drive my sense of purpose and fulfillment. As I continue to code and create, I aim to deliver fresh and interesting experiences to users, and I strive to contribute to the development of new technologies that will define our future.
        </Description>
        <Description>
          See my <Animation><Resume href="https://drive.google.com/file/d/1ba8YDHD5NvtUvttZQXGarFcbnhEkV11o/view?usp=sharing">
            <Name>Resume</Name> <img src={Arrow} style={{color: theme.magenta}}/>
          </Resume></Animation>
         
        </Description>

      </TextContainer>
  </Layout>
)

export default AboutPage