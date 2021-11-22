import React from "react"
import Logo from '../asserts/Logo-footer.png'
import { NavLink, Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TweetEmbed from 'react-tweet-embed'
import "./mainfooter.css"
import { IconButton } from "@mui/material";
import { Button } from '@mui/material'

function Mainfooteter() {
  return (
    <div>
      <footer className="footer">
        <div className="l-footer" style={{ marginLeft: '6%' }}>
          <h1>
            <img src={ Logo } alt="" style={{ width: '150px' }} />
          </h1>
          <p>
            We believe in building upon the Skills and 
            hence our tagline is Let’s communicate with your skills.
            We are a growing company in Education and Marketing Field. 
            We provide several courses on our website for those who want to learn.
          </p>
          <div>
            <IconButton className="sociallinks">
              <Button size="large" href="https://www.instagram.com/orangecaps__/" target="_blank"><InstagramIcon className="socialReach" fontSize="large" /></Button>
            </IconButton> 
            <IconButton className="sociallinks">
              <Button size="large" href="https://www.linkedin.com/company/80660153/admin/" target="_blank"><LinkedInIcon className="socialReach" fontSize="large" /></Button>
            </IconButton>
            <IconButton className="sociallinks">
              <Button size="large" href="https://twitter.com/OrangeCaps__" target="_blank"><TwitterIcon className="socialReach" fontSize="large" /></Button>
            </IconButton>
          </div>
        </div>
        <ul className="r-footer" style={{ marginLeft: '5%' }}>
          <li>
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="box">
                <br/>
              <li>
                {/* <a href="/contact">Contact</a> */}
                <NavLink className="short_links" to="/contact"> Contact </NavLink>
              </li>
              <br/>
              <li>
                {/* <a href="#">About</a> */}
                <NavLink className="short_links" to="/team"> About </NavLink>
              </li>
              <br/>
              <li>
                <NavLink className="short_links" to="/blogs"> Blogs </NavLink>
              </li>
              <br/>
            </ul>
          </li>
          <li className="features">
            <h2 className="footer-heading">Write Us Personally</h2>
            <ul className="box h-box">
              <br/>
              <li>
                <div className="short_type">Founder: Bhavya Shah</div>
              </li>
              <br/>
              <li>
                <div className="short_type">Co-Founder: Deep Shah</div>
              </li>
              <br/>
            </ul>
          </li>
          <li>
            <TweetEmbed id="1461668048037838859" />
          </li>
        </ul>
        <div className="b-footer">
          <p>All rights reserved by OrangeCaps 2021 </p>
        </div>
      </footer>
    </div>
  );
}

export default Mainfooteter;
