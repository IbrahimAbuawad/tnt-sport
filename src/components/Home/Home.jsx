import React from "react";
import ArtWork from "../ArtWork/ArtWork";
import Header from "../Header/Header";
import MainText from "../MainText/MainText";
import Services from "../Services/Services";
import './home.css'
function Home() {
  return (
    <div id="container">
      <div id="leftside">
        <Header />
        <div id='main'>
          <MainText />
          <Services />
        </div>
      </div>
      <div id="rightside">
        <ArtWork />
      </div>
    </div>
  );
}

export default Home;
