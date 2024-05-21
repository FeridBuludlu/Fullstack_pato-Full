import React from "react";
import "./Section3.css";
const Section3 = () => {
  return (
    <div className="carousel_main">
      <div className="Text_review">
        <h4>Customers Say</h4>
        <h2>REVIEW</h2>
      </div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item carousel_m1 active">
            <img
              src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg.webp"
              alt=""
            />
            <p>
              “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
            </p>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>Marie Simmons ˗ New York</p>
          </div>
          <div class="carousel-item carousel_m1">
            <img
              src=""
              alt=""
            />
            <p>
              “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
            </p>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>Marie Simmons ˗ New York</p>
          </div>
          <div class="carousel-item carousel_m1">
            <img
              src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg.webp"
              alt=""
            />
            <p>
              “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
            </p>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>Marie Simmons ˗ New York</p>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
