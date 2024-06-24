import React from "react";
import "./AllCards.css";
import cardImage1 from "../../images/card1.jpg";
import cardImage2 from "../../images/card2.jpg";
import cardImage3 from "../../images/card3.jpg";
import { Link } from "react-router-dom";
const AllCards = () => {
  return (
    <section className="cards_preview">
      <div className="cards_preview_container">
        <div className="cards_preview_list">
          <div className="cards_preview_item">
            <img src={cardImage1} alt="second rating card" />
            <div className="card_content">
              <h4>عنوان البطاقة</h4>
              <p>100.00 ريال</p>
            </div>
            <div className="btns_card">
              <button>أضف الي السلة</button>
              <Link to={"/create"}>
                <button>تصميم البطاقة</button>
              </Link>
            </div>
          </div>
          <div className="cards_preview_item">
            <img src={cardImage1} alt="second rating card" />
            <div className="card_content">
              <h4>عنوان البطاقة</h4>
              <p>100.00 ريال</p>
            </div>
            <div>
              <button>أضف الي السلة</button>
              <Link to={"/create"}>
                <button>تصميم البطاقة</button>
              </Link>
            </div>
          </div>
          <div className="cards_preview_item">
            <img src={cardImage2} alt="second rating card" />
            <div className="card_content">
              <h4>عنوان البطاقة</h4>
              <p>100.00 ريال</p>
            </div>
            <div>
              <button>أضف الي السلة</button>
              <Link to={"/create"}>
                <button>تصميم البطاقة</button>
              </Link>
            </div>
          </div>
          <div className="cards_preview_item">
            <img src={cardImage2} alt="second rating card" />
            <div className="card_content">
              <h4>عنوان البطاقة</h4>
              <p>100.00 ريال</p>
            </div>
            <div>
              <button>أضف الي السلة</button>
              <Link to={"/create"}>
                <button>تصميم البطاقة</button>
              </Link>
            </div>
          </div>
          <div className="cards_preview_item">
            <img src={cardImage3} alt="second rating card" />
            <div className="card_content">
              <h4>عنوان البطاقة</h4>
              <p>100.00 ريال</p>
            </div>
            <div>
              <button>أضف الي السلة</button>
              <Link to={"/create"}>
                <button>تصميم البطاقة</button>
              </Link>
            </div>
          </div>
          <div className="cards_preview_item">
            <img src={cardImage3} alt="second rating card" />
            <div className="card_content">
              <h4>عنوان البطاقة</h4>
              <p>100.00 ريال</p>
            </div>
            <div>
              <button>أضف الي السلة</button>
              <Link to={"/create"}>
                <button>تصميم البطاقة</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCards;
