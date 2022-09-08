import { ThemeProvider } from 'styled-components';
import GloabalStyles from "./styles/GlobalStyles.js"
import {light} from './styles/Themes'
import Navigation from './components/Navigation';
import Home from './components/sections/Home'
import About from './components/sections/About'
import RoadMap from './components/sections/Roadmap'
import { useEffect } from 'react';
// import Team from './components/sections/Team'
// import RoadMap from './components/Roadmap/RoadMap.js';
import Faq from './components/sections/Faq'
import Footer from './components/Footer'
import Card from './components/Card/Card.js';

import Team from './components/sections/Team.js';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';
import ScrollToTop from "react-scroll-to-top";
import KeyFeatures from "./components/keyFeatures/KeyFeatures"
function App() {
  return (
    <>
      <VideoPlayer/>
      <GloabalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <ScrollToTop/>
        <Home   />
        {/* <About/> */}
        {/* <RoadMap/> */}
        <RoadMap   />
        <Team/>
        <KeyFeatures/>
        {/* <Card/> */}
        <Faq   />
        <Footer   />
      </ThemeProvider>  
      
    </>
  );
}

export default App;
