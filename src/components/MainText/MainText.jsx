import React from "react";
import { BsArrowRight } from "react-icons/bs";
import './maintext.css'
import 'animate.css';

function MainText() {
  return (
    <div data-aos="fade-right"data-aos-duration="2000">
      <p class="animate__animated animate__fadeInLeft " id='hello'>HELLO WORLD!</p>
      <h1 class="animate__animated animate__fadeInLeft animate__delay-1s"  id='mainh1'>We are creative agency. We build digital work that you will love!</h1>
      <button class="animate__animated animate__fadeInUp animate__delay-1s"  id='mainexplore'>Explore our portfolio <BsArrowRight id='arrowicon' /> </button>
    </div>
  );
}

export default MainText;
