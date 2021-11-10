import React from 'react';
import "./courses.css"
import Canva from "../../asserts/Canva.jpeg";
import Crypto from "../../asserts/Crypto.jpeg";
import Graphic from "../../asserts/Graphic.jpeg";

function courses() {
  return (
    <div>
      <div className="container">
        <div className="course_container">

          <div className="online">

            <div className="crypto">
              <img src={Crypto} alt="" />
            </div>
            <div className="graphic_design">
              <img src={Graphic} alt="" />
            </div>
            <div className="canva_SMmarketing">
              <img src={Canva} alt="" />
            </div>

          </div>

          <hr />

          <div className="offline">
            <div className="resin_art">
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default courses
