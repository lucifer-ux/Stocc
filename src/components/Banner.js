import React from 'react'
import styled from 'styled-components'
import img1 from "../assets/team.jpg"

const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};
background-color: ${props => `rgba(${props.theme.textRgba},0.9)`};
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translateY(-50%,-50%);
display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;
img{
    width: 15rem;
    height: auto;
}
`
const Banner = () => {
  return (
    <Section>

    </Section>
  )
}

export default Banner