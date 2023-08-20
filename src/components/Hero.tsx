import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import AnimatedHand from './AnimatedHand';
import { SectionWrapper } from '../hoc/SectionWrapper';

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Container = styled.div`
  height:100vh;

  scroll-snap-align: center;
  width: 90%;
  display: flex;
  // align-items:center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height : 100%;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 4.5vw;
  font-weight: bold;
  display:block;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const SubTitle = styled.h1`
  font-size: 2.4vw;
  font-weight: bold;
  font-family: "Roboto", "sans-serif";
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  // display : flex;
  position: relative;
 
  @media only screen and (max-width: 768px) {
    flex: 0;
    height: 300px;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin: 0px auto;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;


import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <motion.div>
        <Left>
          <Title className="font-roboto">
            Hi !   <div className="flex justify-center items-center">
              <div className="text-purple-400">I am Tanveer <AnimatedHand/></div> 
           
              </div>
          </Title>
          <WhatIDo>
            <Line src="./img/line.png"></Line>
            <Subtitle>What I Do ?</Subtitle>
          <SubTitle>
            I am  a Full Stack Developer
          </SubTitle>
          </WhatIDo>
          <Desc>I enjoy Creating WebApps and Websites</Desc>
        </Left>
        </motion.div>
        <Right>
          {/* 3D model */}
          <Img src="./img/moon.png"/>
        </Right>
      </Container>

      
      
    </Section>
  )
}

export default Hero;