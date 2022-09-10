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
margin-right: 1%;
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

const KeyFeatures = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  const {height, width} = dimensions();
  return (
    <OuterContainer id = "KeyFeatures">
      <Title> Key Features</Title>
      <Section data-aos="zoom-in">
        { width>650 ? 
          (content.map((val, i) =>
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
              </Container>
              ))
            :
            ((content.map((val, i) =>
             <Container data-aos="zoom-in">
              <Box>
                <img height={400} src={val.img} alt='key-features' />
              </Box><Box>
                <h1>{val.text}</h1>
                <p>{val.subText}</p>
              </Box>
            </Container> 
              )))
            }
      </Section>
    </OuterContainer>
  )
}

export default KeyFeatures