import React from "react";
import logo from "../images/HornLogoSilver.png";
import "../sass/main.css";

const Navbar = () => {
  return (
    <div>
      <section className="navbar">
        <div className="navbar__block">
          <div>
            <img src={logo} alt="site logo" className="hornLogo"></img>
          </div>
          <div>
            <ul className="navbar__items">
              <li>
                <a href="#home" class="navbar__items--link">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" class="navbar__items--link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" class="navbar__items--link">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" class="navbar__items--link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <h1 className="navbar__squiggle">i</h1> */}
    </div>
  );
};

export default Navbar;
