import React from 'react';
import "./event.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material'
import {BsDiscord} from 'react-icons/fa';
import { Chip } from '@mui/material'
import MalharEvent from '../../asserts/MalharSirEvent.jpg'
// import piggy from "../src/image/piggy.jpg";
// import Navbar from '../../components/navbar'
// import Footer from '../../components/footer'

function event() {
  return (
    <div id="main">
      <div id="temp">
        <h1 id="comingsoon">COMING SOON</h1>
        <hr/>
        <h4>Stay tuned on <a href="https://discord.gg/6WEq9AMQUr" target="_blank">Discord</a></h4>
      </div>

      {/*<h1 className="main-title">Scroll to browse you content.</h1>
      <div className="con1">
        <div className="img1"> 
          <img style={{ width: '300px', borderRadius: 10 }} src={MalharEvent} alt="eventPoster" />
        </div>
        <div className="text1" style={{ marginTop: '15%' }}>
          <p>
            Be a part of our very first event.<br/><br/>
            Gather and learn with the industry expert <b>Mr Malhar Shah</b>. 
            Get to know about <b>Canva</b> and <b>Social Media Marketing</b> at the comfort of your home.
            <br/><br/>
            Date: <b>27th November</b>
          </p>
          <br/>
          <Chip id="chip" label="Discord Server" component="a" href="https://discord.gg/6WEq9AMQUr" target="_blank" clickable />
          {/*<a href="#">Link</a>
        </div>
      </div>*/}

      {/* <div className="con2">
        <div className="text2">
          <h1>Free Wbinars</h1>
          <p>Click here to access multiple free webinar</p>
          <div className="img"></div>
        </div>
      </div> */}

      {/* <div className="con3">
        <h1>Recent Events</h1>
        <div className="title"></div>

        <div className="img3">
          <img className="img31" src={discord} />
          <img className="img31" src={discord} />
          <img className="img31" src={discord} />
        </div>
      </div> */}

      
    </div>
  )
}

export default event
