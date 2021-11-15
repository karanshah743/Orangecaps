import React from 'react';
import "./event.css";
// import discord from "../src/image/discord.png";
// import piggy from "../src/image/piggy.jpg";
// import Navbar from '../../components/navbar'
// import Footer from '../../components/footer'

function event() {
  return (
    <div>
      <h1 className="main-title">Scroll to browse you content.</h1>
      <div className="con1">
        <div className="img1">{/* <img src={discord} /> */}</div>
        <div className="text1">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a href="#">Link</a>
        </div>
      </div>

      <div className="con2">
        <div className="text2">
          <h1>Free Wbinars</h1>
          <p>Click here to access multiple free webinar</p>
          <div className="img"></div>
        </div>
      </div>

      <div className="con3">
        <h1>Recent Events</h1>
        <div className="title"></div>

        <div className="img3">
          <img className="img31" /*src={discord}*/ />
          <img className="img31" /*src={discord}*/ />
          <img className="img31" /*src={discord}*/ />
        </div>
      </div>

      
    </div>
  )
}

export default event
