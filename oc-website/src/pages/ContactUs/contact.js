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
                    We believe in building upon the Skills and 
                    hence our tagline is Let’s communicate with your skills.
                    We are a growing company in Education and Marketing Field. 
                    We provide several courses on our website for those who want to learn. 
                    Reach us anytime through below mentioned links and contacts.
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
                    <Button size="large" href="https://www.linkedin.com/company/80660153/admin/" target="_blank"><LinkedInIcon className="socialIcon" fontSize="large" /></Button>
                  </IconButton>
                  <IconButton className="sociallinkss">
                    <Button size="large" href="https://twitter.com/OrangeCaps__" target="_blank"><TwitterIcon className="socialIcon" fontSize="large" /></Button>
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