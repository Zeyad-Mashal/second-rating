import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnapchat,
  faInstagram,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div>
          <div className="footer_top">
            <h3>بطاقة العمل الرقمية الذكية</h3>
            <p>شارك كل شيء بلمسة وحده</p>
          </div>
          <div className="social">
            <FontAwesomeIcon icon={faSnapchat} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </div>
        <div className="footer_bottom">
          <div>
            <h3>صمم بطاقتك الان</h3>
            <p>بطاقات</p>
          </div>
          <div>
            <h3>تعلم واحصل على المساعدة</h3>
            <p>اتصل بنا</p>
            <p>الأجهزة المتوافقة</p>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 Second Rating Saudi Arabia. كل الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
