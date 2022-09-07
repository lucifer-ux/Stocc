import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import { dark } from '../../styles/Themes'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width:75%;
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

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width:80%;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`
const SubTextLight = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 0 auto;
`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
margin: 0 auto;
margin-top: 15px;
`
const About = () => {
  return (
<Section>
  <Container>
    <Box>
      <Carousel/></Box>
      <Box>

      <Title>
      quis nostrud exercitation ullamco laboris nisi ut
      </Title>

      <SubText>
      quis nostrud exercitation ullamco laboris nisi ut
      </SubText>

      <SubTextLight>
      quis nostrud exercitation ullamco laboris nisi ut
      </SubTextLight>
      <ButtonContainer>
      <ThemeProvider theme = {dark}>
      <Button text = "Discord" link = "#"/>
      </ThemeProvider>
      </ButtonContainer>
    </Box>
  </Container>
</Section>
    )
}

export default About