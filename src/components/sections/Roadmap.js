import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
// import "../Roadmap/RoadMap.css"
import 'aos/dist/aos.css';
import Aos from "aos"


const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
margin-right: 1%;
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
@media (max-width: 650px)
{
  font-size: 34px;
}
`
const SubHeading = styled.div`
font-size: 26px;
color: #000000;
@media (max-width: 650px)
{
  font-size: 16px;
}
`

const Roadmap = ({title, subtext}) => {

useEffect(()=>{
Aos.init({duration:1000});
},[])

  return(
<Section data-aos = "zoom-in" id = "RoadMap">
  <Title>
    RoadMap
  </Title>
  <Container data-aos = "fade-left">
      <Heading>
          Q2 2022(Completed)
      </Heading>
  </Container>
  <Container data-aos = "fade-right">
      <SubHeading>
        Metaverse and Avatar Pipeline POC
      </SubHeading>
  </Container>
  <Container data-aos = "fade-left">
      <Heading>
        Q3 2022(Completed)
      </Heading>
  </Container>

  <Container data-aos = "fade-right">
      <SubHeading>
        NFT smart contract deployed on the blockchain
      </SubHeading>
  </Container>
  
  <Container data-aos = "fade-left">
      <Heading>
      Q4 2022(UpComing)
      </Heading>
  </Container>
  <Container data-aos = "fade-right">
      <SubHeading>
        Launch of DDW Global Dating server
      </SubHeading>
  </Container>
  
  <Container data-aos = "fade-left">
      <Heading>
      Q1 2023(UpComing)
      </Heading>
  </Container>
  <Container data-aos = "fade-right">
      <SubHeading>
        $DDW Token Launch
      </SubHeading>
  </Container>

</Section>
  )
}



export default Roadmap