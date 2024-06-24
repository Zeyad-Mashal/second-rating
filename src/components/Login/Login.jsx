import React from "react";
import "./Rejester.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="register">
      <div className="register_container">
        <img src={logo} alt="" width={120} />
        <h2>تسجيل الدخول</h2>
        <div className="register__form">
          <input type="email" placeholder="قم يإدخال الايميل" />
          <input type="password" placeholder="قم بإدخال الرقم السري" />
          <button className="register_login_btn">تسجيل الدخول</button>
        </div>
        <div className="go_to_login">
          <p>
            <Link to={"/rejester"}>انشاء حساب / ليس لدي حساب</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
