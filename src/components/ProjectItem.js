import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'

import {theme} from "../theme/GlobalStyles"

import SubHeading from "../components/SubHeading.js"
import GithubIcon from '../images/github.svg';
import LinkIcon from '../images/link.svg';

const CenterWrapper = styled.div`
    width: 90%;
    margin: auto;
    padding-bottom: 6rem;
    @media (min-width: ${theme.mobile}) {
        width: 80%;
    }
    @media (min-width: ${theme.largeDesktop}) {
        width: 60%;
    }
`
const Container = styled.div`
    margin: 3rem 0 0 0;
    padding: 2rem;
    border-radius: 3rem;
    background-color: ${theme.lightBlue};
    display: flex;
    flex-direction: column;
    @media (min-width: ${theme.mobile}) {
        flex-direction: row;
        padding: 4rem;
    }
    
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: ${theme.mobile}) {
        order: 1;
        width: ${props => props.hasImage ? "50%" : "100%" };
        margin-right: ${props => props.hasImage ? "2rem" : "0" };
    }
    @media (min-width: ${theme.largeDesktop}) {
        width: ${props => props.hasImage ? "80%" : "100%" };
    }
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 0.5rem;
`
const Icon = styled.a`
    padding-right: 1rem;
    padding-top: 1.5rem;
    display: ${props => props.exists ? "block" : "none"};
`
const Stack = styled.p`
    color: ${theme.magenta};
`
const ImgContainer = styled.div`
    width: 100%;
    margin: 1rem auto;
    display: ${props => props.hasImage ? "block" : "none" };
    @media (min-width: ${theme.mobile}) {
        order: 2;
        width: 50%;
        margin: auto ;
    }
`


const projectTextData =
    [
        {
            title: "Music Visualization",
            description: "Developed a tool that creates an animated album cover for a song. After analyzing audio frequencies and amplitude levels, I selected multiple key elements (beats, middle frequency ranges, etc.) to represent as visuals  in order to create a comprehensive and representative visualization of the song.",
            stack: "javascript, p5.js, html/css",
            github: "https://github.com/jadechen170/animated-album-cover",
            link: "https://editor.p5js.org/jadechen170/present/7ejR6RY1o"
        },
        {
            title: "Ray Tracer",
            description: "Implemented a Monte Carlo rendering ray tracer using global illumination and a Russian Roulette termination algorithm. Also includes algorithms for direct illumination and ambient occlusion renderers.",
            stack: "OpenGL, Java",
            github: "https://github.com/jadechen170/ray_tracer"
        },
        {
            title: "Eden Chen Music",
            description: "Originally coded in vanilla HTML / JavaScript /CSS, this website had poor performance and minimal optimization. I redid the whole thing from scratch on ReactJS and Gatsby, so that I could optimize image loading and make reusable components for maintainability. I also designed the website.",
            stack: "ReactJS, Gatsby, Git",
            github: "https://github.com/jadechen170/edenchenmusic.github.io",
            link: "https://edenchenmusic.com"
        },
        {
            title: "GLSL Shaders",
            description: "Implemented Gourand and Phong shaders, as well as a shader that maps textures from  image files onto a mesh, and a shader that uses RGB color channels from a normal map to give surfaces the appearance of being textured. I also implemented a CEL (toon) shader, using non-photorealistic rendering to make a 3D object appear flat.",
            stack: "OpenGL, Java",
            github: "https://github.com/jadechen170/glsl_shaders"
        },
        {
            title: "Web Development",
            description: "I coded a variety of websites, and my work includes building components as an intern for Gigfinesse, and designing and coding the website for the Intercollegiate Chamber Music Festival (which I also lead!). Of course, I also designed and created this website over multiple iterations (available on Github).",
            stack: "Python, Django, ReactJS, HTML/CSS/JavaScript",
            github: "https://github.com/jadechen170/icmfnyc.github.io",
            link: "https://icmfnyc.github.io/"
        },
        {
            title: "Full Stack Intern at Shoptaki",
            description: "I led a team of 7 interns in developing a brand new website for Shoptaki, a start-up fintech company. Given a design to work with, I focused on coding to improve performance and user interaction. Multiple components are animated with ThreeJS. For example, the globe on the homepage can be dragged to spin.",
            stack: "ReactJS, Gatsby, Git",
            link: "https://www.shoptaki.com/"
        },
        {
            title: "Online Shopping Database",
            description: "Implemented a database design on PostgreSQL and coded a simple front end web application that manipulates the database through updates and queries. This application is modeled after real-world online shopping websites, and allows for typical functionalities such as checking out an order and viewing previous purchases.",
            stack: "PostgreSQL, Python, Flask, Google Cloud",
            github: "https://github.com/jadechen170/coms4111-dbproj",
            link: "https://youtu.be/_K_QiEeWp18"
        }
    ]

const ProjectItem = () => {

    const data = useStaticQuery(graphql`
        query ProjectQuery {
            allFile(filter: {relativeDirectory: {eq: "projects"}}, sort: {order: ASC, fields: name}) {
                edges {
                    node {
                        id
                        name
                        childImageSharp {
                            id
                            fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    // take query data and map into Img components
    const images = data.allFile.edges.map((edge) => (
    <Img
        style={{width: "100%"}}
        fluid={edge.node.childImageSharp.fluid}
        key={edge.node.id}
        alt={edge.node.name}
    />
    ));

    let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]); 
    const projectData = zip(projectTextData, images);

    const projectItems = projectData.map( item => (
        <Container hasImage={item[1]}>
            <ImgContainer hasImage={item[1]}>
                {item[1]}
            </ImgContainer>
            <TextContainer hasImage={item[1]}>
                <SubHeading text={item[0].title}/>
                <p>{item[0].description}</p>
                <IconContainer>
                    <Icon href={item[0].github} exists={item[0].github}> 
                        <img src={GithubIcon} alt="Github Icon" /> 
                    </Icon>
                    <Icon href={item[0].link} exists={item[0].link}> 
                        <img src={LinkIcon} alt="Link Icon" /> 
                    </Icon> 
                </IconContainer>
                <Stack>{item[0].stack}</Stack>
            </TextContainer>
        </Container>
    ));


    return (
        <CenterWrapper> {projectItems} </CenterWrapper>
    )
}

export default ProjectItem;

