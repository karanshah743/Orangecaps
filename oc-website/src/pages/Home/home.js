import React from 'react'
import Img from "../../asserts/Logo.jpg"
import "./home.css"
import PNG from "../../asserts/OC-img.png"
import CallMadeIcon from '@mui/icons-material/CallMade';
// import BgVideo from "../..asserts/bgVideo.mp4"
// import Navbar from '../../components/navbar'
// import Footer from '../../components/footer'

function home() {
  return (
    <div>
      <div className="Title">

        <img src={ Img } alt="" />
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugit aperiam est veritatis ad dolores recusandae tenetur? Numquam pariatur animi similique, at nostrum ut magni! Sapiente nesciunt minima qui officiis rem sequi corporis doloribus. Iusto earum placeat nulla debitis voluptatum, neque molestias obcaecati libero similique animi voluptas fuga soluta! Quasi!
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
                <h2>Our Courses</h2>
                <div className="card__text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur vel accusamus. Cumque, iste asperiores. Perferendis odio magnam nisi, eos provident nobis maxime nostrum nam, ipsum blanditiis quasi saepe aliquid!</p>
                </div>
                <a href="#" className='button'>Visit</a>
              </section>

            </div>

            <div className="bg">

              <section className="panel">
                <h2>Our Services</h2>
                <div className="card__text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur vel accusamus. Cumque, iste asperiores. Perferendis odio magnam nisi, eos provident nobis maxime nostrum nam, ipsum blanditiis quasi saepe aliquid!</p>
                </div>
                <a href="#" className='button'>Visit</a>
              </section>

            </div>
          </div>
          <div className="button">Register</div>
        </div>
          
      </div>
    </div>
  )
}

export default home
