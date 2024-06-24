import React from "react";
import "./CardBox.css";
import card1 from "../../images/card.jpg";
import card2 from "../../images/card1.jpg";
import card3 from "../../images/card2.jpg";
import card4 from "../../images/card3.jpg";
import card5 from "../../images/card4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const CardBox = () => {
  return (
    <section className="cardBox">
      <div className="cardBox_container">
        <h2>منتاجات NFC</h2>
        <Link to={"/all-Cards"}>
          <p>إظهار الكل</p>
        </Link>
        <div className="cards_list">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="cards_item">
                <img src={card1} alt="" />
                <div className="card_content">
                  <h4>عنوان البطاقة</h4>
                  <p>100.00 ريال</p>
                </div>
                <div>
                  <button>أضف الي السلة</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cards_item">
                <img src={card2} alt="" />
                <div className="card_content">
                  <h4>عنوان البطاقة</h4>
                  <p>100.00 ريال</p>
                </div>
                <div>
                  <button>أضف الي السلة</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cards_item">
                <img src={card3} alt="" />
                <div className="card_content">
                  <h4>عنوان البطاقة</h4>
                  <p>100.00 ريال</p>
                </div>
                <div>
                  <button>أضف الي السلة</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cards_item">
                <img src={card4} alt="" />
                <div className="card_content">
                  <h4>عنوان البطاقة</h4>
                  <p>100.00 ريال</p>
                </div>
                <div>
                  <button>أضف الي السلة</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cards_item">
                <img src={card5} alt="" />
                <div className="card_content">
                  <h4>عنوان البطاقة</h4>
                  <p>100.00 ريال</p>
                </div>
                <div>
                  <button>أضف الي السلة</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CardBox;
