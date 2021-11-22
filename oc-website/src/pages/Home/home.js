import React from 'react'
import Img from "../../asserts/Logo.jpg"
import "./home.css"
import PNG from "../../asserts/OC-img.png"
import {NavLink} from "react-router-dom"
import CallMadeIcon from '@mui/icons-material/CallMade';
// import BgVideo from "../..asserts/bgVideo.mp4"
// import Navbar from '../../components/navbar'
// import Footer from '../../components/footer'

function home() {
  return (
    <div>
      <div className="Title">

        <img id="logoimage" src={ Img } alt="" />
        <p className="logo-name">ORANGE CAPS</p>

        <div className="container">

          <div className="sidedisplay">
            <p className="tagLine">- Let's Communicate with your skills</p>
            <br/><br/>
            {/* <p className="shortBrief">
              Platform where you can learn as a student and can earn as speaker.
              Be ready with employable skills with reasonable rates.
              Boost your confidence and seperate yourself from crowd of thousands.
            </p> */}
            <div className="description">
              The color orange depicts CREATIVITY C-CAPABILITY ,
              A-ABILITY , P-PASSIVE INCOME , S-SKILLS. We are a growing company
              in Education and Marketing Field. We provide several courses on our website. Once they complete the course we’ll give them live
              projects through which we’ll get to know how much they’ve learned. After the
              completion of the course, we’ll provide them certificates of completion of the
              course.We also have several services like car washing,
              photography and many more people can book for at an affordable rates. Not only this, 
              several events like cooking competitions, Squid games, DJ party, etc. are in queue. In
              future, we’re planning to collaborate with more companies through which our
              customers can avail maximum benefits.
            </div>
          </div>

          <div className="OC-Img">
            <img className="OC" src={ PNG } alt="" />  
          </div>
        </div>
        
        {/* <div className="section"> */}
          {/* <p className="logo-name">ORANGE CAPS</p> */}
          
          {/* <div className="description">
            Orange C-Capability, A-Ability, P-Passive Income, S-Skills. 
            We will provide 100+ live courses on our website for those who want to learn with one-one interaction. 
            Once they complete the course we’ll give them live projects through which we’ll get to know how much they’ve learned. 
            After the completion of the course, we’ll provide them certificates. 
            In the future, we’re planning to collaborate with more companies through which our customers can avail of maximum benefits.
          </div> */}
        {/* </div> */}
        {/* <video autoplay muted loop id="myVideo">
          <source src="/Videos/bgVideo.mp4" type="video/mp4"/>
        </video> */}
        
        <div className="section">
          <div className="interaction">
            <div className="bg">

              <section className="panel">
                <h2 className="course_service">Our Courses</h2>
                <div className="card__text">
                  <p className='card_text_description'>Visit once and have habbit of learning. All courses are updated versions of current trends in industry</p>
                </div>
                {/* <a href="#" className='button'>Visit</a> */}
                <NavLink className="button" to="/courses"> Visit </NavLink>
              </section>

            </div>

            <div className="bg">

              <section className="panel">
                <h2 className="course_service">Our Services</h2>
                <div className="card__text">
                  <p className='card_text_description'>Give us chance to serve you and book our service with your suitable time</p>
                </div>
                {/* <a href="#" className='button'>Visit</a> */}
                <NavLink className="button" to="/services"> Services </NavLink>
              </section>

            </div>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default home
