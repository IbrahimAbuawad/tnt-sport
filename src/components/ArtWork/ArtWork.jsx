import React from "react";
import Carousel from "react-bootstrap/Carousel";
import shose1 from "../../images/Group1.svg";
import shose2 from "../../images/Group2.svg";
import shose3 from "../../images/Group4.svg";
import styled from "styled-components";
import ImageSlider from '../../components/ImageSlider/ImageSlider';


// import "bootstrap/dist/css/bootstrap.min.css";

import "./artwork.css";

function ArtWork() {
  return (
  
    <ImageSlider images={[shose1, shose2, shose3]}>
    
    </ImageSlider>
 
  );
}

export default ArtWork;
