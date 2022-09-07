import React from 'react'
import box1Elements from "../../assets/team.jpg"
import styled from 'styled-components'
import Aos from "aos"
import { useEffect } from 'react';

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width:75%;
min-height: 80vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`
const image = styled.img`
height: 1500px;
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center`

const KeyFeatures = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
    },[])    
  return (
    <Section data-aos = "zoom-in">
     <Container>
     <Box>
     <img height={500} src={box1Elements}/>
     </Box>
     <Box>
     <h1>Lorem Ipsum Dolor Sit AmetLorem Ipsum Dolor Sit Amet</h1>
     </Box>
     </Container>
   </Section>
  )
}

export default KeyFeatures