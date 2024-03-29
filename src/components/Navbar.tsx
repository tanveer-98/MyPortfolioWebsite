import React, { useState } from "react";
import { styled, css } from "styled-components";
import { Link } from "react-scroll";
interface ListProps {
  hover?: boolean;
}


const Section = styled.div`
  display: flex;
  width: 100%;
  position :fixed;
  top:0;
  justify-content: center;
 
  
   z-index: 1000;

`;

const Container = styled.div`
width: 100%;
// background-color : #ffffff;
display: flex;
gap:30px;           
justify-content:space-around;
align-items:center;
padding:10px;     
background: 'red'                                                                                     

 }
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
`;
const Links = styled.div`
  gap: 30px;
  display: flex;
  ${(props) => `
      /* Media query styles */
      @media (max-width: 768px) {
        display:flex ;
        flex-direction: column;
      }

      @media (max-width: 480px) {
        /* Styles for screens up to 480px */
      }
    `}
`;
const Logo = styled.img`
  height: 50px;
  filter: drop-shadow(10px 10px 3px #ffffff);
`;
const List = styled.ul`
  align-items: center;
  gap: 20px;
  display: flex;
  list-style: none;
  font-family: Poppins, sans-serif;
  ${(props) => `
      /* Media query styles */
      @media (max-width: 768px) {
        display :none;
      }

      @media (max-width: 480px) {
        height:20px;
        width:20px;
      }
    `}
`;
const ListItem = styled.li<ListProps>`
  cursor: pointer;
  font-family: "Roboto", cursive;
  font-size: 1.2rem;
  &:hover {
    color: #9f2b68;
  }
`;
const Icon = styled.img`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
  ${(props) => `
      /* Media query styles */
      @media (max-width: 768px) {
        height:20px;
        width:20px;
      }

      @media (max-width: 480px) {
        height:20px;
        width:20px;
      }
    `}
`;
const Button = styled.button`
  width: 100px;
  padding: 0 10px;
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #0132fb;
  }
`;

import File from "../assets/Tanveer_Ahmed_Resume.pdf";

const Navbar = () => {
  const [navcolor , setnavcolor] = useState(false);
  window.addEventListener('scroll', () => {
    const yPos = window.scrollY;
    if(yPos >100 ){
        setnavcolor(true);
    }
    else setnavcolor(false)
  
  }, {passive : true});
  
  return (
    <Section className={` transition-all duration-500 py-2  ${navcolor ? "bg-black bg-opacity-70 shadow-sm shadow-gray-400" : ""}  `}>
      <Container>
      <div className="flex gap-10">

        <Links>
          <Logo className="h-[50px] w-[100px]" src="./img/logo.png" />

          <List>
            <ListItem>Home</ListItem>
            {/* <ListItem>Studio</ListItem> */}
            <ListItem>
              <Link
                activeClass="active"
                className=""
                to="works"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
              >
                Works
              </Link>
            </ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>
              <Link
                activeClass="active"
                className=""
                to="socials"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
              >
                Socials
              </Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          {/* <Icon src="./img/search.png"/> */}
          <Button>
            <a href={File} download={File}>
              {" "}
              Resume
            </a>
          </Button>
        </Icons>
      </div>
      </Container>
    </Section>
  );
};

export default Navbar;
