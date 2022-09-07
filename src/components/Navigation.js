import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './sections/Logo'
import { useState } from 'react'
const Section = styled.section `
width:100vw;
`

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;`

const Menu = styled.ul`
display:flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 64em) {
  position:fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: ${props => `calc(100vh -${props.theme.navHeight})`};
  z-index: 50;
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
  backdrop-filter: blur(3px);
  flex-direction: column;
  justify-content: center;
  transform ${props => props.click ? "translateY(0)" : "translateY(100%)"};
  transition: 0.5s ease;
  
}
`
const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
font-size: 1.5rem;
cursor: pointer;
&::after{
  content: ' ';
  display: block;
  width:  0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width:100%
}
`
const HamburgerMenu = styled.span`
width: 1.5rem;
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform:${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)'};

display: none;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.5s ease;

@media (max-width: 64em) {
  display: flex;
}
&::after, &::before{
  content: ' ';
  width: ${props => props.click ? '1.1rem' : '2rem'};
  height: 2px;
  right: ${props => props.click ? '-3px' : '0'};
  background: ${props => props.theme.text};
  position: absolute;
}
&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};
}
&::before{
  bottom: 0.5rem;
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};
}
`
const Navigation = () => {
  const [click, setClick] = useState(false)
  return (
    <Section>
      <Navbar>
        <Logo/>
        <HamburgerMenu click= {click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click= {click}>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button text={"JOIN US"} link={"https://www.google.com/"}/>
      </Navbar>
    </Section>
  )
}

export default Navigation