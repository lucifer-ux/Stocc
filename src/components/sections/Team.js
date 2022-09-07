import React from 'react'
import styled from 'styled-components'
import img1 from "../../assets/team.jpg"
import 'aos/dist/aos.css';
import Aos from "aos"
import { useEffect,useState } from 'react';
import { useHover } from 'react-use';

const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
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
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
const Item = styled.div`
width: calc(20rem-4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
backdrop-filter: blur(4);
border: 2px solid ${props => props.theme.text};
border-radius: 20px;
z-index: 5;
&:hover{
  img{
    transform: translateY(-3rem) scale(0.8);
  }
}
`

const ImageContainer = styled.div`
width: 15rem;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
padding: 1rem;
border-radius: 20px;
cursor: pointer;
img{
  width: 100%;
  height: auto;
  transition: all 0.5s ease;
};
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
margin-top: 1rem;
font-weight: 400;

`
const MemberComponent = ({img, name = "", position=""})=>{
  useEffect(()=>{
    Aos.init({duration:1000});
    },[]) 
  return (
    <Item data-aos="zoom-in">
      <ImageContainer>
        <img src={img} alt = {name} />
        <Name>{name}</Name>
        <Position>{position}</Position>{position}
      </ImageContainer>
    </Item>
  )
}
const Team = () => {
  return (
    <Section data-aos="zoom-in">
      <Title> Team</Title>
      <Container>
        <MemberComponent img = {img1} name="dancer" position="founder"/>
        <MemberComponent img = {img1} name="dancer" position="founder"/>
        <MemberComponent img = {img1} name="dancer" position="founder"/>
        <MemberComponent img = {img1} name="dancer" position="founder"/>
        <MemberComponent img = {img1} name="dancer" position="founder"/>
        <MemberComponent img = {img1} name="dancer" position="founder"/>
        <MemberComponent img = {img1} name="dancer" position="founder"/>
      </Container>
      </Section>
  )
}

export default Team