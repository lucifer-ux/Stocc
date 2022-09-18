import React from 'react'
import { useState} from "react";
import smaple from '../../assets/background.mp4'
// import MuteButton from './MuteButton';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'


library.add(faVolumeMute, faVolumeUp)
const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {var vid = document.getElementsByClassName('videoTag')[0];
  console.log(vid, "mute toggled")
  vid.muted = !vid.muted
  setIsMuted(vid.muted)}
  return (
    <>
    <video className='videoTag' playsInline autoPlay loop muted
    style={{
      position: "absolute",
      width: "100vw",
      left: "50%",
      top: "45%",
      height: "100vh",
      objectFit: "cover",
      transform: "translate(-50%,-50%)",
      zIndex: "-3",
      opacity: "1",
    }}
    >
    <source src={smaple} type='video/mp4' />
    </video>
    </>
  )
}

export default VideoPlayer