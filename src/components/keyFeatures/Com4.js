import React from 'react'
import DDWImg4 from "../../DDW_Items/DDW4.png"
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
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <Section data-aos="zoom-in">
            <Container>
                <Box>
                    <img height={500} src={DDWImg4} />
                </Box>
                <Box>
                    <h1>DDW Token</h1>
                </Box>
            </Container>
        </Section>
    )
}

export default KeyFeatures