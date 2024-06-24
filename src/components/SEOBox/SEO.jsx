import React from "react";
import "./SEoBox.css";
import imgBasic from "../../images/plan Basic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const SEO = () => {
  return (
    <section className="socialMedia">
      <div>
        <h2>SEARCH ENGINE OPTIMIZATION (SEO)</h2>
      </div>
      <div className="wrapper_container">
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
                  setup console & analytics
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  onpage optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  improve user experience
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  technical seo
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  speed audit
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  monthly report
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  fix technical issue
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  keywords & content recommendation
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  content creation
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  local seo optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  off page optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  competitors analysis
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  setup google tag maneger
                </p>
              </li>
            </ol>
          </div>
          <div className="card_price">
            <p>
              <sup>SAR</sup>999<sub>/Month</sub>
            </p>
          </div>
          <button className="card_button">Order Now</button>
        </div>
        <div className="socialMedia_wrapper">
          <div className="card_header">
            <img src={imgBasic} alt="social media basic plan" />
            <h3>Advanced</h3>
          </div>
          <div className="card_details">
            <ol>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  setup console & analytics
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  onpage optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  improve user experience
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  technical seo
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  speed audit
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  fix technical issue
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  keywords & content recommendation
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  content creation
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  monthly report
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  local seo optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  off page optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  competitors analysis
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faXmark} className="noCheck" />
                  setup google tag maneger
                </p>
              </li>
            </ol>
          </div>
          <div className="card_price">
            <p>
              <sup>SAR</sup>1999<sub>/Month</sub>
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
                  setup console & analytics
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  onpage optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  improve user experience
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  technical seo
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  speed audit
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  monthly report
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  fix technical issue
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  keywords & content recommendation
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  content creation
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  local seo optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  off page optimization
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  competitors analysis
                </p>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="check" />
                  setup google tag maneger
                </p>
              </li>
            </ol>
          </div>
          <div className="card_price">
            <p>
              <sup>SAR</sup>2999<sub>/Month</sub>
            </p>
          </div>
          <button className="card_button">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default SEO;
