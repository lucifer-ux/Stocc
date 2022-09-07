import React from 'react'
import ImageToText from "./keyFeaturesImageToText"
import TextToImage from "./keyFeaturesTextToImage"
import Comp3 from "./com3"
import Comp4 from "./Com4"
import Comp5 from "./Comp5"
import Comp6 from "./Comp6"
import Comp7 from "./Comp7"
import Comp8 from "./Comp8"
import styled from 'styled-components'

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
const Container = styled.div`
margin-left: 1%;
margin-right: 1%;
`
const keyFeature = () => {
  return (
    <Container >
        <Title>Key Features</Title>
        <ImageToText/>
        <TextToImage/> 
        <Comp3 />
        <Comp4/> 
        <Comp5/>
        <Comp6/> 
        <Comp7/>
        <Comp8/>
        
    </Container>
  )
}

export default keyFeature