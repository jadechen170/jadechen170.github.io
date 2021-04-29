import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

import {theme} from "../theme/GlobalStyles"

import Arrow from "../images/arrow.svg"

const Container = styled.div`
    background: ${theme.bannerBlue};
    height: calc(100vh - 7.8rem);
    display: flex;
    justify-content: center;
    align-items: center;

`
const TextContainer = styled.div`
    width: 80%;
    margin: 4rem 0;
    text-align: center;
    @media (min-width: ${theme.tablet}) {
        width: 50%;
        margin: 4rem 0 8rem 0;
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
const Description = styled.h2`
    line-height: 2.5rem;
    font-size: 1.4rem;
`
const NextLink = styled(Link)`
    margin-top: 2rem;
    font-size: 1.25rem;
    text-decoration: underline;
    color: #000;
    &:hover {
        text-decoration: underline;
    }
`


const Banner = () => {
    return (
        <Container>
            <TextContainer>
                <Heading>
                    Hi! I'm <Name>Jade.</Name>
                </Heading>
                <Description>
                    I’m a software engineer studying computer science at Columbia University. Currently, I am interning as a Summer Engineering Analyst at Goldman Sachs.
                </Description>
                <NextLink to="/projects/">
                    See my work  <img src={Arrow} /> 
                </NextLink>
            </TextContainer>
            
        </Container>
    )
}


export default Banner;