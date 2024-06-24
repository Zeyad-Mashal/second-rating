import React from "react";
import QR from "../../images/qr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import "./CreateCard.css";
const Create = () => {
  return (
    <section className="create_card_container">
      <div className="create_card_box">
        <h3>اهلا بك في ورشة ساكند ريتينج لتصميم البطاقات</h3>
        <div className="create_card_grid">
          <div className="card_view">
            <div className="card_model">
              <div className="card_model_top">
                <h4>Second Rating</h4>
                <FontAwesomeIcon icon={faWifi} />
              </div>
              <div className="card_model_bottom">
                <h4>اسمك هنا</h4>
                <img src={QR} alt="QR code" />
              </div>
            </div>
            <div className="card_model card_back">
              <div className="card_model_bottom card_back_view">
                <img src={QR} alt="QR code" />
              </div>
            </div>
          </div>
          <div className="card_controls">
            <h3>صمم بطاقتك من هنا</h3>
            <input type="text" placeholder="اسمك علي البطاقة" />
            {/* <input
              className="select-input"
              multiple
              type="file"
              name="images"
              accept=".png, .jpg, .jpeg, .webp"
            /> */}
            <input type="text" placeholder="الصورة علي ظهر البطاقة" />
            <input type="text" placeholder="اكتب اسم اللون " />
            <button className="create_btn">حفظ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
