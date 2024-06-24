import React from "react";
import "./HeroBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnapchat,
  faInstagram,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
const HeroBanner = () => {
  return (
    <section className="banner_hero">
      <h3>اهلا بكم في سكند ريتينج</h3>
      <p>تواصل معنا بشكل سريع من خلال مواقع التواصل الاجتماعي</p>
      <div className="social">
        <FontAwesomeIcon icon={faSnapchat} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
    </section>
  );
};

export default HeroBanner;
