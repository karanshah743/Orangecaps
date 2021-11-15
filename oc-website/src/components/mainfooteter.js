import React from "react"
import Logo from '../asserts/Logo-footer.png'
import { NavLink, Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import TweetEmbed from 'react-tweet-embed'
import "./mainfooter.css"
import { IconButton } from "@mui/material";

function Mainfooteter() {
  return (
    <div>
      <footer className="footer">
        <div className="l-footer" style={{ marginLeft: '6%' }}>
          <h1>
            <img src={ Logo } alt="" style={{ width: '150px' }} />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
            tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
            recusandae.
          </p>
          <div>
            <IconButton className="sociallinks">
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton className="sociallinks">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton className="sociallinks">
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton className="sociallinks">
              <GitHubIcon fontSize="large" />
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
            <TweetEmbed id="1457709427902107654" />
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
