import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import {theme} from "../theme/GlobalStyles"

import Arrow from "../images/arrow.svg"

const Container = styled.div`
    width: 100%;
    background-color: ${theme.footerBlue};
    display: flex;
    padding: 3rem 0;
    flex-direction: column;
    @media (min-width: ${theme.mobile}) {
        flex-direction: row;
    }
`
const Name = styled.div`
    flex-basis: 45%;
    color: ${theme.lightBlue};
    padding-left: 3rem;
    h3 {
        margin: 0;
    }
    p { 
        line-height: 0.1rem;
    }
`
const Links = styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 0 3rem;
    a {
        color: ${theme.lightBlue};
        text-decoration: none;
        padding-bottom: 1rem;
        transition: 0.1s ease-in-out;
    }
    a:hover {
        color: ${theme.bannerBlue};
    }
    @media (min-width: ${theme.mobile}) {
        padding: 0;
    }
`



const Footer = () => {
    return (
        <Container>
            <Name>
                <h3>Jade Chen</h3>
                <p>Designed and built by me.</p>
            </Name>
            <Links>
                <a href="mailto:jade.chen@columbia.edu" aria-label="email">Email me. </a>  
                <a href="https://www.linkedin.com/in/jade-chen-321a18173/" aria-label="LinkedIn">Connect on LinkedIn.</a>
                <a href="https://github.com/jadechen170" aria-label="Github">View my Github.</a>
                <a href="https://drive.google.com/file/d/1ba8YDHD5NvtUvttZQXGarFcbnhEkV11o/view?usp=sharing" aria-label="Resume">Download my resume.</a>
            </Links>
            <Links>
                <Link to="/">Home.</Link>
                <Link to="/projects/">Projects.</Link>
                <Link to="/other-work/">Other work.</Link>
                <Link to="/about/">About.</Link>
            </Links>
        </Container>
    )
}


export default Footer;