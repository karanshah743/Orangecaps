import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import "./navigation.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from '../pages/Home/home';
import Team from "../pages/Team/team";
import Feedback from "../pages/Feedback/feedback";
import Events from "../pages/Events/event";
import Contact from "../pages/ContactUs/contact";
import Blogs from "../pages/Blogs/blog";
import Features from "../pages/Features/features";
function Navigation() {

  return (
    <div>
      <div className="navigation">
        <div className="navMenu">
          <NavLink className="link" activeClassName="is-active" to="/" exact> Home </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/features"> Features </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/events"> Events </NavLink>        
          <NavLink className="link" activeClassName="is-active" to="/team"> Team </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/contact"> Contact </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/blogs"> Blogs </NavLink>
          <NavLink className="link" activeClassName="is-active" to="/feedback"> Feedback </NavLink>
        </div>
      </div>

      {/* <div>
        <img src={ Img } alt="" />
        <p className="logo-name">ORANGE CAPS</p>
      </div> */}
    </div>
  )
}

export default Navigation
