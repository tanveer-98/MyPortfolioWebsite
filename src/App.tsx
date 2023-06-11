import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Who from './components/Who'
import Works from './components/Skills'
import styled from 'styled-components';


const Container = styled.div`
height : 100% ; 
background-color : rebeccapurple;
 scroll-snap-type : y  mandatory;
 scroll-behavior : smooth; 
 overflow-y : auto ;
 color : white;
//  background-color: blue;
 background: url("./img/bg.jpeg");
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 scrollbar-width: none; 
 &::-webkit-scrollbar{
  display: none;
 }
`;


function App() {

  return (
   <Container>
      <Hero/>
      <Works/>      
      <Contact/>
      <Who/>
    </Container>
  )
}

export default App
