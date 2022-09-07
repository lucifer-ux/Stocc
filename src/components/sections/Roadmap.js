import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import "../Roadmap/RoadMap.css"
import 'aos/dist/aos.css';
import Aos from "aos"


const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 1px solid ${(props) => props.theme.text};
width: fit-content;
`
const Container = styled.div`
width: 100%;
height: 15vh;
background-color: ${(props) => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Heading = styled.div`
font-size: 44px;
color: #f9429e;
`
const SubHeading = styled.div`
font-size: 26px;
color: #000000;
`

const Roadmap = ({title, subtext}) => {

useEffect(()=>{
Aos.init({duration:1000});
},[])

  return(
<Section data-aos = "zoom-in">
  <Title>
    RoadMap
  </Title>
  <Container data-aos = "fade-left">
      <Heading>
          heading
      </Heading>
  </Container>
  <Container data-aos = "fade-right">
      <SubHeading>
        SubHeading
      </SubHeading>
  </Container>
  <Container data-aos = "fade-left">
      <Heading>
        heading
      </Heading>
  </Container>
  <Container data-aos = "fade-right">
      <SubHeading>
        SubHeading
      </SubHeading>
  </Container>

</Section>
  )
}



export default Roadmap