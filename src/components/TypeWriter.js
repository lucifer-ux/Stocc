import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width:100%;
color: ${props => props.theme.text};
align-self: flex-start;
span {
    text-transform: uppercase;
}
.text-1{
    color: blue;
}
.text-1{
    color: orange;
}
.text-1{
    color: red;
}
`

const ButtonContainer = styled.div`
width: 100%;
align-self: flex-start;
`

const TypeWriter = () => {
  return (
    <>
<Title>
Lorem ipsum dolor sit amet
<Typewriter
    options={{autoStart:true,
    loop:true,}}
  onInit={(typewriter) => {
    typewriter.typeString('sed do ')
    .pauseFor(2000)
    .deleteAll()
    .typeString('et dolore')
    .pauseFor(2000)
    .deleteAll()
    .typeString('eiusmod tempor')
    .pauseFor(2000)
    .deleteAll()
    .start()
  }}
/>
</Title> 

</>
 )
}

export default TypeWriter