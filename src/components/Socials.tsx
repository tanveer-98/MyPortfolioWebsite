import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align : center;
`
const Container = styled.div`
    
    scroll-snap-align : center;
    display:flex;
    justify-content : center;
    align-items:center;
    width:100%;
`



const  Socials = () => {
  return (
    <Section>
      <Container>
          Contact
      </Container>
    </Section>
  )
}

export default  Socials;