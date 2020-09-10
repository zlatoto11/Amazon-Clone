import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828641_.jpg"
          alt=""
        ></img>

        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
            rating={5}
          />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          {" "}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
