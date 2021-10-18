import React from 'react'
import Img from "../../asserts/Logo.jpg"
import "./home.css"
// import Navbar from '../../components/navbar'
// import Footer from '../../components/footer'

function home() {
  return (
    <div>
      <div>
        <img src={ Img } alt="" />
        <p className="logo-name">ORANGE CAPS</p>
      </div>
    </div>
  )
}

export default home
