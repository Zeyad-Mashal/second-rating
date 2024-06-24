import React from "react";
import "./CardBanner.css";
import { Link } from "react-router-dom";
const CardBanner = () => {
  return (
    <section className="banner_card">
      <div className="banner_card_container">
        <h3>عروض بطاقات سكند ريتينج</h3>
        <p>اختر بطاقتك المميزة ألان من سكندر ريتنج مع خاصية تصميم البطاقة</p>
        <button>
          <Link to={"/create"}>قم بتصميم بطاقاتك الان</Link>
        </button>
      </div>
    </section>
  );
};

export default CardBanner;
