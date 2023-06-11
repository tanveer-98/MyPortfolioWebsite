import React, { useState } from "react";
import { styled, css } from "styled-components";

const Wave = styled.div`
  position: relative;
  font-size: 3rem;
  display: inline-block;
  transform: translate3d(0px, 0px, 0.1px);
  transform-origin: 60% 70%;
  user-select: none;
  animation: wave-animation 0.5s ease-in-out infinite;
  animation-play-state: running;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @keyframes wave-animation {
    0%,
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    50% {
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);
    }
  }
`;

const HoverTip = styled.div`
  font-size: 12px;
  color: black;
`;
const HoverContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  //  width: 100%;
  display: inline-block;
  padding: 10px;
  border-radius: 50px;
  position: absolute;
  top: 0;
`;

const AnimatedHand = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Wave
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        👋
        {visible ? (
          <HoverContainer>
            <HoverTip>I wont Stop</HoverTip>
          </HoverContainer>
        ) : (
          ""
        )}
      </Wave>
    </>
  );
};

export default AnimatedHand;
