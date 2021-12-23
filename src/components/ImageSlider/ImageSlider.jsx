import React, { useState, useEffect } from "react";
import styled from "styled-components";
import './imageslider.css';

const BottomWrapper = styled.div`
  display: flex;
  padding:70px 50px;
  width:100%;
  justify-content:space-between;

  @media only screen and (max-width: 750px) {
    padding:0px 0px;
    justify-content:space-around;
  
  }

`;

const Textbottom = styled.div`
  color:#ffffffcb;
  font-weight: 300;
`;
const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items:flex-end;
`;

const Dot = styled.div`
  width: 5.5vw;
  height: 4px;
  background-color: ${(props) => (props.isActive ? "#FF9700" : "white")};
  margin: 3px;
  transition: 750ms all ease-in-out;
`;

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <BottomWrapper>
        <Textbottom>
            <p id="art" >Artwork project</p>
            <h5 id="space" >Enjoy the space</h5>
        </Textbottom>
      <IndicatorWrapper>
        {Array(amountSlides)
          .fill(1)
          .map((_, i) => (
            <Dot
              key={i}
              isActive={currentSlide === i}
              onClick={() => nextSlide(i)}
            />
          ))}
      </IndicatorWrapper>
    </BottomWrapper>
  );
};

const Wrapper = styled.div`
  height: 70%;
  width:100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  margin-top: 120px;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: contain;
  background-repeat:no-repeat; 
  transition: 750ms all ease-in-out;
`;

const Gradient = styled.div`
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 5000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <>
      <Wrapper {...props}>
        {images.map((imageUrl, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          ></Slide>
        ))}
      </Wrapper>
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
    </>
  );
};

export default ImageSlider;
