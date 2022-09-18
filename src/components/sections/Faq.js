import React from 'react'
import "../../styles/Faq.css"
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from "aos"
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
const Faq = () => {
  useEffect(()=>{
    Aos.init({duration:800});
    },[])
    
  return (
    <> 
    <div id = "Faq" className='container' data-aos ="zoom-in">
    <Title style={{color : "black"}}>FAQ</Title>

<details itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
  <summary itemProp="name">What is a Stoc?</summary>
    <div className="details-expanded" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
    <p>An app that allows you to invest in various categorised stocks. 
    </p>
  </div>
</details>

<details itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
  <summary itemProp="name">Why use Stoc?</summary>
  <div className="details-expanded" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
    <p>To earn and learn about investment and finances.</p>
  </div>
</details>
<details itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
  <summary itemProp="name">Whay choose Stoc ?</summary>
    <div className="details-expanded" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
    <p>Getting an independence of investing with reassurment of your parents having power to undo the stack.</p>
  </div>
</details>
<details itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
  <summary itemProp="name">How stoc works?</summary>
    <div className="details-expanded" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
    <h4>stoc can apply your knowledge of fincance and help you get ahead of people.</h4>
  </div>
</details>
</div>
    </>
  )
}

export default Faq