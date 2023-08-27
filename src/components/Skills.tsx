import React from 'react'
import styled from 'styled-components';
import { SectionWrapper } from '../hoc/SectionWrapper';

const SkillsList = [
  "ReactJS",
  "ReduxJS",
  "NodeJS",
  "MongoDB",
  "ExpressJS",
  "SpringBoot",
  "SQL"
]

const Section = styled.div`
    // height: 100vh;
    // margin-top :200px;
    @media only screen and (width: 768px) {
      // margin-top : -100px;
    }
    // background-color:white;
    scroll-snap-align : center;
    display: flex;
    justify-content : center;
`
const Container  = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`

const Left = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex:1
`
const Right = styled.div`
flex:1 ;

`
const List = styled.ul`
flex:1 ;

`
// @ts-ignore
const ListItem = styled.li`
font-size: 60px;
font-weight: bold;
cursor:pointer;
color:transparent;
-webkit-text-stroke:1px white;
position: relative;

@media only screen and (max-width: 768px) {
  font-size: 40px;
}

&::after{

  content:'${props =>props.children?.toString()}';
  position: absolute;
  top: 0 ; 
  left: 0 ; 
  color:white;
  width:0;
  overflow:hidden;
}

&:hover {
  &::after{
    animation: moveText 0.5s linear;
    @keyframes moveText {
      to{
        width: 100%;
      }
    }

  }
}
`
const Skills = () => {
  return (
    <Section> 
      <Container>
          <List>
            {SkillsList.map((skill)=>{
               return <ListItem>{skill}</ListItem> 
              })
            }
          </List>
        {/* <Left>
        </Left> */}
        {/* <Right>
          
        </Right> */}
      </Container>

    </Section>
  )
}

export default SectionWrapper(Skills,"");