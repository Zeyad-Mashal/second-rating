import React from "react";
import "./Hero.css";
import hero1 from "../../images/banner1.jpg";
import hero2 from "../../images/banner2.jpg";
import hero3 from "../../images/banner3.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <img src={hero1} class="d-block w-100" alt="second rating banner" />
          </div>
          {/* <div class="carousel-item" data-bs-interval="2000">
            <img src={hero2} class="d-block w-100" alt="second rating banner" />
          </div>
          <div class="carousel-item">
            <img src={hero3} class="d-block w-100" alt="second rating banner" />
          </div> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
