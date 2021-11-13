import React from 'react'
import "./services.css"
import App_dev from "../../asserts/app_dev.jpeg"
import Car_wash from "../../asserts/car_wash.jpeg"
import Digital_market from "../../asserts/digital_market.jpeg"
import Graphic_design from "../../asserts/graphic_design.jpeg"
import IT_consultancy from "../../asserts/IT_consultancy.jpeg"
import Photography from "../../asserts/photography.jpeg"
import Web_dev from "../../asserts/web_dev.jpeg"
import Banner from "../../asserts/banner.jpeg"
import Carpet from "../../asserts/carpet.jpeg"
import Mattress from "../../asserts/Mattress.jpeg"
import Sofa from "../../asserts/sofa.jpeg"

function services() {
  return (
    <div>
      <div className="my_container">

        <div className='services'>Our services at your door step</div>
        <div className="service_container">

          <div className="car_washing">
            <img src={Car_wash} alt="" />
            <p>Car washing</p>
          </div>
          <div className="app_development">
            <img src={App_dev} alt="" />
            <p>App development</p>
          </div>
          <div className="IT_consultancy">
            <img src={IT_consultancy} alt="" />
            <p>IT consultancy</p>
          </div>
          <div className="photography">
            <img src={Photography} alt="" />
            <p>Photography</p>
          </div>
          <div className="web_development">
            <img src={Web_dev} alt="" />
            <p>Web development</p>
          </div>
          <div className="graphic_designing">
            <img src={Graphic_design} alt="" />
            <p>Graphic designing</p>
          </div>
          <div className="digital_marketing">
            <img src={Digital_market} alt="" />
            <p>Digital marketing</p>
          </div>
          <div className="Banner_making">
            <img src={Banner} alt="" />
            <p>Make your Banner</p>
          </div>
          <div className="Carpet">
          <img src={Carpet} alt="" />
            <p>Carpet Cleaning</p>
          </div>
          <div className="Mattress">
          <img src={Mattress} alt="" />
            <p>Mattress cleaning</p>
          </div>
          <div className="Sofa">
          <img src={Sofa} alt="" />
            <p>Sofa cleaning</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default services
