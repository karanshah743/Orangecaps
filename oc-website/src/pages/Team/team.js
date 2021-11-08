import React from "react";
import "./team.css";

function team() {
  return (
    <div>
      {/* <div className="heading">
        <div className="row">
          <div className="col left">
            <h2 className="">About Us</h2>
            <h1 className="title">Orange caps</h1>
            <p>
              A little bit about our company, Orange C-Capability, A-Ability,
              P-Passive Income, S-Skills. We believe in building upon the Skills
              and hence our tagline is Let’s communicate with your Skills. We
              are a startup company that wants youngsters of our nation to grow.
              We will provide 100+ courses on our website for those who want to
              learn. Once they complete the course we’ll give them live projects
              through which we’ll get to know how much they’ve learned. After
              the completion of the course, we’ll provide them certificates of
              completion of the course. We’ve collaborated with several
              companies who’ll help them to grow by providing them internships.
              Also, we’ve launched premium cards for those who want to be
              connected with us. With the help of premium cards, they’ll get
              discounts on courses as well as free subscriptions on our discord
              server where different minds from different cities will meet.
              We’ll also be hosting free live webinars for those who are
              confused about the course. Not only this we’re also planning to
              host several events like cooking competitions, web designing,
              story writing competitions, and much more. Our website also
              contains a blog feature where we update trending news, feature
              stories, and fiction stories. In future, we’re planning to
              collaborate with more companies through which our customers can
              avail maximum benefits.
            </p>
          </div>
          <div className="col right">
            <img src="" />
          </div>
        </div>
      </div> */}
      <div>
        <h1 className="team_title">Our Team</h1>
        <ul className="cards">
          <li>
            <a href="" className="card">
              <img
                src="https://i.imgur.com/oYiTqum.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Jessica Parker</h3>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img
                src="https://i.imgur.com/2DhmtJ4.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img
                src="https://i.imgur.com/oYiTqum.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Jessica Parker</h3>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img
                src="https://i.imgur.com/2DhmtJ4.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">kim Cattrall</h3>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default team;
