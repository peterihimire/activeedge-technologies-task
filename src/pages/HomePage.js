import React from "react";
import Banner from "../components/Banner";
import ArtistList from "../components/ArtistList";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        {/* <Navbar /> */}
        <Banner />
        <div className="main-content">
          <div className="main-content-container">
            <ArtistList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
