import React from "react";
import "./Section1.css"
import { Link } from "react-router-dom";
const Section1 = () => {
  return (
    <div className="section1">
      <div className="container">
        <div className="row">
          <div className="col-6 words">
            <h4>Italian Restaurant</h4>
            <h2>WELCOME</h2>
            <p>
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
              ac facilisis ligula sem id neque.
            </p>
            <Link>
              OUR STORY <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="col-6 image">
          <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
