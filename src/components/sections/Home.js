import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import 'aos/dist/aos.css';
import Aos from "aos"
import { useEffect } from 'react';

const Container = styled.div`
width:100%;
height: 80vh;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5%;
margin-left: 30%;
position: relative;
`
const ButtonContainer = styled.div`
width: 100%;
margin-left: 15%;
margin-top: 10%;
align-self: flex-start;
`
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
    },[])    
  return (<>
     <Container data-aos="zoom-in" id='Home'>
     <ButtonContainer>
     <Button text={"JOIN US"}/>
     </ButtonContainer> 
     </Container>     


     </>
  )
}

export default Home