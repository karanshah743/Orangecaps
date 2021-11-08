import React from 'react'
import "./feature.css"
import CourseImg from "../../asserts/courses.jpg"
import ServiceImg from "../../asserts/services.png"

function features() {
  return (
    <div>
      <div className="container">
        <div className="course_tab">
          <img src={CourseImg} alt="Courses" className="courseImg" />
          <div className="course">
            <h3 className="course_header">
              Courses
            </h3>
          </div>
        </div>
        <div className="service_tab">
          <img src={ServiceImg} alt="Service" className="serviceImg"/>
          <div className="service">
            <h3 className="service_header">
              Services
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default features
