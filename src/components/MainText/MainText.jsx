import React from "react";
import { BsArrowRight } from "react-icons/bs";
import './maintext.css'
function MainText() {
  return (
    <div>
      <p id='hello'>HELLO WORLD!</p>
      <h1  id='mainh1'>We are creative agency. We build digital work that you will love!</h1>
      <button id='mainexplore'>Explore our portfolio <BsArrowRight id='arrowicon' color='white'/> </button>
    </div>
  );
}

export default MainText;
