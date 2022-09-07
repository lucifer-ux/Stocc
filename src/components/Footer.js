import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import "../styles/Footer.css"
import {FaTwitter, FaGithub, FaLinkedin, FaInstagram}  from "react-icons/fa"
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from "aos"

const Section = styled.section`
min-height:100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
display: flex;
color: ${props => props.theme.text};
/* justify-content: center;
align-items: center; */
flex-direction: column;
margin-left: 1%;
margin-right: 1%;
`

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
    },[])    

  return (
    <footer className="site-footer" data-aos ="zoom-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"><FaTwitter/></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"><FaInstagram/></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"><FaLinkedin/></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"><FaGithub/></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  )
}

export default Footer