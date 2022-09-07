import React from 'react'
// import timelineElements from "./data";
import "./RoadMap.css"
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";

// import "react-vertical-timeline-component/style.min.css";

function RoadMap() {
//   let workIconStyles = { background: "#06D6A0" };
//   let schoolIconStyles = { background: "#f9c74f" };
  return (
<section id="timeline">
  
  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">2011</p>
    </div>

    <div className="tl-content">
      <h1>Lorem ipsum dolor sit</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg"></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">2013</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
      <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">2014</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
      <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
    </div>

  </div>

  <div className="tl-item">
    
    <div className="tl-bg" ></div>
    
    <div className="tl-year">
      <p className="f2 heading--sanSerif">2016</p>
    </div>

    <div className="tl-content">
      <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
      <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</p>
    </div>

  </div>
</section>





    // <div className='parent'>
    //   <h1 className="title">RoadMap</h1>   
    //   <VerticalTimeline
    //   animate={true}
    //   >
    //     {timelineElements.map((element) => {
    //       let isWorkIcon = element.icon === "work";
    //       let showButton =
    //         element.buttonText !== undefined &&
    //         element.buttonText !== null &&
    //         element.buttonText !== "";

    //       return (
    //         <VerticalTimelineElement
    //           key={element.key}
    //           date={element.date}
    //           dateClassName="date"
    //           iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
    //         //   icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
    //         >
    //           <h3 className="vertical-timeline-element-title">
    //             {element.title}
    //           </h3>
    //           <h5 className="vertical-timeline-element-subtitle">
    //             {element.location}
    //           </h5>
    //           <p id="description">{element.description}</p>
    //           {showButton && (
    //             <a
    //               className={`button ${
    //                 isWorkIcon ? "workButton" : "schoolButton"
    //               }`}
    //               href="/"
    //             >
    //               {element.buttonText}
    //             </a>
    //           )}
    //         </VerticalTimelineElement>
    //       );
    //     })}
    //   </VerticalTimeline>
    // </div>
  );
}
export default RoadMap