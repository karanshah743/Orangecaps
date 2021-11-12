import React from 'react';
import "./courses.css"
import Canva from "../../asserts/Canva.jpeg";
import Crypto from "../../asserts/Crypto.jpeg";
import Graphic from "../../asserts/Graphic.jpeg";
import Acting from "../../asserts/actingg.jpeg";
import Yoga from "../../asserts/yoga.jpeg";
import Calligraphy from "../../asserts/calligraphy.jpeg"
import Canvas from "../../asserts/canvas.jpeg"
import resinArt from "../../asserts/resinart.jpeg"

function courses() {
  return (
    <div>
      <div className="container">
        <div className="course_container">

          <div className='online_mode'>Online Courses</div>
          <div className="online">

            <div className="crypto">
              <img src={Crypto} alt="" />
              <p className='course_name'>Crypto</p>
              <p>₹ /-</p>
            </div>
            <div className="graphic_design">
              <img src={Graphic} alt="" />
              <p className='course_name'>Graphic Designing</p>
              <p>₹ /-</p>
            </div>
            <div className="canva_SMmarketing">
              <img src={Canva} alt="" />
              <p className='course_name'>Canva and <br/>Social Media <br/>Marketing</p>
              <p>₹ /-</p>
            </div>
            <div className="yoga">
              <img src={Yoga} alt="" />
              <p className='course_name'>Yoga</p>
              <p>₹ /-</p>
            </div>
            <div className="acting">
              <img src={Acting} alt="" />
              <p className='course_name'>Acting</p>
              <p>₹ /-</p>
            </div>

          </div>

          <hr/>

          <div className='online_mode'>Offline Courses</div>
          <div className="offline">
            <div className="resin_art">
              <img src={resinArt} alt="" />
              <p className='course_name'>Resin Art <br/>(Min. 2 people)</p>
              <p>₹ /-</p>
            </div>
            <div className="canvas_paint">
              <img src={Canvas} alt="" />
              <p className='course_name'>Canvas Painting <br/>(Min. 2 people)</p>
              <p>₹ /-</p>
            </div>
            <div className="calligraphy">
              <img src={Calligraphy} alt="" />
              <p className='course_name'>calligraphy <br/>(Min. 2 people)</p>
              <p>₹ /-</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default courses
