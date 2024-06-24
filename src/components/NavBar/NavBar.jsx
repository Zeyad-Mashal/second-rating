import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const openMenu = () => {
    document
      .querySelector(".mobile_menu")
      .classList.replace("closeMenu", "openMenu");
  };
  const closeMenu = () => {
    document
      .querySelector(".mobile_menu")
      .classList.replace("openMenu", "closeMenu");
  };
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    if (window.scrollY >= 90) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleNavbar);
  return (
    <header className={nav ? "header_top" : "header"}>
      <nav>
        <img src={logo} alt="second rating logo" />

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">our products</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
        <div className="menu_cart">
          <button
            class="btn cart_icon"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">
                انا السلة
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">...</div>
          </div>
          <a onClick={openMenu} className="menu_control">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </a>
        </div>
      </nav>
      <ul className="mobile_menu closeMenu">
        <li className="close" onClick={closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">our products</a>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
