import React from "react";
import ArtWork from "../ArtWork/ArtWork";
import Header from "../Header/Header";
import MainText from "../MainText/MainText";
import Services from "../Services/Services";
import "./home.css";
function Home() {
  return (
    <>
      <div id="container">
        <div class="leftside">
          <Header />
          <div class="main">
            <MainText />
            <Services />
          </div>
        </div>
        <div class="rightside">
          <ArtWork />
        </div>
      </div>

      <div id="container2">
       
          <Header />
        <div class="rightside">
          <ArtWork />
        </div>
        <div class="leftside">
          <div class="main">
            <MainText />
            <Services />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
