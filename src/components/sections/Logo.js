import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import LogoImage from "../../DDW_Items/DDWLogo.png"
const LogoText = styled.div`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;
margin-top: 2%;
&:hover{
    transform: scale(1.1);
}
`
const Image = styled.img`
height: 80px;
width: 80px;
@media (max-width: 650px)
{
 height: 60px;
 width: 60px;
}
@media (max-width: 500px)
{
  height: 40px;
 width: 40px;
 margin-left: 20%;
}

`
const Logo = () => {
  return (
    <LogoText>
        <Link to = "/">
        <Image height={80} width={80} src={LogoImage} alt="LogoImage" />
        </Link>
        </LogoText>
  )
}

export default Logo