import React from "react";
import Navbar from "../components/Navbar";
import Liz from "../images/LizSmirk.png";
import "../sass/main.css";

const Home = () => {
  return (
    <div className="overlay">
      <Navbar />
      <div>
        <img src={Liz} alt="landing portrait" className="homeBgImg"></img>
        <div className="landingText">
          <div class="container">
            <div class="box">
              <div class="title">
                <span class="block"></span>
                <h1>
                Elizabeth Regas<span></span>
                </h1>
              </div>

              <div class="role">
                <div class="block"></div>
                <p>UX / UI Developer </p>
              </div>
            </div>
          </div>

          {/* <p className="landingText__description">Creator of Solutions .</p>
          <p className="landingText__description">Manipulator of the DOM .</p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
