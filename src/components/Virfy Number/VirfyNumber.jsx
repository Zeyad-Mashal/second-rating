import React from "react";
import "./VirfyNumber.css";
import logo from "../../images/logo.png";
const VirfyNumber = () => {
  return (
    <section className="virfyNumber">
      <div className="virfy_container">
        <img src={logo} alt="" width={200} />
        <h2>قم بإضافة 6 ارقام من كود التحقق</h2>
        <h5>يتم كتابة الكود من اليمين الي اليسار</h5>
        <div className="virfy_content">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <button>تحقق</button>
      </div>
    </section>
  );
};

export default VirfyNumber;
