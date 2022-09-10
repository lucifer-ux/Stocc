import React from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import Aos from "aos"
import { useEffect } from 'react';
import content from "../../assets/arrays/imageTextMapper"

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
margin-right: 1%;
`

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width:75%;
min-height: 50vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center`

const KeyFeatures = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <OuterContainer>
      <Title />
      <Section data-aos="zoom-in">
        ({
          content.map((val, i) =>
            (i % 2) ? <Container data-aos="zoom-in">
              <Box>
                <img height={400} src={val.img} alt='key-features' />
              </Box><Box>
                <h1>{val.text}</h1>
                <p>{val.subText}</p>
              </Box>
            </Container> :
              <Container data-aos="zoom-in">
                <Box>
                  <h1>{val.text}</h1>
                  <p>{val.subText}</p>
                </Box><Box>
                  <img height={400} src={val.img} alt='key-features' />
                </Box>
              </Container>)})
      </Section>
    </OuterContainer>
  )
}

export default KeyFeatures