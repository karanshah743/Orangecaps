import React from 'react';
import "./courses.css"
import Canva from "../../asserts/Canva.jpeg";
import Crypto from "../../asserts/Crypto.jpeg";
import Graphic from "../../asserts/Graphic.jpeg";
import Acting from "../../asserts/actingg.jpeg";
import Yoga from "../../asserts/yoga.jpeg";
import Calligraphy from "../../asserts/calligraphy.jpeg"
import Canvas from "../../asserts/canvas.jpeg"
import Cooking from "../../asserts/cooking.jpg"
import resinArt from "../../asserts/resinart.jpeg"
import { Button } from '@mui/material'

function courses() {
  return (
    <div>
      <div className="container">
        <div className="course_container">


          
        <div className='online_mode'>Offline Courses</div>
          <div className="offline">
          {/* <Button href="https://www.instagram.com/orangecaps__/" target="_blank"></Button> */}
            <Button className="button-redirect" href="https://docs.google.com/forms/d/1dWDAQQ1PtP8w5vww2B2XdH9Gog55nBhwZ1p4canJEoY/edit" target="_blank">
              <div className="resin_art">
              <img src={resinArt} alt="" />
              <p className='course_name'>Resin Art</p>
              <p>₹ 2500/-</p>
            </div>
            </Button>
            <Button className="button-redirect" href="https://docs.google.com/forms/d/1ZcA7-jn_9eR4ahJo29kSO9WlD5vqSdCwBZ357llOr1Q/edit" target="_blank">              
              <div className="canvas_paint">
                <img src={Canvas} alt="" />
                <p className='course_name'>Canvas Painting </p>
                <p>₹ 3000/-</p>
              </div>
            </Button>
            <Button className="button-redirect" href="https://docs.google.com/forms/d/1p8Q4E-l372SAO28IW_ps6npTviz3zdwwFAeVTZUy-xA/edit" target="_blank">              
              <div className="calligraphy">
                <img src={Calligraphy} alt="" />
                <p className='course_name'>calligraphy </p>
                <p>₹ 1500/-</p>
              </div>
            </Button>
            <Button className="button-redirect" href="https://docs.google.com/forms/d/1kffX83g9NnWHSqPi7V86g6c-RGtEvPGlVmRpNZl19MA/edit" target="_blank">
              <div className="cooking">
                <img src={Cooking} alt="" />
                <p className='course_name'>Cooking <br/> (45 dishes)</p>
                <p>₹ 1500/-</p>
              </div>
            </Button>
            <Button className="button-redirect" href="https://docs.google.com/forms/d/1foJJSxNiu_w6oFwwE-iwCnZ8K8OrgNImCtchwcIPneA/edit" target="_blank">              
              <div className="acting">
                <img src={Acting} alt="" />
                <p className='course_name'>Acting</p>
                <p>₹ 550/-</p>
              </div>
            </Button>
          </div>
{/* ----------------------------------------------------------------------------------- */}
          <hr style={{ width: "80%"}}/>
{/* ----------------------------------------------------------------------------------- */}
          <div className='online_mode'>Online Courses</div>
          <div className="online">

            {/* <div className="crypto">
              <img src={Crypto} alt="" />
              <p className='course_name'>Crypto</p>
              <p>₹ /-</p>
            </div>
            <div className="yoga">
              <img src={Yoga} alt="" />
              <p className='course_name'>Yoga</p>
              <p>₹ /-</p>
            </div> */}
            <div className="canva_SMmarketing">
              <img src={Canva} alt="" />
              <p className='course_name'>Canva and <br/>Social Media <br/>Marketing</p>
              <p>Launching Soon</p>
            </div>
            <Button className="button-redirect" href="https://docs.google.com/forms/d/1uscZLv3KRxTZ7zA9tWfb6o-DFMzErxoe1dARZxQYq9A/edit" target="_blank">              
            <div className="graphic_design">
              <img src={Graphic} alt="" />
              <p className='course_name'>Graphic Designing</p>
              <p>₹700/-</p>
            </div>
            </Button>
            <Button className="button-redirect" href="https://docs.google.com/forms/d/1Hv-L2_CN5PAATkT6NtHMd_sW3XN44kOQCi3d4Qm8yIU/edit" target="_blank">              
            <div className="yoga">
              <img src={Yoga} alt="" />
              <p className='course_name'>Yoga</p>
              <p>₹500/-</p>
            </div>
            </Button>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default courses
