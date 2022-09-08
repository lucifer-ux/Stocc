import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import LogoImage from "../../DDW_Items/DDWLogo.png"
const LogoText = styled.div`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;
margin-top: 40px;
&:hover{
    transform: scale(1.1);
}
`
const Logo = () => {
  return (
    <LogoText>
        <Link to = "/">
        <img height={80} width={80} src={LogoImage} alt="LogoImage" />
        </Link>
        </LogoText>
  )
}

export default Logo