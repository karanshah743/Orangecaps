import React from "react"
import Logo from '../asserts/Logo-footer.png'
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
      <footer class="footer">
        <div class="l-footer" style={{ marginLeft: '6%' }}>
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
            <IconButton class="sociallinks">
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton class="sociallinks">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton class="sociallinks">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton class="sociallinks">
              <TwitterIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        <ul class="r-footer" style={{ marginLeft: '5%' }}>
          <li>
            <h2 class="footer-heading">Quick Links</h2>
            <ul class="box">
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="/blogs">Blog</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </li>
          <li class="features">
            <h2 class="footer-heading">Write Us Personally</h2>
            <ul class="box h-box">
              <li>
                <a href="#">Founder: Bhavya Shah</a>
              </li>
              <li>
                <a href="#">Co-Founder: Deep</a>
              </li>
            </ul>
          </li>
          <li>
            <TweetEmbed id="1457709427902107654" />
          </li>
        </ul>
        <div class="b-footer">
          <p>All rights reserved by OrangeCaps 2021 </p>
        </div>
      </footer>
    </div>
  );
}

export default Mainfooteter;
