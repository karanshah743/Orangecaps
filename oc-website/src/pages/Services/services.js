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
import { Button } from '@mui/material'

function services() {
  return (
    <div>
      <div className="my_container">

        <div className='services'>Our services at your door step</div>
        <div className="service_container">
          <Button className="button-redirect" href="https://docs.google.com/forms/d/19y61eyWFImyMnM-H1nTk4sG9AbdAH4hZTzkedrIq0AQ/edit" target="_blank">                
            <div className="car_washing">
              <img src={Car_wash} alt="" />
              <p>Car washing</p>
            </div>
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1MpVF7eWhKF39TbyoDEwzzPWKd--WiR1ZfkIl9oKPNzs/edit" target="_blank">              
            <div className="app_development">
              <img src={App_dev} alt="" />
              <p>App development</p>
            </div>
            {/*  */}
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1egPB2IPskBWm8hOEL__UGo6lPFMYes3hnhi7wo-H-28/edit" target="_blank">              
            <div className="IT_consultancy">
              <img src={IT_consultancy} alt="" />
              <p>IT consultancy</p>
            </div>
            {/*  */}
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1ct3t9hweAhGTyLrC6aIwvSzKKLCNm0z_7D_OwMuPUHM/edit" target="_blank">              
            <div className="photography">
              <img src={Photography} alt="" />
              <p>Photography</p>
            </div>
            {/*  */}
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1LvZEPojeu7SCnvphcPzd-DykGT1U04KSMGNsIUh-xEo/edit" target="_blank">              
            <div className="web_development">
              <img src={Web_dev} alt="" />
              <p>Web development</p>
            </div>
            {/*  */}
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1uscZLv3KRxTZ7zA9tWfb6o-DFMzErxoe1dARZxQYq9A/edit" target="_blank">              
            <div className="graphic_designing">
              <img src={Graphic_design} alt="" />
              <p>Graphic designing</p>
            </div>
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1r968jsAWPwpOAMviznZRbU_bK9NkjnhHoNr6whome3c/edit" target="_blank">              
            <div className="digital_marketing">
              <img src={Digital_market} alt="" />
              <p>Digital marketing</p>
            </div>
            {/*  */}
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1vHM7JtMX91iVIdU7xAPa_H6FJ16xy7DPG1McUAAeSeQ/viewform?edit_requested=true" target="_blank">              
            <div className="Banner_making">
              <img src={Banner} alt="" />
              <p>Make your Banner</p>
              {/*  */}
            </div>
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1foJJSxNiu_w6oFwwE-iwCnZ8K8OrgNImCtchwcIPneA/edit" target="_blank">              
            <div className="Carpet">
            <img src={Carpet} alt="" />
              <p>Carpet Cleaning</p>
            </div>
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1iMw6A8p7VdsGJYdXP14Uy733z-P0zZC5JhhbzTrr9RM/edit" target="_blank">              
            <div className="Mattress">
            <img src={Mattress} alt="" />
              <p>Mattress cleaning</p>
            </div>
            {/*  */}
          </Button>
          <Button className="button-redirect" href="https://docs.google.com/forms/d/1PdQkCzH26TWn8BrN-BAR2KETPGKLbWxxD5vp42Wgxz8/edit" target="_blank">              
            <div className="Sofa">
            <img src={Sofa} alt="" />
              <p>Sofa cleaning</p>
            </div>
            {/*  */}
          </Button>

        </div>
      </div>
    </div>
  )
}

export default services
