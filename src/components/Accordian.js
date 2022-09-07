import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
cursor: pointer;
padding: 1 rem 0.5rem;
display: flex;
flex-direction: column;
border-bottom: 1px solid ${props => props.theme.carouselColor};
margin: 3rem;
`
const Name = styled.div`
display: flex;
align-items: center;
`
const Indicator = styled.span`
font-size: ${props => props.theme.fontxxl};
display:flex;
justify-content: center;
align-items: center;
svg{
    width: 1rem;
    height: auto;
    fill: ${props => props.theme.carouselColor};
}

`
const Title =  styled.div`
font-size: ${props => props.theme.fontsm};
display: flex;
justify-content: space-between;
align-items: center;
`

const Reveal = styled.div`
display: ${props => props.clicked ? 'block': 'none'};
margin-top: 1rem;
color: ${props =>`rgba(${props.theme.bodyRgba},0.6)` };
font-size: ${props => props.theme.fontsm};
font-weight: 300;
line-height: 1.1rem;
`
const Accordian = ({title, children}) => {
    const [collapsed, setcollapsed] = useState(false)
  return (
    <Container>
        <Title onClick = {() => setcollapsed(!collapsed)}>
            <Name>
              <span>{title}</span>  
            </Name>
            {
                collapsed ? <Indicator>
                    -
                </Indicator> : <Indicator>
                    +
                </Indicator>
            }
        </Title>
        <Reveal clicked = {collapsed}>
            {children}
        </Reveal>
    </Container>
    )
}

export default Accordian