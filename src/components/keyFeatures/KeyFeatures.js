import React from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import Aos from "aos"
import { useEffect } from 'react';
import content from "../../assets/arrays/imageTextMapper"
import dimensions from "../../assets/Hooks/WindowDimensions"
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`
const OuterContainer = styled.div`
margin-left: 1%;
margin-right: 5%;
`

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width:100%;
min-height: 50vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
@media(max-width: 650px)
{
  flex-direction: column;
}
`
const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media(max-width: 650px)
{
  margin: 10px;
  padding: 10px;
}
`
const Para = styled.p`
margin-right: 5%;
margin-left: 1%;
margin-top: 1%;
font-size: 1.5em;
width: 45vw;
color: grey;
`
const Heading = styled.h1`
font-size: 2.5em;
color: black;
display: flex;
`

const KeyFeatures = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  const {height, width} = dimensions();
  return (
    <OuterContainer data-aos = "zoom-out-up" id = "KeyFeatures">
      <Title> Key Features</Title>
      <Section data-aos="zoom-out-up">
        { width>650 ? 
          (content.map((val, i) =>
            (i % 2) ? <Container data-aos="zoom-out-up">
              <Box>
                <img height={400} src={val.img} alt='key-features' />
              </Box><Box>
                <Heading>{val.text}</Heading>
                <Para>{val.subText}</Para>
              </Box>
            </Container> :
              <Container data-aos="zoom-out-up">
                <Box>
                  <Heading>{val.text}</Heading>
                  <Para>{val.subText}</Para>
                </Box><Box>
                  <img height={400} src={val.img} alt='key-features' />
                </Box>
              </Container>
              ))
            :
            ((content.map((val, i) =>
             <Container data-aos="zoom-out-up">
              <Box>
                <img height={400} src={val.img} alt='key-features' />
              </Box><Box>
                <Heading>{val.text}</Heading>
                <Para>{val.subText}</Para>
              </Box>
            </Container> 
              )))
            }
      </Section>
    </OuterContainer>
  )
}

export default KeyFeatures