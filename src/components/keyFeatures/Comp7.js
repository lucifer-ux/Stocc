import React from 'react'
import DDWImg7 from "../../DDW_Items/DDW7.png"
import styled from 'styled-components'
import 'aos/dist/aos.css';
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
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center`

const KeyFeatures = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <Section data-aos="zoom-in">
            <Container>
                <Box>
                    <h1>Private Space</h1>
                </Box>
                <Box>
                    <img height={500} src={DDWImg7} />
                </Box>
            </Container>
        </Section>
    )
}

export default KeyFeatures