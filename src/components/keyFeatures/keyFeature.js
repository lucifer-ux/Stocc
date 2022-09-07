import React from 'react'
import ImageToText from "./keyFeaturesImageToText"
import TextToImage from "./keyFeaturesTextToImage"
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
    </Container>
  )
}

export default keyFeature