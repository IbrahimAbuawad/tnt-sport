import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import firstSvg from "../../images/Web-design-icon.svg";
import secondSvg from "../../images/Planning-icon.svg";
import thirdSvg from "../../images/Web-icon.svg";
import "./services.css";

function Services() {
  return (
    <div id="servcontainer">
      <div>
        <img src={firstSvg} alt="first" />
        <h4>Web Design</h4>
        <p>
          Sed ut perspiciatis unde omni iste natus error sit volunteer
          accusantum doloremque.{" "}
        </p>
        <IoIosArrowDropright
          className="circlearrow"
          size="30px"
          color="#DF0D25"
        />
      </div>
      <div>
        <img src={secondSvg} alt="second" />
        <h4>Digital Artwork</h4>
        <p>Sed ut perspiciatis unde omni iste natus </p>
        <IoIosArrowDropright
          className="circlearrow"
          size="30px"
          color="#0071D8"
        />
      </div>
      <div>
        <img src={thirdSvg} alt="third" />
        <h4>Website Development</h4>
        <p>
          Sed ut perspiciatis unde omni iste natus error sit volunteer
          accusantum doloremque. Ut perspiciatis unde omni iste natus error sit
          volunteer accusantum doloremque.
        </p>
        <IoIosArrowDropright
          className="circlearrow"
          size="30px"
          color="#00D879"
        />
      </div>
    </div>
  );
}

export default Services;
