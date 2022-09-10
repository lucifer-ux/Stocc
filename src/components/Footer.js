import React from 'react'
import styled from 'styled-components'
// import Banner from './Banner'
import "../styles/Footer.css"
import {FaTwitter, FaGithub, FaLinkedin, FaInstagram}  from "react-icons/fa"
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from "aos"

const Section = styled.section`
min-height:25vh;
width: 100%;
background-color: ${props => props.theme.body};
position: relative;
display: flex;
color: ${props => props.theme.text};
flex-direction: column;
margin-right: 1%;
`
const Foot = styled.footer`
  background-color:#26272b;
  font-size:15px;
  line-height:24px;
  color:#FFFFFF;
  margin-left: 1%;
  margin-right: 1%;
`
const QuickLinks = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2%;
`
const Container = styled.div`
line-height: 2.2;
display: flex;
flex-direction: column;
`
const UnderLine = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-bottom: 1%;
`
const Head = styled.h2`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 1%;
`
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
    },[])    

  return (
    <Section>
    <Foot data-aos ="zoom-in">
      <Container className="container">
            <Head>Quick Links</Head>
            <UnderLine className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </UnderLine>
        <hr/>
      </Container>
      <Container className="container">
        <div className="row">
          <QuickLinks className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
                <li><a className="facebook" href="https://www.instagram.com/dreamdateworld/"><i className="fa fa-facebook"><FaInstagram/></i></a></li>
                <li><a className="twitter" href="https://twitter.com/dreamdateworld"><i className="fa fa-twitter"><FaTwitter/> </i></a></li>
              {/* <li><a className="dribbble" href="#"><i className="fa fa-dribbble"><FaGithub/></i></a></li> */}
                <li><a className="linkedin" href="https://www.linkedin.com/company/dreamdateworld/"><i className="fa fa-linkedin"><FaLinkedin/></i></a></li>   
            </ul>
          </QuickLinks>
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; All Rights Reserved by 
         <a href="#">Dream Date World</a>.
            </p>
          </div>
        </div>
      </Container>
</Foot>
</Section>
  )
}

export default Footer