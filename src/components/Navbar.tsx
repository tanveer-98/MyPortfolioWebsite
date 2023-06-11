import React from 'react'
import {styled, css} from 'styled-components';

interface ListProps{
    hover ? : boolean;
}

const Section = styled.div`
  display:flex;
  justify-content:center;
`

const Container = styled.div`
width: 100%;
display: flex;
gap:30px;           
justify-content:space-between;
align-items:center;
padding:10px;                                                                                          

 }
`
const Icons = styled.div`
display:flex;
gap:20px;
`  
const Links  = styled.div`
gap:30px;
display : flex ;
${props =>`
      /* Media query styles */
      @media (max-width: 768px) {
        display:flex ;
        flex-direction: column;
      }

      @media (max-width: 480px) {
        /* Styles for screens up to 480px */
      }
    `}

`
const Logo  = styled.img`
height:50px;`
const List  = styled.ul`
align-items:center;
gap:20px;
display:flex;
list-style:none;
font-family: Poppins, sans-serif;
${props =>`
      /* Media query styles */
      @media (max-width: 768px) {
        display :none;
      }

      @media (max-width: 480px) {
        height:20px;
        width:20px;
      }
    `}

`
const ListItem  = styled.li<ListProps>`
cursor:pointer;
font-family:Poppins, sans-serif;
font-size: 1.2
&:hover{
    color:black;
}
`
const Icon  = styled.img`
height:30px;
width:30px;
${props =>`
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
`
const Button  = styled.button`
width: 100px;
padding:0 10px;
background-color: #da4ea2;
color:white; 
border-radius: 5px;
cursor:pointer;
border:none;
&:hover{
    background-color: #0132fb
}
`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo className="h-[50px] w-[100px]" src = "./img/logo.png"/>

            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons >
                <Icon src="./img/search.png"/>
                <Button>  Hire Me </Button>


            </Icons>


        </Container>

    </Section>
  )
}

export default Navbar