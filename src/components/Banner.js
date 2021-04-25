import * as React from "react";
import styled from "styled-components";

import {theme} from "../theme/GlobalStyles"

const Container = styled.div`
    background: ${theme.bannerBlue};
    position: absolute;
    top: 0;
    width: 100%;
    height: 90%;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;

`
const TextContainer = styled.div`
    width: 80%;
    margin-top: 5rem;
    text-align: center;
    @media (min-width: ${theme.tablet}) {
        width: 50%;
        margin-top: 2rem;
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
`
const NextLink = styled.p`
    margin-top: 2rem;
    font-size: 1.25rem;
    text-decoration: underline;
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
                <NextLink>
                    See my work
                </NextLink>
            </TextContainer>
            
        </Container>
    )
}


export default Banner;