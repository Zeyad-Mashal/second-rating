import React from "react";
import "./MedalsBox.css";
import imgBasic from "../../images/plan Basic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const MedalsBox = () => {
  return (
    <section className="socialMedia">
      <h2>SOCIAL MEDIA MANAGEMENT</h2>
      <div className="wrapper_conatiner">
        <div className="socialMedia_wrapper">
          <div className="card_header">
            <img src={imgBasic} alt="social media basic plan" />
            <h3>Basic</h3>
          </div>
          <div className="card_details">
            <ol>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Writing interactive and marketing ideas
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Follow hashtags and trends related to the nature of the
                  company’s work and include them in publications
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Prepare a business plan for 3 months
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Connect all social media{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Design of 16 posts
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create 6 simple videos to increase interaction for the
                  following platforms (Instagram, Twitter, Facebook, and
                  LinkedIn)
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create 6 simple montage videos (for Snapchat and Tik Tok)
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Writing a scenario and script for 10 videos that are filmed by
                  the client spontaneously{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Managing advertising campaigns for free
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create a monthly report
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  Create a QR code for social media accounts{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  Create a welcome response to me
                </p>
              </li>
            </ol>
          </div>
          <div className="card_price">
            <p>
              <sup>SAR</sup>2400<sub>/Month</sub>
            </p>
          </div>
          <button className="card_button">Order Now</button>
        </div>
        <div className="socialMedia_wrapper top">
          <div className="card_header">
            <img src={imgBasic} alt="social media basic plan" />
            <h3>Advanced</h3>
            <span>Most Popular</span>
          </div>
          <div className="card_details">
            <ol>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Writing interactive and marketing ideas
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Follow hashtags and trends related to the nature of the
                  company’s work and include them in publications
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Prepare a business plan for 3 months
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Connect all social media{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Design of 30 posts
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create 15 simple videos to increase interaction for the
                  following platforms (Instagram, Twitter, Facebook, and
                  LinkedIn)
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create 12 simple montage videos (for Snapchat and Tik Tok)
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Writing a scenario and script for 18 videos that are filmed by
                  the client spontaneously{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Managing advertising campaigns for free
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create a monthly report
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create a QR code for social media accounts{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  Create a welcome response to me
                </p>
              </li>
            </ol>
          </div>
          <div className="card_price">
            <p>
              <sup>SAR</sup>3499<sub>/Month</sub>
            </p>
          </div>
          <button className="card_button">Order Now</button>
        </div>
        <div className="socialMedia_wrapper">
          <div className="card_header">
            <img src={imgBasic} alt="social media basic plan" />
            <h3>Premium</h3>
          </div>
          <div className="card_details">
            <ol>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Writing interactive and marketing ideas
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Follow hashtags and trends related to the nature of the
                  company’s work and include them in publications
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Prepare a business plan for 3 months
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Connect all social media{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Design of 45 posts
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create 15 simple videos to increase interaction for the
                  following platforms (Instagram, Twitter, Facebook, and
                  LinkedIn)
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create 15 simple montage videos (for Snapchat and Tik Tok)
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Writing a scenario and script for 45 videos that are filmed by
                  the client spontaneously{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Managing advertising campaigns for free
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create a monthly report
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create a QR code for social media accounts{" "}
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  Create a welcome response to me
                </p>
              </li>
            </ol>
          </div>
          <div className="card_price">
            <p>
              <sup>SAR</sup>5199<sub>/Month</sub>
            </p>
          </div>
          <button className="card_button">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default MedalsBox;
