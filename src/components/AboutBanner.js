import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

import {theme} from "../theme/GlobalStyles"

import Arrow from "../images/arrow.svg"

const TextContainer = styled.div`
    width: 100%;
    @media (min-width: ${theme.tablet}) {
        padding-right: 3rem;
        width: 50%;
    }
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
  position: relative;
  &:hover img { 
    transform: translate(5px);
    transition: 0.7s ease-in-out;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  @media (min-width: ${theme.tablet}) {
    flex-direction: row;
    padding: 3rem 3rem 3rem 6rem;
  }
 
`
const ImageContainer = styled.div`
    padding: 3rem 0;
    @media (min-width: ${theme.tablet}) {
        padding: 3rem 6rem 3rem 0;
        width: 35rem;
        order: 2;
    }
`

const Banner = () => {
    return (
        <Row>   
            <ImageContainer>
                <StaticImage src="../images/me.png" alt="me" />
            </ImageContainer>
            <TextContainer>
                <Heading>
                Hi! I'm <Name>Jade.</Name>
                </Heading>
                <Description>
                I’m a senior at Columbia University studying computer science on the graphics and vision track. Currently looking for new grad positions!
                </Description>
                <Description>
                To me, technology is a creative enterprise. Problem solving in new ways and building meaningful applications provides me an outlet for impactful innovation and a space for intellectual curiosity, both of which drive my sense of purpose and fulfillment. As I continue to code and create, I aim to deliver fresh and interesting experiences to users, and I strive to contribute to the development of new technologies for our future.
                </Description>
                <Description>
                See my <Animation> <Resume href="https://drive.google.com/file/d/1ba8YDHD5NvtUvttZQXGarFcbnhEkV11o/view?usp=sharing">
                <Name>Resume</Name> <img src={Arrow} style={{color: theme.magenta}} alt="arrow"/> 
                </Resume> </Animation>
                </Description>
            </TextContainer>
            
        </Row>

    )
}


export default Banner;