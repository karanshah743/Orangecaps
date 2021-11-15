import React from 'react'
import "./contact.css"
import profilepic from "../../asserts/Logo-footer.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from "@mui/material";

// import Navbar from '../../components/navbar'
// import Footer from '../../components/footer'

function contact() {
  return (
    <div>
      <div className="OC">
        <div className="OCwrapper">
        <div className="OCleft">
        <img src={profilepic} alt="" srcset="" />
        <h4>Orange CAPS</h4>
        <p>Let's Communicate with your skills</p>
          </div>
          <div className="OCright">

            <div className="OCinfo">
              <h3>Information</h3>
              <div className="OCinfo_data">
                <div className="OCdata">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci quis tempora dolorum odit laudantium placeat iure omnis! Beatae eveniet eius ullam autem rerum aspernatur, repudiandae repellendus eligendi quidem natus.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="OCprojects">
              <h3>Reach us</h3>
              <div className="OCproject_data">
                <div className="OCdata">
                  <p>Contact info:- <span>8140595621</span></p>
                  <div className="icons">
                  <IconButton className="sociallinkss">
                    <Button size="large" href="https://www.instagram.com/orangecaps__/" target="_blank"><InstagramIcon className="socialIcon" fontSize="large" /></Button>
                  </IconButton>
                  <IconButton className="sociallinkss">
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                  <IconButton className="sociallinkss">
                    <TwitterIcon fontSize="large" />
                  </IconButton>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
// accounts

// tutions
// 