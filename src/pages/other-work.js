import * as React from "react"
import { theme } from "../theme/GlobalStyles.js"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout.js"

import SubHeading from "../components/SubHeading.js"

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-bottom: 6rem;
`
const DesignItem = styled.div`
  padding-top: 2rem;
`
const MusicItem = styled.div`
  padding-top: 2rem;
  width: 100%;
  @media (min-width: ${theme.largeDesktop}) {
    width: 80%;
  }
`
const Blurb = styled.p`
  text-align: center;
`
const Video = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
    height: 0;
    iframe{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

// markup
const OtherWorkPage = () => {

  return (
    <Layout>
      <Container>
        <SubHeading text="A snippet of my other passions" title={true} />
        <p></p>

        <SubHeading text="UI/UX design" />
        <Blurb>
          There's no product without a design. Click on the images below to view the slide deck for some of my designs!
        </Blurb>

        <DesignItem>
          <SubHeading text="Lionwash" />
          <a href="https://drive.google.com/file/d/1K2uyOZ7A3OTYbsZitGe-0qlZ2IJ5VGMa/view?usp=sharing">
            <StaticImage src="../images/design/lionwash.png" alt="lionwash" />
          </a>
        </DesignItem>

        <DesignItem style={{paddingBottom: "6rem"}}>
          <SubHeading text="Come Along" />
          <a href="https://drive.google.com/file/d/10RTcXMdqXp_EpHmeipLR2Un3oNytqJ-_/view?usp=sharing">
          <StaticImage src="../images/design/come_along.png" alt="come_along" />
          </a>
        </DesignItem>

        <SubHeading text="Classical Music" />
        <Blurb>
          From computer keyboards to piano keyboards. Check out some of my most memorable past performances!
        </Blurb>

        <MusicItem>
          <SubHeading text="Chopin Scherzo No. 2 at Zhongshan Culture and Art Center" />
          <Video>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vA15o3jS8Zs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>
        </MusicItem>

        <MusicItem>
          <SubHeading text="Rachmaninoff Piano Concerto No. 2, I. Moderato" />
          <Video>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ex7lrabMpQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>
        </MusicItem>

        <MusicItem>
          <SubHeading text="Mozart Piano Concerto No. 17, III. Allegretto" />
          <Video>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MSvWat8Kjyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>
        </MusicItem>
          
        
      </Container>
    </Layout>
  )
}

export default OtherWorkPage