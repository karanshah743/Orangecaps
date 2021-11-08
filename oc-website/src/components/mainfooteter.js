import React from "react";
import "./mainfooter.css";

function Mainfooteter() {
  return (
    <div>
      <footer class="footer">
        <div class="l-footer">
          <h1>
            <img src="https://i.postimg.cc/y62wcLBq/logo.png" alt="" />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
            tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
            recusandae.
          </p>
        </div>
        <ul class="r-footer">
          <li>
            <h2>Quick Links</h2>
            <ul class="box">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </li>
          <li class="features">
            <h2>Write Us Personally</h2>
            <ul class="box h-box">
              <li>
                <a href="#">CEO: Bhavya</a>
              </li>
              <li>
                <a href="#">CEO: Bhavya</a>
              </li>
              <li>
                <a href="#">CEO: Bhavya</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Any queries</h2>
            <ul class="box">
              <li>
                <input type="email" placeholder="Write your message" />
              </li>
              <li className="submit">
                <button>Submit</button>
              </li>
            </ul>
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
