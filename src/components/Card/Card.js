import React from 'react'
import "./Card.css"
import Element from './Element'
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

const Card = () => {
  return (
      <>
      <Title>Have fun and learn</Title>
        <Element name = "gallery-wrap wrap-effect-1"/>
        <Element name = "gallery-wrap wrap-effect-2"/>
        <Element name = "gallery-wrap wrap-effect-4"/>
       
        </>
  )
}

export default Card