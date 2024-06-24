import React from "react";
import "./Rejester.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Rejester = () => {
  return (
    <section className="register">
      <div className="register_container">
        <h2>أنشاء حساب جديد</h2>
        <div className="register__form">
          <input type="email" placeholder="قم يإدخال الايميل" />
          <input type="password" placeholder="قم بإدخال الرقم السري" />
          <input type="number" placeholder="قم بإدخال رقم الهاتف" />
          <Link to={"/virfy-number"}>
            <button className="register_login_btn">تسجيل دخول</button>
          </Link>
        </div>
        <div className="go_to_login">
          <p>
            <Link to={"/login"}>لدي حساب بالفعل</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rejester;
